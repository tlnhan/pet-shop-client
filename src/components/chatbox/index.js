import React, { useState, useEffect, useRef } from "react";
import "./index.css";

const Chatbox = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [bubbleClicked, setBubbleClicked] = useState(false);
  const chatboxRef = useRef(null);

  const handleToggleBubble = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
    setBubbleClicked(true);
  };

  const handleToggleExpand = (e) => {
    const isInputField = e.target.tagName.toLowerCase() === "input";
    const isCollapseButton = e.target.classList.contains("collapse-button");

    const isInsideChatbox = chatboxRef.current.contains(e.target);

    if (!isInputField && !isCollapseButton && !isInsideChatbox) {
      setIsExpanded((prevExpanded) => !prevExpanded);
    }
  };

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const userResponse = {
      role: "user",
      content: userMessage,
      position: "right",
      name: "Tôi",
    };

    setChatHistory((prevChat) => [...prevChat, userResponse]);
    setUserMessage("");

    setIsTyping(true);

    try {
      const openAiResponse = await fetchOpenAiResponse(userMessage);
      const openAiMessage = {
        role: "openai",
        content: openAiResponse.reply,
        position: "left",
        name: "OpenAi",
      };
      setChatHistory((prevChat) => [...prevChat, openAiMessage]);
    } catch (error) {
      console.error(error);
    }

    setIsTyping(false);
  };

  const fetchOpenAiResponse = async (userMessage) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const response = await fetch("http://127.0.0.1:9090/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("OpenAI request failed");
      }

      const data = await response.json();
      return { reply: data.reply };
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const chatHistoryContainer = document.getElementById(
      "chat-history-container"
    );

    if (chatHistoryContainer) {
      chatHistoryContainer.scrollTop = chatHistoryContainer.scrollHeight;

      const handleOutsideClick = (e) => {
        if (
          chatboxRef.current &&
          !chatboxRef.current.contains(e.target) &&
          !bubbleClicked
        ) {
          setIsExpanded(false);
        }

        setBubbleClicked(false);
      };

      document.addEventListener("click", handleOutsideClick);

      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }
  }, [bubbleClicked, chatboxRef, chatHistory]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        chatboxRef.current &&
        !chatboxRef.current.contains(e.target) &&
        !bubbleClicked
      ) {
        setIsExpanded(false);
      }

      setBubbleClicked(false);
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [bubbleClicked]);

  return (
    <div
      className={`chatbox ${isExpanded ? "expanded" : ""}`}
      onClick={(e) => handleToggleExpand(e)}
      ref={chatboxRef}
    >
      {!isExpanded && (
        <div className="bubble-toggle" onClick={handleToggleBubble}>
          Chat
        </div>
      )}

      {isExpanded && (
        <div className="expanded-content">
          <div id="chat-history-container" className="chat-history">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.role} ${msg.position}`}
              >
                <strong>{msg.name}:</strong> {msg.content}
              </div>
            ))}
            {isTyping && (
              <div className="message openai left">OpenAI đang trả lời...</div>
            )}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Nhập câu hỏi..."
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSendMessage();
              }}
            >
              Gửi
            </button>
          </div>
          <button
            className="collapse-button"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            &#8722;
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbox;

import { Link } from 'react-router-dom';
import * as React from "react";
import Footer from "../footer";
import Header from "../header";
import {useState} from 'react';
import { paste } from '@testing-library/user-event/dist/paste';

function Login() {
    
    const [state, setState] = useState({selector:'', rules:[]});
    var isAll_Valid={'user':false,'tel':false,'email':true, 'password':false, 'confirm-password':false};
    // var handleBlur=()=>{}
    var isFill=(value)=>{
        return (value||oninput==true)? undefined :'Không được để trống trường này!' 
    } 
    var isEmail=(value)=>{
        var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value){
            return (regex.test(value) || oninput ==true)? undefined : 'Vui lòng nhập một địa chỉ email hợp lệ!'
        }
    }
    var isConfirm=(value, passwordValue)=>{
        return (value==passwordValue)? undefined :'Nhập lại mật khẩu không chính xác!'
            
    }
    if(state!=''){
        var submitValid=false;
        var submitElement=document.querySelector('#submit');

        function Validate(checkElement, rule, messageElement, isInner, oninput, passwordValue){
            
            switch(rule){
                case 'isFill':{
                    var messageValue=isFill(checkElement.value, oninput);
                    break;
                }
                case 'isEmail':{
                    var messageValue=isEmail(checkElement.value, oninput);
                    break;
                }
                case 'isConfirm':{
                    var messageValue=isConfirm(checkElement.value, passwordValue);
                    break;
                }
            }
            if(messageValue){
                if(isInner){messageElement.innerText=messageValue;}
                messageElement.classList.add('text-red-500');
                submitElement.classList.add('hover:bg-red-600');
                isAll_Valid[checkElement.id]=false;
            }else{
                if(isInner){messageElement.innerText='';}
                messageElement.classList.remove('text-red-500');
                isAll_Valid[checkElement.id]=true;
                
                if(isAll_Valid['user'] &&isAll_Valid['password'] &&isAll_Valid['password']&&isAll_Valid['email']&&isAll_Valid['confirm-password']){
                    submitValid=true;
                    submitElement.classList.remove('hover:bg-red-600');
                }
            }
        }
        if(state.selector=='submit')
        {
            var submitElement = document.querySelector('#submit');
            submitElement.onclick=()=>{
                var checkElements = document.querySelectorAll('.require');
                checkElements.forEach((checkElement)=>{
                    var messageElement=checkElement.parentElement.querySelector('.form-message');
                    var rule='isFill';
                    if(checkElement.id=='confirm-password'){
                        var passWordElement=document.querySelector('#password');
                        if(checkElement.value){
                            var rule='isConfirm';
                        Validate(checkElement, rule, messageElement, true, false, passWordElement.value);
                        }else{
                            Validate(checkElement, rule, messageElement, true, false);
                        }
                        
                    }else{
                        Validate(checkElement, rule, messageElement, true, false);
                    }
                })
                if(submitValid){
                    
                    // 
                    console.log('Đăng nhập thành công!')
                }else{
                    
                }
            }
        }else{
            state.rules.forEach((rule)=>{
                var checkElement=document.querySelector(`#${state.selector}`);
                var messageElement=checkElement.parentElement.querySelector('.form-message');
                checkElement.onblur=()=>{
                    var oninput=false;
                    Validate(checkElement, rule, messageElement, true, oninput);
                    var requireElements = document.querySelectorAll('.require');
                    requireElements.forEach((checkElement)=>{
                        var messageElement=checkElement.parentElement.querySelector('.form-message');
                        
                        var rule='isFill';
                        
                        if(checkElement.id=='confirm-password'){
                            var passWordElement=document.querySelector('#password');
                            if(checkElement.value){
                                var rule='isConfirm';
                                Validate(checkElement, rule, messageElement, false, false, passWordElement.value);
                            }
                            else{
                                Validate(checkElement, rule, messageElement, false, false);
                            }
                            
                        }else{
                            Validate(checkElement, rule, messageElement, false, false);
                        }
                    })
                    var submitElement=document.querySelector('#submit')
                    if(isAll_Valid['user'] &&isAll_Valid['password'] &&isAll_Valid['password']&&isAll_Valid['email']&&isAll_Valid['confirm-password']){
                        submitValid=true;
                        submitElement.classList.remove('hover:bg-red-600');
                    }
                }
                checkElement.oninput=()=>{
                    var oninput=true;
                    Validate(checkElement, rule, messageElement, true, oninput)
                } 
            });
        }
    }

    return (
        <div>
            <Header />

                <div className="flex flex-col items-center mt-[60px] mb-[260px] text-[18px] max-sm:text-[16px] max-sm:w-screen max-sm:pl-[20px] pr-[30px]">
                    <div className="font-bold text-[200%] mb-[40px]">ĐĂNG KÝ</div>
                    <form 
                    action="" 
                    method="POST" 
                    id="form-1"
                    className='' 
                    >
                    <div className="mb-3">Các trường được đánh dấu <span className="text-[#e80000] text-[100%] font-extrabold">*</span> là bắt buộc</div>
                        <div className="mb-[25px]">

                            <label 
                            htmlFor="user"  
                            className="text-[100%] font-semibold">Tên đăng nhập<span className="text-[#e80000] font-extrabold">*</span>
                            </label><br />
                            <input 
                            id="user" 
                            placeholder='User123'
                            onFocus={e=>{if(!e.target.value)setState({selector:'user', rules:['isFill',]})}}
                            // onBlur={handleBlur}
                            type="text" 
                            className="border max-sm:w-[100%] py-3 w-[500px] pl-3 outline-none focus:outline-[#999999] require"
                            >
                                
                            </input>
                            <div className="form-message"></div>

                        </div>
                        <div className="mb-[25px]">

                            <label 
                            htmlFor="email"  
                            className="text-[100%] font-semibold">Email
                            </label><br />
                            <input 
                            placeholder='User@domain.com'
                            onFocus={e=>{if(!e.target.value)setState({selector:'email', rules:['isEmail',]})}}
                            // onBlur={handleBlur}
                            id="email" type="text" className="border max-sm:w-[100%] py-3 w-[500px] pl-3 outline-none focus:outline-[#999999]"></input>
                            <div className="form-message"></div>

                        </div>
                        <div className="mb-[25px]">

                            <label 
                            htmlFor="tel"  
                            className="text-[100%] font-semibold">Số điện thoại<span className="text-[#e80000] font-extrabold">*</span>
                            </label><br />
                            <input 
                            id="tel" 
                            placeholder='#### ### ###'
                            type="text" 
                            onFocus={e=>{if(!e.target.value)setState({selector:'tel', rules:['isFill',]})}}
                            // onBlur={handleBlur}
                            className="border max-sm:w-[100%] py-3 w-[500px] pl-3 outline-none focus:outline-[#999999] require">

                            </input>
                            <div className="form-message"></div>

                        </div>
                        <div className="mb-[25px]">

                            <label 
                            htmlFor="password"
                            className="text-[100%] font-semibold">Mật khẩu<span className="text-[#e80000] font-extrabold">*</span>
                            </label><br />
                            <input id="password" 
                            placeholder='******'
                            onFocus={e=>{if(!e.target.value)setState({selector:'password', rules:['isFill',]})}}
                            // onBlur={handleBlur}
                            type="password" 
                            className="border max-sm:w-[100%] py-3 w-[500px] pl-3 outline-none focus:outline-[#999999] require">

                            </input>
                            <div className="form-message"></div>

                        </div>
                        <div className="mb-[25px]">

                            <label 
                            htmlFor="confirm-password"  
                            className="text-[100%] font-semibold">Nhập lại mật khẩu<span className="text-[#e80000] font-extrabold">*</span>
                            </label><br />
                            <input 
                            id="confirm-password"
                            placeholder='******'
                            onFocus={e=>{if(!e.target.value)setState({selector:'confirm-password', rules:['isFill',]})}}
                            // onBlur={handleBlur}
                            type="password" 
                            className="border max-sm:w-[100%] py-3 w-[500px] pl-3 outline-none focus:outline-[#999999] require">

                            </input>
                            <div className="form-message"></div>

                        </div>
                        <div className="flex items-center justify-between">
                            <div>Bạn đã có tài khoản?<Link to='/Login' className="hover:font-medium text-[#e80000] mr-[10px]">Đăng nhập</Link></div>
                            <div id="submit" 
                            onMouseOver={e=>{setState({selector:'submit', rules:[]})}} className="flex rounded border w-32 h-14 text-white bg-black hover:bg-blue-600 hover:cursor-pointer ease-in duration-150 transition-colors"><span className=" m-auto">Đăng ký</span></div>
                        </div>
                    </form>

                </div>

            <Footer/>
        </div>


    )
}
export default Login;
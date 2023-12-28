import { isAxiosError } from "axios";
import Footer from "../footer";
import Header from "../header";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userAPI from "../api/userAPI";
function Login() {
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username: username,
            password: password
        }
        try {
            console.log(user);
            userAPI.login(user, navigate);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Header />
            <div className=" flex flex-col items-center mt-[60px] mb-[260px] text-[18px] max-sm:text-[16px] max-sm:pl-[20px] pr-[30px] max-sm:w-screen">
                <div className="font-bold text-[200%]  mb-[40px] ">ĐĂNG NHẬP</div>
                <form action="" method="POST" id="form-login" className="" >
                    <div className="mb-3">Các trường được đánh dấu <span className="text-[#e80000] text-[100%] font-extrabold">*</span> là bắt buộc</div>
                    <div className="mb-[25px]">
                        <label htmlFor="user" className="text-[100%] font-semibold">Tên đăng nhập<span className="text-[#e80000] font-extrabold">*</span></label><br />
                        <input placeholder="User123"
                            // onBlur={handleBlur}
                            value={username}
                            onChange={(e) => setUser(e.target.value)}
                            id="user" type="text" className="border max-sm:w-[100%] py-3 w-[500px] pl-3 outline-none focus:outline-[#999999] require"></input>
                        <div className="form-message"></div>
                    </div>
                    <div className="mb-[25px]">
                        <label htmlFor="password" className="text-[100%] font-semibold">Mật khẩu<span className="text-[#e80000] font-extrabold">*</span></label><br />
                        <input id="password"
                            value={password}
                            onChange={(e) => setPass(e.target.value)}
                            placeholder="******" type="password" className="border max-sm:w-[100%] py-3 w-[500px] pl-3 outline-none focus:outline-[#999999] require"
                        // onBlur={handleBlur}
                        >
                        </input>
                        <div className="form-message"></div>
                    </div>
                    <div className="flex items-center justify-between mr-[10px]">
                        <div>Bạn chưa có tài khoản?<Link to='/Signup' className="hover:font-medium text-[#e80000] mr-[10px]">Đăng ký ngay</Link></div>
                        <div id="submit"
                            onClick={handleSubmit}
                            className="flex rounded border w-32 h-14 text-white bg-black hover:bg-blue-600 hover:cursor-pointer ease-in duration-150 origin-center"><span className=" m-auto">Đăng nhập</span></div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default Login;
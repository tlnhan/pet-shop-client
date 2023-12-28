import Footer from "../footer";
import Header from "../header";
import { Component } from "react";
import { FaStore } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
class Contact extends Component {
    constructor(props) {
        super(props);
    }
    FormEvent = () => {
        this.Validator(
            {
                form: '#form-1',
                rules: [
                    this.isRequire('#fullName'),
                    this.isRequire('#mess'),
                    this.isEmail('#email')
                ]
            }
        );
    }
    Validator = (options) => {
        // Lấy ra form cần validate
        var formElement = document.querySelector(options.form);
        //Xử lý người dùng có nhập trường * hay ko 
        // console.log(formElement)
        function validate(inputElement, rule) {
            var errorElement = inputElement.parentElement.querySelector('.form-message')
            var errorMess = rule.test(inputElement.value);
            if (errorMess) {
                errorElement.innerText = errorMess;
                inputElement.style.border = '2px solid red'
            }
            else {
                errorElement.innerText = '';
            }
        }
        if (formElement) {
            formElement.onsubmit = function (e) {
                e.preventDefault();
                options.rules.forEach(function (rule) 
                {
                    var inputElement = formElement.querySelector(rule.selector);
                    validate(inputElement, rule)
                })
            }
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                if (inputElement) {
                    // Xử lý trường hợp blur khỏi input
                    inputElement.onblur = function () {
                        validate(inputElement, rule)
                    }

                    // Xử lý khi bắt đầu nhập thì ẩn errorMess
                    inputElement.oninput = function () {
                        var errorElement = inputElement.parentElement.querySelector('.form-message')
                        errorElement.innerText = '';
                        inputElement.style.border = '2px solid #7787ea'
                    }
                }
            })
        }

    }
    isRequire = (selector) => {
        return {
            selector: selector,
            test: function (value) {
                return value.trim() ? undefined : 'Vui lòng nhập trường này'
            }
        }
    }
    isEmail = (selector) => {
        return {
            selector: selector,
            test: function (value) {
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(value) ? undefined : 'Trường này phải là email'
            },
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="Contact ">
                    <div className="flex flex-col lg:max-w-[1245px] m-auto px-4">
                        {/* chữ và form */}
                        <div className="lg:flex lg:flex-row lg:mx-0 md:flex-col md:mx-20 sm:mx-5">
                            {/* chữ */}
                            <div className="lg:mr-[70px] lg:w-1/2 md:mb-16">
                                <div className="mb-12">
                                    <p className="mb-4">Liên Hệ</p>
                                    <h1 className="text-5xl font-bold text-[#49b3f4] ml-[-3px]">
                                        <div className="mb-2 sm:inline-block lg:block">Hãy ghé thăm</div> <span className="">Office Spa nhé</span>
                                    </h1>
                                </div>
                                <div className="mb-12">
                                    <p>
                                        <span className="font-semibold">Pet Service HCM</span> ra đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp, uy tín mang nét đẹp hoa mỹ mà chúng tôi đem lại sự trải nghiệm tốt nhất cho thú cưng của mọi nhà. Với hơn nhiều năm kinh nghiệm trong ngành dịch vụ thú cưng bao gồm: Spa thú cưng, Thú y, Sản phẩm dành cho thú cưng, Khách sạn thú cưng, Dịch vụ dắt chó đi dạo, Cung cấp các dòng thú cưng chuyên nghiệp…
                                    </p>
                                </div>
                                <div className="transition-colors">
                                    <a className="flex items-center mb-4 max-w-md" target="_blank" href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+C%C3%B4ng+ngh%E1%BB%87+Th%C3%B4ng+tin+-+%C4%90HQG+TP.HCM/@10.8702143,106.8001841,17z/data=!4m6!3m5!1s0x317527587e9ad5bf:0xafa66f9c8be3c91!8m2!3d10.8700089!4d106.8030541!16s%2Fm%2F02qqlmm ">
                                        <i><FaStore /></i>
                                        <p className="ml-1.5 hover:text-[#7787ea] transition-colors">Số 73 Số 49, Tân Quy, Quận 7, Thành phố Hồ Chí Minh</p>
                                    </a>
                                    <a className="flex items-center mb-4 max-w-[180px]" href="tel: +0898 520 760">
                                        <i><FaPhoneAlt /></i>
                                        <p className="ml-1.5 hover:text-[#7787ea] transition-colors">Hotline 0898 520 760</p>
                                    </a>
                                    <a className="flex items-center mb-4 max-w-[200px]" href="mailto:hi.petservicehcm@gmail.com">
                                        <i><FaEnvelope /></i>
                                        <p className="ml-1.5 hover:text-[#7787ea] transition-colors">hi.petservicehcm@gmail.com</p>
                                    </a>
                                </div>

                            </div>
                            {/* form ý kiến */}
                            <div className="lg:w-1/2">
                                <div>Đóng góp ý kiến</div>
                                <div className="mb-3">Các trường được đánh dấu <span className="text-[#e80000] text-[18px] font-extrabold">*</span> là bắt buộc</div>
                                <form action="" method="POST" id="form-1">
                                    <div className="mb-[25px]">
                                        <label htmlFor="fullName" className="text-[18px] font-semibold">Họ Tên<span className="text-[#e80000] font-extrabold">*</span></label><br />
                                        <input id="fullName" type="text" onBlur={this.FormEvent} onFocus={this.FormEvent} className="border-2 py-3 pl-3 w-full outline-none focus:border-[#7787ea]"></input>
                                        <div className="form-message text-[#e80000]"></div>
                                    </div>

                                    <div>
                                        <div className="mb-[25px]">
                                            <label htmlFor="tel" className="text-[18px] font-semibold">Số Điện Thoại</label><br />
                                            <input id="tel" type="text" className="border-2 py-3 w-full pl-3 outline-none focus:border-[#7787ea]"></input>
                                        </div>
                                        <div className="mb-[25px]">
                                            <label htmlFor="email" className="text-[18px] font-semibold">Email<span className="text-[#e80000] font-extrabold">*</span></label><br />
                                            <input id="email" type="email" onBlur={this.FormEvent} onFocus={this.FormEvent} className="border-2 py-3 w-full pl-3 outline-none focus:border-[#7787ea]"></input>
                                            <div className="form-message text-[#e80000]"></div>
                                        </div>
                                    </div>

                                    <div className="mb-[25px]">
                                        <label htmlFor="mess" className="text-[18px] font-semibold">Lời Nhắn<span className="text-[#e80000] font-extrabold">*</span></label><br />
                                        <textarea id="mess" onBlur={this.FormEvent} onFocus={this.FormEvent} className="w-full border-2 outline-none pl-3 h-[200px] focus:border-[#7787ea]" placeholder="PSH luôn lắng nghe mọi đóng góp quý báu và không ngừng nâng cấp cải thiện chất lượng dịch vụ nhằm phục vụ quý khách hàng một cách tốt nhất."></textarea>
                                        <div className="form-message text-[#e80000] mt-[-5px]"></div>
                                    </div>

                                    <div>
                                        <input
                                            value="Gửi yêu cầu"
                                            type="submit"
                                            className="border w-32 h-14 text-white bg-black hover:bg-[#c4c4c4] hover:cursor-pointer ease-in duration-100 transition-colors"
                                            onMouseOver={this.FormEvent}
                                            onSubmitEvent={this.FormEvent}
                                        />

                                    </div>

                                </form>
                            </div>
                        </div>
                        {/* google map */}
                        <div className="my-[75px]">
                            <iframe className="w-full h-[450px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2312404166914!2d106.80047917495881!3d10.870008889284517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1682007015702!5m2!1svi!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Contact;
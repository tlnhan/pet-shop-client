import Footer from "../footer";
import Header from "../header";

function About() {
    return (
        <div className=" [word-spacing:0px]">
            <Header />
            
            <div id="aboutBanner" className="w-[inherit] ">
                <div className="animate-scaleY w-screen px-[20px] min-h-[400px] h-fit bg-gradient-[90deg] from-[#fff] from-0% via-[#142391] via-50% to-[#fff] to-100% bg-gradient-to-b flex justify-center items-center ">
                <p className="w-screen text-center text-white  text-[60px]  font-mono [word-spacing:-8px] max-sm:text-[40px] font-bold  animate-scaleX origin-left ">
                    Giới Thiệu Về PET SERVICE
                </p>
                </div>

                

            </div>
            <img src="" ></img>
            <div className=" w-screen flex flex-col items-center text-[#333333]">
                <div className=" my-[20px] max-w-[880px] text-[20px] max-sm:text-[16px] px-[20px] w-screen">
                    <p className="my-[30px] ">
                        PET SERVICE ra đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp, uy tín mang 
                        nét đẹp hoa mỹ mà chúng tôi đem lại sự trải nghiệm tốt nhất cho thú cưng của chúng ta. 
                        Với hơn 5 năm kinh nghiệm trong ngành dịch vụ thú cưng bao gồm: Thú y, Spa thú cưng, 
                        Khách sạn thú cưng, Cung cấp các dòng thú cưng chuyên nghiệp...
                    </p>
                    <div className="my-[20px] font-bold italic font-mono [word-spacing:-6px]">TẦM NHÌN - SỨ MỆNH - GIÁ TRỊ CỐT LÕI CỦA PET SERVICE</div>
                    <p className="my-[20px]">Mang lại <span className="my-[20px] font-bold font-mono [word-spacing:-6px]">“Trọn Vẹn Trải Nghiệm“</span> </p>
                    <ul>
                        <li>
                            <div className="my-[20px] font-bold font-mono [word-spacing:-6px]">TẦM NHÌN</div>
                            <p className="">
                                Pet Service định hướng phát triển trở thành Công ty cung cấp các Sản phẩm, dịch vụ cho thú cưng hàng đầu Việt Nam.
                            </p>
                        </li>
                        <li>
                            <div className="my-[20px] font-bold font-mono [word-spacing:-6px]">SỨ MỆNH</div>
                            <p className="my-[20px]">
                                Pet Service cam kết mang đến trọn vẹn trải nghiệm cho Khách hàng và vẻ đẹp toàn diện cho thú cưng.
                            </p>
                        </li>
                        <li>
                            <div className="my-[20px] font-bold font-mono [word-spacing:-6px]">GIÁ TRỊ CỐT LÕI</div>
                            <ul className="list-disc list-inside">
                                <li className="pl-[30px] my-[20px]">
                                    Trân trọng khách hàng: Mỗi khách hàng khi đến PET SERVICE là một điều đáng quý. Khách hàng xứng đáng được trải nghiệm một dịch vụ tốt nhất đồng thời thú cưng của bạn cũng được chăm sóc chỉn chu nhất.
                                </li>
                                <li className="pl-[30px] my-[20px]">
                                    Tôn trọng đồng nghiệp: Pet Service luôn lắng nghe và đề cao tinh thần đồng đội, tất cả cùng một mục tiêu phát triển chung.
                                </li>
                                <li className="pl-[30px] my-[20px]">
                                    Coi trọng công việc: Thái độ làm việc chuyên nghiệp, chịu trách nhiệm với kết quả công việc.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p className="my-[20px]">
                        <span className="font-bold font-mono [word-spacing:-6px]">PET SERVICE</span> Với hơn nhiều năm kinh nghiệm trong ngành dịch vụ thú cưng bao gồm: Spa thú cưng, Dịch vụ chăm sóc thú cưng tại nhà, Thú y, Sản phẩm dành cho thú cưng, Khách sạn thú cưng, Dịch vụ dắt chó đi dạo,…
                    </p>
                    <div>
                        <p className="my-[20px] font-bold italic font-mono [word-spacing:-6px]">Đội ngũ PET SERVICE</p>
                        <p>
                            Với đội ngũ Nhân viên Spa – Grooming chuyên nghiệp, đội ngũ chăm sóc khách hàng có nhiều năm kinh nghiệm và được đào tạo bài bản theo quy trình. Nhân viên PET SERVICE với tin thần trách nhiệm, cởi mở với Slogan “Để thú cưng của bạn được chỉn chu nhất”.
                        </p>
                        <p className="my-[20px]"> <span className="font-bold font-mono [word-spacing:-6px]">PET SERVICE</span> cam kết mang lại cho quý khách dịch vụ với chất lượng tốt nhất và mức chi phí hợp lý.</p>
                    </div>
                    <div>
                        <p className="my-[20px] font-bold font-mono [word-spacing:-6px]">Tại sao lại chọn <span className="italic">PET SERVICE</span> ?</p>
                    </div>
                    <ul className="list-disc list-inside">
                        <li className="pl-[30px] my-[20px]">
                            Dịch vụ CHẤT LƯỢNG đi đôi với UY TÍN;
                        </li>
                        <li className="pl-[30px] my-[20px]">
                            Đặc biệt, Gói Tháng 4 và 8 lần dành cho các Khách hàng có nhu cầu sử dụng thường xuyên với rất nhiều ưu đãi;
                        </li>
                        <li className="pl-[30px] my-[20px]">
                            Đội ngũ nhân viên CHUYÊN NGHIỆP với THÁI ĐỘ phục vụ Pet yêu một cách tốt nhất;
                        </li>
                        <li className="pl-[30px] my-[20px]">
                            Có bộ phận riêng để THEO DÕI tình hình thú cưng của bạn;
                        </li>
                        <li className="pl-[30px] my-[20px]">
                            Trang thiết bị ĐẦY ĐỦ, ĐẢM BẢO vệ sinh sạch sẽ;
                        </li>
                        <li className="pl-[30px] my-[20px]">
                            Giá TỐT NHẤT thị trường;
                        </li>
                        <li className="pl-[30px] my-[20px]">
                            Chương trình KHUYẾN MÃI thường xuyên, ưu đãi đặc biệt với khách hàng đã sử dụng dịch vụ.
                        </li>
                    </ul>
                    <div>
                        <p className="my-[20px]">
                            Chúng tôi đem đến cho thú cưng của bạn một sự chăm sóc với tình thương yêu, tinh thần trách nhiệm, và sự thông hiểu tâm lý sâu sắc
                        </p>
                    </div>
                    <div>
                        <p className="my-[20px]">
                            Hãy liên hệ ngay cho <span className="font-bold italic">PET SERVICE</span> qua
                        </p>
                    </div>
                    <div>
                        <p className="my-[20px]">
                            <span className="font-bold italic">Hotline:<span className="text-[#1e73be]"> 0898 520 760</span></span>
                        </p>
                    </div>
                    <div>
                        <p className="my-[20px]">
                            <span className="italic">Facebook:<a href="https://www.facebook.com/petservicehcm" className="hover:text-black text-[#1e73be]"> https://www.facebook.com/petservicehcm</a></span>
                        </p>
                    </div>
                    <div>
                        <p className="my-[20px]">
                            Để thú cưng của bạn được chỉn chu nhất.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;
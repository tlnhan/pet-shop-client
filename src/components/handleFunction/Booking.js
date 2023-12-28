function Booking() {
    return (
        <div className="flex justify-center py-6">
            <div className="w-1220 flex">
                <div className="w-4/5 ml-16 pl-16 mt-8 mb-8">
                    <p className="mb-6">
                        Đặt lịch nhanh <br />
                        Các trường được đánh dấu <span className="text-[#e80000] text-[18px] font-extrabold">*</span>  là bắt buộc
                    </p>
                    <div>
                        <form method="" action="" id="formBooking">
                            <div>
                                <label className="text-xl opacity-80 font-medium" for="seriviceType">
                                    YÊU CẦU DỊCH VỤ <span className="text-[#e80000] text-[18px] font-extrabold">*</span>
                                </label> <br />
                                <p className="text-xs mb-2">Vui lòng chọn 1 dịch vụ bạn đang cần để Pet Service HCM có thể chuẩn bị, và phục vụ các bé một cách chu đáo nhất nhé!</p>
                                <select className="p-3 w-660 border-2 rounded-lg outline-none focus:border-[#7787ea]" id="seriviceType">
                                    <option value="value1">Tắm - Vệ Sinh Tại Nhà </option>
                                    <option value="value2">Cắt - Tỉa Lông Tại Nhà </option>
                                    <option value="value3">Thú Y Tại Nhà </option>
                                    <option value="value4">Dắt Chó Đi Dạo </option>
                                    <option value="value5">Combo 1: (Tắm Sấy + Vệ Sinh)</option>
                                    <option value="value6 ">Combo 2: (Cắt Tỉa + Vệ Sinh) </option>
                                    <option value="value7 ">Combo 3: (Cắt Tỉa + Vệ Sinh + Tắm Sấy) </option>
                                    <option value="value8 ">Combo 4: (Tắm Sấy + Vệ Sinh + Cạo Lông) </option>
                                </select>
                            </div>

                            <div className="mt-3">
                                <label className="text-xl opacity-80 font-medium" for="fullName">
                                    Họ Tên <span className="text-[#e80000] font-extrabold">*</span>
                                </label> <br />
                                <input className="p-3 w-660 mt-2 border-2 rounded-lg  outline-none focus:border-[#7787ea]" type="text" id="fullName">
                                </input>
                            </div>

                            <div className="mt-3">
                                <label className="text-xl opacity-80 font-medium" for="tel">
                                    Số điện thoại <span className="text-[#e80000] font-extrabold">*</span>
                                </label> <br />
                                <input className="p-3 w-660 mt-2 border-2 rounded-lg  outline-none focus:border-[#7787ea]" type="text" id="tel">
                                </input>
                            </div>

                            <div className="mt-3">
                                <label className="text-xl opacity-80 font-medium" for="email">
                                    Email <span className="text-[#e80000] font-extrabold">*</span>
                                </label> <br />
                                <input className="p-3 w-660 mt-2 border-2 rounded-lg outline-none focus:border-[#7787ea]" type="email" id="email">
                                </input>
                            </div>

                            <div className="mt-3">
                                <label className="text-xl opacity-80 font-medium" for="address">
                                    Địa chỉ <span className="text-[#e80000] font-extrabold">*</span>
                                </label> <br />
                                <input className="p-3 w-660 mt-2 border-2 rounded-lg  outline-none focus:border-[#7787ea]" type="text" id="address">
                                </input>
                            </div>

                            <div className="mt-3">
                                <label className="text-xl opacity-80 font-medium" for="time">
                                    Thời gian <span className="text-[#e80000] font-extrabold">*</span>
                                </label> <br />
                                <input type="date" className="p-3 w-660 mt-2 border-2 rounded-lg  outline-none focus:border-[#7787ea]" id="time">
                                </input>
                            </div>

                            <div className="mt-3">
                                <label className="text-xl opacity-80 font-medium" for="petName">
                                    Tên thú cưng <span className="text-[#e80000] font-extrabold">*</span>
                                </label> <br />
                                <input className="p-3 w-660 mt-2 border-2 rounded-lg  outline-none focus:border-[#7787ea]" type="text" id="petName">
                                </input>
                            </div>

                            <div className="mt-3">
                                <label className="text-xl opacity-80 font-medium" for="animals">
                                    Loài <span className="text-[#e80000] font-extrabold">*</span>
                                </label> <br />
                                <select className="p-3 mt-2 w-660 border-2 rounded-lg outline-none focus:border-[#7787ea]" id="animals">
                                    <option value="value1">Chó </option>
                                    <option value="value2">Mèo</option>
                                    <option value="value2">Khác</option>
                                </select>
                            </div>

                            <div className="mt-3">
                                <label className="text-xl opacity-80 font-medium" for="breed">
                                    Thuộc giống <span className="text-[#e80000] font-extrabold">*</span>
                                </label> <br />
                                <input className="p-3 w-660 mt-2 border-2 rounded-lg  outline-none focus:border-[#7787ea]" type="text" id="breed">
                                </input>
                            </div>

                            <div className="mt-3 flex w-660 ">
                                <div className="mt-3 w-1/2 mr-4 ">
                                    <label className="text-xl opacity-80 font-medium" for="age">
                                        Tuổi (Năm) <span className="text-[#e80000] font-extrabold">*</span>
                                    </label> <br />
                                    <input className="p-3 w-full mt-2 border-2 rounded-lg  outline-none focus:border-[#7787ea]" type="text" id="age">
                                    </input>
                                </div>

                                <div className="mt-3 w-1/2 ml-4">
                                    <label className="text-xl opacity-80 font-medium" for="weight">
                                        Trọng lượng (Kg) <span className="text-[#e80000] font-extrabold">*</span>
                                    </label> <br />
                                    <input className="p-3 w-full mt-2 border-2 rounded-lg  outline-none focus:border-[#7787ea]" type="number" min="0" max="100" step="1" id="weight">
                                    </input>
                                </div>
                            </div>

                            <div className="mt-3">
                                <label className="text-xl opacity-80 font-medium" for="noteMassage">
                                    Ghi chú<span className="text-[#e80000] font-extrabold">*</span>
                                </label> <br />
                                <textarea className="p-3 w-660 mt-2 border-2 rounded-lg h-[200px] outline-none focus:border-[#7787ea]" type="text" id="noteMassage" placeholder="Nhập một vài mô tả về tình trạng của các bé để các chuyên viên của chúng tôi có thể hỗ trợ bạn một cách tốt nhất...">
                                </textarea>
                                <div>
                                    <input value="Gửi yêu cầu" type="submit" className="border rounded-lg w-32 h-14 text-white bg-black hover:bg-[#c4c4c4] hover:cursor-pointer ease-in duration-100 transition-colors"></input>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>

                <div className="w-1/5">
                    <p className="text-9xl text-[#293478] italic">2 <br />4<br />/<br />7</p>
                </div>
            </div>
        </div>
    )
}

export default Booking;
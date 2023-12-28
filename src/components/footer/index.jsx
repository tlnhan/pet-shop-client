import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
function Footer() {
    return (
        <div>
            <div className="flex w-full justify-center bg-gradient-to-b from-[#273172] to-[#3D51AC] flex-col ">
                <div className='flex text-white h-32 justify-center '>
                    <p className='self-center text-2xl'>
                        Hotline hỗ trợ 24/7 của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc của bạn | 0898520760
                    </p>
                </div>

                <div className=' flex justify-center bg-black'>
                    <div className=" w-1220 flex justify-center text-white py-8 text-[#ffffffc9] ">
                        <div className='w-1/3 p-4'>
                            <h1 className='pb-4 text-2xl font-bold text-white'>
                                PET SERVICE
                            </h1>
                            <p className='pb-4 ' >
                                Pet Service ra đời với mong muốn mang lại cho khách hàng sự chuyên nghiệp
                                , uy tín mang nét đẹp hoa mỹ mà chúng tôi đem lại sự trải nghiệm tốt nhất
                                cho thú cưng. Với nhiều năm kinh nghiệm trong ngành dịch vụ thú cưng:
                                Spa thú cưng, Khách sạn thú cưng, Dịch vụ thú cưng tại nhà,…
                            </p>
                            <span className='pb-4 '>217 Lâm Văn Bền, P. Bình Thuận, Q.7, HCM</span>
                            <a href=''  >Hotline 0898 520760</a>
                            <div className='flex pt-4 '>
                                <FaFacebookF className='' />
                                <FaInstagram className='mx-2' />
                                <FaEnvelope className='mx-2' />
                                <FaPhone className='mx-2' />
                            </div>
                        </div>

                        <div className='w-1/3 p-4 flex flex-col'>
                            <div className='pb-8'>
                                <h2 className=' pb-4 text-xl font-bold text-white'>DỊCH VỤ</h2>
                                <ul>
                                    <li><a>Dịch vụ tắm thú cưng tại nhà</a></li>
                                    <li><a>Dịch vụ cắt tỉa lông và tạo kiểu tại nhà</a></li>
                                    <li><a>Cung cấp sản phẩm, phụ kiện</a></li>
                                </ul>
                            </div>

                            <div>
                                <h2 className='pb-4 text-xl font-bold text-white'>TRUY CẬP</h2>
                                <ul>
                                    <li><a>Trang chủ</a></li>
                                    <li><a>Giới Thiệu Về Pet Service</a></li>
                                    <li><a>Chia Sẻ Kiến Thức Và Kinh Nghiệm</a></li>
                                    <li><a className='text-white'>HOTLINE 24/7</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='w-1/3 p-4'>
                            <h2 className='text-white text-xl font-bold pb-4 '>DỊCH VỤ THÚ CƯNG</h2>
                            <ul>

                                <li>Dịch Vụ Thú Cưng Tại Nhà Quận 1</li>
                                <li>Dịch Vụ Thú Cưng Tại Nhà Quận 2</li>
                                <li>Dịch Vụ Thú Cưng Tại Nhà Quận 3</li>
                                <li>Dịch Vụ Thú Cưng Tại Nhà Quận 5</li>
                                <li>Dịch Vụ Thú Cưng Tại Nhà Quận 7</li>
                                <li>Dịch Vụ Thú Cưng Tại Nhà Quận Tân Bình</li>
                                <li>Dịch Vụ Thú Cưng Tại Nhà Quận Tân Phú</li>
                                <li>Dịch Vụ Thú Cưng Tại Nhà Quận Thủ Đức</li>
                                <li>Dịch Vụ Thú Cưng Tại Nhà Quận Bình Thạnh</li>

                            </ul>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Footer;
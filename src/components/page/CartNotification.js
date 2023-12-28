import { TfiClose } from "react-icons/tfi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SlClose } from "react-icons/sl";
import { Link } from 'react-router-dom';
function CartNotification({ show, setShow }) {
    // Xử lý dóng mở cart
    function handleCartEvent () {
        const product_listElement = document.querySelector('.product_list');
        const modal_overlayElement = document.querySelector('.modal_overplay');
        modal_overlayElement.classList.replace('animate-Displayslowly', 'animate-Hiddenslowly')
        product_listElement.classList.replace('animate-Slideinright','animate-Slideinleft');       
        setTimeout(() => 
        {
            setShow(!show)
        }
        , 150)
    }
   
    return (
        <div className='modal fixed inset-x-0 inset-y-0 flex z-[1]'>
            <div className='modal_overplay absolute w-full h-full animate-Displayslowly' onClick={handleCartEvent}></div>
            <div className='product_list bg-white z-[1] px-[30px] py-[20px] w-[345px] h-full absolute right-0 animate-Slideinright'>
                <button
                    className='float-right'
                    onClick={handleCartEvent}
                >
                    <i className='text-[20px] text-right' id='closeCart'><TfiClose /></i>
                </button>
                <div className='clear-right'></div>
                {/* <p>No products in the cart.</p> */}
                <div className='product_item pb-[25px] border-b-2 pt-[25px]'>
                    <a className='product_type flex'>
                        <img src='https://cf.shopee.vn/file/b2341fdac89201a9e5e8f00bf96d6a52' className='product-img w-[72px] h-[72px]'></img>
                        <p className='product-name text-[22px] font-semibold pl-[20px]'>Bánh bích quy hỗn hợp cho chó | túi 220g</p>
                    </a>
                    <div className='product_howmany font-medium text-[#3d51ac] ml-[93px] inline-block'>
                        <span className='product_quantity'>1 x </span>
                        <span className='product_price'>75.000 ₫</span>
                    </div>
                    <button className='float-right'>
                        <i className='text-[25px] font-thin opacity-25 hover:opacity-90 hover:text-[#3380c4]'><SlClose /></i>
                    </button>
                </div>
                <div className='product_item pb-[25px] border-b-2 pt-[25px]'>
                    <a className='product_type flex'>
                        <img src='https://down-vn.img.susercontent.com/file/a5409e6f4d504dfc656508da56048037_tn' className='product-img w-[72px] h-[72px]'></img>
                        <p className='product-name text-[25px] font-semibold pl-[20px]'>Cá ngừ khô Tellme cho chó - 40g</p>
                    </a>
                    <div className='product_howmany font-medium text-[#3d51ac] ml-[93px] inline-block'>
                        <span className='product_quantity'>1 x </span>
                        <span className='product_price'>50.000 ₫</span>
                    </div>
                    <button className='float-right'>
                        <i className='text-[25px] font-thin opacity-25 hover:opacity-90 hover:text-[#3380c4]'><SlClose /></i>
                    </button>
                </div>
                <div className='product_item pb-[25px] border-b-2 pt-[25px]'>
                    <a className='product_type flex'>
                        <img src="https://down-vn.img.susercontent.com/file/sg-11134201-23010-q3mwmajmw4lvc3_tn" className='product-img w-[72px] h-[72px]'></img>
                        <p className='product-name text-[25px] font-semibold pl-[20px]'>Gan Bò Sấy Cho Chó Mèo Tell me 75g</p>
                    </a>
                    <div className='product_howmany font-medium text-[#3d51ac] ml-[93px] inline-block'>
                        <span className='product_quantity'>1 x </span>
                        <span className='product_price'>75.000 ₫</span>
                    </div>
                    <button className='float-right'>
                        <i className='text-[25px] font-thin opacity-25 hover:opacity-90 hover:text-[#3380c4]'><SlClose /></i>
                    </button>
                </div>
                <div className='product_money mt-[20px] pb-[20px] border-b-2'>
                    <p className='text-center text-[18px] text-[#3d51ac] font-medium'>Tạm tính: 200.000 ₫</p>
                </div>
                <div className='product_pay-check-cart mt-[25px] flex justify-between'>
                    <Link to='/ViewCart' className='bg-[#4c4c4c] text-[15px] text-center text-white w-1/2 font-semibold py-[10px] rounded-full mr-[12px] hover:opacity-80'>XEM GIỎ HÀNG</Link>
                    <button className='bg-[#3d51ac] text-[15px] text-white w-1/2  font-semibold py-[10px] rounded-full hover:opacity-80'>THANH TOÁN</button>
                </div>
            </div>
        </div>
    )
}
export default CartNotification;
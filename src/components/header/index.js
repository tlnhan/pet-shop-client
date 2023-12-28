import { Routes, Route, Link } from 'react-router-dom';
import clsx from 'clsx';
import classNames from 'classnames/bind';
import { FaSearch } from 'react-icons/fa'
import { FaCartPlus } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'
import CartNotification from '../page/CartNotification';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from 'react';
function Header() {

    // get access token from local storage
    const accessToken = localStorage.getItem('accessToken');

    const [show, setShow] = useState(false)
    const [state, setState] = useState('');
    var isSearchInputHidden = true;
    if (state != '') {
        var searchBtnElement = document.querySelector('#search-btn');

        var searchInputElement = document.querySelector(state);
        searchBtnElement.onclick = () => {
            if (isSearchInputHidden) {
                searchInputElement.classList.remove('hidden');
                searchInputElement.classList.add('animate-searchInputIn');
                searchInputElement.classList.remove('animate-searchInputOut');
                isSearchInputHidden = false;
            }
            else {
                searchInputElement.classList.add('animate-searchInputOut');
                searchInputElement.classList.remove('animate-searchInputIn');
                setTimeout(() => {
                    searchInputElement.classList.add('hidden');
                }, 380);
                isSearchInputHidden = true;
            }
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        window.location.reload();
    };
    return (


        <div className=' ' >
            <div className='flex justify-center bg-gradient-[80deg] from-[#3D51AC] to-[#232c72] to-15% bg-transparent bg-gradient-to-r '>
                <header className='flex  text-white  justify-between  text-sm w-1220   '>
                    <div className='flex justify-between'>
                        <button>
                            <FaPhone />
                        </button>
                        <div className='flex px-4 items-center'>0898520760</div>

                        <div className='flex px-4 items-center'>217 Lâm Văn Bền, P. Bình Thuận, Q.7, HCM</div>
                    </div>
                    <div className='flex justify-between'>
                        {/* search*/}
                        <div className='flex items-center'>
                            <input id='search-input' className='w-[300px] hidden h-[100%] pl-[10px] bg-white border-[1px] border-[#142391] outline-0 rounded-l-[20px] border-r-0 origin-right text-black'
                                type='text'

                                placeholder='Search...'>
                            </input>

                            <button id='search-btn' className='search px-4 hover:bg-blue-600 rounded h-[100%]'
                                onFocus={e => { setState('#search-input') }}>
                                <FaSearch className='' />
                            </button>
                        </div>
                        {/* gio hang*/}
                        <button onClick={() => setShow(!show)} className='cart px-4 hover:bg-sky-700 relative'>
                            <FaCartPlus className='' />
                            <span className='cart-notice absolute pt-[1px] pb-[2px] px-[5px] bg-[#23a455] text-white text-[8px] font-normal rounded-[100%] leading-[10px] top-[3px] right-[5px] text-center'>3</span>

                        </button>
                        {/* login*/}

                        {accessToken ? (
                            <>
                                <Link to='/#.' id='login-btn' className='self-center p-2 rounded hover:bg-blue-600'>Profile</Link>
                                <button onClick={handleLogout} id='login-btn' className='self-center p-2 rounded hover:bg-blue-600'>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to='/Login' id='login-btn' className='self-center p-2 rounded hover:bg-blue-600'>Log in</Link>
                                <Link to='/Signup' id='sign-btn' className='self-center  p-2 rounded hover:bg-blue-600'> Sign Up</Link>
                            </>
                        )}



                    </div>
                </header>
                {show && <CartNotification show={show} setShow={setShow} />}
            </div>

            <div className=' flex justify-center py-5 '>
                <div className='w-1220 '>
                    <div className='flex justify-between   '>
                        <div>
                            <img className='w-48' src='https://petservicehcm.com/wp-content/uploads/2019/11/Pet_logo.png.webp' alt='Pet logo'></img>
                        </div>
                        {/* page*/}

                        <Link to='/' className='p-1.5 self-center font-bold text-neutral-600 hover:text-blue-600 '>TRANG CHỦ</Link>
                        <Link to='/About' className='p-1.5 self-center font-bold text-neutral-600 hover:text-blue-600 '>GIỚI THIỆU</Link>
                        <Link to='' className='p-1.5 self-center font-bold text-neutral-600 flex items-center hover:text-blue-600  relative  group  '>DỊCH VỤ
                            <ul className=' hidden w-264 group-hover:block  z-10 absolute  top-full rounded-lg text-sm text-cyan-900 bg-slate-100 border border-solid border-[#273172] pt-2 '>
                                <li className=' left-0  p-3 hover:text-blue-600 '> <AnchorLink href='#home4'>THÚ Y TẠI NHÀ</AnchorLink></li>
                                <li className=' left-0  p-3 hover:text-blue-600  '><AnchorLink href='#home5'>TẮM - VỆ SINH TẠI NHÀ</AnchorLink></li>
                                <li className=' left-0  p-3 hover:text-blue-600  '><AnchorLink href='#home6'>CẮT - TỈA LÔNG TẠI NHÀ</AnchorLink></li>
                                <li className=' left-0  p-3 hover:text-blue-600  '><AnchorLink href='#home7'>COMBO</AnchorLink></li>

                            </ul>
                            <FaChevronDown className='self-center pl-1 font-none inline' /></Link>
                        <Link to='' className=' p-1.5 self-center font-bold text-neutral-600 hover:text-blue-600  relative group flex items-center'>CỬA HÀNG
                            <ul className=' hidden w-250 group-hover:block  z-10 absolute top-full rounded-lg text-sm text-cyan-900 bg-slate-100 border border-solid border-[#273172] pt-2 '>
                                <li className=' left-0  p-3 hover:text-blue-600 '> <Link to='/FoodProduct'>THỰC PHẨM THÚ CƯNG</Link></li>
                                <li className=' left-0  p-3 hover:text-blue-600  '><Link to='/HygieneProduct'>SẢN PHẨM VỆ SINH</Link></li>
                                <li className=' left-0  p-3 hover:text-blue-600  '><Link to='/TreatmentProduct'>SẢN PHẨM ĐIỀU TRỊ</Link></li>
                            </ul>
                            <FaChevronDown className='self-center pl-1 font-none inline' /></Link>
                        <Link to='/Contact' className='p-1.5 self-center font-bold text-neutral-600 hover:text-blue-600 group relative'>LIÊN HỆ
                        </Link>
                        {/* ONLINE BOOKING*/}
                        <Link to='/OnlineBooking' className='flex '>
                            <button className='  p-1.5 bg-black self-center text-white rounded-full hover:bg-blue-600 px-4  '>
                                ONLINE BOOKING
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div >
    )
}
export default Header;

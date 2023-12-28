import Footer from "../footer";
import Header from "../header";
import { SlClose } from "react-icons/sl";
import { useState } from "react";
function ViewCart() {
    // Xử lý tăng số lượng sản phẩm
    const [Quantity1, setQuantity1] = useState(1);
    const [Quantity2, setQuantity2] = useState(1);
    const [Quantity3, setQuantity3] = useState(1);

    const [Atrr, setAtrr] = useState('disabled')
    const [isChangeQuantity, setisChangeQuantity] = useState('False')
    function alowUpdateCart() {
        if (isChangeQuantity) {
            setAtrr('');
            const btnUpdateCart = document.querySelector('.btnUpdateCart');
            btnUpdateCart.classList.replace('hover:cursor-not-allowed', 'hover:opacity-80');
            btnUpdateCart.classList.replace('opacity-40', 'opacity-100');
        }
    }
    function btnUpdateCart(e) {
        e.preventDefault();
        console.log(e.target.value);
        if (isChangeQuantity) {
            setAtrr('disabled');
            const btnUpdateCart = document.querySelector('.btnUpdateCart');
            btnUpdateCart.classList.replace('hover:opacity-80', 'hover:cursor-not-allowed');
            btnUpdateCart.classList.replace('opacity-100', 'opacity-40');
            setisChangeQuantity('False')
        }
    }
    return (
        <div>
            <Header />
            <div className="flex mb-24">
                <div className="Container mt-[50px] m-auto w-[1245px] px-4">
                    <header>
                        <h1 className="text-[42px] text-[#222] font-normal">Giỏ hàng</h1>
                    </header>
                    <div className="mt-4">
                        <form className="">
                            <table className="StatisticalProduct  border border-slate-300 border-collapse w-full max-md:flex">
                                <thead className="border border-slate-300 bg-[#fbfbfb] max-md:hidden">
                                    <tr className="max-md:flex max-md:flex-col">
                                        <th className=""></th>
                                        <th className="max-md:hidden"></th>
                                        <th className="Product text-left font-medium p-2">Sản phẩm</th>
                                        <th className="Price text-left font-medium p-2">Giá</th>
                                        <th className="Quantity text-left font-medium p-2">Số lượng</th>
                                        <th className="Pay text-left font-medium p-2">Tạm tính</th>
                                    </tr>
                                </thead>
                                <tbody className="border border-slate-300 max-md:w-full max-md:border-0">
                                    <tr className="InfoProduct border-b border-slate-300 max-md:flex max-md:flex-col max-md:border-0">
                                        <td className="RemoveProduct py-5 w-[20px] max-md:w-full max-md:border-b max-md:py-2">
                                            <button className="RemoveProduct px-7 max-md:float-right max-md:px-2">
                                                <i className="text-[26px] font-thin opacity-25 hover:opacity-90 hover:text-[#3380c4]"><SlClose /></i>
                                            </button>
                                        </td>
                                        <td className="ProductIMG max-md:hidden max-sm:self-center max-sm:w-full max-sm:border-b max-sm:flex max-sm:justify-center">
                                            <a href="#">
                                                <img className="w-[70px] h-[70px] p-2" src="https://cf.shopee.vn/file/b2341fdac89201a9e5e8f00bf96d6a52"></img>
                                            </a>
                                        </td>
                                        <td className="ProductName p-2 hover:opacity-80 max-md:flex max-md:justify-between max-md:border-b">
                                            <span className="hidden max-md:block font-medium">Sản phẩm:</span>
                                            <a href="#" className="text-[#1e73be] font-medium">Bánh bích quy hỗn hợp cho chó | túi 220g</a>
                                        </td>
                                        <td className="ProductPrice p-2 mr-2 max-md:flex max-md:justify-between max-md:border-b max-md:mr-0">
                                            <span className="hidden max-md:block font-medium">Giá:</span>
                                            <span className="font-medium">75.000 ₫</span>
                                        </td>
                                        <td className="ProductEndow p-2 max-md:flex max-md:justify-between max-md:border-b max-md:py-1">
                                            <span className="hidden max-md:block font-medium">Số lượng:</span>
                                            <div className="inline-block">
                                                <input
                                                    className="border w-16 pl-[20px] min-h-[35px] outline-none"
                                                    type="number"
                                                    step={1}
                                                    min={1}
                                                    max={10}
                                                    value={Quantity1}
                                                    onChange={(e) => {
                                                        setisChangeQuantity('True');
                                                        alowUpdateCart();
                                                        setQuantity1(Number(e.target.value));
                                                    }
                                                    }
                                                />

                                            </div>
                                        </td>
                                        <td className="IntoMoney p-2 max-md:flex max-md:justify-between max-md:border-b">
                                            <span className="hidden max-md:block font-medium">Tạm tính:</span>
                                            <span className="font-medium">75.000 ₫</span>
                                        </td>
                                    </tr>
                                    <tr className="InfoProduct border-b border-slate-300 max-md:flex max-md:flex-col max-md:border-0">
                                        <td className="RemoveProduct py-5 w-[20px] max-md:w-full max-md:border-b max-md:py-2">
                                            <button className="RemoveProduct px-7 max-md:float-right max-md:px-2">
                                                <i className="text-[26px] font-thin opacity-25 hover:opacity-90 hover:text-[#3380c4]"><SlClose /></i>
                                            </button>
                                        </td>
                                        <td className="ProductIMG max-md:hidden max-sm:self-center max-sm:w-full max-sm:border-b max-sm:flex max-sm:justify-center">
                                            <a href="#">
                                                <img className="w-[70px] h-[70px] p-2" src="https://down-vn.img.susercontent.com/file/a5409e6f4d504dfc656508da56048037_tn"></img>
                                            </a>
                                        </td>
                                        <td className="ProductName p-2 hover:opacity-80 max-md:flex max-md:justify-between max-md:border-b">
                                            <span className="hidden max-md:block font-medium">Sản phẩm:</span>
                                            <a href="#" className="text-[#1e73be] font-medium">Cá ngừ khô Tellme cho chó - 40g</a>
                                        </td>
                                        <td className="ProductPrice p-2 mr-2 max-md:flex max-md:justify-between max-md:border-b max-md:mr-0">
                                            <span className="hidden max-md:block font-medium">Giá:</span>
                                            <span className="font-medium">50.000 ₫</span>
                                        </td>
                                        <td className="ProductEndow p-2 max-md:flex max-md:justify-between max-md:border-b max-md:py-1">
                                            <span className="hidden max-md:block font-medium">Số lượng:</span>
                                            <div className="inline-block">
                                                <input
                                                    className="border w-16 pl-[20px] min-h-[35px] outline-none"
                                                    type="number"
                                                    step={1}
                                                    min={1}
                                                    max={10}
                                                    value={Quantity2}
                                                    onChange={(e) => {
                                                        setisChangeQuantity('True');
                                                        alowUpdateCart();
                                                        setQuantity2(Number(e.target.value));
                                                    }
                                                    }
                                                />

                                            </div>
                                        </td>
                                        <td className="IntoMoney p-2 max-md:flex max-md:justify-between max-md:border-b">
                                            <span className="hidden max-md:block font-medium">Tạm tính:</span>
                                            <span className="font-medium">50.000 ₫</span>
                                        </td>
                                    </tr>
                                    <tr className="InfoProduct border-b border-slate-300 max-md:flex max-md:flex-col max-md:border-0">
                                        <td className="RemoveProduct py-5 w-[20px] max-md:w-full max-md:border-b max-md:py-2">
                                            <button className="RemoveProduct px-7 max-md:float-right max-md:px-2">
                                                <i className="text-[26px] font-thin opacity-25 hover:opacity-90 hover:text-[#3380c4]"><SlClose /></i>
                                            </button>
                                        </td>
                                        <td className="ProductIMG max-md:hidden max-sm:self-center max-sm:border-b max-sm:w-full max-sm:flex max-sm:justify-center">
                                            <a href="#">
                                                <img className="w-[70px] h-[70px] p-2" src="https://down-vn.img.susercontent.com/file/sg-11134201-23010-q3mwmajmw4lvc3_tn"></img>
                                            </a>
                                        </td>
                                        <td className="ProductName p-2 hover:opacity-80 max-md:flex max-md:justify-between max-md:border-b">
                                            <span className="hidden max-md:block font-medium">Sản phẩm:</span>
                                            <a href="#" className="text-[#1e73be] font-medium">Gan Bò Sấy Cho Chó Mèo Tell me 75g</a>
                                        </td>
                                        <td className="ProductPrice p-2 mr-2 max-md:flex max-md:justify-between max-md:border-b max-md:mr-0">
                                            <span className="hidden max-md:block font-medium">Giá:</span>
                                            <span className="font-medium">75.000 ₫</span>
                                        </td>
                                        <td className="ProductEndow p-2 max-md:flex max-md:justify-between max-md:border-b max-md:py-1">
                                            <span className="hidden max-md:block font-medium">Số lượng:</span>
                                            <div className="inline-block">
                                                <input
                                                    className="border w-16 pl-[20px] min-h-[35px] outline-none"
                                                    type="number"
                                                    step={1}
                                                    min={1}
                                                    max={10}
                                                    value={Quantity3}
                                                    onChange={(e) => {
                                                        setisChangeQuantity('True');
                                                        alowUpdateCart();
                                                        setQuantity3(Number(e.target.value));
                                                    }
                                                    }
                                                />

                                            </div>
                                        </td>
                                        <td className="IntoMoney p-2 max-md:flex max-md:justify-between max-md:border-b">
                                            <span className="hidden max-md:block font-medium">Tạm tính:</span>
                                            <span className="font-medium">75.000 ₫</span>
                                        </td>
                                    </tr>
                                    <tr className="max-md:flex">
                                        <td colSpan={6} className="max-md:w-full">
                                            <div className="flex justify-between max-sm:flex-col">
                                                <div className="max-sm:flex max-sm:items-center max-sm:justify-between flex-1">
                                                    <input type="text" placeholder="Mã ưu đãi" className="border border-slate-400 outline-none p-2 m-2 max-sm:w-2/5 flex-1"></input>
                                                    <button type="submit" value={"Áp dụng"} className="bg-[#273172] py-[10px] px-10 text-white font-medium hover:opacity-80 max-sm:mr-2 ">
                                                        ÁP DỤNG
                                                    </button>
                                                </div>
                                                <button
                                                    type="submit"
                                                    value={"Cập nhật giỏ hàng"}
                                                    disabled={Atrr}
                                                    className="btnUpdateCart mx-2 bg-[#273172] py-[10px] px-5 text-white font-medium self-center opacity-40 hover:cursor-not-allowed max-sm:self-auto"
                                                    onClick={(e) => {
                                                        btnUpdateCart(e);
                                                    }
                                                    }
                                                >
                                                    CẬP NHẬT GIỎ HÀNG
                                                </button>
                                            </div>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>

                        <div className="mt-6">
                            <div className="float-right border border-slate-300 w-2/5 max-md:w-full">
                                <header className="bg-[#fbfbfb] py-2 px-3 border-b mb-5">
                                    <h2 className="text-[#222] font-medium text-[20px]">Cộng giỏ hàng</h2>
                                </header>
                                <table cellSpacing={0} className="text-left border-collapse mx-6 block">
                                    <tbody className="block">
                                        <tr className="border-b border-slate-300 flex max-md:justify-between">
                                            <th className="p-3 lg:mr-36 min-w-[110px]">Tạm tính</th>
                                            <td className="p-3 font-medium">200.000 ₫</td>
                                        </tr>
                                        <tr className="border-b border-slate-300 flex max-md:justify-between">
                                            <th className="p-3 lg:mr-36 min-w-[110px]">Giao hàng</th>
                                            <td className="p-3 font-medium">30.000 ₫</td>
                                        </tr>
                                        <tr className="border-b border-slate-300 flex max-md:justify-between">
                                            <th className="p-3 lg:mr-36 min-w-[110px]">Tổng</th>
                                            <td className="p-3 font-medium">230.000 ₫</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="w-full flex p-[14px] ">
                                    <button className="py-2.5 px-10 bg-[#273172] text-center w-full mx-2.5 text-white font-medium hover:opacity-80">Tiến hành thanh toán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ViewCart;
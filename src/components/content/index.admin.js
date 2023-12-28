import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productAPI from "../api/productAPI";

const ContentAdmin = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productList = await productAPI.getAll();
                console.log(productList);
                setProducts(productList.allProduct);
            } catch (error) {
                console.error(error);
            }
        };
        getProducts();
    }, []);
    function deleteUser(id) {
        if (window.confirm('Bạn có chắc chắn muốn xóa ?')) {
            productAPI.remove(id);
        }
    }

    return (
        <>
            <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-2">
                <h1 className="text-3xl font-bold">Danh sách thực phẩm</h1>
                <div className="flex flex-col">
                    <div className="overflow-x-auto mt-4 sm:-mx-6 items-center lg:-mx-8">
                        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-center">
                                    <thead className="border-b bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-white px-6 py-4"
                                            >
                                                Tên thực phẩm
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-lg text-white px-6 py-4"
                                            >
                                                Giá tiền
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-lg text-white px-6 py-4"
                                            >
                                                Hình ảnh
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-lg text-white px-6 py-4"
                                            >
                                                Loại sản phẩm
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-lg text-white px-6 py-4"
                                            >
                                                Chức năng
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-black border-b-2">

                                        {Array.isArray(products) ? (
                                            products.map((product, index) => (
                                                <tr className="bg-white border-b-2 border-black"  >
                                                    <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                        {product.productName}
                                                    </td>

                                                    <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                        {new Intl.NumberFormat('vi-VN', {
                                                            style: 'currency',
                                                            currency: 'VND'
                                                        }).format(product.price)}
                                                    </td>
                                                    <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                        <img src={product.image} alt='anh' className='w-20 h-20' />
                                                    </td>
                                                    <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                                                        {product.category}
                                                    </td>
                                                    <td className="text-sm flex justify-between h-full  items-center text-gray-900 font-bold px-6 py-8 space-x-4 whitespace-nowrap">
                                                        <Link
                                                            to={`/admin/edit/${product._id}`}
                                                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            onClick={() => deleteUser(`${product._id}`)}
                                                            to={"#"}
                                                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                                                        >
                                                            Delete
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <p>No products found.</p>
                                        )}



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentAdmin
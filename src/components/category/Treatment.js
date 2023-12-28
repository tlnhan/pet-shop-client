import React, { useContext, useEffect, useState } from 'react';
import productAPI from '../api/productAPI';
// sản phẩm điều trị
function Treatment() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const productList = await productAPI.getProductByCategory("Sản phẩm điều trị");
                console.log(productList);
                setProducts(productList.products);
            } catch (error) {
                console.error(error);
            }
        };
        getProducts();
    }, []);
    return (
        <div className="flex justify-center mt-8">
            <div className="flex flex-wrap w-1220 justify-between ">
                {/* Danh mục sản phẩm */}
                <div className="w-1/4">
                    <h2 className="font-bold"> DANH MỤC SẢN PHẨM</h2>
                </div>
                {/* Sản phẩm */}
                <div className="flex w-3/4 flex-wrap justify-between">

                    {Array.isArray(products) ? (
                        products.map((product, index) => (
                            <div key={index} className=" border-none rounded-lg py-2 shadow-xl hover:shadow-2xl bg-white mb-4 ">
                                <img
                                    className="h-[15.125rem] pb-2 px-6"
                                    src={product.image}
                                    alt="PET SHOP"
                                />
                                <h4 className="text-center pb-1 opacity-60">
                                    {product.category}
                                </h4>
                                <p className="text-center pb-1 font-bold">
                                    {product.name}
                                </p>
                                <p className="text-center">
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND'
                                    }).format(product.price)}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}


                </div>

            </div>
        </div>
    )
}
export default Treatment;
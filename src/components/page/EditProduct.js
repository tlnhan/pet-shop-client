import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productAPI from '../api/productAPI'
import HeaderAdmin from '../header/index.admin'

const EditProduct = () => {
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productImage, setProductImage] = useState('')
  const [productCategory, setProductCategory] = useState('')
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const product = await productAPI.get(id);
        setProductName(product.products.productName);
        setProductPrice(product.products.price);
        setProductImage(product.products.image);
        setProductCategory(product.products.category);
        console.log(product);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, []);

  const navigate = useNavigate();
  const data = {
    productName: productName,
    price: productPrice,
    category: productCategory,
    image: productImage
  }
  function submitForm(e) {
    e.preventDefault();
    productAPI.update(id, data, navigate);
  }
  return (
    <>
      <HeaderAdmin />
      <div>
        <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
          <h2 className="text-2xl font-bold">Edit product</h2>
          <form className="w-[50%] h-full flex flex-col mt-2">
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
              type="text"
              placeholder="Nhập tên sản phẩm"
            />
            <input
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
              type="number"
              placeholder="Nhập giá sản phẩm"
            />
            <input
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
              className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
              type="text"
              placeholder="Hình ảnh sản phẩm"
            />
            <select name='category'
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4">
              <option value="">Chọn thể loại</option>
              <option value="Thực phẩm thú cưng">Thực phẩm thú cưng</option>
              <option value="Sản phẩm vệ sinh">Sản phẩm vệ sinh</option>
              <option value="Sản phẩm điều trị">Sản phẩm điều trị</option>
            </select>
            <button
              className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
              type="submit"
              onClick={submitForm}
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditProduct
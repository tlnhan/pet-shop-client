import React, { useState } from 'react'
import HeaderAdmin from '../header/index.admin'
import { useNavigate } from 'react-router-dom'
import productAPI from '../api/productAPI'

const AddProduct = () => {

  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productImage, setProductImage] = useState('')
  const [productCategory, setProductCategory] = useState('')

  const navigate = useNavigate();
  const data = {
    productName: productName,
    price: productPrice,
    image: productImage,
    category: productCategory
  }
  function submitForm(e) {
    e.preventDefault();
    productAPI.add(data, navigate);
  }
  return (
    <>
      <HeaderAdmin />
      <div>
        <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
          <h2 className="text-2xl font-bold">Add product</h2>
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
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddProduct
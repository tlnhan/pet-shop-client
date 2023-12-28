import { Routes, Route, Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { FaBroom } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Content() {
  return (
    <div>
      {/* HOME1 */}
      <div className="flex  justify-center">
        <div className="flex w-1220">
          <div className=" flex-1 pt-28 px-14 pb-16">
            <div>
              <h1 className="text-6xl font-bold ">DỊCH VỤ THÚ CƯNG TẠI NHÀ</h1>
            </div>

            <div className="py-12 text-2xl">
              {" "}
              <b>UY TÍN HÀNG ĐẦU </b>TẠI HỒ CHÍ MINH
            </div>
            <div className="flex">
              <button className="flex p-1  bg-cyan-600  rounded-full text-white font-medium hover:bg-black hover:text-white px-3   ">
                Xem Thêm{" "}
                <FaChevronDown className="self-center pl-1 font-none" />
              </button>
            </div>
          </div>

          <div>
            <img
              className=""
              src="https://petservicehcm.com/wp-content/uploads/2019/11/pet-care-slide3-img-1.png.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* HOME2 */}
      <div className="flex justify-center pt-12 mb-32">
        <div className=" flex w-1220 justify-between items-center">
          <div className="w-1/4 mx-3 ">
            <h3 className="p-3">PET SERVICE</h3>
            <h1 className="text-6xl p-2 ">DỊCH VỤ </h1>
            <div className="border-b-4 border-indigo-500 w-24 p-2 "></div>
            <p className="text-4xl p-2 ">HÀNG ĐẦU</p>
          </div>

          <div className="w-1/4 border-2 border-slate-400 py-14 px-7 mx-3 shadow-xl rounded-lg hover:border-sky-200">
            {/* icon */}
            <FaDog className="text-7xl" />
            <h2 className="font-bold text-xl ">PET SHOP</h2>
            <p className="text-[#656565]">
              Cùng với hơn 3.000 khách hàng đã luôn tin tưởng, đồng hành, chúng
              tôi luôn đặt ra những mục tiêu và thử thách mới. PET SERVICE cung
              cấp các sản phẩm, phụ kiện rất đa dạng...
            </p>
            <button className="p-1 px-4 mt-5 bg-cyan-600 rounded-full text-white font-medium hover:bg-slate-700 hover:text-white">
              Xem Thêm
            </button>
          </div>

          <div className="w-1/4 border-2 border-slate-400 py-14 px-7 mx-3 shadow-xl rounded-lg hover:border-sky-200">
            {/* icon */}
            <FaBroom className="text-7xl" />
            <h2 className="font-bold text-xl ">PET GROOMING</h2>
            <p className="text-[#656565]">
              Chúng tối biết cách làm thế nào để thú cưng của bạn trở nên đẳng
              cấp hơn cá tính hơn. Với dịch vụ cắt tỉa lông chó / mèo chúng tôi
              sẽ giúp các bé trở thành phiên bản hoàn hảo nhất...
            </p>
            <button className="p-1 px-4 mt-5 bg-cyan-600 rounded-full text-white font-medium hover:bg-slate-700 hover:text-white">
              Xem Thêm
            </button>
          </div>

          <div className="w-1/4 border-2 border-slate-400 py-14 px-7 mx-3 shadow-xl rounded-lg hover:border-sky-200">
            {/* icon */}
            <FaDog className="text-7xl" />
            <h2 className="font-bold text-xl ">PET TREATMENT</h2>
            <p className="text-[#656565]">
              Chúng tối biết cách làm thế nào để thú cưng của bạn trở nên đẳng
              cấp hơn cá tính hơn. Với dịch vụ cắt tỉa lông chó / mèo chúng tôi
              sẽ giúp các bé trở thành phiên bản hoàn hảo nhất...
            </p>
            <button className="p-1 px-4 mt-5 bg-cyan-600 rounded-full text-white font-medium hover:bg-slate-700 hover:text-white">
              Xem Thêm
            </button>
          </div>
        </div>
      </div>

      {/* Home 3 */}
      <div className="flex justify-center pt-8 bg-gradient-to-b from-[#F0F0F0] to-[#FFFFFF] ">
        <div className=" flex w-1220 justify-between items-center my-10">
          <div className="w-1/4 mx-3 ">
            <h3 className="p-3"> HOT ITEMS</h3>
            <h1 className="text-5xl p-2  leading-2 text-cyan-900">
              SẢN PHẨM NỔI BẬT{" "}
            </h1>
            <div className="border-b-4 border-indigo-500 w-24 p-2 "></div>
            <p className="text-4xl p-2 ">HÀNG ĐẦU</p>
            <div className="flex mt-6">
              <button className="flex p-1  bg-cyan-600 rounded-full text-white font-medium hover:bg-black hover:text-white px-3   ">
                Xem cửa hàng{" "}
                <FaChevronRight className="self-center pl-1 font-none" />
              </button>
            </div>
          </div>

          <div className="w-1/4 border-2 border-none rounded-lg py-14 px-7 mx-3 shadow-xl hover:shadow-2xl bg-white ">
            <a href="/">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.QbLd897jnCjpOhjPsz9y2gHaHa&pid=Api&P=0"
                alt=""
              />
              <p className="text-center text-[#656565]">Pate & Sốt</p>
              <h4 className="text-center font-bold ">Pate chó mèo Cherman</h4>
              <h3 className="text-center text-cyan-900">
                15.000<u>đ</u>
              </h3>
            </a>
          </div>

          <div className="w-1/4 border-2 border-none rounded-lg py-14 px-7 mx-3 shadow-xl hover:shadow-2xl bg-white ">
            <a href="/">
              <img
                src="https://petnhatrang.com/wp-content/uploads/2019/11/72b07854b66879739e802c8659557922-600x600.jpeg"
                alt=""
              />
              <p className="text-center text-[#656565]">Đồ chơi</p>
              <h4 className="text-center font-bold ">Đồ chơi dây thừng</h4>
              <h3 className="text-center text-cyan-900">
                50.000<u>đ</u>
              </h3>
            </a>
          </div>

          <div className="w-1/4 border-2 border-none rounded-lg py-14 px-7 mx-3 shadow-xl hover:shadow-2xl bg-white ">
            <a href="/">
              <img
                src="https://bizweb.dktcdn.net/100/310/338/products/ban-chai-kmom-han-quoc.jpg?v=1606460374990"
                alt=""
              />
              <p className="text-center text-[#656565]">Sản phẩm vệ sinh</p>
              <h4 className="text-center font-bold ">Bộ đánh răng</h4>
              <h3 className="text-center text-cyan-900">
                70.000<u>đ</u>
              </h3>
            </a>
          </div>
        </div>
      </div>

      {/* Home 4 */}

      <div id="home4" class="flex h-80 justify-center items-center flex-col">
        <div class="w-full h-screen bg-[url('https://www.catbreedslist.com/uploads/cat-pictures/british-shorthair-2.jpg')] bg-cover bg-center">
          <div class="w-full h-full flex justify-center items-center bg-blue-700/30 backdrop-brightness-50">
            <div class="text-white text-left mr-5">
              <p className="font-bold text-2xl ">
                DỊCH VỤ TẬN TÌNH - AN TÂM CHẤT LƯỢNG <br />
              </p>
              <p>
                Liên hệ ngay để được tư vấn và báo giá các dịch vụ phù hợp cho
                bé yêu của bạn!
              </p>
            </div>
            <div class="">
              <button class="bg-white text-xl text-blue-500 hover:bg-blue-500 hover:text-white transition font-bold rounded-full p-4">
                Tư vấn miễn phí
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -- Home 4 */}

      {/* Home 5 */}
      <div id="home5" className="flex-col justify-center h-2/3 p-6">
        <div>
          <div className="flex justify-center ">
            <div>
              <div className="flex w-1/3 h-6 ">
                <div
                  id="line"
                  className="w-16 h-full mr-2 border-b-2 border-indigo-500"
                ></div>
                <div>
                  <p className=" text-lg font-semibold">Thông Tin</p>
                </div>
              </div>
              <div className="py-5 ">
                <h1 className="text-6xl font-bold ">
                  Spa Cho Thú Cưng <br />{" "}
                  <i className="text-blue-500">Chuẩn 5 Sao</i>
                </h1>
              </div>
              <div className="mt-5">
                <button class="hover:bg-white text-md hover:text-blue-500 bg-blue-500 text-white transition font-semibold rounded-full p-4">
                  Xem thêm
                </button>
              </div>
            </div>
            <div className="">
              <img
                className="object-fill h-full w-full"
                src="https://c4.wallpaperflare.com/wallpaper/598/261/137/dog-%C2%A0cat-%C2%A0poster-%C2%A0white-background-wallpaper-preview.jpg"
                alt="Transparent Dog And Cat Png - Dog Cat And Ferret, Png Download@kindpng.com"
              />
            </div>
          </div>
        </div>
        <div className="h-16 flex justify-center bg-gray-200 text-xl place-items-center font-semibold">
          <div className="flex justify-start">
            <p className="mr-2">&hearts;</p>DỊCH VỤ CHUYÊN NGHIỆP
          </div>
          <div className=" ml-4 text-blue-900">⚡NHANH CHÓNG</div>
        </div>
      </div>

      {/* ---Home 5--- */}

      {/* Home 6 */}
      <div id="home6" className="flex justify-center p-10">
        {/* Left */}
        <div className="w-1/2 flex justify-end  ">
          <img
            className=" mr-5 border-4 border-white rounded shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            src="https://petservicehcm.com/wp-content/uploads/2020/12/z2250885338986_82392d19b13edd865a8b39f5d9ba8074-1440x1080.jpg.webp"
          />
        </div>
        {/* ---Left--- */}

        {/* Right */}
        <div className="w-1/2 flex justify-center ">
          <div className="">
            {/* title section*/}
            <div className="flex w-96 h-6 ">
              <div className="w-16 h-full mr-2 border-b-2 border-indigo-500"></div>
              <div className="">
                <p className=" text-lg font-semibold">Thông Tin & Bảng Giá</p>
              </div>
            </div>
            <div className="py-5 ">
              <h1 className="text-6xl font-bold ">
                Dịch vụ cắt tỉa lông <br />{" "}
                <i className="text-blue-500">tại nhà</i>
              </h1>
            </div>
            <div className=" mt-4 flex justify-between  h-1/4">
              {/* content section */}

              <div>
                {/* left */}
                <ul className="text-md font-semibold italic space-y-4">
                  <li>
                    <span className="mr-2">&#10003;</span>Cắt gọn lông
                  </li>
                  <li>
                    <span className="mr-2">&#10003;</span>Tỉa lông tạo kiểu
                  </li>
                  <li>
                    <span className="mr-2">&#10003;</span>Cạo lông
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center  w-1/2 h-1/2">
                {/* right */}
                <div>
                  <h1 className="font-bold text-xl inline-block">
                    Chỉ từ <br />
                    <i className="text-blue-500 text-2xl">400.000đ</i>
                  </h1>
                </div>
              </div>
            </div>
            <div className="">
              {/* button group */}
              <button class="bg-white text-sm text-blue-500 box-border border  border-blue-500 hover:bg-blue-500 hover:text-white transition font-bold rounded-full p-4">
                Xem thêm
              </button>
              <Link to='/OnlineBooking'>
                <button class="ml-2 hover:bg-white text-sm box-border hover:text-blue-500 bg-blue-500 text-white transition font-semibold rounded-full p-4">
                  Đặt lịch ngay
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* ---Right--- */}
      </div>

      {/* -- Home 6 */}

      {/* Home 7 */}
      <div id="home7" className="flex justify-center justify-evenly my-8 p-4">
        {/* banner */}
        <div className="flex-col justify-center grid content-center">
          <div className=" space-y-2">
            <p className="font-semibold text-xl">Bảng giá</p>
            <h1 className="text-4xl font-bold">PET SERVICE </h1>
            <h1 className="text-6xl font-extrabold">COMBO</h1>
            <div className="w-1/3 p-2 border-b-4 border-dotted border-indigo-500"></div>
          </div>
        </div>
        {/* combo1 */}
        <div className="text-center space-y-8 py-4 w-80 flex-col flex border border-black rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="text-4xl space-y-2">
            <p>😀</p>
            <h1 className="text-blue-400 font-bold">COMBO#1</h1>
          </div>
          <div class="grid justify-items-end">
            <div className="flex text-white p-4 bg-gray-600 rounded-l-full w-9/10">
              <p className="text-md">Chỉ từ</p>
              <p className="ml-2 text-4xl font-bold">200,000 </p>
              <p className="ml-2 text-2xl font-semibold mt-auto">VNĐ</p>
            </div>
          </div>

          <ul className="font-semibold space-y-2">
            <li>✅ CẠO LÔNG</li>
            <li>✅ TẮM SẤY</li>
            <li>❌ VỆ SINH / XỊT THƠM</li>
            <li>❌ CẮT TỈA / TẠO KIỂU</li>
          </ul>

          {/* book now */}
          <div>
            <p className="font-bold text-lg hover:text-blue-400 transition cursor-pointer">
              &#9998;
              <t />
              Đặt Lịch Ngay
            </p>
          </div>
        </div>

        {/* combo2 */}
        <div className="text-center space-y-8 py-4 w-80 flex-col flex border border-black rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="text-4xl space-y-2">
            <p>😊</p>
            <h1 className="text-blue-400 font-bold">COMBO#2</h1>
          </div>
          <div class="grid justify-items-end">
            <div className="flex text-white p-4 bg-gray-600 rounded-l-full w-9/10">
              <p className="text-md">Chỉ từ</p>
              <p className="ml-2 text-4xl font-bold">300,000 </p>
              <p className="ml-2 text-2xl font-semibold mt-auto">VNĐ</p>
            </div>
          </div>

          <ul className="font-semibold space-y-2">
            <li>✅ CẠO LÔNG</li>
            <li>✅ TẮM SẤY</li>
            <li>✅ VỆ SINH / XỊT THƠM</li>
            <li>❌ CẮT TỈA / TẠO KIỂU</li>
          </ul>

          {/* book now */}
          <div>
            <p className="font-bold text-lg hover:text-blue-400 transition cursor-pointer">
              &#9998;
              <t />
              Đặt Lịch Ngay
            </p>
          </div>
        </div>

        {/* combo3 */}
        <div className="text-center space-y-8 py-4 w-80 flex-col flex border border-black rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="text-4xl space-y-2">
            <p>😍</p>
            <h1 className="text-blue-400 font-bold">COMBO#3</h1>
          </div>
          <div class="grid justify-items-end">
            <div className="flex text-white p-4 bg-gray-600 rounded-l-full w-9/10">
              <p className="text-md">Chỉ từ</p>
              <p className="ml-2 text-4xl font-bold">400,000 </p>
              <p className="ml-2 text-2xl font-semibold mt-auto">VNĐ</p>
            </div>
          </div>

          <ul className="font-semibold space-y-2">
            <li>✅ CẠO LÔNG</li>
            <li>✅ TẮM SẤY</li>
            <li>✅ VỆ SINH / XỊT THƠM</li>
            <li>✅ CẮT TỈA / TẠO KIỂU</li>
          </ul>

          {/* book now */}
          <div>
            <p className="font-bold text-lg hover:text-blue-400 transition cursor-pointer">
              &#9998;
              <t />
              Đặt Lịch Ngay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

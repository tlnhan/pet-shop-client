import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const HeaderAdmin = () => {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    navigate('/');
  }
  return (
    <>
      <div className="w-ful h-16 flex items-center px-14 justify-between gap-3 bg-teal-600">
        <Link to={"/admin"} className="text-3xl text-teal-200 font-semibold font-Montesarrat">Admin</Link>
        <div className='flex items-center px-14 justify-between gap-3'>
          <Link to={"/admin/add"} className="hover:bg-teal-600
            hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2">Add product</Link>
          {/* // button logout */}
          <button onClick={logout} className="hover:bg-teal-600
            hover:border-2 hover:border-white hover:text-teal-200 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2">Logout</button>
        </div>

      </div>
    </>
  );
}

export default HeaderAdmin
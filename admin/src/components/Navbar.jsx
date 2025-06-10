import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { DoctorContext } from '../context/DoctorContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = () => {
    const { aToken, setAToken } = useContext(AdminContext)
    const { dToken, setDToken } = useContext(DoctorContext)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('aToken');
        localStorage.removeItem('dToken');
        setAToken('');
        setDToken('');
        toast.success("Logged out successfully!");
        navigate('/login');
    }

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
            <div className='flex items-center gap-2 text-xs'>
                <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" />
                <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>
                    {aToken ? 'Admin' : dToken ? 'Doctor' : 'Guest'}
                </p>
            </div>
            <button
                type="button"
                onClick={logout}
                className='bg-[#5F6FFF] text-white text-sm px-10 py-2 rounded-full'
            >
                Logout
            </button>
        </div>
    )
}

export default Navbar

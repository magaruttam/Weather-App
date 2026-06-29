import React from 'react'
import logo from '../assets/images/logo.svg';
import unit_icon from '../assets/images/icon-units.svg';
import down_icon from '../assets/images/icon-dropdown.svg'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='flex justify-between py-8 px-2.5'>
        <img src={logo} alt="Logo" className='w-[25] h-[25] object-contain'/>
        <div className='flex items-center gap-2 bg-[#25253F] rounded-md px-3'>
            <img className='w-[16px] h-[16px]' src={unit_icon} alt="Unit Icon" />
            <h3 className='text-sm font-bold'>Units</h3>
            <img src={down_icon} alt="" />
        </div>
    </div>
  )
}

export default Header
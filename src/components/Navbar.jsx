import React from 'react'
import Image from './layer/Image'
import profile from '../../src/assets/Bitmap.png'
import Li from './layer/Li'

const Navbar = () => {
  return (
    <div className='px-20 py-14'>
      <div>
        <div className='relative w-[72px] h-[72px]'>
        <div className='w-full h-full rounded-[15px] overflow-hidden'>
        <Image src={profile}/>
      </div>
      <div className='w-7 h-7 bg-red-500 rounded-full absolute bottom-[57px] left-[57px] text-white flex justify-center items-center'>4</div>
        </div>
      <h2 className='text-3xl font-semibold text-white pt-5 pb-1'>Samantha</h2>
      <p className='font-normal text-lg text-[#cac9c9]'>samantha@email.com</p>
      </div>
      <ul className='flex flex-col gap-[30px] pt-[117px]'>
         <Li to='/' liItems='Dashboard'/>
         <Li to='/expenses' liItems='Expenses'/>
         <Li to='/wallets' liItems='Wallets'/>
         <Li to='/summary' liItems='Summary'/>
         <Li to='/accounts' liItems='Accounts'/>
         <Li to='/settings' liItems='Settings'/>
      </ul>
    </div>
  )
}

export default Navbar
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center pl-[30px] pr-[66.33px] py-[35px] bg-[#FFFFFF] shadow-[3px_0px_20px_rgba(0, 0, 0, 0.04)]'>
         <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1671570298/Group_ji3ybk.svg" alt="logo"  className='w-36 h-8'/>
         <div className='flex items-center w-[400px] pl-[20px] py-[12px] rounded-[8px] border-solid border-t-[1px] border-[#213F7D] relative'>
            <input placeholder='Search for anything' className='bg-transparent text-[14px] outline-none' />
            <button className='bg-[#39CDCC] absolute top-0 right-0 h-[100%] rounded-r-lg px-[21px] py-[12px]'><img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1677319661/Vector_jn4h82.png" alt="searchBTN" /></button>
         </div>
         <div className='flex items-center text-[#213F7D]'>
            <h3 className="text-[16px] underline not-italic leading-[19px] font-[400]">Docs</h3>
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1677319693/Vector_1_hznttz.png" alt="notificate" className='w-[19.67px] h-[22.74px] ml-[50.16px] mr-[33.16px]'/>
            <div className='flex items-center gap-[10px]'>
                <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1659614223/BilalAnsari_idjsyq.jpg" alt="" className='w-[48px] h-[48px] rounded-full' />
                <span className='flex items-center gap-1'>Jafarscript <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1677319980/Vector_2_bkrtyb.png" alt="arrowDown" /></span>
            </div>
         </div>
    </div>
  )
}

export default Header
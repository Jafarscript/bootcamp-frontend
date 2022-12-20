import React from 'react'

const Login = () => {
  return (
    <section className='h-screen grid grid-cols-2'>
        <div className='pt-28 px-20'>
          <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1671570298/Group_ji3ybk.svg" alt="logo"  className='mb-36'/>
          <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1671570337/pablo-sign-in_1_mdgqhu.svg" alt="illustration" />
        </div>
        <div className='pt-[220px] flex flex-col p-[100px]'>
            <h3 className='text-[40px] text-[#213F7D] font-bold leading-[55px]'>Welcome!</h3>
            <h6 className='mt-[10px]'>Enter details to login.</h6>
            <form action="" className='mt-[60px] flex flex-col gap-[24px]'>
              <input type="email" placeholder='Email' className='p-[17px] border-2 border-[rgba(84,95,125, 0.15)] mr-[57px]' />
              <input type="password" placeholder='placeholder' className='p-[17px] border-2 border-[rgba(84,95,125, 0.15)] mr-[57px]'/>
            </form>
        </div>
    </section>
  )
}

export default Login
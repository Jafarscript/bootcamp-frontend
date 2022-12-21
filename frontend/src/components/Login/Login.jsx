import React,{useState} from 'react'

const Login = () => {
  const [value, setValue] = useState({
    name: '',
    password: ''
  })

  const handleChange = (e) => {
    setValue({...value, [e.target.name] : e.target.value })
  }

  const handleSubmit = () => {
    
  }
  return (
    <section className='h-screen grid grid-cols-2'>
        <div className='pt-28 px-20'>
          <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1671570298/Group_ji3ybk.svg" alt="logo"  className='mb-36'/>
          <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1671570337/pablo-sign-in_1_mdgqhu.svg" alt="illustration" />
        </div>
        <div className='pt-[220px] flex flex-col p-[100px]'>
            <h3 className='text-[40px] text-[#213F7D] font-bold leading-[55px]'>Welcome!</h3>
            <h6 className='mt-[10px] text-[20px] font-extralight'>Enter details to login.</h6>
            <form action="" className='mt-[60px] flex flex-col gap-[24px] mr-[57px]' onSubmit={handleSubmit}>
              <input type="email" placeholder='Email' className='p-[17px] text-[#545F7D] rounded-[5px] text-[14px] border-2 border-[rgba(84,95,125, 0.15)] '  value={value.name} onChange={handleChange}/>
              <input type="password" placeholder='Password' value={value.password} className='p-[17px] text-[#545F7D] rounded-[5px] text-[14px] border-2 border-[rgba(84,95,125, 0.15)]' onChange={handleChange}/>
              <p className='text-[12px] text-[#39CDCC] font-semibold uppercase'>Forgotten Password ?</p>
              <button className='uppercase text-[14px] p-[15px] rounded-[8px] bg-[#39CDCC] text-white'>log in</button>
            </form>
        </div>
    </section>
  )
}

export default Login
import React,{useState} from 'react'

const Login = ({setUser}) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [show, setShow] = useState(true)

  const [err, setErr] = useState(false)

  const [errEmail, setErrEmail] = useState(false)

  const click = () => {
    setShow(!show)
  }

  const handleClick = () => {
    if( !password || password.length < 8){
      setErr(!err)
    } else {
      setErr()
    }
    if(!email || email.includes('@') === false){
      setErrEmail(!errEmail)
    }else {
      setErrEmail()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email.includes('@') && password.length > 8){
      setUser(true)
    }
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
              <input type="email" placeholder='Email' className='p-[17px] text-[#545F7D] rounded-[5px] text-[14px] border-2 border-[rgba(84,95,125, 0.15)] '  value={email} onChange={e => setEmail(e.target.value)}/>
             <p className={errEmail ? 'block text-red-700' : 'hidden'}>Invalid Email Address</p>

             <div className='w-full relative'>
             <input type={show ? 'password' : 'text'} placeholder='Password' value={password} className='p-[17px] text-[#545F7D] rounded-[5px] text-[14px] border-2 border-[rgba(84,95,125, 0.15)] w-full' onChange={e => setPassword(e.target.value)}/>
             {show ? <p className='absolute right-6 bottom-5 uppercase text-[#39CDCC] text-[12px] cursor-pointer font-semibold' onClick={click} >Show</p> : <p className='absolute right-6 bottom-5 uppercase text-[#39CDCC] text-[12px] cursor-pointer font-semibold' onClick={click} >Hide</p> }
             </div>
             <p className={err ? 'block text-red-700' : 'hidden'}>Password length should be more than 8</p>
              <p className='text-[12px] text-[#39CDCC] font-semibold uppercase'>Forgotten Password ?</p>
              <button className='uppercase text-[14px] p-[15px] rounded-[8px] bg-[#39CDCC] text-white' onClick={handleClick}>log in</button>
            </form>
        </div>
    </section>
  )
}

export default Login
import { useState } from 'react'
import Input from '../../components/form/Input'
import SubmitButton from '../../components/form/SubmitButton'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { toast } from "react-toastify"

const UserRegister = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password1: "",
    password2: ""
  })

  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (user.password1 == user.password2) {
    }
    else
      toast.error("password doesnt match")

  }
  const changeHander = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target
    setUser((prevUser) => ({ ...prevUser, [name]: value }))
  }
  return (
    <div className='flex items-center h-screen justify-center'>
      <form onSubmit={submitHandler} className='rounded-lg flex px-5 py-9 flex-col gap-5 items-center bg-white drop-shadow-lg'>
        <p className='text-3xl mb-5 font-bold text-blue-600'>
          Register
        </p>
        <div className='flex flex-col gap-2'>
          <Input name='name' placeholder='username' type='text' onchange={changeHander} />
          <Input name='email' placeholder='email' type='text' onchange={changeHander} />
          <Input name='password1' placeholder='password' type='password' onchange={changeHander} />
          <Input name='password2' placeholder='confirm password' type='password' onchange={changeHander} />
        </div>
        <SubmitButton text="Register" />
        <div className='flex flex-col'>
          <Link to="/login" className='text-blue-500 underline'>all ready have an account?</Link>
          <Link to="/mentor/register" className='text-blue-500 underline'>want to become a mentor?</Link>
        </div>
        {/* <span className='bg-gray-400 w-full h-[1px]'></span> */}
      </form>
    </div>
  )
}

export default UserRegister
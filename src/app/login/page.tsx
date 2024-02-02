'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const route = useRouter();

    const submit = (event) =>{
        event.preventDefault();
        
        if(email === 'raviarya4542@gmail.com' && password === '1234'){
            route.push('/login/admin')
        }
        else{
            console.log("wrong password");
        }
        
    }
  return (
    <div className='flex justify-center items-center h-svh text-white'>
        <form  className='flex flex-col border p-10 rounded-lg border-solid border-4 '>

            <div className=' p-3 flex '>
            <label htmlFor="email">Email:</label>
            <input className='text-black ml-8' onChange={(event) => setEmail(event.target.value)} type="email" title='email' id='email' required/>
            </div>
            
            <div className='p-3 flex '>
            <label htmlFor="password">Password:</label>
            <input className='text-black' onChange={(e) => setPassword(e.target.value)} type="password"  title='password' id='password' required/>
            </div>

            <div className='flex justify-center'>
            <button onClick={submit} className='text-white p-1 rounded-xl bg-green-500'> 
                  Submit
                </button>
            </div>
        </form>
    </div>
   
  )
}

export default page
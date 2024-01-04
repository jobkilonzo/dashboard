"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [form, setForm]  = useState({
    name: '', 
    email: ''})
    const router = useRouter()


 
  const handleSubmit = async (e)=> {
    e.preventDefault()
    
    try{
      const response = await fetch("api/", {
        method: 'POST',
        body: JSON.stringify({
          name: form.name,
          email: form.email
        })
      })
      if(response.ok){
        router.push('/')
        setForm({name: '', email:''})
      }
    }catch(error){
      console.log(error)
    }
  }
  return (
    <main className="">
      <form onSubmit={handleSubmit} className='flex justify-center flex-col items-center mt-8 gap-2'>
        <input type='text' 
        value={form.name}
        onChange={(e) => setForm({...form, name: e.target.value})}
        placeholder='Enter your name' 
        className='px-3 py-2'/>
        <input type='email' 
        value={form.email}
        onChange={(e) => setForm({...form, email: e.target.value})}
        placeholder='Enter your email' className='px-3 py-2'/>
        <input type='submit' className='px-10 py-2 bg-green-500 rounded-full text-white '/>
      </form>
    </main>
  )
}

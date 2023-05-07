import React from 'react';

import {useForm,SubmitHandler} from "react-hook-form";





const Contact =()=> {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
    window.location.href = `mailto:kj_painting_decorating@yahoo.com?subject=${data.subject}&body=Hi my name is ${data.name}. ${data.message} (${data.email})`;
  }



  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center p-4'>Lets work together</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input {...register('name')} className='border shadow-lg p-3' type="text" placeholder='Name' />
                <input {...register('email')} className='border shadow-lg p-3' type="email" placeholder='Email' />
            </div>
            <input {...register('subject')} className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
            <textarea {...register('message')} className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact
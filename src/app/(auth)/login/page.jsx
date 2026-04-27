'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const {register,handleSubmit, formState: { errors }, watch} = useForm();

    const handleLoginFunc =(data) =>{
        console.log(watch("email"));
        console.log(watch("password"));

    }


    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
           <div className='p-4 rounded-xl bg-white'>
            <h2 className='font-bold text-center mb-6'>Login your account</h2>
          <form className='space-y-4' onSubmit ={handleSubmit(handleLoginFunc)}>
              <fieldset className="fieldset">
               <legend className="fieldset-legend">Email</legend>
               <input type="email" className="input"  placeholder="Enter your email address" {...register("email" , { required: "Email field is required"})} />
                <p className="label"></p>
                {errors.email && (
              <p className="text-red-500 text-sm">
               {errors.email.message}
                </p>
               )}
               </fieldset>
               <fieldset className="fieldset">
               <legend className="fieldset-legend">Password</legend>
               <input type="password" className="input" placeholder="Enter your password" {...register("password" , { required: "Password field is required "})} />
               {errors.password && (
              <p className="text-red-500 text-sm">
               {errors.password.message}
                </p>
               )}
                
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-full bg-slate-800 text-white">Login</button>
                <p className='mt-4'> Don't have an account? <Link href={'/register'} className='text-blue-500'>Register</Link></p>
               </fieldset>
            </form>

           </div>
        </div>
    );
};

export default LoginPage;
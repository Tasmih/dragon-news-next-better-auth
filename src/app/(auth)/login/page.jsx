'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaRegEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

   const  [isShowPassword, setIsShowPassword] = useState (false);

    const handleLoginFunc = async (data) => {
        console.log(watch("email"));
        console.log(watch("password"));

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            console.log("Login Error:", error);
        } else {
            console.log("Login Success:", res);
        }
    };

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
           <div className='p-4 rounded-xl bg-white'>
            <h2 className='font-bold text-center mb-6'>Login your account</h2>

          <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>

              {/* Email */}
              <fieldset className="fieldset">
               <legend className="fieldset-legend">Email</legend>
               <input
                 type="email"
                 className="input"
                 placeholder="Enter your email address"
                 {...register("email", { required: "Email field is required" })}
               />
               {errors.email && (
                 <p className="text-red-500 text-sm">
                   {errors.email.message}
                 </p>
               )}
              </fieldset>

              {/* Password */}
              <fieldset className="fieldset relative">
               <legend className="fieldset-legend">Password</legend>
               <input
                 type={isShowPassword ? "text": "password"}
                 className="input"
                 placeholder="Enter your password"
                 {...register("password", { required: "Password field is required" })}
               />
                  <span className='absolute right-2 top-4 cursor-pointer' onClick={()=>setIsShowPassword(!isShowPassword)}> {isShowPassword ?  <FaEye/> : <FaEyeSlash/>} </span> 
               {errors.password && (
                 <p className="text-red-500 text-sm">
                   {errors.password.message}
                 </p>
               )}
              </fieldset>

              <button className="btn w-full bg-slate-800 text-white">
                Login
              </button>

              <p className='mt-4'>
                Don't have an account?{" "}
                <Link href={'/register'} className='text-blue-500'>
                  Register
                </Link>
              </p>

          </form>

           </div>
        </div>
    );
};

export default LoginPage;
'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const handleRegisterFunc = (data) => {
        console.log(data, "data");

        const { email, name, photo, password } = data;
        console.log(name, photo);
    };

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
           <div className='p-4 rounded-xl bg-white'>
            
            <h2 className='font-bold text-center mb-6'>
                Register your account
            </h2>

            <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>

              {/* Name */}
              <fieldset className="fieldset">
               <legend className="fieldset-legend">Name</legend>
               <input 
                 type="text" 
                 className="input"  
                 placeholder="Enter your name" 
                 {...register("name", { required: "Name field is required" })} 
               />
               {errors.name && (
                  <p className="text-red-500 text-sm">
                    {errors.name.message}
                  </p>
               )}
              </fieldset>

              {/* Photo URL (FIXED) */}
              <fieldset className="fieldset">
               <legend className="fieldset-legend">Photo URL</legend>
               <input 
                 type="text" 
                 className="input"  
                 placeholder="Type here photo url" 
                 {...register("photo", { required: "Photo URL field is required" })} 
               />
               {errors.photo && (
                  <p className="text-red-500 text-sm">
                    {errors.photo.message}
                  </p>
               )}
              </fieldset>

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
              <fieldset className="fieldset">
               <legend className="fieldset-legend">Password</legend>
               <input 
                 type="password" 
                 className="input" 
                 placeholder="Enter your password" 
                 {...register("password", { required: "Password field is required" })} 
               />
               {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
               )}
              </fieldset>

              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-full bg-slate-800 text-white">
                Register
              </button>

              <p className='mt-4'>
                Already have an account?{" "}
                <Link href={'/login'} className='text-blue-500'>
                  Login
                </Link>
              </p>

            </form>

           </div>
        </div>
    );
};

export default RegisterPage;
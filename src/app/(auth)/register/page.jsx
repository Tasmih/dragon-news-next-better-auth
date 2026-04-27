'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleRegisterFunc = async (data) => {
        console.log(data, "data");

        const { email, name, photo, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: '/',
        });

        console.log(res, error);

        if (error) {
            alert(error.message);
        }

        if (res) {
            alert("Signup successful");
        }
    };

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white w-full max-w-md'>

                <h2 className='font-bold text-center mb-6'>
                    Register your account
                </h2>

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>

                    {/* Name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Enter your name"
                            {...register("name", { required: "Name field is required" })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">
                                {errors.name.message}
                            </p>
                        )}
                    </fieldset>

                    {/* Photo URL */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input
                            type="text"
                            className="input w-full"
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
                            className="input w-full"
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
                            type={isShowPassword ? "text" : "password"}
                            className="input w-full pr-10"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password field is required" })}
                        />

                        {/* Eye Icon */}
                        <span
                            className='absolute right-3 top-4 cursor-pointer text-lg'
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >
                            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>

                        {errors.password && (
                            <p className="text-red-500 text-sm">
                                {errors.password.message}
                            </p>
                        )}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white">
                        Register
                    </button>

                    <p className='mt-4 text-center'>
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
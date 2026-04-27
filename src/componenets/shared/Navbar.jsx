'use client';
import Image from 'next/image';
import Link from 'next/link';

import userAvater from '@/assets/user.png';
import NavLink from './NavLink';
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session , isPending} = authClient.useSession();
  const user = session?.user;
  console.log(user, isPending, "user");

  return (
    <div className='container mx-auto flex justify-between items-center py-4 mt-4'> 
      
      <div></div>

      <ul className='flex gap-6 text-gray-700'>
        <li><NavLink href={"/"}>Home</NavLink></li>
        <li><NavLink href={"/about"}>About</NavLink></li>
        <li><NavLink href={"/career"}>Career</NavLink></li>
      </ul>

       { isPending ?(<span className="loading loading-spinner loading-xl"></span>): user ? (
        <div className='flex items-center gap-2'>
          <h2>Hello, {user?.name}</h2>

          <Image 
            src={user?.image || userAvater}
            alt="User avatar" 
            width={60} 
            height={60} 
            className='rounded-full'
          />

          {/* logout btn */}
          <button className='px-3 py-1 bg-purple-400 text-white rounded' onClick={async()=>{await authClient.signOut();}}>
            Logout
          </button>
        </div>
      ) : (
        <Link href="/login">
          <button className='btn bg-purple-400 text-shadow-white px-4 py-2 rounded'>
            Login
          </button>
        </Link>
      )}

    </div>
  );
};

export default Navbar;
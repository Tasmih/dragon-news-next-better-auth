import Image from 'next/image';
import Link from 'next/link';

import userAvater from '@/assets/user.png';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between items-center py-4 mt-4'> 
      <div></div>
  
      <ul className='flex gap-6 text-gray-700'>
        <li><NavLink href={"/"} className={'text-red-400'}>Home</NavLink></li>
        <li><NavLink href={"/about"}>About</NavLink></li>
        <li><NavLink  href={"/career"} >Career</NavLink></li>
      </ul>

    
      <div className='flex items-center gap-4'>
        <Image 
          src={userAvater} 
          alt="User avatar" 
          width={50} 
          height={50} 
          className='rounded-full'
        />

        <Link href="/login">
          <button className='btn bg-purple-400 px-4 py-2 rounded'>
            Login
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
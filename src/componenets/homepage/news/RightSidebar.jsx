'use client'
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri';
import Img from '@/assets/swimming.png'
import Img1 from '@/assets/class.png'
import Img2 from '@/assets/playground.png'
import Image from 'next/image';
import { authClient } from "@/lib/auth-client";


const RightSidebar = () => {

    const handleGoogleSignin = async()=>{
        const data = await authClient.signIn.social({
    provider: "google",
    });
    console.log(data,'data');
    };
     const handleGithubSignin = async()=>{
        const data = await authClient.signIn.social({
    provider: "github",
    });
    console.log(data,'data');
    }
    return (
        <div className=''>
            <h2 className='font-bold text-lg mb-4'>Login with</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn border-blue-500 text-blue-500' onClick={handleGoogleSignin}>
               <FaGoogle/> Login with google
                </button>
            <button className='btn' onClick={handleGithubSignin }>
              <FaGithub/>  Login with github
                </button>
            </div>

            <div>
                <h2 className='mt-4'>Find Us On </h2>
                <div className='flex flex-col '>
                  <button className='btn'><RiFacebookCircleLine /> Facebook</button>
                  <button className='btn'><FaTwitter /> Twitter</button>
                  <button className='btn'> <RiInstagramLine />Instagram</button>
                </div>
            </div>

            <div>
                <h2 className='mt-4 mb-2'>Q-Zone</h2>
                <div>
                    <Image
          src={Img}
          alt="Swimming image"
          width={300}
          height={200}
          className="rounded-md"
        />
                    <Image
          src={Img1}
          alt="Swimming image"
          width={300}
          height={200}
          className="rounded-md"
        />
                    <Image
          src={Img2}
          alt="playground image"
          width={300}
          height={200}
          className="rounded-md"
        />
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
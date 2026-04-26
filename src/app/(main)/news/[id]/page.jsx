import {  getNewsDetailsByCategoryId } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CiBookmark } from 'react-icons/ci';
import { IoIosStar, IoMdEye } from 'react-icons/io';
import { IoShareSocialOutline } from 'react-icons/io5';

export const generateMetadata = async({params})=> {
   const {id} =await params;
   console.log(id,"params")
   const news =await getNewsDetailsByCategoryId (id);
   console.log(news,'news');

   return{
    title:news.title,
    description:news.details,
   };
 
};
const NewsDetailsPage = async({params}) => {
    const {id} =await params;
   // console.log(id ,'params');

    const news = await getNewsDetailsByCategoryId(id);
    //console.log(news,'news');
    return (
         <div className='max-w-2xl mx-auto my-8 card'>
       
      <div className="card bg-base-100  shadow-sm">
  <div className="card-body">

    {/* author info */}
    
        {/* left side */}
        <div className='flex gap-1 items-center justify-between bg-slate-400'>
            <Image 
            
            src={news.author?.img} 
            alt={news.author?.name}
            height={40} width={40}
             className='rounded-full'/>
             <div>
                <h2 className='font-semibold'>{news.author?.name}</h2>
                <p className='text-xs'>{news.author?.published_date}</p>
             </div>


         {/* right side */}
        
        <div className='flex justify-between items-center'>
            <IoShareSocialOutline className='text-xl' />
            <CiBookmark className='text-xl'  />
        </div>

       
    
    </div>
    <h2 className="card-title">{news.title}</h2>
   

    <figure>
    <Image
      src={news.image_url}
      alt={news.title} width={300} height={300} className='w-full'/>
  </figure>
  <p className=''>{news.thumbnail_url}</p>
  <p className=''>{news.published_date}</p>
  <p className=''>{news.details}</p>


 <div className='flex items-center justify-between gap-2'>

 <div className='flex items-center gap-2'>
    <h2 className='flex items-center gap-2'><IoIosStar className='text-lg text-yellow-500'/>{news.rating.number}</h2>
    <h2 className='flex items-center gap-2'><IoMdEye  className='text-lg'/> {news.total_view}</h2>
 </div>
 <Link href={`/category/${news.category_id}`}> 
 <button className='btn bg-purple-500 text-white'>See other news for this category  <BsArrowRight/> </button>
 </Link>
 
 
 </div>
 
    
  </div>
  
</div>
        </div>
    );
};

export default NewsDetailsPage;
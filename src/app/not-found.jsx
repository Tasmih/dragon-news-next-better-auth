import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="text-center">
        
    
        <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">
          404
        </h1>

        
        <p className="text-xl md:text-2xl font-medium text-gray-600 mt-4">
          Oops! Page not found
        </p>

        
        <p className="text-gray-500 mt-2 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>


        <Link href="/">
          <button className="px-6 py-3 bg-black text-white rounded-xl shadow-md hover:bg-gray-800 transition-all duration-300">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
    );
};

export default NotFoundPage;
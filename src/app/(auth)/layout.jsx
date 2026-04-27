import Navbar from '@/componenets/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';

const AuthLayout = ( {children}   ) => {
    return (
        <div className={`${montserrat.className}`}>
         <Navbar/>
         {children}   
        </div>
    );
};

export default AuthLayout;
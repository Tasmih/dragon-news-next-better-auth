import Navbar from '@/componenets/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';

const AuthLayout = ( {Children}   ) => {
    return (
        <div className={`${montserrat.className}`}>
         <Navbar/>
         {Children}   
        </div>
    );
};

export default AuthLayout;
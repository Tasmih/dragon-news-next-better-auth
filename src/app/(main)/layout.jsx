import BreakingNews from '@/componenets/shared/BreakingNews';
import Header from '@/componenets/shared/Header';
import Navbar from '@/componenets/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
           <Header/>
           <BreakingNews></BreakingNews>
        <Navbar/> 
        {children} 
        </>
    );
};

export default MainLayout;
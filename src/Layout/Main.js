import React from 'react';
import { Outlet } from 'react-router-dom';
import Drawer from '../Pages/Shared/Drawer';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Drawer />
            {/* <Outlet /> */}
            <Footer />
        </div>
    );
};

export default Main;
import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Component/Navber';
import Foother from '../Component/Foother';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Foother></Foother>
        </div>
    );
};

export default Root;
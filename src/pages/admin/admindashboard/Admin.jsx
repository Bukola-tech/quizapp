import React from 'react'; // Import React correctly
import { Outlet } from 'react-router-dom'; // Import Outlet from 'react-router-dom'

const Admin = () => {
    return (
        <>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Admin;

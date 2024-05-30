import React from 'react'; // Import React correctly
import { Outlet } from 'react-router-dom'; // Import Outlet from 'react-router-dom'
import Sidebar from '../../../components/navigation/sidenav/Sidebar';
import styles from './css/dashboardmain.module.css'; // Import CSS module properly

const DashboardMain = () => {
    return (
        <>
            <div className={styles.manny}> {/* Fix the typo */}
                <Sidebar />
                <Outlet />
            </div>
        </>
    );
};

export default DashboardMain;

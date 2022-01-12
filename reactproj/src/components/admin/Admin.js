import React from 'react'
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
// import PieChart from "./PieChart";
import Sidebar from "./Sidebar";

const Admin = () => {
    return (
        <div>
            <Navbar />
            <div class="container-fluid" id="main">
                <div class="row row-offcanvas row-offcanvas-left">
                    <Sidebar />
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}

export default Admin

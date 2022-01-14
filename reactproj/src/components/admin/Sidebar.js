import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef" }}>
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li className="nav-item mb-2 mt-3">
                    <Link className="nav-link text-secondary" to="/admin">
                        <h5>Musika Dashboard</h5>
                    </Link>
                </li>
                <li className="nav-item mb-2 "> <span className="ml-3"><NavLink
                    className="nav-link"
                    to="/addProduct"
                //  className={classes.link}
                >
                    Add Transcription
                </NavLink></span></li>
                <li className="nav-item mb-2">
                    <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                        <li className="nav-item mb-2 ">


                        </li>
                        {/* <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i> File Report </a></li> */}
                    </ul>
                </li>
                {/* <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Analytics</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-file-export font-weight-bold"></i><span className="ml-3">Export</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Snippets</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-atom font-weight-bold"></i> <span className="ml-3">Flex</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-folder font-weight-bold"></i> <span className="ml-3">Layouts</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#">Templates</a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#">Themes</a></li> */}
            </ul>
        </div>
    )
}

export default Sidebar
import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/data/navLinks";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidbar">
            <div className="sidebar__top">
                <h2>
                    <i class="ri-file-search-fill"></i> thicNsearch
                </h2>
            </div>

            <div className='siderbar__content'>
                <div className="menu">
                    <ul className="nav__list">
                        {navLinks.map((item, index)=>(
                            <li className="nav__item">
                                <NavLink to={item.path}>
                                <span>
                                    <i className={item.icon}></i>
                                </span>{" "} 
                                {item.display}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;


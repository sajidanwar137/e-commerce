import React, { useState }from 'react'
import { NavLink } from 'react-router-dom';

function AdminSideNavigation({ title, content, index }) {
    console.log("index", index)
    const [isActive, setIsActive] = useState(false);
    const [activeId, setActiveId] = useState();
    return (
        <li key={index} className={isActive ? 'isActive' : ''}>
            <div className="dc-dashboard__sidebar-nav--title" onClick={() => setIsActive(!isActive)}><h5><i className="fa-solid fa-crosshairs"></i>{title}</h5><span>{isActive ? <i className="fa-solid fa-chevron-down"></i> : <i className="fa-solid fa-chevron-right"></i>}</span></div>
            {isActive && content && <ul className="dc-dashboard__sidebar-nav--subitem">
                {content && content.map((item, index) =>{
                    return <li key={index} onClick={() => setActiveId(index)} className={activeId === index ? "selected" : ""}><NavLink>{item.linkText}</NavLink></li>
                })}
                </ul>
            }
        </li>
    )
}

export default AdminSideNavigation

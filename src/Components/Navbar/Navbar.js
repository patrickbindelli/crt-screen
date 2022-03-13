import "./style.css";
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"

function Navbar(props){
    const [activeIndex, setActiveIndex] = React.useState(0);


    useEffect(() => {
        setActiveIndex(JSON.parse(window.localStorage.getItem('activeIndex')));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('activeIndex', activeIndex);
      }, [activeIndex]);

    const handleOnClick = index => {
        setActiveIndex(index);
    };

    return(
        <div className="topnav">
            {props.options.map((op, index )=> 
                <Link className={activeIndex === index ? "active" : "unactive"} to={op.href} onClick={() => handleOnClick(index)}>{op.option}</Link>
            )}
        </div>
    )
};

export default Navbar;
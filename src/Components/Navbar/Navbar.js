import "./style.css";
import React, { useEffect, useState } from 'react';

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
                <a key={index} className={activeIndex === index ? "active" : "unactive"} href={op.href} onClick={() => handleOnClick(index)}>{op.option}</a>,
            )}
        </div>
    )
};

export default Navbar;
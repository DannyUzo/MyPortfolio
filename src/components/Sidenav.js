import React from 'react';

function Sidenav(){
    const handleClick = () => {
        const menu = document.getElementsByClassName("navbar-menu")[0];
        menu.style.right = "-10%";
        
    }

    return(
        <button onClick={handleClick} className='menu-btn'>
            <i class="fi fi-rr-menu-burger"></i>
            {/* <i class="fi fi-rr-cross"></i> */}
        </button>
    );
}
export default Sidenav;
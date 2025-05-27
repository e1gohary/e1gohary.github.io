import { useState, useEffect, useRef } from 'react'
import './assets/css/header.css'
import menu_icon from './assets/imgs/three_line_menu.svg'
import search_icon from './assets/imgs/search_icon.svg'
import cart_icon from './assets/imgs/cart_icon.svg'
import logo_img from './assets/imgs/logo.png'
export default function Header(props){
    const [sidebarState, setSideBarState] = useState(false);
    const [cartBarState, setCartBarState] = useState(false);
    const sideBarRef = useRef(null);
    const cartBarRef = useRef(null);
    let handleCloseSideBarMenuListener = (e) => {
        if(!(sideBarRef?.current?.contains(e.target))) close_all_menus();
    }
    
    useEffect(() => {
        // fetch("http://test.gogo.net:5173", {mode: 'no-cors'})
        document.addEventListener("click", handleCloseSideBarMenuListener, true);
        return () => document.removeEventListener("click", handleCloseSideBarMenuListener, true);
    },[])
    function close_all_menus(){
        setSideBarState(c => false);
        setCartBarState(c => false);
    }
    console.log("Header Loaded")
    return (
        <div className="header">
            <button className='sidebar_menu_icon' type='button' onClick={() => setSideBarState(c => true)}>
            <img src={menu_icon} alt="" />
            </button>
            <img className="logo" src={logo_img} alt="" />
            <button className='nav_search_icon' type='button'>
            <img src={search_icon} alt="" />
            </button>
            <button className='nav_cart_icon' type='button' onClick={() => setCartBarState(c => true)}>
            <img src={cart_icon} alt="" />
            </button>
            {props.isMobile && <><div className={"sideBarMenu " + (sidebarState ? "side_bar_open" : "")} ref={sideBarRef}>
                
            </div></>}
            {props.isMobile && <><div className={"cartBarMenu " + (cartBarState ? "cart_bar_open" : "")} ref={cartBarRef}>

            </div></>}
        </div>
    )
}

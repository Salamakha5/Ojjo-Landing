import logo from '../img/logo.png'
import search_img from '../img/search.svg'
import user_img from '../img/user.svg'
import heart_img from '../img/heart.svg'
import open_img from '../img/open.svg'
import close_img from '../img/close.svg'
import Telegram_img from '../img/Telegram.svg'
import VK_img from '../img/VK.svg'
import E_img from '../img/E.svg'
import faceBook_img from '../img/faseBook.svg'
import youTube_img from '../img/youtube.svg'
import React, { useState } from 'react';
import {BrowserRouter as Router , Route , Routes, NavLink} from 'react-router-dom';

function Navbar(){
    const [burger, setBurger] = useState("Open");
    const [ScreenBlock, setScreenBlock] = useState("none");
    const [ScreenBlock1, setScreenBlock1] = useState("block");
    function openBurger(){
        if(burger == "Open"){
            setBurger("Close")
            setScreenBlock("block")
            setScreenBlock1("none")
        }
        else{
            setBurger("Open")
            setScreenBlock("none")
            setScreenBlock1("block")
        }
    }

    return(
       <div className="navbar pt-4 row p-5 pb-3 m-0 justify-content-around align-items-center">
            <div className='left_links col-4'>
                <NavLink className='link' to='/'>Головна</NavLink>
                <NavLink className='link' to='/catalog'>Каталог</NavLink>
                <NavLink className='link' to='/contacts'>Контакти</NavLink>
            </div>
            <div className='col-3 logo align-items-center '>
                <div className='logo_container'>
                    <img src={logo} alt="" />
                </div>
                <div className='burger_container'>
                    <img src={close_img} className={ScreenBlock}  onClick={openBurger} alt="" />
                    <img src={open_img}  className={ScreenBlock1} onClick={openBurger} alt="" />
                </div>
            </div>
         {/* smollScreen */}
            <div className={ScreenBlock+" "+'smollScreen mt-2'} id='smollScreen'>
                <div className='mt-4'>
                <NavLink className='link' to='/'>Головна</NavLink>
                </div>
                <div className='mt-4'>
                <NavLink className='link' to='/catalog'>Каталог</NavLink>
                </div>
                <div className='mt-4'>
                <NavLink className='link' to='/contacts'>Контакти</NavLink>
                </div>
                <div className='mt-4'>
                <NavLink className='link' to='/'>Вхід/Реєстрація</NavLink>
                </div>
                <hr className='text-white' />
                <div>
                    <a href="" className='icons_container'>
                        <img className='iconsSize' src={user_img} alt="" />
                    </a>
                    <a href="" className='icons_container'>
                        <img className='iconsSize' src={heart_img} alt="" />
                    </a>
                </div>
                <hr className='text-white' />
                <div className='mb-4'>
                    <a href="" className='icons_container'>
                        <img className='iconsSize' src={youTube_img} alt="" />
                    </a>
                    <a href="" className='icons_container'>
                        <img className='iconsSize' src={VK_img} alt="" />
                    </a>
                    <a href="" className='icons_container'>
                        <img className='iconsSize' src={faceBook_img} alt="" />
                    </a>
                    <a href="" className='icons_container'>
                        <img className='iconsSize' src={Telegram_img} alt="" />
                    </a>
                    <a href="" className='icons_container'>
                        <img className='iconsSize' src={E_img} alt="" />
                    </a>
                </div>
            </div>
         {/* smolScreen */}
            <div className='right_links col-4 '>
                <a href="" className='link d-flex align-items-center'>
                    <img className='pe-4 ' src={search_img} alt="" />
                    <span>Пошук</span>
                </a>
                <a href="" className='link  d-flex align-items-center'>Вхід/Реєстрація</a>
                <a href="">
                    <img className='opas' src={user_img} alt="" />
                </a>
                <a href="">
                    <img className='opas' src={heart_img} alt="" />
                </a>
            </div>
       </div>
    )
}

export default Navbar
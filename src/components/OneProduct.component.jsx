import Card_img from "../img/CardImg.png"
import Group_img from "../img/Group.png"
import Ribbon_img from "../img/ribbon-design.png"
import List_img from "../img/list_img.png"
import Car_img from "../img/carImg.png"
import React, { useState, useEffect ,useReducer} from 'react';
import {BrowserRouter as Router , Route , Routes,NavLink} from 'react-router-dom';

import OneCard from "./oneCard.component"
function OneProduct(){
    const [data1,setData1] = useState([0,0,0,0,0,0])
    const [points,setPoints] = useState("...")
    const [buttonOpenInfo,setOpenInfo] = useState("ЧИТАТИ ДАЛІ")
    const [block,setBlock] = useState("d-none")
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    function addProduct(){
        let a = data1
        a.unshift(1,1,1)
        setData1(a)
        forceUpdate()
    }
    function openInfo(){
        if(block == "d-none"){
            setPoints(".")
            setOpenInfo("ПРИХОВАТИ")
            setBlock("d-block")
        }else{
            setPoints("...")
            setOpenInfo("ЧИТАТИ ДАЛІ")
            setBlock("d-none")
        }
    }
    return(
        <div className="container">
            <div className="d-flex justify-content-center mt-5 aling-items-center">
                <NavLink to="/" className="text-dark ms-2 me-2">Головна</NavLink>
                <p>/</p>
                <NavLink to="/catalog" className="text-dark ms-2 me-2">Каталог</NavLink>
                <p>/</p>
                <NavLink to="/catalog" className="text-dark ms-2 me-2">Категорії</NavLink>
                <p>/</p>
                <NavLink to="/catalog" className="text-dark ms-2 me-2">Підвіска Dolce & Gabarra</NavLink>
            </div>

            <div className="row m-0 mt-5 d-flex">
                <div className="col-12 col-lg-6 imgBlock">
                    <div className=" mb-3 d-flex justify-content-center">
                        <img className="w-100" src={Card_img} alt="" />
                    </div>
                    <div className=" p-0 d-flex row justify-content-center">
                        <div className="col p-0">
                        <img className="p-1 w-100" src={Card_img} alt="" />
                        </div>
                        <div className="col p-0">
                        <img className="p-1 w-100" src={Card_img} alt="" />
                        </div>
                        <div className="col p-0">
                        <img className="p-1 w-100" src={Card_img} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 infoBlock d-flex align-items-center border border-2 p-3">
                    <div className="border border-2 p-3">
                        <h2>ПІДВІСКА DOLCE & GABBARA</h2>
                        <div className="d-flex text-secondary mt-4">
                            <span >Категорія:</span>
                            <span className="ms-2">Підвіски</span>
                            <span className="ms-2">Бренд:</span>
                            <span className="ms-2">Dolce & Gabbara</span>
                        </div>
                        <div className="border-bottom border-3 w-100 mt-5"></div>
                        <p className="pt-4 ps-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus. Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est, fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac varius at amet viverra feugiat non massa.
Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus. 
Et nulla sit convallis orci est, fames sit luctus lacus. 
</p>
                    <h1 className="">200 000 $</h1>
                    <div className="d-flex row m-0">
                        <div className="mb-4 col-12 col-lg-4">
                            <NavLink to="/catalog" className=" button2 me-2">КУПИТИ</NavLink>
                        </div>
                        <div className="col-12 col-lg-8">
                            <NavLink to="/catalog" className="button2 ">ДОДАТИ ДО КОШИКА</NavLink>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="info_container row m-0 mb-5  mt-5 pt-5 container d-flex justify-content-around">
                    <div className="infoBlock col">
                        <h5><div className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, recusandae exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis adipisci necessitatibus laudantium alias ipsam! Minima perspiciatis pariatur{points}</div><div className={block}>Eos magnam quisquam vero ut! Reiciendis ex, temporibus voluptatem recusandae dolorem natus a? perspiciatis optio facere et vero perferendis quod aspernatur quis quaerat quas quidem dolores dignissimos nemo nam nisi doloremque consequuntur.</div></h5>
                        <h4 className="openinfo" onClick={openInfo}>{buttonOpenInfo}</h4>
                    </div>
                    <div className="col">
                        <div className="d-flex row m-0">
                            <div className="col">
                                <div className="d-flex justify-content-center">
                                    <img src={Car_img} alt="" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <h4 className="text-center minw">Безкоштовна доставка</h4>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex justify-content-center">
                                    <img src={List_img} alt="" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <h4 className="text-center minw">Індивідуальний дизайн</h4>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex row mt-3">
                            <div className="col">
                                <div className="d-flex justify-content-center">
                                    <img src={Ribbon_img} alt="" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <h4 className="text-center minw">Безкоштовна примірка</h4>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex justify-content-center">
                                    <img src={Group_img} alt="" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <h4 className="text-center minw">Особистий підхід</h4>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <p className="text-center fs-3 mt-5 ">Ми підготували для вас щось ще</p>
            <p className="fs-2 text-center"><strong>Товари, які можуть вам сподобатися</strong></p>
            <div className="row m-0">
                <div className="col d-flex justify-content-center">
                    <OneCard></OneCard>
                </div>
                <div className="col d-flex justify-content-center">
                    <OneCard></OneCard>
                </div>
                <div className="col d-flex justify-content-center">
                    <OneCard></OneCard>
                </div>
            </div>
            </div>
        </div>
    )
}
export default OneProduct
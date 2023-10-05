import OneCard from "./oneCard.component"
import React, { useState, useEffect ,useReducer} from 'react';
import Group_img from "../img/Group.png"
import Ribbon_img from "../img/ribbon-design.png"
import List_img from "../img/list_img.png"
import Car_img from "../img/carImg.png"

function Catalog(){
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
            <div className="d-flex justify-content-around">
                <div className="row m-0 mt-5">
                    <div className="col">
                    <select className="form-select minSize" aria-label="Default select example">
  <option defaultValue>Бренд </option>
  <option value="1">...</option>
</select>
                    </div>
                    <div className="col">
                    <select className="form-select minSize" aria-label="Default select example">
  <option defaultValue>Ціна</option>
  <option value="1">...</option>
</select>
                    </div>
                    <div className="col">
                    <select className="form-select minSize" aria-label="Default select example">
  <option defaultValue>Для кого</option>
  <option value="1">...</option>
</select>
                    </div>
                    <div className="col">
                    <select className="form-select minSize" aria-label="Default select example">
  <option defaultValue>Колекція</option>
  <option value="1">...</option>
</select>
                    </div>
                    <div className="col">
                    <select className="form-select minSize" aria-label="Default select example">
  <option defaultValue>Сезон</option>
  <option value="1">...</option>
</select>
                    </div>
                    <div className="col">
                    <select className="form-select minSize" aria-label="Default select example">
  <option defaultValue>Події</option>
  <option value="1">...</option>
  <option value="2">...</option>
  <option value="3">...</option>
</select>
                    </div>
                <div className="row m-0">
                    {
                        data1.map((p)=>{
                            return <div key={Math.random(1)} className="col"><OneCard/></div>
                        })
                    } 
                </div>
                <div className="d-flex justify-content-center">
                    <a  onClick={addProduct} className="button2">ПОКАЗАТИ ЩЕ</a>
                </div>

                </div>
            </div>   
            <div className="info_container row m-0  mt-5 container d-flex justify-content-around">
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
        </div>
    )
}
export default Catalog
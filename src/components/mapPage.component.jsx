import RadarMap from "../img/mapRadar.svg"
import PhoneMap from "../img/Phone_Map.svg"
import MassegeMap from "../img/massage.svg"
import Map_img from "../img/contact__maps.png"
import {BrowserRouter as Router , Route , Routes,NavLink} from 'react-router-dom';

function MapPage(){
    return(
        <div className="container">
            <div className="mt-4 d-flex justify-content-center">
                <NavLink to="/" className="p-1 text-dark">Головна</NavLink>
                <p className="p-1">/</p>
                <NavLink to="/contacts" className="p-1 text-dark">Контакти</NavLink>
            </div>
            <h1 className="p-5 text-center">КОНТАКТИ</h1>
            <div className="row m-0 border-bottom border-2  mb-4 pb-5 ">
                <div className="col-12 col-md-6 col-lg-3 p-4">
                    <h5><strong>Головний офіс</strong></h5>
                    <div className="d-flex">
                        <img className="me-3" src={RadarMap} alt="" />
                        <span>Площа Свободи 140 , офіс 1-5</span>
                    </div>
                     <span className="ms-4 ps-1">Загородський 145, офіс 11-15</span>
                </div>
                <div className="col-12 col-md-6 col-lg-3 p-4">
                    <h5><strong>Телефони</strong></h5>
                    <div className="d-flex">
                        <img className="me-3" src={PhoneMap} alt="" />
                        <span>+ (380) 458-56-45</span>
                    </div>
                     <span className="ms-4 ps-2">+ (380) 458-56-45</span>
                </div>
                <div className="col-12 col-md-6 col-lg-3 p-4">
                    <h5><strong>E-mail</strong></h5>
                    <div className="d-flex">
                        <img className="me-3" src={MassegeMap} alt="" />
                        <span>office@ojjo.com</span>
                    </div>
                     <span className="ms-4 ps-2">sales@ojjo.com</span>
                </div>
                <div className="col-12 col-md-6 col-lg-3 p-4">
                    <h5><strong>Додаткові адреса</strong></h5>
                    <div className="d-flex">
                        <img className="me-3" src={RadarMap} alt="" />
                        <span>Площа Свободи 140 , офіс 1-5</span>
                    </div>
                     <span className="ms-4 ps-1">площа Ринок 145, офіс 11-15</span>
                </div>
            </div>
                <div className="container">
                    <img src={Map_img} className='w-100' alt="" />
                </div>
        </div>
    )
}
export default MapPage
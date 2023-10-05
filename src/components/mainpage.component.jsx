import Navbar from "./navbar.component"
import Footer from "./footer.component"
import brandLogo from "../img/brandLogo.png"
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3png.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import img6 from '../img/img6.png'
import img2_1 from '../img/img2-1.png'
import img2_2 from '../img/img2-2.png'
import img2_3 from '../img/img2-3.png'
import play from '../img/play.svg'
import img3_1 from '../img/img3_1.png'
import img3_2 from '../img/img3-2.png'
import img3_3 from '../img/img3-3.png'
import img3_4 from '../img/img3-4.png'
import img3_5 from '../img/img3-5.png'
import img3_6 from '../img/img3-6.png'
import {BrowserRouter as Router , Route , Routes,NavLink} from 'react-router-dom';

function MainPage(){
    return(
        
        <div>
            <header className=" img_container">
             <div className="nav-info p-0  container-fluid">
                <h1 className="text-white text-center p-5 hideText ">Стильно, дорого, красиво!</h1>
                <div className="d-flex justify-content-center">
                    <NavLink to="/catalog" className="castom-button mb-5 p-2 button fs-2">каталог виробів</NavLink>
                </div>
                <hr className="border border-white mb-5 border-1 opacity-50"/>
                <div className=" row m-0 mb-4 d-flex justify-content-center ">
                    <div className="col d-flex justify-content-center border-end">
                        <img src={brandLogo} alt="" />
                    </div>
                    <div className="col d-flex justify-content-center border-end">
                        <img src={brandLogo} alt="" />
                    </div>
                    <div className="col d-flex justify-content-center border-end">
                        <img src={brandLogo} alt="" />
                    </div>
                    <div className="col d-flex justify-content-center border-end">
                        <img src={brandLogo} alt="" />
                    </div>
                    <div className="col d-flex justify-content-center border-end">
                        <img src={brandLogo} alt="" />
                    </div>
                    <div className="col d-none d-lg-block">
                        <img src={brandLogo} alt="" />
                    </div>
                </div>
             </div>
            </header>
            <main>
                <div className="container pb-5">
                    <h4 className="text-center mt-4">До подій</h4>
                    <h2 className="text-center font-1">Справжня краса тут!</h2>
                </div>
                <div className="row m-0 mb-5 d-flex justify-content-around">
                    <div className="col d-flex justify-content-center ">
                    <NavLink to="/catalog" className="select m-2">ВЕСІЛЛЯ
                        <div className="child_select"></div>
                    </NavLink>
                    </div>
                    <div className="col d-flex justify-content-center ">
                    <NavLink to="/catalog" className="select m-2">ЧОЛОВІКУ
                        <div className="child_select"></div>
                    </NavLink>
                    </div>
                    <div className="col d-flex justify-content-center ">
                    <NavLink to="/catalog" className="select m-2">ДРУЖИНІ
                        <div className="child_select"></div>
                    </NavLink>
                    </div>
                    <div className="col d-flex justify-content-center ">
                    <NavLink to="/catalog" className="select m-2">ПАРТНЕРУ
                        <div className="child_select"></div>
                    </NavLink>
                    </div>
                    <div className="col d-flex justify-content-center ">
                    <NavLink to="/catalog" className="select m-2">КОЛЕКЦІЇ
                        <div className="child_select"></div>
                    </NavLink>
                    </div>
                    <div className="col d-flex justify-content-center ">
                    <NavLink to="/catalog" className="select m-2">РІДКІСТЬ
                        <div className="child_select"></div>
                    </NavLink>
                    </div>
                </div>
                <div className="ms-5 me-5">
                    <div className="row mb-3 d-flex justify-content-between">
                        <div className="col mb-2  d-flex justify-content-center">
                            <div className="imgcontainer">
                                <div className="label_img">ОБРУЧКИ</div>
                                <NavLink to="/catalog">
                                    <img src={img1} className="image" alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col mb-2  d-flex justify-content-center">
                            <div className="imgcontainer">
                                <div className="label_img">СЕРЕЖКИ</div>
                                <NavLink to="/catalog">
                                    <img src={img2} className="image" alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col mb-2  d-flex justify-content-center">
                            <div className="imgcontainer">
                                <div className="label_img">ПІДВІСКИ</div>
                                <NavLink to="/catalog">
                                    <img src={img3} className="image" alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col mb-2  d-flex justify-content-center">
                            <div className="imgcontainer">
                                <div className="label_img">ЗАПОНКИ</div>
                                <NavLink to="/catalog">
                                    <img src={img4} className="image" alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col mb-2  d-flex justify-content-center">
                            <div className="imgcontainer">
                                <div className="label_img">БРАСЛЕТИ</div>
                                <NavLink to="/catalog">
                                    <img src={img5} className="image" alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col mb-2  d-flex justify-content-center">
                            <div className="imgcontainer">
                                <div className="label_img">ГОДИННИКИ</div>
                                <NavLink to="/catalog">
                                    <img src={img6} className="image" alt="" />
                                </NavLink>
                            </div>
                        </div>
                </div>
            </div>
            
            <div className="container-fluid  background mb-5">
                <p className="text-center text-white p-5 pb-1">Не знаете, що обрати?</p>
                <h2 className="text-center text-white p-5 pt-0">Відвідайте наші салони у Львові</h2>
                <div className="container p-5 pt-2">
                    <span className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.</span>
                </div>
                <div className="d-flex justify-content-center">
                    <NavLink to="/contacts" className="button1">Наші салони</NavLink>
                </div>
            </div>

            <h5 className=" text-center">Корисні статті</h5>
            <h4 className="text-center mt-4"><strong>Найкращі поради щодо вибору дорогих подарунків</strong></h4>

            <div className="row m-5">
                <div className="col mb-2  d-flex justify-content-center">
                    <div className="imgcontainer">
                        <div className="label_img fs-5">Як вибрати годинник для своєї майбутньої дружини</div>
                        <NavLink to="/catalog">
                            <img src={img2_1} className="image" alt="" />
                        </NavLink>
                    </div>
                </div>
                <div className="col mb-2  d-flex justify-content-center">
                    <div className="imgcontainer">
                        <div className="label_img fs-5">Запонки для чоловіка: 7 ключових правил придбання аксесуара</div>
                        <NavLink to="/catalog">
                            <img src={img2_2} className="image" alt="" />
                        </NavLink>
                    </div>
                </div>
                <div className="col mb-2  d-flex justify-content-center">
                    <div className="imgcontainer">
                        <div className="label_img fs-5">Як вибрати весільні обручки для молодят</div>
                        <NavLink to="/catalog">
                            <img src={img2_3} className="image" alt="" />
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <NavLink to="/catalog" className="button2">ПРОЧИТАЙТЕ НАШ БЛОГ</NavLink>
            </div>
                <p className="d-flex justify-content-center mt-5">
                    <dfn>#ojjo_jewerly</dfn>
                </p>
                <h1 className="text-center mb-5"><strong>Ми в соціальних мережах</strong></h1>

                <div className="row m-0">
                    <div className="col-12 playcont col-lg-6  p-0">
                        <img src={img3_1} className="w-100" alt="" />
                        <img className="playsvg" src={play} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3  p-0">
                        <img src={img3_2} className="w-100" alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3  p-0">
                        <img src={img3_3} className="w-100" alt="" />
                    </div>
                </div>
                <div className="row ms-0 me-0 mb-5">
                    <div className="col-12 col-sm-6 col-lg-3  p-0">
                        <img src={img3_4} className="w-100" alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3  p-0">
                        <img src={img3_5} className="w-100" alt="" />
                    </div>
                    <div className="col-12 playcont col-lg-6  p-0">
                        <img src={img3_6} className="w-100" alt="" />
                        <img className="playsvg" src={play} alt="" />
                    </div>
                </div>
            </main>
        </div>
    )
}
export default MainPage
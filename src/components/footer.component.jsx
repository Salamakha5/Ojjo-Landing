import "../css/footer.css"
import Visa from "../img/visa.png"
import Phone from "../img/phone.svg"
import Telegram_img from '../img/Telegram_footer.svg'
import VK_img from '../img/VK_footer.svg'
import E_img from '../img/E_footer.svg'
import faceBook_img from '../img/FaceBook_footer.svg'
import youTube_img from '../img/youtube_footer.svg'
import Massage from "../img/massage.svg"
import MasterCard from "../img/Master Card.png"
import Poligon2 from "../img/Polygon 2.svg"
function Footer(){
    return(
        <footer className="pt-5">
            <div className=" container-fluid text-white footer_background p-5">
                <p className="text-center">Корисні поради та особисті пропозиції</p>
                 <p className="text-center fs-3 "><strong>Ексклюзивна Розсилка</strong></p>
                 <div className="row p-5 d-flex justify-content-around align-items-center">
                    <div className="col d-flex justify-content-center">
                        <div>
                            <div className="mt-2 d-flex align-items-center">
                                <img src={Poligon2} alt="" />
                                <span className="info_footer ms-2">Особистий менеджер</span>
                            </div>
                            <div className="mt-2 d-flex align-items-center">
                                <img src={Poligon2} alt="" />
                                <span className="info_footer ms-2">Доставка та дизайн</span>
                            </div>
                            <div className="mt-2 d-flex align-items-center">
                                <img src={Poligon2} alt="" />
                                <span className="info_footer ms-2">Індивідуальний дизайн</span>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="border border-2 m-3 p-3">
                            <div className="box_input">
                                <input type="text touppercase" placeholder="ВАШ E-MAIL" className="form-control input_footer"/>
                                <a href="" className="button_footer">НАДІСЛАТИ</a>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="row m-0 p-5 d-flex justify-content-center border-2 pb-2 border-bottom  border-dark mt-5">
                <div className="col">
                    <h4 className="border-2 pb-2 border-bottom  border-dark">КОРИСНІ ПОСИЛАННЯ</h4>
                    <div>
                        <p className="linkBlack">Доставка</p>
                        <p className="linkBlack">Оплата</p>
                        <p className="linkBlack">Акції</p>
                        <p className="linkBlack">Політика конфіденційності</p>
                    </div>
                </div>
                <div className="col">
                    <h4 className="border-2 pb-2 border-bottom  border-dark">ОПЛАТА</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</span>
                    <div className="d-flex pt-3">
                        <img className="me-4" src={Visa} alt="" />
                        <img src={MasterCard} alt="" />
                    </div>
                </div>
                <div className="col">
                    <h4 className="border-2 pb-2 border-bottom  border-dark">КОНТАКТИ</h4>
                    <div className="d-flex align-items-center">
                        <img className="me-3" src={Phone} alt="" />
                        <span className="linkBlack">8 (812) 234-56-55</span>
                    </div>
                    <div className="mt-2 mb-2 d-flex align-items-center">
                        <img className="me-3" src={Phone} alt="" />
                        <span className="linkBlack">8 (812) 234-56-55</span>
                    </div>
                    <div className="mt-2 mb-2 d-flex align-items-center">
                        <img className="me-3" src={Massage} alt="" />
                        <span className="linkBlack">ojjo@ojjo.ru</span>
                    </div>
                </div>
                <div className="col">
                    <h4 className="border-2 pb-2 border-bottom  border-dark">СОЦІАЛЬНІ МЕРЕЖІ</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                    <div className="d-flex justify-content-around ps-3 pe-3">
                        <a href="">
                            <img src={youTube_img} alt="" />
                        </a>
                        <a href="">
                            <img src={VK_img} alt="" />
                        </a>
                        <a href="">
                            <img src={faceBook_img} alt="" />
                        </a>
                        <a href="">
                            <img src={Telegram_img} alt="" />
                        </a>
                        <a href="">
                            <img src={E_img} alt="" />
                        </a>
                 
                    </div>
                </div>
            </div>
                <div className="mt-4 pb-0 d-flex justify-content-around align-items-center">
                    <p className="linkBlack">(c) 2020 OJJO jewelry</p>
                    <p className="linkBlack">Угода про публічну пропозицію</p>
                    <p className="linkBlack">Контрагент</p>
                    <p className="linkBlack">Зроблено Salamakha_Vlad</p>
                </div>
        </footer>
    )
}
export default Footer
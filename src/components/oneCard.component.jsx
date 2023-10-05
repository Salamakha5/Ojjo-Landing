import CardImg from "../img/CardImg.png"
import {BrowserRouter as Router , Route , Routes, NavLink} from 'react-router-dom';

function OneCard(){
    return(
        <div className="text-center m-5">
            <img src={CardImg} alt="" />
            <p>Підвіска</p>
            <p><strong>Dolce & Gabanna</strong></p>
            <NavLink to="/product" className="button2">170 000$</NavLink>
        </div>
    )
}
export default OneCard
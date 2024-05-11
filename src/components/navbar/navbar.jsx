import icons from "../../styles/icons";
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={icons.logo}  alt="" srcset="" />
            <div>
                <input type="text" name="" id="" />
                <button className="btn" >Buscar</button>
            </div>
            <div className="dashboard">
                <div>Total de Gastos</div>
                <div>R$ 5.000,00</div>
            </div>
        </div>
    )
}

export default Navbar;
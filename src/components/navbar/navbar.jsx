import { useState } from "react";
import icons from "../../styles/icons";
import './navbar.css'

const Navbar = (props) => {

    const [filtro, setFiltro] = useState('');

    return (
        <div className="navbar">
            <img src={icons.logo}  alt="" srcset="" />
            <div>
                <input onChange={(e) => setFiltro(e.target.value) } type="text" name="" id="" />
                <button onClick={() => props.ListarDespesa(filtro)} className="btn" >Buscar</button>
            </div>
            
            <div className="dashboard">
                <div>Total de Gastos</div>
                <div>{props.totalGasto}</div>
            </div>
        </div>
    )
}

export default Navbar;
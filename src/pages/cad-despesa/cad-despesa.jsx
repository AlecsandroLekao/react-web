import { Navigate, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import './cad-despesa.css'
import { useState } from "react";

// criação do metodo
const CadDespesa = () => {

    const navigate = useNavigate();
    const salvarDespesa = () => {
        navigate("/")
    }

    const [valor, SetValor] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");

    const {idUrl} = useParams();

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="container-despesa-cad">

                <div className="box-despesa-cad">

                    {idUrl === 'add' ? <h2>Cadastrar nova Despesa</h2> : <h2>Editar Despesa</h2> }
                    
                    <div className="input-group" >
                        <p>Valor</p>
                        <input onChange={e => SetValor(e.target.value)} className="input-lg W100" type="text" name="" id="" />
                    </div>

                    <div className="input-group" >
                        <p>Descrição</p>
                        <input onChange={e => setDescricao(e.target.value)} className="W100" type="text" name="" id="" />
                    </div>

                    <div className="input-group" >
                        <p>Categoria</p>
                        <select onChange={e => setCategoria(e.target.value)} className="W100" name="" id="">
                            <option value="Carro">Carro</option>
                            <option value="Casa">Casa</option>
                            <option value="Lazer">Lazer</option>
                            <option value="Mercado">Mercado</option>
                            <option value="Educação">Educação</option>
                            <option value="Viagem">Viagem</option>
                        </select>
                    </div>

                    <div className="btn-group text-right" >
                        <button onClick={() => navigate("/")} className="btn btn-blue-outline" >Cancelar</button>
                        <button onClick={() => salvarDespesa()} className="btn btn-blue ml-20">Salvar</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

// retorno da função
export default CadDespesa;
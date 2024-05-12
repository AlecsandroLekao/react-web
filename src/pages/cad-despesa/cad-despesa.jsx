import { Navigate, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import './cad-despesa.css'
import { useEffect, useState } from "react";

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

    const OpenDespesa = (id) => {
        
        let dados = [
            { id: 1, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-carro.png", categoria: "Carro", descricao: "Pagamento IPVA", valor: 2500 },
            { id: 2, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-casa.png", categoria: "Casa", descricao: "Condomínio", valor: 620 },
            { id: 3, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-lazer.png", categoria: "Lazer", descricao: "Sorvete no parque", valor: 17.52 },
            { id: 4, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", categoria: "Mercado", descricao: "Compras Walmart", valor: 375 },
            { id: 5, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-treinamento.png", categoria: "Educação", descricao: "Faculdade", valor: 490 },
            { id: 6, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", categoria: "Viagem", descricao: "Passagem Aérea", valor: 610 },
            { id: 7, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-mercado.png", categoria: "Mercado", descricao: "Compras Churrasco", valor: 144.30 },
            { id: 8, icon: "https://jornadajs-devpoint.s3.amazonaws.com/icon-viagem.png", categoria: "Viagem", descricao: "Hotel", valor: 330 }
        ];

        var xx = dados.filter(value => value.id === 2);
        alert(xx[0].valor)

        SetValor(xx[0].valor)
        setCategoria(xx[0].categoria)
        setDescricao(xx[0].descricao)   
    }

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="container-despesa-cad">

                <div className="box-despesa-cad">

                    {idUrl === 'add' ? <h2>Cadastrar nova Despesa</h2> : <h2>Editar Despesa</h2> }
                    

                    <div className="input-group" >
                        <p>Valor</p>
                        <input value={valor} onChange={e => SetValor(e.target.value)} className="input-lg W100" type="text" name="" id="" />
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
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import icons from "../../styles/icons.js";
import './home.css'
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [despesas, SetDespesas] = useState([])
    const [totalGasto, SetTotalGasto] = useState(0)
    const navigate = useNavigate();


    useEffect(() => {
        ListarDespesa();
    }, [])

    const ParaDinheiro = (value) => {
        return value.toLocaleString('pt-BR', {
            minimumFractionDigits: 2
        })
    }

    const ListarDespesa = (filtro) => {

        ///pega lista de dados 
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

        if (filtro) {
            SetDespesas(dados.filter(e => e.id == filtro));
            SetTotalGasto(dados.filter(e => e.id == filtro)
                .reduce((prev, actual) => {
                return prev + actual.valor;
            }, 0))

        } else {
            SetTotalGasto(dados.reduce((prev, actual) => {
                return prev + actual.valor;
            }, 0))
            SetDespesas(dados);
        }
    }

    const OpenDespesa = (id) => {
        navigate('/despesa/' + id);
    }

    const DeleteDespesa = (id) => {
        // navigate('/despesa/' + id);
        alert(id);
    }

    return (
        <>
            <Sidebar />
            <Navbar ListarDespesa={ListarDespesa} totalGasto={totalGasto} />
            <div className="container-home">
                <div className="title-home">
                    <h1>Despesas</h1>
                    <button onClick={() => navigate("/despesa/add")} className="btn btn-green" >Adicionar Despesa</button>
                </div>
                <div className="box-despesa">
                    <table>
                        <thead>
                            <th>Id. Despesa</th>
                            <th>Descricao</th>
                            <th>Categoria</th>
                            <th>Valor</th>
                            <th></th>
                        </thead>
                        <tbody>
                            {despesas.map((value) => {
                                return (
                                    <tr>
                                        <td>{value.id}</td>
                                        <td>{value.descricao}</td>
                                        <td>{value.categoria}</td>

                                        <td>R$ {ParaDinheiro(value.valor)}</td>
                                        <td className="text-right" >
                                            <button onClick={() => OpenDespesa(value.id)} className="btn btn-blue espaco-direita">
                                                <img className="icon-sm" src={icons.edit} alt="" srcset="" />
                                            </button>
                                            <button onClick={() => DeleteDespesa(value.id)} className="btn btn-red">
                                                <img className="icon-sm" src={icons.remove} alt="" srcset="" />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}


export default Home;
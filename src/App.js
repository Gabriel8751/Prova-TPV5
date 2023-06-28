import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [nome, setName] = useState('');
  const [preco, setPrice] = useState('');
  const [estoque, setStock] = useState('');
  const [descricao, setDesc] = useState('');
  const [id, setId] = useState('')
  const [id2, setId2] = useState('')

  const getNome = (event) => {
    setName(event.target.value);
  };

  const getPrice = (event) => {
    setPrice(event.target.value);
  };

  const getStock = (event) => {
    setStock(event.target.value);
  };

  const getDesc = (event) => {
    setDesc(event.target.value);
  };

  const getId = (event) => {
    setId(event.target.value);
  };

  const getId2 = (event) => {
    setId2(event.target.value);
  };

  return (
    <>
    <div>
    
    <h1>Gerenciamento de produtos</h1>
    <p>----------------------------------------------------------------</p>
    <h2>Adicionar</h2>
    <h3>Nome</h3>
    <input type="text" value={nome} onChange={getNome}></input>

    <h3>Preço</h3>
    <input type="number" value={preco} onChange={getPrice}></input>

    <h3>Estoque</h3>
    <input type="number" value={estoque} onChange={getStock}></input>

    <h3>Descrição</h3>
    <input type="text" value={descricao} onChange={getDesc}></input>
    <div>
    <button onClick={() => {
      axios.post("http://3.137.177.147:3000/produtos", {
        nome, preco, estoque, descricao
      }).then(
        (res) => {alert("Salvo Com Sucesso")}
        ).catch((error) => {
          alert("Erro ao Salvar")
        })
    }} className="btn btn-success">Salvar</button>
    </div>
    </div>
    <p>----------------------------------------------------------------</p>

    <h2>Remover</h2>
    <h2>Digite um ID para Remover</h2>
    <input type="number" value={id} onChange={getId}></input>
    <div>
    <button onClick={() => {
      console.log(id)
      axios.delete(`http://3.137.177.147:3000/produtos/${id}`)
      .then((res) => {alert(`Usuario de ID: ${id} excluido com sucesso`)})
      .catch((error) => {alert("Erro")})
      }}
    
    type="number" className='btn btn-danger'>Remover</button>
    </div>

  <p>----------------------------------------------------------------</p>   
    <h3>Editar Produto</h3>
    <h3>Digite o id do produto</h3>
    <input type="number" value={id2} onChange={getId2}></input>
    <div>
    <button onClick={() => {
      axios.put(`http://3.137.177.147:3000/produtos/${id2}`,{nome: "Editado", preco: "Editado", estoque: "Editado", descricao: "Editado"})
      .then((res) => {alert(`Item de ${id2} foi editado`)})
      .catch((error) => {alert("Erro ao editar")})}}
    className="btn btn-warning">Editar</button>
    </div>
    </>
    
  );
}

export default App;

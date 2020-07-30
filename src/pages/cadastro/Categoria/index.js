import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderDefault from '../../../components/pageDefault/headerDefault';
import FormField from  '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
 
  function handleChange(infosEvento) {
    setValue(
      infosEvento.target.getAttribute('name'),
      infosEvento.target.value
    );
  }

  return (
    <HeaderDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosEvento) {
        infosEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        
        setValues(valoresIniciais);
      }}>
        
        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange} />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange} />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange} />

        <button>
          Salvar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          );
        })}
      </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </HeaderDefault>
  );
}

export default CadastroCategoria;

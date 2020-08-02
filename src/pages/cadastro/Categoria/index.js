import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderDefault from '../../../components/pageDefault/headerDefault';
import FormField from '../../../components/FormField';
import SaveButton from '../../../components/Button/SaveButton';
import useForm from '../../../hooks/useform';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'https://saintflix.herokuapp.com/categorias';
      fetch(URL).then(async (respostaServer) => {
        if (respostaServer.ok) {
          const resposta = await respostaServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
    }
  }, []);

  return (
    <HeaderDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosEvento) {
        infosEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <SaveButton>
          Salvar
        </SaveButton>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
            {' '}
            -
            {' '}
            {categoria.descricao}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </HeaderDefault>
  );
}

export default CadastroCategoria;

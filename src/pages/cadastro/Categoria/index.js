import React, { useState } from 'react';
import PageDefault from '../../../components/pageDefault';
import { Link } from 'react-router-dom';

function useFormik({
  initialValues,
}) {
  const [values, setValues] = useState(initialValues);

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    const { value } = event.target;

    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  return {
    values,
    handleChange,
  };
}

function CadastroCategoria() {
  const formik = useFormik({
    initialValues: {
      nomeCategoria: "",
    },
  });

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        console.log(formik.values);
        alert('Dá uma olhada no console!');
      }}>
        <div className="formField">
          <label htmlFor="nomeCategoria">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Anime ou Cartoon ou ..."
            name="nomeCategoria"
            id="nomeCategoria"
            onChange={formik.handleChange}
            value={formik.values.nomeCategoria}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

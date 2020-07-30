import React from 'react';
import HeaderDefault from '../../../components/pageDefault/headerDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
  return (
    <HeaderDefault>
      <h1> Cadastro de Vídeo </h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </HeaderDefault>
  );
}

export default CadastroVideo;

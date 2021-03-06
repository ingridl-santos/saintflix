import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();

        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const resposta = await respostaServidor.json();

        return resposta;
      }
      throw new Error('Não foi possível pegar os dados: D:');
    });
}

export default {
  getAllWithVideos,
  getAll,
};

import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}videos`;

function create(objVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objVideo),
  })
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const resposta = await respostaServidor.json();

        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados D:');
    });
}

export default {
  create,
};

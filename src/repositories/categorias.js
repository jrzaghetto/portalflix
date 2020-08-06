import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_SERVER}/categorias`;

const getAll = () => fetch(`${URL_CATEGORIES}`)
  .then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  });

const getAllWithVideos = () => fetch(`${URL_CATEGORIES}?_embed=videos`)
  .then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  });

const create = (objetoDaCategoria) => fetch(`${URL_CATEGORIES}?_embed=videos`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(objetoDaCategoria),
})
  .then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  });

export default {
  getAllWithVideos,
  getAll,
  create,
};

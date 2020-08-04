/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setvalores] = useState(valoresIniciais);

  const setValue = (chave, valor) => {
    setvalores({
      ...values,
      [chave]: valor,
    });
  };

  const handleChange = (infosDoEvento) => {
    const getAttribute = infosDoEvento.target.getAttribute.bind(infosDoEvento.target);
    const { value } = infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value,
    );
  };

  useEffect(() => {
    const URL_CATEGORIAS = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'http://portalflix.herokuapp.com/categorias';

    fetch(URL_CATEGORIAS)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    // setTimeout(() => {

    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Nova categoria
        {values.nome}
      </h1>

      <form onSubmit={(infoDoEvento) => {
        infoDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setvalores(valoresIniciais);
      }}
      >

        <FormField
          labelText="Nome da Categoria:"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          labelText="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          labelText="Cor:"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading
      </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

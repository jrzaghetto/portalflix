/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { clearForm, handleChange, values } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

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
        {values.titulo}
      </h1>

      <form onSubmit={(infoDoEvento) => {
        infoDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          labelText="Nome da Categoria:"
          type="text"
          name="nome"
          value={values.titulo}
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
            {categoria.titulo}
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

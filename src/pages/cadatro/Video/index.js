/* eslint-disable no-alert */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import SalvarButton from '../../../components/Button/SalvarButton';
import LimparButton from '../../../components/Button/LimparButton';

const CadastroVideo = () => {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values, clearForm } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (

    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
          });

        history.push('/');
      }}
      >
        <FormField
          labelText="Título do vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          labelText="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          labelText="Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <SalvarButton type="submit">Salvar</SalvarButton>

        <LimparButton type="button" onClick={clearForm}>Limpar</LimparButton>

      </form>

    </PageDefault>
  );
};

export default CadastroVideo;

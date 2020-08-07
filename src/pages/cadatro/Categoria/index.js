/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import SalvarButton from '../../../components/Button/SalvarButton';
import LimparButton from '../../../components/Button/LimparButton';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

const CadastroCategoria = () => {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#80ffff',
    link_extra: {
      text: '',
      url: '',
    },
  };

  const { clearForm, handleChange, values } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1 style={{ textAlign: 'center' }}>
        Nova categoria
      </h1>

      <form
        id="teste"
        onSubmit={(event) => {
          event.preventDefault();

          setCategorias([
            ...categorias,
            values,
          ]);

          categoriasRepository.create({
            titulo: values.titulo,
            cor: values.cor,
            link_extra: {
              text: 'teste',
              url: 'http://',
            },
          })
            .then(() => {
              clearForm();
            });
        }}
      >

        <FormField
          labelText="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          labelText="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          labelText="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <SalvarButton type="submit">Salvar</SalvarButton>

        <LimparButton type="button" onClick={clearForm}>Limpar</LimparButton>
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

    </PageDefault>
  );
};

export default CadastroCategoria;

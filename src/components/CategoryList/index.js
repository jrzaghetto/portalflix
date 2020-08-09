/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import { CheckCircleOutline, Construction } from '@styled-icons/material';
import { RemoveCircleOutline } from 'styled-icons/material-rounded';

const DivCategoriaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--backEnd);
  width: 100%;
  height: 57px;
  font-size: 18px;
  padding: 16px 16px;
  margin-bottom: 0;
  -webkit-transition: border-color .3s;
  transition: border-color .3s;
  }

  &.itens {
  display: flex;
  flex-direction: row;
  background: #53585D;
  color: #F5F5F5;
  width: 100%;
  height: 57px;
  font-size: 18px;
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  padding: 16px 16px;
  margin-bottom: 20px;
  border-radius: 4px;
  -webkit-transition: border-color .3s;
  transition: border-color .3s;
  &:hover{
    border-bottom: var(--primary) 4px solid;
}
`;

const IconCheck = styled(Construction)`
  color: #F5F5F5;
  margin: auto;
  margin-top: -8px;
  display: block;
`;

const IconRemove = styled(RemoveCircleOutline)`
  color: #F5F5F5;
  margin: auto;
  margin-top: -8px;
  display: block;
`;

const DivNomeCategorias = styled.div`
  flex: 4;
`;

const DivDescricaoCategorias = styled.div`
 flex: 8;
`;

const DivEditarCategorias = styled.div`
  flex: 1;
  text-align: center;
`;

const DivExcluirCategorias = styled.div`
  flex: 1;
  text-align: center;
`;

const CategoryList = ({
  className, nomeCategoria, descricaoCategoria, editarCategoria, excluirCategoria,
}) => {
  const putEditIcon = editarCategoria === undefined ? <IconCheck size="35" /> : 'Editar';
  const putRemoveIcon = editarCategoria === undefined ? <IconRemove size="35" /> : 'Remover';

  console.log({ editarCategoria });
  return (
    <DivCategoriaWrapper className={className}>
      <DivNomeCategorias>
        {nomeCategoria}
      </DivNomeCategorias>
      <DivDescricaoCategorias>
        {descricaoCategoria}
      </DivDescricaoCategorias>
      <DivEditarCategorias>
        {putEditIcon}
      </DivEditarCategorias>
      <DivExcluirCategorias>
        {putRemoveIcon}
      </DivExcluirCategorias>
    </DivCategoriaWrapper>
  );
};

export default CategoryList;

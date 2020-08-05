/* eslint-disable linebreak-style */
import { useState } from 'react';

const useForm = (valoresIniciais) => {
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

  const clearForm = () => {
    setvalores(valoresIniciais);
  };

  return {
    values,
    handleChange,
    clearForm,
  };
};

export default useForm;

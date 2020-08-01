import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Dados from '../../dados_iniciais.json'
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain 
        videoTitle="Usando Git Direito | Limpando seus Commits!" 
        url="https://www.youtube.com/watch?v=6OokP-NE49k" 
        videoDescription="Continuando o episódio sobre Git, vamos encerrar o assunto hoje. 
        Desta vez vai ser mais ou menos um tutorial mas nada do básico. Vamos ver o que a maioria
         dos tutoriais de iniciantes não cobre pra você conseguir manter um repositório limpo e 
         bem organizado. Como manipular commits. Como reescrever o histórico.

        E no final quero discutir rapidamente sobre o assunto de monorepos que o Google ou 
        Facebook usam. E finalmente explicar porque o desenvolvimento da kernel do Linux, que 
        foi de onde originou o Git, dificilmente poderia funcionar em plataformas como GitHub." 
      />

      <Carousel 
        ignoreFirstVideo
        category={Dados.categorias[0]}
      />

      <Carousel 
        category={Dados.categorias[1]}
      />

      <Carousel 
        category={Dados.categorias[2]}
      />

      <Carousel 
        category={Dados.categorias[3]}
      />

      <Carousel 
        category={Dados.categorias[4]}
      />

    <Footer />

    </AppWrapper>

  );
}

export default Home;

import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import VideoCardGroup from './components/Carousel';
import dados from './dados_iniciais.json'
import Footer from './components/Footer';

function App() {
  return (
    <div style={{  background: "#141414" }}>
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

      <VideoCardGroup 
        ignoreFirstVideo
        category={dados.categorias[0]}
      />

      <VideoCardGroup 
        category={dados.categorias[1]}
      />

      <VideoCardGroup 
        category={dados.categorias[2]}
      />

      <VideoCardGroup 
        category={dados.categorias[3]}
      />

      <VideoCardGroup 
        category={dados.categorias[4]}
      />

    <Footer />

    </div>

  );
}

export default App;

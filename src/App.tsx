import React from 'react';
import './styles/index.scss';
import { Footer } from './template/footer';
import {Header} from './template/header'
import { Main } from './template/main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import './styles/index.scss';
import { Footer } from './template/footer';
import {Header} from './template/header'
import { Main } from './template/main';
import {Provider} from 'react-redux'
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;

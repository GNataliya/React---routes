import style from './style.module.css';
import Header from '../components/Header';
import Main from '../containers/Main';
import Footer from '../components/Footer';

import { Routes, Route } from 'react-router-dom'; 

import Articles from '../containers/Articles';
import Pictures from '../containers/Pictures';


function App() {
  return (
    <div className={style.body}>
      <Header />

        <Routes>
          <Route path='*' element={<Main />} />
          <Route exact path='/articles' element={<Articles />} />
          <Route exact path='/pictures' element={<Pictures />} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;

import Search from "./components/Search/Search";
import NavBar from "./components/NavBar/NavBar";
import Pages from "./Pages/Pages";
import styles from './App.module.css';
import styled from  'styled-components';
import {BrowserRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div className={styles.mainContainer}>
      <MyStock  to={'/'}> 
        <h1 className={styles.myStock}>My Stock</h1>
      </MyStock>
      <NavBar />
      <Search />
      <Pages />
    </div>
    </BrowserRouter>
    </div>
  );
}

const MyStock = styled(NavLink)`

`;

export default App;

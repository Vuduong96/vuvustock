import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.css';
import {NavLink} from 'react-router-dom';
import styled from  'styled-components';



function NavBar() {
  return (
    <div className={styles.NavBarContainer}>
      <Navbar className={styles.dashboard}>
        <Container  >
          <SLink  to={'/dashboard/'}  className={styles.dashboardText}>Dashboard</SLink>
        </Container>
      </Navbar>
      <br />
      <Navbar className={styles.stocks}>
        <Container >
          <SLink to={'/stockList/'} className={styles.stocksText}>Stocks</SLink>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

const SLink = styled(NavLink)`

`;

export default NavBar;
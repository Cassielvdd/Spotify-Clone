import styles from './components/styles.module.css'
import logoimg from './img/logo.png'
import Footer from './components/footer';
function App() {
  return (
    <>
    <navbar className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <img src={logoimg}alt="" className={styles.logo}/>
        <ul className={styles.navbarItems}>
          <li className={styles.navbarItem}>Premium</li>
          <li className={styles.navbarItem}>Ajuda</li>
          <li className={styles.navbarItem}>Baixar</li>
          <li className={styles.navbarItem}>Inscrever-se</li>
          <li className={styles.navbarItem}>Entrar</li>
        </ul>
      </div>
    </navbar>
    <div className={styles.showcase}>
      <div className={styles.showcaseContainer}>
        <h2>Música para Todos</h2>
        <p>Milhões de músicas á sua escolha. E nem precisa de cartão de crédito</p>
        <button className={styles.btnPrimary}>Obtenha o Spotify Free</button>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;

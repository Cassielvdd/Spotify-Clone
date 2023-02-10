import styles from './styles.module.css'
import logo from '../img/logo.png'
import instagram from '../img/-51609193448mids70tdmp-removebg-preview.png'
// import twitter from '../img/twitter.png'
 import br from '../img/brazil.png'

function Footer(){
    return(
        <>
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <img src={logo} alt="" className={styles.logo}/>
                <ul className={styles.footerMenu}>
                    <p>EMPRESA</p>
                    <li className={styles.footerMenuItem}>Sobre</li>
                    <li className={styles.footerMenuItem}>Empregos</li>
                    <li className={styles.footerMenuItem}>For the record</li>
                </ul>
                <ul className={styles.footerMenu}>
                    <p>COMUNIDADE</p>
                    <li className={styles.footerMenuItem}>Para Artistas</li>
                    <li className={styles.footerMenuItem}>For Devs</li>
                    <li className={styles.footerMenuItem}>Marcas</li>
                    <li className={styles.footerMenuItem}>Investidores</li>
                    <li className={styles.footerMenuItem}>Fornecedores</li>
                </ul>
                <ul className={styles.footerMenu}>
                    <p>LINKS ÚTEIS</p>
                    <li className={styles.footerMenuItem}>Ajuda</li>
                    <li className={styles.footerMenuItem}>Player da Web</li>
                    <li className={styles.footerMenuItem}>Aplicativo móvel grátis</li>
                </ul>
                <div className={styles.socials}>
                     <img src={instagram} alt="" />
                    <img src={instagram} alt="" /> 
                    <img src={instagram} alt="" />
                </div>
            </div>
            <div className={styles.footerInfo}>
                <ul className={styles.footerInfoItems}>
                    <li className={styles.footerInfoItem}>Legal</li>
                    <li className={styles.footerInfoItem}>Centro de Privacidade</li>
                    <li className={styles.footerInfoItem}>Politica de privacidade</li>
                    <li className={styles.footerInfoItem}>Cookie</li>
                    <li className={styles.footerInfoItem}>Sobre anúncios</li>
                </ul>
            <div className={styles.rights}>
                <div className={styles.country}>
                    <img src={br} alt="" />
                </div>
                <p>&copy; 2023 Spotify AB</p>
            </div>
            </div>
        </footer>
        </>
    )
}
export default Footer
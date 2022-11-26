import * as React from "react"
import {Link} from "gatsby"
import * as footerStyles from "../styles/footer.module.scss"
import logo from "../images/aquatrait3.svg"


const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className={footerStyles.footer}>
        <div className={footerStyles.logoContainer}>
            <Link to="/" className={footerStyles.logo}><img className={footerStyles.logoImage} src={logo} alt="Logo"/></Link>
        </div>
        <div className={footerStyles.footerListContainer}>
            <section className={footerStyles.footerList}>
                <h2 className={footerStyles.categoryTitle}>Categories</h2>
                <ul className={footerStyles.categoryList}>
                    <li ><Link to="/">Home</Link></li>
                    <li ><Link to="/freshwater">Freshwater</Link></li>
                    <li ><Link to="/planted">Planted</Link></li>
                    <li ><Link to="/marine">Marine</Link></li>
                    <li ><Link to="/general">General</Link></li>
                    <li ><Link to="/other">Other</Link></li>
                </ul>
            </section>
            <section className={footerStyles.footerList}>
                <h2>
                    Aquatrait
                </h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </section>
            <section className={footerStyles.footerList}>
                <h2>
                    Legal
                </h2>
                <ul>
                    <li>
                        <Link to="/about">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/contact">Terms of Use</Link>
                    </li>
                    <li>
                        &copy; 2022-{currentYear} 
                    </li>
                </ul>
            </section>
        </div>
    </footer>
  )
}

export default Footer


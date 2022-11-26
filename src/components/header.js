import React, { useState, useEffect } from "react"
import {Link} from "gatsby"
import * as headerStyles from "../styles/header.module.scss"
import logo from "../images/aquatrait3.svg"
import {FaMoon} from "@react-icons/all-files/fa/FaMoon"
import {FaSun} from "@react-icons/all-files/fa/FaSun"
import { ThemeContext } from "./store"



const Header = () => {
  const [openDropdown,setOpenDropdown] = useState(false)
    return (
      <header className={headerStyles.header}>
        <ul className={headerStyles.categoryList}>
          <Link to="/" className={headerStyles.categoryItem}><li>Home</li></Link>
          <Link to="/general" className={headerStyles.categoryItem}><li>General</li></Link>
          <Link to="/freshwater" className={headerStyles.categoryItem}><li>Freshwater</li></Link>
          <Link to="/planted" className={headerStyles.categoryItem}><li>Planted</li></Link>
          <Link className={headerStyles.categoryItem} to="/marine"><li>Marine</li></Link>
          <Link to="/other" className={headerStyles.categoryItem}><li>Other</li></Link>
        </ul>
           <Link to="/" className={headerStyles.logo}><img className={headerStyles.logoImage} src={logo} alt="Logo"/></Link>
           <ThemeContext.Consumer>
           {context => (<button onClick={() => context.toggleTheme()} className={headerStyles.styleModeIcon}>{context.theme == "light"? <FaSun></FaSun> : <FaMoon></FaMoon>}</button>)}
           </ThemeContext.Consumer>
           <button className={headerStyles.navButton} onClick={() => {setOpenDropdown(!openDropdown)}}><hr className={headerStyles.line1}></hr><hr className={headerStyles.line2}></hr><hr className={headerStyles.line3}></hr></button>
           {openDropdown && 
             <div className={headerStyles.dropdownMenu}>
               <ul className={headerStyles.categoryListDropdown}>
                 <Link to="/" className={headerStyles.categoryItem}><li>Home</li></Link>
                 <Link to="/general" className={headerStyles.categoryItem}><li>General</li></Link>
                 <Link to="/freshwater" className={headerStyles.categoryItem}><li>Freshwater</li></Link>
                 <Link to="/planted" className={headerStyles.categoryItem}><li>Planted</li></Link>
                 <Link to="/marine" className={headerStyles.categoryItem}><li>Marine</li></Link>
                 <Link to="/other" className={headerStyles.categoryItem}><li>Other</li></Link>
               </ul>
             </div>
           }
           
       </header>
     )
}

export default Header


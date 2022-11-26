import * as React from "react"
import {Link} from "gatsby"
import Header from "../components/header"
import globalStyles from "../styles/global.scss"
import * as layoutStyles from "../styles/layout.module.scss"
import Footer from "./footer"
import { ThemeContext } from "./store"

const Layout = ({children}) => {
  return (
    <ThemeContext.Consumer>
      {context => (
        <div className={layoutStyles.page}>
          <main className={layoutStyles.pageContainer}>
            <Header></Header>
            <section>
              {children}
            </section>
            <Footer></Footer>
          </main>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Layout


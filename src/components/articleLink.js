import * as React from "react"
import {Link} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as articleStyles from "../styles/articleLink.module.scss"
import { ThemeContext } from "./store"

const ArticleLink = ({articleData, articleContainer}) => {
    const {articleTitle, category, urlName} = articleData
    var lowerCaseCategory;
    if(typeof category === "string")
    {
      lowerCaseCategory = category.toLowerCase()
    }
    console.log(articleData)
    const verticalMainImage = getImage(articleData.mainImage.image)
    const mainImage = getImage(articleData.verticalMainImage.image) 
    const mainImageDarkMode = getImage(articleData.mainImageDarkMode.image) 
    return (
          <article className={articleStyles.article} >
            <Link to={`${lowerCaseCategory}/${urlName}`} className={articleContainer == "categorySection" ? articleStyles.categorySectionArticle: ""}>
              <div className={articleStyles.imageContainer}>
                <ThemeContext.Consumer>
                  {
                    context => (<GatsbyImage image={context.theme == "light" ? mainImage: mainImageDarkMode} imgStyle={{height: "100%", width: "100%"}} style={{height: "100%", width: "100%"}} alt={articleTitle}></GatsbyImage>)
                  }
                </ThemeContext.Consumer>
              </div>
              <h3 className={articleStyles.articleTitle}>{articleTitle}</h3>
            </Link>
          </article>
          )
  }
  
  export default ArticleLink
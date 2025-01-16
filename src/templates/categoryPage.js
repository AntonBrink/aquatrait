import * as React from "react"
import Layout from "../components/layout"
import {GatsbyImage} from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import * as categoryPageStyles from "../styles/categoryPage.module.scss"
import RawText from "../components/rawText"
import { ThemeContext } from "../components/store"
import Head from "../components/head"

export const query = graphql`
query($category: Category!) {
    cms{
      articles(where: {category: $category}) {
              category
              articleIntroduction {
                raw
              }
              mainImageDarkMode{
                image
            {
              url
            }
              }
              verticalImageDarkMode{
                image
            {
              url
            }
              }
              articleTitle
              urlName
              author {
                authorImage {
                  url
                }
                description {
                  raw
                }
                name
              }
              mainImage {
                image
            {
              url
            }
              }
              verticalMainImage {
                image
            {
              url
            }
              }
        }
    }
  }
`

const Category = ({data}) => {
  return (
    <Layout>
        <Head author={"Anton Brink"} title={data.articles.category} metaDescription={`A collection of ${data.articles.category} articles`}></Head>
        <h1 className={categoryPageStyles.mainHeading}>{data.articles.category}</h1>
        {data.articles.map(function(article, index)
        {
            const {articleTitle, author, articleIntroduction, mainImage, verticalMainIMage, urlName, mainImageDarkMode} = article;
            return(
              <Link to={`/${(data.articles.category).toLowerCase()}/${urlName}`}>
                <article className={categoryPageStyles.articleContainer}>
                  <ThemeContext.Consumer>
                    {context => (<div className={categoryPageStyles.articleImageContainer}><GatsbyImage style={{width: "100%", height: "100%"}} imgStyle={{width: "100%", height: "100%"}} image={context.theme == "light"?mainImage.image.url : mainImageDarkMode.image.url}></GatsbyImage></div>)}
                  </ThemeContext.Consumer>
                  <div className={categoryPageStyles.articleText}>
                  <h2 className={categoryPageStyles.articleHeading} key={`${articleTitle}-${index}`}>{articleTitle}</h2>
                  <RawText text={articleIntroduction}></RawText>
                  </div>
                </article>
              </Link>
            )
        })}
    </Layout>
  )
}

export default Category

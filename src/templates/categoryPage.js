import * as React from "react"
import Layout from "../components/layout"
import {GatsbyImage} from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import * as categoryPageStyles from "../styles/categoryPage.module.scss"
import RawText from "../components/rawText"
import { ThemeContext } from "../components/store"
import Head from "../components/head"

export const query = graphql`
query($category: GraphCMS_Category!)  {
    allGraphCmsArticle(filter: {category: {eq: $category}}) {
        edges {
          node {
            category
            articleIntroduction {
              raw
            }
            mainImageDarkMode{
              image
          {
            gatsbyImageData
          }
            }
            verticalImageDarkMode{
              image
          {
            gatsbyImageData
          }
            }
            articleTitle
            urlName
            author {
              authorImage {
                gatsbyImageData
              }
              description {
                raw
              }
              name
            }
            mainImage {
              image
          {
            gatsbyImageData
          }
            }
            verticalMainImage {
              image
          {
            gatsbyImageData
          }
            }
          }
        }
      }
  }
`

const Category = ({data}) => {
  return (
    <Layout>
        <Head author={"Anton Brink"} title={data.allGraphCmsArticle.edges[0].node.category} metaDescription={`A collection of ${data.allGraphCmsArticle.edges[0].node.category} articles`}></Head>
        <h1 className={categoryPageStyles.mainHeading}>{data.allGraphCmsArticle.edges[0].node.category}</h1>
        {data.allGraphCmsArticle.edges.map(function(article, index)
        {
            const {articleTitle, author, articleIntroduction, mainImage, verticalMainIMage, urlName, mainImageDarkMode} = article.node;
            return(
              <Link to={`/${(data.allGraphCmsArticle.edges[0].node.category).toLowerCase()}/${urlName}`}>
                <article className={categoryPageStyles.articleContainer}>
                  <ThemeContext.Consumer>
                    {context => (<div className={categoryPageStyles.articleImageContainer}><GatsbyImage style={{width: "100%", height: "100%"}} imgStyle={{width: "100%", height: "100%"}} image={context.theme == "light"?mainImage.image.gatsbyImageData : mainImageDarkMode.image.gatsbyImageData}></GatsbyImage></div>)}
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

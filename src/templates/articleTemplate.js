import * as React from "react"
import Layout from "../components/layout"
import {GatsbyImage} from "gatsby-plugin-image"
import { graphql } from "gatsby"
import * as templateStyles from "../styles/template.module.scss"
import { ThemeContext } from "../components/store"
import RawText from "../components/rawText"
export const query = graphql`
query($slug: String!)  {
    graphCmsArticle(urlName: {eq: $slug}) {
      articleSections {
        ... on GraphCMS_ArticleSection {
          sectionContent
          {
            raw
          }
          sectionSubheading
          sectionImage {
            gatsbyImageData
          }
          sectionImageDarkMode {
            gatsbyImageData
          }
        }
      }
      mainImageDarkMode{
        gatsbyImageData
      }
      verticalImageDarkMode{
        gatsbyImageData
      }
      articleTitle
      author {
        authorImage {
          gatsbyImageData
        }
        name
        description {
          raw
        }
      }
      category
      mainImage {
        gatsbyImageData
      }
      verticalMainImage {
        gatsbyImageData
      }
      articleIntroduction {
        raw
      }
    }
  }
     
`

const Article = ({data}) => {

  const {articleTitle, articleIntroduction, articleSections, author, category, mainImage, verticalMainImage, mainImageDarkMode} = data.graphCmsArticle;
  return (
    <Layout>
        <h1 className={templateStyles.articleTemplateHeading}>{articleTitle}</h1>
        <ThemeContext.Consumer>
          {context => (<div className={templateStyles.mainImageContainer}><GatsbyImage image={context.theme == "light"?  mainImage.gatsbyImageData : mainImageDarkMode.gatsbyImageData} imgStyle={{width: "100%", height: "100%", objectFit:"cover"}} style={{width: "100%", height: "100%", objectFit:"cover"}} alt={articleTitle}></GatsbyImage></div>)}
        </ThemeContext.Consumer>
        {articleIntroduction.raw.children.map(function(paragraph, index)
        {
          return <p className={templateStyles.articleTemplateIntroParagraph} key={index}>{paragraph.children[0].text}</p>
        })}
        {
          articleSections.map(function(section, index)
          {
            console.log(section)
            return (
            <section className={templateStyles.articleSection} key={index}>
              <h2>{section.sectionSubheading}</h2>
              {
                (section.sectionImage || section.sectionImageDarkMode) && <ThemeContext.Consumer>
                {context => (<div className={templateStyles.articleSectionImageContainer}><GatsbyImage image={context.theme == "light" && section.sectionImage?  section.sectionImage.gatsbyImageData : section.sectionImageDarkMode ? section.sectionImageDarkMode.gatsbyImageData : section.sectionImage.gatsbyImageData} imgStyle={{width: "100%", height: "100%", objectFit:"cover"}} style={{width: "100%", height: "100%", objectFit:"cover"}} alt={section.sectionSubheading}></GatsbyImage></div>)}
              </ThemeContext.Consumer>
              }
              <RawText text={section.sectionContent}></RawText></section>)
          })
        }
    </Layout>
  )
}

export default Article

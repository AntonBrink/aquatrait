import React, {useEffect} from "react"
import Layout from "../components/layout"
import {GatsbyImage} from "gatsby-plugin-image"
import { graphql } from "gatsby"
import {AiOutlineMail} from "@react-icons/all-files/ai/AiOutlineMail"
import * as templateStyles from "../styles/template.module.scss"
import { ThemeContext } from "../components/store"
import RawText from "../components/rawText"
import commentBox from "commentbox.io"
import Head from "../components/head"
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
            artistName
            image
            {
              gatsbyImageData
            }
          }
          sectionImageDarkMode {
            artistName
            image
            {
              gatsbyImageData
            }
          }
        }
      }
      mainImageDarkMode{
        artistName
        image
        {
          gatsbyImageData
        }
      }
      verticalImageDarkMode{
        artistName
        image
        {
          gatsbyImageData
        }
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
        artistName
        image
        {
          gatsbyImageData
        }
      }
      verticalMainImage {
        artistName
        image
        {
          gatsbyImageData
        }
      }
      articleIntroduction {
        raw
      }
    }
  }
     
`

const Article = ({data}) => {

  const {articleTitle, articleIntroduction, articleSections, author, category, mainImage, verticalMainImage, mainImageDarkMode} = data.graphCmsArticle;
  useEffect(() => 
  {
    commentBox("5663381365194752-proj");
  }, []);
  return (
    <Layout>
        <Head author={author} title={articleTitle} metaDescription={articleIntroduction}></Head>
        <h1 className={templateStyles.articleTemplateHeading}>{articleTitle}</h1>
        <ThemeContext.Consumer>
          {context => (
            <div className={templateStyles.mainImageContainer}>
              <GatsbyImage image={context.theme == "light"?  mainImage.image.gatsbyImageData : mainImageDarkMode.image.gatsbyImageData} imgStyle={{width: "100%", height: "100%", objectFit:"cover"}} style={{width: "100%", height: "100%", objectFit:"cover"}} alt={articleTitle}></GatsbyImage>
              <h2>Image By: {mainImage.artistName}</h2>
            </div>
            )}
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
                {context => (<div className={templateStyles.articleSectionImageContainer}><GatsbyImage image={context.theme == "light" && section.sectionImage?  section.sectionImage.image.gatsbyImageData : section.sectionImageDarkMode ? section.sectionImageDarkMode.image.gatsbyImageData : section.sectionImage.image.gatsbyImageData} imgStyle={{width: "100%", height: "100%", objectFit:"cover"}} style={{width: "100%", height: "100%", objectFit:"cover"}} alt={section.sectionSubheading}></GatsbyImage></div>)}
              </ThemeContext.Consumer>
              }
              <RawText text={section.sectionContent}></RawText></section>)
          })
        }
        {/* <section className={templateStyles.emailReminder}>
          <div className={templateStyles.emailContainer}>
            <AiOutlineMail></AiOutlineMail><strong>Join Our Newsletter</strong>
          </div>
          <div className={templateStyles.emailText}>
            <p>Be the first to know when a new article is released!</p>
          </div>
        </section> */}
        <section className={templateStyles.commentSection}>
          <div className="commentbox"/>
        </section>
    </Layout>
  )
}

export default Article

import React, {useState, useEffect, useContext} from "react"
import Layout from "../components/layout"
import * as homepageStyles from "../styles/homepage.module.scss"
import {GatsbyImage} from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import StoryRowHigh from "../components/storyRowHigh"
import CategorySection from "../components/categorySection"
import { ThemeContext } from "../components/store"
import Head from "../components/head"

export const query = graphql`
query MyQuery {
  allGraphCmsArticle(sort: {fields: publishedAt, order: DESC}, limit: 5) {
    edges {
      node {
        articleTitle
        urlName
        category
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
        verticalMainImage {
          image
          {
            gatsbyImageData
          }
        }
        author {
          name
          description {
            text
          }
          authorImage {
            gatsbyImageData
          }
        }
        articleIntroduction {
          text
          raw
        }
        mainImage {
          image
          {
            gatsbyImageData
          }
        }
      }
    }
  }
  Planted: allGraphCmsArticle(filter: {category: {eq: Planted}}, limit: 3) {
    edges {
      node {
        category
        articleTitle
        urlName
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
        verticalMainImage {
          image
          {
            gatsbyImageData
          }
        }
        mainImage {
          image
          {
            gatsbyImageData
          }
        }
      }
    }
  }
  Freshwater: allGraphCmsArticle(filter: {category: {eq: Freshwater}}, limit: 3) {
  edges {
    node {
      category
      articleTitle
      urlName
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
      verticalMainImage {
        image
          {
            gatsbyImageData
          }
      }
      mainImage {
        image
          {
            gatsbyImageData
          }
      }
    }
  }
}
  Marine: allGraphCmsArticle(filter: {category: {eq: Marine}}, limit: 3) {
    edges {
      node {
        category
        articleTitle
        urlName
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
        verticalMainImage {
          image
          {
            gatsbyImageData
          }
        }
        mainImage {
          image
          {
            gatsbyImageData
          }
        }
      }
    }
  }
  General: allGraphCmsArticle(filter: {category: {eq: General}}, limit: 3) {
    edges {
      node {
        category
        articleTitle
        urlName
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
        verticalMainImage {
          image
          {
            gatsbyImageData
          }
        }
        mainImage {
          image
          {
            gatsbyImageData
          }
        }
      }
    }
  }
  Other: allGraphCmsArticle(filter: {category: {eq: Other}}, limit: 3) {
    edges {
      node {
        category
        articleTitle
        urlName
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
        verticalMainImage {
          image
          {
            gatsbyImageData
          }
        }
        mainImage {
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

const IndexPage = ({data}) => {
  return (
      <Layout>
      <Head author="Anton Brink" title={"Aquatrait | Homepage"} metaDescription={"We strive to offer the best aquatics content with the best user experience"}></Head>
      <Link to={`${data.allGraphCmsArticle.edges[0].node.category.toLowerCase()}/${data.allGraphCmsArticle.edges[0].node.urlName}`}>
      <div className={homepageStyles.mainArticle}>
        <div className={homepageStyles.hoverInfo}><h2>View Article</h2></div>
        <ThemeContext.Consumer>
          {context => 
          (
            <div className={homepageStyles.mainArticleImage}>
          {
            context.theme == "light"?<GatsbyImage objectFit="cover" style={{height: "100%", width: "100%"}} imgStyle={{height: "100%", width: "100%"}} image={data.allGraphCmsArticle.edges[0].node.verticalMainImage.image.gatsbyImageData} alt={`${data.allGraphCmsArticle.edges[0].node.articleTitle }'s Picture`} /> : <GatsbyImage objectFit="cover" style={{height: "100%", width: "100%"}} imgStyle={{height: "100%", width: "100%"}} image={data.allGraphCmsArticle.edges[0].node.verticalImageDarkMode.image.gatsbyImageData} alt={`${data.allGraphCmsArticle.edges[0].node.articleTitle }'s Picture`} />
          }
        </div>
          )}
        </ThemeContext.Consumer>
        <aside className={homepageStyles.mainArticleInfo}>
          <h1 className={homepageStyles.mainArticleHeading}>
            {data.allGraphCmsArticle.edges[0].node.articleTitle}
          </h1>
            {data.allGraphCmsArticle.edges[0].node.articleIntroduction.raw.children.map((paragraph, index) => {
              return(<p key={index} className={homepageStyles.mainArticleIntroduction}>
                {paragraph.children[0].text}
              </p>)
            })}
          <div className={homepageStyles.authorData}>
            <div className={homepageStyles.authorImageContainer}>
            <GatsbyImage objectFit="cover" style={{height: "100%", maxHeight: "100px", maxWidth: "100px", width: "100%"}} imgStyle={{height: "100%", width: "100%",maxHeight: "100px", maxWidth: "100px", borderRadius: "100%"}} image={data.allGraphCmsArticle.edges[0].node.author.authorImage.gatsbyImageData} alt={`${data.allGraphCmsArticle.edges[0].node.author.name}'s Picture`} />
            </div>
            <div className={homepageStyles.authorDetails}>
                <h2 className={homepageStyles.authorName}>
                  {data.allGraphCmsArticle.edges[0].node.author.name}
                </h2>
                <p>
                  {data.allGraphCmsArticle.edges[0].node.author.description.text}
                </p>  
            </div>
          
          </div>
        </aside>
      </div>
      </Link>
      <StoryRowHigh articleData={data.allGraphCmsArticle.edges}></StoryRowHigh>
      <CategorySection categoryData={data.General} category={"General"}></CategorySection>
      <CategorySection categoryData={data.Planted} category={"Planted"}></CategorySection>
      <CategorySection categoryData={data.Freshwater} category={"Freshwater"}></CategorySection>
      <CategorySection categoryData={data.Marine} category={"Marine"}></CategorySection>
      <CategorySection categoryData={data.Other} category={"Other"}></CategorySection>
    </Layout>
  )
}

export default IndexPage

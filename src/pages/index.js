import React, {useState, useEffect, useContext} from "react"
import Layout from "../components/layout"
import * as homepageStyles from "../styles/homepage.module.scss"
import {GatsbyImage} from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import StoryRowHigh from "../components/storyRowHigh"
import CategorySection from "../components/categorySection"
import { ThemeContext } from "../components/store"

export const query = graphql`
query MyQuery {
  allGraphCmsArticle(sort: {fields: publishedAt, order: DESC}, limit: 5) {
    edges {
      node {
        articleTitle
        urlName
        category
        mainImageDarkMode{
          gatsbyImageData
        }
        verticalImageDarkMode{
          gatsbyImageData
        }
        verticalMainImage {
          gatsbyImageData
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
          gatsbyImageData
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
          gatsbyImageData
        }
        verticalImageDarkMode{
          gatsbyImageData
        }
        verticalMainImage {
          gatsbyImageData
        }
        mainImage {
          gatsbyImageData
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
        gatsbyImageData
      }
      verticalImageDarkMode{
        gatsbyImageData
      }
      verticalMainImage {
        gatsbyImageData
      }
      mainImage {
        gatsbyImageData
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
          gatsbyImageData
        }
        verticalImageDarkMode{
          gatsbyImageData
        }
        verticalMainImage {
          gatsbyImageData
        }
        mainImage {
          gatsbyImageData
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
          gatsbyImageData
        }
        verticalImageDarkMode{
          gatsbyImageData
        }
        verticalMainImage {
          gatsbyImageData
        }
        mainImage {
          gatsbyImageData
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
          gatsbyImageData
        }
        verticalImageDarkMode{
          gatsbyImageData
        }
        verticalMainImage {
          gatsbyImageData
        }
        mainImage {
          gatsbyImageData
        }
      }
    }
  }
}

`

const IndexPage = ({data}) => {
  return (
      <Layout>
      <Link to={`${data.allGraphCmsArticle.edges[0].node.category.toLowerCase()}/${data.allGraphCmsArticle.edges[0].node.urlName}`}>
      <div className={homepageStyles.mainArticle}>
        <div className={homepageStyles.hoverInfo}><h2>View Article</h2></div>
        <ThemeContext.Consumer>
          {context => 
          (
            <div className={homepageStyles.mainArticleImage}>
          {
            context.theme == "light"?<GatsbyImage objectFit="cover" style={{height: "100%", width: "100%"}} imgStyle={{height: "100%", width: "100%"}} image={data.allGraphCmsArticle.edges[0].node.verticalMainImage.gatsbyImageData} alt={`${data.allGraphCmsArticle.edges[0].node.articleTitle }'s Picture`} /> : <GatsbyImage objectFit="cover" style={{height: "100%", width: "100%"}} imgStyle={{height: "100%", width: "100%"}} image={data.allGraphCmsArticle.edges[0].node.verticalImageDarkMode.gatsbyImageData} alt={`${data.allGraphCmsArticle.edges[0].node.articleTitle }'s Picture`} />
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

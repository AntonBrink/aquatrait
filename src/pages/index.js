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
query{
    cms 
    {
      articles(orderBy: publishedAt_DESC, first:3)
      {
        articleTitle
        urlName
        category
        mainImageDarkMode
        {
          image
          {
            url
          }
        }
        verticalImageDarkMode
        {
          image
          {
            url
          }
        }
        verticalMainImage 
        {
          image
          {
            url
          }
        }
        author 
        {
          name
          description 
          {
            text
          }
          authorImage 
          {
            url
          }
        }
        articleIntroduction 
        {
          text
          raw
        }
        mainImage 
        {
          image
          {
            url
          }
        }
      }

      Planted: articles(where: {category: Planted}, first: 3) {
        category
        articleTitle
        urlName
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
        verticalMainImage {
          image
          {
            url
          }
        }
        mainImage {
          image
          {
            url
          }
        }
      }
      Freshwater: articles(where: {category: Freshwater}, first: 3) {
        category
        articleTitle
        urlName
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
        verticalMainImage {
          image
            {
              url
            }
        }
        mainImage {
          image
            {
              url
            }
        }
    }
      Marine: articles(where: {category: Marine}, first: 3) {
            category
            articleTitle
            urlName
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
            verticalMainImage {
              image
              {
                url
              }
            }
            mainImage {
              image
              {
                url
              }
            }
      }
      General: articles(where: {category: General}, first: 3) {
            category
            articleTitle
            urlName
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
            verticalMainImage {
              image
              {
                url
              }
            }
            mainImage {
              image
              {
                url
              }
            }
      }
      Other: articles(where: {category: Other}, first: 3) {
            category
            articleTitle
            urlName
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
            verticalMainImage {
              image
              {
                url
              }
            }
            mainImage {
              image
              {
                url
              }
            }
          }
    }
  }
`

const IndexPage = ({data}) => {
  console.log("data: ", JSON.stringify(data,null,4))
  return (
      <Layout>
      <Head author="Anton Brink" title={"Aquatrait | Homepage"} metaDescription={"We strive to offer the best aquatics content with the best user experience"}></Head>
      <Link to={`${data.cms.articles.category.toLowerCase()}/${data.cms.articles.urlName}`}>
      <div className={homepageStyles.mainArticle}>
        <div className={homepageStyles.hoverInfo}><h2>View Article</h2></div>
        <ThemeContext.Consumer>
          {context => 
          (
            <div className={homepageStyles.mainArticleImage}>
          {
            context.theme == "light"?<GatsbyImage objectFit="cover" style={{height: "100%", width: "100%"}} imgStyle={{height: "100%", width: "100%"}} image={data.cms.articles.verticalMainImage.image.url} alt={`${data.cms.articles.articleTitle }'s Picture`} /> : <GatsbyImage objectFit="cover" style={{height: "100%", width: "100%"}} imgStyle={{height: "100%", width: "100%"}} image={data.cms.articles.verticalImageDarkMode.image.url} alt={`${data.cms.articles.articleTitle }'s Picture`} />
          }
        </div>
          )}
        </ThemeContext.Consumer>
        <aside className={homepageStyles.mainArticleInfo}>
          <h1 className={homepageStyles.mainArticleHeading}>
            {data.cms.articles.articleTitle}
          </h1>
            {data.cms.articles.articleIntroduction.raw.children.map((paragraph, index) => {
              return(<p key={index} className={homepageStyles.mainArticleIntroduction}>
                {paragraph.children[0].text}
              </p>)
            })}
          <div className={homepageStyles.authorData}>
            <div className={homepageStyles.authorImageContainer}>
            <GatsbyImage objectFit="cover" style={{height: "100%", maxHeight: "100px", maxWidth: "100px", width: "100%"}} imgStyle={{height: "100%", width: "100%",maxHeight: "100px", maxWidth: "100px", borderRadius: "100%"}} image={data.cms.articles.author.authorImage.url} alt={`${data.cms.articles.author.name}'s Picture`} />
            </div>
            <div className={homepageStyles.authorDetails}>
                <h2 className={homepageStyles.authorName}>
                  {data.cms.articles.author.name}
                </h2>
                <p>
                  {data.cms.articles.author.description.text}
                </p>  
            </div>
          
          </div>
        </aside>
      </div>
      </Link>
      <StoryRowHigh articleData={data.cms.articles}></StoryRowHigh>
      <CategorySection categoryData={data.General} category={"General"}></CategorySection>
      <CategorySection categoryData={data.Planted} category={"Planted"}></CategorySection>
      <CategorySection categoryData={data.Freshwater} category={"Freshwater"}></CategorySection>
      <CategorySection categoryData={data.Marine} category={"Marine"}></CategorySection>
      <CategorySection categoryData={data.Other} category={"Other"}></CategorySection>
    </Layout>
  )
}

export default IndexPage

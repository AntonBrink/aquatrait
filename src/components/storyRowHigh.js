import * as React from "react"
import {Link} from "gatsby"
import * as storyRowStyles from "../styles/storyRow.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"
import ArticleLink from "../components/articleLink"

const StoryRowHigh = ({articleData}) => {
  console.log(articleData)
  return (
   <section className={storyRowStyles.storyRowHigh} >
    {articleData.map((articleLink, index)=>
    {
      if(index != 0)
      {
        return(
        
          <div key={index} className={storyRowStyles.articleContainer}>
            <ArticleLink articleData={articleLink.node}></ArticleLink>
          </div>
        ) 
      }
    })}
   </section>
  )
}

export default StoryRowHigh


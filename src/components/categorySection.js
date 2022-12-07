import * as React from "react"
import * as categorySectionStyles from "../styles/categorySection.module.scss"
import ArticleLink from "./articleLink"
const CategorySection = ({categoryData, category}) => {
  return (
   <section className={categorySectionStyles.categoryContainer}>
    <h2 className={categorySectionStyles.categoryTitle}>{category}</h2>
    <div className={categorySectionStyles.articleContainer}>
    {categoryData.edges.map((articleLink, index)=>
    {
      return(
        <div key={index} className={categorySectionStyles.categorySectionArticle}>
        <ArticleLink articleData={articleLink.node} articleContainer={"categorySection"}></ArticleLink>
        </div>
      )
    })}
    </div>
   </section>
  )
}

export default CategorySection


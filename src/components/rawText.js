import * as React from "react"
import { ThemeContext } from "../components/store"
import { GatsbyImage, StaticImage  } from "gatsby-plugin-image"
import * as rawTextStyles from "../styles/rawText.module.scss"

const RawText = ({text}) => {
    console.log(text)
  return (
    <section>
        {text.raw.children.map(function(content)
        {
            switch(content.type)
            {
                case "paragraph":
                    return (content.children.map(function(contentText)
                    {
                        return <p style={{fontWeight: contentText.bold? "bold" : "normal", fontStyle: contentText.italic? "italic": "normal", textDecoration: contentText.underline? "underline" : "none"}}>{contentText.text}</p>
                    }))
                case "heading-one":
                    return (content.children.map(function(contentText)
                    {
                        return <h1 className={rawTextStyles.rawH1} style={{fontWeight: contentText.bold? "bold" : "normal", fontStyle: contentText.italic? "italic": "normal", textDecoration: contentText.underline? "underline" : "none"}}>{contentText.text}</h1>
                    }))
                case "heading-two":
                    return (content.children.map(function(contentText)
                    {
                        return <h2 className={rawTextStyles.rawH2} style={{fontWeight: contentText.bold? "bold" : "normal", fontStyle: contentText.italic? "italic": "normal", textDecoration: contentText.underline? "underline" : "none"}}>{contentText.text}</h2>
                    }))
                case "heading-three":
                    return (content.children.map(function(contentText)
                    {
                        return <h3 className={rawTextStyles.rawH3} style={{fontWeight: contentText.bold? "bold" : "normal", fontStyle: contentText.italic? "italic": "normal", textDecoration: contentText.underline? "underline" : "none"}}>{contentText.text}</h3>
                    }))
                case "heading-four":
                    return (content.children.map(function(contentText)
                    {
                        return <h4 className={rawTextStyles.rawH4} style={{fontWeight: contentText.bold? "bold" : "normal", fontStyle: contentText.italic? "italic": "normal", textDecoration: contentText.underline? "underline" : "none"}}>{contentText.text}</h4>
                    }))
                case "heading-five":
                    return (content.children.map(function(contentText)
                    {
                        return <h5 className={rawTextStyles.rawH5} style={{fontWeight: contentText.bold? "bold" : "normal", fontStyle: contentText.italic? "italic": "normal", textDecoration: contentText.underline? "underline" : "none"}}>{contentText.text}</h5>
                    }))
                case "heading-six":
                    return (content.children.map(function(contentText)
                    {
                        return <h6 className={rawTextStyles.rawH6} style={{fontWeight: contentText.bold? "bold" : "normal", fontStyle: contentText.italic? "italic": "normal", textDecoration: contentText.underline? "underline" : "none"}}>{contentText.text}</h6>
                    }))
                // case "image":
                //     <ThemeContext.Consumer>
                //         {context => (<div className={rawTextStyles.mainImageContainer}><GatsbyImage  image={context.theme == "light"?  content.src : content.src} imgStyle={{width: "100%", height: "100%", objectFit:"cover"}} style={{width: "100%", height: "100%", objectFit:"cover"}} alt={content.altText}></GatsbyImage ></div>)}
                //     </ThemeContext.Consumer>

            }
            if(content.type == "paragraph")
            {
                return (content.children.map(function(contentText)
                {
                    return <p>{contentText.text}</p>
                }))
            }

        })}
    </section>
  )
}

export default RawText


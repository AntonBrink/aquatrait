import * as React from "react"

function Head({title,metaDescription, author}) {
  return (
    <>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="author" content={author}/>
    </>
  )
}

export default Head
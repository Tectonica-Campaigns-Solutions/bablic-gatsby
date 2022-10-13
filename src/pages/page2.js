import * as React from "react"
import { Script } from "gatsby"
const Page2 = () => {
  return (
    <div className="main">
      <Script src="//d.bablic.com/snippet/6347e74b566d76000106e467.js?version=3.9" />
      <h1> Page number two</h1>
      <p>New page number two</p>
    </div>
  )
}

export default Page2

export const Head = () => <title>Page 1</title>
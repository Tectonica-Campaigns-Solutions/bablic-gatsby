import * as React from "react"
import { Script } from "gatsby"
const Page1 = () => {
  return (
    <div className="main">
      <Script src="//d.bablic.com/snippet/6347e74b566d76000106e467.js?version=3.9" />
      <h1> Page number one</h1>
      <p>Testing porpuses</p>
    </div>
  )
}

export default Page1

export const Head = () => <title>Page 1</title>
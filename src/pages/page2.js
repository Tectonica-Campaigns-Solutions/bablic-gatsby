import * as React from "react"
import { Link } from "gatsby"
const Page2 = () => {
  return (
    <div className="main">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">page 1</Link>
          </li>
          <li>
            <Link to="/page2">page 2</Link>
          </li>
        </ul>
      </nav>
      <h1> Page number two</h1>
      <p>New page number two</p>
    </div>
  )
}

export default Page2

export const Head = () => <>
<title>Page 2</title>
<script src="//d.bablic.com/snippet/6347e74b566d76000106e467.js?version=3.9"></script>
</>
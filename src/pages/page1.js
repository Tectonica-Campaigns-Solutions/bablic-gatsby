import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
const Page1 = () => {
  const [accesLoaded, setAccesLoaded] = useState(false);
  useEffect(() => {
    
    if(typeof window !== 'undefined'){
      const s = document.createElement('script'); 
      s.src = 'https://acsbapp.com/apps/app/dist/js/app.js';
      s.async = true; 
      s.addEventListener('load', ()=>setAccesLoaded(true))
      document.querySelector('head').appendChild(s);
    }
    
  }, [])

  useEffect(() => {
    if(!accesLoaded) return;
    if(typeof window !== 'undefined'){
      window.acsbJS.init();
    }
  },[accesLoaded])

 
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
      <h1> Page number one</h1>
      <p>Testing porpuses</p>
    </div>
  )
}

export default Page1

export const Head = () => <>
<title>Page 1</title>
<script src="//d.bablic.com/snippet/6347e74b566d76000106e467.js?version=3.9"></script>
</>
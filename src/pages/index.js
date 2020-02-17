import React from "react"
import "../sass/styles.scss"

export default () => <div className="container"><img className="background" src="/images/PatrickBatemanFistbump_background.jpg" alt="Soon Come - Background - Room" srcSet="/images/PatrickBatemanFistbump_background-480x640.jpg 480w, /images/PatrickBatemanFistbump_background-768x1024.jpg 768w, /images/PatrickBatemanFistbump_background-960x1280.jpg 960w, /images/PatrickBatemanFistbump_background-1280x1707.jpg 1280w,	/images/PatrickBatemanFistbump_background-1536x2048.jpg 1536w, /images/PatrickBatemanFistbump_background-1920x2560.jpg 1920w, /images/PatrickBatemanFistbump_background.jpg 2560w" /><div className="sooncome"><span>SOON COME</span></div><img className="foreground" src="/images/PatrickBatemanFistbump_foreground.png" alt="Soon Come - Foreground - Room" srcSet="/images/PatrickBatemanFistbump_foreground-480x640.png 480w, /images/PatrickBatemanFistbump_foreground-768x1024.png 768w, /images/PatrickBatemanFistbump_foreground-960x1280.png 960w, /images/PatrickBatemanFistbump_foreground-1280x1707.png 1280w,	/images/PatrickBatemanFistbump_foreground-1536x2048.png 1536w, /images/PatrickBatemanFistbump_foreground-1920x2560.png 1920w, /images/PatrickBatemanFistbump_foreground.png 2560w" />
<svg xmlns="http://www.w3.org/2000/svg" className="svg-filters">
  <filter id="duotone">  
		<feColorMatrix type="matrix" result="grayscale"
		  values="1 0 0 0 0
		    1 0 0 0 0
		    1 0 0 0 0
		    0 0 0 1 0" >
		</feColorMatrix>
    <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
      <feFuncR type="table" tableValues="0.05490196078 1"></feFuncR>
      <feFuncG type="table" tableValues="0.1568627451 0.5921568627"></feFuncG>
      <feFuncB type="table" tableValues="0.1647058824 0.003921568627"></feFuncB>
      <feFuncA type="table" tableValues="0 1"></feFuncA>
    </feComponentTransfer> 
  </filter>   
</svg>
</div>

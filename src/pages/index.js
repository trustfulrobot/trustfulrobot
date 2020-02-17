import React from "react"
import Color from "color"
import "../sass/styles.scss"

const colorShadows = "#70d28a";
const colorHighlights = "#fd1b85";
const colorShadows_R = Color.rgb(colorShadows).red();
const colorShadows_G = Color.rgb(colorShadows).green();
const colorShadows_B = Color.rgb(colorShadows).blue();
const colorHighlights_R = Color.rgb(colorHighlights).red();
const colorHighlights_G = Color.rgb(colorHighlights).green();
const colorHighlights_B = Color.rgb(colorHighlights).blue();
const feFuncRValues = colorShadows_R / 255 + " " + colorHighlights_R / 255;
const feFuncGValues = colorShadows_G / 255 + " " + colorHighlights_G / 255;
const feFuncBValues = colorShadows_B / 255 + " " + colorHighlights_B / 255;

export default () => <div className="container"><img className="background" src="https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background.jpg" alt="Soon Come - Background - Room" srcSet="https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background-480x640.jpg 480w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background-768x1024.jpg 768w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background-960x1280.jpg 960w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background-1280x1707.jpg 1280w,	https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background-1536x2048.jpg 1536w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background-1920x2560.jpg 1920w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_background.jpg 2560w" /><div className="sooncome"><span>SOON COME</span></div><img className="foreground" src="https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground.png" alt="Soon Come - Foreground - Room" srcSet="https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground-480x640.png 480w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground-768x1024.png 768w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground-960x1280.png 960w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground-1280x1707.png 1280w,	https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground-1536x2048.png 1536w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground-1920x2560.png 1920w, https://trustfulrobot-landingpage.s3.us-east-2.amazonaws.com/PatrickBatemanFistbump_foreground.png 2560w" />
  <svg xmlns="http://www.w3.org/2000/svg" className="svg-filters">
    <filter id="duotone">  
  		<feColorMatrix type="matrix" result="grayscale"
  		  values="1 0 0 0 0
  		    1 0 0 0 0
  		    1 0 0 0 0
  		    0 0 0 1 0" >
  		</feColorMatrix>
      <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
        <feFuncR type="table" tableValues={feFuncRValues}></feFuncR>
        <feFuncG type="table" tableValues={feFuncGValues}></feFuncG>
        <feFuncB type="table" tableValues={feFuncBValues}></feFuncB>
        <feFuncA type="table" tableValues="0 1"></feFuncA>
      </feComponentTransfer> 
    </filter>   
  </svg>
</div>

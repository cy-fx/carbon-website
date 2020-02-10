import React from "react"
import { LiquidDistortionText } from "react-text-fun"
import "./styles.css"

if (typeof document !== "undefined") {
  const script = document.createElement("script")
  script.async = true
  script.src = "https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"
  document.head.appendChild(script)
}

function CarbonAnimationBlue() {
  const [value, setValue] = React.useState(0)
  const updateShader = e => setValue(e.clientX)

  return (
    <div className="column">
      <div className="App" onMouseMove={updateShader}>
        <LiquidDistortionText
          fill={"#0000FF"}
          speed={0.1}
          volatility={0.1}
          text={"Carbón"}
          paddingRight={900}
          paddingLeft={900}
          fontFamily={"Helvetica"}
          fontSize={300}
          lineHeight={1}
        />
      </div>
      <div className="App" onMouseMove={updateShader}>
        <LiquidDistortionText
          fill={"#000FF0"}
          speed={0.1}
          volatility={0.2}
          text={"Carbón"}
          paddingRight={900}
          paddingLeft={900}
          fontFamily={"Helvetica"}
          fontSize={300}
          lineHeight={1}
        />
      </div>
      <div className="App" onMouseMove={updateShader}>
        <LiquidDistortionText
          fill={"#000FF0"}
          speed={0.1}
          volatility={0.2}
          text={"Carbón"}
          paddingRight={900}
          paddingLeft={900}
          fontFamily={"Helvetica"}
          fontSize={300}
          lineHeight={1}
        />
      </div>
      <div className="App" onMouseMove={updateShader}>
        <LiquidDistortionText
          fill={"#000FF0"}
          speed={0.1}
          volatility={0.2}
          text={"Carbón"}
          paddingRight={900}
          paddingLeft={900}
          fontFamily={"Helvetica"}
          fontSize={300}
          lineHeight={1}
        />
      </div>
      
    </div>
  )
}

export default CarbonAnimationBlue

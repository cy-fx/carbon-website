import React from "react"
import { LiquidDistortionText } from "react-text-fun"
import "./styles.css"

if (typeof document !== "undefined") {
  const script = document.createElement("script")
  script.async = true
  script.src = "https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"
  document.head.appendChild(script)
}

function BlotterAnimation() {
  const [value, setValue] = React.useState(0)
  const updateShader = e => setValue(e.clientX)

  return (
    <div className="column">
      <div className="App" onMouseMove={updateShader}>
        <LiquidDistortionText
          fill={"#000000"}
          speed={0.1}
          volatility={0.1}
          text={"Carbón"}
          paddingRight={900}
          paddingLeft={900}
          fontFamily={"Helvetica"}
          fontSize={234}
          lineHeight={1}
        />
      </div>
      <div className="App" onMouseMove={updateShader}>
        <LiquidDistortionText
          fill={"#000000"}
          speed={0.1}
          volatility={0.2}
          text={"Carbón"}
          paddingRight={900}
          paddingLeft={900}
          fontFamily={"Helvetica"}
          fontSize={234}
          lineHeight={1}
        />
      </div>
      <div className="App" onMouseMove={updateShader}>
        <LiquidDistortionText
          fill={"#000000"}
          speed={0.1}
          volatility={0.2}
          text={"Carbón"}
          paddingRight={900}
          paddingLeft={900}
          fontFamily={"Helvetica"}
          fontSize={234}
          lineHeight={1}
        />
      </div>
      <div className="App" onMouseMove={updateShader}>
        <LiquidDistortionText
          fill={"#000000"}
          speed={0.1}
          volatility={0.2}
          text={"Carbón"}
          paddingRight={900}
          paddingLeft={900}
          fontFamily={"Helvetica"}
          fontSize={234}
          lineHeight={1}
        />
      </div>
      <div className="App" onMouseMove={updateShader}>
        <LiquidDistortionText
          fill={"#000000"}
          speed={0.1}
          volatility={0.23}
          text={"Carbón"}
          paddingRight={900}
          paddingLeft={900}
          fontFamily={"Helvetica"}
          fontSize={234}
          lineHeight={1}
        />
      </div>
    </div>
  )
}

export default BlotterAnimation

// import React from "react"
// import { LiquidDistortionText } from "react-text-fun"
// import "./styles.css"

// const script = document.createElement("script")
//     script.async = true
//     script.src = "https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js"
//     document.head.appendChild(script)

// class BlotterAnimation extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: 0,
//       done: false,
//     }
//   }

//   componentDidMount() {

//     this.setState({ done: true })
//   }

//   updateShader(e) {
//     this.setState({ value: e.clientX })
//   }

//   render() {
//     return (
//       <div className="column">
//         {this.state.done ? (
//           <div className="App" onMouseMove={e => this.updateShader(e)}>
//             <LiquidDistortionText
//               fill={"#000000"}
//               speed={0.1}
//               volatility={0.1}
//               text={"Carbón"}
//               paddingRight={900}
//             />
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     )
//   }
// }

// export default BlotterAnimation

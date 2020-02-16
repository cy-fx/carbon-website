import React from "react"
import headerNavigationStyle from "./style.module.scss"
import Header from "../header"
import OffCanvas from "../off-canvas"
import HeaderWhite from "../header-white"

class HeaderNavigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offCanvas: false,
    }
  }

  navBarClicked = () => {
    
    if(this.state.offCanvas){
      this.setState({ offCanvas: false })
      document.getElementsByClassName("disable")[0].style.display= "block"
    }
    if(!this.state.offCanvas){
      this.setState({ offCanvas: true })
      document.getElementsByClassName("disable")[0].style.display= "none"
    }
  }

  render() {
    return (
      <div className={headerNavigationStyle.fullWidth}>
        {this.state.offCanvas ? (
          <OffCanvas navBarClicked={this.navBarClicked} />
        ) : !this.props.whiteNavBar ? (
          <Header navBarClicked={this.navBarClicked} />
        ) : (
          <HeaderWhite navBarClicked={this.navBarClicked} />
        )}
      </div>
    )
  }
}

export default HeaderNavigation

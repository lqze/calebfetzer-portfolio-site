import React from "react"
import { StyledHeader } from './header.css';

class Header extends React.Component {
  constructor (props) {
    super(props);
    // https://lxieyang.github.io/blogs/tech-2018-08-18-reactstrap-gatsby-auto-hiding-navbar-trick/
    
    this.toggle = this.toggleNavbar.bind(this);
    window.onscroll = (e) => {
      console.log(e);
    }
    if (typeof window !== 'undefined') {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
            (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
          || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
          || (prevScrollpos <= 0 && currentScrollPos <= 0)
          ) {
          document.getElementById("navbar-header").style.top = "0";
        } else {
          document.getElementById("navbar-header").style.top = "-5.5rem"; // adjustable based your need
        }
        prevScrollpos = currentScrollPos;
      }
    }
  }

  state = {
    isOpen: false
  };

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    const { children } = this.props;
    return (
      <StyledHeader id="navbar-header" className={this.props.className ? this.props.className : ''}>
        {children}
      </StyledHeader>
    )
  }
}

export default Header;
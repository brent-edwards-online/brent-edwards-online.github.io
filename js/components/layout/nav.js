import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const homeClass = location.pathname === "/" ? "active" : "";
    const optionsClass = location.pathname.match(/^\/options/) ? "active" : "";
    const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container-fluid nav-header">    
          <i class="fa fa-phone"><a href="tel:+61405250846">: +61 405 250 846</a></i>
          <i class="fa fa-envelope">:<a href="mailto:brent@brentedwardsonline.com">brent@brentedwardsonline.com</a></i>
        </div>
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <li class={homeClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li class={optionsClass}>
                <Link to="options" onClick={this.toggleCollapse.bind(this)}>Flight Options</Link>
              </li>
              <li class={aboutClass}>
                <Link to="about" onClick={this.toggleCollapse.bind(this)}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

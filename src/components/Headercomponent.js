import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class  Headercomponent extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

render() {
    return(
        <div>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.jpg' height="50" width="50" alt='匠韵工程师机器人' /></NavbarBrand>
                      <Collapse isOpen={this.state.isNavOpen} navbar>
                          <Nav navbar>
                          <NavItem>
                              <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> 首页</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link"  to='/upload'><span className="fa fa-list fa-lg"></span> 机器学习</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> 联系我们</NavLink>
                          </NavItem>
                          </Nav>
                        </Collapse>
                </div>
            </Navbar>
        </div>
    );
  }
}

export default  Headercomponent;
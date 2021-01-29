import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import styled from 'styled-components';
import { Search } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import {setLogged} from './globalInf'

const Styles = styled.div`
  .navbar{ background-color: #1f2d38}
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }

  .inDiv{
    border: 1px solid gray;
    border-radius: 3px;

    &:hover {
      border-color: white;
    }
  }
  .in {
    background-color: #1f2d38;
    border-style: none;
    color: white;
  }
  .input-group-text {
    padding-right: 0px;
    padding-left: 5px;
    color: gray;
    &:hover {
      border-color: white;
    }
  }
  input{
    padding-left: 4px;
    &:focus {
      -webkit-box-shadow: none;
      box-shadow: none;
      color: white;
    }
  }
  .dropdown-menu {
    background-color: #1f2d38;
    padding-left: 5px;
  }
  .dropdown-divider, .dropdown-item {
      width: 100%;
      color: #bbb;
      padding: 5px 5px 5px 5px;

      &:hover{
        color: black;
      }
  }
`;

export class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      redirectSate: false,
      searchingText: "",
      logged: 0
    };
  }

  componentDidMount() {
    document.title = "Watchnet - prova " + this.props.classe;
  }
  afterSubmit() {
    this.setState({
      redirectSate: false,
      searchingText: ""
    });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleSubmit = (event) => {
    let value = document.getElementById("search").value;
    event.preventDefault()
    this.setState({
      redirectSate: true,
      searchingText: value
    });
  }

  setLogTrue = (e) => {
    e.preventDefault()
    setLogged(true);
    //window.location.reload(true); 
    this.setState({
      logged: 1
    });
  }

  setLogFalse = (e) => {
    e.preventDefault()
    setLogged(false);
    this.setState({
      logged: 0
    });
  }

  Login() {
    if (this.state.logged)
      return (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Ciao Utente
                </DropdownToggle>
          <DropdownMenu right >
            <DropdownItem>
              Il tuo account
                  </DropdownItem>
            <DropdownItem>
              La tua lista
                  </DropdownItem>
            <DropdownItem onClick={this.setLogFalse}>
             Esci
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    else
      return (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Login
              </DropdownToggle>
          <DropdownMenu right >
            <form className="form-inline" onSubmit={this.setLogTrue}>

              <input type="email" className="form-control in" placeholder="Email" aria-label="" aria-describedby="basic-addon1" />


              <input type="password" className="form-control in" placeholder="Password" aria-label="" aria-describedby="basic-addon1" />

              <DropdownItem divider />

              <Button type="submit" size="small" color="primary" variant="contained" fullWidth={true}>
                Invia
                </Button>
            </form>
            <DropdownItem>
              Non sei registato? Fallo adesso!
                </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      );

  }
  render() {
    const redirectSate = this.state.redirectSate;
    if (redirectSate) {
      this.afterSubmit();
      return <Redirect to={{
        pathname: '/searching',
        state: {
          text: this.state.searchingText,
          flag: true
        }
      }}
      />
    }

    return (
      <Styles>
        <Navbar expand="md" fixed="top">
          <NavbarBrand >
          <Link to="/"><img src='./assets/logo.svg' height="20rem" alt=""/></Link>            
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-3" navbar>
              <NavItem>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                  <div className="input-group inDiv">
                    <div className="input-group-prepend ">
                      <span className="input-group-text in" id="basic-addon1"><Search /></span>
                    </div>
                    <input id="search" type="text" className="form-control in" placeholder="Cerca" aria-label="" aria-describedby="basic-addon1" ref={node => (this.inputNode = node)} required />
                  </div>
                </form>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/">Home</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/Film">Film</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/serieTV">Serie TV</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/about">Su di noi</Link>
                </NavLink>
              </NavItem>
              {this.Login()}
            </Nav>
          </Collapse>
        </Navbar>
      </Styles >
    );
  }
}

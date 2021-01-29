import React from 'react';
import {
    Jumbotron as Jumbo,
    Container,
} from 'reactstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background-color: #293c4a;
    height: 124px;
    position: absolute;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    z-index: -2;
    bottom: 0px;
    margin-bottom: 0px;
    clear: both;
  }

  .text, .copy {
    position: relative;
    color: #efefef;
    text-align: center;
    z-index: -1;
  }
  .copy {
      background-color: #141e25;
      font-size: 13px;
      height: 3rem;
      padding-top: 1rem; 
  }
  .logo {
      padding: 0.5rem 0px 1.5rem 0px;
  }
`;

export const Footer = () => (
    <Styles>
        <footer>
            <Jumbo fluid className="jumbo">
                <Container fluid className="text logo">
                <img src='./assets/logo.svg' height="40rem" alt=""/>
                </Container>
                <Container fluid className="copy text">
                    &copy; {new Date().getFullYear()} Copyright: Watchnet
                    </Container>
            </Jumbo>
        </footer>
    </Styles>
)

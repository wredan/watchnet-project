import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .cont {
    background-color: #1f2d38;
    position: relative;
    top: 56px;
    min-height: 100%;
    overflow: hidden;
    z-index: 0;
    padding: 0px 0px 0px 0px;
  }
`;
export const Layout = (props) => (
  <Styles>
    <Container fluid className="cont">
      {props.children}
    </Container>
  </Styles>
)

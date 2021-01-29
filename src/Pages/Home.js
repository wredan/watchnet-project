import React from 'react'
import { MainCarousel } from '../components/MainCarousel';
import { VideoCarousel } from '../components/HomeVideoCarousel';
import { Container } from 'reactstrap'
import styled from 'styled-components';
import cardArray from '../components/arrayVideo.js'

const Styles = styled.div`
  .container-fluid {
    padding-left: 5vh;
    padding-right: 5vh;
  }
  strong > p {
    margin-top: 1rem;
    margin-left: 2rem;
    margin-bottom: 0rem;
    color: white;
    font-size: 20px;
  }
`;

export class Home extends React.Component {
  componentDidMount() {
    document.title = "Watchnet"
}

  render() {
    return (
    <div>
      <Styles>
      <MainCarousel />
      <Container fluid>
      <div>
        <strong><p> Film aggiunti di recente </p></strong>
      </div>
      <VideoCarousel cards = {cardArray.filter(card => card.type === "Film").sort((a, b) => b.nVisual - a.nVisual)}/>
      <div>
        <strong><p> Serie TV aggiunte di recente </p></strong>
      </div>
      <VideoCarousel cards = {cardArray.filter(card => card.type === "Serie TV").sort((a, b) => b.nVisual - a.nVisual)}/>
      <div>
        <strong><p> Film più popolari </p></strong>
      </div>
      <VideoCarousel cards = {cardArray.filter(card => card.type === "Film").sort((a, b) => b.nVisual - a.nVisual)}/>
      <div>
        <strong><p> Serie TV più popolari </p></strong>
      </div>
      <VideoCarousel cards = {cardArray.filter(card => card.type === "Serie TV").sort((a, b) => b.nVisual - a.nVisual)}/>
      </Container>
      </Styles>
    </div>
    );
  }
}

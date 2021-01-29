import React from 'react'
import { VideoCarousel } from '../components/HomeVideoCarousel';
import { Generi } from '../components/Generi';
import { Container } from 'reactstrap'
import styled from 'styled-components';
import { Search } from '../components/Search.js'
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
    font-size: 18px;
  }
  .container {
      text-align: center;
      color: white;
  }
`;


export class ClasseVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageContent: () => {
        return (
          <div>
            <div>
              <strong><p> {this.props.classe} aggiunti di recente </p></strong>
            </div>
            <VideoCarousel cards = {cardArray.filter(card => card.type === this.props.classe).sort((a, b) => b.nVisual - a.nVisual)}/>
            <div>
              <strong><p> {this.props.classe} più popolari </p></strong>
            </div>
            <VideoCarousel cards = {cardArray.filter(card => card.type === this.props.classe).sort((a, b) => b.nVisual - a.nVisual)}/>
          </div>
        );
      }
    }
  }

  componentDidMount() {
    document.title = "Watchnet - "+this.props.classe;
  }

  setContent(descr) {
    let c = cardArray.filter(card => card.type === this.props.classe);
    console.log(this.props.classe)
    if(descr !== "Tutti")
      c = c.filter(card => card.genere === descr);

    this.setState({
      pageContent: () => {
        return (
          <Search 
            descr = {descr}
            cards = {c}
          />
        );
      }
    });
  }

  render() {
    return (
      <div>
        <Styles>
          <Container>
            <h2><strong>{this.props.classe}</strong></h2><br />
            <h5>Scegli il genere di {this.props.classe} che ti interessa</h5>
          </Container>
          <Container fluid style={{marginLeft: "2rem"}}>
            <Generi 
              setContent={(descr) => this.setContent(descr)} 
              
            />
          </Container>
          <Container fluid>
            {this.state.pageContent()}
          </Container>
        </Styles>
      </div>
    );
  }
}

import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .generi {
    padding-left: 3rem !important;
    padding-right: 3rem !important;
   }
  .genere {
    position: relative;
    width: 3rem;
    height: 8rem;
    
  }
  .img {
      position: relative;
      height: 100%;
      opacity: 0.6;
  }
  .btn {
      position: relative;
      background-color: black;
        border: none;
        border-radius: 15px;
        padding: 0px 0px 0px 0px;
       overflow: hidden;
        height: 100%;
        -webkit-box-shadow: 2px 2px 15px black;
        box-shadow: 2px 2px 15px black;
  }
  button > div {
      position: absolute;
      color: white;
      font-size: 20px;
      width: 100%;
      text-align: center;
      bottom: 1rem;
  }
  .riga {
      padding: 2rem 0px 2rem 0px;
  }
`;

const cat = [
    {
        id: 1,
        image: './assets/animazione.jpg',
        descr: "Animazione"
    },
    {
        id: 2,
        image: './assets/azione.png',
        descr: "Azione"
    },
    {
        id: 3,
        image: './assets/commedia.jpg',
        descr: "Commedia"
    },
    {
        id: 4,
        image: './assets/drammatico.jpg',
        descr: "Drammatico"
    },
    {
        id: 5,
        image: './assets/famiglia.jpg',
        descr: "Famiglia"
    },
    {
        id: 6,
        image: './assets/A-Z.jpg',
        descr: "Tutti"
    },
];



export class Generi extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            slides: cat.map((c) => {
               
                return (
                    <Col className="genere">
                        <button className="btn" onClick={() => this.props.setContent(c.descr)}>
                            <img className="img" src={c.image} alt=""/>
                            <div><strong>{c.descr}</strong></div>
                        </button>
                    </Col>
                );
            })
        }
    }

    render() {
        return (
            <Styles>
                <Container fluid className="generi">
                    <Row className="riga">
                        {this.state.slides}
                    </Row>
                </Container>
            </Styles>
        );
    }
}

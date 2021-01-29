import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components';
import { MediaCard } from './Card'

const Styles = styled.div` 
.container-fluid {
    padding-left: 5vh;
    padding-right: 5vh;
    font-family: "Comic Sans MS", cursive, sans-serif;
    color: white;
    text-align: center;
  }
   
.item {
    position: relative;
    display: inline-block;
    width: 300px;
    padding: 2rem 0px 1rem 0px;
  }
  .noElem {
      margin-top: 20vh;
  }
`;


export class Search extends React.Component {

    setContent() {
        if (this.props.cards.length) {
            const elements = this.props.cards.map((card) => {
                return (
                    <div className="item">
                        <div>
                        <MediaCard card={card}/>
                        </div>
                    </div>  
                );
            });
            return (
                <div >
                    { elements }
                </div>
            );
        }
        else {
            return (
                <div className="noElem">
                    <h4>Nessun elemento trovato</h4>
                </div>
                
            )
        }
    }

    render() {
        return (
            <div>
                <Styles>
                    <Container fluid>
                        <h2><strong>{this.props.descr}</strong></h2>
                        {this.setContent()}                            
                    </Container>
                </Styles>
            </div>
        );
    }
}

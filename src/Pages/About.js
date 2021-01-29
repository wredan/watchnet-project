import React from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .aboutus {
    position: relative;
    margin-top: 56px;
    color: white;
    font-size: 18px;
    line-height: 2rem;
  }

  .aboutus > h2 {
      text-align: center;
      padding: 1rem 0px 1rem 0px;
  }
  .center {
    text-align: center;
  }
`;

export class About extends React.Component {
  componentDidMount() {
    document.title = "Watchnet - Su di noi"
  }
  render() {
    return (
      <div>
        <Styles>
          <Container className="aboutus">
            <h2><strong>Chi siamo</strong></h2>
            <p>
              Watchnet nasce nel 2019 da un'idea di un giovane universitario, Danilo Santitto. È stata debitamente visionata in quanto oggetto di esame del corso di Basi di Dati, corso semestrale della
              laurea triennale in informatica, a Catania.
            </p>
            <p>
              Non è ufficialmente commercializzata e probabilmente non lo sarà mai, però se si è riusciti ad entrare in possesso
               dei file sorgente si può godere comunque l'esperienza e trarne qualche spunto di riflessione per quanto riguarda lo studio di React.
           </p>
           <p className="center">--------------------------------</p>
           <p>
              Watchnet was born in 2019 from an idea of ​​a young university student, Danilo Santitto. It has been reviewed from the Database course examiner, 
              a semester course of three-year degree in computer science, in Catania.
            </p>
            <p>
            It is not officially commercialized and probably never will be, but you can still enjoy the experience and get some food for thought about React.
           </p>
          </Container>
        </Styles>
      </div>
    );
  }
}


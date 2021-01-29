import React from 'react';
import {
    Button
} from 'reactstrap';
import styled from 'styled-components';

const Styles = styled.div`
.disclaimerbk {
    position: absolute;
    display: block;
    top: 10%;
    width: 100%;    
    background-color: white;
    opacity: 0.95;
    z-index: 10;
  }
  .disclaimer {
    position: relative;
    display: block;
    top: 10%;
    text-align: center;
    font-size: 25px;
    width: 100%;
    opacity: 1;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .blur {
    position: absolute;
    width:100vw;
    height:100%;
    background-size:cover;
    background-color: black;
    opacity: 0.7;
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);
    -o-filter: blur(10px);
    filter: blur(10px);
    z-index: 9;
    }
`;

var Disc = (props) => {
    return(
    <Styles>
        <div className="blur"></div>
        <div class="disclaimerbk">
            <p class="disclaimer">
                <strong>ATTENZIONE: </strong>
                <br /><br />
                È SEVERAMENTE vietata la diffusione del materiale presente su questo portale, il progetto nasce ESCLUSIVAMENTE a scopo didattico
                e illustrativo,
                <br />
                NON è stato realizzato a scopo di lucro. Non esiste alcun reale video protetto da copyright all'interno di questo portale.
                <br /><br />
                -----------------------------------------------
                <br /><br />
                The content spreading is STRICTLY forbidden, the project was created EXCLUSIVELY for educational and illustrative purposes,
                <br />
                It was NOT made for profit. There is no actual copyrighted video within this portal.               
                <br /><br /><br />
                <Button color="primary" onClick={props.onClick}>Ok</Button>
            </p>
        </div>
       
    </Styles>
    );
}
export class Disclaimer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          show: true
        }
      }
    
    onClick(){
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <div>
                {this.state.show ? <Disc onClick={() => {this.onClick()}} /> : null}
            </div>
            
        );
    }
}
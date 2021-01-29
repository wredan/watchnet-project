import React from 'react'
import {
    Container,
    Row,
    Col,
    Jumbotron
} from 'reactstrap'
import styled from 'styled-components';
import Player from '../components/PlayerVideo';
import Rating from '../components/Rating';
import Button from '@material-ui/core/Button';

const Styles = styled.div`
.mainContainer {
    margin-top: 56px;
    padding-bottom: 3rem;
}
.container{
    color: white;
    font-family: "Comic Sans MS", cursive, sans-serif;
}
.jumbotron-fluid {
    background-color: #1f2d38;
    margin-bottom: 0px;
}
.title {
    padding: 3rem 0rem 2rem 0rem;
}
.player {
    background-color: #141e25;
}
.review {
    padding: 1.5rem 0rem 1.5rem 0rem;
}
.valTxt {
    font-size: 14px;
    margin-left: 0.5rem;
    margin-bottom: 0px;
}
.valMedia {
    padding-bottom: 1.5rem;
}
.valutazione {
    padding-left: 15px;
    padding-bottom: 1rem;
}
.recensione {
    background-color: #141e25;
    padding: 1rem 0rem 1rem 2rem;
    border-radius: 10px;
}
input, textarea {
    background-color: #1f2d38;
    color: white;
    border-color: gray;
    &:hover {
      border-color: white;
    }
    &:focus {
        background-color: #1f2d38;
        -webkit-box-shadow: none;
        box-shadow: none;
        color: white;
      }
}
textarea {
    height: 6rem;
}
.singolaRecensione {
    padding-bottom: 2rem;
}
img {
    height: 250px;
}
`;

export class Video extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.state.card)
        this.state = {
            video: this.props.location.state.card
        }
    }
    componentDidMount() {
        document.title = "Watchnet - " + this.state.video.title
    }

    setRecensioni() {
        let rec = [];
        let nRecSample = 20;
        let i = 0;
        while (i++ < nRecSample) {
            rec.push(i);
        }
        const recensioni = rec.map(() => {
            return (<Container className="singolaRecensione">
                <Row>
                    <h5>Da: John Doe</h5>
                </Row>
                <Row className="valMedia">
                    <Rating
                        rating={Math.floor(Math.random() * 6)+1}
                    />
                </Row>
                <Row>
                    <h6><strong>Bello e coinvolgente</strong></h6>
                </Row>
                <Row>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur.
                        Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </Row>
            </Container>
            );
        });
        return recensioni;
    }

    render() {
        return (
            <Styles>
                <div className="mainContainer">
                    <Container fluid className='title'>
                        <Container>
                            <Row>
                                <Col md="10">
                                    <h2><strong>{this.state.video.title}</strong></h2>
                                    <br />
                                    <br />
                                    <p> Descrizione: </p>
                                    <p>{this.state.video.description}
                                    </p>
                                </Col>
                                <Col md="2">
                                    <img src={this.state.video.imageL} alt=""/>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                    <Jumbotron fluid className="player">
                        <Container className="d-flex justify-content-center">
                            <Player url={this.state.video.url}/>
                        </Container>
                    </Jumbotron>
                    <Container fluid className="review">
                        <Container>
                            <Row className="valMedia">
                                <Rating
                                    rating={this.state.video.valMedia}
                                />
                                <p className="valTxt">Valutazione media</p>
                            </Row>
                            <Row>
                                <Container className='recensione'>
                                    <form onSubmit={() => { console.log("inviato") }}>
                                        <Row className="valutazione">
                                            <Rating
                                                rating={0}
                                                interactive={true}
                                                onRatingChanged={(r) => { console.log(r) }}
                                            />
                                            <p className="valTxt">La tua valutazione</p>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <div class="form-group">
                                                    <label for="">Titolo</label>
                                                    <input type="text" class="form-control" id="title" placeholder="Titolo" />
                                                </div>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <div class="form-group">
                                                    <label for="">Descrizione </label>
                                                    <textarea type="text" class="form-control" id="description" placeholder="Descrizione" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <Button type="button" size="small" color="primary" variant="contained" className="setButColor" >
                                                    Invia
                                            </Button>
                                            </Col>
                                        </Row>
                                    </form>
                                </Container>
                            </Row>
                        </Container>
                    </Container>
                    <hr color="gray" width="80%" />
                    <Container fluid style={{ paddingTop: '1.5rem' }}>
                        <Container className='recensione'>

                            {this.setRecensioni()}

                        </Container>
                    </Container>
                </div>
            </Styles>
        );
    }
}

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { Spinner } from 'reactstrap';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { getLogged } from './globalInf'

const Styles = styled.div`
    .card {
        max-width: 250px;
        text-align: center;
        background-color: #3e5a70;
        color: white;
        z-index: 0;
        border: none;
        -webkit-box-shadow: 2px 5px 10px black;
        box-shadow: 2px 5px 10px black;
        margin-left: 45px;
    }
    .media {
        height: 150px;
        z-index: 2;
    }
    p {
        margin-top: 10px;
    }
    .root {
        display: block;
        textAlign: inherit;
        width: 100%;
        &:hover {
          opacity: 1;
        }
      }
    .setButColor {
        background-color: #537895;
      }
      .spinner-border {
          position: absolute;
          top: 30%;
          left: 45%;
          z-index: 1;
      }
      .MuiCardActions-spacing > * + * {
        margin-left: 20px;
    }
`;

export class MediaCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectSate: false,
            card: this.props.card,
        };
    }

    afterSubmit() {
        this.setState({
            redirectSate: false,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            redirectSate: true,
        });
    }
    setButton() {
        if (getLogged()) return (
            <Button size="small" color="primary" variant="contained" className="setButColor" onClick={this.handleSubmit}>
                Salva
            </Button>);
    }

    render() {
        let descr = this.props.card.description;
        const redirectSate = this.state.redirectSate;
        if (redirectSate) {
            this.afterSubmit();
            return <Redirect to={{
                pathname: '/video',
                state: {
                    card: this.state.card,
                }
            }}
            />
        }
        return (
            <Styles>
                <Card className="card" >
                    <Spinner color="primary" />
                    <CardMedia
                        className="media"
                        image={this.props.card.image}
                        title={this.props.card.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {this.props.card.title}
                        </Typography>
                        <Typography variant="body2" color="initial" component="p">
                            {descr.substring(0, 50) + '...'}
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>

                        <Link to="/video">
                            <Button size="small" color="primary" variant="contained" className="setButColor" onClick={this.handleSubmit} >
                                Guarda
                </Button>
                        </Link>
                        {this.setButton()}
                    </CardActions>
                </Card>
            </Styles>
        );
    }
}
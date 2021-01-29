import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import styled from 'styled-components';


const Styles = styled.div`
.carousel {
    position: relative;
    height: 350px;
    background-color: black;
}

.carousel-inner {
    height: 100%;
    width: 100%;
}

img {
    position: absolute;
    height: auto;
    width: 100%;
    opacity: 0.5;
}

.carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
`;

const items = [
    {
        src: 0,
        image: './assets/avengers.jpg',
        title: 'Avengers: Endgame',
        description: 'Avengers: Endgame è un film del 2019 diretto da Anthony e Joe Russo. Basato sul gruppo di supereroi dei Vendicatori di Marvel Comics, il film è il seguito di Avengers: Infinity War (2018) e costituisce il ventiduesimo film del Marvel Cinematic Universe. È prodotto dai Marvel Studios ed è distribuito da Walt Disney Studios Motion Pictures. La sceneggiatura del film è stata scritta da Christopher Markus e Stephen McFeely, e la pellicola comprende un cast corale che include molti degli attori comparsi nei precedenti film del MCU.',
    },
    {
        src: 1,
        image: './assets/iltraditore.jpg',
        title: 'Il Traditore',
        description: 'Il traditore è un film del 2019 diretto da Marco Bellocchio. La pellicola narra le vicende di Tommaso Buscetta, mafioso e successivamente collaboratore di giustizia, membro di Cosa nostra.[1]',
    },
    {
        src: 2,
        image: './assets/up.jpg',
        title: 'UP',
        description: 'Up è un film d\'animazione del 2009 scritto e diretto da Pete Docter e Bob Peterson. È il decimo lungometraggio realizzato dai Pixar Animation Studios in co-produzione con la Walt Disney Pictures[2], ed ha aperto il 62º Festival di Cannes il 13 maggio 2009.[3] È stato il secondo film di animazione della storia ad essere stato candidato agli Oscar come miglior film dopo La bella e la bestia nel 1991, ottenendo 5 candidature in totale, e vincendo due Premi Oscar, ossia miglior film d\'animazione e migliore colonna sonora',
    },
];

export class MainCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img className="size" src={item.image} alt={item.title} />
                    <CarouselCaption captionText={item.description.substr(0,150) + "..."} captionHeader={item.title} />
                </CarouselItem>
            );
        });

        return (
            <Styles>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    interval={6000}
                    keyboard={false}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </Styles>
        );
    }
}
import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    Row,
} from 'reactstrap';
import styled from 'styled-components';
import { MediaCard } from './Card'


const Styles = styled.div`
.carousel {
    position: relative;
    height: 22rem;
}

.carousel-inner {
    height: 100%;
    width: 100%;
}

.carousel-item {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    margin: auto;
}

.carousel-control-prev, .carousel-control-next {
   
    background-color: black;
    top: 2rem;
    height: 15.5rem;
    width: 3rem;
    opacity: 0.2;
    
    &:hover{
        opacity: 0.6;
    }
}
.carousel-control-prev{
    left: -3rem;
}
.carousel-control-next{
    right: -3rem;
}
`;


export class VideoCarousel extends Component {

    constructor(props) {
        super(props);
        let ogg = [];
        let i = 0;
        while (i < this.props.cards.length / 6) {
            ogg.push({ src: i++ });
        }
        this.state = {
            activeIndex: 0,
            items: ogg
        };
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
        const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;
        const cards = this.props.cards;
        const items = this.state.items;

        let i = 0;
        const slides = items.map((item) => {
            let c = cards.slice(i, i + 6);
            i += 5;
            const elements = c.map((card) => {
                return (

                    <MediaCard card={card} key={card.title}/>
                );
            });
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <Row>
                        {elements}
                    </Row>
                </CarouselItem>
            );
        });

        return (
            <Styles>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    interval={false}
                    keyboard={false}
                >
                    {slides}
                    <div className="carousel-control">
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </div>
                </Carousel>
            </Styles>
        );
    }
}
import React from 'react'
import { Search } from '../components/Search'
import cardArray from '../components/arrayVideo.js'


export class Searching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cardArray.filter(card => card.title.toLowerCase() === this.props.location.state.text.toLowerCase()),
      txt: this.props.location.state.text
    }
  }
  componentDidMount() {
    document.title = "Watchnet - Ricerca: " + this.props.location.state.text;
  }
  render() {
    let value = "\"" + this.props.location.state.text + "\"";
    if (this.state.txt !== this.props.location.state.text) {
      console.log("render")
      this.setState({
        cards: cardArray.filter(card => card.title.toLowerCase() === this.props.location.state.text.toLowerCase()),
        txt: this.props.location.state.text
      })
    }
    return (
      <div>
        <Search
          descr={value}
          cards={this.state.cards}
        />
      </div>
    );
  }
}


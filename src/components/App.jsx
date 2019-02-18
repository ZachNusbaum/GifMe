import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import { Container } from 'semantic-ui-react';
import giphy from '../services/giphy';
import ImageList from './ImageList';

class App extends Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    let result = await giphy.get(`/gifs/${term}`, {});
    console.log(result);
    this.setState({ images: result.data.data });
  };

  render() {
    return (
      <Container>
        <h1 style={{ textAlign: 'center', paddingTop: '10px' }}>GifMe</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </Container>
    );
  }
}

export default App;

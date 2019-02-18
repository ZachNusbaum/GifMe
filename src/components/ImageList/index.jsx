import React from 'react';
import ImageCard from '../ImageCard';
import { Card } from 'semantic-ui-react';

var Spinner = require('react-spinkit');

const Loading = () => {
  return <Spinner name="folding-cube" />;
};

const ImageList = props => {
  let loading = true;
  return (
    <div>
      <a href="https://giphy.com" target="_blank">
        <img src="assets/giphy.png" alt="Powered by Giphy" />
      </a>
      <Card.Group>
        {props.images.map(image => {
          return <ImageCard key={image.slug} image={image} />;
        })}
      </Card.Group>
    </div>
  );
};

export default ImageList;

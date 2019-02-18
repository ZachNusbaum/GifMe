import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ImageCard = props => {
  return (
    <Card>
      <Image src={props.image.images.fixed_width.url} />
      <Card.Content>
        <h2>{props.image.title}</h2>
        {props.image.username && <p>Uploaded by {props.image.username}</p>}
      </Card.Content>
    </Card>
  );
};

export default ImageCard;

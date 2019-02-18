import React, { useState } from 'react';
import { Segment, Form } from 'semantic-ui-react';

const SearchBar = props => {
  let [term, setTerm] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit(term);
  };

  return (
    <Segment raised>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Search Term</label>
          <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
        </Form.Field>
      </Form>
    </Segment>
  );
};

export default SearchBar;

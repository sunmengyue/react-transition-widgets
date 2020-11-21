import React from 'react';
import Accordion from './components/Accordion';

const items = [
  { title: 'What is React?', content: 'React is a JavaScript framework' },
  {
    title: 'Why use React?',
    content: "React is engineers' favorate JS library"
  },
  {
    title: 'How do you use React',
    content: 'You use react by creating components'
  }
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

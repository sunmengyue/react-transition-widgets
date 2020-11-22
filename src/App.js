import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
const items = [
  {
    id: 1,
    title: 'What is React?',
    content: 'React is a JavaScript framework'
  },
  {
    id: 2,
    title: 'Why use React?',
    content: "React is engineers' favorate JS library"
  },
  {
    id: 3,
    title: 'How do you use React',
    content: 'You use react by creating components'
  }
];

export default () => {
  return (
    <div>
      <br />
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

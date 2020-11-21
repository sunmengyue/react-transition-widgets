import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [index, useIndex] = useState([0]);
  const list = items.map((item) => (
    <React.Fragment key={item.title}>
      <div className="title active ">
        <i className="dropdown icon"></i>
        {item.title}
      </div>
      <div className="content active">
        <p className="transition">{item.content}</p>
      </div>
    </React.Fragment>
  ));
  return <div className="ui styled accordion">{list}</div>;
};

export default Accordion;

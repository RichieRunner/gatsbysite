import React from 'react';
import Dropdown from './Dropdown';

const mockItems = [
  {
    value: `Item1`,
    text: `Item1`,
  },
  {
    value: `Item2`,
    text: `Item2`,
  },
  {
    value: `Item3`,
    text: `Item3`,
  },
];

const SelectFields = ({ onMakeSelected, onModelsGet }) => {
  return (
    <div>
      <Dropdown
        items={mockItems}
        onChange={event => onMakeSelected(event.target.selectedIndex)}
      />
      <input type="text" onChange={() => onModelsGet()}></input>
    </div>
  );
};

export default SelectFields;

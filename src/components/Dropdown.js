import React, { Component } from 'react';
import styled from '@emotion/styled';

const DropdownSelect = styled.select`
  position: relative;
  width: 100%;
`;

export default class Dropdown extends Component {
  handleChange = event => {
    const { handleDropdownChange, name } = this.props;
    const selectOptions = event.target.options;
    // console.log('event.target', event.target.options[event.target.options.selectedIndex].value);
    const selectedValue = selectOptions[selectOptions.selectedIndex].value;
    console.log('selectedValue', selectedValue);
    if (handleDropdownChange) {
      handleDropdownChange(name, selectedValue);
    }
  };

  render() {
    const {
      customDataAttrs,
      disabled,
      error,
      items,
      name,
      omnitureProps,
      onChange,
      placeholderText,
      value,
      withOptGroup,
    } = this.props;
    return (
      <div>
        <DropdownSelect
          {...customDataAttrs}
          name={name}
          defaultValue={'DEFAULT'}
          // value={value || 'DEFAULT'}
          disabled={disabled}
          isError={!disabled && error}
          onChange={onChange}
          {...omnitureProps}
        >
          {placeholderText && (
            <option value={'DEFAULT'} disabled>
              {placeholderText}
            </option>
          )}
          {withOptGroup
            ? items.map((item, i) => (
                <optgroup key={`${item.value}${i}`} label={item.label}>
                  {item.options.map((option, j) => (
                    <option key={`${item.value}${j}`} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </optgroup>
              ))
            : items.map((item, i) => (
                <option key={`${item.value}${i}`} value={item.value}>
                  {item.text}
                </option>
              ))}
        </DropdownSelect>
      </div>
    );
  }
}

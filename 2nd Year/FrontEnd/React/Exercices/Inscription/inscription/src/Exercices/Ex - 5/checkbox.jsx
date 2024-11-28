import React from 'react'

function checkbox({ text, value, checked }) {
    return (
      <label>
        <input type="checkbox" value={value} defaultChecked={checked} />
        {text}
      </label>
    );
  };

export default checkbox
import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
    <div>
      <button data-testid="button" className="button-style">
        {props.label}
      </button>
    </div>
  );
}
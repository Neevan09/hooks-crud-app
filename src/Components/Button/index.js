import React from 'react'
import './styles.css'

export default function Button(props) {
  return (
    <div>
      <button data-testid="button" className="button-style">
        {props.label}
      </button>
    </div>
  );
}
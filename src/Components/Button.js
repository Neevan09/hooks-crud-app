import React from 'react'

export default function Button(props) {
    return (
      <button className="button">
       {props.label}
      </button>
    );
  }
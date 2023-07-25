import React from 'react'

import styles from './Button.module.css';
function Button(props) {
  return (
    <>
   <button className={props.isoutline?styles.outline_button:styles.primary_button}>
      {props.icon}
      {props.text}
    </button>
    </>
  )
}

export default Button

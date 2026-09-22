import React from 'react'
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <h1>Cool Gallery</h1>
      <ul >
        <li>About</li>
        <li>Todo List</li>
        <li>Quote Generator</li>
        <li>Calculate Age</li>
      </ul>
    </div>
  );
}

export default Nav
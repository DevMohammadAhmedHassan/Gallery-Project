import React from 'react'
import ImageCard from './ImageCard'
import styles from "./images.module.css"

const Images = (props) => {
  return (
    <div className={styles.container}>
      {props.images.map((element) => {
        return <ImageCard image={element} />;
      })}
    </div>
  );
}

export default Images
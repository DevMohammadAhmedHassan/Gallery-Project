import React from "react";
import { User, CalendarDays } from "lucide-react";
import styles from "./images.module.css";


const imageCard = (props) => {
  return (
    <div className={styles.card}>
      <img
        src={props.image.ImageUrl}
        alt="mosque"
      />
      <h2>{props.image.name}</h2>
      <p>
        {props.image.desc}
      </p>
      <div>
        <p>
          <User className={styles.icon} />
          <span>{props.image.author}</span>
        </p>

        <p>
          <CalendarDays className={styles.icon} />
          <span>{props.image.date}</span>
        </p>
      </div>
    </div>
  );
};

export default imageCard;

/* Structure of the image card component
  name: "",
  ImageUrl: "",
  desc: "",
  author: "",
  date: ""
*/


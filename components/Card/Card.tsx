import React from "react";
import { CardProps } from "./Card.type";

const Card: React.FC<CardProps> = (props) => (
  <div className="card w-96 bg-neutral shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{props.title}</h2>
      <p>{props.desc}</p>
      {props.link && (
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <a href={props.link} target="_blank" rel="noreferrer">
              Go to wiki
            </a>
          </button>
        </div>
      )}
      {props.delete && (
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={props.delete}>
            delete
          </button>
        </div>
      )}
    </div>
  </div>
);

export default Card;

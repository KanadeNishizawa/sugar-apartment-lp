import React from 'react';
import '../App.css';

type Props = {
  title: string;
  link: string;
  buttonImg: string;
  thumbnailImg: string;
  description: string;
};

const MediaContent = (props: Props) => {
  return (
    <section>
      <h1>{props.title}</h1>
      <a href={props.link}>
        <img src={props.thumbnailImg} className='Graphic' />
      </a>
      <p>{props.description}</p>
      <a href={props.link}>
        <img src={props.buttonImg} className='Button-medium' />
      </a>
    </section>
  );
};

export default MediaContent;

import React from 'react';
import '../App.css';

type Props = {
  link: string;
  name: string;
  linkStyle: string;
};

const CreditContent = (props: Props) => {
  return (
    <section>
      <p className='Name'>
        <a href={props.link} className={props.linkStyle}>
          {props.name}
        </a>
      </p>
    </section>
  );
};

export default CreditContent;

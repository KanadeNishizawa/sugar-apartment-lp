import React from 'react';
import screenShot1 from '../assets/images/screen-shot1.jpg';
import screenShot2 from '../assets/images/screen-shot2.jpg';
import '../App.css';

const Usage = () => {
  return (
    <section>
      <h1>遊び方</h1>
      <div className='Graphics-container'>
        <img src={screenShot1} className='Graphic' alt='スクリーンショット' />
        <img src={screenShot2} className='Graphic' alt='スクリーンショット' />
      </div>
      <p>
        基本は画面をタップしてストーリーを読み進めていくノベルゲームです。
        <br />
        キャラクターを操作するシーンでは、背景のオブジェクトをタップすると
        <br />
        会話が発生し、ストーリーが進みます。
        <br />
        全ての部屋を覗くと…
      </p>
    </section>
  );
};

export default Usage;

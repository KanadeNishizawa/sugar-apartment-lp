import React from 'react';
import logo from '../assets/images/logo.png';
import buttonGame from '../assets/images/button-game.png';
import '../App.css';

const About = () => {
  return (
    <section>
      <img
        src={logo}
        className='App-logo'
        alt='『シュガーアパートメント』ロゴ'
      />

      <h1>あらすじ</h1>
      <p>
        真夜中になると、どこからともなくブキミな
        <br />
        『ナゾの声』がひびいてくるとウワサの『シュガーアパートメント』。
        <br />
        そこに住む個性豊かな住人たちの生活をのぞいてみると、
        <br />
        何やら事件が起きているらしく...？
        <br />
        芸術と医療のコラボレーションにより誕生した、
        <br />
        楽しく学べる糖尿病予防プログラム。
      </p>
      <p className='Caution'>※対応ブラウザはGoogle Chrome 最新版です。</p>
      <a
        href='https://sugar-apartment-develop.web.app/index1.html'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={buttonGame} className='Button-large' alt='ゲームを始める' />
      </a>
    </section>
  );
};

export default About;

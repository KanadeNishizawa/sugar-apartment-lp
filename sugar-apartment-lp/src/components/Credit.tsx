import React from 'react';
import CreditContent from './CreditContent';
import '../App.css';

const Credit = () => {
  return (
    <section>
      <h1>クレジット</h1>
      <p>
        シナリオ
        <CreditContent
          link='https://mh-artworks-movies.tumblr.com'
          linkStyle='Link'
          name='比留間未桜'
        />
        グラフィック
        <CreditContent
          link='https://m2m2design.myportfolio.com/'
          linkStyle='Link'
          name='島田千聖'
        />
        実装
        <CreditContent
          link='https://kanade-works.web.app'
          linkStyle='Link'
          name='西沢奏'
        />
        アートディレクション
        <CreditContent
          link=''
          linkStyle=''
          name='村上史明(筑波大学芸術系、つくば糖尿病予防セラピスト研究会)'
        />
        監修
        <CreditContent
          link=''
          linkStyle=''
          name=' 鈴木康裕(筑波大学リハビリテーション部、つくば糖尿病予防研究会代表、理学療法士)'
        />
        <CreditContent
          link=''
          linkStyle=''
          name='柳澤幸夫(徳島文理大学　保健福祉学部　理学療法学科)'
        />
      </p>
    </section>
  );
};

export default Credit;

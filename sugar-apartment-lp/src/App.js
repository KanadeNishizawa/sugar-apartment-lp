import logo from './assets/images/logo.png';
import buttonGame from './assets/images/button-game.png';
import buttonComic from './assets/images/button-comic.png';
import buttonArtworks from './assets/images/button-artworks.png';
import screenShot1 from './assets/images/screen-shot1.jpg';
import screenShot2 from './assets/images/screen-shot2.jpg';
import thumbnailComic from './assets/images/thumbnail-comic.jpg';
import thumbnailArtworks from './assets/images/thumbnail-artworks.jpg';
import './App.css';
import './destyle.css';

function App() {
  return (
    <div className='App'>
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

      <h1>漫画版『シュガーアパートメント</h1>
      <a href='http://www.geijutsu.tsukuba.ac.jp/~fumiaki/gluccie/sugar_apartment.pdf'>
        <img
          src={thumbnailComic}
          className='Graphic'
          alt='漫画版『シュガーアパートメント』'
        />
      </a>
      <p>
        『ナゾの声』のウワサを聞きつけて『シュガーアパートメント』に
        <br />
        やってきた探偵助手クッキーと、そこに住む不思議な住人たち。
        <br />
        果たして事件を解決できるのか！？
      </p>
      <a href='http://www.geijutsu.tsukuba.ac.jp/~fumiaki/gluccie/sugar_apartment.pdf'>
        <img
          src={buttonComic}
          className='Button-medium'
          alt='漫画版『シュガーアパートメント』へ'
        />
      </a>

      <h1>『シュガーアパートメント』アートワーク集</h1>
      <a href='https://drive.google.com/file/d/1c_DsSlvffUczgwSsJqcV40HTGlww0xXA/view?usp=sharing'>
        <img src={thumbnailArtworks} className='Graphic' alt='アートワーク集' />
      </a>
      <p>
        シュガアパの世界ができるまでをちょっぴりご紹介。
        <br />
        ⚠︎ネタバレ注意！
      </p>
      <a href='https://drive.google.com/file/d/1c_DsSlvffUczgwSsJqcV40HTGlww0xXA/view?usp=sharing'>
        <img
          src={buttonArtworks}
          className='Button-medium'
          alt='アートワーク集へ'
        />
      </a>

      <h1>『グルッシーコラボレイションズ』</h1>
      <p>
        『シュガーアパートメント』は、筑波大学芸術専門学群と医療従事者による
        <br />
        児童を対象とした 糖尿病などの生活習慣予防プログラムである
        <br />
        『グルッシーコラボレイションズ』の一環で制作されました。
        <br />
        この開発プロジェクトでは、教材を使ったワークショップなどを行い、
        <br />
        つくばを中心に活動しています。
        <br />
      </p>

      <h1>クレジット</h1>
      <p>
        シナリオ
        <p className='Name'>
          <a href='https://mh-artworks-movies.tumblr.com'>比留間未桜</a>
        </p>
        グラフィック
        <p className='Name'>
          <a href='https://m2m2design.myportfolio.com/'>島田千聖</a>
        </p>
        実装
        <p className='Name'>
          <a href='https://kanade-works.web.app'>西沢奏</a>
        </p>
        アートディレクション
        <p className='Name'>
          村上史明(筑波大学芸術系、つくば糖尿病予防セラピスト研究会)
        </p>
        監修
        <p className='Name'>
          鈴木康裕(筑波大学リハビリテーション部、つくば糖尿病予防研究会代表、理学療法士)
        </p>
      </p>
    </div>
  );
}

export default App;

import logo from './assets/images/logo.png';
import startButton from './assets/images/start.png';
import screenShot1 from './assets/images/screen-shot1.png';
import screenShot2 from './assets/images/screen-shot2.png';
import './App.css';
import './destyle.css';

function App() {
  return (
    <div className='App'>
      <img src={logo} className='App-logo' alt='logo' />
      <h1 className='Title'>『シュガーアパートメント』とは…</h1>
      <p className='Content'>
        真夜中になると、どこからともなくブキミな
        <br />
        『ナゾの声』がひびいてくるとウワサの『シュガー・アパートメント』。
        <br />
        そこに住む個性豊かな住人たちの生活をのぞいてみると、
        <br />
        何やら事件が起きているらしく...？
        <br />
        芸術と医療のコラボレーションにより誕生した、
        <br />
        楽しく学べる糖尿病予防プログラム。
      </p>
      <a
        href='https://sugar-apartment-develop.web.app/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={startButton} className='Start-button' />
      </a>
      <h1 className='Title'>遊び方</h1>
      <div className='Screen-shot-container'>
        <img src={screenShot1} className='Screen-shot' />
        <img src={screenShot2} className='Screen-shot' />
      </div>
      <p className='Content'>
        基本は画面をタップしてストーリーを読み進めていくノベルゲームです。
        <br />
        キャラクターを操作するシーンでは、背景のオブジェクトをタップすると
        <br />
        会話が発生し、ストーリーが進みます。
        <br />
        全ての部屋を覗くと…
      </p>
      <h1 className='Title'>クレジット</h1>
      <p className='Content'>
        シナリオ
        <p className='Name'>比留間未桜 </p>
        グラフィック
        <p className='Name'>島田千聖</p>
        実装
        <p className='Name'>
          <a href='www.kanade-works.web.app'>西沢奏</a>
        </p>
        サウンド
        <p className='Name'>
          <a href='https://artlist.io/'>
            {' '}
            Artlist: Royalty-Free Music & SFX for Video Creators
          </a>
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
      <h1 className='Title'>『グルッシーコラボレイションズ』について</h1>
      <p className='Content'>
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
    </div>
  );
}

export default App;

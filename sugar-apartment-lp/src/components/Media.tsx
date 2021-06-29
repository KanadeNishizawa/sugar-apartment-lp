import React from 'react';
import MediaContent from './MediaContent';
import buttonComic from '../assets/images/button-comic.png';
import buttonArtworks from '../assets/images/button-artworks.png';
import thumbnailComic from '../assets/images/thumbnail-comic.jpg';
import thumbnailArtworks from '../assets/images/thumbnail-artworks.jpg';
import '../App.css';

const Media = () => {
  return (
    <section>
      <MediaContent
        title='漫画版『シュガーアパートメント'
        link='http://www.geijutsu.tsukuba.ac.jp/~fumiaki/gluccie/sugar_apartment.pdf'
        thumbnailImg={thumbnailComic}
        description='『ナゾの声』のウワサを聞きつけて『シュガーアパートメント』に&#13;&#10;やってきた探偵助手クッキーと、そこに住む不思議な住人たち。 &#x0A;果たして事件を解決できるのか！？'
        buttonImg={buttonComic}
      />
      <MediaContent
        title='『シュガーアパートメント』アートワーク集'
        link='https://drive.google.com/file/d/1c_DsSlvffUczgwSsJqcV40HTGlww0xXA/view?usp=sharing'
        thumbnailImg={thumbnailArtworks}
        description='  シュガアパの世界ができるまでをちょっぴりご紹介。&#x0A;⚠︎ネタバレ注意！'
        buttonImg={buttonArtworks}
      />
    </section>
  );
};

export default Media;

# プロフィール画面作成
## step 1
テーマカラーを決めよう！

```
好きな2色を選び。
fontのカラーとBackgroundカラーにしよう
Backgroundカラーは後で使うよ
```
[ref. 配色](http://khroma.co/)  
[ref. 設定](https://www.webcreatorbox.com/tech/css-gradient)  

## step 2
レイアウトを作成してみよう！

```
ヘッダーとフッターを高さ80px
メインコンテンツとサイドバーの高さ500px
それぞれのボックスの中に「ヘッダー」「メインコンテンツ」「サイドバー」「フッター」の文字を白色で左右中央に表示
ヘッダーの背景色は赤、メインコンテンツの背景色は青、サイドバーの背景色は緑、フッターの背景色は黒
ページ全体の幅は980pxで中央表示
メインコンテンツの幅は680px
サイドバーの幅は300px
メインコンテンツが左でサイドバーは右にレイアウト
```

[ref. レイアウト練習](https://webukatu.com/wordpress/blog/1820)

## step 3
レスポンシブレイアウトに挑戦！

```
フォントサイズを、1.5rem
幅が750px以下でレスポンシブ
幅を100%にして、メイン部分が縦に並ぶようにする
ヘッダーのマージンを削除
```

[ref. レスポンシブ](https://sole-color-blog.com/blog/71/)

## step 4
ヘッダーに、referを参考にスライダーを設定
```
{autoplay: true, autoplaySpeed: 3000}を設定
```

```
imageクラスを作成して画像を980 × 550にしよう
レスポンス時の画像サイズを、100% × autoにしよう
headerの高さをautoにしよう
.slick-prevにleft:25px z-index:10, .slick-nextにright: 25px
headerの背景色をテーマカラーに変更
ヘッダーの文字を消す
```

[ref. jQuer](https://code.jquery.com/)  
[ref. スリックスライダー](https://jobtech.jp/js/1279/)

## step 5
コンテンツを作ろう  
自分の事を記載しよう

```
メインコンテンツの背景色をテーマカラーに変更
text-alient centerをレスポンス時だけにする
メインコンテンツの文字を消す
width: 660px 左にpadding 20px設定
レスポンシブ時、width: 95%, padding 15px 0 15px 5%設定 height: auto;
```

コンテンツ
```
h2 Profileの文字
dl 
dt Name dd 値
Gender
Age
Blood
About 複数行
```
スタイル
```
dt 左寄せ font-weight: bold
dd margin-left 80px
レスポンシブ時のH2タグのマージンTopを消す。dlのマージンを消す
```

## step 6
サイドバーにTwitterを埋め込もう！
リンク先で取得したタグを設置

```
背景色をテーマカラーに変更
サイドバーの文字を消す
overflow-y: autoを設定
レスポンシブ時の高さを450pxに設定
```
[ref. Twitter埋め込み](https://publish.twitter.com/#)

## step 7
フッターにコピーライトを記載

```
text-alient: center
fotterの上下にpadding 5px
height: 25px レスポンス時 40px
```

## step 8
ページタイトル設定
スライダーの前にh1でページ名を記載
スライダーの上に文字を移動
```
positionを絶対位置
z-index: 10;
margin: 0;
padding: 30px;
font-size: 50px;
レスポンシブは雰囲気で
```

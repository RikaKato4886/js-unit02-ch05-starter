import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = localStorage.getItem(this.currentLocale || 'ja');
    // localStorage.getItem()を使用する路線で合ってます。ORの演算子を使って、デフォルトで使用できる言語の値と、その時に取得できる言語の値をここで初期値として指定しておくと使いやすそ
  }

  setup() {
    //現在のLocaleに合わせて、polyglotにメッセージをセットします。メッセージのセットにはpolyglot.extend()を利用します。
    if (this.currentLocale === "ja"){
      this.polyglot.extend({
        "message":"こんにちは、世界",
      });
    } else {
      this.polyglot.extend({
        "message":"Hello, World",
      });
    }
  }

  updateLocale(e) {
    //ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
    if (e.target.dataset.locale === "ja"){//日本語ボタンが押された
      this.currentLocale = "ja";
      localStorage.setItem("locale", this.currentLocale)
      // console.log(this.currentLocale)
      // this.currentLocate = "ja"
    } else {
      this.currentLocale = "en";
      localStorage.setItem("locale", this.currentLocale)
      // console.log(this.currentLocale)
    }
  }

  showMessage() {
    //mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。
    const mainEl = document.getElementById('main')
    mainEl.innerHTML = `
    <h1>
      ${this.polyglot.t('message')}
    <h1>
    `
  }
}

let app = new TranslationApp();
app.setup()

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);

  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);
}

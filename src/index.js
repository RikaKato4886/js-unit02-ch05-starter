import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = "jp";
    // this.inputLocale = localStorage.setItem("currentLocate", this.currentLocale)
    // this.selectedLocale = localStorage.getItem("currentLocate") || 'ja'
    // localStorageを使うと、デフォルト言語の指定と、選択された言語の取得ができそうですね
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

  // updateLocale(e) {
  //   //ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
  //   console.log(e.target.dataset.locale)
  //   if (e.target.dataset.locale === "ja"){//日本語ボタンが押された
  //     this.currentLocate = "ja"
  //     console.log(`日本語ボタン: currentLocate: ${this.currentLocate}`)
  //   } else {
  //     this.currentLocate = "en";
  //     console.log(`英語ボタン: currentLocate: ${this.currentLocate}`)
  //   }
  //   console.log(this.currentLocate)
  // }

  showMessage() {
    //mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。
    const mainEl = document.getElementById('main')
    let h1 = document.createElement('h1');
    this.setup();
    h1.innerHTML = this.polyglot.t("message");

    mainEl.appendChild(h1);
  }
}

let app = new TranslationApp();
app.showMessage();

// {
//   const button1 = document.getElementById('button1');
//   button1.addEventListener("click", app.updateLocale);

//   const button2 = document.getElementById('button2');
//   button2.addEventListener("click", app.updateLocale);
// }

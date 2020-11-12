import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocate = "jp";
  }

  setup() {
    //現在のLocaleに合わせて、polyglotにメッセージをセットします。メッセージのセットにはpolyglot.extend()を利用します。
    if (this.currentLocate === "jp"){
      this.polyglot.extend({
        "hello" : "こんにちは、世界"
      });
      console.log(this.currentLocate)
      return this.polyglot.t("hello")
    } else {
      this.polyglot.extend({
        "メッセージ" : "Hello, World"
      });
      console.log(this.currentLocate)
      return this.polyglot.t("メッセージ")
    }
  }

  updateLocale(e) {
    //ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
    if (e.target.dataset.locale === "ja"){
      this.currentLocate = "ja";
      console.log(`日本語ボタン: currentLocate: ${this.currentLocate}`)
    } else {
      this.currentLocate = "en";
      console.log(`英語ボタン: currentLocate: ${this.currentLocate}`)
    }
  }

  showMessage() {
    //mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。
    const mainEl = document.getElementById('main')
    let h1 = document.createElement('h1');
    h1.innerHTML = this.setup();
    mainEl.appendChild(h1);
  }
}

let app = new TranslationApp;

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);

  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);
}

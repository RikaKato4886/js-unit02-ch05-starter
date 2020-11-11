import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor(props) {
    this.polyglot = new Polyglot();
    this.messageJp = props.messageJp;
    this.messageEn = props.messageEn;
    this.currentLocate = "jp";
  }

  setup() {
    //現在のLocaleに合わせて、polyglotにメッセージをセットします。メッセージのセットにはpolyglot.extend()を利用します。
    if (this.currentLocate === "ja"){
      this.polyglot.extend({
        "this.messageEn" : this.messageJp
      });
      return this.polyglot.t("this.messageEn")
    } else {
      this.polyglot.extend({
        "this.messageJp" : this.messageEn
      });
      return this.polyglot.t("this.messageJp")
    }
  }

  updateLocale(e) {
    //ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
    if (e.target.dataset.locale === "ja"){
      this.currentLocate = "ja";
      console.log('If文:jaが押された場合' + this.currentLocate)
    } else {
      this.currentLocate = "en";
      console.log('Else: enが押された場合' + this.currentLocate)
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

let app = new TranslationApp({
  messageJp: "こんにちは、世界",
  messageEn: "Hello World"
})

app.showMessage();

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);

  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);
}

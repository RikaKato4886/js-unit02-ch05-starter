import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocale = localStorage.getItem('locale' || 'ja');
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
    } else {
      this.currentLocale = "en";
      localStorage.setItem("locale", this.currentLocale)
    }
  }

  showMessage() {
    const mainEl = document.getElementById('main')
    mainEl.innerHTML = `
    <h1>
      ${this.polyglot.t('message')}
    <h1>
    `
  }
};

let app = new TranslationApp();
app.setup();
app.showMessage();

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", app.updateLocale);

  const button2 = document.getElementById('button2');
  button2.addEventListener("click", app.updateLocale);
}

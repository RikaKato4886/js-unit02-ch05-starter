import Polyglot from 'node-polyglot';

class TranslationApp {
  constructor() {
    this.polyglot = new Polyglot();
    this.currentLocate = "jp"
    // localStorageを使うと、デフォルト言語の指定と、選択された言語の取得ができそうですね
  }

  setup() {
    //現在のLocaleに合わせて、polyglotにメッセージをセットします。メッセージのセットにはpolyglot.extend()を利用します。
    if (this.currentLocate === "jp"){
      this.polyglot.extend({
        "message":"こんにちは、世界"
      });
    } else {
      this.polyglot.extend({
        "message":"Hello, World"
      });
    }
  }

  // updateLocale(e) {
  //   //ボタンにセットされたdata-localeを元に現在のlocaleを変更します。
  //   if (e.target.dataset.locale === "ja"){//日本語ボタンが押されたら
  //     return localStorage.setItem(this.currentLocate, "ja");
  //     console.log(`日本語ボタン: currentLocate: ${this.currentLocate}`)
  //   } else {
  //     this.currentLocate = "en";
  //     return localStorage.setItem(this.currentLocate, "en");
  //     console.log(`英語ボタン: currentLocate: ${this.currentLocate}`)
  //   }
  // }

  showMessage() {
    //mainというidがセットされた要素の下にh1タグで現在のlocaleに応じて、メッセージを表示します。
    const btnJp = document.getElementById('button1')
    const btnEn = document.getElementById('button2')
    const mainEl = document.getElementById('main')
    let h1 = document.createElement('h1');

    btnJp.addEventListener('click', ()=>{
      console.log(this.polyglot)
      h1.innerHTML = this.polyglot.t("message");

      mainEl.appendChild(h1)
    })
    btnEn.addEventListener('click', ()=>{
      console.log(this.polyglot)
      h1.innerHTML = this.polyglot.t("aa");
      mainEl.appendChild(h1)
    })

  }
}

let app = new TranslationApp;
app.showMessage();


// {
//   const button1 = document.getElementById('button1');
//   button1.addEventListener("click", app.updateLocale);

//   const button2 = document.getElementById('button2');
//   button2.addEventListener("click", app.updateLocale);
// }

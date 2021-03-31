var dict = {
    "Welcome!": {
      tr: "Hoşgeldiniz!",
      en: "Welcome!"
    },
    "Download plugin": {
       pt: "Descarregar plugin",
       en: "Download plugin"
    }
}

var translator = $('body').translate({lang: "en", t: dict}); //use English

var en = document.getElementById('translator-en');
var tr = document.getElementById('translator-tr');

en.addEventListener('click', () => {
  translator.lang("en");
});

tr.addEventListener('click', () => {
  translator.lang("tr");
});
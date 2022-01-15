const keyOfDict = 'i18n-key';
const dictionary = {
  id: {
    'nav-home': 'Utama',
    'nav-about': 'Tentang Kami'
  },
  en: {
    'nav-home': 'Home',
    'nav-about': 'About Us'
  }
};

let locale = 'id';


$(document).ready(function() {

  generateTranslate();

  $("[data-lang]").click((e) => {
    const getLang = e.target.dataset.lang;
    locale = getLang;

    $("[data-lang]").removeClass('active');
    $(`[data-lang=${getLang}]`).addClass('active');

    generateTranslate();
  });
});

function generateTranslate() { document.querySelectorAll(`[${keyOfDict}]`).forEach(translateElement); }

function translateElement(element) {
  const key = element.getAttribute(keyOfDict);
  const translation = dictionary[locale][key];
  element.innerText = translation;
}
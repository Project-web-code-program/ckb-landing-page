const keyOfDict = 'i18n-key';
const dictionary = {
  id: {
    'nav-home': 'Utama',
    'nav-about': 'Tentang Kami',
    'nav-bidang-usaha': 'Bidang Usaha',
    'nav-teknologi': 'Teknologi',
    'nav-edukasi': 'Edukasi',
    'nav-seni': 'Seni',
    'nav-design': 'Desain',
    'nav-tour&travel': 'Wisata & Perjalanan',
    'nav-layanan': 'Layanan',
    'nav-blog': 'Blog',
    'nav-kontakkami': 'Kontak Kami'
  },
  en: {
    'nav-home': 'Home',
    'nav-about': 'About Us',
    'nav-bidang-usaha': 'Business Fields',
    'nav-teknologi': 'Technology',
    'nav-edukasi': 'Education',
    'nav-seni': 'Art',
    'nav-design': 'Design',
    'nav-tour&travel': 'Tour & Travel',
    'nav-layanan': 'Service',
    'nav-blog': 'Blog',
    'nav-kontakkami': 'Contact Us'
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
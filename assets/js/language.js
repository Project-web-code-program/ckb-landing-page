const keyOfDict = 'i18n-key';
const para = document.createElement("br");
const dictionary = {
  id: {
    'nav-home': 'Beranda',
    'nav-about': 'Tentang Kami',
    'nav-bidang-usaha': 'Bidang Usaha',
    'nav-teknologi': 'Teknologi',
    'nav-edukasi': 'Edukasi',
    'nav-seni': 'Seni',
    'nav-design': 'Desain',
    'nav-tour&travel': 'Wisata & Perjalanan',
    'nav-layanan': 'Layanan',
    'nav-blog': 'Blog',
    'nav-kontakkami': 'Kontak Kami',

    //index
    'banner-title-text':'Siap memulai sebuah karya <br> diluar ekspektasi anda?',
    'banner-subtitle-text':'Citra Khaila merupakan sebuah agensi yang akan menunjang kebutuhan bisnis anda menjadi di level yang berbeda',
    'tentangkami-title-tentangkami':'Selamat datang di Citra Khaila, tempat untuk mewujudkan bisnis anda!',
    'tentangkami-desc-tentangkami':'Menyusun strategi dalam membuat sebuah kerjaan bisnis merupakan hal yang vital. tentu akan sangat berpengaruh jika terdapat kesalahan dalam menyusun strategi. CKB akan membantu mewujudkan strategi bisnis anda ke dalam dimensi yang beda, unik dan kreatif.',
    'linibisnis-title-linibisnis':'Berbagai bidang usaha kreatif untuk memberikan inovasi terbaru',
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
    'nav-kontakkami': 'Contact Us',

    //index
    'banner-title-text':'Ready to make some creation <br> beyond your expectations',
    'banner-subtitle-text':'Citra Khaila is an agency that will support your business needs to a different level',
    'tentangkami-title-tentangkami':'Welcome to Citra Khaila, the place to make your business happen!',
    'tentangkami-desc-tentangkami':'Developing a strategy in making a business work is vital. Of course it will be very influential if there is an error in formulating a strategy. CKB will help realize your business strategy into a different, unique and creative dimension.',
    'linibisnis-title-linibisnis':'Various creative business fields to provide the latest innovations',
  },
};

let locale = 'id';

$(document).ready(function () {
  generateTranslate();

  $('[data-lang]').click((e) => {
    const getLang = e.target.dataset.lang;
    locale = getLang;

    $('[data-lang]').removeClass('active');
    $(`[data-lang=${getLang}]`).addClass('active');

    generateTranslate();
  });
});

function generateTranslate() {
  document.querySelectorAll(`[${keyOfDict}]`).forEach(translateElement);
}

function translateElement(element) {
  const key = element.getAttribute(keyOfDict);
  const translation = dictionary[locale][key];
  element.innerHTML = translation;
}

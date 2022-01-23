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
    'linibisnis-desc-linibisnis':'Citra Khaila memiliki usaha kreatif yang akan menjadi solusi perkembangan bisnis industri kreatif anda akan semakin berkembang dan akan memberikan pengaruh pada masa depan',
    'right-linibisnis-teknologi':'Teknologi',
    'right-linibisnis-edukasi':'Edukasi',
    'right-linibisnis-seni':'Seni',
    'right-linibisnis-film':'Film',
    'right-linibisnis-tur':'Tur & Travel',
    'right-body-linibisnis-teknologi':'Pembuatan aplikasi dalam berbagai bidang mulai dari Website, Android, iOS, dan lain-lain',
    'right-body-linibisnis-edukasi':'Pembelajaran dalam bentuk kelas online maupun offline yang memiliki beragam jenis bidang',
    'right-body-linibisnis-seni':'Pertunjukan karya seni yang memberikan nilai artistik dan estetik',
    'right-body-linibisnis-film':'Produksi dan Post Produksi Film dalam bentuk Film Panjang atau Film Pendek',
    'right-body-linibisnis-tur':'Agensi wisata untuk tujuan destinasi dalam negeri atau mancanegara',
    'layanan-container-header':'Layanan yang Kami Berikan',
    'layanan-item-it':'Konsultan IT',
    'layanan-item-workshop':'Workshop',
    'layanan-item-seni':'Peraga Seni & Budaya',
    'layanan-item-ph':'Rumah Produksi',
    'layanan-item-event':'Penyelenggara Acara',
    'layanan-item-tur':'Tur & Travel',
    'blog-title-text':'Update Terbaru dari Kami',
    'kami-senang-title-text':'Kami Senang Mendengar dari Anda',
    'right-footer-linibisnis':'Lini Bisnis',
    'right-footer-item-layanan':'Layanan',
    'right-footer-item-karir':'karir',
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
    'linibisnis-desc-linibisnis':'Citra Khaila has a creative business that will be a solution for your creative industry business development, it will grow and will have an impact on the future',
    'right-linibisnis-teknologi':'Technology',
    'right-linibisnis-edukasi':'Education',
    'right-linibisnis-seni':'Art',
    'right-linibisnis-film':'Film',
    'right-linibisnis-tur':'Tour & Travel',
    'right-body-linibisnis-teknologi':'Making applications in various fields ranging from Website, Android, iOS, and others',
    'right-body-linibisnis-edukasi':'Learning in the form of online and offline classes that have various types of fields',
    'right-body-linibisnis-seni':'Performing works of art that provide artistic and aesthetic value',
    'right-body-linibisnis-film':'Film Production and Post Production in the form of a Long Film or a Short Film',
    'right-body-linibisnis-tur':'Travel agency for domestic or foreign destinations',
    'layanan-container-header':'Services We Provide',
    'layanan-item-it':'IT Consultant',
    'layanan-item-workshop':'Workshop',
    'layanan-item-seni':'Art & Culture Show',
    'layanan-item-ph':'Production House',
    'layanan-item-event':'Event Planner',
    'layanan-item-tur':'Tour & Travel',
    'blog-title-text':'Our latest update',
    'kami-senang-title-text':'We Love Hearing from You',
    'right-footer-linibisnis':'Business Line',
    'right-footer-item-layanan':'Services',
    'right-footer-item-karir':'Career',
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

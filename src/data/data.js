const mapel = {
  presensi: {
    name: 'presensi harian',
    link: 'http://bit.ly/PRESENSI_HARIAN_SMA'},
  kim: {
    name: 'Kimia',
    link: 'https://mbs-yogya.ucm.ac.id/courses/chemistry-11/homepage/?cl=1'},
  ulqur: {
    name: 'Ulumul Quran',
    link: 'https://mbs-yogya.ucm.ac.id/courses/ulumul-qur-an/homepage/?cl=1'},
  tl: {
    name: 'Tamrin Lughoh',
    link: 'https://mbs-yogya.ucm.ac.id/courses/11-tamrin-lughoh/homepage/?cl=1'},
  quran: {
    name: 'Al Quran',
    link: 'https://mbs-yogya.ucm.ac.id/courses/kelas-11-al-qur-an/homepage/?cl=1'},
  
  mtkw: {
    name: 'Matematika W',
    link: 'https://mbs-yogya.ucm.ac.id/courses/matematika-kelas-11-sma-ipa-ips/homepage/?cl=1'},
  usfiq: {
    name: 'Ushul Fiqh',
    link: 'https://mbs-yogya.ucm.ac.id/courses/ushul-fiqh-xi/homepage/?cl=1'},
  jawa: {
    name: 'B Jawa',
    link: 'https://mbs-yogya.ucm.ac.id/courses/kelas-11-bahasa-jawa/homepage/?cl=1'},
  fiq: {
    name: 'Fiqih',
    link: 'https://mbs-yogya.ucm.ac.id/courses/fiqih-11/homepage/?cl=1'},
  
  indo: {
    name: 'B Indonesia',
    link: 'https://mbs-yogya.ucm.ac.id/courses/bahasa-indonesia-kelas-11/homepage/?cl=1'},
  aqi: {
    name: 'Aqidah',
    link: 'https://mbs-yogya.ucm.ac.id/courses/aqidah-11/homepage/?cl=1'},
  pkn: {
    name: 'PPKn',
    link: 'https://mbs-yogya.ucm.ac.id/courses/kelas-12-ppkn/homepage/?cl=1'},
  hds: {
    name: 'Hadist',
    link: 'https://mbs-yogya.ucm.ac.id/courses/hadist-kelas-11/homepage/?cl=1'},
  
  bio: {
    name: 'Biologi',
    link: 'https://mbs-yogya.ucm.ac.id/courses/biologi-xi-mipa/homepage/?cl=1'},
  nah: {
    name: 'Nahwu',
    link: 'https://mbs-yogya.ucm.ac.id/courses/nahwu-11/homepage/?cl=1'},
  mtkp: {
    name: 'Matematika P',
    link: 'https://mbs-yogya.ucm.ac.id/courses/tiara-qurotaa-yun-farida-az-zahra/homepage/?cl=1'},
  ing: {
    name: 'B Inggris',
    link: 'https://mbs-yogya.ucm.ac.id/courses/english11/homepage/?cl=1'},
  
  bal: {
    name: 'Balaghoh',
    link: 'https://mbs-yogya.ucm.ac.id/courses/11-balagoh/homepage/?cl=1'},
  fis: {
    name: 'Fisika',
    link: 'https://mbs-yogya.ucm.ac.id/courses/11-fisika/homepage/?cl=1'},
  far: {
    name: 'Faroid',
    link: 'https://mbs-yogya.ucm.ac.id/courses/faroid/homepage/?cl=1'},
  mhds: {
    name: 'Must Hadist',
    link: 'https://mbs-yogya.ucm.ac.id/courses/kelas-11-musthalah-hadis/homepage/?cl=1'},
  
  pkwu: {
    name: 'PKWU',
    link: 'https://mbs-yogya.ucm.ac.id/courses/prakarya/homepage/?cl=1'},
  tar: {
    name: 'Tarikh',
    link: 'https://mbs-yogya.ucm.ac.id/courses/tarikh-kelas-10/homepage/?cl=1'},
  akh: {
    name: 'Akhlak',
    link: 'https://mbs-yogya.ucm.ac.id/courses/akhlak-xi/homepage/?cl=1'},
  sej: {
    name: 'Sejarah',
    link: 'https://mbs-yogya.ucm.ac.id/courses/kelas-11-sejarah/homepage/?cl=1'},
  kemuh: {
    name: 'Kemuh',
    link: 'https://mbs-yogya.ucm.ac.id/courses/mapel-kemuhammadiyahan-5-good/homepage/?cl=1'}
};

export const data = {
  kelas: "11 MIPA",
  sabtu: { hari: "Sabtu",
    jadwal:[
      mapel.presensi,
      mapel.kim, 
      mapel.ulqur, 
      mapel.tl, 
      mapel.quran 
    ]},
  ahad: { hari: "Ahad",
    jadwal:[
      mapel.presensi,
      mapel.mtkw, 
      mapel.usfiq, 
      mapel.jawa, 
      mapel.fiq
    ]},
  senin: { hari: "Senin",
    jadwal:[
      mapel.presensi,
      mapel.indo, 
      mapel.aqi, 
      mapel.pkn, 
      mapel.hds
    ]},
  selasa: { hari: "Selasa",
    jadwal:[
      mapel.presensi,
      mapel.bio, 
      mapel.nah,
      mapel.mtkp, 
      mapel.ing
    ]},
  rabu: { hari: "Rabu",
    jadwal:[
      mapel.presensi,
      mapel.bal, 
      mapel.fis, 
      mapel.far, 
      mapel.mhds, 
      mapel.tl
    ]},
  kamis: { hari: "Kamis",
    jadwal: [
      mapel.presensi,
      mapel.pkwu, 
      mapel.tar, 
      mapel.akh, 
      mapel.sej, 
      mapel.kemuh
    ]},
  jumat: { hari: "Jumat",
    jadwal:[]},
};

//empty
export const datas = {
  kelas: "11 MIPA",
  sabtu: { hari: "Sabtu",
    jadwal:[]},
  ahad: { hari: "Ahad",
    jadwal:[]},
  senin: { hari: "Senin",
    jadwal:[]},
  selasa: { hari: "Selasa",
    jadwal:[]},
  rabu: { hari: "Rabu",
    jadwal:[]},
  kamis: { hari: "Kamis",
    jadwal: []},
  jumat: { hari: "Jumat",
    jadwal:[]},
}

// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//inisialisasi Set untuk favoriteCalor
const firstFavoriteColor = new Set();
const secondFavoriteColor = new Set();

//Menambahkan data favoriteColor untuk firstUser
firstFavoriteColor.add("Yellow");
firstFavoriteColor.add("Pink");
firstFavoriteColor.add("White");
firstFavoriteColor.add("Purple");

//Menambahkan data favoriteColor untuk secondtUser
secondFavoriteColor.add("Blue");
secondFavoriteColor.add("Black");
secondFavoriteColor.add("Grey");

//inisialisasi array education untuk first dan second user
const firstEducation = new Array();
const secondEducation = new Array();

//inisialisasi objek education dari SD sampai SMA untuk firstUser
const firstElementarySchool = new Object();
const firstJuniorHighSchool = new Object();
const firstSeniorHighSchool = new Object();

//Menambahkan data SD ke objek dan melemparkan data ke array
firstElementarySchool.name = "SD 01";
firstElementarySchool.city = "Jakarta";
firstElementarySchool.graduate = 2016;
firstEducation.push(firstElementarySchool);

//Menambahkan data SMP ke objek dan melemparkan data ke array
firstJuniorHighSchool.name = "SMP 02";
firstJuniorHighSchool.city = "Jakarta";
firstJuniorHighSchool.graduate = 2019;
firstEducation.push(firstJuniorHighSchool);

//Menambahkan data SMA ke objek dan melemparkan data ke array
firstSeniorHighSchool.name = "SMA 03";
firstSeniorHighSchool.city = "Tangerang";
firstEducation.push(firstSeniorHighSchool);

//inisialisasi objek education dari SD sampai Perguruan Tinggiuntuk secondUser
const secondElementarySchool = new Object();
const secondJuniorHighSchool = new Object();
const secondSeniorHighSchool = new Object();
const secondUniversity = new Object();

//Menambahkan data SD ke objek dan melemparkan data ke array
secondElementarySchool.name = "SD 02";
secondElementarySchool.city = "Jakarta";
secondElementarySchool.graduate = 2010;
secondEducation.push(secondElementarySchool);

//Menambahkan data SMP ke objek dan melemparkan data ke array
secondJuniorHighSchool.name = "SMP 03";
secondJuniorHighSchool.city = "Bogor";
secondJuniorHighSchool.graduate = 2013;
secondEducation.push(secondJuniorHighSchool);

//Menambahkan data SMA ke objek dan melemparkan data ke array
secondSeniorHighSchool.name = "SMA 01";
secondSeniorHighSchool.city = "Surabaya";
secondSeniorHighSchool.graduate = 2016;
secondEducation.push(secondSeniorHighSchool);

//Menambahkan data Perguruan Tinggi ke objek dan melemparkan data ke array
secondUniversity.name = "Universitas Maju";
secondUniversity.city = "Tangerang";
secondEducation.push(secondUniversity);

// console.log(firstEducation);
// console.log(secondEducation);

//inisialisasi Set untuk favoriteRestaurant
const firstFavoriteRestaurant = new Set();
const secondFavoriteRestaurant = new Set();

firstFavoriteRestaurant.add("Bento");
firstFavoriteRestaurant.add("Sushi");
firstFavoriteRestaurant.add("Pancake");
firstFavoriteRestaurant.add("Eggy");
firstFavoriteRestaurant.add("Tempura");
firstFavoriteRestaurant.add("Bento");
firstFavoriteRestaurant.add("Eggy");
firstFavoriteRestaurant.add("Padang");
firstFavoriteRestaurant.add("Tteok");
firstFavoriteRestaurant.add("Sushi");
firstFavoriteRestaurant.add("Sushi");

// console.log(firstFavoriteRestaurant);

secondFavoriteRestaurant.add("Tempura");
secondFavoriteRestaurant.add("Bento");
secondFavoriteRestaurant.add("Sushi");
secondFavoriteRestaurant.add("Pancake");
secondFavoriteRestaurant.add("Padang");
secondFavoriteRestaurant.add("Katsu");
secondFavoriteRestaurant.add("Geprek");
secondFavoriteRestaurant.add("Pancake");
secondFavoriteRestaurant.add("Eggy");

// console.log(secondFavoriteRestaurant);

const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: firstFavoriteColor,
  isHavePet: "Yes",
  education: firstEducation,
  favoriteRestaurant: firstFavoriteRestaurant,
};
const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: secondFavoriteColor,
  isHavePet: "No",
  education: secondEducation,
  favoriteRestaurant: secondFavoriteRestaurant,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};

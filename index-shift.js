// Manipuli array dengan shift
function panggilshift(){
  var kota = ['Jakarta','Lampung','Batam','Metro'];
  console.log(kota);

  var kota2 = kota.shift()
  console.log(kota2);

  return kota
}
// ini dipanggil semua
console.log(panggilshift());

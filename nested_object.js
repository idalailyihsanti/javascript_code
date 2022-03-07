// function nestedobject(){
//   var mhs = {
//     pesan: halo()
//   }
//   console.log(mhs.pesan);
// }
function halo() {
  var data = {
    Nama: 'Ida Laily',
    Semester: 5,
    ipk: {
      smt_1: 4.0,
      smt_2: 3.7
    }
  }
  console.log(data.ipk.smt_1)
}
halo()

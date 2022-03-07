function buat_login(){
    tampil = 0;
    reset_form();
    $('.modal-title').html('Tambah Buku');
    $('.btreset').show()
    $('#formModal').modal('show');
}

function reset_form(){
  $('.txinput').val('')
}

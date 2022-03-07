function buat_login(){
  var elem = document.getElementById("X");
  elem.parentElement.removeChild(elem);
  var p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "Silahkan Login";
  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);
  var form = document.createElement("FORM");
  element.appendChild(form);
  // Label 1 Username
  var label = document.createElement("label");
  label.innerHTML = "Username";
  form.appendChild(label);
  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.value = "aku";
  form.appendChild(input_username);
  // label 2 nomor handphone
  var label2 = document.createElement("label");
  label2.innerHTML = "Nomor handphone";
  form.appendChild(label2);
  var input_no = document.createElement("input");
  input_no.type = "number";
  input_no.name = "Nomor handphone";
  input_no.className = "form_login";
  input_no.value = "number";
  form.appendChild(input_no);
  // label 3 email
  var label3 = document.createElement("label");
  label3.innerHTML = "email";
  form.appendChild(label3);
  var input_email = document.createElement("input");
  input_email.type = "email";
  input_email.name = "email";
  input_email.className = "form_login";
  input_email.value = "@gmail.com";
  form.appendChild(input_email);
  // label 4 password
  var label4 = document.createElement("label");
  label4.innerHTML = "password";
  form.appendChild(label4);
  var input_password = document.createElement("input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.className = "form_login";
  input_password.value = "...";
  form.appendChild(input_password);

  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className = "tombol_login";
  form.appendChild(tombol);
}

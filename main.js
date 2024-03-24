// Event listener untuk checkbox "Tampilkan Password"
document.getElementById("showPassword").addEventListener("change", function () {
  const passwordField = document.getElementById("password-input");
  if (this.checked) {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Email Start
  const emailForm = document.getElementById("email-form");
  const emailInput = document.getElementById("email-input");
  const emailButton = document.getElementById("buttonEmail");
  // Email End

  // username Start
  const usernameForm = document.getElementById("username-form");
  const usernameInput = document.getElementById("username-input");
  const usernameButton = document.getElementById("buttonUsername");
  // username End

  // namalengkap start
  const namaForm = document.getElementById("nama-form");
  const namaInput = document.getElementById("nama-input");
  const namaButton = document.getElementById("buttonNama");
  // namalengkap End

  // nomor telepon start
  const teleponForm = document.getElementById("telepon-form");
  const teleponInput = document.getElementById("telepon-input");
  const teleponButton = document.getElementById("buttonTelepon");
  // nomor telepon end

  // Pasword start
  const passwordForm = document.getElementById("password-form");
  const buttonPassword = document.getElementById("buttonPassword");
  const passwordInput = document.getElementById("password-input");
  // Password End

  // Regex untuk validasi email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //Regex untuk username
  const usernameRegex = /^[a-z0-9]{8,}$/;

  //Regex untuk Nama Lengkap
  const namaRegex = /^([A-Z][a-z]+[ ]?)+$/;

  //Regex untuk Nomor Telepon
  const teleponRegex = /^[0-9]{11,}$/;

  // Fungsi untuk menampilkan pesan error
  function showError(id) {
    const element = document.getElementById(id);
    return element.classList.remove("hidden");
  }

  function hideError(id) {
    const element = document.getElementById(id);
    return element.classList.add("hidden");
  }

  // Validasi email
  function validateEmail() {
    const email = emailInput.value.trim();

    if (!emailRegex.test(email)) {
      showError("emailError");
      return false;
    }

    hideError("emailError");
    return true;
  }

  // Event listener untuk tombol "Selanjutnya" pada form email
  emailButton.addEventListener("click", function (e) {
    e.preventDefault();

    if (validateEmail()) {
      // alert("Succes!, Next Username...");

      Swal.fire({
        position: "top-center",
        icon: "info",
        title: "Next Username",
        showConfirmButton: false,
        timer: 1500,
      });

      usernameForm.classList.remove("hidden");
      emailForm.classList.add("hidden");
    }
  });

  //Validasi Username
  function validateUsername() {
    const username = usernameInput.value.trim();

    if (!usernameRegex.test(username)) {
      showError("usernameError");
      return false;
    }

    hideError("usernameError");
    return true;
  }

  // Event listener untuk tombol "Selanjutnya" pada form username
  usernameButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateUsername()) {
      // alert("Succes!, Next Nama Lengkap.....");

      Swal.fire({
        position: "top-center",
        icon: "info",
        title: "Next Nama Lengkap",
        showConfirmButton: false,
        timer: 1500,
      });

      namaForm.classList.remove("hidden");
      usernameForm.classList.add("hidden");
    }
  });

  // Validate nama lengkap
  function validateNama() {
    const nama = namaInput.value.trim();

    if (!namaRegex.test(nama)) {
      showError("namaError");
      return false;
    }

    hideError("namaError");
    return true;
  }

  namaButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateNama()) {
      // alert("Success!!, Next Nomor Telepon..");

      Swal.fire({
        position: "top-center",
        icon: "info",
        title: "Next Nomor Telepon",
        showConfirmButton: false,
        timer: 1500,
      });

      teleponForm.classList.remove("hidden");
      namaForm.classList.add("hidden");
    }
  });

  // Validate Nomor Telepon

  function validateTelepon() {
    const telepon = teleponInput.value.trim();

    if (!teleponRegex.test(telepon)) {
      showError("teleponError");
      return false;
    }

    hideError("teleponError");
    return true;
  }

  teleponButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateTelepon()) {
      // alert("SUCCES!!!, NEXT PASSWORD");

      Swal.fire({
        position: "top-center",
        icon: "info",
        title: "Last Password",
        showConfirmButton: false,
        timer: 1500,
      });

      teleponForm.classList.add("hidden");
      passwordForm.classList.remove("hidden");
    }
  });

  function strengthMeter(password) {
    let meter = 0;

    if (password.length < 8) {
      meter++;
    }
    if (password.length >= 8) {
      meter++;
    }
    if (/[a-z]/.test(password)) {
      meter++;
    }
    if (/[A-Z]/.test(password)) {
      meter++;
    }
    if (/[0-9]/.test(password)) {
      meter++;
    }

    if (
      /.*[!@#\$%\^&\*\(\)_\+\-\=\{\}\|\[\]\\\:\;\"\'\<\>\?,\.\/].*/.test(
        password
      )
    ) {
      meter++;
    }
    return meter;
  }

  passwordInput.addEventListener("input", () => {
    var strength = document.getElementById("strengthMeter");
    var password = passwordInput.value.trim();
    let meter = strengthMeter(password);

    if (meter === 0 || meter === 1) {
      strength.classList.remove("weak");
      strength.classList.remove("medium");
      strength.classList.remove("strong");
    }

    if (meter > 1 && meter < 3) {
      strength.classList.add("weak");
    }
    if (meter > 3 && meter <= 4) {
      strength.classList.remove("weak");
      strength.classList.remove("strong");
      strength.classList.add("medium");
    }
    if (meter >= 5) {
      strength.classList.remove("medium");
      strength.classList.remove("weak");
      strength.classList.add("strong");
    }
  });

  buttonPassword.addEventListener("click", (e) => {
    e.preventDefault();
  
    const emailValue = emailInput.value;
    const usernameValue = usernameInput.value;
    const namaValue = namaInput.value;
    const teleponValue = teleponInput.value;
    const passwordValue = passwordInput.value;
  
    // Cek kekuatan password
    let meter = strengthMeter(passwordValue);
    if (meter < 4) {
      Swal.fire({
        icon: 'error',
        title: 'Password terlalu lemah',
      });
      return; 
    }
  
    Swal.fire({
      title: "Data Anda",
      html: `
        <ul>
          <li>Email: ${emailValue}</li>
          <li>Username: ${usernameValue}</li>
          <li>Nama: ${namaValue}</li>
          <li>Telepon: ${teleponValue}</li>
          <li>Password: ${passwordValue}</li>
        </ul>
      `,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        location.reload();
      }
    });
  });
  



});

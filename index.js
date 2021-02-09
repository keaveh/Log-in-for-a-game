$(document).ready(function () {
  $("#login", "#signup").on("click", function () {
    var email = $("#email").val();
    var password = $("#password").val();
    console.log(email);
  });
});

function show() {
  var password = document.getElementById("password");
  var icon = document.querySelector(".fas");

  // ========== Checking type of password ===========
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}


//   $('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
// $('.collapse').on('show.bs.collapse', function () {
//   $(this).closest('.accordion-item').addClass('active');
// });

// $('.collapse').on('hidden.bs.collapse', function () {
//   $(this).closest('.accordion-item').removeClass('active');
// });

// });

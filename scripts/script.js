$(document).ready(function () {
  $(".register-btn").click(function () {
    $(".register-none").show();
  });
  $(".register-cancel").click(function () {
    $(".register-none").hide();
  });
  $(".register-create").click(function () {
    $(".register-none").hide();
  });
  $(".voiti").click(function () {
    $(".vhod-none").show();
  });
  $(".register-cancel").click(function () {
    $(".vhod-none").hide();
  });
  $(".vhod-voiti").click(function () {
    $(".vhod-none").hide();
  });
  $(".gamburger-menu").click(function () {
    $(".side-bar").slideToggle();
  });
});
let name = $(".search").val();
$(".search-btn").click(function () {
  console.log(name);
});

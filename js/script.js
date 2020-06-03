"use stict"

$(document).ready(function() {
    $('.typewriter').typeIt({
     strings: ["Мы позаботимся о вашем питомце    ",
      "Лучшие специалисты, новейшие технологии, удобный сервис  ",
       "Если бы животные могли говорить, они бы сказали спасибо    ",
        "Доверьте ваших домашних любимцев профессионалам!"],
     speed: 170,
     loop: true,
     breakLines: false,
     autoStart: true
}).tiPause(9000);
});


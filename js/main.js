"use strict"; // to enable strict mode and modern JavaScript functionality

// appends a string to the DOM
document.querySelector("#content").innerHTML = "Hi Frontenders!";

// declaring teacher objects
let teacher1 = {
  name: "Birgitte Kirk Iversen",
  initials: "bki",
  mail: "bki@baaa.dk",
  phone: "72286316",
  address: "Sønderhøj 30, 8260 Viby J",
  position: "Senior Lecturer",
  department: "Multimedia Design",
  img: "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg",
  hairColor: "Blonde",
};

let teacher2 = {
  name: "Rasmus",
  initials: "race",
  mail: "race@baaa.dk",
  phone: "+45 7228 6318",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Lecturer",
  department: "Programmes within Digital Communication and Multimedia",
  img: "https://www.baaa.dk/media/devlvvgj/rasmus-cederdorff.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132133643141330000&format=webp",
  hairColor: "Blonde",
};

// logs the teacher objects to the console
console.log(teacher1);
console.log(teacher2);

function showAlert() {
  alert('Open your Developer Console!');
}

document.querySelector("#content").innerHTML +=
  "<article>" +
  "<img src='" + teacher1.img + "'>" +
  "<h3>" + teacher1.name + "</h3>" +
  teacher1.position + "<br>" +
  "<a href='mailto:" + teacher1.mail + "'>" + teacher1.mail + "</a>" + "<br>" +
  teacher1.phone + "<br>" +
  teacher1.address + "<br>" +
  teacher1.department + "<br>" +
  teacher1.hairColor + "<br>" +
  "</article>";

  document.querySelector("#content").innerHTML +=
    "<article>" +
    "<img src='" + teacher2.img + "'>" +
    "<h3>" + teacher2.name + "</h3>" +
    teacher2.position + "<br>" +
    "<a href='mailto:" + teacher2.mail + "'>" + teacher2.mail + "</a>" + "<br>" +
    teacher2.phone + "<br>" +
    teacher2.address + "<br>" +
    teacher2.department + "<br>" +
    teacher2.hairColor + "<br>" + "<br>" + "<br>" +
    "</article>";



var x;
delete teacher1.img;
for (x in teacher1) {
document.querySelector("#content").innerHTML += teacher1[x] + "<br>";
}

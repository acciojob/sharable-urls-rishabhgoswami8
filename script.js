document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  var name = document.querySelector("#name").value;
  var year = document.querySelector("#year").value;
  document.querySelector("#url").textContent = "https://localhost:8080/?name=" + name + "&year=" + year;
});


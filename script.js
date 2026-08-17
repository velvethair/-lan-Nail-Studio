const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");
const dateInput = document.getElementById("date");

// Минимален датум = денес
const today = new Date().toISOString().split("T")[0];
dateInput.min = today;


// Форма за закажување
bookingForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!name || !phone || !service || !date || !time) {
    formMessage.textContent = "Ве молиме пополнете ги сите полиња.";
    return;
  }

  const selectedDate = new Date(date + "T" + time);
  const now = new Date();

  if (selectedDate <= now) {
    formMessage.textContent = "Ве молиме изберете иден датум и време.";
    return;
  }

  formMessage.textContent =
    "Вашето барање е успешно испратено! Ќе ве контактираме за потврда.";

  bookingForm.reset();
  dateInput.min = today;
});


// Автоматски го затвора мобилното мени при клик
document.querySelectorAll("nav a").forEach(function(link) {
  link.addEventListener("click", function() {
    window.scrollTo({
      top: document.querySelector(link.getAttribute("href")).offsetTop - 70,
      behavior: "smooth"
    });
  });
});

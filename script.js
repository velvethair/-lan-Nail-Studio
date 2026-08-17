// ============================================
// LUNA NAILS - SUPABASE BOOKING SYSTEM
// ============================================

// Supabase information
const SUPABASE_URL = "https://rvnpnzaogaeqbeofnvli.supabase.co";

// ВАЖНО:
// Наместо YOUR_PUBLISHABLE_KEY стави го твојот
// Publishable key од Supabase.
const SUPABASE_PUBLISHABLE_KEY = "YOUR_PUBLISHABLE_KEY";


// Create Supabase client
const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);


// ============================================
// ELEMENTS
// ============================================

const bookingForm = document.getElementById("bookingForm");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const serviceInput = document.getElementById("service");

const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");

const formMessage = document.getElementById("formMessage");
const bookingButton = document.getElementById("bookingButton");


// ============================================
// WORKING HOURS
// ============================================

// Овде ги поставуваме работните часови.
//
// Моментално:
// 09:00
// 10:00
// 11:00
// 12:00
// 13:00
// 14:00
// 15:00
// 16:00
// 17:00
//
// Подоцна можеме да ги смениме според
// вистинското работно време.

const availableTimes = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00"
];


// ============================================
// MINIMUM DATE
// ============================================

const today = new Date();

const todayString =
  today.getFullYear() +
  "-" +
  String(today.getMonth() + 1).padStart(2, "0") +
  "-" +
  String(today.getDate()).padStart(2, "0");

dateInput.min = todayString;


// ============================================
// SHOW MESSAGE
// ============================================

function showMessage(message, success = false) {

  formMessage.textContent = message;

  if (success) {
    formMessage.style.color = "#3d8b62";
  } else {
    formMessage.style.color = "#b86f87";
  }
}


// ============================================
// RESET TIME SELECT
// ============================================

function resetTimeSelect(message = "Прво избери датум") {

  timeInput.innerHTML = "";

  const option = document.createElement("option");

  option.value = "";
  option.textContent = message;

  timeInput.appendChild(option);
}


// ============================================
// LOAD AVAILABLE TIMES
// ============================================

async function loadAvailableTimes() {

  const selectedDate = dateInput.value;

  if (!selectedDate) {
    resetTimeSelect();
    return;
  }

  resetTimeSelect("Се вчитуваат термините...");

  showMessage("");

  try {

    // Get already reserved times
    const { data, error } = await supabase
      .from("bookings")
      .select("booking_time")
      .eq("booking_date", selectedDate);

    if (error) {
      console.error(error);

      resetTimeSelect("Грешка при вчитување");

      showMessage(
        "Не можевме да ги вчитаме слободните термини."
      );

      return;
    }


    // Convert database times to HH:MM
    const bookedTimes = (data || []).map(booking => {

      return String(booking.booking_time).slice(0, 5);

    });


    // Only free times remain
    const freeTimes = availableTimes.filter(time => {

      return !bookedTimes.includes(time);

    });


    timeInput.innerHTML = "";


    // No free times
    if (freeTimes.length === 0) {

      const option = document.createElement("option");

      option.value = "";
      option.textContent =
        "Нема слободни термини за овој датум";

      timeInput.appendChild(option);

      return;
    }


    // Default option
    const defaultOption = document.createElement("option");

    defaultOption.value = "";
    defaultOption.textContent =
      "Избери слободен термин";

    timeInput.appendChild(defaultOption);


    // Add free times
    freeTimes.forEach(time => {

      const option = document.createElement("option");

      option.value = time;
      option.textContent = time;

      timeInput.appendChild(option);

    });


  } catch (error) {

    console.error(error);

    resetTimeSelect("Грешка");

    showMessage(
      "Се појави проблем при поврзувањето со базата."
    );

  }
}


// ============================================
// DATE CHANGE
// ============================================

dateInput.addEventListener(
  "change",
  loadAvailableTimes
);


// ============================================
// BOOKING
// ============================================

bookingForm.addEventListener(
  "submit",
  async function(event) {

    event.preventDefault();


    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const service = serviceInput.value;
    const bookingDate = dateInput.value;
    const bookingTime = timeInput.value;


    // Check fields
    if (
      !name ||
      !phone ||
      !service ||
      !bookingDate ||
      !bookingTime
    ) {

      showMessage(
        "Ве молиме пополнете ги сите полиња."
      );

      return;
    }


    // Disable button
    bookingButton.disabled = true;
    bookingButton.textContent = "Се резервира...";

    showMessage("");


    try {

      // Insert booking into Supabase
      const { data, error } = await supabase
        .from("bookings")
        .insert([
          {
            name: name,
            phone: phone,
            service: service,
            booking_date: bookingDate,
            booking_time: bookingTime
          }
        ])
        .select();


      // Error
      if (error) {

        console.error(error);


        // PostgreSQL unique violation
        if (error.code === "23505") {

          showMessage(
            "Овој термин штотуку беше резервиран. Ве молиме изберете друг термин."
          );

          await loadAvailableTimes();

        } else {

          showMessage(
            "Резервацијата не успеа. Обидете се повторно."
          );

        }

        return;
      }


      // Success
      console.log("Booking created:", data);

      showMessage(
        "Успешно! Терминот е резервиран. Ви благодариме!",
        true
      );


      // Clear customer information
      nameInput.value = "";
      phoneInput.value = "";
      serviceInput.value = "";

      dateInput.value = "";

      resetTimeSelect();


    } catch (error) {

      console.error(error);

      showMessage(
        "Се појави грешка. Обидете се повторно."
      );

    } finally {

      bookingButton.disabled = false;

      bookingButton.textContent = "Закажи термин";

    }

  }
);


// ============================================
// NAVIGATION
// ============================================

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", function(event) {

    const targetId =
      link.getAttribute("href");

    const target =
      document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});


// ============================================
// INITIAL STATE
// ============================================

resetTimeSelect();

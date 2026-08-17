// ==========================================
// LUNA NAILS - BOOKING SYSTEM
// ==========================================

const SUPABASE_URL =
  "https://rvnpnzaogaeqbeofnvli.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_DK0VAMSwETHp-Uo9qCJiVQ_IPON-LD";

const supabaseClient =
  window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );


// ==========================================
// FORM ELEMENTS
// ==========================================

const bookingForm =
  document.getElementById("bookingForm");

const nameInput =
  document.getElementById("name");

const phoneInput =
  document.getElementById("phone");

const serviceInput =
  document.getElementById("service");

const dateInput =
  document.getElementById("date");

const timeInput =
  document.getElementById("time");

const bookingButton =
  document.getElementById("bookingButton");

const formMessage =
  document.getElementById("formMessage");

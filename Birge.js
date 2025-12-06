// --- NAV ACTIVE HIGHLIGHT ---
const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// --- FILTERS (just console output for now) ---
const selects = document.querySelectorAll('.filters select');

selects.forEach(select => {
  select.addEventListener('change', () => {
    console.log(`Выбрано: ${select.value}`);
  });
});

// --- CHIPS CLICK EFFECT ---
const chips = document.querySelectorAll('.chip');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('chip-active'));
    chip.classList.add('chip-active');
  });
});

// --- SMOOTH SCROLL TO HERO BUTTON ---
const ctaBtn = document.querySelector('.btn-cta');

if (ctaBtn) {
  ctaBtn.addEventListener('click', () => {
    window.scrollTo({
      top: document.body.scrollHeight * 0.3,
      behavior: "smooth"
    });
  });
}

// --- CARD CLICK (opens placeholder page) ---
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    alert("Здесь будет переход на страницу активности 😎");
  });
});
const chips = document.querySelectorAll(".chip");
const result = document.getElementById("result");

chips.forEach(chip => {
    chip.addEventListener("click", () => {

        chips.forEach(c => c.classList.remove("active"));

        chip.classList.add("active");

        result.textContent = "Сен таңдадың: " + chip.textContent;
    });
});


/* =========================
   GLOBAL STATE
   ========================= */
let currentLang = "hr";

/* =========================
   LANGUAGE SWITCH
   ========================= */
function setLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll("[data-lang]").forEach(el => {
    el.style.display =
      el.getAttribute("data-lang") === lang ? "inline" : "none";
  });

  localStorage.setItem("lang", lang);
}

/* Language buttons */
document.querySelectorAll("[data-set-lang]").forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.getAttribute("data-set-lang"));
  });
});

/* =========================
   PDF EXPORT
   ========================= */
const pdfButton = document.getElementById("pdf-btn");
if (pdfButton) {
  pdfButton.addEventListener("click", () => {
    const originalTitle = document.title;

    document.title =
      currentLang === "hr"
        ? "Elena_Jug_CV_HR"
        : "Elena_Jug_CV_EN";

    window.print();

    setTimeout(() => {
      document.title = originalTitle;
    }, 500);
  });
}

/* =========================
   INIT ON LOAD
   ========================= */
const savedLang = localStorage.getItem("lang") || "hr";
setLanguage(savedLang);

document.getElementById("dark-btn")?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

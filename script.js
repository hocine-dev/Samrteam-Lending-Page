document.addEventListener("DOMContentLoaded", function () {
  const e = document.getElementById("mobile-menu-button"),
    t = document.getElementById("mobile-menu");
  e.addEventListener("click", function () {
    t.classList.toggle("hidden");
  });
  const n = document.getElementById("header");
  window.addEventListener("scroll", function () {
    window.scrollY > 100
      ? n.classList.add("header-scrolled")
      : n.classList.remove("header-scrolled");
  }),
    document.querySelectorAll('a[href^="#"]').forEach((e) => {
      e.addEventListener("click", function (e) {
        e.preventDefault();
        const n = this.getAttribute("href");
        if ("#" === n) return;
        const o = document.querySelector(n);
        o &&
          (o.scrollIntoView({ behavior: "smooth" }),
          t.classList.contains("hidden") || t.classList.add("hidden"));
      });
    });
  // 1. Sélectionnez les deux formulaires grâce à un sélecteur multiple
const forms = document.querySelectorAll('#contact-form, #contact-form-mobile');

// 2. Parcourez chaque formulaire et attachez-y le même handler
forms.forEach((form) => {
  if (!form) return; // protection au cas où l'élément n'existe pas

  form.addEventListener('submit', function (e) {
    // 3. Empêchez la soumission classique du formulaire
    e.preventDefault(); // :contentReference[oaicite:4]{index=4}

    // 4. Affichez la boîte de dialogue "Envoi en cours..."
    Swal.fire({
      title: 'Envoi en cours...',
      text: 'Merci de patienter pendant l’envoi de votre message.',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(), // :contentReference[oaicite:5]{index=5}
    });

    // 5. Envoyez le formulaire via EmailJS
    emailjs
      .sendForm('service_de7cpil', 'template_07hwe8c', form) // :contentReference[oaicite:6]{index=6}
      .then(() => {
        // 6.a. Succès
        Swal.fire({
          title: 'Merci pour votre message !',
          text: 'Nous vous contacterons très rapidement.',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      })
      .catch((error) => {
        // 6.b. Erreur
        console.error('Erreur EmailJS :', error);
        Swal.fire({
          title: 'Erreur',
          text: 'Une erreur est survenue lors de l’envoi du message.',
          icon: 'error',
          confirmButtonColor: '#ef4444',
        });
      })
      .finally(() => {
        // 7. Réinitialisez le formulaire concerné
        form.reset(); // :contentReference[oaicite:7]{index=7}
      });
  });
});

  const i = document.querySelectorAll(".counter");
  let r = !1;
  function s() {
    if (r) return;
    document.querySelector("#pourquoi-nous").getBoundingClientRect().top <
      window.innerHeight - 100 &&
      (i.forEach((e) => {
        const t = +e.getAttribute("data-target"),
          n = +e.innerText,
          o = t / 50;
        n < t
          ? ((e.innerText = Math.ceil(n + o)), setTimeout(() => s(), 20))
          : (e.innerText = t);
      }),
      (r = !0));
  }
  window.addEventListener("scroll", s), s();
  const c = document.querySelectorAll(".fade-in-element");
  function l() {
    c.forEach((e) => {
      e.getBoundingClientRect().top < window.innerHeight - 50 &&
        e.classList.add("fade-in");
    });
  }
  window.addEventListener("scroll", l), l();
}),
  AOS.init({ once: !0, duration: 600 });

  const logoFooter = document.getElementById("logo_footer");

  logoFooter.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const backToTopBtn = document.getElementById("back-to-top");
  const expertBtn     = document.getElementById("expert-button");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 260) {
      [backToTopBtn, expertBtn].forEach(btn => {
        btn.classList.remove("invisible", "opacity-0", "translate-y-4");
        btn.classList.add("visible", "opacity-100", "translate-y-0");
      });
    } else {
      [backToTopBtn, expertBtn].forEach(btn => {
        btn.classList.add("invisible", "opacity-0", "translate-y-4");
        btn.classList.remove("visible", "opacity-100", "translate-y-0");
      });
    }
  });
  
  // Scroll smooth au clic du back-to-top
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll('a[href^="#form"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();  // Empêche le saut instantané
  
      window.scrollTo({ top: 250, behavior: "smooth" });

      if (window.innerWidth <= 768) {
        t = document.getElementById("mobile-menu");
        if (!t.classList.contains("hidden")) {
          t.classList.toggle("hidden");
        }
      }


    });
  });
  
  



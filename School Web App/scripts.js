document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login-form");
  const contactForm = document.querySelector("#contact-form");
  const newsFilters = document.querySelectorAll("[data-filter]");
  const newsItems = document.querySelectorAll("[data-category]");
  const galleryModal = document.querySelector(".gallery-modal");
  const galleryModalImage = document.querySelector(".gallery-modal img");
  const galleryModalCaption = document.querySelector(".gallery-modal .caption");
  const galleryCards = document.querySelectorAll(".gallery-card");
  const modalClose = document.querySelector(".gallery-modal .close");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = loginForm.querySelector("input[name='email']").value.trim();
      const password = loginForm
        .querySelector("input[name='password']")
        .value.trim();

      if (!email || !password) {
        alert("Please enter both your email and password.");
        return;
      }

      if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
      }

      localStorage.setItem("schoolWebAppUser", email);
      alert(`Welcome back, ${email}!`);
      loginForm.reset();
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = contactForm.querySelector("input[name='name']").value.trim();
      const email = contactForm
        .querySelector("input[name='email']")
        .value.trim();
      const message = contactForm
        .querySelector("textarea[name='message']")
        .value.trim();

      if (!name || !email || !message) {
        alert("Please complete every field before sending your message.");
        return;
      }

      alert(`Thank you, ${name}! Your message has been submitted.`);
      contactForm.reset();
    });
  }

  if (newsFilters.length && newsItems.length) {
    newsFilters.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.dataset.filter;
        newsFilters.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        newsItems.forEach((item) => {
          const itemCategory = item.dataset.category;
          item.style.display =
            category === "all" || itemCategory === category ? "grid" : "none";
        });
      });
    });
  }

  if (galleryCards.length && galleryModal) {
    galleryCards.forEach((card) => {
      card.addEventListener("click", () => {
        const imgSrc = card.dataset.full;
        const caption = card.dataset.caption;
        galleryModalImage.src = imgSrc;
        galleryModalCaption.textContent = caption;
        galleryModal.classList.add("open");
      });
    });
  }

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      galleryModal.classList.remove("open");
    });
  }

  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector("header nav");

  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  document.addEventListener("click", (event) => {
    if (event.target === galleryModal) {
      galleryModal.classList.remove("open");
    }
  });
});

//* Header navbar on mobile
(function handleNavbar() {
  let navToggler = document.querySelector(".nav__toggle");
  let nav = document.querySelector("nav");

  navToggler.addEventListener("click", function toggleNavbar(evt) {
    nav.classList.toggle("show");
  });

  nav.addEventListener("click", function(evt) {
    nav.classList.remove("show");
  });
})();


//* Slider
(function handleSlider() {
  let slides = document.querySelectorAll(".slide");
  let activeIdx = 0;
  let currentIdx = 1;

  setInterval(() => {
    slides[activeIdx].style.display = "none";
    slides[currentIdx].style.display = "block";
    activeIdx = currentIdx;
    if ((currentIdx + 1) >= slides.length) {
      currentIdx = 0;
    } else {
      currentIdx++;
    }
  }, 3000);
})();

//* Modal
(function handleBuyTicketsModal() {
  let layer = document.querySelector(".modal-layer");
  let buyTicketBtns = document.querySelectorAll(".tour-buy");
  let close = document.querySelector(".modal-close");
  let ticketQnt = document.getElementById("ticket-qnt");
  let pay = document.getElementById("tour-buy-pay");

  function hideModal() {
    layer.classList.remove("show");
  }

  buyTicketBtns.forEach(btn => {
    btn.addEventListener("click", evt => {
      layer.classList.add("show");
      ticketQnt.focus();
    }); 
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.which == 27) {
      hideModal();
    }
  })

  close.addEventListener("click", hideModal);
  pay.addEventListener("click", hideModal);
  
  layer.addEventListener("click", function(evt) {
    if (evt.target == evt.currentTarget) {
      hideModal();
    }
  })
})();
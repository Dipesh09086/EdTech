
const counters = document.querySelectorAll('.stats h3');

const startCounter = () => {
  counters.forEach(counter => {
    const target = +counter.innerText.replace(D/g, '');
    let count = 0;

    const increment = target / 100;

    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count) + '+';
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + '+';
      }
    };

    updateCount();
  });
};

window.addEventListener('load', startCounter);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});



(function () {
  emailjs.init("V43mdgEmuF1MiCdTw");
})();


document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();


  emailjs.sendForm(
    "service_507l4em",
    "template_5o8ummb",
    this
  );

  
  emailjs.sendForm(
    "service_507l4em",
    "template_yjp7i9c",
    this
  ).then(
    function () {
      alert("Form submitted successfully!");
      document.getElementById("contact-form").reset();
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Error sending message");
    }
  );
});




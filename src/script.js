const sections = document.querySelectorAll("section");
sections.forEach((section, index) => {
  if (index !== 0) {
    section.setAttribute("data-aos", "zoom-in");
  }
});

const svg = document.getElementById("svg")
const cursor = document.getElementById("cursor");


document.addEventListener('mousemove', function (event) {
  const x = event.clientX;
  const y = event.clientY;
  const cursor = document.getElementById("cursor");

  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
  svg.setAttribute("cx", x)
  svg.setAttribute("cy", y)
})

const links = document.querySelectorAll("a");

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    cursor.style.backgroundColor = "blue";
    svg.style.stroke = "blue"
  });

  link.addEventListener("mouseleave", () => {
    cursor.style.backgroundColor = "white";
    svg.style.stroke = "white"
  });
});

const lines = document.querySelectorAll('.pag')
const heads = document.querySelectorAll('.head')


const observert = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      lines.forEach(line => line.classList.remove("ativa"));

      const index = [...sections].indexOf(entry.target);

      if (lines[index]) {
        lines[index].classList.add("ativa");
      }
    }

  });
}, {
  threshold: 0.3
});
sections.forEach(section => {
  observert.observe(section);
});




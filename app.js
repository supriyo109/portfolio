 const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "home"; 

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120; 
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });


    document.getElementById("backToTop").addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    window.addEventListener("scroll", function () {
      const btn = document.getElementById("backToTop");
      if (window.scrollY > 300) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });
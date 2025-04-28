document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("mobile-menu-button"),t=document.getElementById("mobile-menu");e.addEventListener("click",(function(){t.classList.toggle("hidden")}));const n=document.getElementById("header");window.addEventListener("scroll",(function(){window.scrollY>100?n.classList.add("header-scrolled"):n.classList.remove("header-scrolled")})),document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const n=this.getAttribute("href");if("#"===n)return;const o=document.querySelector(n);o&&(o.scrollIntoView({behavior:"smooth"}),t.classList.contains("hidden")||t.classList.add("hidden"))}))}));const o=document.getElementById("contact-form");o&&o.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(o),n={};t.forEach(((e,t)=>{n[t]=e})),Swal.fire({title:"Envoi en cours...",text:"Merci de patienter pendant l’envoi de votre message.",allowOutsideClick:!1,didOpen:()=>{Swal.showLoading()}}),emailjs.sendForm("service_de7cpil","template_07hwe8c",o).then((()=>{Swal.fire({title:"Merci pour votre message !",text:"Nous vous contacterons très rapidement.",icon:"success",showConfirmButton:!1,timer:3e3,timerProgressBar:!0})})).catch((e=>{console.error("Erreur EmailJS:",e),Swal.fire({title:"Erreur",text:"Une erreur est survenue lors de l’envoi du message.",icon:"error",confirmButtonColor:"#ef4444"})})).finally((()=>{o.reset()}))}));const i=document.querySelectorAll(".counter");let r=!1;function s(){if(r)return;document.querySelector("#pourquoi-nous").getBoundingClientRect().top<window.innerHeight-100&&(i.forEach((e=>{const t=+e.getAttribute("data-target"),n=+e.innerText,o=t/50;n<t?(e.innerText=Math.ceil(n+o),setTimeout((()=>s()),20)):e.innerText=t})),r=!0)}window.addEventListener("scroll",s),s();const c=document.querySelectorAll(".fade-in-element");function l(){c.forEach((e=>{e.getBoundingClientRect().top<window.innerHeight-50&&e.classList.add("fade-in")}))}window.addEventListener("scroll",l),l()})),AOS.init({once:!0,duration:600});const backToTopBtn=document.getElementById("back-to-top");window.addEventListener("scroll",(()=>{window.scrollY>200?(backToTopBtn.classList.remove("invisible","opacity-0","translate-y-4"),backToTopBtn.classList.add("visible","opacity-100","translate-y-0")):(backToTopBtn.classList.add("invisible","opacity-0","translate-y-4"),backToTopBtn.classList.remove("visible","opacity-100","translate-y-0"))})),backToTopBtn.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));


document.addEventListener('DOMContentLoaded', () => {
    const colorThief = new ColorThief();
    // Select all testimonial figures
    document.querySelectorAll('.js-testimonial').forEach(figure => {
      const img = figure.querySelector('img.js-logo');
      // Ensure image is fully loaded (for same-origin or with CORS)
      if (img.complete) {
        applyBg(img, figure);
      } else {
        img.addEventListener('load', () => applyBg(img, figure));
      }
    });
  
    function applyBg(img, container) {
      try {
        // Get dominant color [r, g, b]
        const [r, g, b] = colorThief.getColor(img);
        // Set container’s background (light opacity)
        container.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.1)`;
        // Optionally, set border or accent
        container.style.borderColor = `rgb(${r}, ${g}, ${b})`;
      } catch (e) {
        console.warn('Color extraction failed for', img, e);
      }
    }
  });
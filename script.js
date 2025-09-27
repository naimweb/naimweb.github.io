function toggleMode(){
  document.body.classList.toggle('dark');
  const icon=document.getElementById('mode-icon');
  if(document.body.classList.contains('dark')){
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Skills animation
window.addEventListener('load', ()=>{
  document.querySelectorAll('.skill-fill').forEach(el=>{
    el.style.width = el.style.width;
  });
});
</script>

<!-- AOS JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
<script>
  AOS.init({duration: 1000, once: true});
</script>

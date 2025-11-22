function updateScrollProgress() {
    const progressBar = document.getElementById("scroll-progress");

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrolled + "%";
  }

  window.addEventListener("scroll", updateScrollProgress);
  window.addEventListener("load", updateScrollProgress);
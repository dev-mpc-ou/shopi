function toTop() {
    window.scrollTo(
        {
            top: 0,
            behavior: 'smooth'
        }
    )
}

window.addEventListener("scroll", () => {
    const toTopBtn = document.querySelector("#to-top-btn")
    if (window.scrollY > 200) {
        toTopBtn.classList.add("show")
    } else {
        toTopBtn.classList.remove("show")
    }
})

const timeout = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
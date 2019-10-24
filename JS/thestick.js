const modal = document.querySelector(".modal-bg");
const container = document.querySelector("#container");

container.addEventListener("click", () => showModal());

// modal.addEventListener("click", () => modal.classList.add("hide"));

function showModal() {
  container.classList.toggle("change");

  if (modal.classList.contains("hide")) {
    modal.classList.remove("hide");
  } else {
    modal.classList.add("slideback");
    setTimeout(function() {
      modal.classList.add("hide");
      modal.classList.remove("slideback");
    }, 500);
  }
  //modal.classList.toggle('hide');
  //modal.classList.toggle("slideback");
  // modal.addEventListener("animationend", modal.classList.add("hide"));
}

document.querySelector(".arrow").addEventListener("click", () => {
  document.querySelector("main").scrollIntoView({
    behavior: "smooth"
  });
});

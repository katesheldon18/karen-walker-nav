const jewellery = document.getElementById("jewellery");

jewellery.addEventListener("click", function (e) {
  const target = e.target;

  if (target.classList.contains("nav-item-mobile")) {
    if (!target.classList.contains("expand")) {
      navItem.classList.add("expand");
      console.log("added class");
    } else {
      target.classList.remove("expand");
      console.log("removed class");
    }
  }
});

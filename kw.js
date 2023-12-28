Array.from(document.getElementsByClassName("nav-item-mobile")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      const element = e.target;
      const menu = Array.from(element.getElementsByClassName("menu-mobile"))[0];

      let menuHeight = 0;
      const menuChildren = Array.from(menu.children);
      for (i in menuChildren) {
        const menuChild = menuChildren[i];
        menuHeight = menuHeight + menuChild.getBoundingClientRect().height;
      }

      if (!menu) {
        return;
      }
      if (menu.style.height === "0px" || !menu.style.height) {
        menu.style.height = menuHeight + "px";
      } else {
        menu.style.height = "0px";
      }
    });
  }
);

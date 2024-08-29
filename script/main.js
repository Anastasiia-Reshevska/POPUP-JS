(function () {
  const popovers = document.querySelectorAll(`[data-toggle="popover"]`);
  if (!popovers || popovers.length === 0) return null;

  popovers.forEach((popover) => {
    popover.addEventListener("click", function () {
      const isOpenPopup = popover.classList.contains("popover-open");

      if (!isOpenPopup) {
        addElement(popover);
      } else {
        const container = popover.querySelector(".popover-wrapper");
        if (!container) return null;

        container.remove();
        popover.classList.remove("popover-open");
      }
    });
  });

  function addElement(popover) {
    popover.classList.add("popover-open");
    const content = popover.getAttribute("data-content");
    const header = popover.getAttribute("data-title");
    const title = document.createElement("div");
    const text = document.createElement("div");
    const container = document.createElement("div");
    const popoverArrow = document.createElement("div");

    if (!content && !header) return null;

    if (content) {
      text.className = "popover-content";
      text.innerHTML = content;
      container.prepend(text);
      console.log(content);
    }

    if (header) {
      title.className = "popover-title";
      title.innerHTML = header;
      container.prepend(title);
    }

    if (popoverArrow) {
      popoverArrow.className = "popover-arrow";
      container.prepend(popoverArrow);
    }
    container.className = "popover-wrapper";
    popover.prepend(container);
  }

})();
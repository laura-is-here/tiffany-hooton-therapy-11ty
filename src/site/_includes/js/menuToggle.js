if (document) {
  (function() {
    let nav = document.querySelector("#nav");
    let navContent = document.querySelector("#navContent");

    if (nav && navContent) {
      navContent.classList.add("hidden");

      const fragment = document.createDocumentFragment();
      const btn = document.createElement("button");

      btn.classList.add("md:hidden");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "show menu");
      btn.innerHTML = `
    <span class="iconify text-2xl text-gray-700 absolute top-0 right-0 m-4 z-50" data-icon="fa:bars"></span>
    `;

      btn.addEventListener("click", () => {
        if (navContent.classList.contains("hidden")) {
          toggleNav();
          navContent.classList.remove("slideOut");
          navContent.classList.add("slideIn");
          return;
        }
        navContent.classList.remove("slideIn");
        navContent.classList.add("slideOut");
        window.setTimeout(toggleNav, 400);
      });

      function toggleNav() {
        let expanded = btn.getAttribute("aria-expanded") === "true" || false;
        btn.setAttribute("aria-expanded", !expanded);
        navContent.classList.toggle("hidden");
      }

      fragment.appendChild(btn);
      nav.insertBefore(fragment, navContent);
    }
  })();
}

function animateWhenVisible() {
  var targets = document.querySelectorAll(".animateWhenVisible");
  var intersectionObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };
  var observer = new IntersectionObserver(
    onIntersection,
    intersectionObserverOptions
  );
  targets.forEach(q => {
    observer.observe(q);
  });
  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("animated", "fadeInUpSmall");
      }
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
      }
    });
  }
}
animateWhenVisible();

function lazyLoad() {
  var targets = document.querySelectorAll(".lazy-load");
  var intersectionObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  var observer = new IntersectionObserver(
    onIntersection,
    intersectionObserverOptions
  );
  targets.forEach(q => {
    observer.observe(q);
  });

  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.src = entry.target.dataset.src;
        entry.target.classList.remove("lazy-load");
        observer.unobserve(entry.target);
      }
    });
  }
}
lazyLoad();

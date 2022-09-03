function toggleClassesOnIntersection({ target, classNames }) {
  const options = {
    root: document.querySelector("null"),
    threshold: 1,
  };
  const observer = new IntersectionObserver((entries) => {
    classNames.map((className) => {
      entries[0].target.classList.toggle(className, entries[0].isIntersecting);
    });
  }, options);
  observer.observe(target);
}

function addClassesOnIntersection({ target, classNames }) {
  const options = {
    root: document.querySelector("null"),
    threshold: 1,
  };
  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    classNames.map((className) => {
      entries[0].target.classList.add(className);
    });
  }, options);
  observer.observe(target);
}

function performCallbackOnIntersection({ target, callback, once = true }) {
  const options = {
    root: document.querySelector("null"),
    threshold: 1,
  };
  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    callback();
    if (once) {
      observer.unobserve(entries[0].target);
    }
  }, options);
  observer.observe(target);
}

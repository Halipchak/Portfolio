window.addEventListener("scroll", () => {
    let blocks = [...document.querySelectorAll(".container")];
    let block = blocks.filter(item => item.getBoundingClientRect().top - 50 < 0);
    let currentBlock = block[block.length - 1];
  
    document.querySelectorAll(`a.nav__item`).forEach(link => link.classList.remove("nav__item__a"));
    document.querySelector(`a[href='#${currentBlock.id}']`).classList.add("nav__item__a");
  });
  $(".scrollup").on("click", (event) => {
    let target = event.target;
    let href = target.getAttribute('href');
    let block = document.querySelector(href);
    
    $('html, body').animate({
      scrollTop: block.offsetTop
    }, 500);
  });
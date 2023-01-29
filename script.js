function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabMenu li");
  const tabContent = document.querySelectorAll(".js-tabContent section");

  if (tabMenu.length && tabContent.length) {
    // se ambos os ítens existirem, ativem a função abaixo. (lembrando que o length é se tem ítens dentro da array.)
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      // objetivo da função é puxar cada ítem como se fosse uma array, através do index. (lembrando que o index sempre inicia em zero por isso no If já foi incluído o index zero como a forma inicial)
      tabContent.forEach((section) => {
        //esse looping remove sempre todas as classes antes de incluir a class ativo
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      // pra cada item do menu adicione activeTab e ative o index selecionado após o evento de click
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav(); // criou essa função e executou para guardar toda a lógica dentro.

//accordion List
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

//scroll links internos
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    //nessa função diferentemente das outras, é preciso do event porque é necessário previnir o padrão e falar diretamente com os métodos e propriedades do mesmo
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href"); //utiliza o getAttribute para pegar diretamente o href da página sem URL.
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

//forma alternativa
//const topo = section.offsetTop;
// window.scrollTo({ foi criado um objeto
// top: topo,
//behavior: "smooth", faz o scroll ser suave
// });

//forma alternativa 2 (sem scroll suave) poderia ser utilizado o window.scrollTo() onde se coloca os parametros x e y. Dessa forma quando for feito o clique a window vai scrollar até o número de px indicado. para se descobrir a distância de cada ítem para o topo utiliza a propriedade offsetTop.
function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6; // vai pegar 60% do tamanho da tela
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top; // pega várias informações de distâncias do elemento seja bottom, top, right ou left.

        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }

    animaScroll(); // coloca para já ativar a função antes do Scroll para que não dê um bug de não aparecer nada

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimacaoScroll();

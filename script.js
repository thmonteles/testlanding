function factorySubmenuItemsEventHandlers() {
  const submenuItems = document.querySelector(".submenu-items");
  const dropdownContent = document.querySelector(".dropdown-content");
  const dropdown = document.querySelector(".dropdown");
  const dropdownIconEventHandler = () => {
      dropdownContent.classList.toggle("dropdown-content-show");
      dropdownContent.classList.toggle("active");
  }
  // Função para adicionar ou remover a classe .active para ativar ou desativar a sombra
  const submenuClickEventHandler = () => dropdown.classList.toggle("active");
  submenuItems.addEventListener("click", dropdownIconEventHandler);
  submenuItems.addEventListener("click", submenuClickEventHandler);
}


function factoryContentLinkEventHandlers() {
  const contentLink = document.getElementById("content-link");
  const icon = document.querySelector(".icon");
  const contentLinkEventHandler = e => {
      e.preventDefault();
      icon.classList.toggle("rotate");
  }
  contentLink.addEventListener("click", contentLinkEventHandler);
}


function factoryIconEventHandlers() {
  const icon = document.querySelector(".icon");
  const iconClickEventHandler = () => icon.classList.toggle("rotate");
  icon.addEventListener("click", iconClickEventHandler);
}


function factoryArrowsEventHandlers() {
  const arrows = document.querySelectorAll(".arrow");
  const arrowClickEventHandler = (arrow) => {
      const description = arrow.parentElement.nextElementSibling;
      description.style.display = description.style.display === "none" ? "block" : "none";
  }
  arrows.forEach((arrow) => {
      arrow.addEventListener("click", () => arrowClickEventHandler(arrow));
  });
}


function factoryArrowIconsEventHandler() {
  const arrowIcons = document.querySelectorAll(".arrow-icon i");
  const descriptions = document.querySelectorAll(".show-hide-content");
  const hideDescriptionContentBeforeExecuteHandler = (description) => {
      description.style.display = "none";
  }
  descriptions.forEach(hideDescriptionContentBeforeExecuteHandler);
  arrowIcons.forEach((icon, index) => {
      icon.addEventListener("click", function () {
          const description = descriptions[index];
          if (description.style.display === "none" || description.style.display === "") {
              description.style.display = "block";
              icon.classList.remove("ph-caret-down");
              icon.classList.add("ph-caret-up");
          } else {
              description.style.display = "none";
              icon.classList.remove("ph-caret-up");
              icon.classList.add("ph-caret-down");
          }
      });
  });
}


document.addEventListener("DOMContentLoaded", () => {
  factorySubmenuItemsEventHandlers();
  factoryContentLinkEventHandlers();
  factoryIconEventHandlers();
  factoryArrowsEventHandlers();
  factoryArrowIconsEventHandler();
})


function getCarouselCallbackWithConfigs() {
  const activeAutomaticReproduction = true;
  const slidIntervalInMilliseconds = 2000;
  const showNavigationIndicators = true;
  const runCarouselInfinity = true;

  return () => {
      $('.carousel').slick({
          autoplay: activeAutomaticReproduction,
          autoplaySpeed: slidIntervalInMilliseconds,
          dots: showNavigationIndicators,
          infinite: runCarouselInfinity
      });
  }
}

const carouselReadyCallback = getCarouselCallbackWithConfigs()
$(document).ready(carouselReadyCallback);


// TODO remove
document.addEventListener("DOMContentLoaded", function () {
  const icons = document.querySelectorAll(".icon i");

  // Define um array de classes de ícone alternativas
  const alternativeIconClasses = ["ph-caret-down", "ph-caret-up"];


  icons.forEach((icon) => {
      let currentIconIndex = 0;

      const changeIconClassesHandler = () => {
          // Função para alternar entre as classes de ícone
          currentIconIndex = (currentIconIndex + 1) % alternativeIconClasses.length;
          icon.className = `ph ${alternativeIconClasses[currentIconIndex]}`;
      }
      icon.addEventListener("click", changeIconClassesHandler);
  });
});
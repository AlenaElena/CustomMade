let burger = document.querySelector('.burger');
let headerNavList = document.querySelector('.header__nav-list');

burger.addEventListener('click', function(){
  burger.classList.toggle('burger--active');
  headerNavList.classList.toggle('header__nav-list--active');
})

const overlay = document.querySelector('.overlay');

      // header project
const popupProject = document.querySelector('.popupProject');
const openPopupsProject = document.querySelectorAll('.popupProject__open');
const closePopupProject = popupProject.querySelector('.popupProject-close')
openPopupsProject.forEach(openPopup => {
    openPopup.addEventListener('click', function(){
      //openModal(popupProject);
      if (popupProject == null) return;
      
      popupProject.classList.add('popupProject-active');
      overlay.classList.add('overlay-active');

        closePopupProject.addEventListener('click', function(e){
          //closeModal(popupProject);
          e.preventDefault();
          popupProject.classList.remove('popupProject-active');
          overlay.classList.remove('overlay-active');
        })

        overlay.addEventListener('click', function () {
          //closeModal(popupProject);
          popupProject.classList.remove('popupProject-active');
          overlay.classList.remove('overlay-active');
        })
    })

    const openFeedbackProject = popupProject.querySelector('.feedbackProject__open');
    openFeedbackProject.addEventListener('click', function (e) {
        e.preventDefault();
        feedback.classList.add('feedback-active');
        overlay.classList.add('overlay-active');
        popupProject.classList.remove('popupProject-active');
    })
});

      // services-design-page .options
const options = document.querySelectorAll('.options');
options.forEach(el => {
    const popupOptions = el.querySelector('.popupOptions');
    const openPopupOptions = el.querySelectorAll('.popupOptions__open');
    openPopupOptions.forEach(elem => {
      elem.addEventListener('click', function (){
        popupOptions.classList.add('popupOptions-active');
        overlay.classList.add('overlay-active');
      });
    });
    const closePopupOptions = popupOptions.querySelector('.popupOptions-close');
    closePopupOptions.addEventListener('click', function (){
      popupOptions.classList.remove('popupOptions-active');
      overlay.classList.remove('overlay-active');
    });
    overlay.addEventListener('click', function () {
      popupOptions.classList.remove('popupOptions-active');
      overlay.classList.remove('overlay-active');
    })
        
    const openFeedback = popupOptions.querySelector('.openFeedback');
    openFeedback.addEventListener('click', function (e) {
      e.preventDefault();
      feedback.classList.add('feedback-active');
      overlay.classList.add('overlay-active');
      popupOptions.classList.remove('popupOptions-active');
    }) 
});

      // index .mention
const mention = document.querySelectorAll('.mention');
mention.forEach(el => {
  const popupQuestion = el.querySelector('.popupQuestion');
  const closePopupQuestion = el.querySelector('.popupQuestion-close')
  const openPopupsQuestion = el.querySelector('.popupQuestion__open');
  openPopupsQuestion.addEventListener('click', function(){
      if (popupQuestion == null) return;
      popupQuestion.classList.add('popupQuestion-active');
      overlay.classList.add('overlay-active');

      closePopupQuestion.addEventListener('click', function(e){
        e.preventDefault();
        popupQuestion.classList.remove('popupQuestion-active');
        overlay.classList.remove('overlay-active');
      });

      overlay.addEventListener('click', function () {
        popupQuestion.classList.remove('popupQuestion-active');
        overlay.classList.remove('overlay-active');
      })
  });

  const openFeedbackQuestion = popupQuestion.querySelector('.feedbackQuestion__open');
  openFeedbackQuestion.addEventListener('click', function (e) {
      e.preventDefault();
      feedback.classList.add('feedback-active');
      overlay.classList.add('overlay-active');
      popupQuestion.classList.remove('popupQuestion-active');
  })
});

      // services-furniture-page servicesIntro
const furniture = document.querySelectorAll('.furniture');
furniture.forEach(el => {
  const popupFurniture = el.querySelector('.popupFurniture');
  const closePopupFurniture = el.querySelector('.popupFurniture-close')
  const openPopupFurniture = el.querySelector('.popupFurniture__open');
  openPopupFurniture.addEventListener('click', function(){
      popupFurniture.classList.add('popupFurniture-active');
      overlay.classList.add('overlay-active');

      closePopupFurniture.addEventListener('click', function(e){
        e.preventDefault();
        popupFurniture.classList.remove('popupFurniture-active');
        overlay.classList.remove('overlay-active');
      });

      overlay.addEventListener('click', function () {
        popupFurniture.classList.remove('popupFurniture-active');
        overlay.classList.remove('overlay-active');
      })
  });

  const openFeedbackFurniture = popupFurniture.querySelector('.feedbackFurniture__open');
  openFeedbackFurniture.addEventListener('click', function (e) {
      e.preventDefault();
      feedback.classList.add('feedback-active');
      overlay.classList.add('overlay-active');
      popupFurniture.classList.remove('popupFurniture-active');
  })
});

      // services-decoration-page .servicesIntro
const decoration = document.querySelectorAll('.decoration');
decoration.forEach(el => {
  const popupDecoration = el.querySelector('.popupDecoration');
  const closePopupDecoration = el.querySelector('.popupDecoration-close')
  const openPopupDecoration = el.querySelector('.popupDecoration__open');
  openPopupDecoration.addEventListener('click', function(){
      popupDecoration.classList.add('popupDecoration-active');
      overlay.classList.add('overlay-active');

      closePopupDecoration.addEventListener('click', function(e){
        e.preventDefault();
        popupDecoration.classList.remove('popupDecoration-active');
        overlay.classList.remove('overlay-active');
      });

      overlay.addEventListener('click', function () {
        popupDecoration.classList.remove('popupDecoration-active');
        overlay.classList.remove('overlay-active');
      })
  });

  const openFeedbackDecoration = popupDecoration.querySelector('.feedbackDecoration__open');
  openFeedbackDecoration.addEventListener('click', function (e) {
      e.preventDefault();
      feedback.classList.add('feedback-active');
      overlay.classList.add('overlay-active');
      popupDecoration.classList.remove('popupDecoration-active');
  })
});

      // services-supervision-page .servicesIntro
const supervision = document.querySelectorAll('.supervision');
supervision.forEach(el => {
  const popupSupervision = el.querySelector('.popupSupervision');
  const closePopupSupervision = el.querySelector('.popupSupervision-close')
  const openPopupSupervision = el.querySelector('.popupSupervision__open');
  openPopupSupervision.addEventListener('click', function(){
      popupSupervision.classList.add('popupSupervision-active');
      overlay.classList.add('overlay-active');

      closePopupSupervision.addEventListener('click', function(e){
        e.preventDefault();
        popupSupervision.classList.remove('popupSupervision-active');
        overlay.classList.remove('overlay-active');
      });

      overlay.addEventListener('click', function () {
        popupSupervision.classList.remove('popupSupervision-active');
        overlay.classList.remove('overlay-active');
      })
  });

  const openFeedbackSupervision = popupSupervision.querySelector('.feedbackSupervision__open');
  openFeedbackSupervision.addEventListener('click', function (e) {
      e.preventDefault();
      feedback.classList.add('feedback-active');
      overlay.classList.add('overlay-active');
      popupSupervision.classList.remove('popupSupervision-active');
  })
});

      // services-coordination-page .servicesIntro
const coordination = document.querySelectorAll('.coordination');
coordination.forEach(el => {
  const popupCoordination = el.querySelector('.popupCoordination');
  const closePopupCoordination = el.querySelector('.popupCoordination-close')
  const openPopupCoordination = el.querySelector('.popupCoordination__open');
  openPopupCoordination.addEventListener('click', function(){
      popupCoordination.classList.add('popupCoordination-active');
      overlay.classList.add('overlay-active');

      closePopupCoordination.addEventListener('click', function(e){
        e.preventDefault();
        popupCoordination.classList.remove('popupCoordination-active');
        overlay.classList.remove('overlay-active');
      });

      overlay.addEventListener('click', function () {
        popupCoordination.classList.remove('popupCoordination-active');
        overlay.classList.remove('overlay-active');
      })
  });

  const openFeedbackCoordination = popupCoordination.querySelector('.feedbackCoordination__open');
  openFeedbackCoordination.addEventListener('click', function (e) {
      e.preventDefault();
      feedback.classList.add('feedback-active');
      overlay.classList.add('overlay-active');
      popupCoordination.classList.remove('popupCoordination-active');
  })
});

      // services-finishingWorks-page .servicesIntro
const finishingWorks = document.querySelectorAll('.finishingWorks');
finishingWorks.forEach(el => {
  const popupFinishingWorks = el.querySelector('.popupFinishingWorks');
  const closePopupFinishingWorks = el.querySelector('.popupFinishingWorks-close')
  const openPopupFinishingWorks = el.querySelector('.popupFinishingWorks__open');
  openPopupFinishingWorks.addEventListener('click', function(){
      popupFinishingWorks.classList.add('popupFinishingWorks-active');
      overlay.classList.add('overlay-active');

      closePopupFinishingWorks.addEventListener('click', function(e){
        e.preventDefault();
        popupFinishingWorks.classList.remove('popupFinishingWorks-active');
        overlay.classList.remove('overlay-active');
      });

      overlay.addEventListener('click', function () {
        popupFinishingWorks.classList.remove('popupFinishingWorks-active');
        overlay.classList.remove('overlay-active');
      })
  });

  const openFeedbackFinishingWorks = popupFinishingWorks.querySelector('.feedbackFinishingWorks__open');
  openFeedbackFinishingWorks.addEventListener('click', function (e) {
      e.preventDefault();
      feedback.classList.add('feedback-active');
      overlay.classList.add('overlay-active');
      popupFinishingWorks.classList.remove('popupFinishingWorks-active');
  })
});

      // services-design-page .servicesIntro
const design = document.querySelectorAll('.design');
design.forEach(el => {
  const popupDesign = el.querySelector('.popupDesign');
  const closePopupDesign = el.querySelector('.popupDesign-close')
  const openPopupDesign = el.querySelector('.popupDesign__open');
  openPopupDesign.addEventListener('click', function(){
      popupDesign.classList.add('popupDesign-active');
      overlay.classList.add('overlay-active');

      closePopupDesign.addEventListener('click', function(e){
        e.preventDefault();
        popupDesign.classList.remove('popupDesign-active');
        overlay.classList.remove('overlay-active');
      });

      overlay.addEventListener('click', function () {
        popupDesign.classList.remove('popupDesign-active');
        overlay.classList.remove('overlay-active');
      })
  });

  const openFeedbackDesign = popupDesign.querySelector('.feedbackDesign__open');
  openFeedbackDesign.addEventListener('click', function (e) {
      e.preventDefault();
      feedback.classList.add('feedback-active');
      overlay.classList.add('overlay-active');
      popupDesign.classList.remove('popupDesign-active');
  })
});

      // services-decoration-page,services-finishingWorks-page, services-page-supervision, services-page-decoration, services-page-coordination services-page-furniture, portfolio-project-page .servicesIntro
const orderConsultation = document.querySelectorAll('.orderConsultation')
orderConsultation.forEach(el => {
  const consultation = el.querySelector('.consultation')
  const openConsultation = el.querySelector('.consultation__open');
  const formConsultation = el.querySelector('.orderConsultation__box-form')
  openConsultation.addEventListener('click', function(e){
    e.preventDefault();
    consultation.classList.add('consultation-active');
    formConsultation.classList.add('orderConsultation__box-form--hidden');
  });

  document.querySelector('.consultation__close').addEventListener('click', function(){
    consultation.classList.remove('consultation-active');
    formConsultation.classList.remove('orderConsultation__box-form--hidden');
  })
});

      // services-design-page .composition
const orderComposition = document.querySelectorAll('.composition__box-order')
orderComposition.forEach(el => {
  const composition = el.querySelector('.consultation')
  const openComposition = el.querySelector('.composition__open');
  const formComposition = el.querySelector('.composition__box-order__form')
  openComposition.addEventListener('click', function(e){
    e.preventDefault();
    composition.classList.add('consultation-active');
    formComposition.classList.add('composition__box-order__form--hidden');
  });

  document.querySelector('.consultation__close').addEventListener('click', function(){
    composition.classList.remove('consultation-active');
    formComposition.classList.remove('composition__box-order__form--hidden');
  })
});

    // planning-page .servicesIntro
const planning = document.querySelectorAll('.planning');
planning.forEach(el => {
  const popupPlanning = el.querySelector('.popupPlanning');
  const closePopupPlanning = el.querySelector('.popupPlanning-close')
  const openPopupPlanning = el.querySelector('.popupPlanning__open');
  openPopupPlanning.addEventListener('click', function(){
      popupPlanning.classList.add('popupPlanning-active');
      overlay.classList.add('overlay-active');

      closePopupPlanning.addEventListener('click', function(e){
        e.preventDefault();
        popupPlanning.classList.remove('popupPlanning-active');
        overlay.classList.remove('overlay-active');
      });

      overlay.addEventListener('click', function () {
        popupPlanning.classList.remove('popupPlanning-active');
        overlay.classList.remove('overlay-active');
      })
  });

  const openFeedbackPlanning = popupPlanning.querySelector('.feedbackPlanning__open');
  openFeedbackPlanning.addEventListener('click', function (e) {
      e.preventDefault();
      feedback.classList.add('feedback-active');
      overlay.classList.add('overlay-active');
      popupPlanning.classList.remove('popupPlanning-active');
  })
});

      
const feedback = document.querySelector('.feedback');
const closeFeedback = document.querySelector('.feedback__close');

      // services-design-page .yourProject
const yourProject = document.querySelectorAll('.yourProject')
yourProject.forEach(el => {
  const openFeedbackYourProject = el.querySelector('.feedbackYourProject__open');
  openFeedbackYourProject.addEventListener('click', function (e) {
      e.preventDefault();
      feedback.classList.add('feedback-active');
      overlay.classList.add('overlay-active');
  })
});

closeFeedback.addEventListener('click', function(){
  overlay.classList.remove('overlay-active');
  feedback.classList.remove('feedback-active');
})

overlay.addEventListener('click', function(){
  overlay.classList.remove('overlay-active');
  feedback.classList.remove('feedback-active');
})

      // index, services-page-design, about-page, portfolio-page, portfolio-progect-page .portfolio
const tabItems = document.querySelectorAll('.portfolio__top-tab');
const tabContents = document.querySelectorAll('.portfolio__content-tab');
tabItems.forEach(tabItem => {
    tabItem.addEventListener("click", function(e){
    e.preventDefault();
    let activeTabAttr = e.target.getAttribute("data-path");

    for (let j = 0; j < tabItems.length; j++) {
      let contentAttr = tabContents[j].getAttribute("data-target");

      if (activeTabAttr === contentAttr) {
        tabItems[j].classList.add("portfolio__top-tab--active");
        tabContents[j].classList.add("portfolio__content-tab--active"); 
      } else {
        tabItems[j].classList.remove("portfolio__top-tab--active");
        tabContents[j].classList.remove("portfolio__content-tab--active");
      }
    };
  });
});

      // index, .realization
const realizationSectionHome = document.querySelectorAll('.realization--home');
realizationSectionHome.forEach(el => {
  const realizationHome = el.querySelector('.realizationHome')
  realizationHome.addEventListener('mouseover', function(){
    this.classList.add('realizationHome-active')
  });
});

      // services-furniture-page, .realization
const realizationSectionFurniture = document.querySelectorAll('.realization--furniture');
realizationSectionFurniture.forEach(el => {
  const realizationFurniture = el.querySelector('.realizationFurniture')
  realizationFurniture.addEventListener('mouseover', function(){
    this.classList.add('realizationFurniture-active')
  });
});

      // planning-page, .realization
const realizationSectionPlanning = document.querySelectorAll('.realization--planning');
realizationSectionPlanning.forEach(el => {
  const realizationPlanning = el.querySelector('.realizationPlanning')
  realizationPlanning.addEventListener('mouseover', function(){
    this.classList.add('realizationPlanning-active')
  });
});

      // services-page-design, .realization
const realizationSectionDesign = document.querySelectorAll('.realization--design');
realizationSectionDesign.forEach(el => {
  const realizationDesign = el.querySelector('.realizationDesign')
  realizationDesign.addEventListener('mouseover', function(){
    this.classList.add('realizationDesign-active')
  });
});


const unitSwiper = new Swiper(".unitSwiper", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const multipleSwiper = new Swiper(".multipleSwiper", {
  slidesPerView: 4,
  breakpoints: {
    1230: {
      slidesPerView: 4,
    },
    1050: {
      slidesPerView: 3,
    },
    650: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

      // blog .blog
const blogItems = document.querySelectorAll('.blog__content-item');
blogItems.forEach(el => {
  const blogOpen = el.querySelector('.btn__open');
  const blogClose = el.querySelector('.btn__close');
  const blogContent = el.querySelector('.blog__content-info');
  blogOpen.addEventListener('click', function () {
    blogOpen.classList.add('btn__open--active');
    blogClose.classList.add('btn__close--active');
    blogContent.classList.add('blog__content-info--visible');
  })
  blogClose.addEventListener('click', function () {
    blogOpen.classList.remove('btn__open--active');
    blogClose.classList.remove('btn__close--active');
    blogContent.classList.remove('blog__content-info--visible');
  })
});



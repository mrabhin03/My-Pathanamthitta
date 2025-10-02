const place=[
    {
        Title:"Aranmula",
        Details:"Aranmula is a heritage village in Pathanamthitta, Kerala, famous for its ancient Aranmula Parthasarathy Temple, the unique Aranmula Kannadi (metal mirror), and the vibrant Vallamkali (snake boat race) held during Onam. Known for its rich culture, art, and traditions, Aranmula is a spiritual and cultural hub that attracts visitors from around the world."
    },{
        Title:"Adavi",
        Details:"Adavi is a scenic eco-tourism spot on the banks of the Kallar River, known for its lush greenery, bamboo groves, and unique coracle boating experience. Nestled in the Konni region of Pathanamthitta, it offers a tranquil escape into nature, making it a perfect destination for those seeking peace, adventure, and the charm of Kerala’s forests."
    },
    {
        Title:"Kakki Dam",
        Details:"Kakki Dam, located in the Pathanamthitta district, is a scenic hydroelectric dam surrounded by verdant forests and hills. Known for its tranquil reservoir and breathtaking views, it is a popular spot for nature lovers and photographers seeking peace and natural beauty."
    }
];
const Mainplace=["Kakki Dam","Adavi","Charalkunnu Hills"];
const PlaceTitle=document.getElementById("Place-Title");
const PlaceDesc=document.getElementById("Place-Desc");
const MainPlaceName=document.getElementById("Place-Name");
var coverflowSettings = {
    stretch: 50,
    depth: 300,
    modifier: 2
  };

  if(window.innerWidth<550){
    coverflowSettings.stretch=15
  }
  
  var Slider = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 100,
    lazy: {
      loadPrevNext: true,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: coverflowSettings.stretch,
      depth: coverflowSettings.depth,
      modifier: coverflowSettings.modifier,
      slideShadows: false
    },
    pagination: {
      el: '.theobjects',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
        let activeIndex = this.realIndex;
        let activeSlide = this.slides[ this.activeIndex ]; 
        ChangePlace(activeIndex, activeSlide);
        }
    }
  });
  var Slider2 = new Swiper('.swiper2', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    lazy: {
      loadPrevNext: true,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 1,
      depth: 5,
      modifier: 2,
      slideShadows: false
    },
    pagination: {
      el: '.MainImageOptions',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper2-button-next',
      prevEl: '.swiper2-button-prev',
    },
    on: {
        slideChange: function () {
        let activeIndex = this.realIndex;
        let activeSlide = this.slides[ this.activeIndex ]; 
        MainChangePlace(activeIndex, activeSlide);
        }
    }
  });
  function MainChangePlace(activeIndex,activeSlide){
    MainPlaceName.innerHTML=Mainplace[activeIndex]
  }

  function ChangePlace(activeIndex,activeSlide){
    PlaceTitle.innerHTML=place[activeIndex].Title;
    PlaceDesc.innerHTML=place[activeIndex].Details;
  }

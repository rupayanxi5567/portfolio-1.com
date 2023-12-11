// * Responsive Navbar Component Starts

let mobile_nav_btn = document.querySelector(".mobile_nav_btn");
let mob_nav_icon = document.querySelector(".mob_nav_icon");
let headerClass = document.querySelector(".header");

mobile_nav_btn.addEventListener("click", () => {
  headerClass.classList.toggle("active");

})




// * Responsive Navbar Component Ends

// ! Portfolio Tab Component

let pBtns = document.querySelector(".pBtns");
let pBtn = document.querySelectorAll(".pBtn");
let proj_img_elem_imgOverlay = document.querySelectorAll(".imgOverlay");
let pBtnAll = document.querySelector(".pBtnAll");
let pBtnAllId0 = document.getElementById("pBtnAllId0");
let pBtnAllId1 = document.getElementById("pBtnAllId1");
let pBtnAllId2 = document.getElementById("pBtnAllId2");
let pBtnAllId3 = document.getElementById("pBtnAllId3");
let section_footer = document.querySelector(".section_footer");
let heroSection = document.querySelector(".sectionHero");
let header = document.querySelector("header");
let counterNumber = document.querySelectorAll(".counterNumber");
let body = document.querySelector("body")
let darkLink = document.getElementById("darkLink") // ! ======================= main mal ===========================================
let main = document.querySelector("main")
let heroHeadings = document.querySelectorAll(".heroHeadings")
let heroPara = document.querySelectorAll(".heroPara")
let section = document.querySelector("section")
let navbarLink = document.querySelectorAll(".navbarLink")
let navbarLists = document.querySelectorAll(".navbarLists")
let sectionHeroImage = document.querySelector(".sectionHeroImage")
let rupHeading = document.getElementById("rupHeading")
let rupPara = document.getElementById("rupPara")
let serviceHead = document.getElementById("serviceHead")
let service_Para_dark_light = document.getElementById("service_Para_dark_light")
// let dark_light_services = document.querySelector(".dark_light_services");
let servHead1 = document.getElementById("servHead1")
let servpara1 = document.getElementById("servpara1")
let servHead2 = document.getElementById("servHead2")
let servPara2 = document.getElementById("servPara2")
let servHead3 = document.getElementById("servHead3")
let servPara3 = document.getElementById("servPara3")
let servHead4 = document.getElementById("servHead4")
let servPara4 = document.getElementById("servPara4")
let servHead5 = document.getElementById("servHead5")
let servPara5 = document.getElementById("servPara5")
let servHead6 = document.getElementById("servHead6")
let servPara6 = document.getElementById("servPara6")
let contactHead = document.getElementById("contactHead")
let happy_client_head = document.getElementById("happy_client_head")
let pandey_bg = document.getElementById("pandey_bg")
let foty_bg = document.getElementById("foty_bg")
let akshit_bg = document.getElementById("akshit_bg")
let anuvab_bg = document.getElementById("anuvab_bg")
let purnendu_bg = document.getElementById("purnendu_bg")
let khan_bg = document.getElementById("khan_bg")
let dipika_bg = document.getElementById("dipika_bg")
let c_bg = document.getElementById("c_bg")
let d_bg = document.getElementById("d_bg")
let sec_biodata = document.getElementById("sec_biodata")
let bio_data_head = document.getElementById("bio_data_head")
let bio_data_para = document.getElementById("bio_data_para")
let bio_data_para2 = document.getElementById("bio_data_para2")
let design_head = document.getElementById("design_head")
let design_para = document.getElementById("design_para")
let h_c_head = document.getElementById("h_c_head")
let h_c_para = document.getElementById("h_c_para")
let js_head = document.getElementById("js_head")
let js_para = document.getElementById("js_para")
let react_head = document.getElementById("react_head")
let react_para = document.getElementById("react_para")
let tail_head = document.getElementById("tail_head")
let tail_para = document.getElementById("tail_para")
let pthonHead = document.getElementById("pthonHead")
let pthonPara = document.getElementById("pthonPara")
let bioProgressBar_l_d_1 = document.getElementById("bioProgressBar_l_d_1")
let bioProgressBar_l_d_2 = document.getElementById("bioProgressBar_l_d_2")
let bioProgressBar_l_d_3 = document.getElementById("bioProgressBar_l_d_3")
let bioProgressBar_l_d_4 = document.getElementById("bioProgressBar_l_d_4")
let bioProgressBar_l_d_5 = document.getElementById("bioProgressBar_l_d_5")
let bioProgressBar_l_d_6 = document.getElementById("bioProgressBar_l_d_6")
let port_section = document.getElementById("port_section")
let port_sec_head = document.getElementById("port_sec_head")
let port_sec_para = document.getElementById("port_sec_para")
let d_l_header = document.getElementById("d_l_header")
let nav_1 = document.getElementById("nav_1")
let nav_2 = document.getElementById("nav_2")
let nav_3 = document.getElementById("nav_3")
let nav_4 = document.getElementById("nav_4")
let nav_5 = document.getElementById("nav_5")
let sec_hero_about = document.getElementById("sec_hero_about")





darkLink.addEventListener("click", () => {
  let currentBackgroundColor = window.getComputedStyle(body).backgroundColor;
  // let sec_hero_about_bg = window.getComputedStyle(sec_hero_about).backgroundColor;


  if (currentBackgroundColor === "rgb(33, 37, 0)" ||  currentBackgroundColor === "black" ) {
    body.style.backgroundColor = "white";
    // sec_hero_about.style.backgroundColor = "white"; // !============================cgange
    darkLink.style.color = "rgb(33,37,0)";
    rupHeading.style.color = "black";
    rupPara.style.color = "black";
    serviceHead.style.color = "black";
    service_Para_dark_light.style.color = "black";
    servHead1.style.color = "black";
    servpara1.style.color = "black";
    servHead1.style.color = "black";
    servpara1.style.color = "black";
    servHead2.style.color = "black";
    servPara2.style.color = "black";
    servHead3.style.color = "black";
    servPara3.style.color = "black";
    servHead4.style.color = "black";
    servPara4.style.color = "black";
    servHead5.style.color = "black";
    servPara5.style.color = "black";
    servHead6.style.color = "black";
    servPara6.style.color = "black";
    contactHead.style.color = "black";
    happy_client_head.style.color = "black";
    pandey_bg.style.backgroundColor = "grey";
    // pandey_bg.style.color = "white";
    foty_bg.style.backgroundColor = "grey"; 
    akshit_bg.style.backgroundColor = "grey"
    anuvab_bg.style.backgroundColor = "grey"
    purnendu_bg.style.backgroundColor = "grey"
    khan_bg.style.backgroundColor = "grey"
    dipika_bg.style.backgroundColor = "grey"
    c_bg.style.backgroundColor = "white"
    d_bg.style.backgroundColor = "white"
    sec_biodata.style.backgroundColor = "white"
    bio_data_head.style.color = "black";
    bio_data_para.style.color = "black";
    bio_data_para2.style.color = "black";
    design_head.style.color = "black";
    design_para.style.color = "black";
    h_c_head.style.color = "black";
    h_c_para.style.color = "black";
    js_head.style.color = "black";
    js_para.style.color = "black";
    react_head.style.color = "black";
    react_para.style.color = "black";
    tail_head.style.color = "black";
    tail_para.style.color = "black";
    pthonHead.style.color = "black";
    pthonPara.style.color = "black";
    bioProgressBar_l_d_1.style.backgroundColor = "grey";
    bioProgressBar_l_d_2.style.backgroundColor = "grey";
    bioProgressBar_l_d_3.style.backgroundColor = "grey";
    bioProgressBar_l_d_4.style.backgroundColor = "grey";
    bioProgressBar_l_d_5.style.backgroundColor = "grey";
    bioProgressBar_l_d_6.style.backgroundColor = "grey";
    port_section.style.backgroundColor = "white";
    port_sec_head.style.color = "black";
    port_sec_para.style.color = "black";
    d_l_header.style.backgroundColor = "white";
    nav_1.style.color = "black";
    nav_2.style.color = "black";
    nav_3.style.color = "black";
    nav_4.style.color = "black";
    nav_5.style.color = "black";
  } 
  
  
  
  
  
  
  else{
    body.style.backgroundColor = "rgb(33,37,0) ";
    // sec_hero_about.style.backgroundColor = "rgb(33,37,41)"; // !========================================= change
    darkLink.style.color = "white";
    rupHeading.style.color = " white ";
    rupPara.style.color = " white ";
    serviceHead.style.color = " white ";
    service_Para_dark_light.style.color = " white ";
    servHead1.style.color = " white ";
    servpara1.style.color = " white ";
    servHead1.style.color = " white ";
    servpara1.style.color = " white ";
    servHead2.style.color = " white ";
    servPara2.style.color = " white ";
    servHead3.style.color = " white ";
    servPara3.style.color = " white ";
    servHead4.style.color = " white ";
    servPara4.style.color = " white ";
    servHead5.style.color = " white ";
    servPara5.style.color = " white ";
    servHead6.style.color = " white ";
    servPara6.style.color = " white ";
    contactHead.style.color = " white ";
    happy_client_head.style.color = " white ";
    pandey_bg.style.backgroundColor = " white ";
    pandey_bg.style.color = " white ";
    foty_bg.style.backgroundColor = " white "; 
    akshit_bg.style.backgroundColor = " white "
    anuvab_bg.style.backgroundColor = " white "
    purnendu_bg.style.backgroundColor = " white "
    khan_bg.style.backgroundColor = " white "
    dipika_bg.style.backgroundColor = " white "
    c_bg.style.backgroundColor = " white "
    d_bg.style.backgroundColor = " white "
    sec_biodata.style.backgroundColor = " rgb(33,37,0) "
    bio_data_head.style.color = " white ";
    bio_data_para.style.color = " white ";
    bio_data_para2.style.color = " white ";
    design_head.style.color = " white ";
    design_para.style.color = " white ";
    h_c_head.style.color = " white ";
    h_c_para.style.color = " white ";
    js_head.style.color = " white ";
    js_para.style.color = " white ";
    react_head.style.color = " white ";
    react_para.style.color = " white ";
    tail_head.style.color = " white ";
    tail_para.style.color = " white ";
    pthonHead.style.color = " white ";
    pthonPara.style.color = " white ";
    bioProgressBar_l_d_1.style.backgroundColor = "white";
    bioProgressBar_l_d_2.style.backgroundColor = "white";
    bioProgressBar_l_d_3.style.backgroundColor = "white";
    bioProgressBar_l_d_4.style.backgroundColor = "white";
    bioProgressBar_l_d_5.style.backgroundColor = "white";
    bioProgressBar_l_d_6.style.backgroundColor = "white";
    port_section.style.backgroundColor = "rgb(33,37,0)";
    port_sec_head.style.color = " white ";
    port_sec_para.style.color = " white ";
    d_l_header.style.backgroundColor = "rgb(33,37,0)";
    nav_1.style.color = " white ";
    nav_2.style.color = " white ";
    nav_3.style.color = " white ";
    nav_4.style.color = " white ";
    nav_5.style.color = " white ";
}









})





pBtns.addEventListener("click", (e) => {
  let pBtnClicked = e.target;

  // || ! pBtnClicked.classList.contains("pBtnAll")

if (  !pBtnClicked.classList.contains("pBtn") && !pBtnClicked.classList.contains("pBtnAll")) {
  return;
}
  pBtn.forEach((currButt) => {
    currButt.classList.remove("pBtnActive");

    pBtnClicked.classList.add("pBtnActive");

    let btnNum = pBtnClicked.dataset.btnNum;

    // !console.log(btnNum)

    let imageActive = document.querySelectorAll(`.pBtn${btnNum}`);

    proj_img_elem_imgOverlay.forEach((currImg) => {
      currImg.classList.add("p-image-not-active");
    });

    imageActive.forEach((currImg) => {
      currImg.classList.remove("p-image-not-active");
    });

    if (pBtnClicked.id === "pBtnAllId0") {
      proj_img_elem_imgOverlay.forEach((currImg) => {
        currImg.classList.remove("p-image-not-active");
      });
    }
  });
});

// * Testimonials one Startrs

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  // slidesPerGroup: 5, // Number of slides in one group
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// * Testimonials one Ends

// !scroll to top buton starts

let scroll_element_Top = document.createElement("div");

scroll_element_Top.classList.add("scroll_top_style");

scroll_element_Top.innerHTML = `<i class="fa-solid fa-arrow-up scroll_top"></i>`;

section_footer.after(scroll_element_Top);

scroll_element_Top.addEventListener(
  "click",
  () => {
    header.scrollIntoView({ behavior: "smooth" });
  }

  // !scroll to top buton ends
);



// *animating the numbers starts

let speed = 500;

counterNumber.forEach( (countNum) => {


let updateNum = () => {
  let targetNumber = parseInt(countNum.dataset.num);
  // console.log(targetNumber);
  let initialNum = parseInt(countNum.innerHTML)
  // console.log(initialNum);

  let increament = Math.trunc(targetNumber/speed)
  // console.log(increament)

  if (targetNumber > initialNum) {

    countNum.innerHTML = `${initialNum + increament}+`;

    setTimeout( updateNum , 10);
    
  }


}


updateNum()

} )


// *animating the numbers ends





//  * media query of the slidebar starts


let myJsSlide = (widthOfSlide) => {
  if (widthOfSlide.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      // slidesPerGroup: 5, // Number of slides in one group
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      // slidesPerGroup: 5, // Number of slides in one group
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}



let widthOfSlide = window.matchMedia("(max-width: 650px)")

myJsSlide(widthOfSlide)

widthOfSlide.addEventListener("change", myJsSlide )


//  * media query of the slidebar ends
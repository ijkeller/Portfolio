if (typeof $ == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file properly!')};



$( "#hamburger").on("click", function() {
  console.log("hamburger click");
  $("#hb_links").toggleClass("show");
})


const mediaQuery = window.matchMedia("(min-width: 768px)")

const $projectsExtend = function() {
  if (mediaQuery.matches) {
    // Then trigger an alert
  console.log("(min-width: 768px) + 'project' clicked");
  $(".skills-list-media").css("display: none;");
  $(".projects_images_media").css("display: inline-block;");
}}

const $skillsExtend = function() {
  if (mediaQuery.matches) {
  // Then trigger an alert
  console.log("(min-width: 768px) + 'skills' clicked");
  $(".projects_images_media").css("display: none;");
  $(".skills-list-media").css("display: flex;");
}}

$("#skillsTitle").on("click", $skillsExtend);

$("#projectsTitle").on("click", $projectsExtend);















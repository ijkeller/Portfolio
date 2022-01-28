if (typeof $ == 'undefined'){
    console.log('oops! I still have to link my jQuery properly!');
  } else {console.log('I did it! I linked jQuery and this js file properly!')};



$( "#hamburger").on("click", function() {
  console.log("hamburger click");
  $("#hb_links").toggleClass("show");
})


const mediaQuery = window.matchMedia("(min-width: 768px)");

const $projectsExtend = function() {
  if (mediaQuery.matches) {
    // Then trigger an alert
  console.log("(min-width: 768px) + 'project' clicked");
  $("#skills-list-media").toggleClass("skills_display");
  $("#projects_images_media").toggleClass("projects_display");
}}

const $skillsExtend = function() {
  if (mediaQuery.matches) {
  // Then trigger an alert
  console.log("(min-width: 768px) + 'skills' clicked");
  $("#projects_images_media").toggleClass("projects_display");
  $("#skills-list-media").toggleClass("skills_display");
}}

$("#skillsTitle").on("click", $skillsExtend);

$("#projectsTitle").on("click", $projectsExtend);















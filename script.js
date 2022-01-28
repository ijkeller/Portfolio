// if (typeof $ == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file properly!')};



$( "#hamburger").on("click", function() {
  console.log("hamburger click");
  $("#hb_links").toggleClass("show");
});



const $projectsExtend = function() {
  console.log("'project' clicked");
  $("#projects_images_media").toggleClass("projects_hide");
};

const $skillsExtend = function() {
  console.log("'skills' clicked");
  $("#skills-list-media").toggleClass("skills_hide");
};


$("#projectsTitle").on("click", $projectsExtend);

$("#skillsTitle").on("click", $skillsExtend);













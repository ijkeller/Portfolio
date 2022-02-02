

# Project Overview






### Project Schedule
---------------------



| Day   | Deliverable 	                               | Status      |
| ----- | -------------------------------------------- | ------------|
| Day 1 | Project Description 	                       | Complete    |
| Day 1 | Wireframes / Priority Matrix / Timeline      | Complete    |
| Day 3 | Core Application Structure (HTML, CSS, etc.) | Working     |
| Day 4 | MVP & Bug Fixes                              | Incomplete  |
| Day 5 | Final Touches 	                           | Incomplete  |
| Day 6 | Present 	                                   | Incomplete  |



---------------------------
---------------------------





### Project Description
---------------------

I'd like to make a one page website that the user doesn't have to move from.  The full version will have buttons with panels that pop out with all of the different ellements of the webpage [(Steel-CSS Zen Garden](http://csszengarden.com/219/)).  The mobile version will need to be even more simply designed.  It will either have a dropdown menu with the options that open in the current page, or it may need to have the user scroll to the different headings.  I will need to work with this to find out which will work for the project.  I would like a simple and somewhat cartoony design with few colors in both versions ([Matt Farley Portfolio](https://mattfarley.ca/)).  It will be mostly greyscale with one color for accent.  I would also like to look into using multiple background images to give a layered depth ([Steel-CSS Zen Garden](http://csszengarden.com/219/)).



#### Elements to include

* Who I am - About me
* Relevant Skills
    * html5
    * css
    * javaScript
    * jQuery

* Projects
* Links - Linked in, Github, Twitter, Email
    * LinkedIn
    * Github
    * Twitter
    * E-mail
* Resume button

#### Requirements
* HTML and CSS using best practices
* Grid and Flexbox
* Mobile first and then tablet and desktop responsive
* Must implement javascript to extend functionality, use at least 1 of the following.
    * AJAX
    * Animations
    * Javascript Logic
    * jQuery interations
* Be deployed and accessible online via Github



#### Inspiring Developer Portfolios

* [Bruno Simon](https://bruno-simon.com/)
* [Denise Chandler](https://denisechandler.com/)
* [Brittany Chiang](https://brittanychiang.com/)
* [Robb Owen](https://robbowen.digital/)



### Wireframes
---------------------

![Mobile Wireframe](wireframes_mobile.png "Mobile Wireframe")


![Tablet/Computer Wireframe](wireframes_larger_frames.png "Tablet/Computer Wireframe")







### Time/Priority Matrix
---------------------

* Responsive page for mobile
* Page for tablet and computer
* Who am I
* Work history relevant points
* relevant Skills
* Projects
* Links
* css
* javascript




### Minimum Viable Product (MVP)/Post-MVP
---------------------






##### MVP

* Responsive page for mobile
* Page for tablet and computer
* Who am I
* Work history relevant points
* relevant Skills
* Projects
* Links
* css
* javascript
* jquery popouts

##### Post-MVP

* additional css





### Functional Components
---------------------


##### MVP

| Component          | Priority | Estimated Time | Actual Time |
| ------------------ | -------- | ---------------| ----------- |
| Html -writing divs |     H    |        2hrs    | pretty close|
| header             |     H    |        30 min  | ended up working on the grid much longer|
| Hamburger menu     |     H    |        1 hr    | roughly 2 hrs to finally complete|
| links              |     H    |        1 hr    | closer, roughly 1-2 hrs|
| Grid layout        |     H    |        1 hr    | much longer, bugs ended up costing a lot of time.  I learned quite a bit, it should be quicker next time. |
| jquery popouts     |     M    |        2 hrs   | much longer, getting the popouts done was tricky|
| Basic css          |     H    |        1 hr    | spend more time on this early than necessary,  |
|                    |          |                |             |
|                    |          |                |             |




##### Post-MVP

| Component       | Priority | Estimated Time | Actual Time |
| --------------- | -------- | ---------------| ----------- |
|additional css   |    L     |       2 hrs    |             |
|                 |          |                |             |
|                 |          |                |             |







### Additional Libraries
---------------------

No additional libraries currently.







### Code Snippet
--------------------- 

There isn't anything specific that I'm actually proud of.  Most of the code ended up being pretty simple after I was able to solve all of the different issues.

Example:

Popout js

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

Popout html and css

    //html

    <div class="projects_images projects_hide" id="projects_images_media">

    <div class="skills-list skills_hide" id="skills-list-media" >


    /*css*/

    .projects_images {
        grid-row: 2/3;
        grid-column: 1/3;
        display: inline-block;
        justify-self: center;
        overflow-x: scroll;
        overflow-y: hide;
        height: 100%;
        width: 95%;
        padding-top: 16px;
    }

    .projects_hide {
        display: none;
    }

    .skills-list{
    grid-row: 2/3;
    grid-column: 1/3;
    display: flex;
    justify-content: space-evenly;
    white-space: normal;
    overflow-x: scroll;
    }

    .skills_hide{
        display: none;
    }

Adding a new class('_hide') that targetted the css within the media querry was part of the solution, but for some reason when I added a class that targetted the .skills-list and .projects_images, even when the classes were new ones that exclusively targetted the classes below the media query, it wouldn't work.  It was likely a mistake I didn't catch, but nothing worked for me until I added an additional class that allowed me to simply turn off the 'display: none;.'



### Issues and Resolutions
---------------------

* grid issues
* issues with the popouts
* issues with the scroll bars
* repo was initially pushed to another enterprise github account.  Original commits are located there [Github Enterprise, General Assembly, Isaiah Keller, w3-project1](https://git.generalassemb.ly/isaiah/w3-project1)







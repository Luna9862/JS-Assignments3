
    //We are obtaining (getting) just the header element using querySelector 
    const header = document.querySelector('header');
    //We are obtaining all the section elements by using querySelectorAll
    const section = document.querySelectorAll('section');
    // we are obtaining the section element wit class="current"
    const sectionCurrent = document.querySelector('section.current'); 
    //we are obtaining the that comes after the current section using siblings and Parents 
    const afterSecCurrent = sectionCurrent.nextElementSibling;  
    //we are obtaining the h2 node from the section before current section. We will be using children to select what in te h2. 
    const secTwo = sectionCurrent.previousElementSibling.children[0];
    //we are obtaining a div that contains the section of h2 "highlight"
    const divHighlight = sectionCurrent.parentElement;
    //we are obtaining the full section og the h2 that containg "highlight"
    const sectionHTwo = Array.from(document.querySelectorAll('h2')).map(function(h2){return h2.parentElement})


    console.log(header); //logging header
    console.log(section); //logging section elements
    console.log(sectionCurrent); //logging section element with class="current"
    console.log(afterSecCurrent); //logging the section that comes after current section
    console.log(secTwo); //logging the h2 node 
    console.log(divHighlight); //logging the div of h2 
    console.log(sectionHTwo); //logging section that contains h2


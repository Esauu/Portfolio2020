$(function () { // DOM ready for jQuery??
    //write your code below
    ScrollReveal().reveal('.scroll', {
        delay: 700
    });

    /* slide ind fra højre */
    window.sr = ScrollReveal();
    sr.reveal('#h', {
        duration: 2000,
        origin: 'right',
        distance: '500px',
        viewFactor: 0.2,


        mobile: false

    });

    window.sr = ScrollReveal();
    sr.reveal('#l', {
        duration: 2000,
        origin: 'left',
        distance: '500px',
        viewFactor: 0.2,
        mobile: false


    });

    //The two go to debugging tools: alert & console.log - uncomment them using // or /* .... */
    //alert("hey");
    console.log('hi there from "js/scripts.js" - good to see you');
    //console.error('Just checking if YOU are checking the console. You should always open Chrome DevTools and check the console when doing web development. \n\nPlease uncomment or delete these messages from the js-file. \n\nBUT remember the syntax for alert and console.log \(e.g. by keeping then in the comments in the file\). \n\n//Lasse');
}); //END DOM ready

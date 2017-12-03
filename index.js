function randomBackground() {
    var backgroundNum = Math.floor(Math.random() * 15) + 1;
    console.log("the backgroundImg is " + backgroundImg);

    var backgroundImg = "images/backgrounds/" + backgroundNum + ".jpg"
    $('body').css('background-image', 'url(' + backgroundImg + ')');
};
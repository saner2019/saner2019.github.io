/**
 * set the relative path of the resources
 * @param level  the level where a file at. The file refers to that call this function
 */

function loadheaderexecute(level) {
    var navpart = $('<nav class="navbar navbar-default" role="navigation"></nav>');
    var navpartcontainer = $('<div class="container" id="id_navcontainer"></div>');

    if (level == 1) {
        var indexurl = "index.html";
        var ResearchTrackCFP = "cfp/ResearchTrackCFP.html";
        var OrganizeTeam= "team/organize-team.html"
        var VenueConference="venue/conference-location.html"
        var VenueZJU="venue/about-ZJU.html"
        var VenueHZ="venue/about-Hangzhou.html"
    }
    else if (level >= 2) {
        var indexurl = "../index.html";
        var ResearchTrackCFP = "../cfp/ResearchTrackCFP.html";
        var OrganizeTeam= "../team/organize-team.html"
        var VenueConference="../venue/conference-location.html"
        var VenueZJU="../venue/about-ZJU.html"
        var VenueHZ="../venue/about-Hangzhou.html"
    }

    var navbarheader = $('<div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="' + indexurl + '">SANER 2019</a></div>');
    navpartcontainer.append(navbarheader);

    var navbarcollapse = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"></div>');
    var navbarcollapseul = $('<ul class="nav navbar-nav navbar-right" id="id_navbarul"></ul>');


    /*
    *
    * add Call for paper bar
    * */
    var li_cfp = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Call for Papers<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
    li_cfp.find('ul').append('<li><a href="'+ResearchTrackCFP+'">Research Track</a></li>');
    // li_cfp.find('ul').append('<li><a href="'+ERATrackCFP+'"">NIER Track</a></li>');
    // li_cfp.find('ul').append('<li><a href="'+IndustryTrackCPF+'">Industry Track</a></li>');
    // li_cfp.find('ul').append('<li><a href="'+ToolDemoTrackCFP+'">Tool Demo Track</a></li>');
    // li_cfp.find('ul').append('<li><a href="'+ArtifactsTrackCFP+'">Artifacts Track</a></li>');
    // li_cfp.find('ul').append('<li><a href="'+DoctoralCFP+'">Doctoral Symposium</a></li>');
    // li_cfp.find('ul').append('<li><a href="'+CallForJournalFirstPresentation+'">Journal First Presentation</a></li>');
    navbarcollapseul.append(li_cfp);


     // add committee
    var li_team = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Committee<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
    li_team.find('ul').append('<li><a href="'+OrganizeTeam+'">Organizing Team</a></li>');
    navbarcollapseul.append(li_team);


    // add venue
    var li_venue=$('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Venue<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
    #li_venue.find('ul').append('<li><a href="'+VenueConference+'">Conference Location</a> </li>');
    li_venue.find('ul').append('<li><a href="'+VenueZJU+'">About ZJU</a> </li>');
    li_venue.find('ul').append('<li><a href="'+VenueHZ+'">About Hangzhou</a></li>');
    navbarcollapseul.append(li_venue);


    navbarcollapse.append(navbarcollapseul);

    navpartcontainer.append(navbarcollapse);

    navpart.append(navpartcontainer);

    $('body').append(navpart);

};

function loadCarousel(level) {

    if (level == 1) {
        var slide1 = "./img_system/tradition1.png";
        var slide2 = "./img_system/002.jpg";
        var slide3 = "./img_system/003.jpg";
    } else {
        var slide1 = "../img_system/tradition1.png";
        var slide2 = "../img_system/002.jpg";
        var slide3 = "../img_system/003.jpg";
    }
    var carousel = $('<div class="container">\n' +
        '    <div id="myCarousel" class="carousel slide">\n' +
        '        <!-- 轮播（Carousel）指标 -->\n' +
        '        <ol class="carousel-indicators">\n' +
        '            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>\n' +
        '            <li data-target="#myCarousel" data-slide-to="1"></li>\n' +
        '            <li data-target="#myCarousel" data-slide-to="2"></li>\n' +
        '        </ol>\n' +
        '        <!-- 轮播（Carousel）项目 -->\n' +
        '        <div class="carousel-inner">\n' +
        '            <div class="item active">\n' +
        '                <img src="' + slide1 + '" alt="First slide">\n' +
        '            </div>\n' +
        '            <div class="item">\n' +
        '                <img src="' + slide2 + '" alt="Second slide">\n' +
        '            </div>\n' +
        '            <div class="item">\n' +
        '                <img src="' + slide3 + '" alt="Third slide">\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>');

    $('body').append(carousel)

    $(document).ready(function () {
        $('#myCarousel').carousel({interval: 3000});//每隔5秒自动轮播
    });

};

function test(level) {

};



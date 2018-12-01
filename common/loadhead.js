/**
 * set the relative path of the resources
 * @param level  the level where a file at. The file refers to that call this function
 */

function loadheaderexecute(level) {
    var navpart = $('<nav class="navbar navbar-default" role="navigation"></nav>');
    var navpartcontainer = $('<div class="container" id="id_navcontainer"></div>');

    if (level == 1) {

        var indexurl = "index.html";
        var registration = "cfp/Registration.html";


        var ResearchTrackCFP = "cfp/ResearchTrackCFP.html";
        var ERATrackCFP = "cfp/ERATrackCFP.html";
        var RENETrackCFP = "cfp/RENETrack.html";
        var ToolDemoTrackCFP = "cfp/ToolTrack.html";
        var WorkshopTrackCFP = "cfp/WorkshopTrack.html";
        var JournalFirstTrack = "cfp/JournalFirstTrack.html"
        var IndustryTrackCPF  = "/cfp/IndustrialTrack.html"

        var OrganizeTeam= "team/organize-team.html"
        var ProgramTeam = "team/program-committee.html"
        var VenueConference="venue/conference-location.html"
        var VenueZJU="venue/about-ZJU.html"
        var VenueHZ="venue/about-Hangzhou.html"
        var VenueHotle="venue/about-hotel.html"

        var workshopsAI4="workshops/AI4Mobile19.html"
        var workshopsIBF="workshops/IBF2019.html"
        var workshopsMAINT="workshops/MAINT2019.html"
        var workshopsICWS="workshops/IWSC2019.html"
        var workshopsWBTAC="workshops/WBTAC.html"
        var workshopsBOSE="workshops/IWBOSE.html"

    }
    else if (level >= 2) {
        var indexurl = "../index.html";
        var registration = "../cfp/Registration.html";

        var ResearchTrackCFP = "../cfp/ResearchTrackCFP.html";
        var ERATrackCFP = "../cfp/ERATrackCFP.html";
        var RENETrackCFP = "../cfp/RENETrack.html";
        var ToolDemoTrackCFP = "../cfp/ToolTrack.html";
        var WorkshopTrackCFP = "../cfp/WorkshopTrack.html";
        var JournalFirstTrack = "../cfp/JournalFirstTrack.html"
        var IndustryTrackCPF  = "../cfp/IndustrialTrack.html"



        var OrganizeTeam= "../team/organize-team.html"
        var ProgramTeam = "../team/program-committee.html"
        var VenueConference="../venue/conference-location.html"
        var VenueZJU="../venue/about-ZJU.html"
        var VenueHZ="../venue/about-Hangzhou.html"
        var VenueHotle="../venue/about-hotel.html"

        var workshopsAI4="../workshops/AI4Mobile19.html"
        var workshopsIBF="../workshops/IBF2019.html"
        var workshopsMAINT="../workshops/MAINT2019.html"
        var workshopsICWS="../workshops/IWSC2019.html"
        var workshopsWBTAC="../workshops/WBTAC.html"
        var workshopsBOSE="../workshops/IWBOSE.html"
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
    li_cfp.find('ul').append('<li><a href="'+ERATrackCFP+'"">ERA Track</a></li>');
    li_cfp.find('ul').append('<li><a href="'+IndustryTrackCPF+'">Industry Track</a></li>');
    li_cfp.find('ul').append('<li><a href="'+ToolDemoTrackCFP+'">Tool Demo Track</a></li>');
    li_cfp.find('ul').append('<li><a href="'+RENETrackCFP+'">RENE Track</a></li>');
    li_cfp.find('ul').append('<li><a href="'+WorkshopTrackCFP+'">Workshop Track</a></li>');
    li_cfp.find('ul').append('<li><a href="'+JournalFirstTrack+'">Journal First Track</a></li>');
    navbarcollapseul.append(li_cfp);


    // add workshops

    var li_workshops=$('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Workshops<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
    li_workshops.find('ul').append('<li><a href="'+workshopsAI4+'">AI4Mobile 2019</a> </li>')
    li_workshops.find('ul').append('<li><a href="'+workshopsIBF+'">IBF 2019</a> </li>')
    li_workshops.find('ul').append('<li><a href="'+workshopsICWS+'">IWSC 2019</a> </li>')
    li_workshops.find('ul').append('<li><a href="'+workshopsWBTAC+'">WBTAC 2019</a></li>')
    li_workshops.find('ul').append('<li><a href="'+workshopsBOSE+'">IWBOSE 2019</a></li>')
    li_workshops.find('ul').append('<li><a href="'+workshopsMAINT+'">MAINT 2019</a></li>')
    navbarcollapseul.append(li_workshops)


    // add committee
    var li_team = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Committee<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
    li_team.find('ul').append('<li><a href="'+OrganizeTeam+'">Organizing Committee</a></li>');
    li_team.find('ul').append('<li><a href="'+ProgramTeam+'">Program Committee</a></li>');
    navbarcollapseul.append(li_team);


    // add venue
    var li_venue=$('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Venue<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
    //li_venue.find('ul').append('<li><a href="'+VenueConference+'">Conference Location</a> </li>');
    li_venue.find('ul').append('<li><a href="'+VenueConference+'">Conference Hotel</a></li>');
    li_venue.find('ul').append('<li><a href="'+VenueZJU+'">About Zhejiang University</a> </li>');
    li_venue.find('ul').append('<li><a href="'+VenueHZ+'">About Hangzhou</a></li>');
    li_venue.find('ul').append('<li><a href="'+VenueHotle+'">Accommodation</a></li>');


    navbarcollapseul.append(li_venue);

    // add registration
    var registration_bar=$('<li><a href="'+registration +'">Registration</a></li>')
    navbarcollapseul.append(registration_bar)


    navbarcollapse.append(navbarcollapseul);

    navpartcontainer.append(navbarcollapse);

    navpart.append(navpartcontainer);

    $('body').append(navpart);

};

function loadCarousel(level) {

    if (level == 1) {
        // var slide1 = "./img_system/ZJU-6.jpeg";
        var slide1 = "./img_system/ZJU-overview-words-white.jpeg";
        var slide2 = "./img_system/002-wods.jpeg";
        var slide3 = "./img_system/003-words.jpg";
    } else{
        // var slide1 = "../img_system/ZJU-6.jpeg";
        var slide1 = "../img_system/ZJU-overview-words-white.jpeg";
        var slide2 = "../img_system/002-wods.jpeg";
        var slide3 = "../img_system/003-words.jpg";
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



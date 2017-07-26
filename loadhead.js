function loadheaderexecute(level) {
var navpart = $('<nav class="navbar navbar-default" role="navigation"></nav>');
var navpartcontainer = $('<div class="container" id="id_navcontainer"></div>');

if (level==1) {
	var indexurl = "index.html";
	var Registrationurl = "registration.html";
	var Programurl = "ToBeAnnounced.html";
	var Socialurl = "ToBeAnnounced.html";

	var PaperAccepted = "program/Accepted.html";
	var keynotes = "program/keynotes.html";
	var LGBT = "program/LGBT.html";

	var ResearchTrackCFP = "cfp/ResearchTrackCFP.html";
	var ERATrackCFP = "cfp/NIERTrackCFP.html";
	var IndustryTrackCPF = "cfp/IndustryTrackCFP.html";
	var ToolDemoTrackCFP = "cfp/ToolDemoCFP.html";
	var DoctoralCFP = "cfp/DoctoralSymposiumCFP.html";
	var ArtifactsTrackCFP="cfp/ArtifactsTrackCFP.html";
	var CallForJournalFirstPresentation="cfp/CallForJournalFirstPresentation.html"; 

	var venueurl = "venue.html";
	var orgcommitteeurl = "Organization Committee.html";
	var procommitteeurl = "Program Committee.html";
	var awardommitteeurl = "AwardCommittee.html";

	var travelvisaurl = "travel/visareq.html";
}
else if (level>=2) {
	var indexurl = "../index.html";
	var Registrationurl = "../registration.html";
	var Programurl = "../ToBeAnnounced.html";
	var Socialurl = "../ToBeAnnounced.html";

	var PaperAccepted = "../program/Accepted.html";
	var keynotes = "../program/keynotes.html";
	var LGBT = "../program/LGBT.html";

	var ResearchTrackCFP = "../cfp/ResearchTrackCFP.html";
	var ERATrackCFP = "../cfp/NIERTrackCFP.html";
	var IndustryTrackCPF = "../cfp/IndustryTrackCFP.html";
	var ToolDemoTrackCFP = "../cfp/ToolDemoCFP.html";
	var DoctoralCFP = "../cfp/DoctoralSymposiumCFP.html";
	var ArtifactsTrackCFP="../cfp/ArtifactsTrackCFP.html";
	var CallForJournalFirstPresentation="../cfp/CallForJournalFirstPresentation.html"; 

	var venueurl = "../venue.html";
	var orgcommitteeurl = "../Organization Committee.html";
	var procommitteeurl = "../Program Committee.html";
	var awardommitteeurl = "../AwardCommittee.html";

	var travelvisaurl = "../travel/visareq.html";
}
/**
else if (level==3) {
	var indexurl = "../index.html";
	var Registrationurl = "../ToBeAnnounced.html";
	var Programurl = "../ToBeAnnounced.html";
	var Socialurl = "../ToBeAnnounced.html";

	var PaperAccepted = "../program/Accepted.html";
	var LGBT = "../program/LGBT.html";

	var ResearchTrackCFP = "../cfp/ResearchTrackCFP.html";
	var ERATrackCFP = "../cfp/NIERTrackCFP.html";
	var IndustryTrackCPF = "../cfp/IndustryTrackCFP.html";
	var ToolDemoTrackCFP = "../cfp/ToolDemoCFP.html";
	var DoctoralCFP = "../cfp/DoctoralSymposiumCFP.html";
	var ArtifactsTrackCFP="../cfp/ArtifactsTrackCFP.html";
	var CallForJournalFirstPresentation="../cfp/CallForJournalFirstPresentation.html"; 

	var venueurl = "../venue.html";
	var orgcommitteeurl = "../Organization Committee.html";
	var procommitteeurl = "../Program Committee.html";
}
**/

var navbarheader = $('<div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="'+indexurl+'">ICSME 2017</a></div>');
navpartcontainer.append(navbarheader);

var navbarcollapse = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"></div>');
var navbarcollapseul = $('<ul class="nav navbar-nav navbar-right" id="id_navbarul"></ul>');

var li_registration = $('<li><a href="'+Registrationurl+'">Registration</a></li>');
navbarcollapseul.append(li_registration);

var li_program = $('<li class="dropdown"><a href="'+Programurl+'" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Program<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');  
li_program.find('ul').append('<li><a href="'+PaperAccepted+'">Accepted Papers</a></li>');
li_program.find('ul').append('<li><a href="'+keynotes+'">Keynotes</a></li>');
li_program.find('ul').append('<li><a href="'+LGBT+'">LGBT@SoftEng Lunch</a></li>');
navbarcollapseul.append(li_program);
      


var li_cfp = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Call for Papers<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');        
li_cfp.find('ul').append('<li><a href="'+ResearchTrackCFP+'">Research Track</a></li>');  
li_cfp.find('ul').append('<li><a href="'+ERATrackCFP+'"">NIER Track</a></li>');   
li_cfp.find('ul').append('<li><a href="'+IndustryTrackCPF+'">Industry Track</a></li>');   
li_cfp.find('ul').append('<li><a href="'+ToolDemoTrackCFP+'">Tool Demo Track</a></li>');   
li_cfp.find('ul').append('<li><a href="'+ArtifactsTrackCFP+'">Artifacts Track</a></li>');
li_cfp.find('ul').append('<li><a href="'+DoctoralCFP+'">Doctoral Symposium</a></li>');
li_cfp.find('ul').append('<li><a href="'+CallForJournalFirstPresentation+'">Journal First Presentation</a></li>');           
navbarcollapseul.append(li_cfp);        
          
var li_coevents = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Co-Located Events<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');       
li_coevents.find('ul').append('<li><a href="http://www.ieee-scam.org/2017/" target="_blank">SCAM</a></li>');
li_coevents.find('ul').append('<li><a href="http://vissoft17.dcc.uchile.cl" target="_blank">VISSOFT</a></li>');
li_coevents.find('ul').append('<li><a href="http://www.se.fudan.edu.cn/events/Internetware2017" target="_blank">Internetware</a></li>');
li_coevents.find('ul').append('<li><a href="#">China SE Research and Industry Summit</a></li>');
navbarcollapseul.append(li_coevents); 

var li_sevents = $('<li><a href="'+Socialurl+'">Social Events</a></li>');  
navbarcollapseul.append(li_sevents); 

var li_venue = $('<li><a href="'+venueurl+'">Venue</a></li>');  
navbarcollapseul.append(li_venue); 

var li_team = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Team<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
li_team.find('ul').append('<li><a href="http://conferences.computer.org/icsm/Steering_Committee_Members.html">Steering Committee</a></li>');
li_team.find('ul').append('<li><a href="'+orgcommitteeurl+'">Organizing Committee</a></li>');
li_team.find('ul').append('<li><a href="'+procommitteeurl+'">Program Committee</a></li>');
li_team.find('ul').append('<li><a href="'+awardommitteeurl+'">Award Committee</a></li>');
navbarcollapseul.append(li_team);        

var li_travel = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Travel<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
li_travel.find('ul').append('<li><a href="'+travelvisaurl+'">Visa Information</a></li>');
navbarcollapseul.append(li_travel); 

navbarcollapse.append(navbarcollapseul);

navpartcontainer.append(navbarcollapse);

navpart.append(navpartcontainer);

$('body').append(navpart);



};



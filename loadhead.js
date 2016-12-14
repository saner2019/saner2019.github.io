function loadheaderexecute(level) {
var navpart = $('<nav class="navbar navbar-default" role="navigation"></nav>');
var navpartcontainer = $('<div class="container" id="id_navcontainer"></div>');

if (level==1) {
	var indexurl = "index.html";
	var Registrationurl = "ToBeAnnounced.html";
	var Programurl = "ToBeAnnounced.html";
	var Socialurl = "ToBeAnnounced.html";

	var ResearchTrackCFP = "cfp/ResearchTrackCFP.html";
	var ERATrackCFP = "cfp/NIERTrackCFP.html";
	var IndustryTrackCPF = "ToBeAnnounced.html";
	var ToolDemoTrackCFP = "cfp/ToolDemoCFP.html";
	var DoctoralCFP = "cfp/DoctoralSymposiumCFP.html";

	var venueurl = "venue.html";
	var orgcommitteeurl = "Organization Committee.html";
}
else {
	var indexurl = "../index.html";
	var Registrationurl = "../ToBeAnnounced.html";
	var Programurl = "../ToBeAnnounced.html";
	var Socialurl = "../ToBeAnnounced.html";

	var ResearchTrackCFP = "ResearchTrackCFP.html";
	var ERATrackCFP = "NIERTrackCFP.html";
	var IndustryTrackCPF = "../ToBeAnnounced.html";
	var ToolDemoTrackCFP = "ToolDemoCFP.html";
	var DoctoralCFP = "DoctoralSymposiumCFP.html";

	var venueurl = "../venue.html";
	var orgcommitteeurl = "../Organization Committee.html";
}

var navbarheader = $('<div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="'+indexurl+'">ICSME 2017</a></div>');
navpartcontainer.append(navbarheader);

var navbarcollapse = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"></div>');
var navbarcollapseul = $('<ul class="nav navbar-nav navbar-right" id="id_navbarul"></ul>');

var li_registration = $('<li><a href="'+Registrationurl+'">Registration</a></li>');
navbarcollapseul.append(li_registration);

var li_program = $('<li><a href="'+Programurl+'">Program</a></li>');
navbarcollapseul.append(li_program);
      


var li_cfp = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Call for Papers<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');        
li_cfp.find('ul').append('<li><a href="'+ResearchTrackCFP+'">Research Track</a></li>');  
li_cfp.find('ul').append('<li><a href="'+ERATrackCFP+'"">NIER Track</a></li>');   
li_cfp.find('ul').append('<li><a href="'+IndustryTrackCPF+'">Industry Track</a></li>');   
li_cfp.find('ul').append('<li><a href="'+ToolDemoTrackCFP+'">Tool Demo Track</a></li>');   
li_cfp.find('ul').append('<li><a href="'+DoctoralCFP+'">Doctoral Symposium</a></li>');         
navbarcollapseul.append(li_cfp);        
          
var li_coevents = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Co-Located Events<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');       
li_coevents.find('ul').append('<li><a href="http://www.ieee-scam.org/2017/">SCAM</a></li>');
li_coevents.find('ul').append('<li><a href="http://vissoft17.dcc.uchile.cl">VISSOFT</a></li>');
navbarcollapseul.append(li_coevents); 

var li_sevents = $('<li><a href="'+Socialurl+'">Social Events</a></li>');  
navbarcollapseul.append(li_sevents); 

var li_venue = $('<li><a href="'+venueurl+'">Venue</a></li>');  
navbarcollapseul.append(li_venue); 

var li_team = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Team<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
li_team.find('ul').append('<li><a href="http://conferences.computer.org/icsm/Steering_Committee_Members.html">Steering Committee</a></li>');
li_team.find('ul').append('<li><a href="'+orgcommitteeurl+'">Organizing Committee</a></li>');
navbarcollapseul.append(li_team);        

navbarcollapse.append(navbarcollapseul);

navpartcontainer.append(navbarcollapse);

navpart.append(navpartcontainer);

$('body').append(navpart);
};

var navpart = $('<nav class="navbar navbar-default" role="navigation"></nav>');
var navpartcontainer = $('<div class="container" id="id_navcontainer"></div>');

var navbarheader = $('<div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="index.html">ICSME 2017</a></div>');
navpartcontainer.append(navbarheader);

var navbarcollapse = $('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"></div>');
var navbarcollapseul = $('<ul class="nav navbar-nav navbar-right" id="id_navbarul"></ul>');

var li_registration = $('<li><a href="ToBeAnnounced.html">Registration</a></li>');
navbarcollapseul.append(li_registration);

var li_program = $('<li><a href="ToBeAnnounced.html">Program</a></li>');
navbarcollapseul.append(li_program);
      
var li_cfp = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Call for Papers<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');        
li_cfp.find('ul').append('<li><a href="ToBeAnnounced.html">Research Track</a></li>');  
li_cfp.find('ul').append('<li><a href="ToBeAnnounced.html">ERA Track</a></li>');   
li_cfp.find('ul').append('<li><a href="ToBeAnnounced.html">Industry Track</a></li>');   
li_cfp.find('ul').append('<li><a href="ToolDemoCFP.html">Tool Demo Track</a></li>');   
li_cfp.find('ul').append('<li><a href="ToBeAnnounced.html">Doctoral Symposium</a></li>');         
navbarcollapseul.append(li_cfp);        
          
var li_coevents = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Co-Located Events<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');       
li_coevents.find('ul').append('<li><a href="http://www.ieee-scam.org/2017/">SCAM</a></li>');
navbarcollapseul.append(li_coevents); 

var li_sevents = $('<li><a href="ToBeAnnounced.html">Social Events</a></li>');  
navbarcollapseul.append(li_sevents); 

var li_venue = $('<li><a href="venue.html">Venue</a></li>');  
navbarcollapseul.append(li_venue); 

var li_team = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Team<span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>');
li_team.find('ul').append('<li><a href="http://conferences.computer.org/icsm/Steering_Committee_Members.html">Steering Committee</a></li>');
li_team.find('ul').append('<li><a href="Organization Committee.html">Organizing Committee</a></li>');
navbarcollapseul.append(li_team);        

navbarcollapse.append(navbarcollapseul);

navpartcontainer.append(navbarcollapse);

navpart.append(navpartcontainer);

$('body').append(navpart);
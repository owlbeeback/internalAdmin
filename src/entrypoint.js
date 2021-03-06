//come back here and see about reconfiguring these entry points inside of webpack config "entry"S object.
//all html only required for development livereload with webpack watch
require('../index.html');

//place templates here for development/prototyping only to be on webpack watch radar
require('../templates/menu.html');
require('../templates/DiffToolUI/siteSelector.html');
require('../templates/DiffToolUI/diffCheck.html');
require('../templates/DiffToolUI/compareView.html');
require('../templates/ValToolUI/hl7Val.html');
//////////////////////////

//styles
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('angular-ui-router-anim-in-out/scss/anim-in-out.scss');
require('../styles/main.scss');
////////////////////////////////

//js
global.moment = require('moment');
require('bootstrap-sass/assets/javascripts/bootstrap.js');
require('../bower_components/lodash/dist/lodash.min.js');
require('../bower_components/ui-bootstrap/index.js');//required angular locally into this file
require('angular-ui-router');
require('angular-animate');
require('angular-ui-router-anim-in-out/anim-in-out.js');
require('../js/routeConfig.js');
require('../js/controllers.js');
require('../js/controllers/HL7Ctrl.js');
require('../js/interceptors.js');
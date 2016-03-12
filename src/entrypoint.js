//come back here and see about reconfiguring these entry points inside of webpack config "entry"S object.
//all html only required for development livereload with webpack watch
require('../index.html');

//place templates here for development/prototyping only to be on webpack watch radar
require('../templates/menu.html');
require('../templates/DiffToolUI/siteSelector.html');
require('../templates/DiffToolUI/diffCheck.html');
//////////////////////////

//styles
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('../styles/main.scss');
////////////////////////////////

//js
global.moment = require('moment');
require('bootstrap-sass/assets/javascripts/bootstrap.js');
require('../bower_components/lodash/dist/lodash.min.js');
require('../bower_components/ui-bootstrap/index.js');//required angular locally into this file
require('angular-ui-router');
require('../js/routeConfig.js');
require('../js/controllers.js');
require('../js/interceptors.js');
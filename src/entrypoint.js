//come back here and see about reconfiguring these entry points inside of webpack config "entry"S object.
 __webpack_public_path__ = "../internalAdmin/fonts"
console.log("public path: " + __webpack_public_path__)
require('../index.html');

//place templates here for development/prototyping only
require('../templates/menu.html');
//////////////////////////

//styles
require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('../styles/main.scss');
////////////////////////////////

require('angular-ui-router');
require('../js/routeConfig.js');
require('../js/controllers.js');
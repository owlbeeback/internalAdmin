/* global _ */
/* global amplify */
(function() {

    'use strict';
angular.module('internalAdmin')
.factory('authInterceptor', [
        '$rootScope',
        '$q',
        // 'notifications',
        function ($rootScope, $q) {
        return {
            request: function (req) {
                req.headers.Authorization = "Basic YXJpYTpAcmlA";
                return req;
            },
            response: function (res) {
                if (_.includes(res.config.url, 'login') && !_.includes(res.config.url, 'html')) {
                    if (res.status === 200) {
                        $rootScope.$broadcast('auth:200');
                    }
                }
               return res;
            },
            responseError: function (res) {
                if (res.status === 401 || (_.includes(res.config.url, 'login') && !_.includes(res.config.url, 'html') && res.status == 0)) {
                    $rootScope.$broadcast('auth:401');
                }
                else if (res.status === 0) {
                    if (!navigator.onLine) {
                    } 
                }
                else
                {
                    if (res && res.data) {
                    }
                    else if (res.status !== 404) {
                    }
                }
                return $q.reject(res);
            }
        };
    }])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }]);

})();
// Generated by CoffeeScript 1.7.1
(function() {
  angular.module('erplite.common').factory('HttpHandle', [
    '$location', '$rootScope', '$log', function($location, $rootScope, $log) {
      return function(reason) {
        if (reason.status === 404) {
          $location.url('/404');
          return $location.replace();
        } else if (reason.status === 401 || reason.status === 403) {
          $location.url("/login?query=" + encodeURIComponent($location.url()));
          return $location.replace();
        } else {
          return $log.log("Error Code: " + reason.status + ", Message: " + reason.data);
        }
      };
    }
  ]).factory('erplite.utils', [
    'HttpHandle', function(HttpHdl) {
      return {
        HttpHandle: HttpHdl
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=factories.map

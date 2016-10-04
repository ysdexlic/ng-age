(function () {
  'use strict';

  angular.element(document).ready(function () {
    angular.bootstrap(document.documentElement, ['app']);
  });

  function Route($logProvider) {
    $logProvider.debugEnabled(true);
  }

  function MainCtrl($log) {
    var vm = this;
    $log.debug('MainCtrl loaded');
    vm.inputDate = '29/01/92';

   
  }

  function run($log) {
    $log.debug('App is running');

  }

  angular.module('app', [
    'ng-age'
  ])
    .config(Route)
    .run(run)
    .controller('MainCtrl', MainCtrl)
})();

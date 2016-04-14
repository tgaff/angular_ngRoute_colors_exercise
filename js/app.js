console.log('challenge #3 -- app.js loaded!');

angular.module("routingApp", ['ngRoute'])
  .config(config)
  .controller("GoatsController", GoatsController)
  .controller("ColorsIndexController", ColorsIndexController)
  .controller("ColorsShowController", ColorsShowController);

GoatsController.$inject = [];
function GoatsController() {
  var vm = this;
  vm.gif = "https://m.popkey.co/2cc6ba/wGDNq.gif";
}

ColorsIndexController.$inject = [];
function ColorsIndexController() {
  var vm = this;
  vm.text = "Setup the ColorsShowController and then try a URL like /colors/BADA55";
}

ColorsShowController.$inject = [];
function ColorsShowController() {
  var vm = this;
  vm.currentColor = '#0E2';
}


// router config
config.$inject = ['$routeProvider'];
function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/goat.html',
      controller: 'GoatsController',
      controllerAs: 'goatsCtrl'
    })
    .when('/colors', {
      templateUrl: 'templates/colorsIndex.html',
      controller: 'ColorsIndexController',
      controllerAs: 'colorsIndexCtrl'
    })
    .when('/colors/:rgb', {
      templateUrl: 'templates/colorsShow.html',
      controller: 'ColorsShowController',
      controllerAs: 'colorsShowCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}

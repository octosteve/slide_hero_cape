var controllers = angular.module('slides.controllers', [])
controllers.controller('DeckController', function($scope){
  $scope.currentSlide = 0;
})

describe("Controllers", function(){
  var controllerFetcher;
  var scope;

  beforeEach(module('slides'));
  beforeEach(inject(function($controller, $rootScope){
    controllerFetcher = $controller;
    scope = $rootScope.$new();
  }))

  describe("DeckController", function(){
    beforeEach(function(){
      var DeckController = controllerFetcher('DeckController', {$scope: scope});
    })

    it("starts at slide 0",function(){
      expect(scope.currentSlide).toBe(0);
    })
  })
})

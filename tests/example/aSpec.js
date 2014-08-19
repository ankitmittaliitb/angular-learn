describe("Example tests", function() {
    it("random test", function(){
    	expect(true).toBe(true);
    });
});

describe("app module", function () {
    beforeEach(module("exampleApp"));


	it("random test", function(){
    	expect(true).toBe(true);
    });

    describe("mainController", function () {
        var scope,
            controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        }));

        it("should assign test to hello world", function () {
            controller("mainController", {$scope: scope});
            expect(scope.test).toBe("Hello world");
        });
    });
});

describe("exampleService", function(){

    beforeEach(module("exampleApp"));
    var service;

    beforeEach(inject(function(exampleService){
       service = exampleService;
    }));

    describe("getData", function(){
        it("Example Service should have getData defined", function(){
            expect(service.getData()).toBeDefined();
        });

        xit("getdata", function(){
        	expect(service.getData()).toBeObject();
        });

        it("getdata from example service should return id = 1", function(){
        	expect(service.getData().id).toBe(1);
        });

        it("bloo", function(){
        	expect(service.getData().username).toBe('ankitml');
        	expect(service.getData().role).toBe('student');
        });
    });
});
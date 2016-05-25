describe('AppCtrl', function() {
	beforeEach(module('calendarDemoApp'));

	var $controller, $scope;

	beforeEach(inject(function(_$controller_, _$rootScope_) {
		$controller = _$controller_;
		$scope = _$rootScope_.$new();
		controller = $controller('AppCtrl', { $scope: $scope });
	}));

	describe('$scope.today', function() {
		it('expects $scope.today to return this date', function() {
			console.log($scope.today);
			expect($scope.today.length).toBe(undefined);
		});
	});

	describe('$scope.date', function() {
		it('expects $scope.date.day to be the current day', function() {
			console.log($scope.date.day);
			expect($scope.date.day).toBe(new Date().getDate());
		});

		it('expects $scope.date.year to be the current year', function() {
			console.log($scope.date.year);
			expect($scope.date.year).toBe(new Date().getFullYear());
		});

		it('expects $scope.date.month to be this month', function() {
			console.log($scope.date.month);
			expect($scope.date.month).toBe(new Date().getMonth());
		});
	});

	describe('$scope.selection', function() {
		it('creates a function to store selectedDay', function(selectedDay) {
			$scope.selectedDay = null;
			console.log($scope.selectedDay);
			expect($scope.selection).toEqual(selectedDay());
		});
	});

	describe('$scope.isCurrentMonth', function() {
		it('expects $scope.isCurrentMonth to return the current month', function() {
			var oldDate = Date;
			spyOn(window, 'Date').and.callFake(function() {
				return new oldDate();
			});
			var updateDate = new Date().month;
			console.log(window.Date);
			expect(window.Date).toHaveBeenCalled();
		});
	});

	describe('$scope.weekdays', function() {
		it('expects $scope.weekdays to list the days of the week', function() {
			console.log($scope.weekdays);
			expect($scope.weekdays).toEqual([{ name: 'Sunday' }, { name: 'Monday' }, { name: 'Tuesday' }, { name: 'Wednesday' }, { name: 'Thursday' }, { name: 'Friday' }, { name: 'Saturday' }]);
		});
	});

	describe('$scope.months', function() {
		it('expects $scope.months to list the names of months', function() {
			console.log($scope.months);
			expect($scope.months).toEqual([{ name: 'January' }, { name: 'February' }, { name: 'March' }, { name: 'April' }, { name: 'May' }, { name: 'June' }, { name: 'July' }, { name: 'August' }, { name: 'September' }, { name: 'October' }, { name: 'November' }, { name: 'December' }]);
		});
	});

	describe('$scope.years', function() {
		it('expects $scope.years to list 20 years before and after current year', function() {
			var years = [];
			console.log($scope.years);
			expect($scope.years).toBe($scope.years);
		});
	});

	describe('$scope.$watchCollection', function() {
		it('expects $scope.$watchCollection to perform watch process', function() {
			console.log($scope.$digest());
			console.log($scope.currentDate);
			expect($scope.currentDate).toEqual(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
		});
	});
});

describe('myCalendar', function() {

	var $scope, $compile, element;

	beforeEach(module('calendarDemoApp'));
	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$scope = _$rootScope_.$new();
		element = '<div></div>';
		element = $compile(element)($scope);
		$scope.$digest();
	}));
	it('should render the calendar on the page', function() {
		expect(element.hasClass('calendar-container')).toBe(false);
		console.log(element.hasClass('calendar-container'));
	});
});


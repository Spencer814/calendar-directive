angular.module('calendarDemoApp', []).

controller('AppCtrl', function($scope) {
	$scope.today = new Date();

	var today = new Date();
	var day = today.getDate();
	var year = today.getFullYear();
	var month = today.getMonth();

	$scope.date = {
		day: day,
		year : year,
		month : month
	};

	$scope.selection = function(selectedDay) {
		$scope.selectedDay = selectedDay;
	};

	$scope.isCurrentMonth = function(date, month) {
		return date.getMonth() == $scope.date.month;
		return function(month) {
			return $scope.months;
		};
	};

	$scope.weekdays = [{ name: 'Sunday' }, { name: 'Monday' }, { name: 'Tuesday' }, { name: 'Wednesday' }, { name: 'Thursday' }, { name: 'Friday' }, { name: 'Saturday' }];
	$scope.months = [{ name: 'January' }, { name: 'February' }, { name: 'March' }, { name: 'April' }, { name: 'May' }, { name: 'June' }, { name: 'July' }, { name: 'August' }, { name: 'September' }, { name: 'October' }, { name: 'November' }, { name: 'December' }];

	var years = [];
	var then = year - 20;
	for(var i = then; i <= year + 20; i++) {
		years.push(i);
	}

	$scope.years = years;

	$scope.$watchCollection('date', function(date) {
		$scope.currentDate = new Date(date.year, date.month, date.day);
	});
})
.directive('myCalendar', function() {
	return {
		terminal: true,
		priority : 1000,
		transclude : 'element',
		link : function(scope, element, attrs, ctrl, transclude) {
			var containerScope = scope.$new(); 
			var container = angular.element('<div></div>');
			container.addClass('calendar-container');
			element.after(container);

			scope.$watch(attrs.myCalendar, function(date) {
				if(!date) return;

				var range = CalendarRange.getMonthlyRange(date);

				containerScope.$destroy();
				containerScope = scope.$new();
				container.html('');

				angular.forEach(range.days, function(day) {
					var newScope = containerScope.$new();
					newScope.day = day;
					transclude(newScope, function(newElement) {
						newElement.addClass('calendar-cell');
						container.append(newElement);
					});
				});
			});
		}
	}
});
angular.module('ngFloatingScroll', [])
.directive('ngFloatingScroll', function(){
	return {
		restrict: 'A',
		link: function (scope, el, attrs){
			$(el).floatingScroll('init');
		    scope.element = el[0];
		    scope.$watch('element.clientHeight', function(newVal, oldVal) {
                if (newVal !== oldVal)
		            $(el).floatingScroll('update');
		    });
		}
	}
});
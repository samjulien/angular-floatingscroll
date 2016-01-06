angular.module('ng-floatingscroll', [])
.directive('ng-floatingscroll', function(){
	return {
		restrict: 'A',
		link: function (scope, el, atts){
			el.floatingScroll();
		}
	}
});
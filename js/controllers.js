console.log("docookies for okie")
angular.module('internalAdmin')

.filter('momentsAgo', function() {
  return function(input) {
    return moment(input).fromNow(); 
  };
})

.controller("selectSiteCtrl", function($scope, $http, $state, $log){
  
	$scope.currentPage = 1;//can be set programatically; no default
	$scope.numPerPage = 10;
	$scope.maxSize = 5;//refers to max visible page select buttons
	
	function filterData(allSites){
		$scope.totalItems = allSites.length;//default display is 10 items/page per page; this would be 10 pages
		$scope.$watch('currentPage + numPerPage', function() {
			var begin = (($scope.currentPage - 1) * $scope.numPerPage), 
			end = begin + $scope.numPerPage;
			$scope.filteredSites = allSites.slice(begin, end);
		});
	}
	
	$http.get("http://localhost:61668/api/sites")
	.then(function(res){
		filterData(res.data.sites);
	})
	.catch(function(err){
		console.log(err)
	});
 	
	$scope.pageChanged = function() {
		$log.log('Page changed to: ' + $scope.currentPage);
	};

})

.controller("comparisonCtrl", function($scope, $http, $state, $stateParams){
	
	var siteKey = $stateParams.siteKey;
	$http.get("http://localhost:61668/api/sites/"+ siteKey +"/archives")
	.then(function(res){
		$scope.versions = res.data;
		console.log(res.data);
	})
	.catch(function(err){
		console.log(err);
	})
	
	var comparisonInfo = {};
	
	$scope.getV1 = function(idx1){
		comparisonInfo["SourceArchiveKey"] = $scope.versions[idx1].key
		$scope.v1 = moment($scope.versions[idx1].modifiedUtcDateTime).fromNow();
	}
	
	$scope.getV2 = function(idx2){
		comparisonInfo["TargetArchiveKey"] = $scope.versions[idx2].key
		$scope.v2 = moment($scope.versions[idx2].modifiedUtcDateTime).fromNow();
		console.log(comparisonInfo);
	}
	
	$scope.compareVersions = function(){
		$http.post("http://localhost:61668/api/sites/"+ siteKey +"/archives", comparisonInfo)
		.then(function(res){
			// console.log(res.data);
			$scope.diffData = [];
			res.data.forEach(function(el) {
				$scope.diffData.push(JSON.parse(el))
			});
			console.log($scope.diffData);
		})
		.catch(function(err){
			console.log(err);
		})
	}
	
});
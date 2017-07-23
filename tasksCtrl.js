
app.controller('tasksCtrl', ['$scope', '$rootScope', '$state', 'tasksFactory', function ($scope, $rootScope, $state, tasksFactory) {
    $scope.init = function(){
        $scope.scrollClass = "bodyScrollShow";
    }

    $scope.status = {
    isFirstOpen: true,
    oneAtATime: true,
    isItemOpen: [true]
  };

    $scope.taskList = tasksFactory.tasksData();
    $scope.data = $scope.taskList.tasks;

    var date = new Date();
    var month = date.getMonth()
    var newMonth = month + 1;
    var year = date.getFullYear();
    var newDate = date.getDate();
    if (newMonth < 10) {
        var newFullMonth = "0" + newMonth;
    }
    else {
        var newFullMonth = newMonth;
    }

    if (newDate < 10) {
        var newFullDate = "0" + newDate;
    }
    else {
        var newFullDate = newDate;
    }
    var fullDate = year +"-" + newFullMonth + "-" + newFullDate;

    $scope.add = function(){     
    flag = 1;

    if($scope.empName==undefined || $scope.empName == ""){
        flag = 0;
        $scope.errorName = true;
    }
    else{
        $scope.errorName = false;
    }
    if($scope.taskDes==undefined || $scope.taskDes == ""){
        flag = 0;
        $scope.errorDes = true;
    }
    else{
        $scope.errorDes = false;
    }
    if($scope.taskDate==undefined || $scope.taskDate == ""){
        flag = 0;
        $scope.errorDate = true;
		$scope.errorDate1 = false;
    }
	else if($scope.taskDate > fullDate){
	    flag = 0;
	    $scope.errorDate1 = true;
	    $scope.errorDate = false;
	}
    else{
        $scope.errorDate = false;
		$scope.errorDate1 = false;
    }
    if($scope.docName==undefined || $scope.docName == ""){
        flag = 0;
        $scope.errorDocName = true;
    }
    else{
        $scope.errorDocName = false;
    }
    if($scope.docLink==undefined || $scope.docLink == ""){
        flag = 0;
        $scope.errorDocLink = true;
    }
    else{
        $scope.errorDocLink = false;
    }
    if($scope.docDate==undefined || $scope.docDate == ""){
        flag = 0;
        $scope.errorDocDate = true;
		$scope.errorDocDate1 = false;
    }
	else if($scope.docDate > fullDate){
	    flag = 0;
	    $scope.errorDocDate1 = true;
	    $scope.errorDocDate = false;
	}
    else{
        $scope.errorDocDate = false;
		$scope.errorDocDate1 = false;
    }

    if (flag == 1){
    $scope.data.push({ 'Action_Attribute': {'value':$scope.empName}, 'Legal_Action_Type': {'template':$scope.taskDes, 'createdAt': $scope.taskDate}, 'Documents': [{ 'name':$scope.docName, 'url':$scope.docLink, 'updated_at': $scope.docDate}]});
    $scope.empName='';
    $scope.taskDes='';
    $scope.taskDate='';
    $scope.docName = "";
    $scope.docLink = "";
    $scope.docDate = "";
    $scope.addTask = false;
    $scope.scrollClass = "bodyScrollShow";
    }
};

$scope.addNew = function(){
    $scope.addTask = true;
    $scope.scrollClass = "bodyScroll-y";
}

$scope.close = function(){
    $scope.addTask = false;
    $scope.scrollClass = "bodyScrollShow";
//     if($scope.empName==undefined  $scope.taskDes==undefined || $scope.taskDate==undefined || $scope.docName==undefined || $scope.docLink==undefined || $scope.docDate==undefined){
//     $scope.empName=false;
//     $scope.taskDes=false;
//     $scope.taskDate=false;
//     $scope.docName = false;
//     $scope.docLink = false;
//     $scope.docDate = false;
// }
}
}]);

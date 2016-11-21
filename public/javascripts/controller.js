angular.module('ctrlModule', [])
	.controller('testCtrl', function ($scope, $http) {
	    $scope.menus =  [
					      {
					        "name": "行业统计",
					        "submenus": null,
					        "classes": "fa-bar-chart-o",
					        "state": "test.view1"
					      },
					      {
					        "name": "商品榜",
					        "submenus": [{"name": "热销榜", "state": "test.view2({type:\"0\",menuName:\"热销榜\"})"}, {
					          "name": "飙升榜",
					          "state": "test.view3({type:\"1\",menuName:\"飙升榜\"})"
					        }],
					        "classes": "fa-bar-chart-o",
					        "state": "test.view1"
					      }, {
					        "name": "店铺榜",
					        "submenus": [{"name": "热销榜", "state": "test.view4({type:\"0\",menuName:\"热销榜\"})"}, {
					          "name": "飙升榜",
					          "state": "test.view5({type:\"1\",menuName:\"飙升榜\"})"
					        }],
					        "classes": "fa-area-chart",
					        "state": "test.view1"
					      }, {
					        "name": "标签榜",
					        "submenus": [{"name": "热销榜", "state": "test.view1({type:\"0\",menuName:\"热销榜\"})"}, {
					          "name": "飙升榜",
					          "state": "test.view2({type:\"0\",menuName:\"飙升榜\"})"
					        }],
					        "classes": "fa-indent",
					        "state": "test.view1"
					      }, {
					        "name": "我的关注",
					        "submenus": [{"name": "商品", "state": "test.view3"}, {
					          "name": "店铺",
					          "state": "test.view4"
					        }, {"name": "标签", "state": "test.view5"}],
					        "classes": "fa-tasks",
					        "state": "test.view1"
					      },
					      {
					        "name": "搜索",
					        "submenus": null,
					        "classes": "fa-search",
					        "state": "test.view1"
					      }
					    ]


			// console.log(nowstate())





	})
	.controller('test1Ctrl', function ($scope, $http) {
	    $scope.test="ss"

	})
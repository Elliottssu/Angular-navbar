angular.module('ctrlModule', [])
	.controller('testCtrl', function ($scope, $http, $rootScope) {
	    $scope.menus =  [
	      {
	        "name": "首页",
	        "state": "app.home",
	        "submenus": null,
	        "classes": ["fa-home"]
	      },
	      {
	        "name": "权限管理",
	        "state": "app.funcpermission",
	        "submenus": null,
	        "classes": ["fa-share-alt"]
	      }, {
	        "name": "账号安全",
	        "submenus": [{"name": "移动设备管理", "state": "app.mdm"}, {"name": "登录日志","state": "app.loginlogs"}],
	        "classes": ["fa-lock"]
	      }, {
	        "name": "企业设置",
	        "submenus": [{"name": "工作设置", "state":"app.setup"}, {"name": "通讯录隐私设置", "state": "app.addrprivacyconfig"},{"name": "企业信息","state":"app.business"}],
	        "classes": ["fa-cog"]
	      },
	      {
	        "name": "管理日志",
	        "submenus": null,
	        "state": "app.managelogs",
	        "classes": ["fa-newspaper-o"]
	      }
	    ]
	    
	    $scope.submenuShow = function(num){
	    	$scope.isShow = [];
	    	$scope.isShow[num] = true;
	    };

	})


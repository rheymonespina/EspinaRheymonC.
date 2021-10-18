app.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "Adidas Pure Game", p_des:"EUE DE Toilette for men 100ml", p_image: "imgs/adi.jpg", p_price: 450},
					{p_id: "2", p_name: "Ferrari Black EAU DE Toilette", p_des:"For men perfume 125ml", p_image: "imgs/fera.png", p_price: 400},
					{p_id: "3", p_name: "Adidas Victory League", p_des:"EUE DE Toilette for men 100ml", p_image: "imgs/victory.jpg", p_price: 1600},
					{p_id: "4", p_name: "Adidas Dynamic Pulse", p_des:"EUE DE Toilette for men 100ml", p_image: "imgs/adiP.png", p_price: 750},
					{p_id: "5", p_name: "Ralph Lauren Polo Black", p_des:"Eau de Toilette for men 125ml",  p_image: "imgs/polo.jpg", p_price: 550},
					{p_id: "6", p_name: "Jo Malone Nectarine Blossom", p_des:"Honey EAU DE Cologne 100ml", p_image: "imgs/jomalone.jpg", p_price: 900},
					{p_id: "7", p_name: "Sweet night pour homme", p_des:"Collection Perfume 200ml ETP", p_image: "imgs/sweet.jpg", p_price: 255},
					{p_id: "8", p_name: "[EJM] Lacoste Black", p_des:"inspired by lacoste | 85ml", p_image: "imgs/lacoste.jpg", p_price: 999},
					{p_id: "9", p_name: "Lacoste White", p_des:"EAU DE Lacoste", p_image: "imgs/lacosteW.jpg", p_price: 600},
					{p_id: "10", p_name: "Christian Dior Sauvage", p_des:"Eau de Toilette for men 100ml", p_image: "imgs/savv.jpg", p_price: 400},

					
				];
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}

				$scope.hideandshow=false;
				$scope.$watch('hideandshow',function(){
					$scope.buttonvalue = $scope.hideandshow ? 'Back' : 'Click here';
				})
				

	});
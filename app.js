// 
var uiController = (function(){

})();

var financeController = (function(){

})();

var appController = (function(uiController, fnController){

	var ctrlAddItem = function() {

	}

	document.querySelector('.add__btn').addEventListener('click', function() {
		console.log('clicked');

		// 1. Get datas from display

		// 2. Send data to financeController

		// 3. Show data in the web

		// 4. Calculate budget

		// Show rest calculation to the web
	});

	document.addEventListener('keypress', function(event){
		if(event.keyCode === 13 || event.which ===13) {
			console.log('Enter pressed');
		} 		else console.log('Other key pressed');
	});

})(uiController, financeController );
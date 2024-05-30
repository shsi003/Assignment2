document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('productRegistry');
	const registry = document.getElementById('registry');

	//Retrieves registered products from local storage
	const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

	//display stored products
	

})
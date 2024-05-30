document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('productRegistry');
	const productList = document.getElementById('productList');

	//Retrieves registered products from local storage
	const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

	//display stored products
	function displayStoredProducts() {
		storedProducts.forEach(function(product) {
			const productInfo = createProductInfoElemen(product);
			productList.appendChild(productInfo);
		});
	}

	//Displays items when page is loaded
	displayStoredProducts();
	
	form.addEventListener('submit', function(event) {
		event.preventDefault();

		const productName = document.getElementById('productName').value; 
		const productID = document.getElementById('productID').value;
		const manufacturer = document.getElementById('manufacturer').value;
		const expirationDate = document.getElementById('expirationDate').value;
		const quantity = document.getElementById('quantity').value;

		if(productName.trim() === '' || productID.trim() === '' || manufacturer.trim() === '' || 
		expirationDate.trim() === '' || quantity.trim() === '') {
			alert('Please fill in all fields');
			return;
		}

		const product = {
			productName: productName,
			productID: productID,
			manufacturer: manufacturer,
			expirationDate: expirationDate,
			quantity: quantity
		};

		//storing products in local storage
		storedProducts.push(product);
		localStorage.setItem('products', JSON.stringify(storedProducts));

		const productInfo = createProductInfoElement(product);
		productList.appendChild(productInfo);

		forn.reset();

	});

	//Function for creating registered product element
	function createProductInfoElement(product) {
		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');
		productInfo.innerHTML = `
		<h3><strong>${product.productName}</strong></h3>
		<p><strong>ProductID:</strong>${product.productID}</p>
		<p><strong>Manufacturer</strong>${product.manufacturer}</p>
		<p><strong>Expiration Date:</strong>${product.expirationDate}</p>
		<p><strong>quantity:</strong>${product.quantity}</p>
		`;

		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.classList.add('delete-button');

		deleteButton.addEventListener('click', function() {
			const index = storedProducts.indexOf(product);
			if (index !== -1) {
				storedProducts.splice(index, 1);
				localStorage.setItem('products', JSON.stringify(storedProducts));
			}
			productList.removeChild(productInfo);
		});

		productInfo.appendChild(deleteButton);

		return productInfo;
	}


});
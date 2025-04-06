const itemsForSale = [
  { name: "Bread", price: 3.00, image: "images/bread.jpg" },
  { name: "Eggs", price: 5.00, image: "images/eggs.jpeg" },
  { name: "Milk", price: 4.00, image: "images/milk.jpg" },
  { name: "Butter", price: 4.00, image: "images/butter.jpeg" },
  { name: "Cheese", price: 3.00, image: "images/cheese.jpeg" },
  { name: "Yogurt", price: 4.00, image: "images/yogurt.jpeg" },
  { name: "Apples", price: 1.00, image: "images/apples.jpeg" },
  { name: "Strawberries", price: 3.00, image: "images/strawberries.jpeg" },
  { name: "Blueberries", price: 3.00, image: "images/blueberries.jpeg" },
  { name: "Chicken Slices", price: 5.00, image: "images/chicken.jpeg" },
  { name: "Turkey Slices", price: 5.00, image: "images/turkey.jpg" },
  { name: "Ham Slices", price: 5.00, image: "images/ham.jpg" },
  { name: "Fish", price: 7.00, image: "images/fish.jpg" }
  ];
    
    // Array to hold myCart items
    const myCart = [];
    
    // Function to display items for sale and cart items
    function displayItems() {
      const itemsList = document.getElementById("items-list");
      itemsList.innerHTML = "";
      itemsForSale.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = 
         `<img src="${item.image}" alt="${item.name}">
          <span>${item.name} - $${item.price.toFixed(2)}</span>
          <button onclick="addToCart('${item.name}')">Add to Cart</button>`;
        itemsList.appendChild(div);
      });
    }
    
    // Function to display myCart items
    function displayCart() {
      const cartDiv = document.getElementById("cart");
      cartDiv.innerHTML = "";
      let total = 0;
      myCart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = 
          `<img src="${item.image}" alt="${item.name}">
          <span>${item.name} - $${item.price.toFixed(2)}</span>
          <button onclick="removeFromCart(${index})">Remove from Cart</button>`;
        cartDiv.appendChild(div);
      });
      document.getElementById("total").textContent = total.toFixed(2);
    }
    
    function addToCart(name) {
      const item = itemsForSale.find(i => i.name === name);
      if (item) {
        myCart.push(item);
        displayCart();
      }
    }
    
    function removeFromCart(index) {
      myCart.splice(index, 1);
      displayCart();
    }
    
    displayItems();
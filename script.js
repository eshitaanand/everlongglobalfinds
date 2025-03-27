const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");
cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

const addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach(button => {
    button.addEventListener("click", event => {
        const productBox = event.target.closest(".pro");
        addToCart(productBox);
    });
});
const cartContent = document.querySelector(".cart-content");
const addToCart = productBox => {
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector("h5").textContent;
    const productPrice = productBox.querySelector("h4").textContent;

    const cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    cartBox.innerHTML = `
     <img src="${productImgSrc}" class="cart-img">
          <div class="cart-detail">
            <h2 class="cart-product-title">${productTitle}</h2>
            <span class="cart-price">${productPrice}</span>
            <div class="cart-quantity">
            <button id="decrement">-</button>
            <span class="number">1</span>
            <button id="increment">+</button>
          </div>
          </div>
        
        <i class="fa-solid fa-trash cart-remove"></i>
    `;

    cartContent.appendChild(cartBox);

    cartBox.querySelector(".cart-remove").addEventListener("click", event => {
        cartBox.remove();

        updateCartCount(-1);

        updateTotalPrice();
    });

    cartBox.querySelector(".cart-quantity").addEventListener("click", event => {
        const numberElement = cartBox.querySelector(".number");
        const decrementButton = cartBox.querySelector("#decrement");
        let quantity = numberElement.textContent;

        if (event.target.id === "decrement" && quantity > 1) {
            quantity--;
            if (quantity === 1) {
                decrementButton.style.color = "#999";
            }
        } else if (event.target.id === "increment") {
            quantity++;
            decrementButton.style.color = "#333";
        }
        numberElement.textContent = quantity;

        updateTotalPrice();
    });

    updateCartCount(1);

    updateTotalPrice();
};

const updateTotalPrice = () => {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    let total = 0;
    cartBoxes.forEach(cartBox => {
        const priceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".number");
        const price = priceElement.textContent.replace("$", "");
        const quantity = quantityElement.textContent;
        total += price * quantity;
    });
    totalPriceElement.textContent = `₹${total}`;
};

let cartItemCount = 0;
const updateCartCount = change => {
    const cartItemCountBadge = document.querySelector(".cart-item-count");
    cartItemCount += change;
    if (cartItemCount > 0) {
        cartItemCountBadge.style.visibility = "visible";
        cartItemCountBadge.textContent = cartItemCount;
    } else {
        cartItemCountBadge.style.visibility = "hidden";
        cartItemCountBadge.textContent = "";
    };
};

const buyNowButton = document.querySelector(".btn-buy");
buyNowButton.addEventListener("click", () => {
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    if (cartBoxes.length === 0) {
        alert("Your cart is empty. Please add items to your cart before buying.");
        return;
    }

    cartBoxes.forEach(cartBox => cartBox.remove());

    cartItemCount = 0;
    updateCartCount(0);
    updateTotalPrice();
    alert("Thank you for your purchase!")
})



// pop up message
let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

// buy
let buy = document.getElementById("buy");

function openBuy() {
    buy.classList.add("open-buy");
}
function closeBuy() {
    buy.classList.remove("open-buy");
}
// pop up message




const allHover = document.querySelectorAll('.hover div img')
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHover[0].parentElement.classList.add('active');
});

allHover.forEach((image) => {
    image.addEventListener('mouseover', () => {
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
    });
});

function resetActiveImg() {
    allHover.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
};

function toggleContent() {
    const content = document.getElementById('content');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}
function toggleContent1() {
    const content1 = document.getElementById('content1');
    content1.style.display = content1.style.display === 'none' ? 'block' : 'none';
}
function toggleContent2() {
    const content2 = document.getElementById('content2');
    content2.style.display = content2.style.display === 'none' ? 'block' : 'none';
}
function toggleContent3() {
    const content3 = document.getElementById('content3');
    content3.style.display = content3.style.display === 'none' ? 'block' : 'none';
}


$("#zoom").elevateZoom();




const rangeInput = document.querySelectorAll(".range-input input"),
          priceInput = document.querySelectorAll(".price-input input"),
          progress = document.querySelector(".slider .progress");

      let priceGap = 1000;

      rangeInput.forEach(input => {
          input.addEventListener("input", e => {
              let minVal = parseInt(rangeInput[0].value),
                  maxVal = parseInt(rangeInput[1].value);

              if (maxVal - minVal < priceGap) {
                  if (e.target.className === "range-min") {
                      rangeInput[0].value = maxVal - priceGap;
                  } else {
                      rangeInput[1].value = minVal + priceGap;
                  }
              } else {
                  priceInput[0].value = minVal;
                  priceInput[1].value = maxVal;
                  progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                  progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
              }
          });
      });

      const priceRange = document.getElementById('price-range');
      const minPrice = document.getElementById('min-price');
      const maxPrice = document.getElementById('max-price');
      
      // Update the max price display when the range slider changes
      priceRange.addEventListener('input', function() {
        maxPrice.textContent = priceRange.value;
      });

       //    Details Show Hide 
       function toggleDetails() {
        const details = document.getElementById('details');
        const button = document.querySelector('button');
        if (details.style.display === 'none') {
          details.style.display = 'block';
          button.textContent = 'Hide Details';
        } else {
          details.style.display = 'none';
          button.textContent = 'Show Details';
        }
      }
        //    Details Show Hide 


       
        document.addEventListener("DOMContentLoaded", function() {
            const mobileToggle = document.getElementById("mobileDropdownToggle");
            const dropdownMenu = mobileToggle.parentElement.querySelector(".dropdown-menu");
          
            // Mobile view: Toggle dropdown menu when toggle button is clicked
            mobileToggle.addEventListener("click", function(e) {
              e.preventDefault();
              e.stopPropagation();
              dropdownMenu.classList.toggle("show");
            });
          
            // Mobile view: Close dropdown if clicked outside the toggle button or menu
            document.addEventListener("click", function(e) {
              if (!mobileToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove("show");
              }
            });
          });
          

          // Quantity of product details
        function increase() {
            let quantity = document.getElementById('quantity');
            quantity.textContent = parseInt(quantity.textContent) + 1;
        }
        
        function decrease() {
            let quantity = document.getElementById('quantity');
            if (parseInt(quantity.textContent) > 1) {
                quantity.textContent = parseInt(quantity.textContent) - 1;
            }
        }
          // Quantity of product details
          
          
        //   log in
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let errorMessage = document.getElementById("error-message");
        
            if (username === "admin" && password === "password123") {
                alert("Login successful!");
                errorMessage.textContent = "";
            } else {
                errorMessage.textContent = "Invalid username or password.";
            }
        });
        
        // log in


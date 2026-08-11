/* ==========================================================================
   Crave Nest — Master Application Logic (Vanilla JS ES6+)
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. Dataset: Meals & Menu Data
// --------------------------------------------------------------------------
const MEALS_DATA = [
  {
    id: "meal-1",
    name: "Smokey Jollof Fiesta Bowl",
    category: "nigerian",
    price: 4500,
    rating: 4.9,
    reviewsCount: 142,
    prepTime: "20 min",
    calories: "580 kcal",
    badge: "Bestseller",
    image: "/src/assets/images/hero_food_bowl_1786437959509.jpg",
    description: "Authentic wood-fire smokey Nigerian Jollof rice served with juicy peppered chicken, golden dodo (fried plantain), and boiled egg.",
    ingredients: ["Long Grain Parboiled Rice", "Tomato Paste", "Scotch Bonnet", "Grilled Chicken", "Fried Plantain", "Spices"]
  },
  {
    id: "meal-2",
    name: "Pounded Yam & Egusi Supreme",
    category: "nigerian",
    price: 5200,
    rating: 4.95,
    reviewsCount: 98,
    prepTime: "25 min",
    calories: "690 kcal",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    description: "Piping hot fluffy pounded yam served with rich melon seed Egusi soup, tender goat meat, stockfish, and fresh ugu leaves.",
    ingredients: ["Organic Yam", "Melon Seeds", "Goat Meat", "Stockfish", "Ugu Leaves", "Palm Oil"]
  },
  {
    id: "meal-3",
    name: "Suya Spice Beef Platter",
    category: "nigerian",
    price: 3800,
    rating: 4.85,
    reviewsCount: 115,
    prepTime: "15 min",
    calories: "450 kcal",
    badge: "Spicy",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    description: "Char-broiled tender beef skewers marinated in crushed Yaji peanut pepper spice, served with sliced red onions and vine tomatoes.",
    ingredients: ["Prime Beef Strips", "Yaji Suya Spice", "Peanuts", "Red Onions", "Tomatoes", "Vegetable Oil"]
  },
  {
    id: "meal-4",
    name: "Gourmet Avocado Grain Bowl",
    category: "healthy",
    price: 4200,
    rating: 4.8,
    reviewsCount: 84,
    prepTime: "15 min",
    calories: "410 kcal",
    badge: "Vegan Choice",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    description: "Fluffy quinoa, massaged kale, roasted sweet potatoes, sliced Hass avocado, crisp chickpeas, and lemon tahini dressing.",
    ingredients: ["Tri-color Quinoa", "Hass Avocado", "Roasted Sweet Potato", "Kale", "Crispy Chickpeas", "Tahini"]
  },
  {
    id: "meal-5",
    name: "Truffle Mushroom Cream Pasta",
    category: "continental",
    price: 4800,
    rating: 4.9,
    reviewsCount: 76,
    prepTime: "20 min",
    calories: "620 kcal",
    badge: "Chef Special",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281288?auto=format&fit=crop&w=800&q=80",
    description: "Al dente penne pasta tossed in rich wild mushroom truffle cream sauce, topped with aged parmesan shavings and fresh parsley.",
    ingredients: ["Penne Pasta", "Wild Mushrooms", "Black Truffle Oil", "Heavy Cream", "Parmesan Cheese", "Garlic"]
  },
  {
    id: "meal-6",
    name: "The Ultimate Crave Burger",
    category: "continental",
    price: 3900,
    rating: 4.88,
    reviewsCount: 160,
    prepTime: "18 min",
    calories: "710 kcal",
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    description: "Double smash beef patty, melted sharp cheddar, caramelized onions, crisp butter lettuce, and signature secret house sauce in brioche.",
    ingredients: ["Angus Beef Patty", "Brioche Bun", "Sharp Cheddar", "Caramelized Onions", "House Burger Sauce"]
  },
  {
    id: "meal-7",
    name: "Berry Acai Crunch Bowl",
    category: "dessert",
    price: 3200,
    rating: 4.92,
    reviewsCount: 62,
    prepTime: "10 min",
    calories: "320 kcal",
    badge: "Fresh & Sweet",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    description: "Thick organic acai blend topped with fresh strawberries, blueberries, toasted coconut flakes, chia seeds, and wild honey granola.",
    ingredients: ["Organic Acai Berry", "Fresh Strawberries", "Blueberries", "Honey Granola", "Chia Seeds", "Coconut"]
  },
  {
    id: "meal-8",
    name: "Hibiscus Zobo Mojito",
    category: "drinks",
    price: 1800,
    rating: 4.96,
    reviewsCount: 210,
    prepTime: "5 min",
    calories: "140 kcal",
    badge: "Refreshing",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    description: "Chilled organic hibiscus tea infused with fresh mint leaves, crushed ginger, lime citrus, and natural cane sugar.",
    ingredients: ["Dried Hibiscus Flowers", "Fresh Mint", "Root Ginger", "Lime Juice", "Cane Sugar", "Ice"]
  }
];

// Gallery Items Dataset
const GALLERY_DATA = [
  { title: "Woodfire Jollof Platter", category: "Nigerian Cuisine", image: "/src/assets/images/hero_food_bowl_1786437959509.jpg" },
  { title: "Master Chef Food Prep", category: "Open Kitchen", image: "/src/assets/images/cravenest_food_prep_1786437975595.jpg" },
  { title: "Smokey Beef Suya", category: "Grill & BBQ", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80" },
  { title: "Fresh Avocado Grain Bowl", category: "Healthy Bowls", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" },
  { title: "Signature Crave Burger", category: "Gourmet Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80" },
  { title: "Chilled Hibiscus Zobo", category: "Artisanal Drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80" }
];

// Testimonials Dataset
const TESTIMONIALS_DATA = [
  {
    name: "Dr. Chioma Adebayo",
    role: "Food Blogger & Lifestyle Critic",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Crave Nest has completely redefined gourmet food delivery in Nigeria! The Smokey Jollof Fiesta Bowl arrived steaming hot, perfectly seasoned, and delivered in under 20 minutes. Exceptional flavor and pristine presentation!"
  },
  {
    name: "Alexander Wright",
    role: "Tech Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "As someone who orders lunch daily, Crave Nest's consistency is unmatched. Their Avocado Grain Bowl is super fresh and healthy, while the Truffle Pasta is pure luxury. Easily my favorite food brand!"
  },
  {
    name: "Funke Okafor",
    role: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "The Pounded Yam & Egusi Supreme literally tastes like a warm hug from home! You can tell every ingredient is top shelf. The online ordering experience was seamless and sleek."
  }
];

// --------------------------------------------------------------------------
// 2. Application State & Storage
// --------------------------------------------------------------------------
let state = {
  cart: JSON.parse(localStorage.getItem('cravenest_cart')) || [],
  favorites: JSON.parse(localStorage.getItem('cravenest_favorites')) || [],
  theme: localStorage.getItem('cravenest_theme') || 'light',
  activeFilter: 'all',
  searchQuery: '',
  appliedDiscount: 0, // 0 to 1 (e.g. 0.3 for 30%)
  promoCode: '',
  testimonialIndex: 0
};

// Save state helpers
function saveCart() {
  localStorage.setItem('cravenest_cart', JSON.stringify(state.cart));
  updateCartUI();
}

function saveFavorites() {
  localStorage.setItem('cravenest_favorites', JSON.stringify(state.favorites));
}

// --------------------------------------------------------------------------
// 3. DOM Ready Initialization
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderMeals();
  renderGallery();
  renderTestimonials();
  updateCartUI();
  setupEventListeners();
  setupScrollSpyAndHeader();
  setupCountersObserver();
  setupTypewriterEffect();
});

// --------------------------------------------------------------------------
// 4. Theme Toggle Logic
// --------------------------------------------------------------------------
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('cravenest_theme', state.theme);
  updateThemeIcon();
  showToast(`Switched to ${state.theme.toUpperCase()} mode`, 'info');
}

function updateThemeIcon() {
  const icon = document.getElementById('theme-toggle-icon');
  if (icon) {
    icon.className = state.theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
  }
}

// --------------------------------------------------------------------------
// 5. Render Meals Grid with Filtering
// --------------------------------------------------------------------------
function renderMeals() {
  const container = document.getElementById('mealsContainer');
  if (!container) return;

  const filtered = MEALS_DATA.filter(meal => {
    const matchesFilter = state.activeFilter === 'all' || meal.category === state.activeFilter;
    const matchesSearch = meal.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          meal.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <i class="ri-restaurant-line" style="font-size: 3rem; color: var(--text-muted); opacity: 0.5;"></i>
        <h4 style="margin-top: 1rem; font-size: 1.2rem;">No delicious meals found</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Try searching for another keyword or change your category filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(meal => {
    const isFav = state.favorites.includes(meal.id);
    const cartItem = state.cart.find(item => item.id === meal.id);
    const inCartQty = cartItem ? cartItem.quantity : 0;

    const actionHtml = inCartQty > 0 ? `
      <div class="meal-qty-stepper">
        <button class="btn-qty-step minus" onclick="updateCartQty('${meal.id}', -1)" title="Decrease quantity">
          <i class="ri-subtract-line"></i>
        </button>
        <span class="meal-qty-count">${inCartQty}</span>
        <button class="btn-qty-step plus" onclick="updateCartQty('${meal.id}', 1)" title="Increase quantity">
          <i class="ri-add-line"></i>
        </button>
      </div>
    ` : `
      <button class="btn-add-cart" onclick="addToCart('${meal.id}')" title="Add to Cart">
        <i class="ri-add-line"></i> <span class="add-txt">Add</span>
      </button>
    `;

    return `
      <div class="meal-card" data-meal-id="${meal.id}">
        <div class="meal-img-container">
          <img src="${meal.image}" alt="${meal.name}" class="meal-img" loading="lazy" />
          <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${meal.id}')" aria-label="Add to favorites">
            <i class="${isFav ? 'ri-heart-fill' : 'ri-heart-line'}"></i>
          </button>
          <span class="meal-badge">${meal.badge}</span>
        </div>
        <div class="meal-content">
          <div class="meal-meta-row">
            <div class="meal-rating">
              <i class="ri-star-fill"></i>
              <span>${meal.rating} (${meal.reviewsCount})</span>
            </div>
            <span><i class="ri-time-line"></i> ${meal.prepTime} • 🔥 ${meal.calories}</span>
          </div>
          <h4 class="meal-title">${meal.name}</h4>
          <p class="meal-desc">${meal.description}</p>
          <div class="meal-footer-row">
            <div class="meal-price">₦${meal.price.toLocaleString()}</div>
            <div class="meal-actions-group">
              <button class="btn-quick-view" onclick="openQuickViewModal('${meal.id}')">Details</button>
              <div class="meal-cart-action-wrapper">
                ${actionHtml}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 6. Favorites & Cart Logic
// --------------------------------------------------------------------------
function toggleFavorite(mealId) {
  const index = state.favorites.indexOf(mealId);
  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast('Removed from favorites');
  } else {
    state.favorites.push(mealId);
    showToast('Saved to your favorites ❤️', 'orange');
  }
  saveFavorites();
  renderMeals();
}

function addToCart(mealId, qty = 1, addOns = []) {
  const meal = MEALS_DATA.find(m => m.id === mealId);
  if (!meal) return;

  const existing = state.cart.find(item => item.id === mealId);
  if (existing) {
    existing.quantity += qty;
  } else {
    state.cart.push({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      image: meal.image,
      quantity: qty,
      addOns: addOns
    });
  }

  saveCart();
  showToast(`Added "${meal.name}" to cart! 🛍️`, 'orange');
  animateCartBadge();
}

function updateCartQty(mealId, delta) {
  const item = state.cart.find(i => i.id === mealId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== mealId);
  }
  saveCart();
}

function removeCartItem(mealId) {
  state.cart = state.cart.filter(i => i.id !== mealId);
  saveCart();
  showToast('Item removed from cart');
}

function updateCartUI() {
  const badge = document.getElementById('cartBadgeCount');
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (badge) {
    badge.innerText = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  }

  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountEl = document.getElementById('cartDiscount');
  const grandTotalEl = document.getElementById('cartGrandTotal');

  if (!cartItemsContainer) return;

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="ri-shopping-basket-line" style="font-size: 3.5rem; opacity: 0.4;"></i>
        <h5 style="margin-top: 1rem; font-size: 1.1rem; color: var(--text-primary);">Your cart is empty</h5>
        <p style="font-size: 0.85rem;">Discover our delicious meals and satisfy your cravings!</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = "₦0";
    if (discountEl) discountEl.innerText = "-₦0";
    if (grandTotalEl) grandTotalEl.innerText = "₦0";
    return;
  }

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * state.appliedDiscount;
  const deliveryFee = 1000; // ₦1,000 standard flat delivery
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  cartItemsContainer.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <h5 class="cart-item-title">${item.name}</h5>
        <div class="cart-item-price">₦${(item.price * item.quantity).toLocaleString()}</div>
        <div class="cart-qty-controls">
          <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
          <span style="font-size: 0.85rem; font-weight: 700; padding: 0 0.4rem;">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
          <button style="margin-left: auto; color: #E63946; font-size: 1.1rem;" onclick="removeCartItem('${item.id}')" title="Remove">
            <i class="ri-delete-bin-line"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (subtotalEl) subtotalEl.innerText = `₦${subtotal.toLocaleString()}`;
  if (discountEl) discountEl.innerText = `-₦${discountAmount.toLocaleString()}`;
  if (grandTotalEl) grandTotalEl.innerText = `₦${grandTotal.toLocaleString()}`;

  updateMealCardsCartUI();
}

function updateMealCardsCartUI() {
  document.querySelectorAll('.meal-card[data-meal-id]').forEach(card => {
    const mealId = card.getAttribute('data-meal-id');
    const wrapper = card.querySelector('.meal-cart-action-wrapper');
    if (!wrapper || !mealId) return;

    const cartItem = state.cart.find(i => i.id === mealId);
    const inCartQty = cartItem ? cartItem.quantity : 0;

    if (inCartQty > 0) {
      wrapper.innerHTML = `
        <div class="meal-qty-stepper">
          <button class="btn-qty-step minus" onclick="updateCartQty('${mealId}', -1)" title="Decrease quantity">
            <i class="ri-subtract-line"></i>
          </button>
          <span class="meal-qty-count">${inCartQty}</span>
          <button class="btn-qty-step plus" onclick="updateCartQty('${mealId}', 1)" title="Increase quantity">
            <i class="ri-add-line"></i>
          </button>
        </div>
      `;
    } else {
      wrapper.innerHTML = `
        <button class="btn-add-cart" onclick="addToCart('${mealId}')" title="Add to Cart">
          <i class="ri-add-line"></i> <span class="add-txt">Add</span>
        </button>
      `;
    }
  });
}

let modalCurrentQty = 1;

function changeModalQty(delta) {
  modalCurrentQty = Math.max(1, modalCurrentQty + delta);
  const qtyEl = document.getElementById('modalQtyVal');
  if (qtyEl) qtyEl.innerText = modalCurrentQty;
}

function addModalQtyToCart(mealId) {
  addToCart(mealId, modalCurrentQty);
  closeAllModals();
}

function applyPromoCode() {
  const input = document.getElementById('promoCodeInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'CRAVE30') {
    state.appliedDiscount = 0.3;
    state.promoCode = code;
    showToast('🎉 Promo code CRAVE30 applied! 30% OFF', 'orange');
    updateCartUI();
  } else {
    showToast('Invalid promo code. Try "CRAVE30"', 'error');
  }
}

function animateCartBadge() {
  const badge = document.getElementById('cartBadgeCount');
  if (badge) {
    badge.style.transform = 'scale(1.4)';
    setTimeout(() => { badge.style.transform = 'scale(1)'; }, 250);
  }
}

// --------------------------------------------------------------------------
// 7. Modals (Quick View, Cart Drawer, Lightbox, Checkout)
// --------------------------------------------------------------------------
function openQuickViewModal(mealId) {
  const meal = MEALS_DATA.find(m => m.id === mealId);
  if (!meal) return;

  modalCurrentQty = 1;
  const modalBackdrop = document.getElementById('quickViewModal');
  const modalContent = document.getElementById('quickViewContent');
  if (!modalBackdrop || !modalContent) return;

  modalContent.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.8rem; align-items: center;">
      <div>
        <img src="${meal.image}" alt="${meal.name}" style="width: 100%; height: 280px; object-fit: cover; border-radius: var(--radius-md);" />
      </div>
      <div>
        <span class="meal-badge" style="position: static; display: inline-block; margin-bottom: 0.6rem;">${meal.badge}</span>
        <h3 style="font-size: 1.6rem; margin-bottom: 0.5rem; color: var(--text-primary);">${meal.name}</h3>
        <div style="color: #FFB703; font-weight: 700; margin-bottom: 0.8rem;">
          <i class="ri-star-fill"></i> ${meal.rating} (${meal.reviewsCount} Customer Reviews)
        </div>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.2rem; line-height: 1.6;">
          ${meal.description}
        </p>
        <div style="margin-bottom: 1.2rem;">
          <h5 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.4rem;">Ingredients:</h5>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
            ${meal.ingredients.map(ing => `<span style="background: var(--bg-main); padding: 0.3rem 0.7rem; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 600;">${ing}</span>`).join('')}
          </div>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1.5rem; padding-top: 1.2rem; border-top: 1px solid var(--border-color); flex-wrap: wrap;">
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--primary-orange);">₦${meal.price.toLocaleString()}</div>
          <div style="display: flex; align-items: center; gap: 0.8rem;">
            <div class="meal-qty-stepper large">
              <button class="btn-qty-step minus" onclick="changeModalQty(-1)" title="Decrease">
                <i class="ri-subtract-line"></i>
              </button>
              <span id="modalQtyVal" class="meal-qty-count">1</span>
              <button class="btn-qty-step plus" onclick="changeModalQty(1)" title="Increase">
                <i class="ri-add-line"></i>
              </button>
            </div>
            <button class="btn btn-primary" onclick="addModalQtyToCart('${meal.id}')">
              <i class="ri-shopping-bag-line"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('active');
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawerBackdrop');
  if (drawer) drawer.classList.add('active');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawerBackdrop');
  if (drawer) drawer.classList.remove('active');
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
  closeCartDrawer();
}

function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty!', 'error');
    return;
  }
  closeCartDrawer();
  const checkoutModal = document.getElementById('checkoutModal');
  if (checkoutModal) checkoutModal.classList.add('active');
}

function processCheckout(event) {
  event.preventDefault();
  const checkoutBtn = document.getElementById('checkoutSubmitBtn');
  if (checkoutBtn) {
    checkoutBtn.disabled = true;
    checkoutBtn.innerText = "Processing Order...";
  }

  setTimeout(() => {
    state.cart = [];
    saveCart();
    closeAllModals();
    showToast('🎉 Order Placed Successfully! Estimated Delivery: 25 Mins', 'orange');
    if (checkoutBtn) {
      checkoutBtn.disabled = false;
      checkoutBtn.innerText = "Place Order";
    }
  }, 1500);
}

function sendCartToWhatsApp(event) {
  if (state.cart.length === 0) {
    if (event) event.preventDefault();
    showToast('Your cart is empty! Add meals before ordering on WhatsApp.', 'error');
    return;
  }

  let text = "👋 *Hello Crave Nest!* I would like to place an order:\n\n";
  let subtotal = 0;

  state.cart.forEach((item, index) => {
    const meal = MEALS_DATA.find(m => m.id === item.id);
    if (meal) {
      const itemTotal = meal.price * item.quantity;
      subtotal += itemTotal;
      text += `${index + 1}. *${meal.name}* (x${item.quantity}) - ₦${itemTotal.toLocaleString()}\n`;
    }
  });

  const discount = subtotal * state.appliedDiscount;
  const delivery = 1000;
  const grandTotal = Math.max(0, subtotal - discount + delivery);

  text += `\n💵 *Subtotal:* ₦${subtotal.toLocaleString()}`;
  if (discount > 0) {
    text += `\n🏷️ *Discount (${state.promoCode}):* -₦${discount.toLocaleString()}`;
  }
  text += `\n🚚 *Express Delivery:* ₦${delivery.toLocaleString()}`;
  text += `\n⭐ *Grand Total:* ₦${grandTotal.toLocaleString()}`;
  text += `\n\n📍 Please confirm delivery availability and payment details!`;

  const phone = "2348082977161";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  
  if (event) event.preventDefault();
  window.open(url, '_blank');
}

// --------------------------------------------------------------------------
// 8. Gallery & Lightbox
// --------------------------------------------------------------------------
function renderGallery() {
  const container = document.getElementById('galleryContainer');
  if (!container) return;

  container.innerHTML = GALLERY_DATA.map((item, idx) => `
    <div class="gallery-item" onclick="openLightbox(${idx})">
      <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy" />
      <div class="gallery-overlay">
        <h5 class="gallery-title">${item.title}</h5>
        <span class="gallery-category">${item.category}</span>
      </div>
    </div>
  `).join('');
}

let currentLightboxIndex = 0;
function openLightbox(index) {
  currentLightboxIndex = index;
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImage');
  const caption = document.getElementById('lightboxCaption');

  if (modal && img && GALLERY_DATA[index]) {
    img.src = GALLERY_DATA[index].image;
    if (caption) caption.innerText = `${GALLERY_DATA[index].title} — ${GALLERY_DATA[index].category}`;
    modal.classList.add('active');
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('active');
}

// --------------------------------------------------------------------------
// 9. Testimonials Carousel
// --------------------------------------------------------------------------
function renderTestimonials() {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;

  container.innerHTML = TESTIMONIALS_DATA.map(t => `
    <div class="testimonial-card">
      <i class="ri-double-quotes-l review-quote-icon"></i>
      <p class="review-text">"${t.text}"</p>
      <div class="reviewer-profile">
        <img src="${t.avatar}" alt="${t.name}" class="reviewer-avatar" />
        <div class="reviewer-info">
          <h5>${t.name}</h5>
          <p>${t.role}</p>
          <div class="stars-row">
            ${'<i class="ri-star-fill"></i>'.repeat(t.rating)}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function nextTestimonial() {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;
  container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
}

function prevTestimonial() {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;
  container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
}

// --------------------------------------------------------------------------
// 10. Scroll Spy, Header & Progress Bar
// --------------------------------------------------------------------------
function setupScrollSpyAndHeader() {
  const header = document.querySelector('.header');
  const progressBar = document.getElementById('scrollProgressBar');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Scroll progress bar
    if (progressBar && height > 0) {
      progressBar.style.width = `${(scrollY / height) * 100}%`;
    }

    // Sticky Header
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scroll spy link highlighting
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// --------------------------------------------------------------------------
// 11. Animated Counters (Intersection Observer)
// --------------------------------------------------------------------------
function setupCountersObserver() {
  const counterElements = document.querySelectorAll('.counter-num[data-target]');
  if (counterElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseFloat(entry.target.getAttribute('data-target'));
        const prefix = entry.target.getAttribute('data-prefix') || '';
        const suffix = entry.target.getAttribute('data-suffix') || '';
        animateValue(entry.target, 0, target, 2000, prefix, suffix);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => observer.observe(el));
}

function animateValue(obj, start, end, duration, prefix = '', suffix = '') {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentValue = (progress * (end - start) + start);
    
    // Format nicely
    if (Number.isInteger(end)) {
      obj.innerHTML = prefix + Math.floor(currentValue).toLocaleString() + suffix;
    } else {
      obj.innerHTML = prefix + currentValue.toFixed(1) + suffix;
    }

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// --------------------------------------------------------------------------
// 12. Typewriter Effect
// --------------------------------------------------------------------------
function setupTypewriterEffect() {
  const headline = document.getElementById('heroHeadlineText');
  if (!headline) return;

  const phrases = ["Delivered With Care.", "Made Fresh Daily.", "Pure Culinary Joy."];
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIdx];
    if (isDeleting) {
      headline.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
    } else {
      headline.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentPhrase.length) {
      speed = 2000; // Pause at end of phrase
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      speed = 500;
    }

    setTimeout(type, speed);
  }

  type();
}

// --------------------------------------------------------------------------
// 13. Toast Notification Helper
// --------------------------------------------------------------------------
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'orange' ? 'toast-orange' : ''}`;
  toast.innerHTML = `
    <i class="ri-checkbox-circle-fill"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => { toast.remove(); }, 350);
  }, 3000);
}

// --------------------------------------------------------------------------
// 14. Event Listeners Setup
// --------------------------------------------------------------------------
function setupEventListeners() {
  // Category Filter Tabs
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      state.activeFilter = e.target.getAttribute('data-filter');
      renderMeals();
    });
  });

  // Category Cards Quick Click
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      const filterBtn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
      if (filterBtn) filterBtn.click();
      
      const menuSection = document.getElementById('menu');
      if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Search Input
  const searchInput = document.getElementById('mealSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderMeals();
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      if (emailInput && emailInput.value.trim()) {
        showToast('🎉 Thank you for subscribing to Crave Nest!', 'orange');
        emailInput.value = '';
      }
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('📩 Message sent! Our team will respond shortly.', 'orange');
      contactForm.reset();
    });
  }

  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Back To Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

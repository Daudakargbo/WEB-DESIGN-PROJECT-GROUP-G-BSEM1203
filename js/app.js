/* ============================================
   SIERRA WALMART – MAIN APPLICATION JS
   ============================================ */

// ─── Product Database ───────────────────────────────
const CATEGORIES = [
  { name: "Electronics", img: "smartphone.png", desc: "Latest electronics and gadgets.", items: [
    { name: "Apple iPad Pro 12.9\"", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80" },
    { name: "Asus ROG Strix G15", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&q=80" },
    { name: "LG OLED 55\" C2 TV", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80" },
    { name: "Sony WH-1000XM5", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80" },
    { name: "Anker PowerCore 26800mAh", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80" },
    { name: "Google Pixel 7 Pro", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=80" },
    { name: "Lenovo ThinkPad X1 Carbon", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80" },
    { name: "Microsoft Xbox Series X", image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?w=600&q=80" },
    { name: "Nikon Z6 II Mirrorless Camera", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80" },
    { name: "Bose SoundLink Revolve+", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80" }
  ]},
  { name: "Fashion", img: "clothing.png", desc: "Trendy and comfortable clothing.", items: [
    { name: "Adidas Ultraboost 22", image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&q=80" },
    { name: "Traditional Kente Cloth Wrap", image: "https://images.unsplash.com/photo-1563110461-a4ebaf25fc2f?w=600&q=80" },
    { name: "Ralph Lauren Oxford Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=600&q=80" },
    { name: "Levi's 501 Original Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80" },
    { name: "Michael Kors Tote Bag", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=600&q=80" },
    { name: "Converse Chuck Taylor All Star", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80" },
    { name: "Sterling Silver Hoop Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
    { name: "Casio G-Shock Watch", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=80" },
    { name: "Cashmere Winter Beanie", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=80" },
    { name: "Children's Denim Overalls", image: "https://images.unsplash.com/photo-1519238263530-99bad11153e0?w=600&q=80" }
  ]},
  { name: "Groceries", img: "rice.png", desc: "Fresh groceries and everyday essentials.", items: [
    { name: "Basmati Rice 20kg Bag", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80" },
    { name: "Olive Oil Extra Virgin 1L", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80" },
    { name: "Nido Fortified Milk Powder 900g", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80" },
    { name: "Knorr Chicken Cubes 50 Pack", image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=600&q=80" },
    { name: "Heinz Tomato Ketchup 1kg", image: "https://images.unsplash.com/photo-1601314115161-5cc710dcbbbb?w=600&q=80" },
    { name: "Brown Sugar 2kg", image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=600&q=80" },
    { name: "Twinings Earl Grey Tea", image: "https://images.unsplash.com/photo-1576092762791-dd9e2220afa1?w=600&q=80" },
    { name: "Kellogg's Corn Flakes 500g", image: "https://images.unsplash.com/photo-1504306555186-0adbc2b48a04?w=600&q=80" },
    { name: "Barilla Penne Pasta 500g", image: "https://images.unsplash.com/photo-1551462147-37885acc36f1?w=600&q=80" },
    { name: "Nescafe Classic Instant Coffee 200g", image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=600&q=80" }
  ]},
  { name: "Home & Kitchen", img: "cookware.svg", desc: "Quality items for your home.", items: [
    { name: "Tefal 10-Piece Cookware Set", image: "https://images.unsplash.com/photo-1584990347449-a6ab063c1585?w=600&q=80" },
    { name: "Ninja Professional Blender", image: "https://images.unsplash.com/photo-1585237832892-0b7dc97607a9?w=600&q=80" },
    { name: "Panasonic Solo Microwave", image: "https://images.unsplash.com/photo-1585659722983-3a6750f22f77?w=600&q=80" },
    { name: "LG Double Door Fridge 300L", image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80" },
    { name: "Philips Daily Collection Kettle", image: "https://images.unsplash.com/photo-1594968153406-382a931d87e1?w=600&q=80" },
    { name: "Corelle 18-Piece Dinner Set", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&q=80" },
    { name: "Egyptian Cotton King Bed Sheet", image: "https://images.unsplash.com/photo-1522771731478-44eb9fa5f2ce?w=600&q=80" },
    { name: "Dyson V8 Absolute Vacuum", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&q=80" },
    { name: "Binatone Industrial Fan", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=600&q=80" },
    { name: "Samsung Front Load Washer", image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80" }
  ]},
  { name: "Beauty & Personal Care", img: "beauty.svg", desc: "Premium personal care products.", items: [
    { name: "L'Oreal Paris Revitalift Serum", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80" },
    { name: "Nivea Cocoa Butter Body Lotion", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80" },
    { name: "MAC Ruby Woo Lipstick", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&q=80" },
    { name: "Chanel Coco Mademoiselle 100ml", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80" },
    { name: "Head & Shoulders Cool Menthol", image: "https://images.unsplash.com/photo-1600180758890-7b3b44b8a213?w=600&q=80" },
    { name: "Dettol Original Soap 4 Pack", image: "https://images.unsplash.com/photo-1600857062241-9a3c247de7eb?w=600&q=80" },
    { name: "Real Techniques Brush Set", image: "https://images.unsplash.com/photo-1512496015851-a1c848daae55?w=600&q=80" },
    { name: "Cetaphil Gentle Skin Cleanser", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80" },
    { name: "Wahl Professional Clipper", image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=600&q=80" },
    { name: "Colgate Total 12 Toothpaste", image: "https://images.unsplash.com/photo-1559837264-b5a794019a8d?w=600&q=80" }
  ]},
  { name: "Sports & Fitness", img: "football.svg", desc: "Equipment for your active lifestyle.", items: [
    { name: "Adidas UCL Pro Football", image: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?w=600&q=80" },
    { name: "Cast Iron Kettlebell 16kg", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80" },
    { name: "Manduka PRO Yoga Mat", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&q=80" },
    { name: "NordicTrack Commercial 1750", image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&q=80" },
    { name: "Speed Rope with Aluminum Handles", image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?w=600&q=80" },
    { name: "Butterfly Timo Boll Paddle", image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?w=600&q=80" },
    { name: "Everlast Pro Style Training Gloves", image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80" },
    { name: "TRX Suspension Trainer", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80" },
    { name: "CamelBak Chute Mag Water Bottle", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80" },
    { name: "Under Armour Undeniable Duffle", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80" }
  ]},
  { name: "Agriculture Tools", img: "agri-tools.svg", desc: "Durable tools for farming and gardening.", items: [
    { name: "Forged Steel Cutlass", image: "https://images.unsplash.com/photo-1582236814674-7f1c1f5160cb?w=600&q=80" },
    { name: "Galvanized Steel Wheelbarrow", image: "https://images.unsplash.com/photo-1581404116556-320e8b3b3a6c?w=600&q=80" },
    { name: "Plastic Watering Can 15L", image: "https://images.unsplash.com/photo-1416879598056-0cbb3d60d268?w=600&q=80" },
    { name: "Stainless Steel Hand Cultivator", image: "https://images.unsplash.com/photo-1589051478149-65239a2fbde6?w=600&q=80" },
    { name: "Felco 2 Secateurs", image: "https://images.unsplash.com/photo-1416879598056-0cbb3d60d268?w=600&q=80" },
    { name: "Solo 425 Backpack Sprayer", image: "https://images.unsplash.com/photo-1592424046205-021b1b01c4e9?w=600&q=80" },
    { name: "Carbon Steel Trenching Spade", image: "https://images.unsplash.com/photo-1589051478149-65239a2fbde6?w=600&q=80" },
    { name: "Earthway Push Seeder", image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=600&q=80" },
    { name: "Japanese Sickle with Wooden Handle", image: "https://images.unsplash.com/photo-1582236814674-7f1c1f5160cb?w=600&q=80" },
    { name: "Bow Rake 14-Tine", image: "https://images.unsplash.com/photo-1589051478149-65239a2fbde6?w=600&q=80" }
  ]},
  { name: "School Supplies", img: "schoolbag.svg", desc: "Everything you need for school.", items: [
    { name: "JanSport SuperBreak Backpack", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80" },
    { name: "Casio fx-991EX Calculator", image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&q=80" },
    { name: "Staedtler Math Set", image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=600&q=80" },
    { name: "Pukka Pad A4 College Ruled", image: "https://images.unsplash.com/photo-1531346878377-a541fa4b34f5?w=600&q=80" },
    { name: "Pilot G2 Gel Pens", image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&q=80" },
    { name: "Faber-Castell 24 Color Pencils", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80" },
    { name: "A3 Acrylic Drawing Board", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80" },
    { name: "Thermos Insulated Lunch Kit", image: "https://images.unsplash.com/photo-1588693892782-b7e5e3474fc3?w=600&q=80" },
    { name: "Pentel Hi-Polymer Eraser Pack", image: "https://images.unsplash.com/photo-1603588965684-2a62838ea39c?w=600&q=80" },
    { name: "Standard School Uniform Shirts", image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=600&q=80" }
  ]}
];

let PRODUCTS = [];
let idCounter = 1;

CATEGORIES.forEach(cat => {
  cat.items.forEach((item, index) => {
    let i = index + 1;
    PRODUCTS.push({
      id: idCounter++,
      name: item.name,
      category: cat.name,
      price: Math.floor(Math.random() * 500000) + 50000,
      oldPrice: Math.random() > 0.6 ? Math.floor(Math.random() * 200000) + 600000 : null,
      badge: i === 1 ? "sale" : (i === 2 ? "new" : (i === 3 ? "hot" : null)),
      image: item.image,
      rating: (Math.random() * 1.5 + 3.5).toFixed(1),
      reviews: Math.floor(Math.random() * 300) + 10,
      description: cat.desc
    });
  });
});

// Load custom products from localStorage
const customProducts = JSON.parse(localStorage.getItem('sw_custom_products') || '[]');
customProducts.forEach(cp => {
  cp.id = idCounter++;
  PRODUCTS.push(cp);
});

// ─── Application State ──────────────────────────────
const AppState = {
  cart: JSON.parse(localStorage.getItem('sw_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('sw_wishlist') || '[]'),
  user: JSON.parse(localStorage.getItem('sw_user') || 'null'),
  darkMode: localStorage.getItem('sw_darkMode') === 'true',

  saveCart() {
    localStorage.setItem('sw_cart', JSON.stringify(this.cart));
    this.updateCartBadge();
  },
  saveWishlist() {
    localStorage.setItem('sw_wishlist', JSON.stringify(this.wishlist));
  },
  saveUser() {
    localStorage.setItem('sw_user', JSON.stringify(this.user));
  },
  updateCartBadge() {
    document.querySelectorAll('.cart-count').forEach(el => {
      const total = this.cart.reduce((sum, item) => sum + item.qty, 0);
      el.textContent = total;
      el.style.display = total > 0 ? 'flex' : 'none';
    });
  }
};

// ─── Utility Functions ──────────────────────────────
function formatPrice(amount) {
  return 'SLE ' + amount.toLocaleString('en-US');
}

function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) stars += '★';
    else if (i - 0.5 <= rating) stars += '★';
    else stars += '☆';
  }
  return stars;
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

// ─── Toast Notifications ────────────────────────────
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = { success: '✓', error: '✕', info: 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease-out forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ─── Cart Functions ─────────────────────────────────
function addToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const existing = AppState.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    AppState.cart.push({ id: productId, qty: 1 });
  }
  AppState.saveCart();
  showToast(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
  const product = getProductById(productId);
  AppState.cart = AppState.cart.filter(item => item.id !== productId);
  AppState.saveCart();
  if (product) showToast(`${product.name} removed from cart`, 'info');
  renderCart();
}

function updateQuantity(productId, delta) {
  const item = AppState.cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  AppState.saveCart();
  renderCart();
}

function getCartTotal() {
  return AppState.cart.reduce((total, item) => {
    const product = getProductById(item.id);
    return total + (product ? product.price * item.qty : 0);
  }, 0);
}

function renderCart() {
  const cartContainer = document.getElementById('cart-items');
  const cartSummary = document.getElementById('cart-summary');
  const cartEmpty = document.getElementById('cart-empty');

  if (!cartContainer) return;

  if (AppState.cart.length === 0) {
    cartContainer.innerHTML = '';
    if (cartEmpty) cartEmpty.style.display = 'block';
    if (cartSummary) cartSummary.style.display = 'none';
    return;
  }

  if (cartEmpty) cartEmpty.style.display = 'none';
  if (cartSummary) cartSummary.style.display = 'block';

  cartContainer.innerHTML = AppState.cart.map(item => {
    const product = getProductById(item.id);
    if (!product) return '';
    return `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-img">
          <img src="${product.image}" alt="${product.name}" style="object-fit: cover; width: 100%; height: 100%; border-radius: inherit;" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect fill=%22%23e5e7eb%22 width=%22200%22 height=%22200%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%239ca3af%22 font-size=%2214%22>Image</text></svg>'">
        </div>
        <div class="cart-item-details">
          <h3>${product.name}</h3>
          <span class="cart-item-cat">${product.category}</span>
          <div class="cart-item-price">${formatPrice(product.price)}</div>
        </div>
        <div class="cart-item-actions">
          <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Remove item">✕</button>
          <div class="quantity-controls">
            <button onclick="updateQuantity(${item.id}, -1)">−</button>
            <span class="qty-value">${item.qty}</span>
            <button onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Update summary
  const subtotal = getCartTotal();
  const delivery = subtotal > 0 ? 50000 : 0;
  const total = subtotal + delivery;
  const itemCount = AppState.cart.reduce((s, i) => s + i.qty, 0);

  const summaryBody = document.getElementById('cart-summary-body');
  if (summaryBody) {
    summaryBody.innerHTML = `
      <div class="summary-row">
        <span class="label">Items (${itemCount})</span>
        <span>${formatPrice(subtotal)}</span>
      </div>
      <div class="summary-row">
        <span class="label">Delivery</span>
        <span>${formatPrice(delivery)}</span>
      </div>
      <div class="summary-row total">
        <span>Total</span>
        <span class="amount">${formatPrice(total)}</span>
      </div>
    `;
  }
}

// ─── Wishlist Functions ─────────────────────────────
function toggleWishlist(productId) {
  const idx = AppState.wishlist.indexOf(productId);
  const product = getProductById(productId);
  if (idx > -1) {
    AppState.wishlist.splice(idx, 1);
    showToast(`${product.name} removed from wishlist`, 'info');
  } else {
    AppState.wishlist.push(productId);
    showToast(`${product.name} added to wishlist!`, 'success');
  }
  AppState.saveWishlist();
  // Update button state
  document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active', AppState.wishlist.includes(productId));
    btn.innerHTML = AppState.wishlist.includes(productId) ? '♥' : '♡';
  });
}

// ─── Product Rendering ──────────────────────────────
function renderProductCard(product) {
  const isWished = AppState.wishlist.includes(product.id);
  const isOwner = AppState.user && product.sellerEmail === AppState.user.email;

  return `
    <div class="product-card" data-category="${product.category}">
      ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge}</span>` : ''}
      <button class="wishlist-btn ${isWished ? 'active' : ''}" data-id="${product.id}" onclick="toggleWishlist(${product.id})">
        ${isWished ? '♥' : '♡'}
      </button>
      <div class="product-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy" style="object-fit: cover; width: 100%; height: 100%; border-top-left-radius: inherit; border-top-right-radius: inherit;" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%23e5e7eb%22 width=%22400%22 height=%22300%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%239ca3af%22 font-size=%2218%22>${encodeURIComponent(product.name)}</text></svg>'">
        <div class="product-actions-overlay">
          ${isOwner 
            ? `<button class="btn-icon" style="background:var(--error)" onclick="deleteMyListing('${product.customId}')" title="Delete Product">🗑️</button>`
            : `<button class="btn-icon" onclick="addToCart(${product.id})" title="Add to Cart">🛒</button>`
          }
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <span class="stars">${generateStars(product.rating)}</span>
          <span class="count">(${product.reviews})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">
            ${formatPrice(product.price)}
            ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
          </span>
          ${isOwner
            ? `<button class="add-to-cart-btn" style="background:var(--error);color:white" onclick="deleteMyListing('${product.customId}')" title="Delete Product">✕</button>`
            : `<button class="add-to-cart-btn" onclick="addToCart(${product.id})" title="Add to Cart">+</button>`
          }
        </div>
      </div>
    </div>
  `;
}

function renderProducts(container, products) {
  if (!container) return;
  if (products.length === 0) {
    container.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-secondary)"><p style="font-size:1.2rem;margin-bottom:0.5rem">No products found</p><p>Try a different search or category</p></div>';
    return;
  }
  container.innerHTML = products.map(p => renderProductCard(p)).join('');
}

// ─── Search & Filter ────────────────────────────────
function initProductFilters() {
  const searchInput = document.getElementById('product-search');
  const filterTags = document.querySelectorAll('.filter-tag');
  const productsGrid = document.getElementById('products-grid');

  if (!productsGrid) return;

  let currentCategory = 'All';
  let currentSearch = '';

  function filterProducts() {
    let filtered = PRODUCTS;
    if (currentCategory !== 'All') {
      filtered = filtered.filter(p => p.category === currentCategory);
    }
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }
    renderProducts(productsGrid, filtered);
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      filterProducts();
    });
  }

  filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
      filterTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      currentCategory = tag.dataset.category;
      filterProducts();
    });
  });

  // Initial render
  renderProducts(productsGrid, PRODUCTS);
}

// Hero search
function initHeroSearch() {
  const form = document.getElementById('hero-search-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = form.querySelector('input').value.trim();
    if (query) {
      window.location.href = `products.html?search=${encodeURIComponent(query)}`;
    }
  });
}

// ─── Form Validation ────────────────────────────────
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
  return /^[\d+\-\s()]{7,15}$/.test(phone);
}

function showFieldError(field, message) {
  field.classList.add('error');
  let errorEl = field.nextElementSibling;
  if (!errorEl || !errorEl.classList.contains('form-error')) {
    errorEl = document.createElement('span');
    errorEl.className = 'form-error';
    field.parentNode.insertBefore(errorEl, field.nextSibling);
  }
  errorEl.textContent = message;
  errorEl.style.display = 'block';
}

function clearFieldError(field) {
  field.classList.remove('error');
  const errorEl = field.nextElementSibling;
  if (errorEl && errorEl.classList.contains('form-error')) {
    errorEl.style.display = 'none';
  }
}

// Login form
function initLoginForm() {
  const form = document.getElementById('login-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const email = form.querySelector('#login-email');
    const password = form.querySelector('#login-password');

    // Clear previous errors
    [email, password].forEach(clearFieldError);

    if (!email.value.trim()) {
      showFieldError(email, 'Email is required');
      valid = false;
    } else if (!validateEmail(email.value)) {
      showFieldError(email, 'Please enter a valid email');
      valid = false;
    }

    if (!password.value) {
      showFieldError(password, 'Password is required');
      valid = false;
    } else if (password.value.length < 6) {
      showFieldError(password, 'Password must be at least 6 characters');
      valid = false;
    }

    if (valid) {
      // Check stored users
      const users = JSON.parse(localStorage.getItem('sw_users') || '[]');
      const user = users.find(u => u.email === email.value && u.password === password.value);
      if (user) {
        AppState.user = { name: user.name, email: user.email };
        AppState.saveUser();
        showToast(`Welcome back, ${user.name}!`, 'success');
        setTimeout(() => window.location.href = 'index.html', 1200);
      } else {
        showToast('Invalid email or password', 'error');
      }
    }
  });
}

// Registration form
function initRegisterForm() {
  const form = document.getElementById('register-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = form.querySelector('#reg-name');
    const email = form.querySelector('#reg-email');
    const phone = form.querySelector('#reg-phone');
    const password = form.querySelector('#reg-password');
    const confirmPassword = form.querySelector('#reg-confirm-password');

    const fields = [name, email, phone, password, confirmPassword];
    fields.forEach(clearFieldError);

    if (!name.value.trim()) {
      showFieldError(name, 'Full name is required');
      valid = false;
    }

    if (!email.value.trim()) {
      showFieldError(email, 'Email is required');
      valid = false;
    } else if (!validateEmail(email.value)) {
      showFieldError(email, 'Please enter a valid email');
      valid = false;
    }

    if (!phone.value.trim()) {
      showFieldError(phone, 'Phone number is required');
      valid = false;
    } else if (!validatePhone(phone.value)) {
      showFieldError(phone, 'Please enter a valid phone number');
      valid = false;
    }

    if (!password.value) {
      showFieldError(password, 'Password is required');
      valid = false;
    } else if (password.value.length < 6) {
      showFieldError(password, 'Password must be at least 6 characters');
      valid = false;
    }

    if (password.value !== confirmPassword.value) {
      showFieldError(confirmPassword, 'Passwords do not match');
      valid = false;
    }

    if (valid) {
      const users = JSON.parse(localStorage.getItem('sw_users') || '[]');
      if (users.find(u => u.email === email.value)) {
        showToast('An account with this email already exists', 'error');
        return;
      }
      users.push({
        name: name.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        password: password.value
      });
      localStorage.setItem('sw_users', JSON.stringify(users));

      AppState.user = { name: name.value.trim(), email: email.value.trim() };
      AppState.saveUser();

      showToast('Account created successfully!', 'success');
      setTimeout(() => window.location.href = 'index.html', 1200);
    }
  });
}

// Checkout form
function initCheckoutForm() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  // Render order summary on checkout page
  renderCheckoutSummary();

  // Payment method selection
  document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', () => {
      document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
      method.classList.add('selected');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const fullName = form.querySelector('#checkout-name');
    const phone = form.querySelector('#checkout-phone');
    const email = form.querySelector('#checkout-email');
    const address = form.querySelector('#checkout-address');
    const city = form.querySelector('#checkout-city');

    const fields = [fullName, phone, email, address, city];
    fields.forEach(clearFieldError);

    if (!fullName.value.trim()) { showFieldError(fullName, 'Full name is required'); valid = false; }
    if (!phone.value.trim()) { showFieldError(phone, 'Phone number is required'); valid = false; }
    else if (!validatePhone(phone.value)) { showFieldError(phone, 'Enter a valid phone number'); valid = false; }
    if (!email.value.trim()) { showFieldError(email, 'Email is required'); valid = false; }
    else if (!validateEmail(email.value)) { showFieldError(email, 'Enter a valid email'); valid = false; }
    if (!address.value.trim()) { showFieldError(address, 'Delivery address is required'); valid = false; }
    if (!city.value) { showFieldError(city, 'Please select a city/district'); valid = false; }

    const selectedPayment = document.querySelector('.payment-method.selected');
    if (!selectedPayment) {
      showToast('Please select a payment method', 'error');
      valid = false;
    }

    if (valid) {
      // Show order confirmation modal
      showOrderConfirmation();
    }
  });
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkout-order-summary');
  if (!container) return;

  const subtotal = getCartTotal();
  const delivery = 50000;
  const total = subtotal + delivery;

  container.innerHTML = `
    <h2>Order Summary</h2>
    ${AppState.cart.map(item => {
      const p = getProductById(item.id);
      if (!p) return '';
      return `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--border-color)">
          <div>
            <div style="font-weight:600;font-size:0.9rem">${p.name}</div>
            <div style="font-size:0.8rem;color:var(--text-tertiary)">Qty: ${item.qty}</div>
          </div>
          <div style="font-weight:600;color:var(--primary-500)">${formatPrice(p.price * item.qty)}</div>
        </div>
      `;
    }).join('')}
    <div class="summary-row" style="margin-top:1rem">
      <span class="label">Subtotal</span>
      <span>${formatPrice(subtotal)}</span>
    </div>
    <div class="summary-row">
      <span class="label">Delivery</span>
      <span>${formatPrice(delivery)}</span>
    </div>
    <div class="summary-row total">
      <span>Total</span>
      <span class="amount">${formatPrice(total)}</span>
    </div>
  `;
}

function showOrderConfirmation() {
  const modal = document.getElementById('order-modal');
  if (modal) {
    const orderId = 'SW-' + Date.now().toString(36).toUpperCase();
    modal.querySelector('.order-id').textContent = orderId;
    modal.classList.add('active');
    // Clear cart
    AppState.cart = [];
    AppState.saveCart();
  }
}

function closeOrderModal() {
  const modal = document.getElementById('order-modal');
  if (modal) modal.classList.remove('active');
  window.location.href = 'index.html';
}

// Contact form
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = form.querySelector('#contact-name');
    const email = form.querySelector('#contact-email');
    const message = form.querySelector('#contact-message');

    [name, email, message].forEach(clearFieldError);

    if (!name.value.trim()) { showFieldError(name, 'Name is required'); valid = false; }
    if (!email.value.trim()) { showFieldError(email, 'Email is required'); valid = false; }
    else if (!validateEmail(email.value)) { showFieldError(email, 'Enter a valid email'); valid = false; }
    if (!message.value.trim()) { showFieldError(message, 'Message is required'); valid = false; }

    if (valid) {
      showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
      form.reset();
    }
  });
}

// Newsletter form
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]');
    if (email && validateEmail(email.value)) {
      showToast('Successfully subscribed to our newsletter!', 'success');
      form.reset();
    } else {
      showToast('Please enter a valid email address', 'error');
    }
  });
}

// ─── Dark Mode Toggle ───────────────────────────────
function initDarkMode() {
  if (AppState.darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  document.querySelectorAll('.dark-mode-toggle').forEach(btn => {
    btn.innerHTML = AppState.darkMode ? '☀️' : '🌙';
    btn.addEventListener('click', () => {
      AppState.darkMode = !AppState.darkMode;
      localStorage.setItem('sw_darkMode', AppState.darkMode);
      document.documentElement.setAttribute('data-theme', AppState.darkMode ? 'dark' : '');
      btn.innerHTML = AppState.darkMode ? '☀️' : '🌙';
    });
  });
}

// ─── Mobile Navigation ──────────────────────────────
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ─── Navbar Scroll Effect ───────────────────────────
function initNavScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ─── Back to Top Button ─────────────────────────────
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─── FAQ Accordion ──────────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// ─── Scroll Reveal Animation ────────────────────────
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .stagger-children');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ─── Particles for Hero ─────────────────────────────
function initHeroParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'hero-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = (Math.random() * 4 + 3) + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDuration = (Math.random() * 10 + 8) + 's';
    particle.style.animationDelay = (Math.random() * 8) + 's';
    container.appendChild(particle);
  }
}

// ─── Password Toggle ────────────────────────────────
function initPasswordToggle() {
  document.querySelectorAll('.toggle-eye').forEach(eye => {
    eye.addEventListener('click', () => {
      const input = eye.previousElementSibling;
      if (input.type === 'password') {
        input.type = 'text';
        eye.textContent = '🙈';
      } else {
        input.type = 'password';
        eye.textContent = '👁';
      }
    });
  });
}

// ─── Auth State UI ──────────────────────────────────
function updateAuthUI() {
  const loginLink = document.querySelector('.nav-login-link');
  if (!loginLink) return;

  if (AppState.user) {
    loginLink.innerHTML = `👤 ${AppState.user.name.split(' ')[0]}`;
    loginLink.href = '#';
    loginLink.onclick = (e) => {
      e.preventDefault();
      if (confirm('Do you want to log out?')) {
        AppState.user = null;
        AppState.saveUser();
        showToast('Logged out successfully', 'info');
        setTimeout(() => location.reload(), 800);
      }
    };
  }
}

// ─── Loading Screen ─────────────────────────────────
function initLoading() {
  const loader = document.querySelector('.loading-overlay');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 600);
  });
}

// ─── URL Search Params ──────────────────────────────
function handleSearchParams() {
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get('search');
  if (searchQuery) {
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
      searchInput.value = searchQuery;
      searchInput.dispatchEvent(new Event('input'));
    }
  }
}

// ─── Sell Form & Vendor Dashboard ───────────────────
function initSellForm() {
  const form = document.getElementById('sell-form');
  const authWarning = document.getElementById('auth-warning');
  const myListingsSection = document.getElementById('my-listings-section');
  
  if (!form) return;

  if (!AppState.user) {
    authWarning.style.display = 'block';
    form.style.opacity = '0.5';
    form.style.pointerEvents = 'none';
    if (myListingsSection) myListingsSection.style.display = 'none';
    return;
  } else {
    if (myListingsSection) myListingsSection.style.display = 'block';
    renderMyListings();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('sell-name').value.trim();
    const category = document.getElementById('sell-category').value;
    const price = parseInt(document.getElementById('sell-price').value, 10);
    const desc = document.getElementById('sell-desc').value.trim();
    const fileInput = document.getElementById('sell-image');

    if (!name || !category || !price || !desc || !fileInput.files[0]) {
      showToast('Please fill all required fields.', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
      const imageData = event.target.result;
      
      const newProduct = {
        name: name,
        category: category,
        price: price,
        oldPrice: null,
        badge: "new",
        image: imageData,
        rating: "5.0",
        reviews: 0,
        description: desc,
        sellerEmail: AppState.user.email,
        customId: 'custom_' + Date.now() // Unique ID for deletion
      };

      const customProducts = JSON.parse(localStorage.getItem('sw_custom_products') || '[]');
      customProducts.unshift(newProduct);
      localStorage.setItem('sw_custom_products', JSON.stringify(customProducts));

      showToast('Product published successfully!', 'success');
      form.reset();
      renderMyListings();
    };
    reader.readAsDataURL(fileInput.files[0]);
  });
}

function renderMyListings() {
  const container = document.getElementById('my-listings-container');
  if (!container) return;

  const customProducts = JSON.parse(localStorage.getItem('sw_custom_products') || '[]');
  const myProducts = customProducts.filter(p => p.sellerEmail === AppState.user.email);

  if (myProducts.length === 0) {
    container.innerHTML = '<p style="color:var(--text-secondary)">You have not listed any products yet.</p>';
    return;
  }

  container.innerHTML = myProducts.map(p => `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:var(--space-sm);border:1px solid var(--border-color);border-radius:var(--radius-md);background:var(--bg-secondary);">
      <div style="display:flex;align-items:center;gap:var(--space-md);">
        <img src="${p.image}" alt="${p.name}" style="width:50px;height:50px;object-fit:cover;border-radius:var(--radius-sm);">
        <div>
          <h4 style="font-weight:600;margin-bottom:2px;">${p.name}</h4>
          <span style="font-size:0.8rem;color:var(--text-tertiary);">${p.category} • ${formatPrice(p.price)}</span>
        </div>
      </div>
      <button type="button" onclick="deleteMyListing('${p.customId}')" style="background:var(--error);color:white;border:none;padding:5px 10px;border-radius:var(--radius-sm);cursor:pointer;font-size:0.85rem;">Delete</button>
    </div>
  `).join('');
}

window.deleteMyListing = function(customId) {
  if (!confirm('Are you sure you want to delete this listing?')) return;
  let customProducts = JSON.parse(localStorage.getItem('sw_custom_products') || '[]');
  customProducts = customProducts.filter(p => p.customId !== customId);
  localStorage.setItem('sw_custom_products', JSON.stringify(customProducts));
  showToast('Listing deleted successfully', 'info');
  renderMyListings();
};

// ─── Initialize Everything ──────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initDarkMode();
  initMobileNav();
  initNavScroll();
  initBackToTop();
  initHeroSearch();
  initHeroParticles();
  initProductFilters();
  initLoginForm();
  initRegisterForm();
  initCheckoutForm();
  initContactForm();
  initNewsletterForm();
  initFAQ();
  initScrollReveal();
  initPasswordToggle();
  initSellForm();
  updateAuthUI();
  AppState.updateCartBadge();
  renderCart();
  handleSearchParams();
});

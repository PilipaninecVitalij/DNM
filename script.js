// ============================================================
// DNM — TERMÉKEK (64 db, mind képhez rendelve)
// ============================================================
const U = "https://images.unsplash.com/photo-";

const POOLS = {
  burger: ["1568901346375-23c9450c58cd","1550547660-d9450f859349","1572802419224-296b0aeee0d9","1586190848861-99aa4a171e90","1594212699903-ec8a3eca50f5","1607013251379-e6eecfffe234","1610614819513-58e34989848b","1520072959219-c595dc870360","1553979459-d2229ba7433b","1596664522902-d2e0d4c3c4f8"],
  chicken: ["1626082927389-6cd097cee6a6","1562967914-608f82629710","1608039829572-78524f79c4c7","1569058242253-92a9c755a0ec","1619881590738-a111d176d8ee","1598103442097-8b74394b95c6","1626645738196-c2a7c87a8f58"],
  wings: ["1567620832903-9fc6debc209f","1569058242253-92a9c755a0ec","1608039829572-78524f79c4c7","1619881590738-a111d176d8ee","1598103442097-8b74394b95c6"],
  fries: ["1573080496219-bb080dd4f877","1630384060421-cb20d0e0649d","1585109649139-366815a0d713","1600891964092-4316c288032e","1625938145312-c96d0c4d4c6a","1541592106381-b31e9677c0e5"],
  sides: ["1594212699903-ec8a3eca50f5","1541592106381-b31e9677c0e5","1625938145312-c96d0c4d4c6a","1600891964092-4316c288032e","1585109649139-366815a0d713"],
  drinks: ["1554866585-cd94860890b7","1629203851122-3726ecdf080e","1621263764928-df1444c5e859","1544145945-f90425340c7e","1556679343-c7306c1976bc","1600271886742-f049cd451bba","1437418747212-8d9709afab22","1622597467836-f3285f2131b8"],
  shakes: ["1600271886742-f049cd451bba","1572490122747-3968b75cc699","1553787499-6f9133860278","1563805042-7684c019e1cb","1621263764928-df1444c5e859"],
  sauces: ["1472476443507-c7a5948772fc","1585238342024-78d387f4a707","1607013251379-e6eecfffe234","1610614819513-58e34989848b"],
  family: ["1571091718767-18b5b1457add","1551782450-a2132b4ba21d","1626082927389-6cd097cee6a6","1550547660-d9450f859349","1567620832903-9fc6debc209f"],
  kids: ["1619881590738-a111d176d8ee","1562967914-608f82629710","1608039829572-78524f79c4c7","1626645738196-c2a7c87a8f58"]
};

function getImg(pool, i) {
  const arr = POOLS[pool];
  return `${U}${arr[i % arr.length]}?w=600&q=80&auto=format&fit=crop`;
}

let _id = 0;
function P(cat, prefix, name, desc, price, unit = "db", tag = null) {
  _id++;
  return { id: `p${_id}`, cat, code: `${prefix}-${String(_id).padStart(3,"0")}`, name, desc, price, unit, tag };
}

const burgers = [
  P("burgers","B","Smash Burger","Kétszer lapított marhahús, cheddar, hagyma, savanyú uborka, DNM szósz.",2490,"db","best seller"),
  P("burgers","B","Double Cheese","Dupla hús, dupla cheddar, karamellizált hagyma, mustáros majonéz.",3190,"db"),
  P("burgers","B","Bacon Burger","Füstölt bacon, cheddar, ropogós hagyma, BBQ szósz, brioche.",2890,"db"),
  P("burgers","B","Mushroom Melt","Grillezett gomba, füstölt provolone, karamellizált hagyma, truffle majonéz.",2190,"db","vega"),
  P("burgers","B","BBQ Burger","Füstölt marhahús, jalapeño, cheddar, ropogós hagymakarika, BBQ.",2990,"db"),
  P("burgers","B","Chili Burger","Marhahús, chili con carne, cheddar, tejföl, friss koriander.",3090,"db","csipos"),
  P("burgers","B","Truffle Burger","Marhahús, truffle majonéz, rukkola, parmezán, karamellizált hagyma.",3490,"db","premium"),
  P("burgers","B","Vegan Burger","Növényi pogácsa, avocado, paradicsom, saláta, vegán majonéz.",2690,"db","vega"),
  P("burgers","B","Classic Cheeseburger","Marhahús, cheddar, ketchup, mustár, hagyma, savanyú uborka.",1990,"db"),
  P("burgers","B","Big DNM","Tripla hús, tripla cheddar, bacon, hagyma, DNM szósz. Az óriás.",3990,"db"),
];

const chicken = [
  P("chicken","C","Crispy Chicken","Ropogós csirkemell, mézes-chilis glaze, coleslaw, jalapeño.",2290,"db","uj"),
  P("chicken","C","Nuggets 6 db","Ropogós csirkemell nuggets, választható szósszal. Nem dino alakú.",1290,"6 db"),
  P("chicken","C","Nuggets 12 db","Dupla adag, 2 szósszal. Még mindig nem dino alakú.",2290,"12 db","best seller"),
  P("chicken","C","Chicken Tenders 5 db","Csirkemell csíkok, ropogós panír, választható szósz.",1890,"5 db"),
  P("chicken","C","Spicy Chicken","Csirkemell, sriracha majonéz, jalapeño, ropogós hagyma.",2390,"db","csipos"),
  P("chicken","C","Chicken Bucket 12","12 db ropogós csirke, 4 szósz, 2 nagy fries.",6990,"12 db","best seller"),
  P("chicken","C","Chicken Wrap","Csirkemell, saláta, paradicsom, tortilla, szósz.",1990,"db"),
];

const wings = [
  P("wings","W","Buffalo Wings 8","Csirkeszárnyak buffalo szószban, blue cheese dippinggel.",2490,"8 db","csipos"),
  P("wings","W","Honey Wings 8","Mézes-szójás csirkeszárnyak, szezámmag, snidling.",2490,"8 db"),
  P("wings","W","BBQ Wings 8","BBQ szószos csirkeszárnyak, ropogós hagyma.",2590,"8 db"),
  P("wings","W","Garlic Parmesan Wings 8","Fokhagymás-parmezános csirkeszárnyak.",2690,"8 db","premium"),
  P("wings","W","Wings Combo 24","24 db wings, 3 szósz, 2 nagy fries.",7490,"24 db","best seller"),
];

const fries = [
  P("fries","F","Classic Fries","Hasábburgonya, tengeri só, DNM fűszerkeverék.",890,"adag"),
  P("fries","F","Loaded Fries","Cheddar szósz, bacon morzsa, snidling, füstölt paprika.",1590,"adag","best seller"),
  P("fries","F","Cheese Fries","Olvadt cheddar szósz, parmezán, snidling.",1290,"adag"),
  P("fries","F","Sweet Potato Fries","Édesburgonya hasábok, füstölt paprikás joghurt.",1390,"adag","vega"),
  P("fries","F","Chili Cheese Fries","Hasábburgonya, chili con carne, cheddar szósz, jalapeño.",1890,"adag","csipos"),
  P("fries","F","Wedges","Burgonyacikkek, fűszeres panír, dipping.",1190,"adag"),
];

const sides = [
  P("sides","S","Onion Rings 8","Ropogós hagymakarikák, füstölt paprikás panír.",1290,"8 db"),
  P("sides","S","Mozzarella Sticks 6","Ropogós mozzarella rudak, marinara szósz.",1490,"6 db"),
  P("sides","S","Nachos","Tortilla chips, cheddar szósz, jalapeño, salsa.",1590,"adag"),
  P("sides","S","Garlic Bread","Fokhagymás kenyér, vaj, petrezselyem.",890,"adag","vega"),
  P("sides","S","Coleslaw","Friss káposztasaláta, sárgarépa, majonéz.",690,"adag","vega"),
];

const drinks = [
  P("drinks","D","Classic Cola 0,5 l","Jéghideg kóla. A klasszikus. Nem McD-s kóla, hanem a miénk.",690,"0,5 l"),
  P("drinks","D","Zero Cola 0,5 l","Ugyanaz az élmény, nulla cukorral.",690,"0,5 l"),
  P("drinks","D","Dirty Lemonade 0,5 l","Házi limonádé, citrom, menta, chili.",990,"0,5 l","best seller"),
  P("drinks","D","Berry Lemonade 0,5 l","Házi limonádé friss bogyós gyümölcsökkel.",1090,"0,5 l","uj"),
  P("drinks","D","Fresh Orange 0,4 l","Frissen facsart narancslé.",890,"0,4 l","vega"),
  P("drinks","D","Iced Tea 0,5 l","Házi jeges tea citrommal.",690,"0,5 l"),
  P("drinks","D","Sparkling Water 0,5 l","Szénsavas ásványvíz.",490,"0,5 l"),
  P("drinks","D","Chocolate Shake 0,4 l","Sűrű csokoládé milkshake.",1190,"0,4 l"),
];

const shakes = [
  P("shakes","K","Chocolate Shake 0,4 l","Sűrű csokoládé milkshake.",1190,"0,4 l","best seller"),
  P("shakes","K","Vanilla Shake 0,4 l","Klasszikus vaníliás milkshake.",1190,"0,4 l"),
  P("shakes","K","Strawberry Shake 0,4 l","Epres milkshake friss eperrel.",1190,"0,4 l"),
  P("shakes","K","Oreo Shake 0,4 l","Oreo kekszes milkshake.",1390,"0,4 l"),
  P("shakes","K","Milkshake 0,4 l","Sűrű, krémes milkshake.",1190,"0,4 l"),
];

const sauces = [
  P("sauces","Z","DNM Szósz","A házi titkos szószunk. Nem Big Mac szósz. Tényleg nem.",290,"adag"),
  P("sauces","Z","Garlic Mayo","Fokhagymás majonéz.",290,"adag"),
  P("sauces","Z","BBQ Szósz","Füstölt BBQ szósz.",290,"adag"),
  P("sauces","Z","Sriracha Mayo","Sriracha majonéz.",290,"adag","csipos"),
];

const family = [
  P("family","CS","Family Combo 1","4 burger + 2 nagy fries + 4 üdítő. 4 személyes.",9990,"4 fő"),
  P("family","CS","Family Combo 2","2 burger + 12 nuggets + 2 nagy fries + 4 üdítő.",10990,"4 fő","best seller"),
  P("family","CS","Chicken Family","12 db ropogós csirke + 2 nagy fries + 2 coleslaw + 4 üdítő.",11490,"4 fő"),
  P("family","CS","Wings Family","16 db buffalo wings + 2 nagy fries + 4 szósz + 4 üdítő.",10490,"4 fő"),
  P("family","CS","Party Box","24 nuggets + 24 wings + 4 nagy fries + 8 üdítő. Bulira.",19990,"8 fő","premium"),
];

const kids = [
  P("kids","GY","Kids Box Nuggets","4 nuggets + kis fries + kis üdítő + játék. Nem dino alakú.",2490,"gyerek"),
  P("kids","GY","Kids Box Burger","Mini burger + kis fries + kis üdítő + játék.",2490,"gyerek"),
  P("kids","GY","Kids Box Tenders","3 tenders + kis fries + kis üdítő + játék.",2490,"gyerek"),
  P("kids","GY","Kids Chicken Wrap","Mini csirke wrap + kis üdítő.",2290,"gyerek"),
];

const ALL = [...burgers,...chicken,...wings,...fries,...sides,...drinks,...shakes,...sauces,...family,...kids];

const CATS = {
  burgers: { name: "Burgerek", icon: "01", pool: "burger" },
  chicken: { name: "Csirke & Nuggets", icon: "02", pool: "chicken" },
  wings:   { name: "Wings", icon: "03", pool: "wings" },
  fries:   { name: "Fries", icon: "04", pool: "fries" },
  sides:   { name: "Sides", icon: "05", pool: "sides" },
  drinks:  { name: "Üdítők & Kóla", icon: "06", pool: "drinks" },
  shakes:  { name: "Shake & Desszert", icon: "07", pool: "shakes" },
  sauces:  { name: "Szószok", icon: "08", pool: "sauces" },
  family:  { name: "Családi Menü", icon: "09", pool: "family" },
  kids:    { name: "Gyerek Menü", icon: "10", pool: "kids" },
};

// ============================================================
// STATE
// ============================================================
const cart = []; // { id, qty }
let activeFilter = "all";
let searchQuery = "";

// ============================================================
// DOM
// ============================================================
const container = document.getElementById("productsContainer");
const totalCount = document.getElementById("totalCount");
const noResults = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");
const filterChips = document.getElementById("filterChips");
const cartBtn = document.getElementById("cartBtn");
const cartBadge = document.getElementById("cartBadge");
const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");
const cartClose = document.getElementById("cartClose");
const cartBody = document.getElementById("cartBody");
const cartCountPill = document.getElementById("cartCountPill");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartJoke = document.getElementById("cartJoke");
const toast = document.getElementById("toast");
const toastText = document.getElementById("toastText");
const checkoutModal = document.getElementById("checkoutModal");
const checkoutClose = document.getElementById("checkoutClose");
const orderNum = document.getElementById("orderNum");
const checkoutJoke = document.getElementById("checkoutJoke");
const orderNowBtn = document.getElementById("orderNowBtn");
const ctaOrderBtn = document.getElementById("ctaOrderBtn");

// ============================================================
// RENDER PRODUCTS
// ============================================================
function renderCard(p, idx) {
  const cat = CATS[p.cat];
  const imgSrc = getImg(cat.pool, idx);
  const tagClass = p.tag ? p.tag.replace(" ", "") : "";
  const tagHtml = p.tag ? `<span class="tag ${tagClass}">${p.tag}</span>` : "";
  return `
    <div class="menu-card" data-cat="${p.cat}" data-name="${p.name.toLowerCase()}" data-tag="${p.tag || ""}">
      <div class="card-image">
        <img src="${imgSrc}" alt="${p.name}" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-num">${p.code}</div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="card-footer">
          <div class="price">${p.price.toLocaleString("hu-HU")} Ft <span>/ ${p.unit}</span></div>
          <button class="add-btn" data-add="${p.id}" title="Kosárba">+</button>
        </div>
        ${tagHtml}
      </div>
    </div>
  `;
}

function renderAll() {
  let html = "";
  for (const [key, cat] of Object.entries(CATS)) {
    const items = ALL.filter(p => p.cat === key);
    if (items.length === 0) continue;
    html += `
      <div class="category-block" id="cat-${key}" data-category="${key}">
        <div class="category-header">
          <div class="category-title">
            <span class="icon-badge">${cat.icon}</span>
            ${cat.name}
          </div>
          <div class="category-count">// ${items.length} termék</div>
        </div>
        <div class="menu-grid">
          ${items.map((p, i) => renderCard(p, i)).join("")}
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
  totalCount.textContent = `// ${ALL.length} termék betöltve`;
}
renderAll();

// ============================================================
// FILTERS
// ============================================================
function applyFilters() {
  const cards = document.querySelectorAll(".menu-card");
  let visibleCount = 0;
  cards.forEach(card => {
    const name = card.dataset.name;
    const tag = card.dataset.tag;
    const cat = card.dataset.cat;
    const matchSearch = searchQuery === "" ||
      name.includes(searchQuery) ||
      card.querySelector("p").textContent.toLowerCase().includes(searchQuery) ||
      CATS[cat].name.toLowerCase().includes(searchQuery);
    const matchFilter = activeFilter === "all" || tag === activeFilter;
    if (matchSearch && matchFilter) { card.style.display = ""; visibleCount++; }
    else card.style.display = "none";
  });
  document.querySelectorAll(".category-block").forEach(block => {
    const hasVisible = Array.from(block.querySelectorAll(".menu-card")).some(c => c.style.display !== "none");
    block.style.display = hasVisible ? "" : "none";
  });
  noResults.classList.toggle("show", visibleCount === 0);
}
searchInput.addEventListener("input", e => {
  searchQuery = e.target.value.toLowerCase().trim();
  applyFilters();
});
filterChips.addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  activeFilter = chip.dataset.filter;
  applyFilters();
});

// ============================================================
// CART LOGIC
// ============================================================
function findProduct(id) {
  return ALL.find(p => p.id === id);
}

function addToCart(id) {
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ id, qty: 1 });
  updateCartUI();
  showToast("Hozzáadva a kosárhoz ✓");
  cartBtn.classList.add("bump");
  setTimeout(() => cartBtn.classList.remove("bump"), 400);
}

function removeFromCart(id) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx !== -1) {
    cart.splice(idx, 1);
    updateCartUI();
  }
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else updateCartUI();
}

function getCartCount() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function getCartSubtotal() {
  return cart.reduce((s, i) => {
    const p = findProduct(i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
}

function updateCartUI() {
  const count = getCartCount();
  cartBadge.textContent = count;
  cartCountPill.textContent = count;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <div class="icon">🛒</div>
        <div class="title">Üres a kosár</div>
        <div class="sub">Ez most olyan, mint a McD kajája: üres és szomorú.</div>
      </div>
    `;
    checkoutBtn.disabled = true;
    cartJoke.textContent = "// tedd be a kaját, nem lesz bohóc";
  } else {
    cartBody.innerHTML = cart.map(item => {
      const p = findProduct(item.id);
      if (!p) return "";
      const cat = CATS[p.cat];
      const imgIdx = ALL.filter(x => x.cat === p.cat).indexOf(p);
      const imgSrc = getImg(cat.pool, imgIdx);
      return `
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="${imgSrc}" alt="${p.name}">
          </div>
          <div class="cart-item-info">
            <div class="name">${p.name}</div>
            <div class="price-unit">${p.price.toLocaleString("hu-HU")} Ft / ${p.unit}</div>
            <div class="cart-item-qty">
              <button class="qty-btn minus" data-qty="${p.id}" data-delta="-1">−</button>
              <span class="qty-value">${item.qty}</span>
              <button class="qty-btn plus" data-qty="${p.id}" data-delta="1">+</button>
            </div>
          </div>
          <div style="text-align: right;">
            <div class="cart-item-total">${(p.price * item.qty).toLocaleString("hu-HU")} Ft</div>
            <button class="cart-item-remove" data-remove="${p.id}" title="Törlés">✕ törlés</button>
          </div>
        </div>
      `;
    }).join("");
    checkoutBtn.disabled = false;
    const jokes = [
      "// rendelj, mielőtt a bohóc megéhezik",
      "// 100% nem McD, 100% finom",
      "// a bohóc nem jön. soha.",
      "// ez a rendelés is definitely not McD",
      "// ha McD-t akartál, rossz helyen vagy",
    ];
    cartJoke.textContent = jokes[Math.floor(Math.random() * jokes.length)];
  }

  const sub = getCartSubtotal();
  cartSubtotal.textContent = sub.toLocaleString("hu-HU") + " Ft";
  cartTotal.textContent = sub.toLocaleString("hu-HU") + " Ft";
}

// ============================================================
// CART UI EVENTS
// ============================================================
function openCart() {
  cartPanel.classList.add("open");
  cartOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  cartPanel.classList.remove("open");
  cartOverlay.classList.remove("open");
  document.body.style.overflow = "";
}
cartBtn.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// ============================================================
// PRODUCT GRID — ADD TO CART
// ============================================================
container.addEventListener("click", e => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;
  const id = btn.dataset.add;
  addToCart(id);

  btn.classList.add("added");
  btn.textContent = "✓";
  setTimeout(() => {
    btn.classList.remove("added");
    btn.textContent = "+";
  }, 800);
});

// ============================================================
// CART BODY — QTY / REMOVE
// ============================================================
cartBody.addEventListener("click", e => {
  const qtyBtn = e.target.closest(".qty-btn");
  if (qtyBtn) {
    const id = qtyBtn.dataset.qty;
    const delta = parseInt(qtyBtn.dataset.delta);
    changeQty(id, delta);
    return;
  }
  const rmBtn = e.target.closest(".cart-item-remove");
  if (rmBtn) {
    removeFromCart(rmBtn.dataset.remove);
    showToast("Termék törölve");
  }
});

// ============================================================
// CHECKOUT
// ============================================================
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) return;
  const num = "#DNM-" + String(Math.floor(Math.random() * 9000) + 1000);
  orderNum.textContent = num;
  const jokes = [
    "// a bohóc nem jön. soha.",
    "// ez a rendelés 100% nem McD",
    "// élvezni fogod. ígérjük.",
    "// kösz, hogy nem a bohóchoz mentél",
  ];
  checkoutJoke.textContent = jokes[Math.floor(Math.random() * jokes.length)];

  closeCart();
  checkoutModal.classList.add("open");

  // Kosár ürítése
  cart.length = 0;
  updateCartUI();
});

checkoutClose.addEventListener("click", () => {
  checkoutModal.classList.remove("open");
});

checkoutModal.addEventListener("click", e => {
  if (e.target === checkoutModal) checkoutModal.classList.remove("open");
});

// ============================================================
// ORDER NOW / CTA BUTTONS
// ============================================================
orderNowBtn.addEventListener("click", () => {
  if (cart.length > 0) {
    openCart();
  } else {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    showToast("Válassz valamit a menüből! 🍔");
  }
});

ctaOrderBtn.addEventListener("click", e => {
  e.preventDefault();
  if (cart.length > 0) openCart();
  else {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    showToast("Pörgesd le a menüt és válassz! 🍟");
  }
});

// ============================================================
// TOAST
// ============================================================
let toastTimer;
function showToast(msg) {
  toastText.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// Init
updateCartUI();
console.log(`✅ DNM betöltve: ${ALL.length} termék, kosár működik`);
// ==================
// КОРЗИНА
// ==================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    const list = document.getElementById('cartList');
    const totalSpan = document.getElementById('totalPrice');
    list.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ${item.price} Ft <button onclick="removeFromCart(${index})">X</button>`;
        list.appendChild(li);
        total += item.price;
    });
    totalSpan.textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("A kosár üres!");
        return;
    }
    const delivery = document.getElementById('deliveryType').value;
    const total = document.getElementById('totalPrice').textContent;
    let message = `Rendelés összesítése:\n`;
    cart.forEach(item => message += `${item.name} - ${item.price} Ft\n`);
    message += `Összesen: ${total} Ft\n`;
    message += `Szállítási mód: ${delivery}`;
    
    alert(message + "\n\n(Köszi a rendelést! A futár úton van... vagy nem.)");
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// ==================
// АВТОРИЗАЦИЯ (localStorage)
// ==================
let isRegisterMode = false;

function toggleAuth() {
    const modal = document.getElementById('authModal');
    modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
    document.getElementById('authError').textContent = '';
}

function switchMode() {
    isRegisterMode = !isRegisterMode;
    document.getElementById('modalTitle').textContent = isRegisterMode ? 'Regisztráció' : 'Bejelentkezés';
    document.getElementById('authBtn').textContent = isRegisterMode ? 'Regisztráció' : 'Bejelentkezés';
    document.getElementById('switchBtn').textContent = isRegisterMode 
        ? 'Van már fiókod? Jelentkezz be!' 
        : 'Nincs fiókod? Regisztrálj!';
    document.getElementById('authError').textContent = '';
}

function validatePassword(pass) {
    // Мин 8 символов, 1 заглавная, 1 цифра, 1 спецсимвол, 1 пробел
    const checks = {
        length: pass.length >= 8,
        upper: /[A-Z]/.test(pass),
        digit: /[0-9]/.test(pass),
        special: /[^a-zA-Z0-9\s]/.test(pass),
        space: /\s/.test(pass)
    };
    return checks;
}

function handleAuth() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('authError');

    if (!username || !password) {
        errorDiv.textContent = 'Tölts ki minden mezőt!';
        return;
    }

    // Получаем список пользователей из localStorage
    let users = JSON.parse(localStorage.getItem('users')) || {};

    if (isRegisterMode) {
        // Проверка пароля
        const checks = validatePassword(password);
        const missing = [];
        if (!checks.length) missing.push('legalább 8 karakter');
        if (!checks.upper) missing.push('nagybetű');
        if (!checks.digit) missing.push('szám');
        if (!checks.special) missing.push('speciális karakter');
        if (!checks.space) missing.push('szóköz');

        if (missing.length > 0) {
            errorDiv.textContent = 'Hiányzik: ' + missing.join(', ') + '!';
            return;
        }

        if (users[username]) {
            errorDiv.textContent = 'Ez a felhasználónév már foglalt!';
            return;
        }

        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', username);
        alert('Sikeres regisztráció! Üdv, ' + username + '!');
        toggleAuth();
        updateUserInfo();
    } else {
        // Вход
        if (!users[username] || users[username] !== password) {
            errorDiv.textContent = 'Hibás felhasználónév vagy jelszó!';
            return;
        }
        localStorage.setItem('currentUser', username);
        alert('Sikeres bejelentkezés!');
        toggleAuth();
        updateUserInfo();
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    updateUserInfo();
}

function updateUserInfo() {
    const userInfo = document.getElementById('userInfo');
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        userInfo.innerHTML = `<span>Üdv, <b>${currentUser}</b>!</span> <button onclick="logout()">Kijelentkezés</button>`;
    } else {
        userInfo.innerHTML = `<button onclick="toggleAuth()">Bejelentkezés / Regisztráció</button>`;
    }
}

// ==================
// ИНИЦИАЛИЗАЦИЯ
// ==================
window.onload = () => {
    updateCart();
    updateUserInfo();
};
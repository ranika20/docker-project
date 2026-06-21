// api.js
const API_URL = 'http://localhost:3000/api/users'; 

// תפיסת האלמנטים מה-HTML
const usersGrid = document.getElementById('usersGrid');
const totalUsersEl = document.getElementById('total-users');
const avgAgeEl = document.getElementById('avgAge');
const adduserForm = document.getElementById('adduserForm');
const passwordInput = document.getElementById('password');

// 1. פונקציה שמקבלת מערך משתמשים ומציגה (מרנדרת) אותם ב-HTML
function renderUsers(usersArray) {
    // ריקון הגריד לפני שמטעינים מחדש
    usersGrid.innerHTML = '';
    
    // יצירת כרטיס לכל משתמש
    usersArray.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Age:</strong> ${user.age || 'N/A'}</p>
            <button class="delete-btn" onclick="deleteUser('${user._id}')">Delete</button>
        `;
        usersGrid.appendChild(userCard);
    });
}

// 2. פונקציה למשיכת המשתמשים מהשרת
async function loadUsers() {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();
        
        // עדכון כרטיסי הסטטיסטיקה
        updateStats(users);
        
        // קריאה לפונקציית הרינדור שהגדרנו למעלה כדי להציג את המשתמשים
        renderUsers(users);
        
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// 3. פונקציה לחישוב ועדכון הסטטיסטיקות (כמות וגיל ממוצע)
function updateStats(users) {
    totalUsersEl.textContent = users.length;
    
    if (users.length === 0) {
        avgAgeEl.textContent = '0';
        return;
    }
    
    const usersWithAge = users.filter(user => user.age);
    if (usersWithAge.length > 0) {
        const totalAge = usersWithAge.reduce((sum, user) => sum + Number(user.age), 0);
        const avgAge = (totalAge / usersWithAge.length).toFixed(1); 
        avgAgeEl.textContent = avgAge;
    } else {
        avgAgeEl.textContent = 'N/A';
    }
}

// 4. האזנה לטופס והוספת משתמש חדש (POST)
adduserForm.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    
    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        password: document.getElementById('password').value
    };
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        if (response.ok) {
            adduserForm.reset(); 
            loadUsers(); // טוען מחדש את הנתונים המעודכנים מהשרת
        } else {
            const errData = await response.json();
            alert(`Failed to add user: ${errData.message}`);
        }
    } catch (error) {
        console.error('Error adding user:', error);
    }
});

// 5. פונקציה למחיקת משתמש (DELETE)
async function deleteUser(id) {
    if (!confirm('Are you sure you want to delete this user?')) return;
    
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            loadUsers(); 
        } else {
            alert('Failed to delete user');
        }
    } catch (error) {
        console.error('Error deleting user:', error);
    }
}

// הרצה ראשונית של הפונקציה כשהדף עולה
loadUsers();
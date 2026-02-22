// Christmas Gift Helper App

// ─── Gift Database ──────────────────────────────────────────────────────────

const GIFTS = [
  // TECH
  { id: 1, name: 'Wireless Earbuds', category: 'tech', price: '£30–£80', budget: ['25to50', '50to100'], ages: ['teen', 'youngAdult', 'adult'], emoji: '🎧', desc: 'Bluetooth earbuds for music, calls, and podcasts.' },
  { id: 2, name: 'Portable Charger (Power Bank)', category: 'tech', price: '£20–£40', budget: ['under25', '25to50'], ages: ['teen', 'youngAdult', 'adult', 'senior'], emoji: '🔋', desc: 'Keeps devices charged on the go — practical for everyone.' },
  { id: 3, name: 'Smart Speaker', category: 'tech', price: '£35–£90', budget: ['25to50', '50to100'], ages: ['youngAdult', 'adult', 'senior'], emoji: '📻', desc: 'Voice-controlled smart speaker for music, news, and home control.' },
  { id: 4, name: 'E-Reader', category: 'tech', price: '£90–£140', budget: ['50to100', 'over100'], ages: ['youngAdult', 'adult', 'senior'], emoji: '📖', desc: 'Perfect for book lovers — holds thousands of titles.' },
  { id: 5, name: 'Smartwatch', category: 'tech', price: '£80–£250', budget: ['50to100', 'over100'], ages: ['teen', 'youngAdult', 'adult'], emoji: '⌚', desc: 'Tracks fitness, notifications, and more.' },
  { id: 6, name: 'Wireless Charging Pad', category: 'tech', price: '£15–£30', budget: ['under25', '25to50'], ages: ['teen', 'youngAdult', 'adult'], emoji: '⚡', desc: 'Convenient cable-free charging for compatible phones.' },
  { id: 7, name: 'Webcam (HD)', category: 'tech', price: '£40–£80', budget: ['25to50', '50to100'], ages: ['youngAdult', 'adult'], emoji: '📷', desc: 'Great for remote workers or streamers.' },
  { id: 8, name: 'Tablet Stand & Stylus Set', category: 'tech', price: '£20–£45', budget: ['under25', '25to50'], ages: ['child', 'teen', 'adult'], emoji: '🖊️', desc: 'Handy desk accessory for tablets and drawing apps.' },

  // BOOKS
  { id: 9, name: 'Bestselling Novel', category: 'books', price: '£8–£15', budget: ['under25'], ages: ['teen', 'youngAdult', 'adult', 'senior'], emoji: '📚', desc: 'Pick the year\'s most talked-about fiction title.' },
  { id: 10, name: 'Coffee Table Photo Book', category: 'books', price: '£25–£50', budget: ['25to50'], ages: ['adult', 'senior'], emoji: '🖼️', desc: 'Stunning photography or art on a favourite topic.' },
  { id: 11, name: 'Puzzle & Brain Teasers Book', category: 'books', price: '£8–£15', budget: ['under25'], ages: ['child', 'teen', 'adult', 'senior'], emoji: '🧩', desc: 'Sudoku, crosswords, or logic puzzles — great for all ages.' },
  { id: 12, name: 'Cookbook (Specialty Theme)', category: 'books', price: '£18–£30', budget: ['under25', '25to50'], ages: ['youngAdult', 'adult', 'senior'], emoji: '🍳', desc: 'A beautifully photographed cookbook on their favourite cuisine.' },
  { id: 13, name: 'Children\'s Book Box Set', category: 'books', price: '£15–£25', budget: ['under25', '25to50'], ages: ['child'], emoji: '🐣', desc: 'Classic or popular series box set for young readers.' },

  // GAMING
  { id: 14, name: 'Board Game (Strategy)', category: 'gaming', price: '£25–£50', budget: ['25to50'], ages: ['child', 'teen', 'youngAdult', 'adult'], emoji: '♟️', desc: 'Catan, Ticket to Ride, or Carcassonne — family favourites.' },
  { id: 15, name: 'Card Game (Party)', category: 'gaming', price: '£10–£20', budget: ['under25'], ages: ['teen', 'youngAdult', 'adult'], emoji: '🃏', desc: 'Exploding Kittens, Uno, or Taco Cat — great for groups.' },
  { id: 16, name: 'Gaming Gift Card', category: 'gaming', price: '£15–£50', budget: ['under25', '25to50'], ages: ['child', 'teen', 'youngAdult'], emoji: '🎮', desc: 'Let them choose their own games on PlayStation, Xbox, or Steam.' },
  { id: 17, name: 'Gaming Headset', category: 'gaming', price: '£30–£80', budget: ['25to50', '50to100'], ages: ['teen', 'youngAdult'], emoji: '🎧', desc: 'Surround sound headset for immersive gaming sessions.' },
  { id: 18, name: 'Puzzle (1000+ pieces)', category: 'gaming', price: '£12–£25', budget: ['under25', '25to50'], ages: ['child', 'teen', 'adult', 'senior'], emoji: '🧩', desc: 'A beautiful scenic or artistic jigsaw puzzle.' },

  // COOKING
  { id: 19, name: 'Spice & Seasoning Gift Set', category: 'cooking', price: '£20–£40', budget: ['under25', '25to50'], ages: ['youngAdult', 'adult', 'senior'], emoji: '🌶️', desc: 'Curated selection of premium spices or herb blends.' },
  { id: 20, name: 'Cast Iron Skillet', category: 'cooking', price: '£25–£60', budget: ['25to50', '50to100'], ages: ['youngAdult', 'adult'], emoji: '🍳', desc: 'A kitchen heirloom — durable and incredibly versatile.' },
  { id: 21, name: 'Kitchen Gadget (Air Fryer)', category: 'cooking', price: '£50–£120', budget: ['50to100', 'over100'], ages: ['youngAdult', 'adult', 'senior'], emoji: '🔌', desc: 'Healthy cooking with less oil — a hugely popular kitchen addition.' },
  { id: 22, name: 'Baking Kit', category: 'cooking', price: '£20–£40', budget: ['under25', '25to50'], ages: ['child', 'teen', 'adult'], emoji: '🧁', desc: 'Everything needed to bake cupcakes, cookies, or bread.' },
  { id: 23, name: 'Personalised Apron', category: 'cooking', price: '£15–£30', budget: ['under25', '25to50'], ages: ['child', 'adult', 'senior'], emoji: '👨‍🍳', desc: 'Custom printed apron — fun and personal.' },

  // FITNESS
  { id: 24, name: 'Yoga Mat (Premium)', category: 'fitness', price: '£25–£60', budget: ['25to50', '50to100'], ages: ['teen', 'youngAdult', 'adult', 'senior'], emoji: '🧘', desc: 'Non-slip, thick mat for yoga, Pilates, or home workouts.' },
  { id: 25, name: 'Resistance Bands Set', category: 'fitness', price: '£10–£25', budget: ['under25', '25to50'], ages: ['teen', 'youngAdult', 'adult', 'senior'], emoji: '💪', desc: 'Versatile bands for strength training at home.' },
  { id: 26, name: 'Water Bottle (Insulated)', category: 'fitness', price: '£18–£35', budget: ['under25', '25to50'], ages: ['child', 'teen', 'youngAdult', 'adult'], emoji: '💧', desc: 'Keeps drinks hot or cold for 12–24 hours.' },
  { id: 27, name: 'Foam Roller', category: 'fitness', price: '£15–£30', budget: ['under25', '25to50'], ages: ['teen', 'youngAdult', 'adult', 'senior'], emoji: '🌀', desc: 'Muscle recovery and massage tool for active people.' },
  { id: 28, name: 'Fitness Tracker Band', category: 'fitness', price: '£30–£80', budget: ['25to50', '50to100'], ages: ['teen', 'youngAdult', 'adult', 'senior'], emoji: '📊', desc: 'Tracks steps, heart rate, sleep, and calories.' },
  { id: 29, name: 'Gym Bag (Duffel)', category: 'fitness', price: '£25–£60', budget: ['25to50', '50to100'], ages: ['teen', 'youngAdult', 'adult'], emoji: '👜', desc: 'Spacious bag with compartments for kit, shoes, and a water bottle.' },

  // FASHION
  { id: 30, name: 'Cashmere or Wool Scarf', category: 'fashion', price: '£20–£60', budget: ['under25', '25to50', '50to100'], ages: ['youngAdult', 'adult', 'senior'], emoji: '🧣', desc: 'Luxuriously soft — a timeless winter gift.' },
  { id: 31, name: 'Novelty Socks Set', category: 'fashion', price: '£8–£20', budget: ['under25'], ages: ['child', 'teen', 'youngAdult', 'adult', 'senior'], emoji: '🧦', desc: 'Fun printed socks — a classic stocking filler.' },
  { id: 32, name: 'Leather Wallet', category: 'fashion', price: '£25–£70', budget: ['25to50', '50to100'], ages: ['teen', 'youngAdult', 'adult'], emoji: '👜', desc: 'Slim or classic wallet in genuine leather.' },
  { id: 33, name: 'Cosy Slippers', category: 'fashion', price: '£15–£35', budget: ['under25', '25to50'], ages: ['child', 'adult', 'senior'], emoji: '🥿', desc: 'Fluffy or memory-foam slippers for home comfort.' },
  { id: 34, name: 'Jewellery (Necklace/Bracelet)', category: 'fashion', price: '£30–£100', budget: ['25to50', '50to100', 'over100'], ages: ['teen', 'youngAdult', 'adult', 'senior'], emoji: '💎', desc: 'Delicate pendant, charm bracelet, or birthstone jewellery.' },
  { id: 35, name: 'Luxury Sunglasses', category: 'fashion', price: '£50–£150', budget: ['50to100', 'over100'], ages: ['teen', 'youngAdult', 'adult'], emoji: '🕶️', desc: 'Stylish shades from a well-known brand.' },

  // MUSIC
  { id: 36, name: 'Vinyl Record (Favourite Artist)', category: 'music', price: '£15–£30', budget: ['under25', '25to50'], ages: ['teen', 'youngAdult', 'adult', 'senior'], emoji: '🎵', desc: 'A beloved album on vinyl — great for collectors.' },
  { id: 37, name: 'Music Streaming Subscription', category: 'music', price: '£10–£60', budget: ['under25', '25to50'], ages: ['teen', 'youngAdult', 'adult', 'senior'], emoji: '🎶', desc: 'Gift a year of Spotify, Apple Music, or similar.' },
  { id: 38, name: 'Portable Bluetooth Speaker', category: 'music', price: '£25–£90', budget: ['25to50', '50to100'], ages: ['teen', 'youngAdult', 'adult'], emoji: '🔊', desc: 'Waterproof wireless speaker for indoor or outdoor use.' },
  { id: 39, name: 'Ukulele Starter Kit', category: 'music', price: '£35–£60', budget: ['25to50', '50to100'], ages: ['child', 'teen', 'youngAdult'], emoji: '🎸', desc: 'Fun and easy instrument to pick up, great for beginners.' },
  { id: 40, name: 'Concert / Gig Ticket Experience', category: 'music', price: '£30–£120', budget: ['25to50', '50to100', 'over100'], ages: ['teen', 'youngAdult', 'adult', 'senior'], emoji: '🎤', desc: 'Give the gift of a live music memory.' },

  // TRAVEL
  { id: 41, name: 'Luggage Tags (Personalised)', category: 'travel', price: '£10–£25', budget: ['under25', '25to50'], ages: ['youngAdult', 'adult', 'senior'], emoji: '✈️', desc: 'Leather or custom-engraved tags for their suitcase.' },
  { id: 42, name: 'Travel Pillow & Eye Mask Set', category: 'travel', price: '£12–£25', budget: ['under25', '25to50'], ages: ['teen', 'youngAdult', 'adult', 'senior'], emoji: '😴', desc: 'Memory foam neck pillow and blackout mask for long journeys.' },
  { id: 43, name: 'Scratch Map (World)', category: 'travel', price: '£15–£30', budget: ['under25', '25to50'], ages: ['teen', 'youngAdult', 'adult'], emoji: '🗺️', desc: 'Scratch off countries visited — great wall decoration.' },
  { id: 44, name: 'Experience Voucher', category: 'travel', price: '£50–£200', budget: ['50to100', 'over100'], ages: ['youngAdult', 'adult', 'senior'], emoji: '🌍', desc: 'Hot air balloon, spa day, cookery class, or weekend break.' },

  // HOME & GARDEN
  { id: 45, name: 'Luxury Candle Set', category: 'home', price: '£15–£50', budget: ['under25', '25to50'], ages: ['youngAdult', 'adult', 'senior'], emoji: '🕯️', desc: 'Beautifully scented soy or beeswax candles.' },
  { id: 46, name: 'Throw Blanket (Sherpa)', category: 'home', price: '£20–£50', budget: ['under25', '25to50'], ages: ['youngAdult', 'adult', 'senior'], emoji: '🛋️', desc: 'Super-soft fleece or sherpa blanket for sofa snuggling.' },
  { id: 47, name: 'Houseplant & Pot Set', category: 'home', price: '£15–£40', budget: ['under25', '25to50'], ages: ['youngAdult', 'adult', 'senior'], emoji: '🪴', desc: 'A low-maintenance succulent, monstera, or herb garden kit.' },
  { id: 48, name: 'Personalised Photo Frame', category: 'home', price: '£15–£30', budget: ['under25', '25to50'], ages: ['youngAdult', 'adult', 'senior'], emoji: '🖼️', desc: 'A beautiful frame with a favourite photo — always meaningful.' },
  { id: 49, name: 'Garden Tool Set', category: 'home', price: '£20–£50', budget: ['under25', '25to50'], ages: ['adult', 'senior'], emoji: '🌱', desc: 'Quality trowel, fork, and gloves for keen gardeners.' },

  // ART & CRAFT
  { id: 50, name: 'Watercolour Paint Set', category: 'art', price: '£15–£40', budget: ['under25', '25to50'], ages: ['child', 'teen', 'youngAdult', 'adult'], emoji: '🎨', desc: 'Professional or hobby-grade watercolour set with brushes.' },
  { id: 51, name: 'Knitting / Crochet Starter Kit', category: 'art', price: '£15–£30', budget: ['under25', '25to50'], ages: ['teen', 'adult', 'senior'], emoji: '🧶', desc: 'Yarn, needles, and a pattern booklet for beginners.' },
  { id: 52, name: 'Embroidery Hoop Kit', category: 'art', price: '£12–£25', budget: ['under25', '25to50'], ages: ['teen', 'adult'], emoji: '🪡', desc: 'Relaxing needlework kit with printed design and threads.' },
  { id: 53, name: 'Adult Colouring Book & Pencils', category: 'art', price: '£12–£20', budget: ['under25'], ages: ['teen', 'adult', 'senior'], emoji: '✏️', desc: 'Intricate patterns for mindful colouring.' },

  // OUTDOORS
  { id: 54, name: 'Hiking Water Bottle (Collapsible)', category: 'outdoors', price: '£10–£25', budget: ['under25', '25to50'], ages: ['teen', 'youngAdult', 'adult'], emoji: '🏔️', desc: 'Lightweight, foldable bottle for hiking and camping.' },
  { id: 55, name: 'Headtorch', category: 'outdoors', price: '£15–£35', budget: ['under25', '25to50'], ages: ['child', 'teen', 'youngAdult', 'adult'], emoji: '🔦', desc: 'Rechargeable LED headtorch — essential for outdoor adventures.' },
  { id: 56, name: 'National Park / Wild Swimming Guide', category: 'outdoors', price: '£12–£20', budget: ['under25'], ages: ['youngAdult', 'adult'], emoji: '📖', desc: 'Beautiful guide to exploring nature in the UK.' },
  { id: 57, name: 'Camping Hammock', category: 'outdoors', price: '£25–£50', budget: ['25to50'], ages: ['teen', 'youngAdult', 'adult'], emoji: '🌲', desc: 'Lightweight nylon hammock with tree straps.' },
  { id: 58, name: 'Birdwatching Binoculars', category: 'outdoors', price: '£30–£80', budget: ['25to50', '50to100'], ages: ['child', 'adult', 'senior'], emoji: '🦅', desc: 'Compact binoculars — great for nature lovers.' },

  // FOOD & DRINK
  { id: 59, name: 'Luxury Chocolate Selection Box', category: 'food', price: '£15–£40', budget: ['under25', '25to50'], ages: ['child', 'teen', 'youngAdult', 'adult', 'senior'], emoji: '🍫', desc: 'Artisan chocolates from a premium chocolatier.' },
  { id: 60, name: 'Coffee Subscription (1 month)', category: 'food', price: '£20–£40', budget: ['under25', '25to50'], ages: ['youngAdult', 'adult', 'senior'], emoji: '☕', desc: 'Freshly roasted single-origin beans delivered monthly.' },
  { id: 61, name: 'Wine or Prosecco Gift Set', category: 'food', price: '£20–£60', budget: ['under25', '25to50', '50to100'], ages: ['youngAdult', 'adult', 'senior'], emoji: '🍷', desc: 'Curated selection of wines or sparkling prosecco.' },
  { id: 62, name: 'Hot Sauce Collection', category: 'food', price: '£15–£30', budget: ['under25', '25to50'], ages: ['teen', 'youngAdult', 'adult'], emoji: '🌶️', desc: 'A set of craft hot sauces ranging from mild to wild.' },
  { id: 63, name: 'Afternoon Tea for Two', category: 'food', price: '£30–£80', budget: ['25to50', '50to100'], ages: ['adult', 'senior'], emoji: '🫖', desc: 'A delightful afternoon tea experience at a local tearoom.' },
  { id: 64, name: 'Flavoured Gin or Craft Beer Set', category: 'food', price: '£25–£50', budget: ['25to50'], ages: ['youngAdult', 'adult'], emoji: '🍺', desc: 'Tasting selection of craft beers or flavoured gins.' },

  // KIDS-SPECIFIC
  { id: 65, name: 'LEGO Set', category: 'gaming', price: '£20–£80', budget: ['under25', '25to50', '50to100'], ages: ['child', 'teen'], emoji: '🧱', desc: 'A LEGO themed set — City, Technic, or licensed characters.' },
  { id: 66, name: 'Art & Craft Mega Kit', category: 'art', price: '£15–£30', budget: ['under25', '25to50'], ages: ['child'], emoji: '✂️', desc: 'Glitter, stickers, paints, clay — hours of creative fun.' },
  { id: 67, name: 'Remote Control Car / Drone', category: 'tech', price: '£20–£60', budget: ['under25', '25to50', '50to100'], ages: ['child', 'teen'], emoji: '🚗', desc: 'Fast RC car or beginner drone for outdoor play.' },
  { id: 68, name: 'Educational Science Kit', category: 'art', price: '£15–£35', budget: ['under25', '25to50'], ages: ['child', 'teen'], emoji: '🔬', desc: 'Volcano, crystal growing, or coding robot kit.' },
];

// ─── State ──────────────────────────────────────────────────────────────────

let people = JSON.parse(localStorage.getItem('xmas-people') || '[]');
let savedGifts = JSON.parse(localStorage.getItem('xmas-saved') || '[]'); // [{giftId, assignedTo, notes}]

// ─── Persistence ─────────────────────────────────────────────────────────────

function save() {
    localStorage.setItem('xmas-people', JSON.stringify(people));
    localStorage.setItem('xmas-saved', JSON.stringify(savedGifts));
    updateSavedBadge();
}

// ─── Tabs ────────────────────────────────────────────────────────────────────

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
        if (tab.dataset.tab === 'find') renderGiftGrid();
        if (tab.dataset.tab === 'saved') renderSaved();
    });
});

// ─── People / My List ────────────────────────────────────────────────────────

document.getElementById('personForm').addEventListener('submit', e => {
    e.preventDefault();
    const interests = [...document.querySelectorAll('.interests-grid input:checked')].map(i => i.value);
    const budget = document.querySelector('input[name="budget"]:checked').value;
    const person = {
        id: Date.now(),
        name: document.getElementById('personName').value.trim(),
        relationship: document.getElementById('personRelationship').value,
        age: document.getElementById('personAge').value,
        budget,
        interests,
    };
    people.push(person);
    save();
    renderPeople();
    e.target.reset();
    document.querySelector('input[name="budget"][value="25to50"]').checked = true;
});

function removePerson(id) {
    people = people.filter(p => p.id !== id);
    save();
    renderPeople();
}

function renderPeople() {
    const list = document.getElementById('peopleList');
    if (people.length === 0) {
        list.innerHTML = '<p class="hint" style="text-align:center;margin-top:12px;">No one added yet — fill in the form above!</p>';
        return;
    }
    list.innerHTML = people.map(p => {
        const saved = savedGifts.filter(s => s.assignedTo === p.id);
        const suggestions = getMatchingGifts(p).slice(0, 3);
        return `
        <div class="card person-card">
            <div class="person-header">
                <div>
                    <span class="person-name">${escapeHtml(p.name)}</span>
                    <span class="person-meta">${formatRelationship(p.relationship)} · ${formatAge(p.age)} · ${formatBudget(p.budget)}</span>
                    ${p.interests.length ? `<div class="tag-row">${p.interests.map(i => `<span class="tag">${i}</span>`).join('')}</div>` : ''}
                </div>
                <button class="btn-danger" onclick="removePerson(${p.id})">Remove</button>
            </div>
            ${saved.length ? `<p class="saved-count">🎁 ${saved.length} gift${saved.length > 1 ? 's' : ''} saved for ${escapeHtml(p.name)}</p>` : ''}
            <div class="suggestions-preview">
                <p class="hint">Top suggestions:</p>
                <div class="suggestion-chips">
                    ${suggestions.map(g => `<span class="chip">${g.emoji} ${g.name}</span>`).join('')}
                    <button class="chip chip-more" onclick="showSuggestions(${p.id})">See all →</button>
                </div>
            </div>
        </div>`;
    }).join('');
}

function showSuggestions(personId) {
    const person = people.find(p => p.id === personId);
    if (!person) return;
    const matches = getMatchingGifts(person);
    const modal = document.getElementById('modal');
    document.getElementById('modalTitle').textContent = `Gift ideas for ${person.name}`;
    document.getElementById('modalBody').innerHTML = matches.length
        ? `<div class="gift-grid modal-grid">${matches.map(g => giftCard(g, true)).join('')}</div>`
        : '<p class="hint">No exact matches — try browsing all gifts!</p>';
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

document.getElementById('modal').addEventListener('click', e => {
    if (e.target === document.getElementById('modal')) closeModal();
});

// ─── Gift Matching ────────────────────────────────────────────────────────────

function getMatchingGifts(person) {
    return GIFTS.filter(g => {
        const budgetOk = g.budget.includes(person.budget);
        const ageOk = g.ages.includes(person.age);
        const interestOk = person.interests.length === 0 || person.interests.includes(g.category);
        return budgetOk && ageOk && interestOk;
    }).sort((a, b) => {
        const aInterest = person.interests.includes(a.category) ? 0 : 1;
        const bInterest = person.interests.includes(b.category) ? 0 : 1;
        return aInterest - bInterest;
    });
}

// ─── Browse / Find Gifts ─────────────────────────────────────────────────────

['filterAge', 'filterBudget', 'filterCategory', 'filterSearch'].forEach(id => {
    document.getElementById(id).addEventListener('input', renderGiftGrid);
});

function getFilteredGifts() {
    const age = document.getElementById('filterAge').value;
    const budget = document.getElementById('filterBudget').value;
    const category = document.getElementById('filterCategory').value;
    const search = document.getElementById('filterSearch').value.toLowerCase().trim();

    return GIFTS.filter(g => {
        if (age && !g.ages.includes(age)) return false;
        if (budget && !g.budget.includes(budget)) return false;
        if (category && g.category !== category) return false;
        if (search && !g.name.toLowerCase().includes(search) && !g.desc.toLowerCase().includes(search)) return false;
        return true;
    });
}

function renderGiftGrid() {
    const gifts = getFilteredGifts();
    const grid = document.getElementById('giftGrid');
    if (gifts.length === 0) {
        grid.innerHTML = '<p class="hint" style="text-align:center;padding:20px;">No gifts match your filters — try broadening your search.</p>';
        return;
    }
    grid.innerHTML = gifts.map(g => giftCard(g, false)).join('');
}

function giftCard(g, inModal) {
    const isSaved = savedGifts.some(s => s.giftId === g.id);
    return `
    <div class="gift-card ${isSaved ? 'is-saved' : ''}">
        <div class="gift-emoji">${g.emoji}</div>
        <div class="gift-info">
            <div class="gift-name">${escapeHtml(g.name)}</div>
            <div class="gift-price">${g.price}</div>
            <div class="gift-desc">${escapeHtml(g.desc)}</div>
            <div class="gift-tags">
                <span class="tag">${g.category}</span>
                ${g.ages.map(a => `<span class="tag tag-age">${formatAge(a)}</span>`).join('')}
            </div>
        </div>
        <button class="save-btn ${isSaved ? 'saved' : ''}" onclick="toggleSave(${g.id})">
            ${isSaved ? '✓ Saved' : '+ Save'}
        </button>
    </div>`;
}

function toggleSave(giftId) {
    const idx = savedGifts.findIndex(s => s.giftId === giftId);
    if (idx >= 0) {
        savedGifts.splice(idx, 1);
    } else {
        savedGifts.push({ giftId, assignedTo: null, notes: '' });
    }
    save();
    renderGiftGrid();
    renderSaved();
    renderPeople();
    // re-render modal if open
    if (!document.getElementById('modal').classList.contains('hidden')) {
        document.querySelectorAll('.gift-card').forEach(card => {
            const btn = card.querySelector('.save-btn');
            if (!btn) return;
            const id = parseInt(btn.getAttribute('onclick').match(/\d+/)[0]);
            const saved = savedGifts.some(s => s.giftId === id);
            card.classList.toggle('is-saved', saved);
            btn.textContent = saved ? '✓ Saved' : '+ Save';
            btn.classList.toggle('saved', saved);
        });
    }
}

// ─── Saved ───────────────────────────────────────────────────────────────────

function renderSaved() {
    const list = document.getElementById('savedList');
    const empty = document.getElementById('emptyState');
    if (savedGifts.length === 0) {
        list.innerHTML = '';
        empty.style.display = 'block';
        return;
    }
    empty.style.display = 'none';
    list.innerHTML = savedGifts.map(s => {
        const g = GIFTS.find(g => g.id === s.giftId);
        if (!g) return '';
        const person = people.find(p => p.id === s.assignedTo);
        return `
        <div class="card saved-item">
            <div class="saved-main">
                <span class="gift-emoji-sm">${g.emoji}</span>
                <div>
                    <div class="gift-name">${escapeHtml(g.name)}</div>
                    <div class="gift-price">${g.price}</div>
                </div>
            </div>
            <div class="saved-controls">
                <select onchange="assignGift(${s.giftId}, this.value)" class="assign-select">
                    <option value="">-- Assign to --</option>
                    ${people.map(p => `<option value="${p.id}" ${s.assignedTo === p.id ? 'selected' : ''}>${escapeHtml(p.name)}</option>`).join('')}
                </select>
                <input type="text" class="notes-input" placeholder="Notes..." value="${escapeHtml(s.notes || '')}" onchange="updateNotes(${s.giftId}, this.value)">
                <button class="btn-danger" onclick="toggleSave(${s.giftId})">Remove</button>
            </div>
        </div>`;
    }).join('');
}

function assignGift(giftId, personIdStr) {
    const s = savedGifts.find(s => s.giftId === giftId);
    if (s) s.assignedTo = personIdStr ? parseInt(personIdStr) : null;
    save();
    renderPeople();
}

function updateNotes(giftId, notes) {
    const s = savedGifts.find(s => s.giftId === giftId);
    if (s) s.notes = notes;
    save();
}

function updateSavedBadge() {
    document.getElementById('savedBadge').textContent = savedGifts.length;
    document.getElementById('savedBadge').style.display = savedGifts.length ? 'inline' : 'none';
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function formatAge(a) {
    return { child: 'Children', teen: 'Teens', youngAdult: 'Young Adults', adult: 'Adults', senior: 'Seniors' }[a] || a;
}

function formatBudget(b) {
    return { under25: 'Under £25', '25to50': '£25–£50', '50to100': '£50–£100', over100: 'Over £100' }[b] || b;
}

function formatRelationship(r) {
    return r.charAt(0).toUpperCase() + r.slice(1);
}

// ─── Init ─────────────────────────────────────────────────────────────────────

renderPeople();
renderGiftGrid();
updateSavedBadge();



(function(g) {
    var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => {
        await (a = m.createElement("script"));
        e.set("libraries", [...r] + "");
        for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
        e.set("callback", c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => h = n(Error(p + " could not load."));
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a);
    }));
    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))
})({
    key: "AIzaSyCpze2T-YQ7BuPtWWavENXVVVyMVWdtMMw",
    v: "weekly"
});

function initMap() {
// Saginaw Valley State University coordinates
const svsu = { lat: 43.5140, lng: -83.9630 };


const doweventcenter = {lat: 43.43554897841903, lng: -83.93530732299735}

const Jolt = {lat: 43.434743487895254, lng: -83.93644204943148}

const Temple = {lat: 43.43487033341843, lng: -83.93850228991172}

const Stardust = {lat: 43.46223280552976, lng: -83.97279915757014}

const Dutchvillage = {lat: 43.66682142813679, lng: -83.91129533408026}

const Buoy = {lat: 43.601601564300914, lng: -83.89507232668814}

const Valleylanes = {lat: 43.60552449588595, lng: -84.16698971763512}

const funwayamusements = {lat: 43.48295289505258, lng: -83.9853203732718}

const Airborne = {lat: 43.482599466167706, lng: -83.96613106902173}

const SaginawEscape = {lat: 43.43171563074461, lng: -83.93070433224085}
// Create a map centered at SVSU
const map = new google.maps.Map(document.getElementById("map"), {
zoom: 11,
center: svsu,
});

// Optionally, add a marker at SVSU
const marker = new google.maps.Marker({
position: svsu,
map: map,

});

const marker2 = new google.maps.Marker({
position: doweventcenter,
map: map,
title: 'DowEventCenter'
});

const marker3 = new google.maps.Marker({
position: Jolt,
map: map,
title: 'Jolt Credit Union Event park'
});

const marker4 = new google.maps.Marker({
position: Temple,
map: map,
title: 'Temple Theater'
});

const marker5 = new google.maps.Marker({
position: Stardust,
map: map,
title: 'Stardust Entertainment Center'
});

const marker6 = new google.maps.Marker({
position: Dutchvillage,
map: map,
title: 'Dutch Village Advcenture Park'
});

const marker7 = new google.maps.Marker({
position: Buoy,
map: map,
title: 'Buoy 18 Miniature Golf & Icecream'
});

const marker8 = new google.maps.Marker({
position: Valleylanes,
map: map,
title: 'Valley Lanes'
});


const marker9 = new google.maps.Marker({
position: funwayamusements,
map: map,
title: 'Funway Amusements'
});

const marker10 = new google.maps.Marker({
position: Airborne,
map: map,
title: 'Airborne Adventure Park'
});

const marker11 = new google.maps.Marker({
position: SaginawEscape,
map: map,
title: 'Saginaw Escape'
});




}

window.initMap = initMap;

  /*
 // Add click event listeners to bookmark buttons
 document.querySelectorAll('.bookmark-btn').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('bookmarked');

            if (this.classList.contains('bookmarked')) {
                // Save the item if bookmarked
                saveItem(this.parentElement);
            } else {
                // Unsave the item if unbookmarked
                unsaveItem(this.parentElement);
            }
        });
    });

    function saveItem(item) {
        console.log('Item bookmarked:', item);
        // Add your saving logic here (e.g., add to local storage)
    }

    function unsaveItem(item) {
        console.log('Item unbookmarked:', item);
        // Add your unsaving logic here (e.g., remove from local storage)
    }
    */


    document.addEventListener('DOMContentLoaded', function() {
        const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

        document.querySelectorAll('.grid-item').forEach(item => {
            const button = item.querySelector('.bookmark-btn');
            const itemId = item.getAttribute('data-id');

            if (savedItems.includes(itemId)) {
                button.classList.add('bookmarked');
            }

            button.addEventListener('click', function() {
                this.classList.toggle('bookmarked');
                if (this.classList.contains('bookmarked')) {
                    saveItem(itemId, item);
                } else {
                    unsaveItem(itemId);
                }
            });
        });

        function saveItem(itemId, item) {
            let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
            if (!savedItems.includes(itemId)) {
                savedItems.push(itemId);
                localStorage.setItem('savedItems', JSON.stringify(savedItems));
                localStorage.setItem(`savedItem-${itemId}`, item.innerHTML);
            }
        }

        function unsaveItem(itemId) {
            let savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
            savedItems = savedItems.filter(id => id !== itemId);
            localStorage.setItem('savedItems', JSON.stringify(savedItems));
            localStorage.removeItem(`savedItem-${itemId}`);
        }
    });
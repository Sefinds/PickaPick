const cacheName = 'v1';

//inserir a quantidade de paginas que temos
const cacheAssets = [
  'index.html',
  'manifest.json',
  'main.js',
  'firebase.js',
  'stylegeral.css',
  'Home/home.html',
  'Home/perfil.html',
  'Home/definicoes.html',
  'Signin/login.html',
  'Signin/register.html',
  'Signin/register1.html',
  'Signin/register1.css',
  'games/tictactoe/gamestyle.css',
  'games/tictactoe/gamescript.js',
  'games/tictactoe/game.html',
  'games/tictactoe/expli.html',
  'games/tictactoe/chooseop.html',
  'img',
  'icons',
  'sounds',
  'guest/guestdefinicoes.html',
  'guest/guesthome.html',
  'guest/guestprofile.html',
  'guest/guestregister.html',
  'guest/guesttictactoe/chooseop.html',
  'guest/guesttictactoe/expli.html',
  'guest/guesttictactoe/game.html',
  'guest/guesttictactoe/gameend.html',
  'guest/guesttictactoe/gamescript.js',
  'guest/guesttictactoe/gamestyle.css',
  'guest/guesttictactoe/gamewinn.html'
];

// Evento chamar e instalar
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');

  event.waitUntil(
    caches
    .open(cacheName)
    .then(cache => {
      console.log('Service Worker: Caching Files');
      cache.addAll(cacheAssets);
    })
    .then(() => self.skipWaiting())
  );
});

// chamar ativar Evento
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');

  //remover caches que nao queremos
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

//chamar evento Fetch
self.addEventListener('fetch', event => {
  console.log('Service Worker: Fetching');
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  )
})

const CACHEBUST = false

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('index').then(cache => {
      return cache.addAll([
        '_assets/sign.optimized.svg',
        '_layouts/index.css',
        'index.html',
        'index.js',
        'index.css',
      ].map(r => CACHEBUST ? r + '?' + Math.random() : r))
    })
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request)
    })
  )
})

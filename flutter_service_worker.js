'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ae88994ec98b13d13d45d1b05d2ed6b5",
"assets/AssetManifest.bin.json": "9ee3ca058522cf734e853f433f8ec554",
"assets/AssetManifest.json": "928524aca29495c74a400902a8eae0b6",
"assets/assets/app_icons/100x.svg": "2697159bdf2ee77c9f04f376918f489a",
"assets/assets/app_icons/1h.svg": "67e91947df46260b59fb8b21e383738c",
"assets/assets/app_icons/add.svg": "6dab02f20ac17f0d54cee45d8b875a40",
"assets/assets/app_icons/add1.svg": "6200e01126dd35ebf838b0e91013cbe3",
"assets/assets/app_icons/arrow_up.svg": "9e64e5462e2361748daa3f0a18cf6a2d",
"assets/assets/app_icons/arrow_up_down.svg": "8e46f9a24520960aebd5c814bd9349c1",
"assets/assets/app_icons/buy_button.svg": "ae29e0b72f58ba9e0efe8185476862b1",
"assets/assets/app_icons/calendar.svg": "708ea215d58e75aeaee215ca82a462e1",
"assets/assets/app_icons/camera.svg": "c2039206e2f493b2520fc5304e676416",
"assets/assets/app_icons/cat.svg": "56f93725f4b2ccb84557517f13c82e78",
"assets/assets/app_icons/category.svg": "b4ace2465569d8aedbb1a663c1cc54b9",
"assets/assets/app_icons/close.svg": "2e930f5325cda2305f210068613580cd",
"assets/assets/app_icons/convert.svg": "601d952932d499fca743cd68cbe00fd8",
"assets/assets/app_icons/down_side.svg": "a567664c3e378b85c47696270aee5e44",
"assets/assets/app_icons/down_side1.svg": "d2db255d6aeebcf79bf7cc9b8649331f",
"assets/assets/app_icons/down_side2.svg": "a8ed6a3169ec33ad9ef624342d81fa8e",
"assets/assets/app_icons/down_side3.svg": "02a69053dce06c3499e6d98346ffdf2e",
"assets/assets/app_icons/edit.svg": "f8beaf9523821997884b2b07fbc7f03c",
"assets/assets/app_icons/email.svg": "1e95ecd13fb6813edc50f4d18c847a76",
"assets/assets/app_icons/facebook.svg": "43ada768fcb457e8b34ab7bdaf991cbf",
"assets/assets/app_icons/indicator.svg": "7a49ed9d5e380cd0c6c8ce23360f2832",
"assets/assets/app_icons/info.svg": "d6712c8a4ad679c4063a4ed24430f367",
"assets/assets/app_icons/instagram.svg": "df96eecb09cca5fb0d460780439e8004",
"assets/assets/app_icons/link.svg": "9473f949bb419fb068954ba7875def94",
"assets/assets/app_icons/login_button.svg": "eace072561bc3bee282bd1f54912dce1",
"assets/assets/app_icons/login_button1.svg": "3977733c34afb275d2cb3954ab858abe",
"assets/assets/app_icons/main_logo.svg": "761034244f3dab6d7c71de0738730a15",
"assets/assets/app_icons/main_logo1.svg": "534630985790094077849cc03c4d4e99",
"assets/assets/app_icons/notification.svg": "a84d2d5ea00d6be6f0359918a4786058",
"assets/assets/app_icons/people.svg": "898a408cf4c7c56ac75e9bcddb72d985",
"assets/assets/app_icons/question_info.svg": "3ae906ab7961ad75bf92f828ec8be945",
"assets/assets/app_icons/redo.svg": "8209dfaec5afb6299cc093f3490f9230",
"assets/assets/app_icons/register_button.svg": "5ae8f5cd2dffbf49b65c331cca1f708d",
"assets/assets/app_icons/register_button1.svg": "2512d4fb5047813f1732c2b03a09aa6f",
"assets/assets/app_icons/sell_button.svg": "af400103102e3c55cdca6e7587f2a2a0",
"assets/assets/app_icons/settings.svg": "4df350617a12311dc5d9b2fb922c7238",
"assets/assets/app_icons/settings1.svg": "813a9907f95ed7bfaaba6b51c79095d5",
"assets/assets/app_icons/settings2.svg": "d845ebaf4916b2d3fb2995bfa21ca829",
"assets/assets/app_icons/share.svg": "d0b26cf766273dee86037fbd68e986b2",
"assets/assets/app_icons/star.svg": "59f8526da80cd01bcf985f28bf41caad",
"assets/assets/app_icons/trade.svg": "ca6c042abb937c88f5852db85a2bf9ea",
"assets/assets/app_icons/trade1.svg": "a3dce810a151c124c043142fa809e5e3",
"assets/assets/app_icons/twitter.svg": "e09e95cd6fb44192a41d5fb9b67c1313",
"assets/assets/app_icons/undo.svg": "c7ac205f0fd3d31b66c0b876177d339b",
"assets/assets/app_icons/user_not_found.svg": "b79dfdd71e7e62517ebcfe448a847d88",
"assets/assets/app_icons/verified_account.svg": "c2d48e13c794555218278f2281bc4d0d",
"assets/assets/app_icons/wallet.svg": "866eb752b4370cba07d951285ae139db",
"assets/assets/app_icons/xbt.svg": "0f1ba4bc903475afcf23d9a99b98f2c2",
"assets/assets/app_images/buy.png": "497f190d076492d7884feae56a5906c8",
"assets/assets/app_images/buy1.png": "26b61b6c73120cc285c6ee1de9b4df88",
"assets/assets/app_images/chart.png": "181f75c82c6b385bb8d070ad6730b4e5",
"assets/assets/app_images/design.png": "694da787d763b1f482b879bd9ca5ebf4",
"assets/assets/app_images/main_logo.png": "72b3fcbb9a6b04d20cc943ed3a445c3a",
"assets/assets/app_images/trade.png": "70cc20553a1fc15a2a2fa4562f996318",
"assets/assets/app_images/trade1.png": "620bf7f69f34ef06ad551c1a84f6507f",
"assets/assets/app_images/trade2.png": "bfb91aae43bc7b5b43a6db6c7342e1dc",
"assets/assets/copy_trade_icons/btc.png": "b3c3745ddbeaaaa48e4f3d535747ba76",
"assets/assets/copy_trade_icons/filter.svg": "36b0020bc256bf23d833b231ed59db84",
"assets/assets/copy_trade_icons/no_found.svg": "c5e81ec18c32e1e209b7370c91b2d401",
"assets/assets/copy_trade_icons/search.svg": "0d166abff2c064e457b15c8dc64a7e46",
"assets/assets/copy_trade_icons/watch.svg": "123c28b6e6cdc465c48c9bb80e700663",
"assets/assets/locales/en.json": "e229f8ba6152531be4504079ba6c3900",
"assets/assets/locales/ko.json": "e63d79363766be65d3cb6088101c3a2c",
"assets/assets/support_icons/align1.svg": "71ef218f90cb3cc6ffe3cd78cf0e6cc1",
"assets/assets/support_icons/align2.svg": "30e5e17bc1a5497b1015c3e149877b85",
"assets/assets/support_icons/align3.svg": "232fb56b420c0972ae0d477a6a9b08a8",
"assets/assets/support_icons/arrow_down.svg": "866637706ff367107edd3969f0b62929",
"assets/assets/support_icons/attachment.svg": "b85b4d5650ab05d702e3feb7d9a38e6b",
"assets/assets/support_icons/b.svg": "97458caa41a652d81cb5ee4a36e02843",
"assets/assets/support_icons/bullet1.svg": "9e3423777ffa57d562487ec8549248c5",
"assets/assets/support_icons/bullet2.svg": "d1f6b89f20089593b012010c7d57d5c0",
"assets/assets/support_icons/coma.svg": "650ea1b796570b13bfc27ac35275fccd",
"assets/assets/support_icons/down_side.svg": "f539b6496d73645c3d363fdfe9d02fe0",
"assets/assets/support_icons/down_side1.svg": "866637706ff367107edd3969f0b62929",
"assets/assets/support_icons/i.svg": "200211b32e3a503efdbc052009ed4aaf",
"assets/assets/support_icons/menu.svg": "534aedae29c9351430d11884912cac0f",
"assets/assets/support_icons/p2p.svg": "ef06893f69ef7981811a6f26281a99bd",
"assets/assets/support_icons/right_left.svg": "f0e68009a0529e31421e916ea26e6cae",
"assets/assets/support_icons/ring.svg": "b4412088f89104a0903b8d4dfefac54d",
"assets/assets/support_icons/topper.png": "d8f80615dd60fc01b5e2fe07d481350d",
"assets/assets/support_icons/trade.png": "4631a3c86187073092bd95733754e3a0",
"assets/assets/support_icons/u.svg": "13ede684c029afc1a7e73b255c73227c",
"assets/assets/support_icons/up_down.svg": "6013410a3d9c2f01e31b8cc85df080cf",
"assets/assets/support_icons/usd.svg": "95778d5764a0b97699278a2d19964cfe",
"assets/assets/trade_clan_icons/bitcoin.svg": "23e5af039f27e82bc036ef5ded337a74",
"assets/assets/trade_clan_icons/card.svg": "fa091ae293def21d9182666c6a5705af",
"assets/assets/trade_clan_icons/date.svg": "67f4e85a48aebd99480510c8df3c5f93",
"assets/assets/trade_clan_icons/eth.svg": "b3f05fb16fd493ddd5a26f8127434c8e",
"assets/assets/trade_clan_icons/game.svg": "50165b2782c76dcdddbbd7eab74a8625",
"assets/assets/trade_clan_icons/lock.svg": "cadfb63f7555ed7adeb1bf3fd04ac0a7",
"assets/assets/trade_clan_icons/profile.png": "a0b02c0a6abd14b1f6deef96692940e6",
"assets/assets/trade_clan_icons/save.svg": "cd49e986de9cd975f5bf89bdc51d6f37",
"assets/assets/trade_clan_icons/search.svg": "78dcf9d61581577d7710d3573766c54a",
"assets/assets/trade_clan_icons/share.svg": "a22d35ffbf29c10949a24d28045eeec6",
"assets/assets/trade_clan_icons/trade1.png": "f22f7cb2153953a4dce1a98532c706e0",
"assets/assets/trade_clan_icons/trade2.png": "24cb5baa665699124164bdf5dabbd7f1",
"assets/assets/trade_clan_icons/twitter.svg": "bd81cbaaa5d90d813df41bfad8d0cc18",
"assets/assets/trade_clan_icons/won_currency.jpg": "3b02420d1a5c456eb6e99564e11f12aa",
"assets/assets/trade_clan_icons/won_currency.svg": "74fd34d58f37faa607efde01d708826d",
"assets/assets/trade_crypto_icons/arrow_right.svg": "b953f5f83243e31cb4db024b507209de",
"assets/assets/trade_crypto_icons/chart.svg": "478bf2af70d7ad17e1d7b66c0b492023",
"assets/assets/trade_crypto_icons/coin.png": "49d329dfb4b61b34c814851ac528b0b6",
"assets/assets/trade_crypto_icons/coin1.png": "62b9af88b9ab6bf035c451cc5330ddb9",
"assets/assets/trade_crypto_icons/design.png": "c988edb7061c286bc64faf4cecc25701",
"assets/assets/trade_crypto_icons/eth.svg": "e0dcecb19db54ed5d6cdf3d107c0af02",
"assets/assets/trade_crypto_icons/fund.svg": "492bb33db9e46992287e56797b6de631",
"assets/assets/trade_crypto_icons/highest.svg": "c33680c75ad4c326d4831c352a9c3962",
"assets/assets/trade_crypto_icons/person.png": "99657a09dd9413667216aa19bb9a2265",
"assets/assets/trade_crypto_icons/person.svg": "f8b1fa662dd6ba921696cad1d88cf4e3",
"assets/assets/trade_crypto_icons/portfolio.png": "9ce89c5027266261201d33152eacc6d4",
"assets/assets/trade_crypto_icons/right_side.svg": "4714cf968b9e27b54865d200d1e79846",
"assets/assets/trade_crypto_icons/share.svg": "51f648f084cc37a909ab0afff105e835",
"assets/assets/trade_crypto_icons/star.svg": "4f6f93d2c65c13eeb04d91003180b64e",
"assets/assets/trade_crypto_icons/top.svg": "7275421ee7d3e39913835d0129e4c018",
"assets/assets/trade_crypto_icons/trade.png": "bc132a4fe1b63c3c8f890c7750de1d1d",
"assets/assets/trade_crypto_icons/up_shape.svg": "5b3700864c9ae63fcbf7c356c8068346",
"assets/assets/trade_crypto_icons/user.svg": "ea4ec0df4afa7addea51d37278eb18d4",
"assets/assets/trade_crypto_icons/worst.svg": "065a3ed9fd7233dfcc5de4a8f1b5163a",
"assets/FontManifest.json": "1c71a396173f42e80f9c503178010ecd",
"assets/fonts/Fellix-Bold.ttf": "68e71423dc78a0f3d70636b7b2cb5b86",
"assets/fonts/Fellix-Light.ttf": "2144a07fbf04cee423cac776f7b7acff",
"assets/fonts/Fellix-Medium.ttf": "eec9e789c6f46e04cdf85edef1129723",
"assets/fonts/Fellix-Regular.ttf": "269e77bf2afb180f2813c26073d8a3c7",
"assets/fonts/MaterialIcons-Regular.otf": "0d2306b8fac1799381b37d8c738870b3",
"assets/NOTICES": "c76ac1934891cc97996269ad1839e0f5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "4e6e9cb94178bb5bbe82867a529bf1cf",
"canvaskit/canvaskit.wasm": "64cc1c11c34313697f61d40fa90dd69d",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "4a107a709d356e8c98df2d6a1dd3793e",
"canvaskit/chromium/canvaskit.wasm": "b5348b696a8243904761bc52959a4b29",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "ab9b8605641422ec29a99434f3c5e2d5",
"canvaskit/skwasm.wasm": "a57540484eaaf16cabc66dae4959e60d",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1bf28003a56a6c75ae372d7d745d4d96",
"/": "1bf28003a56a6c75ae372d7d745d4d96",
"main.dart.js": "66580bfb29e8fa0ac5dd8f6fbee85d4d",
"manifest.json": "7f73d0d29c1b0c63fa0a876d81bb5fbf",
"version.json": "18036813d9d7f0254f2dc6c5c15a4b4f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

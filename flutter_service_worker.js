'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "eed7a33f53201e136d0e28af9fbc3710",
"version.json": "15235b5108d6a877ef74fe3317a96bf7",
"index.html": "125dabfc4b910947eef37a76d69ce369",
"/": "125dabfc4b910947eef37a76d69ce369",
"main.dart.js": "77a35fb47ff33ff8e8a81860e1a85dde",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd091ea5bc8f3ccc10f74bd67179fb6a",
".git/config": "b77e550eb32b3b92ec43632da0f01141",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/f08c5d99a8b012332a9d1d57928341d02ebc84": "207b6447418e438226073694eec1eeb8",
".git/objects/35/8622b34dbbe0ece336ac76a29e0f0f7a6de342": "563cf1040772128c3244cea8dee07b41",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/69/10f847366295c10626893428ef3d4a939d1bab": "04ed705b7a2f8d252a9d04ec4d42673b",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/67/585b9f9cbac3380d67044d52c2580263d83eab": "17e8bc189d47b5a6793e68348ff94875",
".git/objects/93/dcf01d0d353a870f2263653db2902567e6d8d9": "e748a03dcffb1deae1bae39f9ae0e046",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/34/a7d062691b0f100fa93ed4432507868a1e6e02": "20b33b3a81805d5e78724bcaa584d49c",
".git/objects/33/f7eb33590cea842e9932709f204b40bfe9989f": "b88aa050e21e33258e11186e4520d1b3",
".git/objects/9c/d56c3f87a6f2b951a43fddfbf74e3c956f246d": "0ea75b96310ca22bfd8f1fda604c4191",
".git/objects/d9/2274fba781521f2becc537e0b653c79a389eea": "b8ea964a10771886eccc3ab238d5ea63",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/b3/f0abccebda2708b9188842daf086cbd62b82fc": "91624a314f8c2bb574d38db5605174d7",
".git/objects/da/1fb19ab1ae16d62babe31af290db060fd77081": "dad0acbe7a10fe622507ced5ea547115",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/892e427e706371d8398d4a46274f78c91b2c69": "6b0879bf8ddc00c1184dbcf77296b20f",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/120ee79d128d54a671b1e7602845aedc9ef48c": "8b758ea240d75f083cb2bfe22e64a690",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ca/65012fab2491300e2634f7fbd7b1af51a33b73": "8639a7cbcce86d74ef06a6b887d318c4",
".git/objects/fe/2d80bce9722bbbd3e62de05eeded13999493b8": "00a491e7327344b8c916e4fa2aa0a8df",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/18e57671deb9fcd935370e28fafa98fe265523": "21aee79c0a70d0b529f4ce9455986033",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/80/4b95f96d81ab964ffb03b1e3af959ed19cfabc": "6d8a704f5d26945858fd800a900d9c5b",
".git/objects/7b/2baf5cc142300411ca1e6bb10d67e8268e36f8": "c3fef5c881d09867fc6fd4e7bfe641a5",
".git/objects/8f/99eaff0fa2854a7f2d5ecbaa4c9ca122152f72": "48b95c2f359fbb4cc754b58a28c44022",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/5d/284371dc98c18e68be023cf3c9fb3a0060eb70": "2175fd71e1cc7dd70820cb2607743d14",
".git/objects/31/4f43e65f7d93d4085983b320c0b4f363ef10df": "82d9ec8a8116d8bf8de4c290830195d0",
".git/objects/65/fdfa81afd736c0d59199275557766391c95922": "54d668d0e1cb26d07ca16edb40893bf7",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/54/155c130e5b28bc8e23750e5238a7dc237c983a": "4b62dd13b2820be4633f920c28b41711",
".git/objects/53/daed9a55da3a9a79aaf2839d1a2a41ea296a94": "eaf2f36016794023840c2925b5977b5c",
".git/objects/5b/47d8ba23b8917ce1a1e3badd5d91199c142a09": "754bc6ae43e03e25a773938096ec6927",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/39/e2383aa9b54ba4681f9f7be0f25747dd5e96bc": "3d9a1f8fe345f432149feff16dd3325f",
".git/objects/99/cf843f57336ac86d238d607a405051ca6de509": "af13d3d804ffae3113f0c9d15bbc58c0",
".git/objects/97/a2f1e34b9f8877fe30b15ae75a117dffc2dafb": "7cbffb80a81f4b5c164f08dfc35eecd8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/b6/b7d01cff3933f4e43fdd7f04d8d3ce08d1e33e": "666d32471203e89465f145f3e08daace",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c4/77c95eb0a76659bcc2b40d955f0a13859a4fe9": "677533b4db6d9e2c2a8003d4b113180e",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/7066c6781c5efa11563e6242cb5f12fa35a7eb": "76b15793bf2ff85895f2f71c0789a687",
".git/objects/ce/35cb05405056a36dc31cde0f6bbae74a8e065e": "2e820ebff126fc636101d450ad7f264a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/77/fe0c5ab98b4dade70b2569c7da11a417e67c16": "2e2f51d337bf947c65fe2bb76fa91ddd",
".git/objects/23/aead5e5732ab911d339fa572f77789a17ee49b": "8f7ac37cc0b4976c440cd8ba514bbbe8",
".git/objects/15/38660af8e66b1b413406ac7371a9cdb9aed3e2": "ba88a98b86723b1ad4bf7293a4a7eaaa",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5c56e165e19164cf8e602cc89bd1df99",
".git/logs/refs/heads/main": "e3be40bc75aa70c67c3a6b8e958eacd7",
".git/logs/refs/remotes/origin/main": "1ad6bb8da856a67437dd0e733bbbae72",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "219cd05180ba57a612ffb5d2f416d1dc",
".git/refs/remotes/origin/main": "219cd05180ba57a612ffb5d2f416d1dc",
".git/index": "019b97dd2e74e98b14927b6b70a196e5",
".git/COMMIT_EDITMSG": "bb77460f4cbee3a9ef441e54d213fbea",
"assets/NOTICES": "afd1d9cf434483c2914b30bfdbf50922",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "08ea9e56a91aad063a46709c6fcc7dc6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "3764f1ccfdd997b6aa47648a6e99ad7d",
"assets/fonts/MaterialIcons-Regular.otf": "410200357bd7a5e4f9d1b70ab9cf7407",
"assets/assets/mp4/everybody.mp3": "78dce74b3ac565207517eebc9b610aa0",
"assets/assets/mp4/light.mp3": "4c76e29435b346c440cea3d7ff75286e",
"assets/assets/mp4/talha.mp3": "8286eff417cdef7cdbfd7b7def27b552",
"assets/assets/mp4/wildflower.mp3": "6c1820f09ce13cac1e6dcad9879df493",
"assets/assets/mp4/baaz.mp3": "13b889d825b4144d9837682a777a0da9",
"assets/assets/mp4/starboy.mp3": "e3bfc8aaaec004623388a26a48d507ed",
"assets/assets/cover/thesmiths.jpg": "1f367a328192ca59dff66e2520f31850",
"assets/assets/cover/Starboy.jpg": "aca17800fd825e3218b71061c4f860a7",
"assets/assets/cover/Billieeilish.jpeg": "302a01ad00fcd7d53d5391af03859dd1",
"assets/assets/cover/talha.jpeg": "92ecec560161dbdfa3720d2301eebe0c",
"assets/assets/cover/XXXTentacion.jpg": "31d1fecbe4782c291f52fda5dd9bad9b",
"assets/assets/cover/talha.jpg": "5b1a2d1f62c49b8ea0812153e45c7b27",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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

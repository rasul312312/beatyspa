/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/abou_us.html","16933f51a76e85ff1bfb447140b99e2f"],["/bootick.html","58547554530778ffe03c9a91aa7307a5"],["/css/libs.min.css","a7facc06c0e1b3d6b36b3515b453ee3d"],["/css/style.min.css","4ef46aa2fd952193615a92bdd09d9f82"],["/fonts/AvenirNextCyr-Bold.eot","cd1b4c6212d736229312a937412eedea"],["/fonts/AvenirNextCyr-Bold.ttf","cb5f2e91d0edea79307ffa674c219a1d"],["/fonts/AvenirNextCyr-Bold.woff","2dcf2324d8c5365339b70433bcd952e4"],["/fonts/AvenirNextCyr-BoldItalic.eot","cdbdf32b3d9d478a11653f0bb9872a6b"],["/fonts/AvenirNextCyr-BoldItalic.ttf","6f558bba0e1dedc912497c80d4fe2228"],["/fonts/AvenirNextCyr-BoldItalic.woff","348ecb6dc6cac231aaaa725321aea3a0"],["/fonts/AvenirNextCyr-Demi.eot","96adc4bebb865e2bc3c135105c2ffe66"],["/fonts/AvenirNextCyr-Demi.ttf","104be5f79e3ef6239d62bd897fde8d91"],["/fonts/AvenirNextCyr-Demi.woff","fe6d7419dcc1b01901050f02303ea003"],["/fonts/AvenirNextCyr-DemiItalic.eot","0a25bfd770c0f66c09139d5cc7b4daeb"],["/fonts/AvenirNextCyr-DemiItalic.ttf","5279d5a5c82ae79515ecaf462d0357c1"],["/fonts/AvenirNextCyr-DemiItalic.woff","405ae9542dcd314ff574920cf4c39114"],["/fonts/AvenirNextCyr-Heavy.eot","c7c48f65258ec9fa781d5bd63325e191"],["/fonts/AvenirNextCyr-Heavy.ttf","b14619f5cc83d46590b825555375cd36"],["/fonts/AvenirNextCyr-Heavy.woff","639aa9c29711f3129ec5d80d901e22ab"],["/fonts/AvenirNextCyr-HeavyItalic.eot","c00d51e26a2c231ac479ede7788cd888"],["/fonts/AvenirNextCyr-HeavyItalic.ttf","e962563da9bae7e5165ee4a0f61d9aee"],["/fonts/AvenirNextCyr-HeavyItalic.woff","2ec1507802262ee3d4d8b8cac1507c67"],["/fonts/AvenirNextCyr-Italic.eot","5de772963e18f14966e61d2bae8bfda4"],["/fonts/AvenirNextCyr-Italic.ttf","51972d571dc4fbd6faff884ffa007c29"],["/fonts/AvenirNextCyr-Italic.woff","3e31fb5719598f7d79c0eaa003991a62"],["/fonts/AvenirNextCyr-Light.eot","e343ba2c0a81c8ea4aea9bbb0f2ddb0f"],["/fonts/AvenirNextCyr-Light.ttf","c91f454865c62e8e068ce224a49fccc9"],["/fonts/AvenirNextCyr-Light.woff","2bda12c6f0fc7cdcf3f70b3225e39d52"],["/fonts/AvenirNextCyr-LightItalic.eot","95939d3fba08e42132eb028cc2970997"],["/fonts/AvenirNextCyr-LightItalic.ttf","64954fb75330e520cab5684ace47da79"],["/fonts/AvenirNextCyr-LightItalic.woff","0ebbb046ddc2704add68c609f8c5fd3e"],["/fonts/AvenirNextCyr-Medium.eot","576011fe6e1aa00766f8521305d6602b"],["/fonts/AvenirNextCyr-Medium.ttf","862c7c4267856b43beabe738a13c281e"],["/fonts/AvenirNextCyr-Medium.woff","241293dd350f84881201063e58f13109"],["/fonts/AvenirNextCyr-MediumItalic.eot","063f62c17593b8d4080993e85c6c1d8a"],["/fonts/AvenirNextCyr-MediumItalic.ttf","f2fc32fb724bca617be17961d4a846d2"],["/fonts/AvenirNextCyr-MediumItalic.woff","33b8aaeaa36918de0830703cb530898e"],["/fonts/AvenirNextCyr-Regular.eot","4171ed3ba504b1da3b601a6b52e94dce"],["/fonts/AvenirNextCyr-Regular.ttf","97b615b907fd3510f9129eac4a731f6f"],["/fonts/AvenirNextCyr-Regular.woff","a81229c89f968c0b8eb6544e2a90d17a"],["/fonts/AvenirNextCyr-Thin.eot","2c2afac99d68168fc5acbe4cc9987d31"],["/fonts/AvenirNextCyr-Thin.ttf","c48a8c06a18f630b38b0fa5f19ffc0d2"],["/fonts/AvenirNextCyr-Thin.woff","a3de855ab1f8b0095490c30d9a888bb7"],["/fonts/AvenirNextCyr-ThinItalic.eot","afd4120fe4125d1725b9ca65b7ef78fc"],["/fonts/AvenirNextCyr-ThinItalic.ttf","bb97e3a1dc8431300de8af6b4862dda2"],["/fonts/AvenirNextCyr-ThinItalic.woff","a20377e2e35c0c9b514194619665defc"],["/fonts/AvenirNextCyr-UltraLight.eot","2b9960b9669b9f65f78df5c83b9c40c9"],["/fonts/AvenirNextCyr-UltraLight.ttf","1a44681e3536dc4ddee2196d96ae2169"],["/fonts/AvenirNextCyr-UltraLight.woff","decf8516e2fff3aa12211d6b4cb18e42"],["/fonts/AvenirNextCyr-UltraLightIt.eot","3a8ca6942a3980fac50e74cacaed6862"],["/fonts/AvenirNextCyr-UltraLightIt.ttf","e2651b88579ab90cb3be5c8efafe25b6"],["/fonts/AvenirNextCyr-UltraLightIt.woff","533232314791701727b240ed84c3628c"],["/fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["/fonts/Material-Design-Iconic-Font.eot","e833b2e2471274c238c0553f11031e6a"],["/fonts/Material-Design-Iconic-Font.svg","381f7754080ed2299a7c66a2504dff02"],["/fonts/Material-Design-Iconic-Font.ttf","b351bd62abcd96e924d9f44a3da169a7"],["/fonts/Material-Design-Iconic-Font.woff","d2a55d331bdd1a7ea97a8a1fbb3c569c"],["/fonts/Material-Design-Iconic-Font.woff2","a4d31128b633bc0b1cc1f18a34fb3851"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/icomoon.eot","4f9a362f9157e8f87ea9dfa010bb99e7"],["/fonts/icomoon.svg","ea12bf87dfd41f99849e6878ad194381"],["/fonts/icomoon.ttf","86f18f776c95fd8c323d5e40c66d979c"],["/fonts/icomoon.woff","ce05de905a86f6ccf209a746d5c28b82"],["/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/fonts/stylesheet.css","681a852231cc09aa291bb2d7c3de3e41"],["/gallery-page.html","b219d283befec83ba3e9920b97483bc3"],["/img/jpg/ab1.jpg","7e40bef0819547b6681b04f37d69481c"],["/img/jpg/ab2.jpg","f8c13b7320e8684ce78eb7c68be454e6"],["/img/jpg/ab3.jpg","a0dc86a74709c1c2c2f74774c24f407d"],["/img/jpg/ab4.jpg","67b5b1a142c9c3a400132a42049b10e2"],["/img/jpg/ab5.jpg","e25163672f18ee04b7f92e807d352d88"],["/img/jpg/ab6.jpg","db45b780c1b0ce2d008c4daeadda07b6"],["/img/jpg/about.jpg","cbf4216d3461704d29338118dca5e400"],["/img/jpg/action.jpg","3de7de28e56a5118385ac3fc081b4798"],["/img/jpg/banner.jpg","d7ecd79190d28f3ad71bde6cda8c95da"],["/img/jpg/banner2.jpg","e84f313e6f04430d89eadc1e4a315118"],["/img/jpg/bot.jpg","206156e25a3373dd04bd37c4f1704c6b"],["/img/jpg/g.jpg","ab267398edb3b1c47e3e8da676b56e43"],["/img/jpg/gal.jpg","dce76aa11622f76d8df80921614343bf"],["/img/jpg/idea.jpg","1a5f9bb494d103ebd451e4e6acd3f7f3"],["/img/jpg/idea2.jpg","2a87ef1e8820723042044f9714d63a77"],["/img/jpg/idea3.jpg","56d757c4fc90078b4b1395a760056e91"],["/img/jpg/idea4.jpg","1d2353ba071fe08830604764e92beb2b"],["/img/jpg/idea5.jpg","f4109a708ba2189edfd014b29de7e9e8"],["/img/jpg/idea6.jpg","11fd67d5a23c596de9c6c8ad9a3e36d0"],["/img/jpg/kitchen.jpg","04cd1e3226074c8e4c487b548224d7e2"],["/img/jpg/l1.jpg","efb225652cfd65eaeace0597f750e1ec"],["/img/jpg/l2.jpg","dfa988b99846145624f9df552c745426"],["/img/jpg/l3.jpg","b2e1237d69d3a35becac895c38ea69ef"],["/img/jpg/l4.jpg","f553eb3889c2ee78123d0fbf860158d8"],["/img/jpg/l5.jpg","f22518fc0b019ebffd852cce5b77ad6b"],["/img/jpg/lic.jpg","d97eeb86620954b0af6717ff2434488c"],["/img/jpg/m1.jpg","aaccfb8431111243687ed203f717c7fd"],["/img/jpg/m2.jpg","fb12c0aa035dfab7753681a945f25f9d"],["/img/jpg/m3.jpg","1c5e78b225d21fa3926bbbb94393ad3a"],["/img/jpg/m4.jpg","c528f49e6048226d2bb95dbfd990c300"],["/img/jpg/m5.jpg","97ff37b775ae12fbd483cf3eb915c7b7"],["/img/jpg/m6.jpg","34e47a9fc17246dcb1eea791f43802b8"],["/img/jpg/m7.jpg","8c128f6e26c9efe180d224142ad30851"],["/img/jpg/news.jpg","471bcdeae73bcd15938b8221e66e4d38"],["/img/jpg/news2.jpg","d0486ae7c21dee7dd591c2c921f1008d"],["/img/jpg/rev.jpg","e97751ef1e53e4a1d3d4064a343d5267"],["/img/jpg/sl1.jpg","9f172985e1442b6df2e48ebbe04913bb"],["/img/jpg/slider-cover.jpg","ad47ceca63813b875d1a675252a3669b"],["/img/jpg/slider1.jpg","6c04481b24ca365dd067d833586166f8"],["/img/jpg/superbg.jpg","87ab7246d78430161217801ee2a5c270"],["/img/png/bl.png","abd0882cae8994c5c3167dd64bfb95cc"],["/img/png/com.png","09830ed3de432445448a89ba5ae29840"],["/img/png/k1.png","62aec35e242394b67c1dee99a860304b"],["/img/png/k2.png","7afba080a390c22f1d3e4d48e7a8cb1a"],["/img/png/k3.png","86f31fbf28c0ef6a8624fa639ac8827b"],["/img/png/k4.png","6e4cf3a99d2dbb632ff9fcd3a24eae14"],["/img/png/k5.png","97b4669168a4723c66588e3ec742e172"],["/img/png/k6.png","b97c1a0a554743b16cf91a02807e898d"],["/img/png/k7.png","541cb6bb437e2d2339fba2c3f81c0dab"],["/img/png/k8.png","e249d9a0345210222d1fb1313ae3454e"],["/img/png/kb.png","2887080330aa84fb46fb4a1fd277d745"],["/img/png/l1.png","87c16215f655fefbab46d8e5bd0bae73"],["/img/png/l2.png","06a0ac38946be9725eaacb4cf0c04e65"],["/img/png/l3.png","6d487aa7faaadf753bb29c14f9dcf509"],["/img/png/l4.png","30ffe5c8dfec1bbeef8568fc06d9937d"],["/img/png/l5.png","0ecb7a283960c235f907e0711d647d9f"],["/img/png/l6.png","af31173f7554e4f9cbe40dd6512d9964"],["/img/png/lock.png","d761907fabfa2f79b533a23fb61e827b"],["/img/png/logo.png","ef85af2f778fea3dc82a22957426e8dd"],["/img/png/menu.png","95984cab8ee3697f7df7323269cee58d"],["/img/png/super.png","2d6908b010d95fdc1ccff8cff499b561"],["/img/png/superbg.png","9346f62ef6e91c732cca6e63fce495a1"],["/img/png/tovar.png","8fedf89d90e8d6ceb3e42a49d0a30c3e"],["/img/png/tr.png","bce09e326193efd27068ce1e23386ef3"],["/img/png/work.png","1748e72eac2beff5d541d2812f88de02"],["/index.html","ee0f4291ddd47c8bf1652f35b51bf804"],["/js/common.min.js","3c708813929739187fc738c2ffb410de"],["/js/libs.min.js","f768eaf8d0b8096b4058dc1b1211077d"],["/license.html","564b7d2ad6acd339354246de8f6647b8"],["/manifest.json","cd97fb57f20e6b285fc5398738a312e3"],["/news_inner.html","e5168970013d8516722d7912c08df836"],["/revius.html","2acf0f6c565f828dc6e9424d05b46090"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








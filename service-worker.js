/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "aac32e3eea424625ec31bde990fbff36"
  },
  {
    "url": "assets/css/0.styles.ac150faa.css",
    "revision": "453a3fa0dad52402e2b20a58de935494"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.ac024f34.js",
    "revision": "88b9f3a2b533bcdfc7a2fc86afccf5ba"
  },
  {
    "url": "assets/js/11.a07079b2.js",
    "revision": "cfcc99905967727bbc22863081689316"
  },
  {
    "url": "assets/js/12.051323e3.js",
    "revision": "94083756877a7fe5b772d78cfed5edc3"
  },
  {
    "url": "assets/js/13.9fac41c8.js",
    "revision": "48e87a37bef09842e655a0cbba8d5e60"
  },
  {
    "url": "assets/js/14.167b5405.js",
    "revision": "d152a82ee6ea9efaaca7b6c2a2f42432"
  },
  {
    "url": "assets/js/15.38a7bc32.js",
    "revision": "4bc2df013fd3e91668bba26291b1ce7a"
  },
  {
    "url": "assets/js/16.9e6f471d.js",
    "revision": "da39e410dfce81334e443754d54d609a"
  },
  {
    "url": "assets/js/17.b3ac9297.js",
    "revision": "3c40f989ea6e269b5be81de29fec4add"
  },
  {
    "url": "assets/js/18.fe6a7004.js",
    "revision": "7bd1245a63f28e842f442064f8f0e01c"
  },
  {
    "url": "assets/js/19.6603ef96.js",
    "revision": "20d6b8e37e0b2b899d68ff3af89a2ca2"
  },
  {
    "url": "assets/js/2.e80942ca.js",
    "revision": "8471ceef01c26910a7d7d7ce6b8683cb"
  },
  {
    "url": "assets/js/20.3f416f35.js",
    "revision": "60f10cd6a0e524965f300c1d3441d9db"
  },
  {
    "url": "assets/js/21.f5a91189.js",
    "revision": "31a05e0bfa558bd3fe44a34123dc794a"
  },
  {
    "url": "assets/js/22.41bc76f4.js",
    "revision": "8cfd9c3d439f7d695d90c55f77631d53"
  },
  {
    "url": "assets/js/23.043d7ea9.js",
    "revision": "dca42ef64cb269e9b3b14a17fcbb602d"
  },
  {
    "url": "assets/js/24.c747e259.js",
    "revision": "ab06376fb2871500fafb69e7d7e80720"
  },
  {
    "url": "assets/js/25.f99d0882.js",
    "revision": "875435bdaccfccf20ace0ac80145cd8a"
  },
  {
    "url": "assets/js/26.b91a8ea2.js",
    "revision": "ea93e03b0d86e0a75b8103e38b311879"
  },
  {
    "url": "assets/js/27.4cee9c28.js",
    "revision": "7fbe2065d692999c1bffd876c0ffaaeb"
  },
  {
    "url": "assets/js/28.759d8613.js",
    "revision": "9428ec4ba97b6f21641b7b6f12a21982"
  },
  {
    "url": "assets/js/29.cf654110.js",
    "revision": "f96dcc40efd05eb64015c50c6593838f"
  },
  {
    "url": "assets/js/3.fe6d7168.js",
    "revision": "c7ff5da4f22d504343294d4110eb54cf"
  },
  {
    "url": "assets/js/30.d1c7aa1c.js",
    "revision": "fe234e99119c8ed29d4f8c1450008809"
  },
  {
    "url": "assets/js/31.e343626d.js",
    "revision": "55a14de83f6f67cd2ae48e6e1b7a895c"
  },
  {
    "url": "assets/js/32.e76949ad.js",
    "revision": "c1711e9d61054c0fca731b4fc7dd5f4b"
  },
  {
    "url": "assets/js/33.c8366e0d.js",
    "revision": "01cb69a0702550aa06510d8530060e2c"
  },
  {
    "url": "assets/js/34.957f3f5e.js",
    "revision": "2fdb6c1c4958faa4022f4785329f8e6e"
  },
  {
    "url": "assets/js/35.22280b3b.js",
    "revision": "69058a7982ae32373861466114c7cf67"
  },
  {
    "url": "assets/js/36.eb4476c8.js",
    "revision": "8d9cc0bc99f80af33ed32c46d9c548bc"
  },
  {
    "url": "assets/js/37.bd9a1c0d.js",
    "revision": "7d9a8ab2853e028024f3ad04e24210d2"
  },
  {
    "url": "assets/js/38.0091b02d.js",
    "revision": "e124a58ada4c2b322ac9355832c3116e"
  },
  {
    "url": "assets/js/39.eeffab0a.js",
    "revision": "bb0dc0764f300d6c3efd195ce6adc028"
  },
  {
    "url": "assets/js/4.e28d717d.js",
    "revision": "61c330ee491fa4219741dae56b28d52d"
  },
  {
    "url": "assets/js/40.a43c93f2.js",
    "revision": "1a06a579baa365e90bcc958914ef145e"
  },
  {
    "url": "assets/js/41.8c3124c8.js",
    "revision": "9cab43ca54de90ddd554bcabfd48080f"
  },
  {
    "url": "assets/js/42.1f88bf53.js",
    "revision": "5fd1aafab59270a187fc3943f081c5ab"
  },
  {
    "url": "assets/js/43.6421b66d.js",
    "revision": "1589fbc8dc6993befdcea61034bf199b"
  },
  {
    "url": "assets/js/44.da14b4c4.js",
    "revision": "149ce14a93e28f340591ade38d92521d"
  },
  {
    "url": "assets/js/45.50ca9c38.js",
    "revision": "8617005ccb457fc57771e8a2915b3705"
  },
  {
    "url": "assets/js/46.d4c0cea6.js",
    "revision": "e7de189054cb3bad415f7ee68e55cd15"
  },
  {
    "url": "assets/js/47.fbd723a8.js",
    "revision": "035c04be512e9ec1b228823e918f999b"
  },
  {
    "url": "assets/js/48.4a4c7a6a.js",
    "revision": "88a8846d6ffed507e5aae730f9c106f9"
  },
  {
    "url": "assets/js/49.31a4c5d2.js",
    "revision": "b4a1dd3686d6829d63df23d8dbdf6221"
  },
  {
    "url": "assets/js/5.2afffd05.js",
    "revision": "c405923ea9a0a75060900682faf7a8ff"
  },
  {
    "url": "assets/js/50.11a27bbb.js",
    "revision": "80ab19d5968d36edce215a9a3a435d07"
  },
  {
    "url": "assets/js/51.267f0ffc.js",
    "revision": "7487677b8b9663a249a79ae850073211"
  },
  {
    "url": "assets/js/52.51c09434.js",
    "revision": "2f523a0ccde38b75b0abcfc20ec9a37e"
  },
  {
    "url": "assets/js/53.311f8cde.js",
    "revision": "fb7f06b7d0ce0ba8ed93c0a480dc3e29"
  },
  {
    "url": "assets/js/54.db521434.js",
    "revision": "ea15a0d56c559050f682c98da895e2ad"
  },
  {
    "url": "assets/js/55.c8d17d89.js",
    "revision": "929dd57542ac72d01e23aff344ab6b34"
  },
  {
    "url": "assets/js/56.20eb2e94.js",
    "revision": "f9ee95581dbbe750e84a94a2870f04e5"
  },
  {
    "url": "assets/js/6.166c5878.js",
    "revision": "1295d10a35fe017e418fad689081c20d"
  },
  {
    "url": "assets/js/7.b10aa9ac.js",
    "revision": "02301f8ffb3965b651e92eb5718d7923"
  },
  {
    "url": "assets/js/8.bc4793cf.js",
    "revision": "8415db084036391e56a6cb17b22a2111"
  },
  {
    "url": "assets/js/app.e82fe14d.js",
    "revision": "0deb165d61775b9ef51c8f53e4b28baf"
  },
  {
    "url": "assets/js/vendors~docsearch.76a29222.js",
    "revision": "9637d52e5fc6d45ad3e65cfe36c64139"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "6dc4e9a1ec7b008c63e76c064a6dc72b"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "00f4831fea0f02315f56d4873ab1af2e"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "a9267df5f6decd49b177a2152825b4b4"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "15ef84b3e14548306ecdc52ba36cc7c0"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "b9c484bd3dd3962714dc11eca0a628a8"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "c9eacef9c678d2c49d60940570caf3b3"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "5c8e25df08a3c9acb63b0bc19aa57b61"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "029a0c58c285c7f23d54b72a4d01582f"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "a0d3c207ccff185fe4c60685b550be3c"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "765468e837e4b7dd205597c06cf6755d"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "75e9dd436e69981a496bf4ab54fd7e7e"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "6dcfa7158f51824b68956961c1b6bca8"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "21911612e090dee92325ee2289f68124"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "b72064ffd743dbc92f608ecb3abe30b6"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "284482b52ef9949e6f565b8967dfdf85"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "88901354008f826c5ee8ba4d9c6e755d"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "4b3773e51689aa90f239b1e78fe2533a"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "d654548ca606864eab784980651a9f16"
  },
  {
    "url": "resources/books.html",
    "revision": "55d580292ac63cb1400b370d23ff953a"
  },
  {
    "url": "resources/community.html",
    "revision": "e1a35f29487bca5115a299daca78e5f2"
  },
  {
    "url": "resources/conferences.html",
    "revision": "ec243ae949169c00d7f011e2373caa18"
  },
  {
    "url": "resources/courses.html",
    "revision": "c44c85152f5b6dac292a9356a4f1280d"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "e468932b89e13076065a6973fd9267fc"
  },
  {
    "url": "resources/examples.html",
    "revision": "6d83794845866338ea92d6e74bda0cb9"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "7d7b88afc6dccb48812c0a381774a878"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "eb8cde41af5ed551381733507d236fb7"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "b16fca93c228cc0100a6b9f8cc853e4d"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "a47edddea73ab9dd8781b8c5e0e65dc6"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "a1e3af5f9d1b576ff076292513e809ee"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "e6c4ac07f1fb4e56e42dd619a7626777"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "a1ac72c4107394cf6d499c77d3f4eef0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

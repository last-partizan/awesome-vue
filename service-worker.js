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
    "revision": "30c21c7bec85e0a8852d7fa40f34bfff"
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
    "url": "assets/js/1.14b449f7.js",
    "revision": "d6f648fe0fc2fd9e6bbbfc4adb3c7084"
  },
  {
    "url": "assets/js/11.70b5b6cd.js",
    "revision": "642f36b61f61148e719011715c606ea4"
  },
  {
    "url": "assets/js/12.8e9b1c77.js",
    "revision": "f69847f2e33784e475d440eb6450cec5"
  },
  {
    "url": "assets/js/13.7e6a4a6b.js",
    "revision": "6299b5de2bc4af81ca406f442d79a642"
  },
  {
    "url": "assets/js/14.9a29fc03.js",
    "revision": "01d9a8b9f3c0e4f5140779a8ac9871ba"
  },
  {
    "url": "assets/js/15.236cd852.js",
    "revision": "544c93473e93d2fac39869a3605fa94a"
  },
  {
    "url": "assets/js/16.fa4dea5b.js",
    "revision": "26f177523f55589c2adb3110dfc00d39"
  },
  {
    "url": "assets/js/17.16aabb20.js",
    "revision": "6afad6ffbc6265ebf2366e746222428a"
  },
  {
    "url": "assets/js/18.895aabce.js",
    "revision": "5c23295f0474c7df8b7f902aa9b169a1"
  },
  {
    "url": "assets/js/19.b900fa32.js",
    "revision": "5a6cfb33822169de1969b1ef198aa8d3"
  },
  {
    "url": "assets/js/2.eb483680.js",
    "revision": "d5db5cdff487ae3e468f4c24ffac7cf0"
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
    "url": "assets/js/23.06af1277.js",
    "revision": "85d80644096b9abb4762d45da33ec0cf"
  },
  {
    "url": "assets/js/24.dca825b9.js",
    "revision": "27de2ade52161b82d19eb1a792e0b718"
  },
  {
    "url": "assets/js/25.f99d0882.js",
    "revision": "875435bdaccfccf20ace0ac80145cd8a"
  },
  {
    "url": "assets/js/26.1448ed0e.js",
    "revision": "f827293ecf07aa80561d473015259a3d"
  },
  {
    "url": "assets/js/27.8bda6a42.js",
    "revision": "e546fd4f3b9892856bcd824349a8bb3b"
  },
  {
    "url": "assets/js/28.4e7d3b9f.js",
    "revision": "b176c8a7be713eee9e17df577eaed033"
  },
  {
    "url": "assets/js/29.1fb5f022.js",
    "revision": "85c09a57abd54aadf1b8c1264403dff1"
  },
  {
    "url": "assets/js/3.13ff9f55.js",
    "revision": "b81758d0634b2ff1bc910bd402e89bfd"
  },
  {
    "url": "assets/js/30.5224c3cb.js",
    "revision": "730ffcec27db5fd7c32cd0d7697bdc3a"
  },
  {
    "url": "assets/js/31.333d866c.js",
    "revision": "df8a4f5231f9f242045ab9011d594add"
  },
  {
    "url": "assets/js/32.33f30082.js",
    "revision": "cdc6889a5d01b77419d837e3423d0295"
  },
  {
    "url": "assets/js/33.a7874a2f.js",
    "revision": "5cc6dd35f3bacf9b6e8ad32066b504c3"
  },
  {
    "url": "assets/js/34.1ebf0f8b.js",
    "revision": "c05fcc16d56d95dd2d947d8f8575fa60"
  },
  {
    "url": "assets/js/35.439fbb5f.js",
    "revision": "ad2e5a1e3dca407f0653938486061a79"
  },
  {
    "url": "assets/js/36.e0898320.js",
    "revision": "11698c6ffe81e8d62e67bffd34f94629"
  },
  {
    "url": "assets/js/37.bd9a1c0d.js",
    "revision": "7d9a8ab2853e028024f3ad04e24210d2"
  },
  {
    "url": "assets/js/38.a3926078.js",
    "revision": "da86de11c07eeb2cc81aff4d130d84cf"
  },
  {
    "url": "assets/js/39.61edfd8d.js",
    "revision": "0be74f7d6747a90400e603ec50d460cd"
  },
  {
    "url": "assets/js/4.8ceb76b0.js",
    "revision": "3f9490242a0d403a041af8ba36d4a5f3"
  },
  {
    "url": "assets/js/40.8d1ceabb.js",
    "revision": "b27861dc10ae68e8d221ccd97a1c4ece"
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
    "url": "assets/js/43.c4f00095.js",
    "revision": "1af5526194546c6193d5553f00f81543"
  },
  {
    "url": "assets/js/44.5d4bb700.js",
    "revision": "dfcf06a26e51bcddc2a99547ff977028"
  },
  {
    "url": "assets/js/45.50ca9c38.js",
    "revision": "8617005ccb457fc57771e8a2915b3705"
  },
  {
    "url": "assets/js/46.18a5576d.js",
    "revision": "1f0db74fe3eb4fb4dc3bef73384811a7"
  },
  {
    "url": "assets/js/47.d5261240.js",
    "revision": "47aa3361f59ff99580bc01c1a02d8a00"
  },
  {
    "url": "assets/js/48.b1a18a2c.js",
    "revision": "31f6857d003aa890b71c79d7e38fd402"
  },
  {
    "url": "assets/js/49.a1b88210.js",
    "revision": "007a8aa1092c08ff6b983a1a12870ba7"
  },
  {
    "url": "assets/js/5.2afffd05.js",
    "revision": "c405923ea9a0a75060900682faf7a8ff"
  },
  {
    "url": "assets/js/50.a8018b8b.js",
    "revision": "0afd3e83eb6de0637a1fdcdec526df00"
  },
  {
    "url": "assets/js/51.df39696c.js",
    "revision": "70ed334af8073c987a6a503c7d0248f8"
  },
  {
    "url": "assets/js/52.51c09434.js",
    "revision": "2f523a0ccde38b75b0abcfc20ec9a37e"
  },
  {
    "url": "assets/js/53.1a59a944.js",
    "revision": "44ea7c124ccee63a8c434f76bf74297a"
  },
  {
    "url": "assets/js/54.c6bfe627.js",
    "revision": "16aed4a9b9090ce595f6c78793ef66ce"
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
    "url": "assets/js/app.c2fdb087.js",
    "revision": "cae3f49b0b997775bee6f2420b8adea6"
  },
  {
    "url": "assets/js/vendors~docsearch.76a29222.js",
    "revision": "9637d52e5fc6d45ad3e65cfe36c64139"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "beb139cb44b8bacb6e7c711da937fd08"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "b4cd5f964bd5e7e8355673759c7c1306"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "05d980bf87c4773ed859da739705402d"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "07c30a2f1284edbf53e50fe394408e96"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "c2f7cf634a88fc25c9b7e42c71c390e2"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "675c8e7fc3315be3d5027b7d41f20a3d"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "b1a5efaf4f533c86c9c8c9e72d9ccbe0"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "8a0b43514f83a9422e1eeedb211f8043"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "28d114e7b572112b86eae1a46d75e944"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "2009afb93ee1a463a7e85acab5e1c9f8"
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
    "revision": "de924aa91515740ff9295b93f76930e6"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "06059d4548367ab4e7c22ae0810b36fc"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "35f0c9b8fc64c3e6c343f1e567a44ae4"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "c1fd73684a092762d888d3a76d937ecf"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "c0f324b4ad882eef26e95fb845952538"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "efac7a2be48ecc2960885827dd8a82d7"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "b723117d5ae133de959cfb22e6bfab9b"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "f839493ad82228c07c84cd73f18d77a8"
  },
  {
    "url": "resources/books.html",
    "revision": "a34b5e0348662fe92d4670287f321226"
  },
  {
    "url": "resources/community.html",
    "revision": "208604eb855eb8ce643d13eaf8af53d0"
  },
  {
    "url": "resources/conferences.html",
    "revision": "2abf81bdb68d717d90fc01db4c799bd1"
  },
  {
    "url": "resources/courses.html",
    "revision": "6283778aea5c87cd9dcd6a7c950ae7ea"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "115437094c8da823148b1efe76eb8fbc"
  },
  {
    "url": "resources/examples.html",
    "revision": "8cd0475c06760bda141933a5303e1818"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "371d1e933bc42b5af9cd164d1940e7ad"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "465cd1c0e8fbb6a5d526e5c404986c4a"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "8f6e269fd85a985ca7bc5b309684c442"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "fe46f2dffcbb15496d58f14fbd529c27"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "368e21893c8934c164edce3e2996176a"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "d3855148c4742e69ed55453fe2f027ea"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "c2ddc245d547c5ee4f9cbb0e991eec13"
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

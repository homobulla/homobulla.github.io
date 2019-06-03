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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4e3d9a11dd2efdb9b07cd13a3338a6da"
  },
  {
    "url": "accumulate/CSS/1.html",
    "revision": "0325e0eea811239bcf484d81e0921976"
  },
  {
    "url": "accumulate/CSS/2.html",
    "revision": "b98807430e21e6db03fb008f7cd7ec62"
  },
  {
    "url": "accumulate/CSS/3.html",
    "revision": "828a3adc9c7b96c8a5addbe736f0ca45"
  },
  {
    "url": "accumulate/CSS/4.html",
    "revision": "fc3a0be7ece2bf4bdbb6f4458d4478d0"
  },
  {
    "url": "accumulate/CSS/5.html",
    "revision": "b7cb815d00121a165738884a3d54334e"
  },
  {
    "url": "accumulate/CSS/6.html",
    "revision": "be3e748cd9f69a2613cef42255e10154"
  },
  {
    "url": "accumulate/HTML/1.html",
    "revision": "f5eaaa78b2543f1cade99a2bee21f219"
  },
  {
    "url": "accumulate/HTML/2.html",
    "revision": "08afc5fe637afde5ef91d07f295c9648"
  },
  {
    "url": "accumulate/HTML/3.html",
    "revision": "d550e3f8bff433a0a346b012ad3fe85c"
  },
  {
    "url": "accumulate/HTML/4.html",
    "revision": "9c6076aac35f45d7c687542a2f97358d"
  },
  {
    "url": "accumulate/HTML/5.html",
    "revision": "e680e52367a9bd44aef19ac72427c64e"
  },
  {
    "url": "accumulate/HTML/6.html",
    "revision": "9aca2c1c9f5a6021ba4068ee23581be9"
  },
  {
    "url": "accumulate/HTML/7.html",
    "revision": "7a3f5f144a6886b12a2703dd676216d5"
  },
  {
    "url": "accumulate/index.html",
    "revision": "5e7b4644a46044691967b12706797c0c"
  },
  {
    "url": "accumulate/JS/1.html",
    "revision": "44f6c63fb204fd617646415868451257"
  },
  {
    "url": "accumulate/JS/2.html",
    "revision": "770e75ac426409aa1a159f1b9502cf04"
  },
  {
    "url": "accumulate/JS/3.html",
    "revision": "a7e32a89ac12cacb52b26b9063746150"
  },
  {
    "url": "accumulate/JS/4.html",
    "revision": "901406e8038a63afa5676123a8e2adad"
  },
  {
    "url": "accumulate/JS/5.html",
    "revision": "16685bea2d29dea51202fc50c6c72589"
  },
  {
    "url": "accumulate/JS/6.html",
    "revision": "ef92f4d774800e60a9a65fef5ac08195"
  },
  {
    "url": "accumulate/JS/7.html",
    "revision": "ab0bfd9e89b2c11141edc93b86de3c40"
  },
  {
    "url": "algorithm/index.html",
    "revision": "d995f9440d0dd745cc237d2774280911"
  },
  {
    "url": "algorithm/数据结构/index.html",
    "revision": "27b57bebea214bfd0eb561e4fc70ee5a"
  },
  {
    "url": "algorithm/算法基础/index.html",
    "revision": "57700a6ebad1ed00e9f9619dc211cbc7"
  },
  {
    "url": "algorithm/算法思想/index.html",
    "revision": "eee7d5445b88c86671d0660b45319148"
  },
  {
    "url": "assets/css/0.styles.3058253b.css",
    "revision": "27e25cbd915e0c2dd38c277915fae091"
  },
  {
    "url": "assets/img/getUserMedia.e77f986d.png",
    "revision": "e77f986ddf423a16163d31f1d80038a7"
  },
  {
    "url": "assets/img/locaation.ae03987e.png",
    "revision": "ae03987ef880cbfee90c0d4c70ee45d7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vwvh.d389ce43.png",
    "revision": "d389ce43b5638f77e6287f26df8bb35d"
  },
  {
    "url": "assets/js/10.4a33db2d.js",
    "revision": "4863facc37f7765153ff84f9f36fad54"
  },
  {
    "url": "assets/js/11.ff0ae702.js",
    "revision": "976052b92110d988eef52d41dad7c033"
  },
  {
    "url": "assets/js/12.f0baba6b.js",
    "revision": "d9e4924a22437fe962fcefc4fedceda6"
  },
  {
    "url": "assets/js/13.7ef5be3d.js",
    "revision": "2da3170238553f91088a0fb5c37ae18d"
  },
  {
    "url": "assets/js/14.adbfb2af.js",
    "revision": "cbd06ea3f6cc9ebafe4def38c7eb9cee"
  },
  {
    "url": "assets/js/15.71d05deb.js",
    "revision": "d2a0f827edf00815c9bbbc73492fe6e3"
  },
  {
    "url": "assets/js/16.3213fa44.js",
    "revision": "36acc5d0648ba2d085b309cb84c9b09f"
  },
  {
    "url": "assets/js/17.29dff89f.js",
    "revision": "1ef4617ec705f5a58199cdb713539075"
  },
  {
    "url": "assets/js/18.a9d0d7aa.js",
    "revision": "cfb723d7de21eca43813b0851601d1f4"
  },
  {
    "url": "assets/js/19.639695fc.js",
    "revision": "85d2136166901134e51e0e9cf4530f0a"
  },
  {
    "url": "assets/js/2.4b88beb2.js",
    "revision": "a691a41376f6df9122924210f5e52997"
  },
  {
    "url": "assets/js/20.94077e60.js",
    "revision": "2ce0ce6a907bd077b7b218973599c3d9"
  },
  {
    "url": "assets/js/21.a8668e33.js",
    "revision": "b7aa2f52733020980b31d1a4a6a6b0d6"
  },
  {
    "url": "assets/js/22.c80adca4.js",
    "revision": "1ceb58f03e55d98ad0155dd693b4c09b"
  },
  {
    "url": "assets/js/23.b48c14e6.js",
    "revision": "f4021dccff1f16b76ebade411987f14e"
  },
  {
    "url": "assets/js/24.cf42ef32.js",
    "revision": "ddcaa84843f2b35608a7f176f3846a27"
  },
  {
    "url": "assets/js/25.1482a98f.js",
    "revision": "f1b9f04229a4778ce0f1d839d6377f81"
  },
  {
    "url": "assets/js/26.b961822e.js",
    "revision": "960160b778cdf7edcd9256efd2adc102"
  },
  {
    "url": "assets/js/27.a1eafff5.js",
    "revision": "a40d4d6bfe95bd387788a420cbff86f9"
  },
  {
    "url": "assets/js/28.caf24b4c.js",
    "revision": "75373b92ff8eda35867ca515d4a9267c"
  },
  {
    "url": "assets/js/29.c82b966f.js",
    "revision": "942c0643afcb857a18aa877ba076168a"
  },
  {
    "url": "assets/js/3.59d1e2c2.js",
    "revision": "4570cfa22b828c1ddcc1d616c4424b5e"
  },
  {
    "url": "assets/js/4.5afb4950.js",
    "revision": "887fb60c50984aaba5e194136f4f1776"
  },
  {
    "url": "assets/js/5.0d7beb0f.js",
    "revision": "bc5c31dfd54b7357f712a79198db2e28"
  },
  {
    "url": "assets/js/6.a481334c.js",
    "revision": "dce846a19a77e00e71adc8fb3fc605d2"
  },
  {
    "url": "assets/js/7.dfb6548d.js",
    "revision": "c1c1dbd6297499b8b2eb7ef09182bd12"
  },
  {
    "url": "assets/js/8.f7e725e9.js",
    "revision": "e4022aae29dc27bbcd6338c61f477f7c"
  },
  {
    "url": "assets/js/9.24c1cbee.js",
    "revision": "3f9846f1e2eac8bac3e29902b465bf6d"
  },
  {
    "url": "assets/js/app.964fe497.js",
    "revision": "f8e101b617ee4f4e3757498150ead605"
  },
  {
    "url": "index.html",
    "revision": "45195023dee69733f5c28ea67a4208ee"
  },
  {
    "url": "logo.png",
    "revision": "3839faa0777e449e18db36379b227c4f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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

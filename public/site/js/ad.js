jshnqdtu = document.getElementById("img1");jshnqdtu.style.backgroundImage = "url(img/something)";rttguphk = document.getElementById("img2");rttguphk.style.backgroundImage = "url(img/something)";tdshyjmp = document.getElementById("img3");tdshyjmp.style.backgroundImage = "url(img/some123thing)";laqwfjak = document.getElementById("img4");laqwfjak.style.backgroundImage = "url(img/something)";function mediaQuery(y, z) { if (y.matches) {jshnqdtu.style.backgroundImage = "url(img/something)";rttguphk.style.backgroundImage = "url(img/something)";tdshyjmp.style.backgroundImage = "url(img/something)";laqwfjak.style.backgroundImage = "url(img/something)";} else if (z.matches) {jshnqdtu.style.backgroundImage = "url(img/something)";rttguphk.style.backgroundImage = "url(img/something)";tdshyjmp.style.backgroundImage = "url(img/some123thing)";laqwfjak.style.backgroundImage = "url(img/something)";} else {jshnqdtu.style.backgroundImage = "url(img/test.jpg)";rttguphk.style.backgroundImage = "url(img/cart.svg)";tdshyjmp.style.backgroundImage = "url(img/test.jpg)";laqwfjak.style.backgroundImage = "url(img/cart.svg)";}}var y = window.matchMedia("(max-width: 1024px)");var z = window.matchMedia("(max-width: 480px)");mediaQuery(y, z); (function() {var throttle = function(type, name, obj) {obj = obj || window;var running = false;var func = function() {if (running) { return; }running = true;requestAnimationFrame(function() {obj.dispatchEvent(new CustomEvent(name));running = false; });}; obj.addEventListener(type, func); }; throttle("resize", "optimizedResize"); })(); window.addEventListener("optimizedResize", function() { mediaQuery(y,z); });
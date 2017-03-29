/** 
 * Copyright (c) 2017 Callan Peter Milne
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above 
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

app.run(splashScreenIntro);

function splashScreenIntro () {

  let loadingOverlayEl = document.createElement('div');
  
  loadingOverlayEl.setAttribute("id", 'loadingOverlay');
  loadingOverlayEl.setAttribute("style", 'opacity:1;');
  loadingOverlayEl.innerHTML = 
`<div class="status-indicator-wrapper">
  <div class="lhs-valign-helper"></div>
  <div class="status-indicator" style="opacity:0;"></div>
  <div class="rhs-valign-helper"></div>
</div>`;
  
  /* move logo in to x.innerHTML */
  let logoEl = document.getElementById('ewaLoaderLogo');
  let statusIndicatorWrapperEl = loadingOverlayEl.children[0];
  let statusIndicatorEl = statusIndicatorWrapperEl.children[1];
  let progressIndicatorEl = statusIndicatorEl.children[0];
  let logoImgEl = document.createElement('img');

  let statusIndicatorTransitionSteps = [
    () => { showStatusIndicator() },
    () => { setTimeout(() => { hideStatusIndicator() }, 690) },
    () => { hideLogoEl(); hideSplashScreen() },
  ];

  statusIndicatorEl.addEventListener('transitionend', () => {
    stepStatusIndicatorTransition();
  });
 
  logoImgEl.src = 'images/logov7c-dist.png';
  logoImgEl.onload = function () {
    stepStatusIndicatorTransition();
  };
  statusIndicatorEl.appendChild(logoImgEl);

  document.body.appendChild(loadingOverlayEl);

  function stepStatusIndicatorTransition () {
    let fn = statusIndicatorTransitionSteps.shift();
    fn();
  }

  function moveIndicator (toPos) {
    progressIndicatorEl.setAttribute('style', 'transform: translateY(-' + String(toPos) + 'px);');
  }

  function hideSplashScreen () {

    onNextTick(() => {

      loadingOverlayEl.addEventListener('transitionend', () => {
        document.body.removeChild(loadingOverlayEl);
      });

      onNextTick(() => {
        loadingOverlayEl.setAttribute('style', 'opacity: 0;');
      });

    });

  }

  function onNextTick (fn) {
    setTimeout(fn, 0);
  }

  function showStatusIndicator () {
    statusIndicatorEl.setAttribute('style', 'opacity:1;');
  }

  function hideStatusIndicator () {
    statusIndicatorEl.setAttribute('style', 'opacity:0;');
  }

  function hideLogoEl () {
    logoEl.setAttribute('style', 'display:none;');
  }

};

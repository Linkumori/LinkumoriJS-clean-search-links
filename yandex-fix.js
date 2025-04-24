/***********************************************************************************************
 * Linkumori (URLs Purifier) Extension - yandex-fix.js
 * ------------------------------------------------------------
   Original work Copyright (c) 2017 kodango
   Repository: https://github.com/kodango/Remove-Google-Redirection
   Licensed under MIT License
  Modified work Copyright (c) 2024 Subham Mahesh
 * Licensed under BSD 2-Clause License
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 ***********************************************************************************************/
  (function () {
    "use strict";
  
    // Safely override the _borschik property on the window object
    function overrideBorschik() {
      try {
        const descriptor = Object.getOwnPropertyDescriptor(window, '_borschik');
        if (!descriptor || descriptor.configurable) {
          Object.defineProperty(window, '_borschik', {
            value: function () {
              return false;
            },
            writable: false,
            configurable: false
          });
        } else {
          console.warn('window._borschik is not configurable; skipping override.');
        }
      } catch (e) {
        console.error('Failed to override _borschik property:', e);
      }
    }
  
    // Immediately override _borschik
    overrideBorschik();
  
    // Attach a mouseover listener to clean up certain attributes on anchor elements
    document.addEventListener(
      'mouseover',
      function (event) {
        const anchor = event.target.closest('a');
        if (anchor) {
          try {
            anchor.removeAttribute('data-counter');
            delete anchor.dataset.cthref;
          } catch (e) {
            console.error(e);
          }
        }
      },
      true
    );
  })();
  
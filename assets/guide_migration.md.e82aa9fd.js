import{_ as e,c as a,o,a as r}from"./app.75be179e.js";const f=JSON.parse('{"title":"v3\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uAE30","description":"","frontmatter":{"title":"v3\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uAE30"},"headers":[{"level":2,"title":"Rollup 3","slug":"rollup-3"},{"level":2,"title":"\uBAA8\uB358 \uBE0C\uB77C\uC6B0\uC800 \uD45C\uC900 \uBCC0\uACBD","slug":"modern-browser-baseline-change"},{"level":2,"title":"\uC77C\uBC18\uC801\uC778 \uBCC0\uACBD\uC0AC\uD56D","slug":"general-changes"},{"level":3,"title":"\uC778\uCF54\uB529","slug":"encoding"},{"level":3,"title":"\uBB38\uC790\uC5F4\uB85C CSS \uAC00\uC838\uC624\uAE30","slug":"importing-css-as-a-string"},{"level":3,"title":"\uAE30\uBCF8\uC801\uC73C\uB85C Production \uBE4C\uB4DC\uB97C \uC218\uD589","slug":"production-builds-by-default"},{"level":3,"title":"\uD658\uACBD \uBCC0\uC218","slug":"environment-variables"},{"level":2,"title":"Advanced","slug":"advanced"},{"level":2,"title":"v2\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uAE30","slug":"migration-from-v2"}],"relativePath":"guide/migration.md"}'),t={name:"guide/migration.md"},n=r(`<h1 id="migration-from-v3" tabindex="-1">v3\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uAE30 <a class="header-anchor" href="#migration-from-v3" aria-hidden="true">#</a></h1><h2 id="rollup-3" tabindex="-1">Rollup 3 <a class="header-anchor" href="#rollup-3" aria-hidden="true">#</a></h2><p>Vite\uB294 \uC774\uC81C <a href="https://github.com/vitejs/vite/issues/9870" target="_blank" rel="noopener noreferrer">Rollup 3</a>\uC744 \uC0AC\uC6A9\uD558\uBA70, Vite\uC758 \uB0B4\uBD80 \uC5D0\uC14B \uCC98\uB9AC\uB97C \uB2E8\uC21C\uD654\uD558\uACE0 \uB9CE\uC740 \uAC1C\uC120\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uAC83\uC740 <a href="https://github.com/rollup/rollup/releases" target="_blank" rel="noopener noreferrer">Rollup 3 \uB9B4\uB9AC\uC2A4 \uB178\uD2B8</a></p><p>Rollup 3\uB294 \uB9CE\uC740 \uBD80\uBD84\uC5D0\uC11C Rollup 2\uC640 \uD638\uD658\uB429\uB2C8\uB2E4. \uB9CC\uC57D \uCEE4\uC2A4\uD140 <a href="./../config/build-options.html#build-rollupoptions"><code>rollupOptions</code></a>\uB97C \uC0AC\uC6A9\uD558\uB294 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uB41C\uB2E4\uBA74, <a href="https://rollupjs.org/guide/en/#migration" target="_blank" rel="noopener noreferrer">Rollup \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uAC00\uC774\uB4DC</a>\uB97C \uCC38\uACE0\uD558\uC5EC \uC124\uC815\uC744 \uC5C5\uADF8\uB808\uC774\uB4DC\uD558\uC138\uC694.</p><h2 id="modern-browser-baseline-change" tabindex="-1">\uBAA8\uB358 \uBE0C\uB77C\uC6B0\uC800 \uD45C\uC900 \uBCC0\uACBD <a class="header-anchor" href="#modern-browser-baseline-change" aria-hidden="true">#</a></h2><p>\uBAA8\uB358 \uBE0C\uB77C\uC6B0\uC800 \uBE4C\uB4DC\uB294 \uC774\uC81C ES2020 \uD638\uD658\uC131\uC744 \uB113\uD788\uAE30 \uC704\uD574 \uAE30\uBCF8\uC801\uC73C\uB85C <code>safari14</code>\uB97C \uB300\uC0C1\uC73C\uB85C \uD569\uB2C8\uB2E4. \uC774\uB294 \uBAA8\uB358 \uBE4C\uB4DC\uAC00 \uC774\uC81C <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt" target="_blank" rel="noopener noreferrer"><code>BigInt</code></a>\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uACE0 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing" target="_blank" rel="noopener noreferrer">nullish coalescing operator</a>\uAC00 \uB354 \uC774\uC0C1 \uD2B8\uB79C\uC2A4\uD30C\uC77C\uB418\uC9C0 \uC54A\uB294\uB2E4\uB294 \uAC83\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4. \uB9CC\uC57D \uC774\uC804 \uBE0C\uB77C\uC6B0\uC800\uB97C \uC9C0\uC6D0\uD574\uC57C \uD55C\uB2E4\uBA74, <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener noreferrer"><code>@vitejs/plugin-legacy</code></a>\uB97C \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694.</p><h2 id="general-changes" tabindex="-1">\uC77C\uBC18\uC801\uC778 \uBCC0\uACBD\uC0AC\uD56D <a class="header-anchor" href="#general-changes" aria-hidden="true">#</a></h2><h3 id="encoding" tabindex="-1">\uC778\uCF54\uB529 <a class="header-anchor" href="#encoding" aria-hidden="true">#</a></h3><p>\uBE4C\uB4DC \uC2DC \uC774\uC81C \uAE30\uBCF8\uC801\uC73C\uB85C utf8\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uAC83\uC740 <a href="https://github.com/vitejs/vite/issues/10753" target="_blank" rel="noopener noreferrer">#10753</a>\uB97C \uCC38\uACE0\uD574\uC8FC\uC138\uC694.</p><h3 id="importing-css-as-a-string" tabindex="-1">\uBB38\uC790\uC5F4\uB85C CSS \uAC00\uC838\uC624\uAE30 <a class="header-anchor" href="#importing-css-as-a-string" aria-hidden="true">#</a></h3><p>Vite 3\uC5D0\uC11C, <code>.css</code> \uD30C\uC77C\uC758 <code>default export</code>\uB97C \uAC00\uC838\uC624\uB294 \uAC83\uC740 CSS\uB97C \uB450 \uBC88 \uB85C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> cssString </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./global.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p>\uC774 \uC911\uBCF5 \uB85C\uB529\uC740 \uAC00\uC838\uC628 <code>.css</code>\uC5D0 \uB300\uD55C \uC2A4\uD0C0\uC77C\uC774 \uC0DD\uC131\uB428\uACFC \uB3D9\uC2DC\uC5D0 CSS \uBB38\uC790\uC5F4\uC774 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uC5D0\uC11C\uB3C4 \uC0AC\uC6A9\uB420 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uC608\uB97C \uB4E4\uC5B4, \uD504\uB808\uC784\uC6CC\uD06C \uB7F0\uD0C0\uC784\uC5D0 \uC758\uD574 \uC8FC\uC785\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4). Vite 4\uBD80\uD130 <code>.css</code>\uC758 <code>default export</code>\uB294 <a href="https://github.com/vitejs/vite/issues/11094" target="_blank" rel="noopener noreferrer">\uC0AC\uC6A9\uC774 \uC911\uB2E8\uB418\uC5C8\uC73C\uBA70</a>, \uC774 \uB300\uC2E0 <code>?inline</code> \uCFFC\uB9AC \uC811\uBBF8\uC0AC \uC218\uC815\uC790\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0\uC5D0\uB294 \uAC00\uC838\uC628 <code>.css</code>\uC5D0 \uB300\uD574 \uC2A4\uD0C0\uC77C\uC744 \uC0DD\uC131\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> stuff </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./global.css?inline</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="production-builds-by-default" tabindex="-1">\uAE30\uBCF8\uC801\uC73C\uB85C Production \uBE4C\uB4DC\uB97C \uC218\uD589 <a class="header-anchor" href="#production-builds-by-default" aria-hidden="true">#</a></h3><p><code>vite build</code>\uB294 \uC774\uC81C \uC804\uB2EC\uB41C <code>--mode</code>\uC5D0 \uAD00\uACC4\uC5C6\uC774 \uD56D\uC0C1 \uD504\uB85C\uB355\uC158 \uBE4C\uB4DC\uB97C \uC218\uD589\uD569\uB2C8\uB2E4. \uC774\uC804\uC5D0\uB294 <code>mode</code>\uB97C <code>production</code> \uC774\uC678\uC758 \uB2E4\uB978 \uAC12\uC73C\uB85C \uBCC0\uACBD\uD558\uBA74 \uAC1C\uBC1C \uBAA8\uB4DC\uB85C \uBE4C\uB4DC\uAC00 \uC218\uD589\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uC81C \uAC1C\uBC1C \uBAA8\uB4DC \uBE4C\uB4DC\uB97C \uC218\uD589\uD558\uB824\uBA74 <code>.env.{mode}</code> \uD30C\uC77C\uC5D0\uC11C <code>NODE_ENV=development</code>\uB97C \uC124\uC815\uD558\uBA74 \uB429\uB2C8\uB2E4.</p><p>\uC774 \uBCC0\uACBD \uC0AC\uD56D\uC758 \uC77C\uBD80\uB85C, <code>vite dev</code>\uC640 <code>vite build</code>\uB294 \uC774\uBBF8 \uC815\uC758\uB41C \uACBD\uC6B0 <code>process.<wbr>env.</code><wbr><code>NODE_ENV</code>\uB97C \uB354 \uC774\uC0C1 \uB36E\uC5B4\uC4F0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C <code>process.<wbr>env.</code><wbr><code>NODE_ENV = &#39;development&#39;</code>\uB97C \uBE4C\uB4DC\uD558\uAE30 \uC804\uC5D0 \uC124\uC815\uD588\uB2E4\uBA74 \uAC1C\uBC1C \uBAA8\uB4DC\uB85C \uBE4C\uB4DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD558\uBA74 \uC5EC\uB7EC \uBE4C\uB4DC \uB610\uB294 \uBCD1\uB82C\uB85C \uC2E4\uD589\uB418\uB294 \uAC1C\uBC1C \uC11C\uBC84\uB97C \uC2E4\uD589\uD560 \uB54C \uB354 \uB9CE\uC740 \uC81C\uC5B4\uB97C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uB354 \uC790\uC138\uD55C \uC815\uBCF4\uB294 <a href="./env-and-mode.html#modes">\uBAA8\uB4DC</a> \uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC138\uC694.</p><h3 id="environment-variables" tabindex="-1">\uD658\uACBD \uBCC0\uC218 <a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a></h3><p>Vite\uB294 \uC774\uC81C <code>dotenv</code> 16\uACFC <code>dotenv-expand</code> 9\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4(\uC774\uC804\uC5D0\uB294 <code>dotenv</code> 14\uC640 <code>dotenv-expand</code> 5\uB97C \uC0AC\uC6A9\uD588\uC2B5\uB2C8\uB2E4). <code>#</code> \uB610\uB294 <code>\`</code>\uB97C \uD3EC\uD568\uD558\uB294 \uAC12\uC774 \uC788\uB2E4\uBA74, \uC774 \uAC12\uC744 \uB530\uC634\uD45C\uB85C \uAC10\uC2F8\uC8FC\uC138\uC694.</p><div class="language-diff"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;">VITE_APP=ab#cd\`ef</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">VITE_APP=&quot;ab#cd\`ef&quot;</span></span>
<span class="line"></span></code></pre></div><p>\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 <a href="https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer"><code>dotenv</code></a>\uACFC <a href="https://github.com/motdotla/dotenv-expand/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer"><code>dotenv-expand</code> CHANGELOG</a>\uB97C \uCC38\uACE0\uD574\uC8FC\uC138\uC694.</p><h2 id="advanced" tabindex="-1">Advanced <a class="header-anchor" href="#advanced" aria-hidden="true">#</a></h2><p>\uD50C\uB7EC\uADF8\uC778/\uD234 \uAC1C\uBC1C\uC790\uC5D0\uAC8C\uB9CC \uC601\uD5A5\uC744 \uBBF8\uCE58\uB294 \uBCC0\uACBD\uC0AC\uD56D\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p><ul><li><a href="https://github.com/vitejs/vite/issues/11036" target="_blank" rel="noopener noreferrer">[#11036] feat(client)!: remove never implemented hot.decline</a><ul><li><code>hot.invalidate</code>\uB97C \uB300\uC2E0 \uC0AC\uC6A9</li></ul></li><li><a href="https://github.com/vitejs/vite/issues/9669" target="_blank" rel="noopener noreferrer">[#9669] feat: align object interface for <code>transformIndexHtml</code> hook</a><ul><li><code>order</code>\uB97C <code>enforce</code> \uB300\uC2E0 \uC0AC\uC6A9</li></ul></li></ul><p>\uB2E4\uC74C\uC740 \uB9CE\uC740 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC601\uD5A5\uC744 \uBBF8\uCE58\uC9C0 \uC54A\uB294 \uBCC0\uACBD\uC0AC\uD56D\uC785\uB2C8\uB2E4.</p><ul><li><a href="https://github.com/vitejs/vite/pull/11101" target="_blank" rel="noopener noreferrer">[#11101] feat(ssr)!: remove dedupe and mode support for CJS</a><ul><li>CJS\uC758 SSR \uC9C0\uC6D0\uC740 \uB2E4\uC74C Vite \uBA54\uC774\uC800 \uC5C5\uB370\uC774\uD2B8\uC5D0\uC11C \uC81C\uAC70\uB420 \uC218 \uC788\uC73C\uBBC0\uB85C, SSR\uC744 \uC704\uD574 \uAE30\uBCF8\uC801\uC73C\uB85C ESM\uC744 \uC0AC\uC6A9\uD558\uB3C4\uB85D \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD574\uC57C \uD569\uB2C8\uB2E4.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/10475" target="_blank" rel="noopener noreferrer">[#10475] feat: handle static assets in case-sensitive manner</a><ul><li>\uD504\uB85C\uC81D\uD2B8\uB294 \uD30C\uC77C \uC774\uB984\uC758 \uB300\uC18C\uBB38\uC790\uB97C \uBB34\uC2DC\uD558\uB294 OS\uC5D0 \uC758\uC874\uD558\uC9C0 \uC54A\uC544\uC57C \uD569\uB2C8\uB2E4.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/10996" target="_blank" rel="noopener noreferrer">[#10996] fix!: make <code>NODE_ENV</code> more predictable</a><ul><li>\uC774 \uBCC0\uACBD\uC0AC\uD56D\uC5D0 \uB300\uD55C \uC124\uBA85\uC740 PR\uC744 \uCC38\uACE0\uD558\uC138\uC694.</li></ul></li><li><a href="https://github.com/vitejs/vite/pull/10903" target="_blank" rel="noopener noreferrer">[#10903] refactor(types)!: remove facade type files</a></li></ul><h2 id="migration-from-v2" tabindex="-1">v2\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uAE30 <a class="header-anchor" href="#migration-from-v2" aria-hidden="true">#</a></h2><p>-&gt; <a href="./migration-from-v2.html">v2\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158\uD558\uAE30 \uAC00\uC774\uB4DC</a>\uB97C \uBA3C\uC800 \uD655\uC778\uD558\uC5EC \uC571\uC744 Vite v3\uB85C \uD3EC\uD305\uD558\uAE30 \uC704\uD574 \uD544\uC694\uD55C \uBCC0\uACBD\uC0AC\uD56D\uC744 \uD655\uC778\uD55C \uB2E4\uC74C \uC774 \uD398\uC774\uC9C0\uC758 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC9C4\uD589\uD558\uC138\uC694.</p>`,29),l=[n];function s(i,d,c,p,h,u){return o(),a("div",null,l)}var v=e(t,[["render",s]]);export{f as __pageData,v as default};

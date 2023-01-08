import{_ as e,c as r,o as t,a}from"./app.75be179e.js";const m=JSON.parse('{"title":"\uB2E4\uB978 \uBE4C\uB4DC \uB3C4\uAD6C\uC640\uC758 \uCC28\uC774\uC810 (Vite v2)","description":"","frontmatter":{"title":"\uB2E4\uB978 \uBE4C\uB4DC \uB3C4\uAD6C\uC640\uC758 \uCC28\uC774\uC810 (Vite v2)"},"headers":[{"level":2,"title":"Snowpack","slug":"snowpack"},{"level":2,"title":"WMR","slug":"wmr"},{"level":2,"title":"@web/dev-server","slug":"web-dev-server"}],"relativePath":"guide/comparisons-v2.md"}'),o={name:"guide/comparisons-v2.md"},n=a('<h1 id="comparisons-with-other-no-bundler-solutions" tabindex="-1">\uB2E4\uB978 \uBE4C\uB4DC \uB3C4\uAD6C\uC640\uC758 \uCC28\uC774\uC810 (Vite v2) <a class="header-anchor" href="#comparisons-with-other-no-bundler-solutions" aria-hidden="true">#</a></h1><h2 id="snowpack" tabindex="-1">Snowpack <a class="header-anchor" href="#snowpack" aria-hidden="true">#</a></h2><p><a href="https://www.snowpack.dev/" target="_blank" rel="noopener noreferrer">Snowpack</a>\uC740 Vite\uC640 \uBC94\uC704\uAC00 \uB9E4\uC6B0 \uC720\uC0AC\uD55C \uBC88\uB4E4\uC5C6\uB294 \uAE30\uBCF8 ESM \uAC1C\uBC1C \uC11C\uBC84\uC785\uB2C8\uB2E4. \uB2E4\uB978 \uAD6C\uD604 \uC138\uBD80 \uC0AC\uD56D \uC678\uC5D0\uB3C4 \uB450 \uD504\uB85C\uC81D\uD2B8\uB294 \uAE30\uC874 \uB3C4\uAD6C\uC5D0 \uBE44\uD574 \uAE30\uC220\uC801 \uC774\uC810 \uCE21\uBA74\uC5D0\uC11C \uB9CE\uC740 \uBD80\uBD84\uC744 \uACF5\uC720\uD569\uB2C8\uB2E4. \uB610\uD55C Vite\uC758 \uB514\uD39C\uB358\uC2DC \uC0AC\uC804 \uBC88\uB4E4\uB9C1\uC740 Snowpack v1 (\uD604\uC7AC <a href="https://github.com/snowpackjs/snowpack/tree/main/esinstall" target="_blank" rel="noopener noreferrer"><code>esinstall</code></a>)\uC5D0\uC11C \uC601\uAC10\uC744 \uBC1B\uC558\uC2B5\uB2C8\uB2E4. \uB450 \uD504\uB85C\uC81D\uD2B8\uC758 \uC8FC\uC694 \uCC28\uC774\uC810\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.</p><p><strong>\uD504\uB85C\uB355\uC158 \uBE4C\uB4DC</strong></p><p>Snowpack\uC758 \uAE30\uBCF8 \uBE4C\uB4DC \uCD9C\uB825\uC740 \uBC88\uB4E4\uB85C \uC81C\uACF5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uAC01 \uD30C\uC77C\uC744 \uBCC4\uB3C4\uC758 \uBE4C\uB4DC \uB41C \uBAA8\uB4C8\uB85C \uBCC0\uD658\uD55C \uB2E4\uC74C\uC5D0 \uC2E4\uC81C \uBC88\uB4E4\uB9C1\uC744 \uC218\uD589\uD558\uB294 \uB2E4\uB978 &quot;\uCD5C\uC801\uD654 \uD504\uB85C\uADF8\uB7A8&quot;\uC5D0 \uACF5\uAE09\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBC29\uC2DD\uC758 \uC7A5\uC810\uC740 \uD2B9\uC815 \uC694\uAD6C \uC0AC\uD56D\uC5D0 \uB9DE\uAC8C \uB2E4\uC591\uD55C \uCD5C\uC885 \uBC88\uB4E4\uB7EC(\uC608 : webpack, Rollup \uB610\uB294 esbuild) \uC911\uC5D0\uC11C \uC120\uD0DD\uD560 \uC218 \uC788\uACE0, \uB2E8\uC810\uC740 \uADF8\uAC83\uC774 \uB2E4\uC18C \uB2E8\uD3B8\uD654\uB41C \uACBD\uD5D8\uC774\uB77C\uB294 \uAC83\uC785\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uBA74, esbuild \uCD5C\uC801\uD654 \uD504\uB85C\uADF8\uB7A8\uC740 \uC5EC\uC804\uD788 \uBD88\uC548\uC815\uD569\uB2C8\uB2E4. Rollup \uCD5C\uC801\uD654 \uD504\uB85C\uADF8\uB7A8\uC740 \uACF5\uC2DD\uC801\uC73C\uB85C \uC720\uC9C0 \uAD00\uB9AC\uB418\uC9C0 \uC54A\uC73C\uBA70, \uCD5C\uC801\uD654 \uD504\uB85C\uADF8\uB7A8\uB9C8\uB2E4 \uCD9C\uB825 \uBC0F \uAD6C\uC131\uC774 \uB2E4\uB985\uB2C8\uB2E4.</p><p>Vite\uB294 \uBCF4\uB2E4 \uAC04\uC18C\uD654\uB41C \uACBD\uD5D8\uC744 \uC81C\uACF5\uD558\uAE30 \uC704\uD574 \uD558\uB098\uC758 \uB2E8\uC77C \uBC88\uB4E4\uB7EC(Rollup)\uC640 \uD568\uAED8 \uB354 \uAE4A\uAC8C \uD1B5\uD569\uD558\uB294 \uAC83\uC744 \uC120\uD0DD\uD569\uB2C8\uB2E4. \uB610\uD55C Vite\uB294 \uAC1C\uBC1C \uBC0F \uBE4C\uB4DC \uBAA8\uB450\uC5D0\uC11C \uC791\uB3D9\uD558\uB294 <a href="./api-plugin.html">\uBC94\uC6A9 \uD50C\uB7EC\uADF8\uC778 API</a>\uB97C \uC9C0\uC6D0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uD55C\uCE35 \uB354 \uD1B5\uD569\uB41C \uBE4C\uB4DC \uD504\uB85C\uC138\uC2A4\uB85C \uC778\uD574 Vite\uB294 \uD604\uC7AC Snowpack \uBE4C\uB4DC \uCD5C\uC801\uD654 \uD504\uB85C\uADF8\uB7A8\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB294 \uB113\uC740 \uBC94\uC704\uC758 \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.</p><ul><li><a href="./build.html#multi-page-app">Multi-Page App</a></li><li><a href="./build.html#library-mode">\uB77C\uC774\uBE0C\uB7EC\uB9AC \uBAA8\uB4DC</a></li><li><a href="./features.html#css-code-splitting">\uC790\uB3D9 CSS \uCF54\uB4DC \uBD84\uD560</a></li><li><a href="./features.html#async-chunk-loading-optimization">\uCD5C\uC801\uD654 \uB41C \uBE44\uB3D9\uAE30 \uCCAD\uD06C \uB85C\uB529</a></li><li><a href="./features.html#dynamic-import-polyfill">\uC790\uB3D9\uC73C\uB85C polyfill \uB3D9\uC801\uC73C\uB85C \uAC00\uC838\uC624\uAE30</a></li><li>\uB4C0\uC5BC \uBAA8\uB358 / \uB808\uAC70\uC2DC \uBC88\uB4E4\uC744 \uC0DD\uC131\uD558\uACE0 \uBE0C\uB77C\uC6B0\uC800 \uC9C0\uC6D0\uC744 \uAE30\uBC18\uC73C\uB85C \uC62C\uBC14\uB978 \uBC88\uB4E4\uC744 \uC790\uB3D9\uC73C\uB85C \uC81C\uACF5\uD558\uB294 \uACF5\uC2DD <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener noreferrer">\uB808\uAC70\uC2DC \uBAA8\uB4DC \uD50C\uB7EC\uADF8\uC778</a>.</li></ul><p><strong>\uB354 \uBE60\uB978 \uB514\uD39C\uB358\uC2DC \uC0AC\uC804 \uBC88\uB4E4\uB9C1</strong></p><p>Vite\uB294 \uB514\uD39C\uB358\uC2DC \uC0AC\uC804 \uBC88\uB4E4\uB9C1\uC744 \uC704\uD574 Rollup \uB300\uC2E0 <a href="https://esbuild.github.io/" target="_blank" rel="noopener noreferrer">esbuild</a>\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774\uB294 Cold-Starting\uACFC \uAC19\uC774 \uB514\uD39C\uB358\uC2DC\uB97C \uB2E4\uC2DC \uBC88\uB4E4\uB9C1 \uD574\uC57C \uD558\uB294 \uACBD\uC6B0, \uC774 \uC131\uB2A5\uC744 \uD06C\uAC8C \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4.</p><p><strong>\uBAA8\uB178\uB9AC\uD3EC \uC9C0\uC6D0</strong></p><p>Vite\uB294 \uBAA8\uB178\uB9AC\uD3EC \uC124\uC815\uC744 \uCC98\uB9AC\uD558\uB3C4\uB85D \uC124\uACC4\uB418\uC5C8\uC73C\uBA70, \uC0AC\uC6A9\uC790\uAC00 \uBAA8\uB178\uB9AC\uD3EC\uAE30\uBC18\uC758 Yarn, Yarn 2 \uADF8\uB9AC\uACE0 PNPM\uC744 \uC131\uACF5\uC801\uC73C\uB85C \uC0AC\uC6A9\uD558\uB3C4\uB85D \uD569\uB2C8\uB2E4.</p><p><strong>css \uC804\uCC98\uB9AC \uC9C0\uC6D0</strong></p><p>Vite\uB294 \uD5A5\uC0C1\uB41C <code>@import</code> \uD574\uC0C1\uB3C4(\uBCC4\uCE6D \uBC0F npm \uB514\uD39C\uB358\uC2DC) \uBC0F <a href="./features.html#import-inlining-and-rebasing">\uB0B4\uBD80 \uD30C\uC77C\uC5D0 \uB300\uD55C \uC790\uB3D9 <code>url()</code> \uB9AC\uBCA0\uC774\uC2A4</a>\uB97C \uD3EC\uD568\uD558\uC5EC Sass \uBC0F Less\uC5D0 \uB300\uD574 \uBCF4\uB2E4 \uC138\uB828\uB41C \uC9C0\uC6D0\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p><p><strong>\uB192\uC740 \uC218\uC900\uC758 Vue \uC9C0\uC6D0</strong></p><p>Vite\uB294 \uCC98\uC74C\uC5D0 <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a> \uB3C4\uAD6C\uC758 \uBBF8\uB798 \uAE30\uBC18 \uC5ED\uD560\uC744 \uD558\uAE30 \uC704\uD574 \uB9CC\uB4E4\uC5B4\uC84C\uC2B5\uB2C8\uB2E4. \uD604\uC7AC Vite 2.0\uC740 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uC644\uC804\uD788 \uB3C5\uB9BD\uC801\uC774\uC9C0\uB9CC, \uC544\uC9C1 \uACF5\uC2DD Vue \uD50C\uB7EC\uADF8\uC778\uC740 \uD15C\uD50C\uB9BF \uC790\uC0B0 \uCC38\uC870 \uD574\uACB0, <code>&lt;script setup&gt;</code>, <code>&lt;style module&gt;</code>, \uC0AC\uC6A9\uC790 \uC815\uC758 \uBE14\uB85D \uB4F1\uACFC \uAC19\uC740 \uBAA8\uB4E0 \uACE0\uAE09 \uAE30\uB2A5\uC744 \uC544\uC6B0\uB974\uB294 Vue\uC758 \uB2E8\uC77C \uD30C\uC77C \uCEF4\uD3EC\uB10C\uD2B8 \uD615\uC2DD\uC5D0 \uB300\uD55C \uACE0\uC218\uC900\uC758 \uC9C0\uC6D0\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uB610\uD55C Vite\uB294 Vue SFC\uC5D0 \uB300\uD574 \uC138\uBD84\uD654\uB41C HMR\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 SFC\uC758 <code>&lt;template&gt;</code> \uB610\uB294 <code>&lt;style&gt;</code>\uC744 \uC5C5\uB370\uC774\uD2B8\uD558\uBA74 \uC0C1\uD0DC\uB97C \uC7AC\uC124\uC815\uD558\uC9C0 \uC54A\uACE0 \uCD5C\uC2E0 \uC5C5\uB370\uC774\uD2B8\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.</p><h2 id="wmr" tabindex="-1">WMR <a class="header-anchor" href="#wmr" aria-hidden="true">#</a></h2><p>Preact \uD300\uC758 <a href="https://github.com/preactjs/wmr" target="_blank" rel="noopener noreferrer">WMR</a>\uC740 \uC720\uC0AC\uD55C \uAE30\uB2A5 \uC138\uD2B8\uB97C \uC81C\uACF5\uD558\uBA70, Rollup\uC758 \uD50C\uB7EC\uADF8\uC778 \uC778\uD130\uD398\uC774\uC2A4\uC5D0 \uB300\uD55C Vite 2.0\uC758 \uC9C0\uC6D0\uC740 \uADF8\uAC83\uC5D0 \uC601\uAC10\uC744 \uBC1B\uC558\uC2B5\uB2C8\uB2E4.</p><p>WMR\uC740 \uC8FC\uB85C <a href="https://preactjs.com/" target="_blank" rel="noopener noreferrer">Preact</a> \uD504\uB85C\uC81D\uD2B8\uB97C \uC704\uD574 \uC124\uACC4\uB418\uC5C8\uC73C\uBA70, \uC0AC\uC804 \uB80C\uB354\uB9C1\uACFC \uAC19\uC740 \uBCF4\uB2E4 \uD1B5\uD569\uB41C \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uBC94\uC704 \uCE21\uBA74\uC5D0\uC11C\uB294 Preact \uC790\uCCB4\uC640 \uAC19\uC774 \uCEF4\uD329\uD2B8\uD55C \uD06C\uAE30\uB97C \uAC15\uC870\uD558\uB294 Preact \uBA54\uD0C0 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB354 \uAC00\uAE5D\uC2B5\uB2C8\uB2E4. Preact\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uBA74, WMR\uC740 \uBCF4\uB2E4 \uB354 \uBBF8\uC138\uD558\uAC8C \uC870\uC815\uB41C \uACBD\uD5D8\uC744 \uC81C\uACF5\uD560 \uAC83\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uB098 WMR\uC774 \uB2E4\uB978 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB300\uD55C \uC9C0\uC6D0 \uC6B0\uC120\uC21C\uC704\uB97C \uC815\uD560 \uAC83 \uAC19\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4.</p><h2 id="web-dev-server" tabindex="-1">@web/dev-server <a class="header-anchor" href="#web-dev-server" aria-hidden="true">#</a></h2><p><a href="https://modern-web.dev/docs/dev-server/overview/" target="_blank" rel="noopener noreferrer">@web/dev-server</a> (\uC774\uC804 <code>es-dev-server</code>)\uB294 \uD6CC\uB96D\uD55C \uD504\uB85C\uC81D\uD2B8\uC774\uBA70, \uC774\uB294 Vite 1.0\uC758 Koa \uAE30\uBC18 \uC11C\uBC84 \uC124\uC815\uC5D0 \uC601\uAC10\uC744 \uC8FC\uC5C8\uC2B5\uB2C8\uB2E4.</p><p><code>@web/dev-server</code>\uB294 \uBC94\uC704 \uCE21\uBA74\uC5D0\uC11C \uC57D\uAC04 \uB0AE\uC740 \uC218\uC900\uC785\uB2C8\uB2E4. \uACF5\uC2DD \uD504\uB808\uC784\uC6CC\uD06C \uD1B5\uD569\uC744 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC73C\uBA70 \uD504\uB85C\uB355\uC158 \uBE4C\uB4DC\uB97C \uC704\uD55C Rollup \uAD6C\uC131\uC744 \uC218\uB3D9\uC73C\uB85C \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p>\uC804\uBC18\uC801\uC73C\uB85C Vite\uB294 \uB354 \uB3C5\uCC3D\uC801\uC778 \uC791\uC5C5 \uD750\uB984\uB97C \uC81C\uACF5\uD558\uB294 \uAC83\uC744 \uBAA9\uD45C\uB85C \uD558\uB294, \uBCF4\uB2E4 \uB3C5\uB2E8\uC801\uC774\uACE0 \uB192\uC740 \uC218\uC900\uC758 \uB3C4\uAD6C\uC785\uB2C8\uB2E4. \uC989, <code>@web</code> \uCD1D\uD569 \uD504\uB85C\uC81D\uD2B8\uC5D0\uB294 Vite \uC0AC\uC6A9\uC790\uC5D0\uAC8C\uB3C4 \uB3C4\uC6C0\uC744 \uC904 \uC218 \uC788\uB294 \uB2E4\uB978 \uB9CE\uC740 \uD6CC\uB96D\uD55C \uB3C4\uAD6C\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.</p>',23),i=[n];function s(l,p,c,d,h,u){return t(),r("div",null,i)}var f=e(o,[["render",s]]);export{m as __pageData,f as default};

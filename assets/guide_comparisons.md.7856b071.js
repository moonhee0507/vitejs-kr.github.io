import{_ as e,c as r,o as a,a as t}from"./app.75be179e.js";const w=JSON.parse('{"title":"\uB2E4\uB978 \uBE4C\uB4DC \uB3C4\uAD6C\uC640\uC758 \uCC28\uC774\uC810","description":"","frontmatter":{"title":"\uB2E4\uB978 \uBE4C\uB4DC \uB3C4\uAD6C\uC640\uC758 \uCC28\uC774\uC810"},"headers":[{"level":2,"title":"WMR","slug":"wmr"},{"level":2,"title":"@web/dev-server","slug":"web-dev-server"},{"level":2,"title":"Snowpack","slug":"snowpack"}],"relativePath":"guide/comparisons.md"}'),o={name:"guide/comparisons.md"},n=t('<h1 id="comparisons-with-other-no-bundler-solutions" tabindex="-1">\uB2E4\uB978 \uBE4C\uB4DC \uB3C4\uAD6C\uC640\uC758 \uCC28\uC774\uC810 <a class="header-anchor" href="#comparisons-with-other-no-bundler-solutions" aria-hidden="true">#</a></h1><h2 id="wmr" tabindex="-1">WMR <a class="header-anchor" href="#wmr" aria-hidden="true">#</a></h2><p>Preact \uD300\uC758 <a href="https://github.com/preactjs/wmr" target="_blank" rel="noopener noreferrer">WMR</a>\uC740 \uC720\uC0AC\uD55C \uAE30\uB2A5 \uC138\uD2B8\uB97C \uC81C\uACF5\uD558\uBA70, Rollup\uC758 \uD50C\uB7EC\uADF8\uC778 \uC778\uD130\uD398\uC774\uC2A4\uC5D0 \uB300\uD55C Vite 2.0\uC758 \uC9C0\uC6D0\uC740 \uADF8\uAC83\uC5D0 \uC601\uAC10\uC744 \uBC1B\uC558\uC2B5\uB2C8\uB2E4.</p><p>WMR\uC740 \uC8FC\uB85C <a href="https://preactjs.com/" target="_blank" rel="noopener noreferrer">Preact</a> \uD504\uB85C\uC81D\uD2B8\uB97C \uC704\uD574 \uC124\uACC4\uB418\uC5C8\uC73C\uBA70, \uC0AC\uC804 \uB80C\uB354\uB9C1\uACFC \uAC19\uC740 \uBCF4\uB2E4 \uD1B5\uD569\uB41C \uAE30\uB2A5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uBC94\uC704 \uCE21\uBA74\uC5D0\uC11C\uB294 Preact \uC790\uCCB4\uC640 \uAC19\uC774 \uCEF4\uD329\uD2B8\uD55C \uD06C\uAE30\uB97C \uAC15\uC870\uD558\uB294 Preact \uBA54\uD0C0 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB354 \uAC00\uAE5D\uC2B5\uB2C8\uB2E4. Preact\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uBA74, WMR\uC740 \uBCF4\uB2E4 \uB354 \uBBF8\uC138\uD558\uAC8C \uC870\uC815\uB41C \uACBD\uD5D8\uC744 \uC81C\uACF5\uD560 \uAC83\uC785\uB2C8\uB2E4. \uADF8\uB7EC\uB098 WMR\uC774 \uB2E4\uB978 \uD504\uB808\uC784\uC6CC\uD06C\uC5D0 \uB300\uD55C \uC9C0\uC6D0 \uC6B0\uC120\uC21C\uC704\uB97C \uC815\uD560 \uAC83 \uAC19\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4.</p><h2 id="web-dev-server" tabindex="-1">@web/dev-server <a class="header-anchor" href="#web-dev-server" aria-hidden="true">#</a></h2><p><a href="https://modern-web.dev/docs/dev-server/overview/" target="_blank" rel="noopener noreferrer">@web/dev-server</a> (\uC774\uC804 <code>es-dev-server</code>)\uB294 \uD6CC\uB96D\uD55C \uD504\uB85C\uC81D\uD2B8\uC774\uBA70, \uC774\uB294 Vite 1.0\uC758 Koa \uAE30\uBC18 \uC11C\uBC84 \uC124\uC815\uC5D0 \uC601\uAC10\uC744 \uC8FC\uC5C8\uC2B5\uB2C8\uB2E4.</p><p><code>@web/dev-server</code>\uB294 \uBC94\uC704 \uCE21\uBA74\uC5D0\uC11C \uC57D\uAC04 \uB0AE\uC740 \uC218\uC900\uC785\uB2C8\uB2E4. \uACF5\uC2DD \uD504\uB808\uC784\uC6CC\uD06C \uD1B5\uD569\uC744 \uC81C\uACF5\uD558\uC9C0 \uC54A\uC73C\uBA70 \uD504\uB85C\uB355\uC158 \uBE4C\uB4DC\uB97C \uC704\uD55C Rollup \uAD6C\uC131\uC744 \uC218\uB3D9\uC73C\uB85C \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p>\uC804\uBC18\uC801\uC73C\uB85C Vite\uB294 \uB354 \uB3C5\uCC3D\uC801\uC778 \uC791\uC5C5 \uD750\uB984\uB97C \uC81C\uACF5\uD558\uB294 \uAC83\uC744 \uBAA9\uD45C\uB85C \uD558\uB294, \uBCF4\uB2E4 \uB3C5\uB2E8\uC801\uC774\uACE0 \uB192\uC740 \uC218\uC900\uC758 \uB3C4\uAD6C\uC785\uB2C8\uB2E4. \uC989, <code>@web</code> \uCD1D\uD569 \uD504\uB85C\uC81D\uD2B8\uC5D0\uB294 Vite \uC0AC\uC6A9\uC790\uC5D0\uAC8C\uB3C4 \uB3C4\uC6C0\uC744 \uC904 \uC218 \uC788\uB294 \uB2E4\uB978 \uB9CE\uC740 \uD6CC\uB96D\uD55C \uB3C4\uAD6C\uAC00 \uD3EC\uD568\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="snowpack" tabindex="-1">Snowpack <a class="header-anchor" href="#snowpack" aria-hidden="true">#</a></h2><p><a href="https://www.snowpack.dev/" target="_blank" rel="noopener noreferrer">Snowpack</a>\uC740 Vite\uC640 \uC720\uC0AC\uD558\uAC8C \uBC88\uB4E4\uB9C1\uC744 \uD558\uC9C0 \uC54A\uB294 \uB124\uC774\uD2F0\uBE0C ESM \uAC1C\uBC1C \uC11C\uBC84\uC785\uB2C8\uB2E4. \uB2E4\uB9CC \uC774 \uD504\uB85C\uC81D\uD2B8\uB294 \uB354 \uC774\uC0C1 \uAD00\uB9AC\uB418\uC9C0 \uC54A\uC73C\uBA70, Snowpack \uD300\uC740 \uD604\uC7AC Vite\uB97C \uD1B5\uD574 \uC81C\uACF5\uB418\uB294 \uC815\uC801 \uC0AC\uC774\uD2B8 \uBE4C\uB354\uC778 <a href="https://astro.build/" target="_blank" rel="noopener noreferrer">Astro</a>\uB97C \uB9CC\uB4E4\uACE0 \uC788\uC2B5\uB2C8\uB2E4. Astro \uD300\uC740 Vite \uC0DD\uD0DC\uACC4\uC5D0\uC11C \uD65C\uBC1C\uD558\uAC8C \uD65C\uB3D9\uD558\uACE0 \uC788\uC73C\uBA70, Vite\uB97C \uAC1C\uC120\uD558\uB294 \uB370 \uB3C4\uC6C0\uC744 \uC8FC\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uB2E4\uB978 \uC138\uBD80 \uAD6C\uD604 \uC0AC\uD56D\uC744 \uC81C\uC678\uD558\uACE0, \uB450 \uD504\uB85C\uC81D\uD2B8\uB294 \uAE30\uC874 \uB3C4\uAD6C\uC5D0 \uBE44\uD574 \uAE30\uC220\uC801 \uC774\uC810 \uCE21\uBA74\uC5D0\uC11C \uB9CE\uC740 \uBD80\uBD84\uC744 \uACF5\uC720\uD588\uC2B5\uB2C8\uB2E4. Snowpack v1(\uD604\uC7AC\uB294 <a href="https://github.com/snowpackjs/snowpack/tree/main/esinstall" target="_blank" rel="noopener noreferrer"><code>esinstall</code></a>)\uC5D0\uC11C Vite\uC758 \uB514\uD39C\uB358\uC2DC \uC0AC\uC804 \uBC88\uB4E4\uB9C1\uC5D0 \uB300\uD55C \uC601\uAC10\uC744 \uC5BB\uAE30\uB3C4 \uD588\uC2B5\uB2C8\uB2E4. \uB450 \uD504\uB85C\uC81D\uD2B8 \uAC04 \uC8FC\uC694\uD55C \uCC28\uC774\uC810\uC740 <a href="./comparisons-v2.html">\uB2E4\uB978 \uBE4C\uB4DC \uB3C4\uAD6C\uC640\uC758 \uCC28\uC774\uC810 (Vite v2)</a>\uB97C \uCC38\uACE0\uD574\uC8FC\uC138\uC694.</p>',11),s=[n];function c(i,d,p,l,h,_){return a(),r("div",null,s)}var b=e(o,[["render",c]]);export{w as __pageData,b as default};

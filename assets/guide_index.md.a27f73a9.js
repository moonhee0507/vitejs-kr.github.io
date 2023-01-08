import{_ as s,c as n,o as r,a,d as e,e as t}from"./app.75be179e.js";var l="/vite.mp3",o="/voice.svg";const A=JSON.parse('{"title":"\uC2DC\uC791\uD558\uAE30","description":"","frontmatter":{"title":"\uC2DC\uC791\uD558\uAE30"},"headers":[{"level":2,"title":"\uB4E4\uC5B4\uAC00\uAE30 \uC804\uC5D0","slug":"overview"},{"level":2,"title":"\uC9C0\uC6D0\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800","slug":"browser-support"},{"level":2,"title":"\uC628\uB77C\uC778\uC5D0\uC11C Vite \uCCB4\uD5D8\uD574\uBCF4\uAE30","slug":"trying-vite-online"},{"level":2,"title":"\uCCAB Vite \uD504\uB85C\uC81D\uD2B8 \uB9CC\uB4E4\uC5B4\uBCF4\uAE30","slug":"scaffolding-your-first-vite-project"},{"level":2,"title":"\uCEE4\uBBA4\uB2C8\uD2F0 \uD15C\uD50C\uB9BF","slug":"community-templates"},{"level":2,"title":"index.html \uADF8\uB9AC\uACE0 \uD504\uB85C\uC81D\uD2B8\uC758 \uB8E8\uD2B8","slug":"index-html-and-project-root"},{"level":2,"title":"\uCEE4\uB9E8\uB4DC \uB77C\uC778 \uC778\uD130\uD398\uC774\uC2A4","slug":"command-line-interface"},{"level":2,"title":"\uB9B4\uB9AC\uC988\uB418\uC9C0 \uC54A\uC740 Vite \uC0AC\uC6A9\uD558\uAE30","slug":"using-unreleased-commits"},{"level":2,"title":"\uCEE4\uBBA4\uB2C8\uD2F0","slug":"community"}],"relativePath":"guide/index.md"}'),p={name:"guide/index.md"},c=o+"#voice",i=a('<h1 id="getting-started" tabindex="-1">\uC2DC\uC791\uD558\uAE30 <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><audio id="vite-audio"><source src="'+l+'" type="audio/mpeg"></audio><h2 id="overview" tabindex="-1">\uB4E4\uC5B4\uAC00\uAE30 \uC804\uC5D0 <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2>',3),d=e("p",null,[t('Vite(\uD504\uB791\uC2A4\uC5B4\uB85C "\uBE60\uB974\uB2E4(Quick)"\uB97C \uC758\uBBF8\uD558\uBA70, \uBC1C\uC74C\uC740 "veet"\uC640 \uBE44\uC2B7\uD55C '),e("code",null,"/vit/"),e("button",{style:{border:"none",padding:"3px","border-radius":"4px","vertical-align":"bottom"},id:"play-vite-audio",onclick:"document.getElementById('vite-audio').play();"},[e("svg",{style:{height:"2em",width:"2em"}},[e("use",{href:c})])]),t(" \uC785\uB2C8\uB2E4.)\uC740 \uBE60\uB974\uACE0 \uAC04\uACB0\uD55C \uBAA8\uB358 \uC6F9 \uD504\uB85C\uC81D\uD2B8 \uAC1C\uBC1C \uACBD\uD5D8\uC5D0 \uCD08\uC810\uC744 \uB9DE\uCDB0 \uD0C4\uC0DD\uD55C \uBE4C\uB4DC \uB3C4\uAD6C\uC774\uBA70, \uB450 \uAC00\uC9C0 \uCEE8\uC149\uC744 \uC911\uC2EC\uC73C\uB85C \uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.")],-1),h=a(`<ul><li><p>\uAC1C\uBC1C \uC2DC <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noopener noreferrer">\uB124\uC774\uD2F0\uBE0C ES Module</a>\uC744 \uB118\uC5B4 <a href="./features.html">\uB354\uC6B1 \uB2E4\uC591\uD55C \uAE30\uB2A5</a>\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uAC00\uB839, <a href="./features.html#hot-module-replacement">Hot Module Replacement (HMR)</a>\uACFC \uAC19\uC740 \uAC83\uB4E4 \uB9D0\uC774\uC8E0.</p></li><li><p>\uBC88\uB4E4\uB9C1 \uC2DC, <a href="https://rollupjs.org" target="_blank" rel="noopener noreferrer">Rollup</a> \uAE30\uBC18\uC758 \uB2E4\uC591\uD55C \uBE4C\uB4DC \uCEE4\uB9E8\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uB192\uC740 \uC218\uC900\uC73C\uB85C \uCD5C\uC801\uD654\uB41C \uC815\uC801(Static) \uB9AC\uC18C\uC2A4\uB4E4\uC744 \uBC30\uD3EC\uD560 \uC218 \uC788\uAC8C\uB054 \uD558\uBA70, \uBBF8\uB9AC \uC815\uC758\uB41C \uC124\uC815(Pre-configured)\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.</p></li></ul><p>vite\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uCD5C\uC801\uD654 \uB41C \uC124\uC815\uC744 \uC81C\uACF5\uD558\uC9C0\uB9CC, <a href="./api-plugin.html">Plugin API</a> \uB610\uB294 <a href="./api-javascript.html">JavaScript API</a>\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. (\uBB3C\uB860 TypeScript \uC5ED\uC2DC \uC9C0\uC6D0\uD558\uAD6C\uC694.)</p><p>\uC65C Vite\uB97C \uB9CC\uB4E4\uAC8C \uB418\uC5C8\uB294\uC9C0 \uC54C\uACE0 \uC2F6\uB2E4\uBA74 <a href="./why.html">Vite\uB97C \uC0AC\uC6A9\uD574\uC57C \uD558\uB294 \uC774\uC720</a> \uC139\uC158\uC744 \uCC38\uACE0\uD574\uC8FC\uC138\uC694.</p><h2 id="browser-support" tabindex="-1">\uC9C0\uC6D0\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800 <a class="header-anchor" href="#browser-support" aria-hidden="true">#</a></h2><p>\uAE30\uBCF8\uC801\uC73C\uB85C <a href="https://caniuse.com/es6-module" target="_blank" rel="noopener noreferrer">\uB124\uC774\uD2F0\uBE0C ES \uBAA8\uB4C8</a>, <a href="https://caniuse.com/es6-module-dynamic-import" target="_blank" rel="noopener noreferrer">\uB124\uC774\uD2F0\uBE0C ESM\uC758 \uB3D9\uC801 Import</a>, \uADF8\uB9AC\uACE0 <a href="https://caniuse.com/mdn-javascript_statements_import_meta" target="_blank" rel="noopener noreferrer"><code>import.<wbr>meta</code></a>\uB97C \uC9C0\uC6D0\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800\uB97C \uD0C0\uAE43\uC73C\uB85C \uBE4C\uB4DC\uB97C \uC218\uD589\uD569\uB2C8\uB2E4. \uB808\uAC70\uC2DC \uBE0C\uB77C\uC6B0\uC800\uB294 <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener noreferrer">@vitejs/plugin-legacy</a> \uD50C\uB7EC\uADF8\uC778\uC744 \uD1B5\uD574 \uC9C0\uC6D0\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uC774\uC640 \uAD00\uB828\uD574 \uC880 \uB354 \uC790\uC138\uD55C \uC0AC\uD56D\uC740 <a href="./build.html">\uD504\uB85C\uB355\uC158 \uBC84\uC804\uC73C\uB85C \uBE4C\uB4DC\uD558\uAE30</a> \uC139\uC158\uC5D0\uC11C \uB2E4\uB8F9\uB2C8\uB2E4.</p><h2 id="trying-vite-online" tabindex="-1">\uC628\uB77C\uC778\uC5D0\uC11C Vite \uCCB4\uD5D8\uD574\uBCF4\uAE30 <a class="header-anchor" href="#trying-vite-online" aria-hidden="true">#</a></h2><p><a href="https://vite.new/" target="_blank" rel="noopener noreferrer">StackBlitz</a>\uC5D0\uC11C Vite\uB97C \uC628\uB77C\uC778\uC73C\uB85C \uCCB4\uD5D8\uD574 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. Vite\uB97C \uAD6C\uC131\uD558\uAE30 \uC704\uD574 \uD544\uC694\uD55C \uC124\uC815\uB4E4\uC744 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC9C1\uC811 \uC2E4\uD589\uD558\uBBC0\uB85C \uB85C\uCEEC \uD658\uACBD\uACFC \uB9E4\uC6B0 \uC720\uC0AC\uD558\uBA70, \uCEF4\uD4E8\uD130\uC5D0 \uADF8 \uC5B4\uB5A0\uD55C \uAC83\uB3C4 \uC124\uCE58\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. <code>vite.new/{template}</code> \uC73C\uB85C \uC774\uB3D9\uD574 \uC0AC\uC6A9\uD560 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC120\uD0DD\uD574 \uC2DC\uC791\uD574\uBCF4\uC138\uC694.</p><p>\uD604\uC7AC \uC9C0\uC6D0\uD558\uACE0 \uC788\uB294 \uD15C\uD50C\uB9BF\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><table><thead><tr><th style="text-align:center;">JavaScript</th><th style="text-align:center;">TypeScript</th></tr></thead><tbody><tr><td style="text-align:center;"><a href="https://vite.new/vanilla" target="_blank" rel="noopener noreferrer">vanilla</a></td><td style="text-align:center;"><a href="https://vite.new/vanilla-ts" target="_blank" rel="noopener noreferrer">vanilla-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/vue" target="_blank" rel="noopener noreferrer">vue</a></td><td style="text-align:center;"><a href="https://vite.new/vue-ts" target="_blank" rel="noopener noreferrer">vue-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/react" target="_blank" rel="noopener noreferrer">react</a></td><td style="text-align:center;"><a href="https://vite.new/react-ts" target="_blank" rel="noopener noreferrer">react-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/preact" target="_blank" rel="noopener noreferrer">preact</a></td><td style="text-align:center;"><a href="https://vite.new/preact-ts" target="_blank" rel="noopener noreferrer">preact-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/lit" target="_blank" rel="noopener noreferrer">lit</a></td><td style="text-align:center;"><a href="https://vite.new/lit-ts" target="_blank" rel="noopener noreferrer">lit-ts</a></td></tr><tr><td style="text-align:center;"><a href="https://vite.new/svelte" target="_blank" rel="noopener noreferrer">svelte</a></td><td style="text-align:center;"><a href="https://vite.new/svelte-ts" target="_blank" rel="noopener noreferrer">svelte-ts</a></td></tr></tbody></table><h2 id="scaffolding-your-first-vite-project" tabindex="-1">\uCCAB Vite \uD504\uB85C\uC81D\uD2B8 \uB9CC\uB4E4\uC5B4\uBCF4\uAE30 <a class="header-anchor" href="#scaffolding-your-first-vite-project" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\uD638\uD658\uC131</p><p>Vite\uB294 \uBC84\uC804 14.18+ \uB610\uB294 16+ \uC758 <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a>\uB97C \uC694\uAD6C\uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uC77C\uBD80 \uD15C\uD50C\uB9BF\uC758 \uACBD\uC6B0 \uB354 \uB192\uC740 \uBC84\uC804\uC758 Node.js\uB97C \uC694\uAD6C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></div><p>NPM:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm create vite@latest</span></span>
<span class="line"></span></code></pre></div><p>Yarn:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ yarn create vite</span></span>
<span class="line"></span></code></pre></div><p>PNPM:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ pnpm create vite</span></span>
<span class="line"></span></code></pre></div><p>\uC774\uD6C4\uC5D0\uB294 \uD504\uB86C\uD504\uD2B8 \uCC3D\uC5D0 \uCD9C\uB825\uB41C \uBA54\uC2DC\uC9C0\uB97C \uB530\uB77C\uC8FC\uC138\uC694.</p><p>\uBB3C\uB860 \uD504\uB85C\uC81D\uD2B8\uC758 \uC774\uB984\uC774\uB098 \uD15C\uD50C\uB9BF\uC744 \uC9C0\uC815\uD574 \uD504\uB85C\uC81D\uD2B8\uB97C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC00\uB839, Vite\uB97C \uC774\uC6A9\uD574 Vue \uD504\uB85C\uC81D\uD2B8\uB97C \uB9CC\uB4E4\uC790\uACE0 \uD55C\uB2E4\uBA74:</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm 6.x</span></span>
<span class="line"><span style="color:#A6ACCD;">npm create vite@latest my-vue-app --template vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># npm 7+, &#39;--&#39;\uB97C \uBC18\uB4DC\uC2DC \uBD99\uC5EC\uC8FC\uC138\uC694</span></span>
<span class="line"><span style="color:#A6ACCD;">npm create vite@latest my-vue-app -- --template vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn create vite my-vue-app --template vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm create vite my-vue-app --template vue</span></span>
<span class="line"></span></code></pre></div><p>\uC774\uC640 \uAC19\uC774 \uC9C0\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uB610\uD55C <a href="https://github.com/vitejs/vite/tree/main/packages/create-vite" target="_blank" rel="noopener noreferrer">create-vite</a>\uC5D0\uC11C \uB354\uC6B1 \uB2E4\uC591\uD55C \uD15C\uD50C\uB9BF\uB4E4\uC5D0 \uB300\uD574 \uB2E4\uB8E8\uACE0 \uC788\uC2B5\uB2C8\uB2E4: <code>vanilla</code>, <code>vanilla-ts</code>, <code>vue</code>, <code>vue-ts</code>, <code>react</code>, <code>react-ts</code>, <code>react-swc</code>, <code>react-swc-ts</code>, <code>preact</code>, <code>preact-ts</code>, <code>lit</code>, <code>lit-ts</code>, <code>svelte</code>, <code>svelte-ts</code>.</p><h2 id="community-templates" tabindex="-1">\uCEE4\uBBA4\uB2C8\uD2F0 \uD15C\uD50C\uB9BF <a class="header-anchor" href="#community-templates" aria-hidden="true">#</a></h2><p>Vite\uC5D0\uC11C \uC81C\uACF5\uD558\uACE0 \uC788\uB294 \uD15C\uD50C\uB9BF \uB9D0\uACE0\uB3C4 <a href="https://github.com/vitejs/awesome-vite#templates" target="_blank" rel="noopener noreferrer">Awesome-vite templates</a>\uC640 \uAC19\uC774 \uB2E4\uC591\uD55C \uB3C4\uAD6C\uC640 \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uD0C0\uAC9F\uC73C\uB85C \uD558\uB294 \uCEE4\uBBA4\uB2C8\uD2F0 \uD15C\uD50C\uB9BF\uB4E4\uC774 \uC788\uC2B5\uB2C8\uB2E4. <code>create-vite</code>\uC740 \uC774\uB7EC\uD55C \uD15C\uD50C\uB9BF\uC744 \uAE30\uBC18\uC73C\uB85C\uB3C4 \uBE60\uB974\uAC8C \uD504\uB85C\uC81D\uD2B8\uB97C \uAD6C\uC131\uD560 \uC218 \uC788\uB3C4\uB85D \uC9C0\uC6D0\uD558\uACE0 \uC788\uC73C\uBA70, <a href="https://github.com/Rich-Harris/degit" target="_blank" rel="noopener noreferrer">degit</a>\uC744 \uC774\uC6A9\uD569\uB2C8\uB2E4.</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx degit user/project my-project</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> my-project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"><span style="color:#A6ACCD;">npm run dev</span></span>
<span class="line"></span></code></pre></div><p>\uB9CC\uC57D \uD2B9\uC815 \uBE0C\uB79C\uCE58\uC5D0\uC11C \uC2DC\uC791\uD558\uACE0 \uC2F6\uB2E4\uBA74, <code>#</code> \uC811\uBBF8\uC0AC(Suffix)\uB97C \uBD99\uC5EC \uBE0C\uB79C\uCE58\uB97C \uBA85\uC2DC\uD574\uC8FC\uC138\uC694. \uAC00\uB839 <code>main</code> \uBE0C\uB79C\uCE58\uC5D0\uC11C \uC2DC\uC791\uD558\uACE0\uC790 \uD55C\uB2E4\uBA74, <code>#main</code>\uACFC \uAC19\uC774 \uB9D0\uC774\uC8E0.</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx degit user/project#main my-project</span></span>
<span class="line"></span></code></pre></div><h2 id="index-html-and-project-root" tabindex="-1"><code>index.html</code> \uADF8\uB9AC\uACE0 \uD504\uB85C\uC81D\uD2B8\uC758 \uB8E8\uD2B8 <a class="header-anchor" href="#index-html-and-project-root" aria-hidden="true">#</a></h2><p>\uB9CC\uB4E4\uC5B4\uC9C4 Vite \uD504\uB85C\uC81D\uD2B8\uB97C \uC720\uC2EC\uD788 \uBCF4\uBA74 <code>index.html</code> \uD30C\uC77C\uC774 <code>public</code> \uB514\uB809\uD130\uB9AC\uAC00 \uC544\uB2CC \uD504\uB85C\uC81D\uD2B8\uC758 \uB8E8\uD2B8\uC5D0 \uC704\uCE58\uD574 \uC788\uB2E4\uB294 \uAC83\uC744 \uBC1C\uACAC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC758\uB3C4\uC801\uC73C\uB85C \uC774\uB807\uAC8C \uC704\uCE58\uC2DC\uD0A8 \uAC83\uC778\uB370, \uCD94\uAC00\uC801\uC778 \uBC88\uB4E4\uB9C1 \uACFC\uC815 \uC5C6\uC774 <code>index.html</code> \uD30C\uC77C\uC774 \uC571\uC758 \uC9C4\uC785\uC810\uC774 \uB418\uAC8C\uB054 \uD558\uAE30 \uC704\uD568\uC785\uB2C8\uB2E4.</p><p>Vite\uB294 <code>index.html</code> \uD30C\uC77C\uC744 \uC18C\uC2A4 \uCF54\uB4DC\uC774\uC790 JavaScript \uBAA8\uB4C8 \uADF8\uB798\uD504\uB97C \uAD6C\uC131\uD558\uB294 \uC694\uC18C \uC911 \uD558\uB098\uB85C \uCDE8\uAE09\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uC2DC\uB9D0\uD574, <code>&lt;script type=&quot;module&quot; src=&quot;...&quot;&gt;</code> \uD0DC\uADF8\uB97C \uC774\uC6A9\uD574 JavaScript \uC18C\uC2A4 \uCF54\uB4DC\uB97C \uAC00\uC838\uC628\uB2E4\uB294 \uC758\uBBF8\uC774\uBA70, \uC778\uB77C\uC778\uC73C\uB85C \uC791\uC131\uB41C <code>&lt;script type=&quot;module&quot;&gt;</code>\uC774\uB098 <code>&lt;link href&gt;</code>\uC640 \uAC19\uC740 CSS \uC5ED\uC2DC Vite\uC5D0\uC11C \uCDE8\uAE09\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uCD94\uAC00\uC801\uC73C\uB85C, Vite\uB294 <code>index.html</code> \uB0B4\uC5D0 \uC874\uC7AC\uD558\uB294 URL\uC5D0 \uB300\uD574 <code>%PUBLIC_URL%</code>\uACFC \uAC19\uC740 Placeholder \uC5C6\uC774 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D URL \uBCA0\uC774\uC2A4\uB97C \uC790\uB3D9\uC73C\uB85C \uB9DE\uCDB0\uC90D\uB2C8\uB2E4.</p><p>Vite\uB294 \uC815\uC801(Static) HTTP \uC11C\uBC84\uC640 \uBE44\uC2B7\uD558\uAC8C &quot;\uB8E8\uD2B8 \uB514\uB809\uD130\uB9AC&quot;\uB77C\uB294 \uAC1C\uB150\uC744 \uAC16\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uD5A5\uD6C4 <code>&lt;root&gt;</code>\uB77C\uB294 \uC774\uB984\uC73C\uB85C \uBB38\uC11C \uB0B4\uC5D0\uC11C \uBCF4\uAC8C \uB418\uB294\uB370, \uC774\uB294 Absolute URL\uC744 \uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8\uB97C \uAC00\uB9AC\uD0A4\uAC8C\uB054 \uD568\uC73C\uB85C\uC368 \uC77C\uBC18\uC801\uC778 \uC815\uC801 \uD30C\uC77C \uC11C\uBC84\uC640 \uB3D9\uC77C\uD558\uAC8C \uCF54\uB4DC\uB97C \uC791\uC131\uD560 \uC218 \uC788\uAC8C \uB429\uB2C8\uB2E4. \uB610\uD55C Vite\uB294 \uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8 \uC678\uBD80\uC5D0\uC11C\uB3C4 \uB514\uD39C\uB358\uC2DC\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uAC8C\uB054 \uAD6C\uD604\uD588\uB294\uB370, \uC774\uB97C \uC774\uC6A9\uD558\uBA74 \uBAA8\uB178\uB9AC\uD3EC \uAD6C\uC131 \uB4F1 \uB2E4\uC591\uD55C \uC791\uC5C5\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p><p>\uB610\uD55C Vite\uB294 \uC5EC\uB7EC <code>.html</code> \uD30C\uC77C\uC744 \uC571\uC758 \uC9C4\uC785\uC810\uC73C\uB85C \uD558\uB294 <a href="./build.html#multi-page-app">Multi-page apps</a>\uB97C \uC9C0\uC6D0\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</p><h4 id="specifying-alternative-root" tabindex="-1">\uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8 \uC9C0\uC815 <a class="header-anchor" href="#specifying-alternative-root" aria-hidden="true">#</a></h4><p><code>vite</code>\uC740 \uAC1C\uBC1C \uC11C\uBC84\uB97C \uC2DC\uC791\uD560 \uB54C \uD604\uC7AC \uC704\uCE58\uD574 \uC788\uB294 \uB514\uB809\uD130\uB9AC\uB97C \uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8\uB85C \uAC00\uC815\uD558\uACE0 \uB3D9\uC791\uD569\uB2C8\uB2E4. \uB9CC\uC57D \uD2B9\uC815 \uB514\uB809\uD130\uB9AC\uB97C \uC9C0\uC815\uD574 \uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8\uB85C\uC368 \uB3D9\uC791\uD558\uAC8C\uB054 \uD558\uACE0 \uC2F6\uB2E4\uBA74, <code>vite serve some/sub/dir</code> \uBA85\uB839\uC73C\uB85C Vite\uB97C \uC2DC\uC791\uD574\uC8FC\uC138\uC694.</p><h2 id="command-line-interface" tabindex="-1">\uCEE4\uB9E8\uB4DC \uB77C\uC778 \uC778\uD130\uD398\uC774\uC2A4 <a class="header-anchor" href="#command-line-interface" aria-hidden="true">#</a></h2><p>vite\uAC00 \uC124\uCE58\uB41C \uD504\uB85C\uC81D\uD2B8\uB294 <code>vite</code> \uBA85\uB839\uC744 \uD1B5\uD574 \uBC14\uB85C Vite\uB97C \uC2E4\uD589\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. (<code>npx vite</code>\uC744 \uC774\uC6A9\uD574\uB3C4 \uB418\uAD6C\uC694.) \uAE30\uBCF8\uC801\uC73C\uB85C Vite\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 npm \uC2A4\uD06C\uB9BD\uD2B8\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4.</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \uAC1C\uBC1C \uC11C\uBC84\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4. (\`vite dev\` \uB610\uB294 \`vite serve\`\uB85C\uB3C4 \uC2DC\uC791\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4.)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \uBC30\uD3EC\uC6A9 \uBE4C\uB4DC \uC791\uC5C5\uC744 \uC218\uD589\uD569\uB2C8\uB2E4.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">preview</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite preview</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \uB85C\uCEEC\uC5D0\uC11C \uBC30\uD3EC\uC6A9 \uBE4C\uB4DC\uC5D0 \uB300\uD55C \uD504\uB9AC\uBDF0 \uC11C\uBC84\uB97C \uC2E4\uD589\uD569\uB2C8\uB2E4.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Vite CLI\uC640 \uD568\uAED8 <code>--port</code>, <code>--https</code>\uC640 \uAC19\uC740 \uC635\uC158\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBAA8\uB4E0 CLI \uC635\uC158\uC744 \uBCF4\uACE0\uC790 \uD55C\uB2E4\uBA74, vite\uAC00 \uC124\uCE58\uB41C \uD504\uB85C\uC81D\uD2B8 \uC548\uC5D0\uC11C <code>npx vite --help</code> \uBA85\uB839\uC744 \uC2E4\uD589\uD574\uC8FC\uC138\uC694.</p><p>\uC880 \uB354 \uC790\uC138\uD55C \uC815\uBCF4\uB294 <a href="./cli.html">\uCEE4\uB9E8\uB4DC \uB77C\uC778 \uC778\uD130\uD398\uC774\uC2A4</a> \uBB38\uC11C\uC5D0\uC11C \uB2E4\uB8E8\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="using-unreleased-commits" tabindex="-1">\uB9B4\uB9AC\uC988\uB418\uC9C0 \uC54A\uC740 Vite \uC0AC\uC6A9\uD558\uAE30 <a class="header-anchor" href="#using-unreleased-commits" aria-hidden="true">#</a></h2><p>\uB9CC\uC57D \uC544\uC9C1 \uB9B4\uB9AC\uC988\uB418\uC9C0 \uC54A\uC740 Vite\uB97C \uC0AC\uC6A9\uD558\uACE0\uC790 \uD55C\uB2E4\uBA74, \uBA3C\uC800 <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">Vite \uB9AC\uD3EC\uC9C0\uD1A0\uB9AC</a>\uB97C \uB85C\uCEEC \uCEF4\uD4E8\uD130\uB85C \uD074\uB860\uD55C \uB4A4 \uC774\uB97C \uBE4C\uB4DC\uD574 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC774 \uC788\uC2B5\uB2C8\uB2E4. (<a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">PNPM</a>\uC774 \uD544\uC694\uD574\uC694.)</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git clone https://github.com/vitejs/vite.git</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> vite</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm install</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> packages/vite</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm link --global </span><span style="color:#676E95;font-style:italic;"># \uC774 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uC120\uD638\uD558\uB294 \uD328\uD0A4\uC9C0 \uAD00\uB9AC\uC790\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</span></span>
<span class="line"></span></code></pre></div><p>\uC774\uD6C4 Vite\uB97C \uD074\uB860\uD55C \uD504\uB85C\uC81D\uD2B8 \uC704\uC5D0\uC11C <code>pnpm link --global vite</code> \uBA85\uB839\uC744 \uC2E4\uD589\uD574 \uC8FC\uC138\uC694(\uB610\uB294 <code>vite</code>\uB97C \uC804\uC5ED\uC801\uC73C\uB85C \uB9C1\uD06C\uD558\uB294 \uB370 \uC0AC\uC6A9\uD588\uB358 \uD328\uD0A4\uC9C0 \uAD00\uB9AC\uC790\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4). \uC774 \uC791\uC5C5 \uC774\uD6C4 \uAC1C\uBC1C \uC11C\uBC84\uB97C \uC7AC\uC2DC\uC791(<code>yarn dev</code>)\uD558\uAC8C \uB418\uBA74, \uD074\uB860\uB41C Vite\uB97C \uC774\uC6A9\uD574 \uD504\uB85C\uC81D\uD2B8\uB97C \uC9C4\uD589\uD560 \uC218 \uC788\uAC8C \uB429\uB2C8\uB2E4.</p><h2 id="community" tabindex="-1">\uCEE4\uBBA4\uB2C8\uD2F0 <a class="header-anchor" href="#community" aria-hidden="true">#</a></h2><p>\uC9C8\uBB38\uC774\uB098 \uB3C4\uC6C0\uC774 \uD544\uC694\uD558\uB2E4\uBA74, <a href="https://chat.vitejs.dev" target="_blank" rel="noopener noreferrer">Discord</a> \uB610\uB294 <a href="https://github.com/vitejs/vite/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a>\uC5D0 \uBC29\uBB38\uD574\uC8FC\uC138\uC694.</p>`,45),v=[i,d,h];function u(y,m,g,f,D,_){return r(),n("div",null,v)}var C=s(p,[["render",u]]);export{A as __pageData,C as default};

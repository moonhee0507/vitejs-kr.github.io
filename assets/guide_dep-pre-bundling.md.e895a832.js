import{_ as e,c as s,o as n,a as o}from"./app.75be179e.js";const u=JSON.parse('{"title":"\uC0AC\uC804 \uBC88\uB4E4\uB9C1 \uB41C \uB514\uD39C\uB358\uC2DC","description":"","frontmatter":{"title":"\uC0AC\uC804 \uBC88\uB4E4\uB9C1 \uB41C \uB514\uD39C\uB358\uC2DC"},"headers":[{"level":2,"title":"\uC65C \uC774\uB7F0 \uBA54\uC2DC\uC9C0\uAC00 \uB098\uD0C0\uB098\uB098\uC694?","slug":"the-why"},{"level":2,"title":"\uC790\uB3D9\uC73C\uB85C \uB514\uD39C\uB358\uC2DC \uD0D0\uC0C9\uD558\uAE30","slug":"automatic-dependency-discovery"},{"level":2,"title":"\uBAA8\uB178\uB9AC\uD3EC \uB514\uD39C\uB358\uC2DC","slug":"monorepos-and-linked-dependencies"},{"level":2,"title":"\uB514\uD39C\uB358\uC2DC \uD0D0\uC0C9 \uACFC\uC815 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC988\uD558\uAE30","slug":"customizing-the-behavior"},{"level":2,"title":"\uCE90\uC2F1","slug":"caching"},{"level":3,"title":"\uD30C\uC77C \uC2DC\uC2A4\uD15C \uCE90\uC2DC","slug":"file-system-cache"},{"level":3,"title":"\uBE0C\uB77C\uC6B0\uC800 \uCE90\uC2DC","slug":"browser-cache"}],"relativePath":"guide/dep-pre-bundling.md"}'),a={name:"guide/dep-pre-bundling.md"},l=o(`<h1 id="dependency-pre-building" tabindex="-1">\uC0AC\uC804 \uBC88\uB4E4\uB9C1 \uB41C \uB514\uD39C\uB358\uC2DC <a class="header-anchor" href="#dependency-pre-building" aria-hidden="true">#</a></h1><p>\uB9E8 \uCC98\uC74C <code>vite</code> \uBA85\uB839\uC744 \uC2E4\uD589\uD588\uC744 \uB54C, \uB2E4\uC74C \uBA54\uC2DC\uC9C0\uB97C \uB9C8\uC8FC\uD588\uC744 \uAC83\uC785\uB2C8\uB2E4.</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Pre-bundling dependencies:</span></span>
<span class="line"><span style="color:#A6ACCD;">  react</span></span>
<span class="line"><span style="color:#A6ACCD;">  react-dom</span></span>
<span class="line"><span style="color:#A6ACCD;">(this will be run only when your dependencies or config have changed)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="the-why" tabindex="-1">\uC65C \uC774\uB7F0 \uBA54\uC2DC\uC9C0\uAC00 \uB098\uD0C0\uB098\uB098\uC694? <a class="header-anchor" href="#the-why" aria-hidden="true">#</a></h2><p>\uC774\uB7EC\uD55C \uBA54\uC2DC\uC9C0\uAC00 \uB098\uD0C0\uB098\uB294 \uC774\uC720\uB294 Vite\uC758 &quot;\uC0AC\uC804 \uBC88\uB4E4\uB9C1(Pre-bundling)&quot; \uAE30\uB2A5\uC73C\uB85C \uC778\uD55C \uAC83\uC778\uB370, \uC774\uB97C \uC0AC\uC6A9\uD558\uB294 \uBAA9\uC801\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.</p><ol><li><p><strong>CommonJS \uADF8\uB9AC\uACE0 UMD \uBAA8\uB4C8\uC744 ESM\uC73C\uB85C \uAC00\uC838\uC624\uAE30:</strong> \uAC1C\uBC1C \uC2DC, Vite\uC758 \uAC1C\uBC1C \uC11C\uBC84\uB294 \uBAA8\uB4E0 \uCF54\uB4DC\uB97C \uB124\uC774\uD2F0\uBE0C ESM\uC73C\uB85C \uAC00\uC838\uC624\uAC8C \uB429\uB2C8\uB2E4. \uB530\uB77C\uC11C, vite\uB294 \uBC18\uB4DC\uC2DC \uBAA8\uB4E0 CommonJS \uBC0F UMD \uD30C\uC77C\uC744 ESM\uC73C\uB85C \uBD88\uB7EC\uC62C \uC218 \uC788\uB3C4\uB85D \uBCC0\uD658 \uC791\uC5C5\uC744 \uC9C4\uD589\uD574\uC918\uC57C \uD569\uB2C8\uB2E4.</p><p>vite\uB294 \uC870\uAE08 \uC601\uB9AC\uD558\uAC8C ESM \uD30C\uC77C\uB85C \uBCC0\uD658\uC744 \uC9C4\uD589\uD558\uB294\uB370, \uAC00\uB839 CommonJS \uB514\uD39C\uB358\uC2DC\uB97C \uBCC0\uD658\uD574\uC8FC\uB294 \uACBD\uC6B0 \uC544\uB798\uC640 \uAC19\uC774 \uC774\uB984\uC744 \uC9C0\uC815\uD574 CommonJS \uD615\uD0DC\uC758 \uBAA8\uB4C8\uC744 \uAC00\uC838\uC62C \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \uC544\uB798 \uCF54\uB4DC\uB294 \uC815\uC0C1\uC801\uC73C\uB85C \uB3D9\uC791\uD569\uB2C8\uB2E4.</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div></li><li><p><strong>\uD37C\uD3EC\uBA3C\uC2A4:</strong> vite\uB294 \uC5EC\uB7EC \uB514\uD39C\uB358\uC2DC\uAC00 \uC874\uC7AC\uD558\uB294 ESM \uBAA8\uB4C8\uC744 \uD558\uB098\uC758 \uBAA8\uB4C8\uB85C \uBCC0\uD658\uD558\uC5EC \uD398\uC774\uC9C0 \uB85C\uB4DC\uC5D0 \uB300\uD55C \uD37C\uD3EC\uBA3C\uC2A4\uB97C \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4.</p><p>600\uAC1C\uC758 \uBAA8\uB4C8\uC744 \uAC16\uACE0 \uC788\uB294 <a href="https://unpkg.com/browse/lodash-es/" target="_blank" rel="noopener noreferrer"><code>lodash-es</code></a>\uC640 \uAC19\uC774 \uB9E4\uC6B0 \uB9CE\uC740 \uBAA8\uB4C8\uC744 \uD544\uC694\uB85C \uD558\uB294 \uACBD\uC6B0, \uADF8 \uC218\uB9CC\uD07C HTTP \uC694\uCCAD\uC744 \uC804\uC1A1\uD558\uAC8C \uB429\uB2C8\uB2E4(<code>import { debounce } from &#39;lodash-es&#39;</code>\uB97C \uD55C\uB2E4\uACE0 \uD574\uB3C4 \uB9D0\uC774\uC8E0). \uC11C\uBC84\uAC00 \uC774 \uC694\uCCAD\uB4E4\uC744 \uBAA8\uB450 \uC815\uC0C1\uC801\uC73C\uB85C \uCC98\uB9AC\uD55C\uB2E4\uACE0 \uD574\uB3C4, \uBE0C\uB77C\uC6B0\uC800 \uC790\uCCB4\uC5D0\uC11C \uC774\uB7EC\uD55C \uB124\uD2B8\uC6CC\uD06C \uC694\uCCAD\uC5D0 \uB300\uD55C \uC624\uBC84\uD5E4\uB4DC\uAC00 \uC874\uC7AC\uD558\uAE30\uC5D0 \uD398\uC774\uC9C0 \uB85C\uB4DC \uD37C\uD3EC\uBA3C\uC2A4\uB294 \uB5A8\uC5B4\uC9C8 \uC218 \uBC16\uC5D0 \uC5C6\uC2B5\uB2C8\uB2E4. \uC989, <code>lodash-es</code> \uBAA8\uB4C8\uC744 \uAC00\uC838\uC624\uAC8C \uB41C\uB2E4\uBA74... 600\uAC1C\uC758 HTTP \uC694\uCCAD\uC744 \uC804\uC1A1\uD558\uAC8C \uB418\uB294 \uAC83\uC774\uC8E0.</p><p>\uB9CC\uC57D <code>lodash-es</code> \uBAA8\uB4C8\uC744 \uD558\uB098\uC758 \uBAA8\uB4C8\uB85C \uBC88\uB4E4\uB9C1\uD558\uAC8C \uB41C\uB2E4\uBA74 \uC5B4\uB5BB\uAC8C \uB420\uAE4C\uC694? \uBE0C\uB77C\uC6B0\uC800\uB294 \uB2E8\uC9C0 \uD558\uB098\uC758 HTTP \uC694\uCCAD\uB9CC\uC744 \uC804\uC1A1\uD558\uAC8C \uB429\uB2C8\uB2E4.</p></li></ol><div class="tip custom-block"><p class="custom-block-title">\uCC38\uACE0</p><p>\uB514\uD39C\uB358\uC2DC \uC0AC\uC804 \uBC88\uB4E4\uB9C1 \uAE30\uB2A5\uC740 \uAC1C\uBC1C \uBAA8\uB4DC\uC5D0\uC11C\uB9CC \uC801\uC6A9\uB418\uBA70, <code>esbuild</code>\uB97C \uC774\uC6A9\uD574 \uB514\uD39C\uB358\uC2DC\uB97C ESM\uC73C\uB85C \uBCC0\uD658\uD569\uB2C8\uB2E4. \uD504\uB85C\uB355\uC158 \uBE4C\uB4DC\uC758 \uACBD\uC6B0, \uC774 \uB300\uC2E0 <code>@rollup/plugin-commonjs</code>\uAC00 \uB300\uC2E0 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p></div><h2 id="automatic-dependency-discovery" tabindex="-1">\uC790\uB3D9\uC73C\uB85C \uB514\uD39C\uB358\uC2DC \uD0D0\uC0C9\uD558\uAE30 <a class="header-anchor" href="#automatic-dependency-discovery" aria-hidden="true">#</a></h2><p>\uB9CC\uC57D \uB514\uD39C\uB358\uC2DC\uAC00 \uCE90\uC2DC\uB418\uC9C0 \uC54A\uC558\uB2E4\uBA74 \uC5B4\uB5BB\uAC8C \uB420\uAE4C\uC694? vite\uB294 \uD504\uB85C\uC81D\uD2B8 \uB0B4 \uBAA8\uB4E0 \uC18C\uC2A4 \uCF54\uB4DC\uB97C \uD0D0\uC0C9\uD558\uC5EC \uB514\uD39C\uB358\uC2DC\uB97C \uCC3E\uC544\uB0B8 \uB4A4, \uC0AC\uC804 \uBC88\uB4E4\uB9C1\uC744 \uC774\uC6A9\uD574 Import \uD569\uB2C8\uB2E4(<code>node_modules</code>\uC5D0\uC11C \uB514\uD39C\uB358\uC2DC\uB97C \uAC00\uC838\uC624\uB4EF\uC774 \uB9D0\uC774\uC8E0). \uBB3C\uB860, \uC774 \uC0AC\uC804 \uBC88\uB4E4\uB9C1 \uACFC\uC815\uC740 <code>esbuild</code>\uB97C \uC774\uC6A9\uD558\uAE30\uC5D0 \uBCF4\uD1B5 \uB9E4\uC6B0 \uBE60\uB978 \uC18D\uB3C4\uB85C \uC9C4\uD589\uB429\uB2C8\uB2E4.</p><p>\uC11C\uBC84\uAC00 \uC774\uBBF8 \uC2DC\uC791\uB41C \uC774\uD6C4\uC5D0 \uCE90\uC2DC\uB418\uC9C0 \uC54A\uC740 \uC0C8\uB85C\uC6B4 \uB514\uD39C\uB358\uC2DC\uAC00 \uCD94\uAC00\uB418\uB294 \uACBD\uC6B0\uB77C\uBA74, vite\uB294 \uB514\uD39C\uB358\uC2DC \uBC88\uB4E4\uB9C1 \uACFC\uC815\uC744 \uC7AC\uC2DC\uC791\uD558\uACE0 \uC774\uD6C4 \uD574\uB2F9 \uD398\uC774\uC9C0\uB97C \uB2E4\uC2DC \uBD88\uB7EC\uC624\uAC8C \uB429\uB2C8\uB2E4.</p><h2 id="monorepos-and-linked-dependencies" tabindex="-1">\uBAA8\uB178\uB9AC\uD3EC \uB514\uD39C\uB358\uC2DC <a class="header-anchor" href="#monorepos-and-linked-dependencies" aria-hidden="true">#</a></h2><p>\uBAA8\uB178\uB9AC\uD3EC \uD504\uB85C\uC81D\uD2B8\uC758 \uACBD\uC6B0 \uB514\uD39C\uB358\uC2DC\uB294 \uB3D9\uC77C\uD55C \uD558\uB098\uC758 \uB9AC\uD3EC\uC9C0\uD1A0\uB9AC\uC5D0 \uC5F0\uACB0\uB41C \uD328\uD0A4\uC9C0\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4. Vite\uB294 \uC0AC\uC6A9\uD558\uB294 \uB514\uD39C\uB358\uC2DC\uAC00 <code>node_modules</code>\uC5D0 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB354\uB77C\uB3C4 \uC2A4\uC2A4\uB85C \uD0D0\uC0C9\uD558\uC5EC \uC774\uB97C \uC18C\uC2A4 \uCF54\uB4DC\uB85C \uAC00\uC838\uC62C \uC218 \uC788\uC9C0\uB9CC, \uC774\uB97C \uBC88\uB4E4\uB85C \uBB36\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4. \uADF8\uC800 \uC5F0\uACB0\uB41C \uB514\uD39C\uB358\uC2DC \uBAA9\uB85D\uC744 \uBD84\uC11D\uD560 \uBFD0\uC774\uC8E0.</p><p>\uC774\uB97C \uC704\uD574\uC11C\uB294 \uC5F0\uACB0\uB41C \uB514\uD39C\uB358\uC2DC\uAC00 ESM \uD615\uD0DC\uB85C \uB0B4\uBCF4\uB0B4\uC838\uC57C \uD569\uB2C8\uB2E4. \uB9CC\uC57D \uADF8\uB807\uC9C0 \uC54A\uB2E4\uBA74, \uD574\uB2F9\uB418\uB294 \uB514\uD39C\uB358\uC2DC\uB4E4\uC744 <a href="/config/dep-optimization-options.html#optimizedeps-include"><code>optimizeDeps.include</code></a>\uC640 <a href="/config/build-options.html#build-commonjsoptions"><code>build.commonjsOptions.include</code></a> \uC124\uC815\uC5D0 \uCD94\uAC00\uD574\uC8FC\uC138\uC694.</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">optimizeDeps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">linked-dep</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">commonjsOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">         </span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">linked-dep</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\uC124\uC815 \uAC12 \uBCC0\uACBD \uC774\uD6C4 <code>--force</code> \uD50C\uB798\uADF8\uB97C \uC774\uC6A9\uD574 \uAC1C\uBC1C \uC11C\uBC84\uB97C \uB2E4\uC2DC \uC2DC\uC791\uD558\uAC8C \uB418\uBA74 \uD574\uB2F9 \uB0B4\uC6A9\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4.</p><div class="warning custom-block"><p class="custom-block-title">\uC911\uBCF5 \uC81C\uAC70</p><p>\uB514\uD39C\uB358\uC2DC\uB97C \uCC3E\uB294 \uACFC\uC815\uC758 \uCC28\uC774\uB85C \uC778\uD574 \uC911\uBCF5\uB41C \uB514\uD39C\uB358\uC2DC\uAC00 \uC798\uBABB \uC81C\uAC70\uB418\uC5B4 \uB7F0\uD0C0\uC784\uC5D0\uC11C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB9CC\uC57D \uC774\uB7F0 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uB41C\uB2E4\uBA74 \uC5F0\uACB0\uB41C \uBAA8\uB4E0 \uB514\uD39C\uB358\uC2DC\uC5D0 \uB300\uD574 <code>npm pack</code> \uBA85\uB839\uC744 \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694.</p></div><h2 id="customizing-the-behavior" tabindex="-1">\uB514\uD39C\uB358\uC2DC \uD0D0\uC0C9 \uACFC\uC815 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC988\uD558\uAE30 <a class="header-anchor" href="#customizing-the-behavior" aria-hidden="true">#</a></h2><p>\uAE30\uBCF8\uC801\uC73C\uB85C Vite\uC758 \uC0AC\uC804 \uBC88\uB4E4\uB9C1 \uB420 \uB514\uD39C\uB358\uC2DC \uD0D0\uC0C9\uC740 \uD734\uB9AC\uC2A4\uD2F1(Heuristics) \uAE30\uBC18\uC73C\uB85C \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4. \uBB3C\uB860 \uBAA8\uB4E0 \uC0C1\uD669\uC5D0\uC11C \uC801\uC808\uD558\uAC8C \uB3D9\uC791\uD560 \uAC83\uC774\uB77C\uB294 \uBCF4\uC7A5\uC740 \uC5C6\uC8E0. \uB9CC\uC57D \uD2B9\uC815 \uB514\uD39C\uB358\uC2DC\uB97C \uD3EC\uD568\uC2DC\uD0A4\uAC70\uB098 \uD3EC\uD568\uC2DC\uD0A4\uC9C0 \uC54A\uB3C4\uB85D \uC124\uC815\uD558\uACE0\uC790 \uD55C\uB2E4\uBA74 <a href="/config/dep-optimization-options.html"><code>optimizeDeps</code> \uC635\uC158</a>\uC744 \uC774\uC6A9\uD574\uC8FC\uC138\uC694.</p><p>\uC774 \uC635\uC158\uC740 \uC77C\uBC18\uC801\uC73C\uB85C \uC18C\uC2A4 \uCF54\uB4DC\uC5D0\uC11C \uBC14\uB85C \uAC00\uC838\uC62C \uC218 \uC5C6\uB294 \uD30C\uC77C\uC5D0 \uB300\uD574 <code>optimizeDeps.include</code> \uB610\uB294 <code>optimizeDeps.exclude</code>\uC5D0 \uBA85\uC2DC\uD558\uB294 \uBC29\uC2DD\uC73C\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uD50C\uB7EC\uADF8\uC778\uC744 \uD1B5\uD574 \uC0DD\uC131\uB41C \uC5B4\uB5A4 \uD30C\uC77C\uC744 \uBA85\uC2DC\uC801\uC73C\uB85C Import \uD558\uACE0\uC790 \uD558\uB294 \uACBD\uC6B0\uC640 \uAC19\uC774 \uB9D0\uC774\uC8E0. \uB2E4\uC2DC\uB9D0\uD574 vite\uB294 \uCCAB \uBC88\uC9F8 \uC2A4\uCE90\uB2DD \uC2DC \uBAA8\uB4E0 \uB514\uD39C\uB358\uC2DC\uB97C \uC2A4\uCE94\uD558\uC9C0 \uC54A\uC73C\uBA70, \uC624\uB85C\uC9C0 \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC694\uCCAD\uD588\uC744 \uB54C\uC5D0\uB9CC \uD574\uB2F9 \uB514\uD39C\uB358\uC2DC\uB97C \uBCC0\uD658\uD574 \uAC00\uC838\uC624\uB294 \uBC29\uC2DD\uC73C\uB85C \uB3D9\uC791\uD569\uB2CC\uB2E4. \uBB3C\uB860 \uC11C\uBC84\uAC00 \uC774\uBBF8 \uC2E4\uD589\uB41C \uC774\uD6C4\uC5D0\uB3C4 \uB9D0\uC774\uC8E0.</p><p><code>include</code>\uB098 <code>exclude</code>\uB97C \uC0AC\uC6A9\uD558\uB294 \uC608\uC2DC\uB97C \uB4E4\uC5B4 \uBCFC\uAE4C\uC694? \uB9CC\uC57D \uB514\uD39C\uB358\uC2DC\uAC00 \uB9E4\uC6B0 \uD06C\uAC70\uB098, \uB9CE\uC740 \uBAA8\uB4C8\uC744 \uD3EC\uD568\uD558\uACE0 \uC788\uAC70\uB098, CommonJS \uD3EC\uB9F7\uC73C\uB85C \uB418\uC5B4\uC788\uB294 \uACBD\uC6B0 \uC774 \uB514\uD39C\uB358\uC2DC\uB4E4\uC744 \uC0AC\uC804 \uBC88\uB4E4\uB9C1 \uACFC\uC815\uC5D0 \uD3EC\uD568\uC2DC\uD0AC \uC218 \uC788\uB3C4\uB85D <code>include</code> \uC635\uC158\uC5D0 \uBA85\uC2DC\uD574\uC57C \uD569\uB2C8\uB2E4. \uB9CC\uC57D \uB514\uD39C\uB358\uC2DC\uAC00 \uC791\uAC70\uB098, \uC774\uBBF8 ESM \uC2A4\uD0C0\uC77C\uB85C \uC791\uC131\uB41C \uACBD\uC6B0\uB77C\uBA74 \uAD73\uC774 \uC0AC\uC804 \uBC88\uB4E4\uB9C1 \uACFC\uC815\uC5D0 \uD3EC\uD568\uC2DC\uD0AC \uD544\uC694\uAC00 \uC5C6\uC73C\uB2C8 <code>exclude</code> \uC635\uC158\uC5D0 \uBA85\uC2DC\uD574 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uBC14\uB85C \uBD88\uB7EC\uC62C \uC218 \uC788\uB3C4\uB85D \uC124\uC815\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="caching" tabindex="-1">\uCE90\uC2F1 <a class="header-anchor" href="#caching" aria-hidden="true">#</a></h2><h3 id="file-system-cache" tabindex="-1">\uD30C\uC77C \uC2DC\uC2A4\uD15C \uCE90\uC2DC <a class="header-anchor" href="#file-system-cache" aria-hidden="true">#</a></h3><p>Vite\uB294 \uC0AC\uC804 \uBC88\uB4E4\uB9C1 \uB41C \uB514\uD39C\uB358\uC2DC\uB97C <code>node_modules/.vite</code> \uB514\uB809\uD130\uB9AC \uB0B4\uC5D0 \uCE90\uC2DC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uB97C \uB2E4\uC2DC \uBC88\uB4E4\uB9C1\uD558\uB294 \uACBD\uC6B0\uAC00 \uC788\uB294\uB370, \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.</p><ul><li>\uD328\uD0A4\uC9C0 \uB9E4\uB2C8\uC800\uC758 \uB77D\uD30C\uC77C \uB0B4\uC6A9, \uC608\uB97C \uB4E4\uC5B4 <code>package-lock.json</code>, <code>yarn.lock</code>, <code>pnpm-lock.yaml</code> \uB610\uB294 <code>bun.lockb</code></li><li>\uD3F4\uB354\uC758 \uC218\uC815 \uC2DC\uAC04\uC744 \uD328\uCE58</li><li><code>vite.config.js</code>\uC640 \uAD00\uB828\uB418\uC5B4 \uC788\uB294 \uD544\uB4DC\uAC00 \uBCC0\uACBD\uB418\uC5C8\uC744 \uB54C</li><li><code>NODE_ENV</code> \uAC12</li></ul><p>\uC704\uC758 \uBCC0\uACBD \uC0AC\uD56D\uC774 \uBC1C\uC0DD\uB41C \uACBD\uC6B0 \uC0AC\uC804 \uBC88\uB4E4\uB9C1 \uACFC\uC815\uC744 \uB2E4\uC2DC \uC2DC\uC791\uD558\uAC8C \uB429\uB2C8\uB2E4.</p><p>\uB9CC\uC57D \uAC15\uC81C\uB85C \uB514\uD39C\uB358\uC2DC\uB97C \uB2E4\uC2DC \uBC88\uB4E4\uB9C1\uD574\uC57C \uD558\uB294 \uACBD\uC6B0, \uAC1C\uBC1C \uC11C\uBC84\uB97C <code>--force</code> \uC635\uC158\uACFC \uD568\uAED8 \uC2DC\uC791\uD574\uC8FC\uC138\uC694. \uB610\uB294 \uADF8\uB0E5 <code>node_modules/.vite</code> \uB514\uB809\uD130\uB9AC\uB97C \uC0AD\uC81C\uD574\uC918\uB3C4 \uB429\uB2C8\uB2E4.</p><h3 id="browser-cache" tabindex="-1">\uBE0C\uB77C\uC6B0\uC800 \uCE90\uC2DC <a class="header-anchor" href="#browser-cache" aria-hidden="true">#</a></h3><p>HTTP \uD5E4\uB354\uB97C <code>max-age=31536000,immutable</code>\uACFC \uAC19\uC774 \uB514\uD39C\uB358\uC2DC\uAC00 \uBC18\uB4DC\uC2DC \uCE90\uC2DC\uB418\uB3C4\uB85D \uC124\uC815\uD55C \uACBD\uC6B0*, \uAC1C\uBC1C \uC2DC \uD398\uC774\uC9C0\uB97C \uB2E4\uC2DC \uBD88\uB7EC\uC62C \uB54C\uC758 \uD37C\uD3EC\uBA3C\uC2A4\uB97C \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD55C \uBC88 \uCE90\uC2DC\uB41C \uB514\uD39C\uB358\uC2DC\uB294 \uB2E4\uC2DC \uC11C\uBC84\uC5D0 \uC694\uCCAD\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC774\uC8E0. \uBB3C\uB860 \uCE90\uC2DC\uB41C \uB514\uD39C\uB358\uC2DC\uC640 \uB2E4\uB978 \uBC84\uC804\uC774 \uC124\uCE58\uB41C \uACBD\uC6B0, \uAE30\uC874 \uBC84\uC804\uC740 \uC790\uB3D9\uC73C\uB85C \uBB34\uD6A8\uD654\uB429\uB2C8\uB2E4. \uBB3C\uB860 \uC544\uB798\uC758 \uACFC\uC815\uC744 \uD1B5\uD574 \uBC84\uC804 \uBCC0\uACBD \uC5C6\uC774 \uC9C1\uC811 \uB514\uD39C\uB358\uC2DC\uB97C \uC218\uC815(\uB514\uBC84\uADF8)\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4. (* \uC0AC\uC804 \uBC88\uB4E4\uB9C1 \uB41C \uB514\uD39C\uB358\uC2DC\uC758 \uACBD\uC6B0 \uC774 \uD5E4\uB354\uAC00 \uCD94\uAC00\uB429\uB2C8\uB2E4.)</p><ol><li>\uBE0C\uB77C\uC6B0\uC800\uC758 \uAC1C\uBC1C\uC790 \uB3C4\uAD6C\uB97C \uC774\uC6A9\uD574 \uCE90\uC2DC\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB3C4\uB85D \uC124\uC815\uD569\uB2C8\uB2E4.</li><li>\uB514\uD39C\uB358\uC2DC\uB97C \uB2E4\uC2DC \uBC88\uB4E4\uB9C1\uD558\uB294 <code>--force</code> \uC635\uC158\uACFC \uD568\uAED8 Vite\uC758 \uAC1C\uBC1C \uC11C\uBC84\uB97C \uC7AC\uC2DC\uC791\uD569\uB2C8\uB2E4.</li><li>\uD398\uC774\uC9C0\uB97C \uB2E4\uC2DC \uB85C\uB4DC\uD569\uB2C8\uB2E4.</li></ol>`,29),p=[l];function c(t,i,d,r,D,y){return n(),s("div",null,p)}var m=e(a,[["render",c]]);export{u as __pageData,m as default};

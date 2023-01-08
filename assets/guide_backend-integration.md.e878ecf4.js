import{_ as s,c as n,o as a,a as l}from"./app.75be179e.js";const A=JSON.parse('{"title":"\uBC31\uC5D4\uB4DC \uD504\uB808\uC784\uC6CC\uD06C\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30","description":"","frontmatter":{"title":"\uBC31\uC5D4\uB4DC \uD504\uB808\uC784\uC6CC\uD06C\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30"},"headers":[],"relativePath":"guide/backend-integration.md"}'),o={name:"guide/backend-integration.md"},p=l(`<h1 id="backend-integration" tabindex="-1">\uBC31\uC5D4\uB4DC \uD504\uB808\uC784\uC6CC\uD06C\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30 <a class="header-anchor" href="#backend-integration" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\uCC38\uACE0</p><p>\uAE30\uC874 \uBC31\uC5D4\uB4DC(\uC608 : Rails, Laravel)\uB97C \uC0AC\uC6A9\uD558\uC5EC HTML\uC744 \uC81C\uACF5\uD558\uC9C0\uB9CC \uC5D0\uC14B\uC5D0 Vite\uB97C \uC0AC\uC6A9\uD558\uAE30\uB97C \uC6D0\uD55C\uB2E4\uBA74 <a href="https://github.com/vitejs/awesome-vite#integrations-with-backends" target="_blank" rel="noopener noreferrer">Awesome Vite</a>\uC5D0 \uB098\uC5F4\uB41C \uAE30\uC874\uC758 \uD1B5\uD569\uC744 \uD655\uC778\uD558\uC2ED\uC2DC\uC624.</p><p>\uB9CC\uC57D \uC9C1\uC811 \uC124\uC815\uD558\uAE30\uB97C \uC6D0\uD55C\uB2E4\uBA74, \uC544\uB798\uC758 \uAC00\uC774\uB4DC\uC5D0 \uB530\uB77C \uC218\uB3D9\uC73C\uB85C \uC774\uB97C \uAD6C\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></div><ol><li><p>Vite config \uD30C\uC77C\uC5D0\uC11C \uD56D\uBAA9\uC744 \uAD6C\uC131\uD558\uACE0 \uBE4C\uB4DC \uB9E4\uB2C8\uD398\uC2A4\uD2B8\uB97C \uD65C\uC131\uD654\uD569\uB2C8\uB2E4.</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// vite.config.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// outDir\uC5D0\uC11C manifest.json\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">manifest</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rollupOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// \uAE30\uBCF8 .html \uD56D\uBAA9\uC744 \uB36E\uC5B4\uC501\uB2C8\uB2E4.</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">input</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path/to/main.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\uB9CC\uC57D <a href="/config/build-options.html#build-polyfillmodulepreload">Module Preload Polyfill</a> \uAE30\uB2A5\uC744 \uBE44\uD65C\uC131\uD654\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0, \uC544\uB798\uC640 \uAC19\uC774 \uD3F4\uB9AC\uD544\uC744 \uAC00\uC838\uC640\uC57C\uB9CC \uD569\uB2C8\uB2E4.</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \uC571 \uC9C4\uC785\uC810(Entry)\uC5D0 \uCD94\uAC00\uD569\uB2C8\uB2E4.</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite/modulepreload-polyfill</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div></li><li><p>\uAC1C\uBC1C\uC744 \uC704\uD574 \uC11C\uBC84\uC758 HTML \uD15C\uD50C\uB9BF\uC5D0 \uB2E4\uC74C\uC744 \uC0BD\uC785\uD569\uB2C8\uB2E4(<code>http://localhost:5173</code>\uC744 Vite\uAC00 \uC2E4\uD589\uC911\uC778 \uB85C\uCEEC URL\uB85C \uB300\uCCB4).</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- \uAC1C\uBC1C\uD558\uB294 \uACBD\uC6B0 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:5173/@vite/client</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:5173/main.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\uC774\uD6C4 Vite\uC758 \uC5D0\uC14B\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uB3C4\uB85D \uC544\uB798 \uB450 \uAC00\uC9C0 \uC635\uC158 \uC911 \uD558\uB098\uB97C \uC120\uD0DD\uD574 \uC801\uC6A9\uD574\uC8FC\uC138\uC694.</p><ul><li>\uBC31\uC5D4\uB4DC \uC11C\uBC84\uAC00 Vite \uC11C\uBC84\uC5D0 \uB300\uD55C \uC5D0\uC14B \uC694\uCCAD\uC744 \uD504\uB85D\uC2DC\uD558\uB3C4\uB85D \uC124\uC815</li><li>\uC5D0\uC14B\uC758 URL\uC774 \uC0C1\uB300 \uACBD\uB85C \uB300\uC2E0 \uBC31\uC5D4\uB4DC \uC11C\uBC84 URL\uC744 \uC0AC\uC6A9\uD574 \uAC00\uC838\uC640\uC9C8 \uC218 \uC788\uB3C4\uB85D <a href="/config/server-options.html#server-origin"><code>server.origin</code></a> \uC635\uC158 \uAC12\uC744 \uC124\uC815</li></ul><p>\uC704 \uC635\uC158\uC740 \uC774\uBBF8\uC9C0\uC640 \uAC19\uC740 \uC5D0\uC14B\uC774 \uC815\uC0C1\uC801\uC73C\uB85C \uB85C\uB4DC\uB418\uAE30 \uC704\uD574 \uBC18\uB4DC\uC2DC \uD544\uC694\uD569\uB2C8\uB2E4.</p><p>React\uB97C <code>@vitejs/plugin-react</code>\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0 \uD50C\uB7EC\uADF8\uC778\uC774 \uC0AC\uC6A9\uC790\uAC00 \uC81C\uACF5\uD558\uB294 HTML\uC744 \uC218\uC815\uD560 \uC218 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 \uC704 \uC2A4\uD06C\uB9BD\uD2B8 \uC774\uC804\uC5D0 \uC774\uAC83\uC744 \uCD94\uAC00\uD574\uC57C \uD569\uB2C8\uB2E4.</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> RefreshRuntime </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://localhost:5173/@react-refresh</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  RefreshRuntime</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">injectIntoGlobalHook</span><span style="color:#A6ACCD;">(window) </span></span>
<span class="line"><span style="color:#A6ACCD;">  window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$RefreshReg$</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$RefreshSig$</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> type</span></span>
<span class="line"><span style="color:#A6ACCD;">  window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__vite_plugin_react_preamble_installed__ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></li><li><p>\uD504\uB85C\uB355\uC158 \uBE4C\uB4DC : <code>vite build</code>\uB97C \uC2E4\uD589\uD55C \uD6C4\uC5D0 <code>manifest.json</code>\uD30C\uC77C\uC740 \uB2E4\uB978 \uC5D0\uC14B \uD30C\uC77C\uACFC \uD568\uAED8 \uC0DD\uC131\uB429\uB2C8\uB2E4. \uB9E4\uB2C8\uD398\uC2A4\uD2B8 \uD30C\uC77C \uC608\uC2DC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4.</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">main.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assets/main.4889e940.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">src</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">isEntry</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">dynamicImports</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">views/foo.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assets/main.b82dbe22.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">assets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assets/asset.0ab0f9cd.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">views/foo.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assets/foo.869aea0d.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">src</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">views/foo.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">isDynamicEntry</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">imports</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_shared.83069a53.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">_shared.83069a53.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">file</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assets/shared.83069a53.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>\uB9E4\uB2C8\uD398\uC2A4\uD2B8\uB294 <code>Record&lt;name, chunk&gt;</code> \uAD6C\uC870\uB97C \uAC00\uC9D1\uB2C8\uB2E4.</li><li>\uD56D\uBAA9 \uB610\uB294 \uB3D9\uC801 \uD56D\uBAA9 \uCCAD\uD06C\uC758 \uD0A4\uB294 \uD504\uB85C\uC81D\uD2B8 \uB8E8\uD2B8\uC758 \uC0C1\uB300 src \uACBD\uB85C\uC785\uB2C8\uB2E4.</li><li>\uD56D\uBAA9\uC774 \uC544\uB2CC \uCCAD\uD06C\uC758 \uACBD\uC6B0 \uD0A4\uB294 <code>_</code>\uAC00 \uC811\uB450\uC0AC\uB85C \uBD99\uC740 \uD30C\uC77C\uBA85\uC774 \uAE30\uBCF8 \uC774\uB984\uC774 \uB429\uB2C8\uB2E4.</li><li>\uCCAD\uD06C\uC5D0\uB294 \uC815\uC801 \uBC0F \uB3D9\uC801 \uBD88\uB7EC\uC624\uAE30(\uB458 \uB2E4 \uB9E4\uB2C8\uD398\uC2A4\uD2B8\uC758 \uD574\uB2F9 \uCCAD\uD06C\uC5D0 \uB9E4\uD551\uB418\uB294 \uD0A4)\uC5D0 \uB300\uD55C \uC815\uBCF4\uC640 \uD574\uB2F9 css \uBC0F \uC5D0\uC14B \uD30C\uC77C(\uC788\uB294 \uACBD\uC6B0)\uC774 \uD3EC\uD568\uB429\uB2C8\uB2E4.</li></ul><p>\uD574\uC2DC \uB41C \uD30C\uC77C \uC774\uB984\uC73C\uB85C \uB9C1\uD06C\uB97C \uB80C\uB354\uB9C1\uD558\uAC70\uB098 \uC9C0\uC2DC\uBB38\uC744 \uBBF8\uB9AC \uB85C\uB4DC\uD558\uAE30 \uC704\uD574 \uC774 \uD30C\uC77C\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4(\uCC38\uACE0 : \uC5EC\uAE30\uC5D0 \uC788\uB294 \uAD6C\uBB38\uC740 \uC124\uBA85\uD558\uAE30 \uC704\uD55C \uC6A9\uB3C4\uC774\uBA70 \uC11C\uBC84 \uD15C\uD50C\uB9BF \uC5B8\uC5B4\uB85C \uB300\uCCB4\uD569\uB2C8\uB2E4).</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- \uD504\uB85C\uB355\uC158\uC758 \uACBD\uC6B0 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/assets/{{ manifest[&#39;main.js&#39;].css }}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/assets/{{ manifest[&#39;main.js&#39;].file }}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></li></ol>`,3),t=[p];function e(c,D,r,F,y,i){return a(),n("div",null,t)}var u=s(o,[["render",e]]);export{A as __pageData,u as default};

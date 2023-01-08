import{_ as e,c as t,o,a as r}from"./app.75be179e.js";const g=JSON.parse(`{"title":"Troubleshooting","description":"","frontmatter":{},"headers":[{"level":2,"title":"CLI","slug":"cli"},{"level":3,"title":"Error: Cannot find module 'C:\\\\foo\\\\bar&baz\\\\vite\\\\bin\\\\vite.js'","slug":"error-cannot-find-module-c-foo-bar-baz-vite-bin-vite-js"},{"level":2,"title":"Dev Server","slug":"dev-server"},{"level":3,"title":"Requests are stalled forever","slug":"requests-are-stalled-forever"},{"level":3,"title":"Network requests stop loading","slug":"network-requests-stop-loading"},{"level":3,"title":"431 Request Header Fields Too Large","slug":"_431-request-header-fields-too-large"},{"level":2,"title":"HMR","slug":"hmr"},{"level":3,"title":"Vite detects a file change but the HMR is not working","slug":"vite-detects-a-file-change-but-the-hmr-is-not-working"},{"level":3,"title":"Vite does not detect a file change","slug":"vite-does-not-detect-a-file-change"},{"level":3,"title":"A full reload happens instead of HMR","slug":"a-full-reload-happens-instead-of-hmr"},{"level":3,"title":"High number of HMR updates in console","slug":"high-number-of-hmr-updates-in-console"},{"level":2,"title":"Build","slug":"build"},{"level":3,"title":"Built file does not work because of CORS error","slug":"built-file-does-not-work-because-of-cors-error"},{"level":2,"title":"Others","slug":"others"},{"level":3,"title":"Syntax Error / Type Error happens","slug":"syntax-error-type-error-happens"}],"relativePath":"guide/troubleshooting.md"}`),s={name:"guide/troubleshooting.md"},a=r(`<h1 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a></h1><p>See <a href="https://rollupjs.org/guide/en/#troubleshooting" target="_blank" rel="noopener noreferrer">Rollup&#39;s troubleshooting guide</a> for more information too.</p><p>If the suggestions here don&#39;t work, please try posting questions on <a href="https://github.com/vitejs/vite/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a> or in the <code>#help</code> channel of <a href="https://chat.vitejs.dev" target="_blank" rel="noopener noreferrer">Vite Land Discord</a>.</p><h2 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-hidden="true">#</a></h2><h3 id="error-cannot-find-module-c-foo-bar-baz-vite-bin-vite-js" tabindex="-1"><code>Error: Cannot find module &#39;C:\\foo\\bar&amp;baz\\vite\\bin\\vite.js&#39;</code> <a class="header-anchor" href="#error-cannot-find-module-c-foo-bar-baz-vite-bin-vite-js" aria-hidden="true">#</a></h3><p>The path to your project folder may include <code>&amp;</code>, which doesn&#39;t work with <code>npm</code> on Windows (<a href="https://github.com/npm/cmd-shim/issues/45" target="_blank" rel="noopener noreferrer">npm/cmd-shim#45</a>).</p><p>You will need to either:</p><ul><li>Switch to another package manager (e.g. <code>pnpm</code>, <code>yarn</code>)</li><li>Remove <code>&amp;</code> from the path to your project</li></ul><h2 id="dev-server" tabindex="-1">Dev Server <a class="header-anchor" href="#dev-server" aria-hidden="true">#</a></h2><h3 id="requests-are-stalled-forever" tabindex="-1">Requests are stalled forever <a class="header-anchor" href="#requests-are-stalled-forever" aria-hidden="true">#</a></h3><p>If you are using Linux, file descriptor limits and inotify limits may be causing the issue. As Vite does not bundle most of the files, browsers may request many files which require many file descriptors, going over the limit.</p><p>To solve this:</p><ul><li><p>Increase file descriptor limit by <code>ulimit</code></p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># Check current limit</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">ulimit</span><span style="color:#A6ACCD;"> -Sn</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Change limit (temporary)</span></span>
<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">ulimit</span><span style="color:#A6ACCD;"> -Sn 10000 </span><span style="color:#676E95;font-style:italic;"># You might need to change the hard limit too</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Restart your browser</span></span>
<span class="line"></span></code></pre></div></li><li><p>Increase the following inotify related limits by <code>sysctl</code></p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># Check current limits</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sysctl fs.inotify</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Change limits (temporary)</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo sysctl fs.inotify.max_queued_events=16384</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo sysctl fs.inotify.max_user_instances=8192</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo sysctl fs.inotify.max_user_watches=524288</span></span>
<span class="line"></span></code></pre></div></li></ul><p>If the above steps don&#39;t work, you can try adding <code>DefaultLimitNOFILE=65536</code> as an un-commented config to the following files:</p><ul><li>/etc/systemd/system.conf</li><li>/etc/systemd/user.conf</li></ul><p>Note that these settings persist but a <strong>restart is required</strong>.</p><h3 id="network-requests-stop-loading" tabindex="-1">Network requests stop loading <a class="header-anchor" href="#network-requests-stop-loading" aria-hidden="true">#</a></h3><p>When using a self-signed SSL certificate, Chrome ignores all caching directives and reloads the content. Vite relies on these caching directives.</p><p>To resolve the problem use a trusted SSL cert.</p><p>See: <a href="https://helpx.adobe.com/mt/experience-manager/kb/cache-problems-on-chrome-with-SSL-certificate-errors.html" target="_blank" rel="noopener noreferrer">Cache problems</a>, <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=110649#c8" target="_blank" rel="noopener noreferrer">Chrome issue</a></p><h4 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-hidden="true">#</a></h4><p>You can install a trusted cert via the CLI with this command:</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">security add-trusted-cert -d -r trustRoot -k ~/Library/Keychains/login.keychain-db your-cert.cer</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Or, by importing it into the Keychain Access app and updating the trust of your cert to &quot;Always Trust.&quot;</p><h3 id="_431-request-header-fields-too-large" tabindex="-1">431 Request Header Fields Too Large <a class="header-anchor" href="#_431-request-header-fields-too-large" aria-hidden="true">#</a></h3><p>When the server / WebSocket server receives a large HTTP header, the request will be dropped and the following warning will be shown.</p><blockquote><p>Server responded with status code 431. See <a href="https://vitejs.dev/guide/troubleshooting.html#_431-request-header-fields-too-large" target="_blank" rel="noopener noreferrer">https://vitejs.dev/guide/troubleshooting.html#_431-request-header-fields-too-large</a>.</p></blockquote><p>This is because Node.js limits request header size to mitigate <a href="https://www.cve.org/CVERecord?id=CVE-2018-12121" target="_blank" rel="noopener noreferrer">CVE-2018-12121</a>.</p><p>To avoid this, try to reduce your request header size. For example, if the cookie is long, delete it. Or you can use <a href="https://nodejs.org/api/cli.html#--max-http-header-sizesize" target="_blank" rel="noopener noreferrer"><code>--max-http-header-size</code></a> to change max header size.</p><h2 id="hmr" tabindex="-1">HMR <a class="header-anchor" href="#hmr" aria-hidden="true">#</a></h2><h3 id="vite-detects-a-file-change-but-the-hmr-is-not-working" tabindex="-1">Vite detects a file change but the HMR is not working <a class="header-anchor" href="#vite-detects-a-file-change-but-the-hmr-is-not-working" aria-hidden="true">#</a></h3><p>You may be importing a file with a different case. For example, <code>src/foo.js</code> exists and <code>src/bar.js</code> contains:</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./Foo.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// should be &#39;./foo.js&#39;</span></span>
<span class="line"></span></code></pre></div><p>Related issue: <a href="https://github.com/vitejs/vite/issues/964" target="_blank" rel="noopener noreferrer">#964</a></p><h3 id="vite-does-not-detect-a-file-change" tabindex="-1">Vite does not detect a file change <a class="header-anchor" href="#vite-does-not-detect-a-file-change" aria-hidden="true">#</a></h3><p>If you are running Vite with WSL2, Vite cannot watch file changes in some conditions. See <a href="/config/server-options.html#server-watch"><code>server.watch</code> option</a>.</p><h3 id="a-full-reload-happens-instead-of-hmr" tabindex="-1">A full reload happens instead of HMR <a class="header-anchor" href="#a-full-reload-happens-instead-of-hmr" aria-hidden="true">#</a></h3><p>If HMR is not handled by Vite or a plugin, a full reload will happen.</p><p>Also if there is a dependency loop, a full reload will happen. To solve this, try removing the loop.</p><h3 id="high-number-of-hmr-updates-in-console" tabindex="-1">High number of HMR updates in console <a class="header-anchor" href="#high-number-of-hmr-updates-in-console" aria-hidden="true">#</a></h3><p>This can be caused by a circular dependency. To solve this, try breaking the loop.</p><h2 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-hidden="true">#</a></h2><h3 id="built-file-does-not-work-because-of-cors-error" tabindex="-1">Built file does not work because of CORS error <a class="header-anchor" href="#built-file-does-not-work-because-of-cors-error" aria-hidden="true">#</a></h3><p>If the HTML file output was opened with <code>file</code> protocol, the scripts won&#39;t run with the following error.</p><blockquote><p>Access to script at &#39;file:///foo/bar.js&#39; from origin &#39;null&#39; has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.</p></blockquote><blockquote><p>Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at file:///foo/bar.js. (Reason: CORS request not http).</p></blockquote><p>See <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp" target="_blank" rel="noopener noreferrer">Reason: CORS request not HTTP - HTTP | MDN</a> for more information about why this happens.</p><p>You will need to access the file with <code>http</code> protocol. The easiest way to achieve this is to run <code>npx vite preview</code>.</p><h2 id="others" tabindex="-1">Others <a class="header-anchor" href="#others" aria-hidden="true">#</a></h2><h3 id="syntax-error-type-error-happens" tabindex="-1">Syntax Error / Type Error happens <a class="header-anchor" href="#syntax-error-type-error-happens" aria-hidden="true">#</a></h3><p>Vite cannot handle and does not support code that only runs on non-strict mode (sloppy mode). This is because Vite uses ESM and it is always <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" target="_blank" rel="noopener noreferrer">strict mode</a> inside ESM.</p><p>For example, you might see these errors.</p><blockquote><p>[ERROR] With statements cannot be used with the &quot;esm&quot; output format due to strict mode</p></blockquote><blockquote><p>TypeError: Cannot create property &#39;foo&#39; on boolean &#39;false&#39;</p></blockquote><p>If these code are used inside dependencies, you could use <a href="https://github.com/ds300/patch-package" target="_blank" rel="noopener noreferrer"><code>patch-package</code></a> (or <a href="https://yarnpkg.com/cli/patch" target="_blank" rel="noopener noreferrer"><code>yarn patch</code></a> or <a href="https://pnpm.io/cli/patch" target="_blank" rel="noopener noreferrer"><code>pnpm patch</code></a>) for an escape hatch.</p>`,55),n=[a];function i(l,c,p,d,h,u){return o(),t("div",null,n)}var m=e(s,[["render",i]]);export{g as __pageData,m as default};
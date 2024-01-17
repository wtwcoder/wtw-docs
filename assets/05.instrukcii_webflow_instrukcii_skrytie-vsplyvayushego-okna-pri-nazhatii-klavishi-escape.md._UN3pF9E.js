import{_ as n,c as e,m as s,a as i,t,U as p,o as l}from"./chunks/framework.UPTPDIz5.js";const f=JSON.parse('{"title":"Скрытие всплывающего окна при нажатии  клавиши Escape","description":"","frontmatter":{"title":"Скрытие всплывающего окна при нажатии  клавиши Escape"},"headers":[],"relativePath":"05.instrukcii/webflow/instrukcii/skrytie-vsplyvayushego-okna-pri-nazhatii-klavishi-escape.md","filePath":"05.instrukcii/webflow/instrukcii/skrytie-vsplyvayushego-okna-pri-nazhatii-klavishi-escape.md"}'),c={name:"05.instrukcii/webflow/instrukcii/skrytie-vsplyvayushego-okna-pri-nazhatii-klavishi-escape.md"},o={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=p(`<p>1 вариант</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>jQuery(document).on(&#39;keyup&#39;,function(evt) {</span></span>
<span class="line"><span>    if (evt.keyCode == 27) {</span></span>
<span class="line"><span>       $(&#39;.lbox&#39;).hide();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// .lbox - класс всплывающего окна, которое нужно скрыть</span></span></code></pre></div><p>2 вариант</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>jQuery(document).on(&#39;keyup&#39;,function(evt) {</span></span>
<span class="line"><span>    if (evt.keyCode == 27) {</span></span>
<span class="line"><span>       $(&#39;.lbox-close&#39;).trigger(&#39;click&#39;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// .lbox-close - класс кнопки закрытия всплывающего окна</span></span></code></pre></div>`,4);function h(a,u,k,_,v,y){return l(),e("div",null,[s("h1",o,[i(t(a.$frontmatter.title)+" ",1),r]),d])}const g=n(c,[["render",h]]);export{f as __pageData,g as default};

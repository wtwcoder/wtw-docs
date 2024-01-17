import{_ as n,c as p,m as s,a as t,t as e,U as i,o as l}from"./chunks/framework.UPTPDIz5.js";const v=JSON.parse('{"title":"Как вывести похожие статьи или товары","description":"","frontmatter":{"title":"Как вывести похожие статьи или товары"},"headers":[],"relativePath":"05.instrukcii/wordpress/instrukcii/kak-vyvesti-pokhozhie-stati-ili-tovary.md","filePath":"05.instrukcii/wordpress/instrukcii/kak-vyvesti-pokhozhie-stati-ili-tovary.md"}'),r={name:"05.instrukcii/wordpress/instrukcii/kak-vyvesti-pokhozhie-stati-ili-tovary.md"},o={id:"frontmatter-title",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=i(`<h4 id="для-вывода-похожих-товаров-в-категории" tabindex="-1">Для вывода похожих товаров в категории <a class="header-anchor" href="#для-вывода-похожих-товаров-в-категории" aria-label="Permalink to &quot;Для вывода похожих товаров в категории&quot;">​</a></h4><p>На блок с записями ставим метку wp_query = related</p><p>В папке с темой создаём файл related.php</p><p>В него вставляем этот код:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php $query = new WP_Query(array(</span></span>
<span class="line"><span>&#39;post_type&#39; =&gt; &#39;product&#39;,</span></span>
<span class="line"><span>&#39;orderby&#39; =&gt; &#39;rand&#39;,</span></span>
<span class="line"><span>&#39;posts_per_page&#39; =&gt; 3,</span></span>
<span class="line"><span>&#39;post__not_in&#39; =&gt; array(get_the_ID()),</span></span>
<span class="line"><span>&#39;tax_query&#39; =&gt; array(</span></span>
<span class="line"><span>   array(</span></span>
<span class="line"><span>     &#39;taxonomy&#39; =&gt; &#39;product_cat&#39;,</span></span>
<span class="line"><span>     &#39;field&#39; =&gt; &#39;id&#39;,</span></span>
<span class="line"><span>     &#39;include_children&#39; =&gt; false,</span></span>
<span class="line"><span>     &#39;terms&#39; =&gt; wp_get_object_terms($post-&gt;ID, &#39;product_cat&#39;, array(&#39;fields&#39; =&gt; &#39;ids&#39; )),</span></span>
<span class="line"><span>     &#39;operator&#39; =&gt; &#39;IN&#39;</span></span>
<span class="line"><span>   )</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>));</span></span></code></pre></div><p><strong>Для вывода похожих статей:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?php $query = new WP_Query(array(</span></span>
<span class="line"><span>&#39;post_type&#39; =&gt; &#39;post&#39;,</span></span>
<span class="line"><span>&#39;orderby&#39; =&gt; &#39;rand&#39;,</span></span>
<span class="line"><span>&#39;posts_per_page&#39; =&gt; 3,</span></span>
<span class="line"><span>&#39;post__not_in&#39; =&gt; array(get_the_ID()),</span></span>
<span class="line"><span>&#39;tax_query&#39; =&gt; array(</span></span>
<span class="line"><span>   array(</span></span>
<span class="line"><span>     &#39;taxonomy&#39; =&gt; &#39;category&#39;,</span></span>
<span class="line"><span>     &#39;field&#39; =&gt; &#39;id&#39;,</span></span>
<span class="line"><span>     &#39;include_children&#39; =&gt; false,</span></span>
<span class="line"><span>     &#39;terms&#39; =&gt; wp_get_object_terms($post-&gt;ID, &#39;category&#39;, array(&#39;fields&#39; =&gt; &#39;ids&#39; )),</span></span>
<span class="line"><span>     &#39;operator&#39; =&gt; &#39;IN&#39;</span></span>
<span class="line"><span>   )</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>));</span></span></code></pre></div><p>В этой строке меняем количество записей.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>В этой строке меняем количество записей.</span></span></code></pre></div>`,9);function _(a,g,h,u,y,k){return l(),p("div",null,[s("h1",o,[t(e(a.$frontmatter.title)+" ",1),c]),d])}const b=n(r,[["render",_]]);export{v as __pageData,b as default};

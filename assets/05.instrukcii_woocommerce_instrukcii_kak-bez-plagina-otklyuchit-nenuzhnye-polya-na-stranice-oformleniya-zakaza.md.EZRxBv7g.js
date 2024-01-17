import{_ as a,c as e,m as n,a as i,t as l,U as t,o as p}from"./chunks/framework.UPTPDIz5.js";const h=JSON.parse('{"title":"Как без плагина отключить ненужные поля на странице оформления заказа?","description":"","frontmatter":{"title":"Как без плагина отключить ненужные поля на странице оформления заказа?"},"headers":[],"relativePath":"05.instrukcii/woocommerce/instrukcii/kak-bez-plagina-otklyuchit-nenuzhnye-polya-na-stranice-oformleniya-zakaza.md","filePath":"05.instrukcii/woocommerce/instrukcii/kak-bez-plagina-otklyuchit-nenuzhnye-polya-na-stranice-oformleniya-zakaza.md"}'),c={name:"05.instrukcii/woocommerce/instrukcii/kak-bez-plagina-otklyuchit-nenuzhnye-polya-na-stranice-oformleniya-zakaza.md"},o={id:"frontmatter-title",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=t(`<p>В папке с вашей темой открываем файл custom-functions.php и добавляем следующие строки:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>add_filter( &#39;woocommerce_checkout_fields&#39;, &#39;dibable_checkout_fields&#39;, 25 );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function dibable_checkout_fields( $fields ) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_first_name&#39; ] ); // имя</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_last_name&#39; ] ); // фамилия</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_phone&#39; ] ); // телефон</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_email&#39; ] ); // емайл</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_company&#39; ] ); // компания</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_country&#39; ] ); // страна</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_address_1&#39; ] ); // адрес 1</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_address_2&#39; ] ); // адрес 2</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_city&#39; ] ); // город</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_state&#39; ] ); // регион, штат</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_postcode&#39; ] ); // почтовый индекс</span></span>
<span class="line"><span>	unset( $fields[ &#39;order&#39; ][ &#39;order_comments&#39; ] ); // заметки к заказу</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return $fields;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Замечание</p><p><strong>Обратите внимание!</strong> В перечне unset оставляем только те поля, которые необходимо отключить.</p></div>`,3);function _(s,u,f,m,b,g){return p(),e("div",null,[n("h1",o,[i(l(s.$frontmatter.title)+" ",1),r]),d])}const y=a(c,[["render",_]]);export{h as __pageData,y as default};

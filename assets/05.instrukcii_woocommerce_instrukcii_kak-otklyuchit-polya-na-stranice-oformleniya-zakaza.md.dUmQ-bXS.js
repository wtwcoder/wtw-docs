import{_ as a,c as e,m as s,a as i,t as l,U as t,o as p}from"./chunks/framework.UPTPDIz5.js";const h=JSON.parse('{"title":"Как отключить поля на странице оформления заказа?","description":"","frontmatter":{"title":"Как отключить поля на странице оформления заказа?"},"headers":[],"relativePath":"05.instrukcii/woocommerce/instrukcii/kak-otklyuchit-polya-na-stranice-oformleniya-zakaza.md","filePath":"05.instrukcii/woocommerce/instrukcii/kak-otklyuchit-polya-na-stranice-oformleniya-zakaza.md"}'),c={name:"05.instrukcii/woocommerce/instrukcii/kak-otklyuchit-polya-na-stranice-oformleniya-zakaza.md"},o={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=t(`<p>При настройке страницы оформления заказа для любого магазина требуется использование того или иного перечня полей. По умолчанию в WooCommerce все поля являются обязательными.</p><p>Последнее время поступает много запросов на проблемы с оформлением заказов для WooCoommerce. Как выяснилось это вызвано плагином Checkout Field Editor for WooCommerce.</p><p>Для того чтоб отключить некоторые из полей без использования плагина, необходимо в файл custom-functions.php вставить следующий код:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>add_filter( &#39;woocommerce_checkout_fields&#39;, &#39;wtw_unset_fields&#39;, 25 );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function wtw_unset_fields( $fields ) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// поля помеченные двойной косой чертой остаются обязательными</span></span>
<span class="line"><span>	// unset( $fields[ &#39;billing&#39; ][ &#39;billing_first_name&#39; ] ); // имя</span></span>
<span class="line"><span>	// unset( $fields[ &#39;billing&#39; ][ &#39;billing_last_name&#39; ] ); // фамилия</span></span>
<span class="line"><span>	// unset( $fields[ &#39;billing&#39; ][ &#39;billing_phone&#39; ] ); // телефон</span></span>
<span class="line"><span>	// unset( $fields[ &#39;billing&#39; ][ &#39;billing_email&#39; ] ); // емайл</span></span>
<span class="line"><span>	// unset( $fields[ &#39;billing&#39; ][ &#39;billing_country&#39; ] ); // страна</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// эти поля становятся необзательными</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_company&#39; ] ); // компания</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_address_1&#39; ] ); // адрес 1</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_address_2&#39; ] ); // адрес 2</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_city&#39; ] ); // город</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_state&#39; ] ); // регион, штат</span></span>
<span class="line"><span>	unset( $fields[ &#39;billing&#39; ][ &#39;billing_postcode&#39; ] ); // почтовый индекс</span></span>
<span class="line"><span>	unset( $fields[ &#39;order&#39; ][ &#39;order_comments&#39; ] ); // заметки к заказу</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return $fields;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">Внимание</p><p>Для правильной работы оформления заказа поле billing_country должно быть включено. При этом данное поле, типа select, необходимо добавить и в вашу форму оформления с меткой wp = billing_country. Само поле при необходимости можно скрыть.</p></div><p>Для того чтоб выбрать страну доставки по умолчанию можно в том же файле custom-functions.php добавить следующий код:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>add_filter( &#39;default_checkout_billing_country&#39;, &#39;default_checkout_country&#39; );</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function default_checkout_country( $country ) {</span></span>
<span class="line"><span>  return &#39;RU&#39;; // где RU это сокращенный код страны по умолчанию</span></span>
<span class="line"><span>}</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">Рекомендация</p><p>Полный список кодировок стран можно посмотреть <a href="https://www.scratchcode.io/list-of-country-code-and-state-code-for-woocommerce/" target="_blank" rel="noreferrer">тут</a></p></div>`,8);function u(n,_,m,f,g,k){return p(),e("div",null,[s("h1",o,[i(l(n.$frontmatter.title)+" ",1),r]),d])}const y=a(c,[["render",u]]);export{h as __pageData,y as default};

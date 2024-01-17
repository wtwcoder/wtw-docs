import{_ as e,c as s,m as a,a as i,t as n,U as p,o}from"./chunks/framework.UPTPDIz5.js";const c="/assets/Screenshot_69.e7FfYz71.jpg",r="/assets/Screenshot_71.fF_YfSHO.jpg",_="/assets/Screenshot_70 (1)._h8S3qzV.jpg",z=JSON.parse('{"title":"f_gmap","description":"","frontmatter":{"title":"f_gmap"},"headers":[],"relativePath":"01.wtw-metki/proizvolnye-polya/polya-zapisei/karty/f_gmap.md","filePath":"01.wtw-metki/proizvolnye-polya/polya-zapisei/karty/f_gmap.md"}'),l={name:"01.wtw-metki/proizvolnye-polya/polya-zapisei/karty/f_gmap.md"},f={id:"frontmatter-title",tabindex:"-1"},g=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),m=p('<p>Карта Google.</p><p>Метка ставится на компонент Webflow типа Map. При этом в настройках проекта, во вкладке Интеграции необходимо прописать API ключ доступа к Гугл картам.</p><div align="center"><figure><img src="'+c+'" alt=""><figcaption></figcaption></figure><figure><img src="'+r+'" alt=""><figcaption></figcaption></figure></div><p>В ACF создается поле типа &quot;Расположение на карте&quot;:</p><figure><img src="'+_+`" alt=""><figcaption></figcaption></figure><p>API ключ Гугл карт можно задать для ACF и через функции. Для этого необходимо в файл custom-functions.php вставить следующий код, указав в нем свой ключ:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function my_acf_init() {</span></span>
<span class="line"><span>	acf_update_setting(&#39;google_api_key&#39;, &#39;тут_ваш_ключ&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>add_action(&#39;acf/init&#39;, &#39;my_acf_init&#39;);</span></span></code></pre></div>`,7);function d(t,h,u,y,k,v){return o(),s("div",null,[a("h1",f,[i(n(t.$frontmatter.title)+" ",1),g]),m])}const b=e(l,[["render",d]]);export{z as __pageData,b as default};
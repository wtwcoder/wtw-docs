import{_ as a,c as i,m as e,a as s,t as p,U as o,o as r}from"./chunks/framework.UPTPDIz5.js";const n="/assets/Screenshot_54 (1).HI8rRw32.jpg",b=JSON.parse('{"title":"wp_paginate","description":"","frontmatter":{"title":"wp_paginate"},"headers":[],"relativePath":"01.wtw-metki/zapisi/spiski-zapisei/wp_paginate.md","filePath":"01.wtw-metki/zapisi/spiski-zapisei/wp_paginate.md"}'),c={name:"01.wtw-metki/zapisi/spiski-zapisei/wp_paginate.md"},l={id:"frontmatter-title",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=o('<div class="tip custom-block"><p class="custom-block-title">Инструкция</p><p>wp_paginate = параметры</p></div><p>Выводит постраничную навигацию на страницах архивов.</p><p>В качестве параметров принимает следующие значения:</p><ul><li><code>mid_size=3</code> — cколько номеров показывать до и после текущего номера <br><mark style="background-color:yellow;">1 ... 2 3 [4] 5 6 ... 99</mark></li><li><code>end_size=2</code> — cколько ссылок показать с начала и конца <br><mark style="background-color:yellow;">&quot;1 2 ... [4] ... 8 9&quot;</mark></li><li><code>prev_next=1</code> — параметр со значением 1 указывает отображение кнопок &quot;Вперед/Назад&quot; для пагинации. Параметр со значением 0 отключает их.</li><li><code>show_all=1</code> — 1 будут показаны все страницы участвующие в пагинации.<br> 0 - (по умолчанию) показывается только несколько ссылок спереди и сзади номера текущей страницы.</li><li><code>prev_text=Назад</code> — параметр указывает текст кнопки предыдущей страницы пагинации</li><li><code>next_text=Вперед</code> — параметр указывает текст кнопки следующей страницы пагинации</li></ul><p>Полный запрос, с использованием данной метки, может выглядеть так:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wp_paginate=mid_size=1&amp;end_size=1&amp;prev_next=1&amp;prev_text=Ранее&amp;next_text=Далее</span></span></code></pre></div><figure><img src="'+n+'" alt=""><figcaption></figcaption></figure><p>Подробнее о функции, на основе которой работает метка, можно прочитать тут:<br><a href="https://wp-kama.ru/function/paginate_links" target="_blank" rel="noreferrer">https://wp-kama.ru/function/paginate_links</a></p>',8);function m(t,g,u,k,h,f){return r(),i("div",null,[e("h1",l,[s(p(t.$frontmatter.title)+" ",1),_]),d])}const v=a(c,[["render",m]]);export{b as __pageData,v as default};

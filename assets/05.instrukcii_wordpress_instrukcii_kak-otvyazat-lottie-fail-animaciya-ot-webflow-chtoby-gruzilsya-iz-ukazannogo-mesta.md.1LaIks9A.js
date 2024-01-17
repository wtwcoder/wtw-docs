import{_ as o,c as e,m as t,a,t as l,U as s,o as r}from"./chunks/framework.UPTPDIz5.js";const n="/assets/photo_2023-09-07_12-29-57.g9zUTLV4.jpg",y=JSON.parse('{"title":"Как отвязать lottie файл (анимация) от Webflow, чтобы грузился из указанного места","description":"","frontmatter":{"title":"Как отвязать lottie файл (анимация) от Webflow, чтобы грузился из указанного места"},"headers":[],"relativePath":"05.instrukcii/wordpress/instrukcii/kak-otvyazat-lottie-fail-animaciya-ot-webflow-chtoby-gruzilsya-iz-ukazannogo-mesta.md","filePath":"05.instrukcii/wordpress/instrukcii/kak-otvyazat-lottie-fail-animaciya-ot-webflow-chtoby-gruzilsya-iz-ukazannogo-mesta.md"}'),c={name:"05.instrukcii/wordpress/instrukcii/kak-otvyazat-lottie-fail-animaciya-ot-webflow-chtoby-gruzilsya-iz-ukazannogo-mesta.md"},_={id:"frontmatter-title",tabindex:"-1"},p=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),m=s('<p>Тут есть как минимум два пути, начнем конечно с самого простого.</p><div class="tip custom-block"><p class="custom-block-title">Инструкция</p><p>Вариант 1 (простой)</p></div><ol><li>Ставим на сам lottie метку <a href="./../../../wtw-metki/proizvolnye-polya/polya-zapisei/ssylki/f_lottie.html">f_lottie</a> (или o_lottie)</li><li>Включаем поддержку json в конфигураторе</li></ol><figure><img src="'+n+'" alt=""><figcaption></figcaption></figure><p>Далее в подключенном поле типа файл, выбираем необходимый lottie. На этом все.</p><div class="tip custom-block"><p class="custom-block-title">Инструкция</p><p>Вариант 2 (сложный путь)</p></div><ol><li>В Wordpress заходим в папку с темой (тема доступна по адресу имя_вашего_домена/public_html/wp-content/themes/имя_вашей_темы/). Зайти можно либо через плагины типа WPID, либо через любой фтп или файловый менеджер на хостинге и т.д. В папку с темой загружаем наш lottie файл, например burger.json. Важно чтобы это был тот самый файл, который вы используете для анимации в webflow, иначе тайминги могут сбиться, если анимация не зациклена.</li><li>Создаем текстовое поле. Поскольку, наибольшая среда использования lottie анимаций это меню, доступное на всех страницах сайта, то создадим его в опциях.</li><li>В созданное поле вставляем ссылку на наш файл, ссылка будет иметь вид: /wp-content/themes/имя_вашей_темы/имя_файла.json</li><li>На сам lottie файл в webflow ставим метку wp_set = data-src: (где field_name, это имя созданного в шаге 2 поля, а второй параметр &#39;options&#39; указывает на принадлежность поля к опциям сайта)</li><li>Публикуем и обновляем конвертером сайт. Профит. Теперь файл будет подгружаться с вашей темы и не зависеть от работы webflow.</li></ol>',7);function f(i,d,k,u,w,b){return r(),e("div",null,[t("h1",_,[a(l(i.$frontmatter.title)+" ",1),p]),m])}const z=o(c,[["render",f]]);export{y as __pageData,z as default};

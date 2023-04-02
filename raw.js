function clog(m,c){console.log('%cFoxDB','color: white; background: ' + c + '; padding: 2px 6px; border-radius: 3px; margin-right: 5px;',m)};
s=document.createElement('script');
s.innerHTML='function fd_tog(s){s.lastElementChild.style.width="0px",s.classList.contains("fd-dis")&&setTimeout(function(){s.classList.add("fd-en"),s.classList.remove("fd-dis"),s.lastElementChild.style.width="18px"},200),s.classList.contains("fd-en")&&setTimeout(function(){s.lastElementChild.style.width="18px",s.classList.remove("fd-en"),s.classList.add("fd-dis")},200)}';
document.head.appendChild(s);
d=document.createElement('div');
d.id="foxdb";
d.innerHTML='<div id=fd-banner> <svg style=cursor:pointer onclick=\'window.open(\"https:\/\/itsfoxdev.github.io\",\"_blank\").focus()\' stroke=none fill=#000 fill-rule=evenodd xmlns=http:\/\/www.w3.org\/2000\/svg width=32 height=32 viewBox=\"0 0 720 718\" version=1.1> <path d=\"M 129 1.036 C 63.549 6.365, 11.141 55.884, 1.505 121.500 L 0.037 131.500 0.037 359 L 0.037 586.500 1.505 596.500 C 9.327 649.767, 44.593 692.368, 95.500 710.044 C 115.352 716.937, 127.522 717.945, 191.250 717.976 L 240 718 240.146 664.750 C 240.226 635.462, 240.564 512.494, 240.896 391.486 L 241.500 171.473 429.204 260.333 L 616.908 349.194 667.204 325.977 C 694.867 313.208, 718.068 302.539, 718.763 302.268 C 719.768 301.877, 719.972 309.032, 719.763 337.398 L 719.500 373.021 669.551 397.510 C 642.079 410.980, 618.926 422, 618.100 422 C 617.274 422, 546.812 388.925, 461.517 348.500 C 376.222 308.075, 306.072 275, 305.627 275 C 304.783 275, 305.585 591.455, 306.633 671.750 L 307.237 718 442.368 717.976 C 577.300 717.953, 593.437 717.613, 608.500 714.484 C 665.774 702.584, 712.896 651.751, 718.593 595.722 C 718.972 591.994, 719.669 588.705, 720.141 588.413 C 720.616 588.119, 720.933 485.077, 720.850 357.691 C 720.767 231.086, 720.420 129.525, 720.079 132 L 719.458 136.500 718.823 128 C 714.198 66.087, 667.031 15.096, 602.500 2.244 L 594.500 0.651 366.500 0.456 C 241.100 0.350, 134.225 0.610, 129 1.036 M 0.492 359 C 0.492 485.775, 0.608 537.637, 0.750 474.250 C 0.892 410.862, 0.892 307.137, 0.750 243.750 C 0.608 180.362, 0.492 232.225, 0.492 359 M 482 543.368 C 470.478 546.736, 462.933 553.549, 458.870 564.254 L 456.500 570.500 456.500 606.500 L 456.500 642.500 459.125 648 C 472.264 675.524, 510.268 673.517, 523.048 644.623 L 525.072 640.048 524.786 604.274 L 524.500 568.500 521.501 562.581 C 513.286 546.367, 497.689 538.781, 482 543.368\"\/> <\/svg> <span style=\"font-family: \'Inter\';font-weight: 600;color: black;margin-left: 5px;font-size: 25px;\" id=\"title\">dash.<\/span><\/div> <div id=fd-top style=overflow:hidden> <button class=\"fd-but fd-top fd-dis\" id=fd-edit onclick=\'fd_tog(this),function(t,e,n,o){o=\"true\"==(n=t.body)[e],n[e]=o?\"false\":\"true\",t.designMode=o?\"off\":\"on\"}(document,\"contentEditable\"),document.getElementById(\"fd-top\").contentEditable=\"false\"\'><i class=\"fd-txt fat fa-pencil\"><\/i> <div><\/div> <\/button> <button class=\"fd-but fd-top fd-dis\" id=fd-blur onclick=\'fd_tog(this);var blr=document.getElementById(\"antiblur\");if(void 0!==blr&&null!=blr)blr.remove();else{var blrc=document.createElement(\"style\");blrc.id=\"antiblur\",blrc.innerHTML=\"*{filter:none !important;backdrop-filter:none !important}\",document.head.appendChild(blrc)}\'><i class=\"fd-txt fat fa-droplet-slash\"><\/i> <div><\/div> <\/button> <button class=\"fd-but fd-top fd-dis\" id=fd-scrl onclick=\'function scrolldown(){window.scrollBy(0,speed)}fd_tog(this),this.classList.contains(\"fd-en\")?clearInterval(scroller):scroller=setInterval(scrolldown,10)\'><i class=\"fd-txt fat fa-down\"><\/i> <div><\/div> <\/button> <\/div> <div id=fd-btns> <button onclick=\'document.title=prompt(\"\\u{1F3F7}\\u{FE0F} Enter a new page title\")\' class=fd-but><i class=\"fal fa-tag\"><\/i> Rename tab<\/button> <button onclick=\'for(var m=0;;m++)try{document.querySelector(\"link[rel~=&#39;icon&#39;]\").remove()}catch(e){break}link=document.createElement(\"link\"),link.rel=\"icon\",b=prompt(\"\\uD83C\\uDF10  What website icon do you want to use?\"),link.href=\"https:\/\/www.google.com\/s2\/favicons?domain=\"+b+\"&sz=64\",document.head.appendChild(link)\' class=fd-but><i class=\"fal fa-image\"><\/i> Change page icon<\/button> <button onclick=\"eval(prompt(\'\\uD83D\\uDCCB Paste your JS code here\', \'\'));\" class=fd-but><i class=\"fal fa-clipboard\"><\/i> Run JS code<\/button> <button onclick=\'function checkFrames(e){try{for(var c=e.document.getElementsByTagName(\"input\"),t=0;t<c.length;t++)c[t].type&&\"checkbox\"==c[t].type&&(c[t].checked=!c[t].checked)}catch(e){}if(e.frames&&e.frames.length>0)for(t=0;t<e.frames.length;t++){checkFrames(e.frames[t])}}checkFrames(window)\' class=fd-but><i class=\"fal fa-square-check\"><\/i> Check all boxes<\/button> <button onclick=\'var url=\"http:\/\/chart.apis.google.com\/chart?cht=qr&chs=300x300&chl=\"+encodeURIComponent(location.href);w=open(url,\"w\",\"location=no,status=yes,menubar=no,scrollbars=no,resizable=yes,width=500,height=500,modal=yes,dependent=yes\"),w?setTimeout(\"w.focus()\",1e3):location=url\' class=fd-but><i class=\"fal fa-qrcode\"><\/i> Make QR Code<\/button> <button onclick=\'var s,F,j,f,i;for(s=\"\",F=document.forms,j=0;j<F.length;++j)for(f=F[j],i=0;i<f.length;++i)\"password\"==f[i].type&&(s+=f[i].value);s?alert(\"\\uD83D\\uDD11 Found passwords: \"+s):alert(\"\\u274C No passwords found :(\")\' class=fd-but><i class=\"fal fa-key\"><\/i> Reveal passwords<\/button> <button onclick=\'hb=prompt(\"\\uD83D\\uDD17 URL: https:\/\/v.gd\/___\",\"\"),curl=encodeURIComponent(window.location.href),furl=\"https:\/\/v.gd\/create.php?url=\"+curl+\"&shorturl=\"+hb+\"&logstats=1\",window.open(furl,\"_blank\").focus()\' class=fd-but><i class=\"fal fa-scissors\"><\/i> Shorten page URL<\/button> <button onclick=\'function getSelectedText(){var e=\"\";return window.getSelection?e=window.getSelection().toString():document.selection&&\"Control\"!=document.selection.type&&(e=document.selection.createRange().text),e}ptxt=prompt(\"\\uD83D\\uDD0A Enter text to speak\"),ptxt?msgt=ptxt:msgt=getSelectedText();var msg=new SpeechSynthesisUtterance;msg.text=msgt,msg.rate=.9,window.speechSynthesis.speak(msg)\' class=fd-but><i class=\"fal fa-volume\"><\/i> Text To Speech<\/button> <button onclick=\'___rotate=window.___rotate||0,___rotate++,___rotate>3&&(___rotate=0);var t=document.documentElement,o=t.clientWidth,e=t.clientHeight,r=document.body,i=r.style;0===___rotate?(i.transform=\"\",i.position=\"\",i.width=\"\",i.height=\"\",i.left=\"\",i.top=\"\"):1===___rotate?(i.transform=\"rotate(90deg)\",i.transformOrigin=\"top left\",i.position=\"absolute\",i.width=e+\"px\",i.height=o+\"px\",i.left=\"100%\",i.top=\"0\"):2===___rotate?(i.transform=\"rotate(180deg)\",i.transformOrigin=\"top left\",i.position=\"absolute\",i.width=o+\"px\",i.height=e+\"px\",i.left=\"100%\",i.top=\"100%\"):3===___rotate&&(i.transform=\"rotate(270deg)\",i.transformOrigin=\"top left\",i.position=\"absolute\",i.width=e+\"px\",i.height=o+\"px\",i.left=\"0\",i.top=\"100%\")\' class=fd-but><i class=\"fal fa-arrow-rotate-right\"><\/i> Rotate page<\/button> <div class=fd-subcat> <span class=\"fd-txt fd-sct\"><i class=\"far fa-circle-info\"><\/i> Get page info<\/span> <div class=fd-scc> <button onclick=\'if(t=window.performance&&performance.timing,!t)return void alert(\"\\u274C Unable to get page load time :(\");l=(t.loadEventEnd-t.navigationStart)\/1e3,alert(\"\\u23F1\\uFE0F This page loaded in \"+l+\" seconds\")\' class=fd-but><i class=\"fal fa-stopwatch\"><\/i> Load time<\/button> <button onclick=\'alert(\"\\uD83D\\uDCBB Your window size is: \"+window.innerWidth+\" x \"+window.innerHeight)\' class=fd-but><i class=\"fal fa-window\"><\/i> Size<\/button> <button onclick=\'location.href=\"https:\/\/web.archive.org\/web\/*\/\"+escape(location.href)\' class=fd-but><i class=\"fal fa-clock-rotate-left\"><\/i> History<\/button> <button onclick=\'alert(\"\\uD83D\\uDC64 Your user agent is: \"+navigator.userAgent)\' class=fd-but><i class=\"fal fa-user\"><\/i> UA string<\/button> <\/div> <\/div> <div class=fd-subcat> <span class=\"fd-txt fd-sct\"><i class=\"far fa-text\"><\/i> Selected text<\/span> <div class=fd-scc> <button onclick=\'var selection=window.getSelection().toString();selection&&alert(\"\\uD83D\\uDD22 Your text has \"+selection.split(\" \").length+\" words\")\' class=fd-but><i class=\"fal fa-tally\"><\/i> Word ct.<\/button> <button onclick=\'var sel,range;if(window.getSelection){if((sel=window.getSelection()).getRangeAt&&sel.rangeCount){range=window.getSelection().getRangeAt(0),console.log(range);var e=\"<span style=&#39;color:black !important;background-color:black !important;user-select:none !important;cursor: not-allowed !important;&#39;>\"+range+\"<\/span>\";range.deleteContents();var n=document.createElement(\"div\");n.innerHTML=e;for(var node,t,a=document.createDocumentFragment();node=n.firstChild;)t=a.appendChild(node);range.insertNode(a)}}else document.selection&&document.selection.createRange&&((range=document.selection.createRange()).collapse(!1),range.pasteHTML(e))\' class=fd-but><i class=\"fal fa-eye-slash\"><\/i> Blackout<\/button> <button onclick=\'function getSelectedText(){var e=\"\";return window.getSelection?e=window.getSelection().toString():document.selection&&\"Control\"!=document.selection.type&&(e=document.selection.createRange().text),e}var msg=new SpeechSynthesisUtterance;msg.text=getSelectedText(),msg.rate=.9,window.speechSynthesis.speak(msg)\' class=fd-but><i class=\"fal fa-volume\"><\/i> Speak<\/button> <button onclick=\'var sel,range;if(window.getSelection){if((sel=window.getSelection()).getRangeAt&&sel.rangeCount){range=window.getSelection().getRangeAt(0),console.log(range);var e=\"<span style=&#39;display:none !important;&#39;>\"+range+\"<\/span>\";range.deleteContents();var n=document.createElement(\"div\");n.innerHTML=e;for(var node,t,a=document.createDocumentFragment();node=n.firstChild;)t=a.appendChild(node);range.insertNode(a)}}else document.selection&&document.selection.createRange&&((range=document.selection.createRange()).collapse(!1),range.pasteHTML(e))\' class=fd-but><i class=\"fal fa-delete-left\"><\/i> Remove<\/button> <\/div> <\/div> <div class=fd-subcat> <span class=\"fd-txt fd-sct\"><i class=\"far fa-face-smile\"><\/i> Fun<\/span> <div class=fd-scc> <button onclick=\"site=prompt(&#34;\\uD83C\\uDF10 What site do you want to visit? (No https:\/\/)&#34;),(e=document.createElement(&#34;iframe&#34;)).src=&#34;https:\/\/&#34;+site,e.id=&#34;fd-embed&#34;,e.style.cssText=&#34;width: calc(100vw - 100px);position: fixed;z-index: 999;height: calc(100vh - 100px); z-index:9998 position: fixed; inset: 50px; border-radius: 10px; border: none;&#34;,document.body.appendChild(e),(c=document.createElement(&#34;button&#34;)).style.cssText=&#34;width: 25px; height: 25px;z-index:9999; display: flex; place-content: center; position: fixed; top: 37.5px; right: 37.5px; border-radius: 5px; border: 0px; background: white; color: black; cursor: pointer;&#34;,c.innerHTML=&#34;<svg xmlns=\'http:\/\/www.w3.org\/2000\/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><line x1=\'18\' y1=\'6\' x2=\'6\' y2=\'18\'><\/line><line x1=\'6\' y1=\'6\' x2=\'18\' y2=\'18\'><\/line><\/svg>&#34;,c.onclick=function(){document.getElementById(&#34;fd-embed&#34;).remove(),this.remove()},document.body.appendChild(c)\" class=fd-but><i class=\"fal fa-browsers\"><\/i> Embed<\/button> <button onclick=\"let einv=document.getElementById(\'fd-invert\');if(!void 0==einv){einv.remove();}else{let e=document.createElement(\'div\');e.style.cssText=\'z-index:99999999999999;pointer-events:none;position:fixed;width:100vw;height:100vh;inset:0px;backdrop-filter:invert(1);\',e.id=\'fd-invert\',document.body.appendChild(e)}\" class=fd-but><i class=\"fal fa-circle-half-stroke\"><\/i> Invert<\/button> <button onclick=\'document.body.classList.toggle(\"fa-bounce\")\' class=fd-but><i class=\"fal fa-basketball\"><\/i> Bounce<\/button> <button onclick=\'document.body.classList.toggle(\"fa-shake\")\' class=fd-but><i class=\"fal fa-salt-shaker\"><\/i> Shake<\/button> <\/div> <\/div> <\/div> <div id=fd-btm> <button style=\"margin:5px 0 0 5px\" id=fd-col onclick=\'db=document.getElementById(\"foxdb\"),db.classList.add(\"fd-min\"),db.style.width=\"38px\",document.getElementById(\"fd-rem\").innerHTML=\"<i class=&#39;fal fa-xmark&#39;><\/i>\",t=document.getElementById(\"fd-top\"),t.style.height=\"0px\",i=document.getElementById(\"fd-banner\"),i.style.height=\"0px\",i.style.margin=\"0px\",t.style.padding=\"0px\",b=document.getElementById(\"fd-btns\"),b.style.height=\"0px\",b.style.padding=\"0px\",this.style.display=\"none\",ex=document.getElementById(\"fd-exp\"),ex.style.display=\"inline-block\",ex.style.setProperty(\"width\",\"28px\",\"important\")\' class=\"fd-btm fd-but\"><i class=\"fal fa-arrows-to-line\"><\/i> Shrink<\/button> <button style=display:none;margin-right:0!important id=fd-exp onclick=\'db=document.getElementById(\"foxdb\"),db.classList.remove(\"fd-min\"),db.style.width=null,r=document.getElementById(\"fd-rem\"),r.style.width=null,r.innerHTML=\"<i class=&#39;fal fa-xmark&#39;><\/i> Close\",t=document.getElementById(\"fd-top\"),t.style.height=null,i=document.getElementById(\"fd-banner\"),i.style.height=null,i.style.margin=null,t.style.padding=null,b=document.getElementById(\"fd-btns\"),b.style.height=null,b.style.padding=null,this.style.display=\"none\",document.getElementById(\"fd-col\").style.display=\"inline-block\"\' class=\"fd-btm fd-but\"><i class=\"fal fa-arrows-from-line\"><\/i><\/button> <button style=\"margin:5px 0 0 5px\" id=fd-rem onclick=\'d=document.getElementById(\"foxdb\"),d.style.height=\"0px\",d.style.padding=\"0px\",setTimeout((function(){d.remove()}),300)\' class=\"fd-btm fd-but\"><i class=\"fal fa-xmark\"><\/i> Close<\/button> <\/div>';
document.body.appendChild(d);
c=document.createElement('style');
c.innerHTML='@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;900&display=swap);@import url(https://cdn.jsdelivr.net/gh/ItsFoxDev/fa-turbo/css/all.min.css);.fd-but,.fd-sct{font-family:inter}#fd-banner,#fd-btm,#fd-top,.fd-top{align-items:center;display:flex}#foxdb{height: 0px;z-index:8192;width:200px;backdrop-filter:blur(10px);background:rgba(255,255,255,.8);border-radius:7px;border:1px solid rgba(0,0,0,.2)!important;position:fixed;padding-bottom:5px;overflow:hidden;transition:padding .3s,height .3s,width .3s;top:10px;left:10px}#foxdb *{user-select:none;box-sizing:border-box;}#foxdb.fd-min #fd-exp{margin:5px 0 0 5px}#foxdb.fd-min{height:33px !important;}#foxdb.fd-min:hover{width:71px!important}#foxdb.fd-min #fd-rem{margin-top:5px;width:0;overflow:hidden;transition:width .3s,padding .3s,border .3s;padding:0;border:0 solid rgba(0,0,0,.1)}#foxdb.fd-min:hover #fd-rem{width:28px!important;padding:5px;border:1px solid rgba(0,0,0,.1)}#fd-banner{height:32px;margin-top:5px;justify-content:center;overflow:hidden}@media (prefers-color-scheme:dark){#title{color:white !important;}#foxdb{background:rgba(0,0,0,.8)!important;border:1px solid rgba(255,255,255,.2)!important}.fd-but{font-size: 13px;background:rgba(0,0,0,.3)!important;border:1px solid rgba(255,255,255,.1)!important;color:#fff}.fd-but:hover{background:rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.3)!important}.fd-txt{color:#fff!important}#fd-banner svg{fill:white}#fd-btns::-webkit-scrollbar-thumb{background:rgba(255,255,255,.3)!important}}.fd-top{width:60px;height:35px;justify-content:center;flex-wrap:wrap;padding:1px 20px}.fd-sct,.fd-top i{display:inline-block}.fd-but{border:1px solid rgba(0,0,0,.1);cursor:pointer;border-radius:5px;background:rgba(245,245,245,.8);transition:background-color .1s,color .1s,border .1s}.fd-but:hover{background:rgba(240,240,240,.9);border:1px solid rgba(0,0,0,.2)}.fd-top i{font-size:18px;margin-top:3px;width:25px;height:18px;color:#000}.fd-top div{width:18px;height:3px;display:block;border-radius:3px;transition:width .2s}.fd-dis.fd-top div{background:#e01414;box-shadow:0 0 15px 0 #e01414}.fd-en.fd-top div{background:#1fb514;box-shadow:0 0 15px 0 #1fb514}#fd-top{padding:5px;gap:5px}#fd-btns{padding:0 5px 5px;height:200px;overflow-x:hidden;overflow-y:scroll}#fd-btns button.fd-but{width:190px;text-align:left;padding:5px;margin-bottom:5px}#fd-btns button.fd-but:last-of-type{margin-bottom:unset!important}#fd-btns i{width:15px;text-align:center}#fd-btns::-webkit-scrollbar{width:5px;height:5px}#fd-btns::-webkit-scrollbar-button{width:6px;height:6px}#fd-btns::-webkit-scrollbar-thumb{background:rgba(0,0,0,.3);border-radius:23px}#fd-btns::-webkit-scrollbar-track{background:0 0;border-radius:50%}#fd-btns::-webkit-scrollbar-corner{background:0 0}.fd-sct{text-transform:uppercase;font-weight:400;font-size:12px;text-align:center;width:160px;margin:0 12.5px;padding-top:5px;border-top:1px solid rgba(0,0,0,.3);opacity:.8;color:rgb(0,0,0)}.fd-subcat{margin-top:6px}.fd-subcat button.fd-but{width:92.5px!important;font-size:13px;margin-bottom:0!important}.fd-scc{display:grid;grid-template-columns:92.5px 92.5px;grid-column-gap:5px;grid-row-gap:5px}#fd-btns,#fd-top{transition:height .3s,width .3s,margin-bottom .3s}button.fd-but.fd-btm{padding:5px;width:92.5px}';
document.head.appendChild(c);
clog('Loading base','darkorange');
db = document.getElementById('foxdb');
db.style.display="none";
setTimeout(function(){db.style.display=null;},490);
setTimeout(function(){db.style.display=null;db.style.height="320px";},500);
speed=1;
document.getElementById('fd-scrl').oncontextmenu=function(){return .999===speed?(speed=1,alert('Scroll speed: \uD83D\uDFE9\u2B1B\u2B1B\u2B1B'),!1):1===speed?(speed=2,alert('Scroll speed: \uD83D\uDFE9\uD83D\uDFE8\u2B1B\u2B1B'),!1):2===speed?(speed=5,alert('Scroll speed: \uD83D\uDFE9\uD83D\uDFE8\uD83D\uDFE7\u2B1B'),!1):5===speed?(speed=10,alert('Scroll speed: \uD83D\uDFE9\uD83D\uDFE8\uD83D\uDFE7\uD83D\uDFE5'),!1):10===speed?(speed=1,alert('Scroll speed: \uD83D\uDFE9\u2B1B\u2B1B\u2B1B'),!1):void 0};

btns=document.querySelectorAll('#foxdb button[onclick]');
for (let i = 0; i < btns.length; i++) {
    e=btns[i];
    o=e.getAttribute('onclick');
    clog('Setting object #'+i,'purple');
    eval('e.addEventListener("click", function(){console.log("Running script");' + o + '})');
    e.removeAttribute('onclick');
}
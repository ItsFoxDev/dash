/* This is in a separate file to make edits to the HTML easier :) */
document.getElementById('bm').href="javascript:(function()%7Bfunction%20clog(m%2Cc)%7Bconsole.log('%25cFoxDB'%2C'color%3A%20white%3B%20background%3A%20'%20%2B%20c%20%2B%20'%3B%20padding%3A%202px%206px%3B%20border-radius%3A%203px%3B%20margin-right%3A%205px%3B'%2Cm)%7D%3B%0As%3Ddocument.createElement('script')%3B%0As.innerHTML%3D'function%20fd_tog(s)%7Bs.lastElementChild.style.width%3D%220px%22%2Cs.classList.contains(%22fd-dis%22)%26%26setTimeout(function()%7Bs.classList.add(%22fd-en%22)%2Cs.classList.remove(%22fd-dis%22)%2Cs.lastElementChild.style.width%3D%2218px%22%7D%2C200)%2Cs.classList.contains(%22fd-en%22)%26%26setTimeout(function()%7Bs.lastElementChild.style.width%3D%2218px%22%2Cs.classList.remove(%22fd-en%22)%2Cs.classList.add(%22fd-dis%22)%7D%2C200)%7D'%3B%0Adocument.head.appendChild(s)%3B%0Ad%3Ddocument.createElement('div')%3B%0Ad.id%3D%22foxdb%22%3B%0Ad.innerHTML%3D'%3Cdiv%20id%3Dfd-banner%3E%20%3Csvg%20style%3Dcursor%3Apointer%20onclick%3D%5C'window.open(%5C%22https%3A%5C%2F%5C%2Fitsfoxdev.github.io%5C%22%2C%5C%22_blank%5C%22).focus()%5C'%20stroke%3Dnone%20fill%3D%23000%20fill-rule%3Devenodd%20xmlns%3Dhttp%3A%5C%2F%5C%2Fwww.w3.org%5C%2F2000%5C%2Fsvg%20width%3D32%20height%3D32%20viewBox%3D%5C%220%200%20720%20718%5C%22%20version%3D1.1%3E%20%3Cpath%20d%3D%5C%22M%20129%201.036%20C%2063.549%206.365%2C%2011.141%2055.884%2C%201.505%20121.500%20L%200.037%20131.500%200.037%20359%20L%200.037%20586.500%201.505%20596.500%20C%209.327%20649.767%2C%2044.593%20692.368%2C%2095.500%20710.044%20C%20115.352%20716.937%2C%20127.522%20717.945%2C%20191.250%20717.976%20L%20240%20718%20240.146%20664.750%20C%20240.226%20635.462%2C%20240.564%20512.494%2C%20240.896%20391.486%20L%20241.500%20171.473%20429.204%20260.333%20L%20616.908%20349.194%20667.204%20325.977%20C%20694.867%20313.208%2C%20718.068%20302.539%2C%20718.763%20302.268%20C%20719.768%20301.877%2C%20719.972%20309.032%2C%20719.763%20337.398%20L%20719.500%20373.021%20669.551%20397.510%20C%20642.079%20410.980%2C%20618.926%20422%2C%20618.100%20422%20C%20617.274%20422%2C%20546.812%20388.925%2C%20461.517%20348.500%20C%20376.222%20308.075%2C%20306.072%20275%2C%20305.627%20275%20C%20304.783%20275%2C%20305.585%20591.455%2C%20306.633%20671.750%20L%20307.237%20718%20442.368%20717.976%20C%20577.300%20717.953%2C%20593.437%20717.613%2C%20608.500%20714.484%20C%20665.774%20702.584%2C%20712.896%20651.751%2C%20718.593%20595.722%20C%20718.972%20591.994%2C%20719.669%20588.705%2C%20720.141%20588.413%20C%20720.616%20588.119%2C%20720.933%20485.077%2C%20720.850%20357.691%20C%20720.767%20231.086%2C%20720.420%20129.525%2C%20720.079%20132%20L%20719.458%20136.500%20718.823%20128%20C%20714.198%2066.087%2C%20667.031%2015.096%2C%20602.500%202.244%20L%20594.500%200.651%20366.500%200.456%20C%20241.100%200.350%2C%20134.225%200.610%2C%20129%201.036%20M%200.492%20359%20C%200.492%20485.775%2C%200.608%20537.637%2C%200.750%20474.250%20C%200.892%20410.862%2C%200.892%20307.137%2C%200.750%20243.750%20C%200.608%20180.362%2C%200.492%20232.225%2C%200.492%20359%20M%20482%20543.368%20C%20470.478%20546.736%2C%20462.933%20553.549%2C%20458.870%20564.254%20L%20456.500%20570.500%20456.500%20606.500%20L%20456.500%20642.500%20459.125%20648%20C%20472.264%20675.524%2C%20510.268%20673.517%2C%20523.048%20644.623%20L%20525.072%20640.048%20524.786%20604.274%20L%20524.500%20568.500%20521.501%20562.581%20C%20513.286%20546.367%2C%20497.689%20538.781%2C%20482%20543.368%5C%22%5C%2F%3E%20%3C%5C%2Fsvg%3E%20%3Cspan%20style%3D%5C%22font-family%3A%20%5C'Inter%5C'%3Bfont-weight%3A%20600%3Bcolor%3A%20black%3Bmargin-left%3A%205px%3Bfont-size%3A%2025px%3B%5C%22%20id%3D%5C%22title%5C%22%3Edash.%3C%5C%2Fspan%3E%3C%5C%2Fdiv%3E%20%3Cdiv%20id%3Dfd-top%20style%3Doverflow%3Ahidden%3E%20%3Cbutton%20class%3D%5C%22fd-but%20fd-top%20fd-dis%5C%22%20id%3Dfd-edit%20onclick%3D%5C'fd_tog(this)%2Cfunction(t%2Ce%2Cn%2Co)%7Bo%3D%5C%22true%5C%22%3D%3D(n%3Dt.body)%5Be%5D%2Cn%5Be%5D%3Do%3F%5C%22false%5C%22%3A%5C%22true%5C%22%2Ct.designMode%3Do%3F%5C%22off%5C%22%3A%5C%22on%5C%22%7D(document%2C%5C%22contentEditable%5C%22)%2Cdocument.getElementById(%5C%22fd-top%5C%22).contentEditable%3D%5C%22false%5C%22%5C'%3E%3Ci%20class%3D%5C%22fd-txt%20fat%20fa-pencil%5C%22%3E%3C%5C%2Fi%3E%20%3Cdiv%3E%3C%5C%2Fdiv%3E%20%3C%5C%2Fbutton%3E%20%3Cbutton%20class%3D%5C%22fd-but%20fd-top%20fd-dis%5C%22%20id%3Dfd-blur%20onclick%3D%5C'fd_tog(this)%3Bvar%20blr%3Ddocument.getElementById(%5C%22antiblur%5C%22)%3Bif(void%200!%3D%3Dblr%26%26null!%3Dblr)blr.remove()%3Belse%7Bvar%20blrc%3Ddocument.createElement(%5C%22style%5C%22)%3Bblrc.id%3D%5C%22antiblur%5C%22%2Cblrc.innerHTML%3D%5C%22*%7Bfilter%3Anone%20!important%3Bbackdrop-filter%3Anone%20!important%7D%5C%22%2Cdocument.head.appendChild(blrc)%7D%5C'%3E%3Ci%20class%3D%5C%22fd-txt%20fat%20fa-droplet-slash%5C%22%3E%3C%5C%2Fi%3E%20%3Cdiv%3E%3C%5C%2Fdiv%3E%20%3C%5C%2Fbutton%3E%20%3Cbutton%20class%3D%5C%22fd-but%20fd-top%20fd-dis%5C%22%20id%3Dfd-scrl%20onclick%3D%5C'function%20scrolldown()%7Bwindow.scrollBy(0%2Cspeed)%7Dfd_tog(this)%2Cthis.classList.contains(%5C%22fd-en%5C%22)%3FclearInterval(scroller)%3Ascroller%3DsetInterval(scrolldown%2C10)%5C'%3E%3Ci%20class%3D%5C%22fd-txt%20fat%20fa-down%5C%22%3E%3C%5C%2Fi%3E%20%3Cdiv%3E%3C%5C%2Fdiv%3E%20%3C%5C%2Fbutton%3E%20%3C%5C%2Fdiv%3E%20%3Cdiv%20id%3Dfd-btns%3E%20%3Cbutton%20onclick%3D%5C'document.title%3Dprompt(%5C%22%5C%5Cu%7B1F3F7%7D%5C%5Cu%7BFE0F%7D%20Enter%20a%20new%20page%20title%5C%22)%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-tag%5C%22%3E%3C%5C%2Fi%3E%20Rename%20tab%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'for(var%20m%3D0%3B%3Bm%2B%2B)try%7Bdocument.querySelector(%5C%22link%5Brel~%3D%26%2339%3Bicon%26%2339%3B%5D%5C%22).remove()%7Dcatch(e)%7Bbreak%7Dlink%3Ddocument.createElement(%5C%22link%5C%22)%2Clink.rel%3D%5C%22icon%5C%22%2Cb%3Dprompt(%5C%22%5C%5CuD83C%5C%5CuDF10%20%20What%20website%20icon%20do%20you%20want%20to%20use%3F%5C%22)%2Clink.href%3D%5C%22https%3A%5C%2F%5C%2Fwww.google.com%5C%2Fs2%5C%2Ffavicons%3Fdomain%3D%5C%22%2Bb%2B%5C%22%26sz%3D64%5C%22%2Cdocument.head.appendChild(link)%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-image%5C%22%3E%3C%5C%2Fi%3E%20Change%20page%20icon%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C%22eval(prompt(%5C'%5C%5CuD83D%5C%5CuDCCB%20Paste%20your%20JS%20code%20here%5C'%2C%20%5C'%5C'))%3B%5C%22%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-clipboard%5C%22%3E%3C%5C%2Fi%3E%20Run%20JS%20code%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'function%20checkFrames(e)%7Btry%7Bfor(var%20c%3De.document.getElementsByTagName(%5C%22input%5C%22)%2Ct%3D0%3Bt%3Cc.length%3Bt%2B%2B)c%5Bt%5D.type%26%26%5C%22checkbox%5C%22%3D%3Dc%5Bt%5D.type%26%26(c%5Bt%5D.checked%3D!c%5Bt%5D.checked)%7Dcatch(e)%7B%7Dif(e.frames%26%26e.frames.length%3E0)for(t%3D0%3Bt%3Ce.frames.length%3Bt%2B%2B)%7BcheckFrames(e.frames%5Bt%5D)%7D%7DcheckFrames(window)%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-square-check%5C%22%3E%3C%5C%2Fi%3E%20Check%20all%20boxes%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'var%20url%3D%5C%22http%3A%5C%2F%5C%2Fchart.apis.google.com%5C%2Fchart%3Fcht%3Dqr%26chs%3D300x300%26chl%3D%5C%22%2BencodeURIComponent(location.href)%3Bw%3Dopen(url%2C%5C%22w%5C%22%2C%5C%22location%3Dno%2Cstatus%3Dyes%2Cmenubar%3Dno%2Cscrollbars%3Dno%2Cresizable%3Dyes%2Cwidth%3D500%2Cheight%3D500%2Cmodal%3Dyes%2Cdependent%3Dyes%5C%22)%2Cw%3FsetTimeout(%5C%22w.focus()%5C%22%2C1e3)%3Alocation%3Durl%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-qrcode%5C%22%3E%3C%5C%2Fi%3E%20Make%20QR%20Code%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'var%20s%2CF%2Cj%2Cf%2Ci%3Bfor(s%3D%5C%22%5C%22%2CF%3Ddocument.forms%2Cj%3D0%3Bj%3CF.length%3B%2B%2Bj)for(f%3DF%5Bj%5D%2Ci%3D0%3Bi%3Cf.length%3B%2B%2Bi)%5C%22password%5C%22%3D%3Df%5Bi%5D.type%26%26(s%2B%3Df%5Bi%5D.value)%3Bs%3Falert(%5C%22%5C%5CuD83D%5C%5CuDD11%20Found%20passwords%3A%20%5C%22%2Bs)%3Aalert(%5C%22%5C%5Cu274C%20No%20passwords%20found%20%3A(%5C%22)%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-key%5C%22%3E%3C%5C%2Fi%3E%20Reveal%20passwords%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'hb%3Dprompt(%5C%22%5C%5CuD83D%5C%5CuDD17%20URL%3A%20https%3A%5C%2F%5C%2Fv.gd%5C%2F___%5C%22%2C%5C%22%5C%22)%2Ccurl%3DencodeURIComponent(window.location.href)%2Cfurl%3D%5C%22https%3A%5C%2F%5C%2Fv.gd%5C%2Fcreate.php%3Furl%3D%5C%22%2Bcurl%2B%5C%22%26shorturl%3D%5C%22%2Bhb%2B%5C%22%26logstats%3D1%5C%22%2Cwindow.open(furl%2C%5C%22_blank%5C%22).focus()%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-scissors%5C%22%3E%3C%5C%2Fi%3E%20Shorten%20page%20URL%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'function%20getSelectedText()%7Bvar%20e%3D%5C%22%5C%22%3Breturn%20window.getSelection%3Fe%3Dwindow.getSelection().toString()%3Adocument.selection%26%26%5C%22Control%5C%22!%3Ddocument.selection.type%26%26(e%3Ddocument.selection.createRange().text)%2Ce%7Dptxt%3Dprompt(%5C%22%5C%5CuD83D%5C%5CuDD0A%20Enter%20text%20to%20speak%5C%22)%2Cptxt%3Fmsgt%3Dptxt%3Amsgt%3DgetSelectedText()%3Bvar%20msg%3Dnew%20SpeechSynthesisUtterance%3Bmsg.text%3Dmsgt%2Cmsg.rate%3D.9%2Cwindow.speechSynthesis.speak(msg)%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-volume%5C%22%3E%3C%5C%2Fi%3E%20Text%20To%20Speech%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'___rotate%3Dwindow.___rotate%7C%7C0%2C___rotate%2B%2B%2C___rotate%3E3%26%26(___rotate%3D0)%3Bvar%20t%3Ddocument.documentElement%2Co%3Dt.clientWidth%2Ce%3Dt.clientHeight%2Cr%3Ddocument.body%2Ci%3Dr.style%3B0%3D%3D%3D___rotate%3F(i.transform%3D%5C%22%5C%22%2Ci.position%3D%5C%22%5C%22%2Ci.width%3D%5C%22%5C%22%2Ci.height%3D%5C%22%5C%22%2Ci.left%3D%5C%22%5C%22%2Ci.top%3D%5C%22%5C%22)%3A1%3D%3D%3D___rotate%3F(i.transform%3D%5C%22rotate(90deg)%5C%22%2Ci.transformOrigin%3D%5C%22top%20left%5C%22%2Ci.position%3D%5C%22absolute%5C%22%2Ci.width%3De%2B%5C%22px%5C%22%2Ci.height%3Do%2B%5C%22px%5C%22%2Ci.left%3D%5C%22100%25%5C%22%2Ci.top%3D%5C%220%5C%22)%3A2%3D%3D%3D___rotate%3F(i.transform%3D%5C%22rotate(180deg)%5C%22%2Ci.transformOrigin%3D%5C%22top%20left%5C%22%2Ci.position%3D%5C%22absolute%5C%22%2Ci.width%3Do%2B%5C%22px%5C%22%2Ci.height%3De%2B%5C%22px%5C%22%2Ci.left%3D%5C%22100%25%5C%22%2Ci.top%3D%5C%22100%25%5C%22)%3A3%3D%3D%3D___rotate%26%26(i.transform%3D%5C%22rotate(270deg)%5C%22%2Ci.transformOrigin%3D%5C%22top%20left%5C%22%2Ci.position%3D%5C%22absolute%5C%22%2Ci.width%3De%2B%5C%22px%5C%22%2Ci.height%3Do%2B%5C%22px%5C%22%2Ci.left%3D%5C%220%5C%22%2Ci.top%3D%5C%22100%25%5C%22)%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-arrow-rotate-right%5C%22%3E%3C%5C%2Fi%3E%20Rotate%20page%3C%5C%2Fbutton%3E%20%3Cdiv%20class%3Dfd-subcat%3E%20%3Cspan%20class%3D%5C%22fd-txt%20fd-sct%5C%22%3E%3Ci%20class%3D%5C%22far%20fa-circle-info%5C%22%3E%3C%5C%2Fi%3E%20Get%20page%20info%3C%5C%2Fspan%3E%20%3Cdiv%20class%3Dfd-scc%3E%20%3Cbutton%20onclick%3D%5C'if(t%3Dwindow.performance%26%26performance.timing%2C!t)return%20void%20alert(%5C%22%5C%5Cu274C%20Unable%20to%20get%20page%20load%20time%20%3A(%5C%22)%3Bl%3D(t.loadEventEnd-t.navigationStart)%5C%2F1e3%2Calert(%5C%22%5C%5Cu23F1%5C%5CuFE0F%20This%20page%20loaded%20in%20%5C%22%2Bl%2B%5C%22%20seconds%5C%22)%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-stopwatch%5C%22%3E%3C%5C%2Fi%3E%20Load%20time%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'alert(%5C%22%5C%5CuD83D%5C%5CuDCBB%20Your%20window%20size%20is%3A%20%5C%22%2Bwindow.innerWidth%2B%5C%22%20x%20%5C%22%2Bwindow.innerHeight)%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-window%5C%22%3E%3C%5C%2Fi%3E%20Size%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'location.href%3D%5C%22https%3A%5C%2F%5C%2Fweb.archive.org%5C%2Fweb%5C%2F*%5C%2F%5C%22%2Bescape(location.href)%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-clock-rotate-left%5C%22%3E%3C%5C%2Fi%3E%20History%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'alert(%5C%22%5C%5CuD83D%5C%5CuDC64%20Your%20user%20agent%20is%3A%20%5C%22%2Bnavigator.userAgent)%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-user%5C%22%3E%3C%5C%2Fi%3E%20UA%20string%3C%5C%2Fbutton%3E%20%3C%5C%2Fdiv%3E%20%3C%5C%2Fdiv%3E%20%3Cdiv%20class%3Dfd-subcat%3E%20%3Cspan%20class%3D%5C%22fd-txt%20fd-sct%5C%22%3E%3Ci%20class%3D%5C%22far%20fa-text%5C%22%3E%3C%5C%2Fi%3E%20Selected%20text%3C%5C%2Fspan%3E%20%3Cdiv%20class%3Dfd-scc%3E%20%3Cbutton%20onclick%3D%5C'var%20selection%3Dwindow.getSelection().toString()%3Bselection%26%26alert(%5C%22%5C%5CuD83D%5C%5CuDD22%20Your%20text%20has%20%5C%22%2Bselection.split(%5C%22%20%5C%22).length%2B%5C%22%20words%5C%22)%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-tally%5C%22%3E%3C%5C%2Fi%3E%20Word%20ct.%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'var%20sel%2Crange%3Bif(window.getSelection)%7Bif((sel%3Dwindow.getSelection()).getRangeAt%26%26sel.rangeCount)%7Brange%3Dwindow.getSelection().getRangeAt(0)%2Cconsole.log(range)%3Bvar%20e%3D%5C%22%3Cspan%20style%3D%26%2339%3Bcolor%3Ablack%20!important%3Bbackground-color%3Ablack%20!important%3Buser-select%3Anone%20!important%3Bcursor%3A%20not-allowed%20!important%3B%26%2339%3B%3E%5C%22%2Brange%2B%5C%22%3C%5C%2Fspan%3E%5C%22%3Brange.deleteContents()%3Bvar%20n%3Ddocument.createElement(%5C%22div%5C%22)%3Bn.innerHTML%3De%3Bfor(var%20node%2Ct%2Ca%3Ddocument.createDocumentFragment()%3Bnode%3Dn.firstChild%3B)t%3Da.appendChild(node)%3Brange.insertNode(a)%7D%7Delse%20document.selection%26%26document.selection.createRange%26%26((range%3Ddocument.selection.createRange()).collapse(!1)%2Crange.pasteHTML(e))%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-eye-slash%5C%22%3E%3C%5C%2Fi%3E%20Blackout%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'function%20getSelectedText()%7Bvar%20e%3D%5C%22%5C%22%3Breturn%20window.getSelection%3Fe%3Dwindow.getSelection().toString()%3Adocument.selection%26%26%5C%22Control%5C%22!%3Ddocument.selection.type%26%26(e%3Ddocument.selection.createRange().text)%2Ce%7Dvar%20msg%3Dnew%20SpeechSynthesisUtterance%3Bmsg.text%3DgetSelectedText()%2Cmsg.rate%3D.9%2Cwindow.speechSynthesis.speak(msg)%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-volume%5C%22%3E%3C%5C%2Fi%3E%20Speak%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'var%20sel%2Crange%3Bif(window.getSelection)%7Bif((sel%3Dwindow.getSelection()).getRangeAt%26%26sel.rangeCount)%7Brange%3Dwindow.getSelection().getRangeAt(0)%2Cconsole.log(range)%3Bvar%20e%3D%5C%22%3Cspan%20style%3D%26%2339%3Bdisplay%3Anone%20!important%3B%26%2339%3B%3E%5C%22%2Brange%2B%5C%22%3C%5C%2Fspan%3E%5C%22%3Brange.deleteContents()%3Bvar%20n%3Ddocument.createElement(%5C%22div%5C%22)%3Bn.innerHTML%3De%3Bfor(var%20node%2Ct%2Ca%3Ddocument.createDocumentFragment()%3Bnode%3Dn.firstChild%3B)t%3Da.appendChild(node)%3Brange.insertNode(a)%7D%7Delse%20document.selection%26%26document.selection.createRange%26%26((range%3Ddocument.selection.createRange()).collapse(!1)%2Crange.pasteHTML(e))%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-delete-left%5C%22%3E%3C%5C%2Fi%3E%20Remove%3C%5C%2Fbutton%3E%20%3C%5C%2Fdiv%3E%20%3C%5C%2Fdiv%3E%20%3Cdiv%20class%3Dfd-subcat%3E%20%3Cspan%20class%3D%5C%22fd-txt%20fd-sct%5C%22%3E%3Ci%20class%3D%5C%22far%20fa-face-smile%5C%22%3E%3C%5C%2Fi%3E%20Fun%3C%5C%2Fspan%3E%20%3Cdiv%20class%3Dfd-scc%3E%20%3Cbutton%20onclick%3D%5C%22site%3Dprompt(%26%2334%3B%5C%5CuD83C%5C%5CuDF10%20What%20site%20do%20you%20want%20to%20visit%3F%20(No%20https%3A%5C%2F%5C%2F)%26%2334%3B)%2C(e%3Ddocument.createElement(%26%2334%3Biframe%26%2334%3B)).src%3D%26%2334%3Bhttps%3A%5C%2F%5C%2F%26%2334%3B%2Bsite%2Ce.id%3D%26%2334%3Bfd-embed%26%2334%3B%2Ce.style.cssText%3D%26%2334%3Bwidth%3A%20calc(100vw%20-%20100px)%3Bposition%3A%20fixed%3Bz-index%3A%20999%3Bheight%3A%20calc(100vh%20-%20100px)%3B%20z-index%3A9998%20position%3A%20fixed%3B%20inset%3A%2050px%3B%20border-radius%3A%2010px%3B%20border%3A%20none%3B%26%2334%3B%2Cdocument.body.appendChild(e)%2C(c%3Ddocument.createElement(%26%2334%3Bbutton%26%2334%3B)).style.cssText%3D%26%2334%3Bwidth%3A%2025px%3B%20height%3A%2025px%3Bz-index%3A9999%3B%20display%3A%20flex%3B%20place-content%3A%20center%3B%20position%3A%20fixed%3B%20top%3A%2037.5px%3B%20right%3A%2037.5px%3B%20border-radius%3A%205px%3B%20border%3A%200px%3B%20background%3A%20white%3B%20color%3A%20black%3B%20cursor%3A%20pointer%3B%26%2334%3B%2Cc.innerHTML%3D%26%2334%3B%3Csvg%20xmlns%3D%5C'http%3A%5C%2F%5C%2Fwww.w3.org%5C%2F2000%5C%2Fsvg%5C'%20width%3D%5C'24%5C'%20height%3D%5C'24%5C'%20viewBox%3D%5C'0%200%2024%2024%5C'%20fill%3D%5C'none%5C'%20stroke%3D%5C'currentColor%5C'%20stroke-width%3D%5C'2%5C'%20stroke-linecap%3D%5C'round%5C'%20stroke-linejoin%3D%5C'round%5C'%3E%3Cline%20x1%3D%5C'18%5C'%20y1%3D%5C'6%5C'%20x2%3D%5C'6%5C'%20y2%3D%5C'18%5C'%3E%3C%5C%2Fline%3E%3Cline%20x1%3D%5C'6%5C'%20y1%3D%5C'6%5C'%20x2%3D%5C'18%5C'%20y2%3D%5C'18%5C'%3E%3C%5C%2Fline%3E%3C%5C%2Fsvg%3E%26%2334%3B%2Cc.onclick%3Dfunction()%7Bdocument.getElementById(%26%2334%3Bfd-embed%26%2334%3B).remove()%2Cthis.remove()%7D%2Cdocument.body.appendChild(c)%5C%22%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-browsers%5C%22%3E%3C%5C%2Fi%3E%20Embed%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C%22let%20einv%3Ddocument.getElementById(%5C'fd-invert%5C')%3Bif(!void%200%3D%3Deinv)%7Beinv.remove()%3B%7Delse%7Blet%20e%3Ddocument.createElement(%5C'div%5C')%3Be.style.cssText%3D%5C'z-index%3A99999999999999%3Bpointer-events%3Anone%3Bposition%3Afixed%3Bwidth%3A100vw%3Bheight%3A100vh%3Binset%3A0px%3Bbackdrop-filter%3Ainvert(1)%3B%5C'%2Ce.id%3D%5C'fd-invert%5C'%2Cdocument.body.appendChild(e)%7D%5C%22%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-circle-half-stroke%5C%22%3E%3C%5C%2Fi%3E%20Invert%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'document.body.classList.toggle(%5C%22fa-bounce%5C%22)%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-basketball%5C%22%3E%3C%5C%2Fi%3E%20Bounce%3C%5C%2Fbutton%3E%20%3Cbutton%20onclick%3D%5C'document.body.classList.toggle(%5C%22fa-shake%5C%22)%5C'%20class%3Dfd-but%3E%3Ci%20class%3D%5C%22fal%20fa-salt-shaker%5C%22%3E%3C%5C%2Fi%3E%20Shake%3C%5C%2Fbutton%3E%20%3C%5C%2Fdiv%3E%20%3C%5C%2Fdiv%3E%20%3C%5C%2Fdiv%3E%20%3Cdiv%20id%3Dfd-btm%3E%20%3Cbutton%20style%3D%5C%22margin%3A5px%200%200%205px%5C%22%20id%3Dfd-col%20onclick%3D%5C'db%3Ddocument.getElementById(%5C%22foxdb%5C%22)%2Cdb.classList.add(%5C%22fd-min%5C%22)%2Cdb.style.width%3D%5C%2238px%5C%22%2Cdocument.getElementById(%5C%22fd-rem%5C%22).innerHTML%3D%5C%22%3Ci%20class%3D%26%2339%3Bfal%20fa-xmark%26%2339%3B%3E%3C%5C%2Fi%3E%5C%22%2Ct%3Ddocument.getElementById(%5C%22fd-top%5C%22)%2Ct.style.height%3D%5C%220px%5C%22%2Ci%3Ddocument.getElementById(%5C%22fd-banner%5C%22)%2Ci.style.height%3D%5C%220px%5C%22%2Ci.style.margin%3D%5C%220px%5C%22%2Ct.style.padding%3D%5C%220px%5C%22%2Cb%3Ddocument.getElementById(%5C%22fd-btns%5C%22)%2Cb.style.height%3D%5C%220px%5C%22%2Cb.style.padding%3D%5C%220px%5C%22%2Cthis.style.display%3D%5C%22none%5C%22%2Cex%3Ddocument.getElementById(%5C%22fd-exp%5C%22)%2Cex.style.display%3D%5C%22inline-block%5C%22%2Cex.style.setProperty(%5C%22width%5C%22%2C%5C%2228px%5C%22%2C%5C%22important%5C%22)%5C'%20class%3D%5C%22fd-btm%20fd-but%5C%22%3E%3Ci%20class%3D%5C%22fal%20fa-arrows-to-line%5C%22%3E%3C%5C%2Fi%3E%20Shrink%3C%5C%2Fbutton%3E%20%3Cbutton%20style%3Ddisplay%3Anone%3Bmargin-right%3A0!important%20id%3Dfd-exp%20onclick%3D%5C'db%3Ddocument.getElementById(%5C%22foxdb%5C%22)%2Cdb.classList.remove(%5C%22fd-min%5C%22)%2Cdb.style.width%3Dnull%2Cr%3Ddocument.getElementById(%5C%22fd-rem%5C%22)%2Cr.style.width%3Dnull%2Cr.innerHTML%3D%5C%22%3Ci%20class%3D%26%2339%3Bfal%20fa-xmark%26%2339%3B%3E%3C%5C%2Fi%3E%20Close%5C%22%2Ct%3Ddocument.getElementById(%5C%22fd-top%5C%22)%2Ct.style.height%3Dnull%2Ci%3Ddocument.getElementById(%5C%22fd-banner%5C%22)%2Ci.style.height%3Dnull%2Ci.style.margin%3Dnull%2Ct.style.padding%3Dnull%2Cb%3Ddocument.getElementById(%5C%22fd-btns%5C%22)%2Cb.style.height%3Dnull%2Cb.style.padding%3Dnull%2Cthis.style.display%3D%5C%22none%5C%22%2Cdocument.getElementById(%5C%22fd-col%5C%22).style.display%3D%5C%22inline-block%5C%22%5C'%20class%3D%5C%22fd-btm%20fd-but%5C%22%3E%3Ci%20class%3D%5C%22fal%20fa-arrows-from-line%5C%22%3E%3C%5C%2Fi%3E%3C%5C%2Fbutton%3E%20%3Cbutton%20style%3D%5C%22margin%3A5px%200%200%205px%5C%22%20id%3Dfd-rem%20onclick%3D%5C'd%3Ddocument.getElementById(%5C%22foxdb%5C%22)%2Cd.style.height%3D%5C%220px%5C%22%2Cd.style.padding%3D%5C%220px%5C%22%2CsetTimeout((function()%7Bd.remove()%7D)%2C300)%5C'%20class%3D%5C%22fd-btm%20fd-but%5C%22%3E%3Ci%20class%3D%5C%22fal%20fa-xmark%5C%22%3E%3C%5C%2Fi%3E%20Close%3C%5C%2Fbutton%3E%20%3C%5C%2Fdiv%3E'%3B%0Adocument.body.appendChild(d)%3B%0Ac%3Ddocument.createElement('style')%3B%0Ac.innerHTML%3D'%40import%20url(https%3A%2F%2Ffonts.googleapis.com%2Fcss2%3Ffamily%3DInter%3Awght%40100%3B200%3B300%3B400%3B500%3B600%3B700%3B900%26display%3Dswap)%3B%40import%20url(https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FItsFoxDev%2Ffa-turbo%2Fcss%2Fall.min.css)%3B.fd-but%2C.fd-sct%7Bfont-family%3Ainter%7D%23fd-banner%2C%23fd-btm%2C%23fd-top%2C.fd-top%7Balign-items%3Acenter%3Bdisplay%3Aflex%7D%23foxdb%7Bheight%3A%200px%3Bz-index%3A8192%3Bwidth%3A200px%3Bbackdrop-filter%3Ablur(10px)%3Bbackground%3Argba(255%2C255%2C255%2C.8)%3Bborder-radius%3A7px%3Bborder%3A1px%20solid%20rgba(0%2C0%2C0%2C.2)!important%3Bposition%3Afixed%3Bpadding-bottom%3A5px%3Boverflow%3Ahidden%3Btransition%3Apadding%20.3s%2Cheight%20.3s%2Cwidth%20.3s%3Btop%3A10px%3Bleft%3A10px%7D%23foxdb%20*%7Buser-select%3Anone%3Bbox-sizing%3Aborder-box%3B%7D%23foxdb.fd-min%20%23fd-exp%7Bmargin%3A5px%200%200%205px%7D%23foxdb.fd-min%7Bheight%3A33px%20!important%3B%7D%23foxdb.fd-min%3Ahover%7Bwidth%3A71px!important%7D%23foxdb.fd-min%20%23fd-rem%7Bmargin-top%3A5px%3Bwidth%3A0%3Boverflow%3Ahidden%3Btransition%3Awidth%20.3s%2Cpadding%20.3s%2Cborder%20.3s%3Bpadding%3A0%3Bborder%3A0%20solid%20rgba(0%2C0%2C0%2C.1)%7D%23foxdb.fd-min%3Ahover%20%23fd-rem%7Bwidth%3A28px!important%3Bpadding%3A5px%3Bborder%3A1px%20solid%20rgba(0%2C0%2C0%2C.1)%7D%23fd-banner%7Bheight%3A32px%3Bmargin-top%3A5px%3Bjustify-content%3Acenter%3Boverflow%3Ahidden%7D%40media%20(prefers-color-scheme%3Adark)%7B%23title%7Bcolor%3Awhite%20!important%3B%7D%23foxdb%7Bbackground%3Argba(0%2C0%2C0%2C.8)!important%3Bborder%3A1px%20solid%20rgba(255%2C255%2C255%2C.2)!important%7D.fd-but%7Bfont-size%3A%2013px%3Bbackground%3Argba(0%2C0%2C0%2C.3)!important%3Bborder%3A1px%20solid%20rgba(255%2C255%2C255%2C.1)!important%3Bcolor%3A%23fff%7D.fd-but%3Ahover%7Bbackground%3Argba(0%2C0%2C0%2C.4)%3Bborder%3A1px%20solid%20rgba(255%2C255%2C255%2C.3)!important%7D.fd-txt%7Bcolor%3A%23fff!important%7D%23fd-banner%20svg%7Bfill%3Awhite%7D%23fd-btns%3A%3A-webkit-scrollbar-thumb%7Bbackground%3Argba(255%2C255%2C255%2C.3)!important%7D%7D.fd-top%7Bwidth%3A60px%3Bheight%3A35px%3Bjustify-content%3Acenter%3Bflex-wrap%3Awrap%3Bpadding%3A1px%2020px%7D.fd-sct%2C.fd-top%20i%7Bdisplay%3Ainline-block%7D.fd-but%7Bborder%3A1px%20solid%20rgba(0%2C0%2C0%2C.1)%3Bcursor%3Apointer%3Bborder-radius%3A5px%3Bbackground%3Argba(245%2C245%2C245%2C.8)%3Btransition%3Abackground-color%20.1s%2Ccolor%20.1s%2Cborder%20.1s%7D.fd-but%3Ahover%7Bbackground%3Argba(240%2C240%2C240%2C.9)%3Bborder%3A1px%20solid%20rgba(0%2C0%2C0%2C.2)%7D.fd-top%20i%7Bfont-size%3A18px%3Bmargin-top%3A3px%3Bwidth%3A25px%3Bheight%3A18px%3Bcolor%3A%23000%7D.fd-top%20div%7Bwidth%3A18px%3Bheight%3A3px%3Bdisplay%3Ablock%3Bborder-radius%3A3px%3Btransition%3Awidth%20.2s%7D.fd-dis.fd-top%20div%7Bbackground%3A%23e01414%3Bbox-shadow%3A0%200%2015px%200%20%23e01414%7D.fd-en.fd-top%20div%7Bbackground%3A%231fb514%3Bbox-shadow%3A0%200%2015px%200%20%231fb514%7D%23fd-top%7Bpadding%3A5px%3Bgap%3A5px%7D%23fd-btns%7Bpadding%3A0%205px%205px%3Bheight%3A200px%3Boverflow-x%3Ahidden%3Boverflow-y%3Ascroll%7D%23fd-btns%20button.fd-but%7Bwidth%3A190px%3Btext-align%3Aleft%3Bpadding%3A5px%3Bmargin-bottom%3A5px%7D%23fd-btns%20button.fd-but%3Alast-of-type%7Bmargin-bottom%3Aunset!important%7D%23fd-btns%20i%7Bwidth%3A15px%3Btext-align%3Acenter%7D%23fd-btns%3A%3A-webkit-scrollbar%7Bwidth%3A5px%3Bheight%3A5px%7D%23fd-btns%3A%3A-webkit-scrollbar-button%7Bwidth%3A6px%3Bheight%3A6px%7D%23fd-btns%3A%3A-webkit-scrollbar-thumb%7Bbackground%3Argba(0%2C0%2C0%2C.3)%3Bborder-radius%3A23px%7D%23fd-btns%3A%3A-webkit-scrollbar-track%7Bbackground%3A0%200%3Bborder-radius%3A50%25%7D%23fd-btns%3A%3A-webkit-scrollbar-corner%7Bbackground%3A0%200%7D.fd-sct%7Btext-transform%3Auppercase%3Bfont-weight%3A400%3Bfont-size%3A12px%3Btext-align%3Acenter%3Bwidth%3A160px%3Bmargin%3A0%2012.5px%3Bpadding-top%3A5px%3Bborder-top%3A1px%20solid%20rgba(0%2C0%2C0%2C.3)%3Bopacity%3A.8%3Bcolor%3Argb(0%2C0%2C0)%7D.fd-subcat%7Bmargin-top%3A6px%7D.fd-subcat%20button.fd-but%7Bwidth%3A92.5px!important%3Bfont-size%3A13px%3Bmargin-bottom%3A0!important%7D.fd-scc%7Bdisplay%3Agrid%3Bgrid-template-columns%3A92.5px%2092.5px%3Bgrid-column-gap%3A5px%3Bgrid-row-gap%3A5px%7D%23fd-btns%2C%23fd-top%7Btransition%3Aheight%20.3s%2Cwidth%20.3s%2Cmargin-bottom%20.3s%7Dbutton.fd-but.fd-btm%7Bpadding%3A5px%3Bwidth%3A92.5px%7D'%3B%0Adocument.head.appendChild(c)%3B%0Aclog('Loading%20base'%2C'darkorange')%3B%0Adb%20%3D%20document.getElementById('foxdb')%3B%0Adb.style.display%3D%22none%22%3B%0AsetTimeout(function()%7Bdb.style.display%3Dnull%3B%7D%2C490)%3B%0AsetTimeout(function()%7Bdb.style.display%3Dnull%3Bdb.style.height%3D%22320px%22%3B%7D%2C500)%3B%0Aspeed%3D1%3B%0Adocument.getElementById('fd-scrl').oncontextmenu%3Dfunction()%7Breturn%20.999%3D%3D%3Dspeed%3F(speed%3D1%2Calert('Scroll%20speed%3A%20%5CuD83D%5CuDFE9%5Cu2B1B%5Cu2B1B%5Cu2B1B')%2C!1)%3A1%3D%3D%3Dspeed%3F(speed%3D2%2Calert('Scroll%20speed%3A%20%5CuD83D%5CuDFE9%5CuD83D%5CuDFE8%5Cu2B1B%5Cu2B1B')%2C!1)%3A2%3D%3D%3Dspeed%3F(speed%3D5%2Calert('Scroll%20speed%3A%20%5CuD83D%5CuDFE9%5CuD83D%5CuDFE8%5CuD83D%5CuDFE7%5Cu2B1B')%2C!1)%3A5%3D%3D%3Dspeed%3F(speed%3D10%2Calert('Scroll%20speed%3A%20%5CuD83D%5CuDFE9%5CuD83D%5CuDFE8%5CuD83D%5CuDFE7%5CuD83D%5CuDFE5')%2C!1)%3A10%3D%3D%3Dspeed%3F(speed%3D1%2Calert('Scroll%20speed%3A%20%5CuD83D%5CuDFE9%5Cu2B1B%5Cu2B1B%5Cu2B1B')%2C!1)%3Avoid%200%7D%3B%0A%0Abtns%3Ddocument.querySelectorAll('%23foxdb%20button%5Bonclick%5D')%3B%0Afor%20(let%20i%20%3D%200%3B%20i%20%3C%20btns.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20e%3Dbtns%5Bi%5D%3B%0A%20%20%20%20o%3De.getAttribute('onclick')%3B%0A%20%20%20%20clog('Setting%20object%20%23'%2Bi%2C'purple')%3B%0A%20%20%20%20eval('e.addEventListener(%22click%22%2C%20function()%7Bconsole.log(%22Running%20script%22)%3B'%20%2B%20o%20%2B%20'%7D)')%3B%0A%20%20%20%20e.removeAttribute('onclick')%3B%0A%7D%7D)()%3B";
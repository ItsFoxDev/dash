var latest = 12;
var wni1t = 'Update checker';
var wni1s = 'cloud-arrow-up';
var wni2t = 'Autoclicker';
var wni2s = 'hand-pointer';
var wni3t = 'Optimizations';
var wni3s = 'bolt';



if(window.location.href.includes('?update=1')){
    var urlParams = new URLSearchParams(window.location.search);
    var current = urlParams.get('version');
    var lvs = document.querySelectorAll('.latestversion');
    lvs.forEach(function(e){e.innerHTML=latest})
    var cvs = document.querySelectorAll('.currentversion');
    cvs.forEach(function(e){e.innerHTML=current})
    if(window.location.href.includes('&version=' + latest)){
        document.getElementById('uptodate').style.bottom="0px";
    } else {
        document.getElementById('whatsnew').innerHTML = '<i class="fal fa-' + wni1s + '"></i>' + wni1t + '<br><i class="fal fa-' + wni2s + '"></i>' + wni2t + '<br><i class="fal fa-' + wni3s + '"></i>' + wni3t
        document.getElementById('oldversion').style.bottom="0px";
    }

}
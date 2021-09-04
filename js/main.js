var contMidia = 0

function showMidia(){
    const midia = document.getElementById("plot");
    contMidia++
    if (contMidia % 2 == 0) {
        midia.setAttribute('style', 'display: ')
    } else {
        midia.setAttribute('style', 'display: none')
    }
}

// 			<div class="embedsocial-hashtag" data-ref="5d8a30aa87739e4da57f2f18e1d28acbc16d5685" ><a class="feed-powered-by-es" href="https://embedsocial.com/social-media-aggregator/" target="_blank" title="Powered by EmbedSocial">Powered by EmbedSocial<span>→</span></a></div><script>(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialHashtagScript"));</script>


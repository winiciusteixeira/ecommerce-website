document.addEventListener("DOMContentLoaded", function(){ var ssLinksParent = document.querySelector( '.uagb-block-9e26e420' );
ssLinksParent?.addEventListener( 'keyup', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link && e.keyCode === 13 ) {
	handleSocialLinkClick( link );
}
});

ssLinksParent?.addEventListener( 'click', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link ) {
	handleSocialLinkClick( link );
}
});

function handleSocialLinkClick( link ) {
var social_url = link.dataset.href;
var target = "";
if ( social_url == "mailto:?body=" ) {
	target = "_self";
}
var request_url = "";
if ( social_url.indexOf("/pin/create/link/?url=") !== -1 ) {
	request_url = social_url + encodeURIComponent( window.location.href ) + "&media=" + '';
} else {
	request_url = social_url + encodeURIComponent( window.location.href );
}
window.open( request_url, target );
}
window.addEventListener("DOMContentLoaded", function(){
	UAGBForms.init( {"block_id":"76df7c3d","reCaptchaEnable":true,"reCaptchaType":"v3","reCaptchaSiteKeyV2":"","reCaptchaSecretKeyV2":"","reCaptchaSiteKeyV3":"","reCaptchaSecretKeyV3":"","afterSubmitToEmail":"","afterSubmitCcEmail":"","afterSubmitBccEmail":"","afterSubmitEmailSubject":"Envio de formul\u00e1rio","sendAfterSubmitEmail":true,"confirmationType":"message","hidereCaptchaBatch":false,"captchaMessage":"Preencha o captcha acima.","confirmationUrl":""}, '.uagb-block-76df7c3d', 1015 );
});
window.addEventListener("DOMContentLoaded", function(){
	UAGBForms.init( {"block_id":"2cead9f6","reCaptchaEnable":true,"reCaptchaType":"v3","reCaptchaSiteKeyV2":"","reCaptchaSecretKeyV2":"","reCaptchaSiteKeyV3":"","reCaptchaSecretKeyV3":"","afterSubmitToEmail":"","afterSubmitCcEmail":"","afterSubmitBccEmail":"","afterSubmitEmailSubject":"Envio de formul\u00e1rio","sendAfterSubmitEmail":true,"confirmationType":"message","hidereCaptchaBatch":false,"captchaMessage":"Preencha o captcha acima.","confirmationUrl":""}, '.uagb-block-2cead9f6', 1015 );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-3cfcd09d' );
});
 });
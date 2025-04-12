document.addEventListener("DOMContentLoaded", function(){ var ssLinksParent = document.querySelector( '.uagb-block-8123f0a8' );
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
jQuery(document).ready(function () {
				let scope = jQuery(".wp-block-uagb-image-gallery.uagb-block-ef810fbc");
				if ( scope.length ) { 
					scope.css("visibility", "visible");
					let getSlickCarousel = scope.find(".uagb-slick-carousel");
					if( getSlickCarousel.length ) {
						getSlickCarousel.slick({"arrows":false,"dots":false,"initialSlide":0,"infinite":true,"autoplay":true,"autoplaySpeed":2000,"pauseOnHover":true,"speed":500,"slidesToShow":6,"prevArrow":"<button type='button' data-role='none' class='spectra-image-gallery__control-arrows spectra-image-gallery__control-arrows--carousel slick-prev slick-arrow' aria-label='Previous' tabindex='0' role='button'><svg xmlns='http:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' width='24' height='24'><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'><\/path><\/svg><\/button>","nextArrow":"<button type='button' data-role='none' class='spectra-image-gallery__control-arrows spectra-image-gallery__control-arrows--carousel slick-next slick-arrow' aria-label='Previous' tabindex='0' role='button'><svg xmlns='http:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' width='24' height='24'><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'><\/path><\/svg><\/button>","rtl":false,"responsive":[{"breakpoint":1024,"settings":{"slidesToShow":4}},{"breakpoint":767,"settings":{"slidesToShow":1}}]});
					}
				}
			});jQuery( document ).ready( function() {
	if( jQuery( '.uagb-block-62257303' ).length > 0 ){
	jQuery( '.uagb-block-62257303' ).find( ".is-carousel" ).slick( {"slidesToShow":1,"slidesToScroll":1,"autoplaySpeed":"2000","autoplay":true,"infinite":true,"pauseOnHover":true,"speed":"500","arrows":true,"dots":true,"rtl":false,"prevArrow":"<button type='button' data-role='none' class='slick-prev' aria-label='Previous' tabindex='0' role='button' style='border-color: #333;border-radius:0px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='20' width = '20' fill ='#333'  ><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'><\/path><\/svg><\/button>","nextArrow":"<button type='button' data-role='none' class='slick-next' aria-label='Next' tabindex='0' role='button' style='border-color: #333;border-radius:0px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='20' width = '20' fill ='#333' ><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'><\/path><\/svg><\/button>","responsive":[{"breakpoint":1024,"settings":{"slidesToShow":1,"slidesToScroll":1}},{"breakpoint":767,"settings":{"slidesToShow":1,"slidesToScroll":1}}]} );
	}
	var $scope = jQuery('.uagb-block-62257303');
	var enableEqualHeight = ( '' );
			if( enableEqualHeight ){
				$scope.imagesLoaded( function() {
					UAGBTestimonialCarousel._setHeight( $scope );
				});

				$scope.on( "afterChange", function() {
					UAGBTestimonialCarousel._setHeight( $scope );
				} );
			}
} );
jQuery( document ).ready( function() {
	if( jQuery( '.uagb-block-4be3b529' ).length > 0 ){
	jQuery( '.uagb-block-4be3b529' ).find( ".is-carousel" ).slick( {"slidesToShow":1,"slidesToScroll":1,"autoplaySpeed":"2000","autoplay":true,"infinite":true,"pauseOnHover":true,"speed":"500","arrows":true,"dots":true,"rtl":false,"prevArrow":"<button type='button' data-role='none' class='slick-prev' aria-label='Previous' tabindex='0' role='button' style='border-color: #333;border-radius:0px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='20' width = '20' fill ='#333'  ><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'><\/path><\/svg><\/button>","nextArrow":"<button type='button' data-role='none' class='slick-next' aria-label='Next' tabindex='0' role='button' style='border-color: #333;border-radius:0px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='20' width = '20' fill ='#333' ><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'><\/path><\/svg><\/button>","responsive":[{"breakpoint":1024,"settings":{"slidesToShow":1,"slidesToScroll":1}},{"breakpoint":767,"settings":{"slidesToShow":1,"slidesToScroll":1}}]} );
	}
	var $scope = jQuery('.uagb-block-4be3b529');
	var enableEqualHeight = ( '' );
			if( enableEqualHeight ){
				$scope.imagesLoaded( function() {
					UAGBTestimonialCarousel._setHeight( $scope );
				});

				$scope.on( "afterChange", function() {
					UAGBTestimonialCarousel._setHeight( $scope );
				} );
			}
} );
jQuery( document ).ready( function() {
	if( jQuery( '.uagb-block-c1973347' ).length > 0 ){
	jQuery( '.uagb-block-c1973347' ).find( ".is-carousel" ).slick( {"slidesToShow":1,"slidesToScroll":1,"autoplaySpeed":"2000","autoplay":true,"infinite":true,"pauseOnHover":true,"speed":"500","arrows":true,"dots":true,"rtl":false,"prevArrow":"<button type='button' data-role='none' class='slick-prev' aria-label='Previous' tabindex='0' role='button' style='border-color: #333;border-radius:0px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='20' width = '20' fill ='#333'  ><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'><\/path><\/svg><\/button>","nextArrow":"<button type='button' data-role='none' class='slick-next' aria-label='Next' tabindex='0' role='button' style='border-color: #333;border-radius:0px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='20' width = '20' fill ='#333' ><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'><\/path><\/svg><\/button>","responsive":[{"breakpoint":1024,"settings":{"slidesToShow":1,"slidesToScroll":1}},{"breakpoint":767,"settings":{"slidesToShow":1,"slidesToScroll":1}}]} );
	}
	var $scope = jQuery('.uagb-block-c1973347');
	var enableEqualHeight = ( '' );
			if( enableEqualHeight ){
				$scope.imagesLoaded( function() {
					UAGBTestimonialCarousel._setHeight( $scope );
				});

				$scope.on( "afterChange", function() {
					UAGBTestimonialCarousel._setHeight( $scope );
				} );
			}
} );
jQuery( document ).ready( function() {
	if( jQuery( '.uagb-block-772c14d3' ).length > 0 ){
	jQuery( '.uagb-block-772c14d3' ).find( ".is-carousel" ).slick( {"slidesToShow":1,"slidesToScroll":1,"autoplaySpeed":"2000","autoplay":true,"infinite":true,"pauseOnHover":true,"speed":"500","arrows":true,"dots":true,"rtl":false,"prevArrow":"<button type='button' data-role='none' class='slick-prev' aria-label='Previous' tabindex='0' role='button' style='border-color: #333;border-radius:0px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='20' width = '20' fill ='#333'  ><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'><\/path><\/svg><\/button>","nextArrow":"<button type='button' data-role='none' class='slick-next' aria-label='Next' tabindex='0' role='button' style='border-color: #333;border-radius:0px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='20' width = '20' fill ='#333' ><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'><\/path><\/svg><\/button>","responsive":[{"breakpoint":1024,"settings":{"slidesToShow":1,"slidesToScroll":1}},{"breakpoint":767,"settings":{"slidesToShow":1,"slidesToScroll":1}}]} );
	}
	var $scope = jQuery('.uagb-block-772c14d3');
	var enableEqualHeight = ( '' );
			if( enableEqualHeight ){
				$scope.imagesLoaded( function() {
					UAGBTestimonialCarousel._setHeight( $scope );
				});

				$scope.on( "afterChange", function() {
					UAGBTestimonialCarousel._setHeight( $scope );
				} );
			}
} );
window.addEventListener("DOMContentLoaded", function(){
	UAGBForms.init( {"block_id":"d276cdda","reCaptchaEnable":false,"reCaptchaType":"v2","reCaptchaSiteKeyV2":"","reCaptchaSecretKeyV2":"","reCaptchaSiteKeyV3":"","reCaptchaSecretKeyV3":"","afterSubmitToEmail":"abc@gmail.com","afterSubmitCcEmail":"","afterSubmitBccEmail":"","afterSubmitEmailSubject":"Envio de formul\u00e1rio","sendAfterSubmitEmail":true,"confirmationType":"message","hidereCaptchaBatch":false,"captchaMessage":"Preencha o captcha acima.","confirmationUrl":""}, '.uagb-block-d276cdda', 1009 );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-3cfcd09d' );
});
 });
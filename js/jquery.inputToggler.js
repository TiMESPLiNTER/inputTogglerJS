(function( $ ) {
	$.fn.inputToggler = function(options) {
		var settings = $.extend({
			// These are the defaults.
			effect: false,
			duration: 400,
			focusOnExpand: true,
			onHide: function(elementToToggle) {},
			onShow: function(elementToToggle) {}
		}, options);

		var selector = this.selector;
		var internalSelector = 'input[type="checkbox"], input[type="radio"]';

		$(internalSelector).bind('click', function(){
			$('input[name="' + $(this).attr('name') + '"]').not($(this)).trigger('deselect');
		});

		$(this).find(internalSelector).each(function() {
			inputToggler($(this), false);
		});
		$('body').on('change', selector + ' ' + internalSelector, function() {
			inputToggler($(this), true);
		}).on('deselect', selector + ' ' + internalSelector, function() {
			inputToggler($(this), true);
		});

		function inputToggler(element, effect) {
			var toggleId = element.attr('toggle-id');
			var toggleClass = element.attr('toggle-class');
			var toggleReverse = element.attr('toggle-reverse');
			var reverse = false;

			if(typeof toggleReverse !== 'undefined' && toggleReverse !== false) {
				reverse = true;
			}

			if(typeof toggleId !== 'undefined' && toggleId !== false) {
				realToggle(element, $('#' + toggleId), reverse, effect);
			}

			if(typeof toggleClass !== 'undefined' && toggleClass !== false) {
				realToggle(element, $('.' + toggleClass), reverse, effect);
			}
		}

		function realToggle(element, elementToToggle, reverse, effect) {
			var checked = element.is(':checked');
			if(reverse) checked = !checked;

			if(checked && elementToToggle.css('display') == 'none'){
				if(effect && settings.effect === 'fade')
					elementToToggle.fadeIn(settings.duration);
				else if(effect && settings.effect === 'slide')
					elementToToggle.slideDown(settings.duration);
				else
					elementToToggle.show();

				if(settings.focusOnExpand === true) {
					elementToToggle.find(':input:first').focus();
				}
				
				settings.onShow(elementToToggle);
			} else if(!checked && elementToToggle.css('display') != 'none') {
				if(effect && settings.effect === 'fade')
					elementToToggle.fadeOut(settings.duration);
				else if(effect && settings.effect === 'slide')
					elementToToggle.slideUp(settings.duration);
				else
					elementToToggle.hide();
				
				settings.onHide(elementToToggle);
			}
		}
	};
}( jQuery ));
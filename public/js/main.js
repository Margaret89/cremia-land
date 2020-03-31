$(document).ready(function () {
// Нестадартный datepicker
	$('.js-datepicker').datepicker();

// Слайдер услуг
	if ($('.js-service-slider').length) {
		$('.js-service-slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: true,
			arrows: true,
			responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
					arrows: false,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			]
		});
	}

// Слайдер фото
	if ($('.js-gallery-slider').length) {
		$('.js-gallery-slider').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
					arrows: false,
					dots: false,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				}
			},
			]
		});
	}

// Открыть/Закрыть описание комнаты
	if ($('.js-room-head-switch').length) {
		$('.js-room').on('click','.js-room-head-switch',function(event){
			event.preventDefault();
			var $parent = $(this).parents('.js-room');
			var tempTextSwitch = $(this).text();

			$parent.toggleClass('opened');
			$(this).text($(this).data('switch'));
			$(this).data('switch',tempTextSwitch);

			if($parent.hasClass('opened')){
				$parent.children('.js-room-content').slideDown(400);

				if(!$parent.find('.js-gallery-slider-room').hasClass('slick-initialized')){
					$parent.find('.js-gallery-slider-room').slick({
						infinite: false,
						slidesToShow: 3,
						slidesToScroll: 1,
						arrows: true,
						dots: false,
						responsive: [
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								dots: false,
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								arrows: false,
								dots: true,
							}
						},
						]
					});
				}
			}else{
				$parent.children('.js-room-content').slideUp(400);
				
			}
		});

		$('.js-room-input').each(function(indx, element){
			if($(this).prop('checked')){
				$(this).parents('.js-room').addClass('active');
			}
		});

		$('.js-room-input').change(function() {
			var $parent = $(this).parents('.js-room');
			var nameElem = $(this).attr('name');

			$('input[name='+nameElem+']').parents('.js-room').removeClass('active');

			if($(this).prop('checked')){
				$parent.addClass('active');
			}else{
				$parent.removeClass('active');
			}
		});
	}

// Раскрывающийся блок
	if ($('.js-unwrap-switch').length) {
		$('.js-unwrap').on('click','.js-unwrap-switch',function(event){
			event.preventDefault();
			var $parent = $(this).parents('.js-unwrap');
			var tempTextSwitch = $(this).text();

			$parent.toggleClass('opened');
			$(this).text($(this).data('switch'));
			$(this).data('switch',tempTextSwitch);

			if($parent.hasClass('opened')){
				$parent.children('.js-unwrap-content').slideDown(400);
			}else{
				$parent.children('.js-unwrap-content').slideUp(400);
				
			}
		});
	}

// Стилизация выпадающего списка
	if ($('.js-select').length) {
		$('.js-select').select2({
			minimumResultsForSearch: Infinity,
			 placeholder: function(){
				$(this).attr('data-placeholder');
			},
		});
	}

// Маска для телефона
	$.mask.definitions['~'] = "[+-]";
	$('.js-phone').mask("+7 (999) 999-9999");

// Обрезание текста по количеству символов
	if ($('.js-read-more').length) {
		var countSymb = $('.js-read-more').attr('data-count');

		$('.js-read-more').readmore({
			brief: countSymb,
			addition: 100,
			smoothly: 300,
			textOpen: 'Показать весь отзыв', 
		});
	}

// Слайдер отзывов
	if ($('.js-review-slider').length) {
		$('.js-review-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: true,
			responsive: [
			{
				breakpoint: 1100,
				settings: {
					arrows: false,
				}
			},
			]
		});
	}

// Yandex карта
	if ($('#map').length) {
		// Иницилизация карты
		ymaps.ready(init);

		function init(){
			var myMap;

			myMap = new ymaps.Map("map", {
				center: [43.676481, 39.604076],
				zoom: 16,
				controls: []
			});

			var myPlacemark = new ymaps.Placemark([43.676481, 39.604076] , {},);

				myMap.geoObjects.add(myPlacemark);
		}
	}
});
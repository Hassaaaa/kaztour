$(document).ready(function () {
    loadGoods();
    initResizeImg();
    initAdditionSwipper();
});

function initAdditionSwipper() {
    const swiperArticle = new Swiper('.specialcontainer .swiper', {
        slidesPerView: 1,
        allowTouchMove: true,
        nested: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            992: { slidesPerView: 2 },
            1250: { slidesPerView: 4 },
        },
        on: {
            init: function (swiper) {
                let slidesPerView = swiper.passedParams.slidesPerView;
                for (let breakpoint in swiper.passedParams.breakpoints) {
                    if (window.innerWidth >= breakpoint) {
                        slidesPerView = swiper.passedParams.breakpoints[breakpoint].slidesPerView;
                    }
                }
            },
            slideChange: function (swiper) {
                let slidesPerView = swiper.passedParams.slidesPerView;
                for (let breakpoint in swiper.passedParams.breakpoints) {
                    if (window.innerWidth >= breakpoint) {
                        slidesPerView = swiper.passedParams.breakpoints[breakpoint].slidesPerView;
                    }
                }
                swiperArticle.slideTo(swiper.realIndex);
            },
            resize: function (swiper) {
                let slidesPerView = swiper.passedParams.slidesPerView;
                for (let breakpoint in swiper.passedParams.breakpoints) {
                    if (window.innerWidth >= breakpoint) {
                        slidesPerView = swiper.passedParams.breakpoints[breakpoint].slidesPerView;
                    }
                }

                swiperArticle.slideTo(swiper.realIndex);
            },
        }
    });
}

function loadGoods() {
    const container = $('#document-goods');
    const url = container.data('url');

    getDocumentGoods(url, container);
}

function getDocumentGoods(url, container) {

    $.ajax({
        url: url,
        type: "GET",
        success: function (data) {
            if (typeof (data) === 'string') {
                data = data.trim();

                if (data) {
                    container.html(data);
                    container.show();
                    initSwipers();
                }
            }
        }
    });
}

function initResizeImg() {
    $('.flexin-specs .raw-specs').addClass('new-design');
}

$(window).on('load', function () {
	var swiper_home_main = {
		slidesPerView: 1,
		watchSlidesProgress: true,
		preloadImages: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		lazy: true,
		loop: true,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3,
		},
		navigation: {
			nextEl: '#home__slider-main .swiper-button-next',
			prevEl: '#home__slider-main .swiper-button-prev',
		},
		on: {
			lazyImageReady: (swiper) => {
				swiper.update()
			}
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true
        }
	};

	var swiper_product_of_the_day = {
		slidesPerView: 1,
		watchSlidesProgress: true,
		preloadImages: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		lazy: true,
		loop: true,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on: {
			lazyImageReady: (swiper) => {
				swiper.update()
			}
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true
        }
	};

	const mainBannersSwiper = new Swiper('#home__slider-main', swiper_home_main);

	if (mainBannersSwiper.slides.length > 0) {
		mainBannersSwiper.autoplay.start();
    }

	const productOfTheDaySwiper = new Swiper('#home__slider-products', swiper_product_of_the_day);

	if (productOfTheDaySwiper.slides.length > 0) {
		productOfTheDaySwiper.autoplay.start();
	}

	var swiper_home_advantages = {
		slidesPerView: 1,
		watchSlidesProgress: true,
		preloadImages: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		lazy: true,
		loop: false,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3,
		},
		on: {
			lazyImageReady: (swiper) => {
				swiper.update()
			}
		},
		breakpoints: {
			640: { slidesPerView: 2 },
			768: { slidesPerView: 3 },
			992: { slidesPerView: 4 },
		}
	};

	var home__advantages = new Swiper('#home__advantages-slider', swiper_home_advantages);

	var swiper_home = {
		slidesPerView: 1,
		watchSlidesProgress: true,
		preloadImages: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		lazy: true,
		loop: true,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on: {
			lazyImageReady: (swiper) => {
				swiper.update()
			}
		},
		breakpoints: {
			768: { slidesPerView: 2 },
			1000: { slidesPerView: 3 }
		}
	};

	var home__slider = new Swiper('#home__slider', swiper_home);

	var swiper_home_articles = {
		slidesPerView: 1,
		watchSlidesProgress: true,
		preloadImages: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		lazy: true,
		loop: true,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3,
		},
		on: {
			lazyImageReady: (swiper) => {
				swiper.update()
			}
		},
		breakpoints: {
			768: { slidesPerView: 2 },
			1050: { slidesPerView: 3 }
		}
	};

	var home__advantages = new Swiper('#articles__items-slider', swiper_home_articles);

	/*var swiper_products_options = swiper_products;
	swiper_products_options.navigation = { nextEl: '.swiper-button-next.products__slider-button-1-js', prevEl: '.swiper-button-prev.products__slider-button-1-js', };
	new Swiper('.products__slider-1-js', swiper_products_options);

	swiper_products_options.navigation = { nextEl: '.swiper-button-next.products__slider-button-2-js', prevEl: '.swiper-button-prev.products__slider-button-2-js', };
	new Swiper('.products__slider-2-js', swiper_products_options);

	swiper_products_options.navigation = { nextEl: '.swiper-button-next.products__slider-button-3-js', prevEl: '.swiper-button-prev.products__slider-button-3-js', };
	new Swiper('.products__slider-3-js', swiper_products_options);

	swiper_products_options.navigation = { nextEl: '.swiper-button-next.products__slider-button-4-js', prevEl: '.swiper-button-prev.products__slider-button-4-js', };
	new Swiper('.products__slider-4-js', swiper_products_options);*/

	initSwipers();
});
/* Instruction
 * button (.document-action-button') attributes
 * data-show - target element selector 
 * data-hide - target element selector 
 * data-toggle - target element selector 
 * data-animation  animation time
 *
 *   -- Tabs elements --
 *   
 *   <button class="cab" data-show=".s-container.div1" data-hide=".s-container" data-event="click">Button show div1</button>
 *   <button class="cab" data-show=".s-container.div2" data-hide=".s-container" data-event="click">Button show div2</button>
 *   <button class="cab" data-show=".s-container.div3" data-hide=".s-container" data-event="click">Button show div3</button>
 *
 *   <div class="s-container div1"><p> Hide content </p></div>
 *   <div class="s-container div2" hidden><p> Hide content1 </p></div>
 *   <div class="s-container div3" hidden><p> Hide content2 </p></div>
 *   
 *  -- Toggle button -- 
 *  
 *  <button class="cab" data-toggle=".s-container.div4" data-event="click">Button show/hide</button>
 *  <div class="s-container div4" hidden><p> Hide content </p></div>
 * */

$(document).ready(function () {
    const buttons = $('.custom-action-button, .cab');
    const citiesListSelector = '.cities-drop-down-list';
    const citiesList = $(citiesListSelector);
    
    if (buttons.length) {
        buttons.each(function (index, element) {
            const button = $(element);
            const event = button.data('event');

            if (event) {
                if (button.data('hide')) {
                    button.on(event, hideBlock);
                }

                if (button.data('show')) {
                    button.on(event, shwoBlock);
                }

                if (button.data('toggle')) {
                    button.on(event, toggleBlock);
                }
            }
        });
    }

    if (citiesList.length) {
        createCitySelect(citiesList, citiesListSelector);
    }

    customFormsSetup();
});

function toggleClass(event) {
    const activeCssClass = $(event.currentTarget).data('activeClass');

    if (activeCssClass && activeCssClass.length) {
        const buttons = $(`[data-active-class="${activeCssClass}"]`);
        buttons.each(function (index, element) { $(element).removeClass(activeCssClass) });

        $(event.currentTarget).addClass(activeCssClass);
    }
}

function hideBlock(event) {
    const targetSelector = $(event.currentTarget).data('hide');

    if (targetSelector) {
        const target = $(targetSelector);

        if (target.length) {
            const animationTime = $(event.currentTarget).data('animation');

            if (animationTime) {
                target.hide(animationTime);
            } else {
                target.hide();
            }

            target.prop('hidden', true);
        }
    }
}

function shwoBlock(event) {
    const targetSelector = $(event.currentTarget).data('show');
    const fixedOffset = 700;

    if (targetSelector) {
        const target = $(targetSelector);
        let navigateElement = $('.qna-blocks-desktop');

        if (target.length) {
            const animationTime = $(event.currentTarget).data('animation');

            if (animationTime) {
                target.show(animationTime);
            }
            else {
                target.show();
            }

            target.prop('hidden', false);
            toggleClass(event);

            $('html, body').animate({ scrollTop: navigateElement.offset().top - fixedOffset }, 'slow')
        }
    }
}

function toggleBlock(event) {
    const targetSelector = $(event.currentTarget).data('toggle');
    const fixedOffset = 50;

    if (targetSelector) {
        const target = $(targetSelector);

        if (target.length) {
            const animationTime = $(event.currentTarget).data('animation');
            let navigateElement = $(event.currentTarget).parents('.card-mobile').find(targetSelector).first();

            if (animationTime) {
                target.toggle(animationTime);
            } else {
                target.toggle();
            }

            target.each(function () {
                $(this).prop('hidden', !$(this).prop('hidden'));
            })

            toggleClass(event);

            if (navigateElement.css('display') !== 'none') {
                $('html, body').animate({ scrollTop: navigateElement.offset().top - fixedOffset }, 'slow')
            }
        }
    }
}

function createCitySelect(target, selector) {
    target.html('');

    data = {
        defaultValue: target.data('default-value')
    };

    $.ajax({
        type: 'GET',
        url: '/Home/GetCitiesDropDownList',
        data: data,
        success: function (response) {
            target.html(response);
            target = $(selector);
            let disableDefault = target.data('default-value-disabled');

            if (disableDefault) {
                target.find('option').first().prop('disabled', true);
            }

            if ($('.cities-drop-down-list.cab').length) {
                $(".cities-drop-down-list select").change(function () {
                    const dataDiv = $(".cities-drop-down-list");
                    const animationTime = dataDiv.data('animation');
                    const targetShowClass = `${dataDiv.data('show')}${$(this).val()}`;
                    const targetHideClass = dataDiv.data('hide');

                    if (animationTime) {
                        $(targetHideClass).hide(animationTime);
                        $(targetShowClass).show(animationTime);
                    }
                    else {
                        $(targetHideClass).hide(animationTime);
                        $(targetShowClass).show(animationTime);
                    }
                });
            }
        }
    });
}

function customFormsSetup() {
    const forms = document.getElementsByClassName('сustom-form');

    if (forms.length <= 0) {
        return;
    }

    for (i = 0; i < forms.length; i++) {
        let form = forms[i];
        form.addEventListener('submit', function (e) {

            e.preventDefault();

            const request = new XMLHttpRequest();
            const url = form.getAttribute('action');
            const type = form.getAttribute('method').toUpperCase();
            const resultElement = document.getElementById(form.getAttribute('data-result'));
            let params = '';

            let inputs = form.getElementsByTagName('input')

            for (j = 0; j < inputs.length; j++) {
                let input = inputs[j];

                if (input.getAttribute('type') == 'submit') {
                    continue;
                }
                else {

                    if (j == 0) {
                        params += `${input.getAttribute('name')}=${input.value}`;
                    }
                    else {
                        params += `&${input.getAttribute('name')}=${input.value}`;
                    }
                }
            }

            request.open(type, url, true);
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            request.addEventListener('readystatechange', () => {

                if (request.readyState === 4 && request.status === 200) {
                    let jsonResponse = JSON.parse(request.responseText);

                    if (resultElement == null) {
                        $.fancybox.open(`<div class="message">${jsonResponse['message']}</div>`);
                    }
                    else {
                        resultElement.innerHTML = jsonResponse['message'];
                    }
                }
            });
            request.send(params);
            resultElement.innerHTML = '...';
        });
    }
}
$document.ready(function () {
    tryGetPreorderForm();
});

function tryGetPreorderForm() {
    const container = $('.preorder-form-container');

    if (container.length) {
        const url = container.data('loadurl');
        const formId = container.data('formid');

        $.ajax({
            type: 'POST',
            url: url,
            data: { formId },
            success: function (data) {
                applyPreorderForm(container, data);
                initPreorderEventListeners(container);
            }
        });
    }
}

function applyPreorderForm(container, data) {
    container.html(data);
    initGallerySwipers();
}

function initGallerySwipers() {
    const swiper_gallery_thumbs = new Swiper('.swiper-gallery-thumbs', {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 10,
        direction: 'vertical',
        allowTouchMove: true,
        navigation: {
            nextEl: '.gallery-thumbs__nav-next',
            prevEl: '.gallery-thumbs__nav-prev',
        },

    });

    new Swiper('.swiper-gallery-main', {
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: swiper_gallery_thumbs,
        },
    });
}

function initPreorderEventListeners(container) {
    container.on('click', '.preorder-btn', function () {
        $(this).addClass('btn-loading');
    });

    container.on('click', '.prop-item:not(.active)', function () {
        const itemId = $('.model-selector').data('selecteditem');
        const url = container.data('loadurl')
        const formId = container.data('formid');
        const slug = $(this).data('slug');

        const loadingBlock = container.find('.product__main-info-block').addClass('loading');

        $.ajax({
            type: 'POST',
            url: url,
            data: {
                formId, slug, itemId
            },
            success: function (data) {
                applyPreorderForm(container, data);
            },
            complete: function () {
                loadingBlock.removeClass('loading');
            }
        });
    });

    container.on('click', '.model-item:not(.active)', function () {
        const itemId = $(this).data('itemid');
        const url = container.data('loadurl')
        const formId = container.data('formid');

        const loadingBlock = container.find('.product__main-info-block').addClass('loading');

        $.ajax({
            type: 'POST',
            url: url,
            data: {
                formId, itemId
            },
            success: function (data) {
                applyPreorderForm(container, data);
            },
            complete: function () {
                loadingBlock.removeClass('loading');
            }
        })
    });

    container.on('click', '.payment-option:not(.active)', function () {
        container.find('.full-payment-button').toggle();
        container.find('.pre-payment-button').toggle();
    });
}
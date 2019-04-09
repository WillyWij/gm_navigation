function getHiddenProp() {
    var prefixes = ['webkit', 'moz', 'ms', 'o'];

    if ('hidden' in document) return 'hidden';

    for (var i = 0; i < prefixes.length; i++) {
        if ((prefixes[i] + 'Hidden') in document)
            return prefixes[i] + 'Hidden';
    }

    return null;
}

function isHidden() {
    var prop = getHiddenProp();
    if (!prop) return false;

    return document[prop];
}

var gmWidgetContainer = $('.gm-widget-container'),
    gmWidgetNav = $('.gm-widget-navigation'),

    featureContent = $('.widget-bubble__content'),
    navStatLI = $('#nav-statistic'),
    navStatLink = $('#nav-statistic a'),
    navfeaturedProdLI = $('#nav-featured-product'),
    navfeaturedProdLink = $('#nav-featured-product a'),
    navEtalaseLI = $('#nav-showcase'),
    navEtalaseLink = $('#nav-showcase a'),
    navAdminLI = $('#nav-admin'),
    navAdminLink = $('#nav-admin a'),
    navCoverLI = $('#nav-cover'),
    navCoverLink = $('#nav-cover a'),
    navCashbackLI = $('#nav-cashback'),
    navCashbackLink = $('#nav-cashback a'),
    navOpporLI = $('#nav-oppor'),
    navOpporLink = $('#nav-oppor a');

var learnScoreProd = " <a href='https://seller.tokopedia.com/maksimalkan-skor-produk/' target='_blank'>" + goldLoc('Learn product score') + "</a>"

var navMap = {
    1: navCoverLI,
    2: navfeaturedProdLI,
    3: navEtalaseLI,
    5: navOpporLI,
    6: navCashbackLI,
    7: navAdminLI,
    8: navStatLI
}

var headerOverlay = `<div class="header-overlay">`;
var headerOverlayGMIe = `<div class="header-overlay-gmIe">`;

function visitedNav(navSelector) {
    if (navSelector.hasClass('visited')) {
        $('.hopscotch-bubble').addClass('hide');
        return true;
    }

    return false;
}

var statTour = {
    id: "stat-hopscotch",
    steps: [{
        title: goldLoc('STAT_HOPSCOTCH_TITLE'),
        content: goldLoc('STAT_HOPSCOTCH_DESC'),
        target: "gmstat-section-head",
        yOffset: 12,
        onShow: function() {
            if (!visitedNav(navStatLI)) {
                $('#gm-nav-stat').show();
                $('#gmstat-section-head').parents('.gmstat-dashboard').css('overflow', 'visible');
                $('#gmstat-section-head').addClass('stat__hopscotch');

                $('.hopscotch-bubble-close, .hopscotch-bubble-number').remove();
                $('.hopscotch-actions .hopscotch-nav-button').text(goldLoc('GM_NAV_UNDERSTAND'));
                if (!$('.header-overlay').length) {
                    $('.navbar-fixed-top').append(headerOverlay);
                }
                $('.navbar-fixed-top .navbar-inner').addClass('no-box-shadow');
            }
        },
        placement: "bottom"
    }]
};

var featuredProdTour = {
    id: "featured-product-hopscotch",
    steps: [{
        title: goldLoc('FEATURED_PROD_HOPSCOTCH_TITLE'),
        content: goldLoc('FEATURED_PROD_HOPSCOTCH_DESC'),
        target: "featuredprod-header",
        yOffset: 12,
        onShow: function() {
            if (!visitedNav(navfeaturedProdLI)) {
                $('#gm-nav-featured-product').show();
                $('#featuredprod-header').addClass('featured-prod-header__hopscotch');
                $('.hopscotch-bubble-close, .hopscotch-bubble-number').remove();
                $('.hopscotch-actions .hopscotch-nav-button').text(goldLoc('GM_NAV_UNDERSTAND'));
            }
        },
        placement: "bottom"
    }]
};

var etalaseTour = {
    id: "etalase-hopscotch",
    steps: [{
        title: goldLoc('SHOWCASE_HOPSCOTCH_TITLE'),
        content: goldLoc('SHOWCASE_HOPSCOTCH_DESC'),
        target: "etalase-header",
        yOffset: 12,
        onShow: function() {
            if (!visitedNav(navEtalaseLI)) {
                $('#gm-nav-etalase').show();
                $('#etalase-header').addClass('etalase__hopscotch');
                $('.hopscotch-bubble-close, .hopscotch-bubble-number').remove();
                $('.hopscotch-actions .hopscotch-nav-button').text(goldLoc('GM_NAV_UNDERSTAND'));
            }
        },
        placement: "bottom"
    }]
};

var adminTour = {
    id: "admin-hopscotch",
    steps: [{
        title: goldLoc('ADMIN_HOPSCOTCH_TITLE'),
        content: goldLoc('ADMIN_HOPSCOTCH_DESC'),
        target: "admin-hopscotch",
        yOffset: -12,
        onShow: function() {
            if (!visitedNav(navAdminLI)) {
                $('#gm-nav-admin').show();
                $('#admin-hopscotch').addClass('admin__hopscotch');
                $('.hopscotch-bubble-close, .hopscotch-bubble-number').remove();
                $('.hopscotch-actions .hopscotch-nav-button').text(goldLoc('GM_NAV_UNDERSTAND'));
            }
        },
        placement: "top"
    }]
};

var coverTour = {
    id: "cover-hopscotch",
    steps: [{
        title: goldLoc('COVER_HOPSCOTCH_TITLE'),
        content: goldLoc('COVER_HOPSCOTCH_DESC'),
        target: "cover-hopscotch",
        yOffset: -12,
        onShow: function() {
            if (!visitedNav(navCoverLI)) {
                $('#gm-nav-cover').show();
                $('#cover-hopscotch').addClass('cover__hopscotch');
                $('.hopscotch-bubble-close, .hopscotch-bubble-number').remove();
                $('.hopscotch-actions .hopscotch-nav-button').text(goldLoc('GM_NAV_UNDERSTAND'));
            }
        },
        placement: "top"
    }]
};

var cashbackTour = {
    id: "cashback-hopscotch",
    steps: [{
        title: "Cashback",
        content: goldLoc('CASHBACK_HOPSCOTCH_DESC'),
        target: "cashback-hopscotch",
        yOffset: -12,
        onShow: function() {
            if (!visitedNav(navCashbackLI)) {
                $('#gm-nav-cashback').show();
                $('#cashback-hopscotch').addClass('cashback__hopscotch');
                $('.hopscotch-bubble-close, .hopscotch-bubble-number').remove();
                $('.hopscotch-actions .hopscotch-nav-button').text(goldLoc('GM_NAV_UNDERSTAND'));
            }
        },
        placement: "top"
    }]
};

var opporTour = {
    id: "oppor-hopscotch",
    steps: [{
        title: goldLoc('OPPOR_HOPSCOTCH_TITLE'),
        content: goldLoc('OPPOR_HOPSCOTCH_DESC'),
        target: "oppor-hopscotch",
        yOffset: 12,
        onShow: function() {
            if (!visitedNav(navOpporLI)) {
                $('#gm-nav-oppor').show();
                $('.hopscotch-bubble-close, .hopscotch-bubble-number').remove();
                $('.hopscotch-actions .hopscotch-nav-button').text(goldLoc('GM_NAV_UNDERSTAND'));
                $('.hopscotch-actions .hopscotch-nav-button').attr('style', 'padding: 0 10px !important');
                $('#oppor-hopscotch').addClass('oppor__hopscotch');
            }
        },
        placement: "bottom"
    }]
};

var addProductTour = {
    id: "add-product-hopscotch",
    steps: [{
        title: goldLoc('ADD_PRODUCT'),
        content: goldLoc('ADD_PROD_HOPSCOTCH_DESC') + ' ' + learnScoreProd,
        target: "add-product-hopscotch",
        yOffset: 12,
        xOffset: -180,
        arrowOffset: 250,
        onShow: function() {
            $('#gm-ie-add-product').show();
            $('.hopscotch-bubble-close, .hopscotch-bubble-number').remove();
            $('.hopscotch-actions .hopscotch-nav-button').text(goldLoc('GM_NAV_UNDERSTAND'));
            $('#add-product-hopscotch').addClass('add-product__hopscotch');
        },
        placement: "bottom"
    }]
};

function urlParameter(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return decodeURI(results[1]) || 0;
    }
}

function onboardingWelcome(trackCount) {
    var nref = urlParameter('nref');
    if ($('#gm-onboarding-welcome').length && nref && nref == "gm_onboarding" && (!Number.isInteger(trackCount) || trackCount < 3)) {
        $('#gm-onboarding-welcome-heading').text(goldLoc('GM_ONBOARDING_WELCOME_HEADING'));
        $('#gm-onboarding-welcome-paragraph').text(goldLoc('GM_ONBOARDING_WELCOME_PARAGRAPH'));
        $('#gm-onboarding-welcome-button').text(goldLoc('GM_ONBOARDING_WELCOME_BUTTON'));

        if (!$('.header-overlay').length) {
            $('.navbar-fixed-top').append(headerOverlayGMIe);
        }
        $('.navbar-fixed-top .navbar-inner').addClass('no-box-shadow');
        $('#gm-onboarding-welcome').show();
        $('html').addClass('dialog-mode');

        $('#gm-onboarding-welcome .btn-close-onboarding-welcome, #gm-onboarding-welcome .unf-modal__close').on('click', function() {
            $(this).parents('#gm-onboarding-welcome').hide();
            $('.navbar-fixed-top .navbar-inner').removeClass('no-box-shadow');
            $('.header-overlay-gmIe').remove();
            $('html').removeClass('dialog-mode');

            ajaxNavState("10", "POST", false);
        });

        $('#gm-onboarding-welcome .btn-close-onboarding-welcome').on('click', function() {
            if ($('.gm-welcome-bubble-container').length) {
                setTimeout(function() { $('.gm-welcome-bubble-container').show(); }, 300);
                $('.gm-welcome-bubble-container a.gm-bubble-btn-close').on('click', function() {
                    $(this).parents('.gm-welcome-bubble-container').remove();
                })
            }

            pushGTM('gm on boarding', "click pelajari gold merchant");
        });
    }

}

function ieAddProduct() {
    if ($('#gm-ie-add-product').length && localStorage.gmIeAddProductTrigger) {
        localStorage.removeItem("gmIeAddProductTrigger");

        if (!localStorage.gmIeAddProductPrevTotal) {
            var currTotal = $('#list-product-table').children('tr').length - $('#list-product-table').find('.p-under-review').length - 1;

            if (currTotal < 0) {
                currTotal = 0;
            }

            localStorage.gmIeAddProductPrevTotal = currTotal;
        }

        hopscotch.startTour(addProductTour);
        $('.hopscotch-nav-button').on('click', function() {
            $('.hopscotch-bubble').addClass('hide');
            $('.hopscotch-bubble').css('top', '');
            $('.hopscotch-bubble').css('left', '');
            $('#gm-ie-add-product').hide();
            $('#add-product-hopscotch').removeClass('add-product__hopscotch');

            ieAddProductSuccess();
        });
    } else {
        ieAddProductSuccess();
    }
}

function ieAddProductSuccess() {
    if ($('#gm-ie-popup-add-product-success').length && localStorage.gmIeAddProductPrevTotal) {

        var prodTarget = 5;
        var prevTotal = parseInt(localStorage.gmIeAddProductPrevTotal);
        var currTotal = $('#list-product-table').children('tr').length - $('#list-product-table').find('.p-under-review').length - 1;

        if (currTotal < 0) {
            currTotal = 0;
        }

        if (prevTotal != "NaN" && prevTotal < currTotal) {
            if (currTotal < prodTarget) {

                $('#gm-ie-prod-total').text(currTotal);
                $('.gm-ie-prod-target').text(prodTarget);
                $('#gm-ie-prod-target-left').text((prodTarget - currTotal));

                var currentHtml = $('#gm-ie-popup-add-product-success-paragraph').html();
                $('#gm-ie-popup-add-product-success-paragraph').html(currentHtml + ' ' + learnScoreProd);

                localStorage.gmIeAddProductPrevTotal = currTotal;

                $('#gm-ie-popup-add-product-success').show();

                $('#gm-ie-popup-add-product-success .btn-later-gmIe, #gm-ie-popup-add-product-success .unf-modal__close').on('click', function() {
                    $(this).parents('#gm-ie-popup-add-product-success').hide();
                    $('html').removeClass('dialog-mode');
                });

            } else {
                localStorage.removeItem("gmIeAddProductPrevTotal");
                localStorage.gmIeAddProduct = 1;
            }
        }

        $('gm-ie-popup-add-product-success-button-1').on('click', function() {
            localStorage.removeItem("gmIeAddProductPrevTotal");
        });
    }
}

function iePopup(ieAddProductLI, ieAddProductLink, ieCoverLI, ieCashbackLI, ieCashbackLink, ieCoverLink, ieTopAdsLI, ieTopAdsLink) {
    var nref = urlParameter('nref');
    if ($('#gm-ie-popup').length && nref && nref == "gm_inexperience") {
        if (!$('.header-overlay').length) {
            $('.navbar-fixed-top').append(headerOverlayGMIe);
        }
        $('.navbar-fixed-top .navbar-inner').addClass('no-box-shadow');
        $('#gm-ie-popup').show();
        $('html').addClass('dialog-mode');

        $('#gm-ie-popup .btn-close-gmIe-popup, #gm-ie-popup .unf-modal__close').on('click', function() {
            $(this).parents('#gm-ie-popup').hide();
            $('.navbar-fixed-top .navbar-inner').removeClass('no-box-shadow');
            $('.header-overlay-gmIe').remove();
            $('html').removeClass('dialog-mode');
        });

        ieAddProductLink.on('mousedown', function() {
            localStorage.gmIeAddProductTrigger = "1";
            pushGTM('tutorial for new gm', "click add product");
        });
        ieCashbackLink.on('mousedown', function() {
            localStorage.gmNavCashback = "1";
            pushGTM('tutorial for new gm', "click cashback");
        });
        ieCoverLink.on('mousedown', function() {
            localStorage.gmNavCover = "1";
            pushGTM('tutorial for new gm', "click shop cover");
        });
        ieTopAdsLink.on('mousedown', function() {
            if (!ieTopAdsLI.hasClass('visited')) {
                ieTopAdsLI.addClass('visited');
                ajaxNavState("11", "POST", false);
            }
            pushGTM('tutorial for new gm', "click topads");
        });

        $('#gm-ie-popup .btn-close-gmIe-popup').on('click', function() {
            pushGTM('tutorial for new gm', "click got it");
        });

        var hiddenProp = getHiddenProp();
        if (hiddenProp) {
            var evtname = hiddenProp.replace(/[H|h]idden/, '') + 'visibilitychange';
            document.addEventListener(evtname, function() {
                if (!isHidden()) {
                    if (localStorage.gmIeAddProduct) {
                        localStorage.removeItem("gmIeAddProduct");
                        ieAddProductLI.addClass('visited');
                    }

                    if (localStorage.gmIeCover) {
                        localStorage.removeItem("gmIeCover");
                        ieCoverLI.addClass('visited');
                    }

                    if (localStorage.gmIeCashback) {
                        localStorage.removeItem("gmIeCashback");
                        ieCashbackLI.addClass('visited');
                    }
                }
            });
        }
    }
}

$(document).ready(function() {
    ajaxNavState("all", "GET", loadAll);

    gmWidgetNav.on('click', function() {
        if ($('.gm-welcome-bubble-container').length) {
            $('.gm-welcome-bubble-container').remove();
            setTimeout(function() {
                gmWidgetNav.toggleClass('opened');
            }, 200);
        } else {
            gmWidgetNav.toggleClass('opened');
        }

    });

    $('.gm-nav-popup .btn-choose-gmNav').on('click', function() {
        $('html').removeClass('dialog-mode');
        $(this).parents('.gm-nav-popup').hide();
        if (!gmWidgetNav.hasClass('opened')) {
            setTimeout(function() { gmWidgetNav.toggleClass('opened'); }, 200);
        }

        markVisited()

        featureContent.toggleClass('widget-bubble__Slide');
    });

    $('.gm-nav-popup .btn-choose-gmNav').parents('.gm-nav-popup').find('.btn-close-gmNav-popup, .unf-modal__close').on('click', function() {
        markVisited()
    })

    $('.gm-nav-popup .unf-modal__close, .gm-nav-popup .btn-close-gmNav-popup').on('click', function() {
        $('html').removeClass('dialog-mode');
        $(this).parents('.gm-nav-popup').hide();
    });

});

function markVisited() {
    if ($('#gm-nav-featured-product').length && $('#manageFeaturedProduct-body').children('tr').length >= 3) {
        if (!navfeaturedProdLI.hasClass('visited')) {
            navfeaturedProdLI.addClass('visited');
        }
    } else if ($('#gm-nav-etalase').length) {
        if (!navEtalaseLI.hasClass('visited')) {
            navEtalaseLI.addClass('visited');
        }
    } else if ($('#gm-nav-admin').length) {
        if (!navAdminLI.hasClass('visited')) {
            navAdminLI.addClass('visited');
        }
    } else if ($('#gm-nav-cover').length) {
        if (!navCoverLI.hasClass('visited')) {
            navCoverLI.addClass('visited');
        }
    } else if ($('#gm-nav-cashback').length) {
        if (!navCashbackLI.hasClass('visited')) {
            navCashbackLI.addClass('visited');
        }
    } else if ($('#gm-nav-oppor').length) {
        if (!navOpporLI.hasClass('visited')) {
            navOpporLI.addClass('visited');
        }
    }
}

function navStat() {
    if ($('#gm-nav-stat').length) {
        navStatLink.prop('href', 'javascript:void(0);');

        if (localStorage.gmNavStat) {
            localStorage.removeItem("gmNavStat");
            gmWidgetNav.removeClass('opened');
            featureContent.removeClass('widget-bubble__Slide');

            hopscotch.startTour(statTour);

            $('.hopscotch-nav-button').on('click', function() {
                $('.hopscotch-bubble').addClass('hide');
                $('.hopscotch-bubble').css('top', '');
                $('.hopscotch-bubble').css('left', '');
                $('#gm-nav-stat').hide();
                $('#gmstat-section-head').removeClass('stat__hopscotch');
                navStatLI.addClass('visited');
                $('.header-overlay').remove();
                $('.navbar-fixed-top .navbar-inner').removeClass('no-box-shadow');
                $('#gmstat-section-head').parents('.gmstat-dashboard').css('overflow', 'hidden');

                ajaxNavState("8", "POST", false);
            });
        }
    }
}

function navFeaturedProd() {
    if ($('#gm-nav-featured-product').length) {
        navfeaturedProdLink.prop('href', 'javascript:void(0);');

        if (localStorage.gmNavFeaturedProd) {
            localStorage.removeItem("gmNavFeaturedProd");
            gmWidgetNav.removeClass('opened');
            featureContent.removeClass('widget-bubble__Slide');

            $('#gm-nav-popup-featured-product').remove();

            hopscotch.startTour(featuredProdTour);

            $('.hopscotch-nav-button').on('click', function() {
                $('.hopscotch-bubble').addClass('hide');
                $('.hopscotch-bubble').css('top', '');
                $('.hopscotch-bubble').css('left', '');
                $('#gm-nav-featured-product').hide();
                $('#featuredprod-header').removeClass('featured-prod-header__hopscotch');
            });
        }
    }
}

function navEtalase() {
    if ($('#gm-nav-etalase').length) {
        navEtalaseLink.prop('href', 'javascript:void(0);');

        if (localStorage.gmNavEtalase) {
            localStorage.removeItem("gmNavEtalase");
            gmWidgetNav.removeClass('opened');
            featureContent.removeClass('widget-bubble__Slide');

            hopscotch.startTour(etalaseTour);

            $('.hopscotch-nav-button').on('click', function() {
                $('.hopscotch-bubble').addClass('hide');
                $('.hopscotch-bubble').css('top', '');
                $('.hopscotch-bubble').css('left', '');
                $('#gm-nav-etalase').hide();
                $('#etalase-header').removeClass('etalase__hopscotch');
            });
        }
    }
}

function navAdmin() {
    if ($('#gm-nav-admin').length) {
        navAdminLink.prop('href', 'javascript:void(0);');

        if (localStorage.gmNavAdmin) {
            localStorage.removeItem("gmNavAdmin");
            gmWidgetNav.removeClass('opened');
            featureContent.removeClass('widget-bubble__Slide');

            hopscotch.startTour(adminTour);

            $('.hopscotch-nav-button').on('click', function() {
                $('.hopscotch-bubble').addClass('hide');
                $('.hopscotch-bubble').css('top', '');
                $('.hopscotch-bubble').css('left', '');
                $('#gm-nav-admin').hide();
                $('#admin-hopscotch').removeClass('admin__hopscotch');
            });
        }
    }
}

function navCover() {
    if ($('#gm-nav-cover').length) {
        navCoverLink.prop('href', 'javascript:void(0);');

        if (localStorage.gmNavCover) {
            localStorage.removeItem("gmNavCover");
            gmWidgetNav.removeClass('opened');
            featureContent.removeClass('widget-bubble__Slide');

            hopscotch.startTour(coverTour);

            $('.hopscotch-nav-button').on('click', function() {
                $('.hopscotch-bubble').addClass('hide');
                $('.hopscotch-bubble').css('top', '');
                $('.hopscotch-bubble').css('left', '');
                $('#gm-nav-cover').hide();
                $('#cover-hopscotch').removeClass('cover__hopscotch');
            });
        }
    }
}

function navCashback() {
    if ($('#gm-nav-cashback').length) {
        navCashbackLink.prop('href', 'javascript:void(0);');

        if (localStorage.gmNavCashback) {
            localStorage.removeItem("gmNavCashback");
            gmWidgetNav.removeClass('opened');
            featureContent.removeClass('widget-bubble__Slide');

            if ($('#list-product-table tr:nth-child(2)').length && !$('#list-product-table tr:nth-child(2)').find('.p-under-review').length) {
                $('#gm-nav-popup-cashback').remove();
                $('#list-product-table tr:nth-child(2)').find('.cashback-edit').attr('id', 'cashback-hopscotch');
                hopscotch.startTour(cashbackTour);

                $('.hopscotch-nav-button').on('click', function() {
                    $('.hopscotch-bubble').addClass('hide');
                    $('.hopscotch-bubble').css('top', '');
                    $('.hopscotch-bubble').css('left', '');
                    $('#gm-nav-cashback').hide();
                    $('#cashback-hopscotch').removeClass('cashback__hopscotch');
                });
            } else {
                $('#gm-nav-popup-cashback').show();
                $('html').addClass('dialog-mode');
            }
        }
    }
}

function navOppor() {
    if ($('#gm-nav-oppor').length) {
        navOpporLink.prop('href', 'javascript:void(0);');

        if (localStorage.gmNavOppor) {
            localStorage.removeItem("gmNavOppor");
            gmWidgetNav.removeClass('opened');
            featureContent.removeClass('widget-bubble__Slide');
            hopscotch.startTour(opporTour);

            $('.hopscotch-nav-button').on('click', function() {
                $('.hopscotch-bubble').addClass('hide');
                $('.hopscotch-bubble').css('top', '');
                $('.hopscotch-bubble').css('left', '');
                $('#gm-nav-oppor').hide();
                $('#oppor-hopscotch').removeClass('oppor__hopscotch');
                navOpporLI.addClass('visited');

                ajaxNavState("5", "POST", false);
            });
        }
    }
}

function gmNavStickyScroll(footerW, footerWF) {
    $(window).scroll(function() {
        if (footerW.length) {
            if ($(window).scrollTop() + $(window).height() > $(document).height() - (footerW.outerHeight() - gmWidgetNav.height())) {
                gmWidgetContainer.css('bottom', '90px');
            } else {
                gmWidgetContainer.css('bottom', '20px');
            }
        } else if (footerWF.length) {
            if ($(window).scrollTop() + $(window).height() > $(document).height() - (footerWF.outerHeight() - gmWidgetNav.height())) {
                gmWidgetContainer.css('bottom', '140px');
            } else {
                gmWidgetContainer.css('bottom', '20px');
            }
        }
    });
}

function ajaxNavState(feature, method, nextFunc) {
    if (typeof gm_features != "undefined" &&
        gm_features[feature] && Object.keys(gm_features[feature]).length &&
        gm_features[feature][method] && Object.keys(gm_features[feature][method]).length
    ) {
        $.ajax({
            type: method,
            contentType: gm_features[feature][method].type,
            url: gm_features[feature][method].url,
            data: gm_features[feature][method].content,
            xhrFields: {
                withCredentials: (method == "POST")
            },
            success: function(result) {
                if (result) {
                    if (result.status && result.status == "OK" &&
                        !(result.error_message && result.error_message.length) &&
                        (typeof nextFunc == "function")
                    ) {
                        nextFunc(result);
                    }
                }
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', gm_features[feature][method].auth);
                xhr.setRequestHeader('Req-Date', gm_features[feature][method].date);
                xhr.setRequestHeader('Content-MD5', gm_features[feature][method].md5);
                if (method == 'POST') {
                    xhr.setRequestHeader('X-Method', method);
                    xhr.setRequestHeader('Content-Type', gm_features[feature][method].type);
                }
            }
        });
    }
}

var isGMNavOpen = false;

function gmNavMouseListener(ieAddProductLink, ieCashbackLink, ieCoverLink, ieTopAdsLI, ieTopAdsLink) {
    gmWidgetNav.on('click', function() {
        if (!isGMNavOpen) {
            pushGTM('gm navigation', "click gm navigation");
        }
        isGMNavOpen = !isGMNavOpen;
    });

    navStatLink.on('mousedown', function() {
        localStorage.gmNavStat = "1";
        pushGTM('gm navigation', "click statistik");
    });
    navfeaturedProdLink.on('mousedown', function() {
        localStorage.gmNavFeaturedProd = "1";
        pushGTM('gm navigation', "click produk unggulan");
    });
    navEtalaseLink.on('mousedown', function() {
        localStorage.gmNavEtalase = "1";
        pushGTM('gm navigation', "click etalase");
    });
    navAdminLink.on('mousedown', function() {
        localStorage.gmNavAdmin = "1";
        pushGTM('gm navigation', "click admin toko");
    });
    navCoverLink.on('mousedown', function() {
        localStorage.gmNavCover = "1";
        pushGTM('gm navigation', "click sampul toko");
    });
    navCashbackLink.on('mousedown', function() {
        localStorage.gmNavCashback = "1";
        pushGTM('gm navigation', "click cashback");
    });
    navOpporLink.on('mousedown', function() {
        localStorage.gmNavOppor = "1";
        pushGTM('gm navigation', "click peluang");
    });

    navStatLink.on('click', navStat);
    navfeaturedProdLink.on('click', navFeaturedProd);
    navEtalaseLink.on('click', navEtalase);
    navAdminLink.on('click', navAdmin);
    navCoverLink.on('click', navCover);
    navCashbackLink.on('click', navCashback);
    navOpporLink.on('click', navOppor);

    gmWidgetContainer.css('display', 'block');
}

var loadAll = function(result) {
    $(window).on('load', function() {
        var gmOnboardingTrackCount = 0;

        var footerW = $('.footer-wrapper'),
            footerWF = $('.footer-wrapper-full'),
            ieAddProductLI = $('#ie-ap'),
            ieAddProductLink = $('#ie-ap a'),
            ieCoverLI = $('#ie-cover'),
            ieCoverLink = $('#ie-cover a'),
            ieCashbackLI = $('#ie-cashback'),
            ieCashbackLink = $('#ie-cashback a'),
            ieTopAdsLI = $('#ie-ta'),
            ieTopAdsLink = $('#ie-ta a');

        var ieMap = {
            1: ieCoverLI,
            6: ieCashbackLI,
            9: ieAddProductLI,
            11: ieTopAdsLI
        }

        for (var nav in result.data) {
            if (result.data[nav]) {
                if (nav == '10') {
                    gmOnboardingTrackCount = result.data[nav].count;
                }

                if (result.data[nav].has_used) {
                    var navLI = navMap[nav];
                    if (typeof navLI != "undefined") {
                        navLI.addClass('visited');
                    }

                    var ieLI = ieMap[nav];
                    if (typeof ieLI != "undefined") {
                        ieLI.addClass('visited');
                    }
                }
            }
        }

        gmNavMouseListener();

        gmNavStickyScroll(footerW, footerWF)
        onboardingWelcome(gmOnboardingTrackCount);

        iePopup(ieAddProductLI, ieAddProductLink, ieCoverLI, ieCashbackLI, ieCashbackLink, ieCoverLink, ieTopAdsLI, ieTopAdsLink);

        navStat();
        navFeaturedProd();
        navEtalase();
        navCover();
        navOppor();
        navAdmin();

        loadProductPageNavigations();
    });
}

function loadProductPageNavigations() {
    if ($(".shop-product__empty").length || $('#list-product-table tr:nth-child(2)').length) {
        navCashback();
        ieAddProduct();
    } else {
        setTimeout(loadProductPageNavigations, 100);
    }
}

function pushGTM(category, action) {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'goldMerchant_clickGoldMerchant',
        'eventCategory': category,
        'eventAction': action,
        'eventLabel': ''
    });
}
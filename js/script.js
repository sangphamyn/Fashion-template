$(document).ready(function(){
    var banner = $('.banner-list').flickity({
        prevNextButtons: false,
        wrapAround: true
    });
    $('.previous-bn').click(() => {
        banner.flickity('previous');
    })
    $('.next-bn').click(() => {
        banner.flickity('next');
    })
    var product_sm = $('.product-sm-list').flickity({
        contain: true,
        cellAlign: 'left',
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true,
        groupCells: true
    });
    $('.previous-sm').click(() => {
        product_sm.flickity('previous');
    })
    $('.next-sm').click(() => {
        product_sm.flickity('next');
    })
    var trending = $('.trending-product').flickity({
        contain: true,
        cellAlign: 'left',
        wrapAround: true,
        prevNextButtons: false,
        groupCells: true,
    });
    var mustHave = $('.mustHave-product').flickity({
        contain: true,
        cellAlign: 'left',
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true,
        groupCells: true
    });
    $('.previous-mh').click(() => {
        mustHave.flickity('previous');
    })
    $('.next-mh').click(() => {
        mustHave.flickity('next');
    })
    var brand = $('.brand-list').flickity({
        prevNextButtons: false,
        pageDots: false,
        contain: true,
        cellAlign: 'left'
    });
    var instagram = $('.instagram-list').flickity({
        prevNextButtons: false,
        pageDots: false,
        contain: true,
        cellAlign: 'left'
    });
    // Header
    var backTop = $('.backTop');
    var header_main = $('.header-main');
    var toTop = header_main[0].offsetTop;
    $(window).scroll(function(){
        if(document.documentElement.scrollTop > toTop){
            header_main.addClass('header-fixed');
            backTop.addClass('show-bt');
        }
        else{
            header_main.removeClass('header-fixed');
            backTop.removeClass('show-bt');
        }
    })
    backTop.click(function(){
        document.documentElement.scrollTop = 0;
    })
    // End Header
    $('.submenu').each(function(){
        var left = ($(window).innerWidth() - $(this).innerWidth()) / 2;
        var pos = $(this).parent().offset();
        var pos_x = pos.left;
        $(this).css('left', left - pos_x + 'px');
    })
    $('.submenu.submenu-1').each(function(){
        $(this).css('left', 0);
    })
    $(window).resize(function(){
        $('.submenu').each(function(){
            var left = ($(window).innerWidth() - $(this).innerWidth()) / 2;
            var pos = $(this).parent().offset();
            var pos_x = pos.left;
            $(this).css('left', left - pos_x + 'px');
        })
        
        $('.submenu.submenu-1').each(function(){
            $(this).css('left', 0);
        })
    })
    // select option
    $('select').each(function () {
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;
        $this.addClass('s-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="styledSelect"></div>');
        var $styledSelect = $this.next('div.styledSelect');
        $styledSelect.text($this.children('option').eq(0).text());
        var $list = $('<ul />', {
            'class': 'options'
        }).insertAfter($styledSelect);
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
        var $listItems = $list.children('li');
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $(this).toggleClass('active').next('ul.options').toggle();
        });
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
        });
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });

    // Mini menu
    $('.overlay, .close-menu').click(()=>{
        $('.show-menu').removeClass('show-menu');
        $('.show-overlay').removeClass('show-overlay');
        $('html').css('overflow-y','auto');
    })
    $('.search-icon').click(()=>{
        $('.search').addClass('show-menu');
        $('.overlay').addClass('show-overlay');
        $('html').css('overflow-y','hidden');
    })
    $('.minicart-icon').click(()=>{
        $('.minicart').addClass('show-menu');
        $('.overlay').addClass('show-overlay');
        $('html').css('overflow-y','hidden');
    })
    $('.menu-icon').click(function(){
        $('.mobile-menu-container').addClass('show-menu');
        $('.overlay').addClass('show-overlay');
        $('html').css('overflow-y','hidden');
    })
    // Mini cart action
    var numOfPd = 0;
    var moneyToFreeShipping = 100;
    $('.quick-shop').click(function(){
        numOfPd++;
        $('.minicart-icon .num').text(numOfPd);
        var nameOfpd = $(this).parent().parent().parent().children('.product-info').children('.product-name').text();
        var priceOfpd = $(this).parent().parent().parent().children('.product-info').children('.product-price').text();
        var imgOfpd = $(this).parent().parent().children('.product-img').children('.primary-thumb').children('img').attr('src');
        $('.minicart').addClass('show-menu');
        $('.overlay').addClass('show-overlay');
        $('html').css('overflow-y','hidden');
        $('.empty-cart').hide();
        $('.minicart-wrap').css('display','flex');
        $('.minicart .cart-scroll').prepend(`
            <div class="cart-product">
                <div class="cart-pd-thumb">
                    <a href="#0">
                        <img src="${imgOfpd}" alt="">
                    </a>
                </div>
                <div class="cart-pd-info">
                    <a href="#0">
                        <h4 class="cart-pd-name">${nameOfpd}</h4>
                    </a>
                    <p class="cart-pd-price">${priceOfpd}</p>
                    <div class="quantity">
                        <div class="qtt-btn qtt-btn-minus">
                            <i class="fal fa-minus"></i>
                        </div>
                        <input type="number" name="quantity" id="quantity" step="1" min="0" max="9999" value="1" pattern="[0-9]*">
                        <div class="qtt-btn qtt-btn-plus">
                            <i class="fal fa-plus"></i>
                        </div>
                    </div>
                    <div class="cart-pd-action">
                        <div class="edit">
                            <img src="imgs/edit.svg" alt="" width="18px">
                            <span class="tooltip-cart">Edit this item</span>
                        </div>
                        <div class="delete">
                            <img src="imgs/trash-2.svg" alt="" width="18px">
                            <span class="tooltip-cart">Remove this item</span>
                        </div>
                    </div>
                </div>
            </div>`);
        $('.shipping>p').hide();
        $('.shipping-cal').show();
        priceOfpd = priceOfpd.trim();
        priceOfpd = priceOfpd.substring(1);
        var patt = /^\d.*/;
        priceOfpd = priceOfpd.match(patt);
        moneyToFreeShipping =  moneyToFreeShipping - priceOfpd;
        if(!moneyToFreeShipping.toString().includes('.')){
            moneyToFreeShipping += '.00';
        }
        else {
            moneyToFreeShipping = Math.round(moneyToFreeShipping * 100) / 100;
        }
        if(moneyToFreeShipping <= 0){
            $('.shipping-cal *').hide();
            $('.shipping-cal').prepend(`<p><span>Congratulations!</span> You've got free shipping!</p>`);
        }
        $('.mn-to-free').text('$' + moneyToFreeShipping);
        
    })
    // Add to wishlist
    var numOfWl = 0;
    var wl = $('.wishlist-icon .num');
    $('.addToWishList').click(function(){
        $(this).toggleClass('wishlist');
        if($(this).attr('class').includes('wishlist')) {
            numOfWl++;
        }
        else numOfWl--;
        wl.text(numOfWl);
    })

    // Mobile menu
    $('.nav-mb-link').click(function(){
        $('.nav-mb-link-active').removeClass('nav-mb-link-active');
        $(this).addClass('nav-mb-link-active');
        if($(this).text() == 'Menu'){
            $('.tab-pane-link').fadeIn();
            $('.tab-pane-category').hide();
        }
        else {
            $('.tab-pane-link').hide();
            $('.tab-pane-category').fadeIn();
        }
    })
    $('.expand-menu').click(function(event){
        event.stopPropagation();
        event.preventDefault();
        $(this).parent().parent().children('ul').slideToggle(200);
        $(this).toggleClass('expand-menu-active');
    })
    // End mobile menu
})
<template>
    <div class="sidebar">
        <div class="sidebar__head">
            <a class="sidebar__logo">
                <img class="sidebar__pic sidebar__pic_light" src="@/assets/img/ava-header.png" alt="" />
            </a>
            <button class="sidebar__toggle">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect x="0" y="0" width="24" height="24"/>
                        <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5"/>
                        <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3"/>
                    </g>
                </svg>
            </button>
            <button class="sidebar__close">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 30 30" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
                            <rect x="0" y="7" width="16" height="2" rx="1"></rect>
                            <rect opacity="0.3" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1"></rect>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
        <div class="sidebar__body">
            <div class="sidebar__caption">app<span> tools</span></div>
            <nav class="sidebar__nav">
                <a href="/board/overview" :class="routeName === 'board-overview' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-analytics"/>
                        </svg>
                    </div>
                    <div class="sidebar__text">overview</div>
                </a>
                <a href="/board/links" :class="routeName === 'transactions' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-link"/>
                        </svg>
                    </div>
                    <div class="sidebar__text">links</div>
                </a>
            </nav>
            <div class="sidebar__caption">account<span> settings</span></div>
            <nav class="sidebar__nav">
                <a href="/board/notification" :class="routeName === 'order' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-notification"/>
                        </svg>
                    </div>
                    <div class="sidebar__text">notifications</div>
                </a>
                <a href="/services" :class="routeName === 'services' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-services"/>
                        </svg>
                    </div>
                    <div class="sidebar__text">plans & pricing</div>
                </a>
                <a href="/board/settings" :class="routeName === 'board-settings' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-settings"/>
                        </svg>
                    </div>
                    <div class="sidebar__text">settings</div>
                </a>
            </nav>
        </div>
        <div class="sidebar__bottom">
            <a class="sidebar__item" href="https://github.com/Mayorwa" target="_blank">
                <div class="sidebar__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24"/>
                            <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                            <path d="M12.4208204,17.1583592 L15.4572949,11.0854102 C15.6425368,10.7149263 15.4923686,10.2644215 15.1218847,10.0791796 C15.0177431,10.0271088 14.9029083,10 14.7864745,10 L12,10 L12,7.17705098 C12,6.76283742 11.6642136,6.42705098 11.25,6.42705098 C10.965921,6.42705098 10.7062236,6.58755277 10.5791796,6.84164079 L7.5427051,12.9145898 C7.35746316,13.2850737 7.50763142,13.7355785 7.87811529,13.9208204 C7.98225687,13.9728912 8.09709167,14 8.21352549,14 L11,14 L11,16.822949 C11,17.2371626 11.3357864,17.572949 11.75,17.572949 C12.034079,17.572949 12.2937764,17.4124472 12.4208204,17.1583592 Z" fill="#000000"/>
                        </g>
                    </svg>
                </div>
                <div class="sidebar__text">made by group 1</div>
            </a>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery';

    export default {
        data () {
            return {
                routeName: "",
            };
        },
        mounted(){
            this.routeName = this.$route.name;
            var toggle = $('.sidebar__toggle'),
                page = $('.page'),
                sidebar = $('.sidebar'),
                headerToggle = $('.header__toggle'),
                logo = $('.header__logo'),
                close = $('.sidebar__close');
            toggle.on('click', function () {
                sidebar.toggleClass('active');
                page.toggleClass('wide');
                setTimeout(function () {
                    $('.owl-carousel').trigger('refresh.owl.carousel');
                }, 200);
            });

            headerToggle.on('click', function () {
                sidebar.addClass('active');
                page.addClass('toggle');
                logo.addClass('hidden');
                $('body').addClass('no-scroll');
                $('html').addClass('no-scroll');
            });

            close.on('click', function () {
                sidebar.removeClass('active');
                page.removeClass('toggle');
                logo.removeClass('hidden');
                $('body').removeClass('no-scroll');
                $('html').removeClass('no-scroll');
            });
        }
    }
</script>

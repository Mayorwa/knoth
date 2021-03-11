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
                            <use xlink:href="/sprite.svg#icon-analytics"></use>
                        </svg>
                    </div>
                    <div class="sidebar__text">overview</div>
                </a>
                <a href="/board/links" :class="routeName === 'board-links' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-link"></use>
                        </svg>
                    </div>
                    <div class="sidebar__text">links</div>
                </a>
            </nav>
            <div class="sidebar__caption">account<span> settings</span></div>
            <nav class="sidebar__nav">
                <a href="/board/notifications" :class="routeName === 'board-notifications' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-notification"></use>
                        </svg>
                    </div>
                    <div class="sidebar__text">notifications</div>
                </a>
                <a href="/board/plan" :class="routeName === 'board-plan' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-services"></use>
                        </svg>
                    </div>
                    <div class="sidebar__text">plans & pricing</div>
                </a>
                <a href="/board/settings" :class="routeName === 'board-settings' ? 'active' : ''" class="sidebar__item" title="settings">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-settings"></use>
                        </svg>
                    </div>
                    <div class="sidebar__text">settings</div>
                </a>
            </nav>
        </div>
        <div class="sidebar__bottom">
            <div class="sidebar__profile">
                <div class="sidebar__details">
                    <a class="sidebar__link" href="#">
                        <div class="sidebar__icon">
                            <svg class="icon icon-profile">
                                <use xlink:href="img/sprite.svg#icon-profile"></use>
                            </svg>
                        </div>
                        <div class="sidebar__text">Profile</div>
                    </a>
                    <a class="sidebar__link" href="#">
                        <div class="sidebar__icon">
                            <svg class="icon icon-logout">
                                <use xlink:href="img/sprite.svg#icon-logout"></use>
                            </svg>
                        </div>
                        <div class="sidebar__text">Log out</div>
                    </a>
                </div>
                <a class="sidebar__user" href="#">
                    <div class="sidebar__ava">
                        <img class="sidebar__pic" src="@/assets/img/avatar/ava-5.png" alt="">
                    </div>
                    <div class="sidebar__desc">
                        <div class="sidebar__man">david</div>
                        <div class="sidebar__status caption">Free account</div>
                    </div>
                    <div class="sidebar__arrow">
                        <svg class="icon" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-angle-double-v"></use>
                        </svg>
                    </div>
                </a>
            </div>
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
                close = $('.sidebar__close'),
                sidebar__user = $('.sidebar__user'),
                sidebar__detail = $('.sidebar__details');
            toggle.on('click', function () {
                sidebar.toggleClass('active');
                page.toggleClass('wide');
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
            sidebar__user.on('click', function () {
                sidebar__user.toggleClass('active');
                sidebar__detail.toggleClass('show');
            })
        }
    }
</script>

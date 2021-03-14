<template>
    <div class="sidebar">
        <div class="sidebar__head">
            <a class="sidebar__logo">
                <img class="sidebar__pic sidebar__pic_light" src="@/assets/img/logo/logo_flag_navy.svg" alt="" />
            </a>
            <button class="sidebar__toggle">
                <svg class="icon" width="30px" height="30px" viewBox="0 0 24 24" version="1.1">
                    <use xlink:href="/sprite.svg#icon-toggle"></use>
                </svg>
            </button>
            <button class="sidebar__close">
                <svg class="icon" width="30px" height="30px" viewBox="0 0 24 24" version="1.1">
                    <use xlink:href="/sprite.svg#icon-close"></use>
                </svg>
            </button>
        </div>
        <div class="sidebar__body">
            <div class="sidebar__caption">work<span> tools</span></div>
            <nav class="sidebar__nav">
                <a href="/board/analysis" :class="routeName === 'board-analysis' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-analytics"></use>
                        </svg>
                    </div>
                    <div class="sidebar__text">Analysis</div>
                </a>
                <a href="/board/conversation" :class="routeName === 'board-conversation' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-group-chat"></use>
                        </svg>
                    </div>
                    <div class="sidebar__text">conversations</div>
                </a>
                <a href="/board/meetings" :class="routeName === 'board-meetings' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-video"></use>
                        </svg>
                    </div>
                    <div class="sidebar__text">meetings</div>
                </a>
            </nav>
            <div class="sidebar__caption">customer</div>
            <nav class="sidebar__nav">
                <a href="/board/task" :class="routeName === 'board-task' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-clipboard"></use>
                        </svg>
                    </div>
                    <div class="sidebar__text">task</div>
                </a>
                <a href="/board/chat" :class="routeName === 'board-chat' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-chat"></use>
                        </svg>
                    </div>
                    <div class="sidebar__text">live chat</div>
                </a>
                <a href="/board/phone" :class="routeName === 'board-phone' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-phone"></use>
                        </svg>
                    </div>
                    <div class="sidebar__text">phone</div>
                </a>
                <a href="/board/inbox" :class="routeName === 'board-inbox' ? 'active' : ''" class="sidebar__item">
                    <div class="sidebar__icon">
                        <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-mailbox"></use>
                        </svg>
                    </div>
                    <div class="sidebar__text">inbox</div>
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
                            <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <use xlink:href="/sprite.svg#icon-user"></use>
                            </svg>
                        </div>
                        <div class="sidebar__text">Profile</div>
                    </a>
                    <a class="sidebar__link" href="#">
                        <div class="sidebar__icon">
                            <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <use xlink:href="/sprite.svg#icon-logout"></use>
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

<template>
    <div class="header header_border">
        <div class="header__toggle">
            <svg class="icon" width="30px" height="30px" viewBox="0 0 24 24" version="1.1">
                <use xlink:href="/sprite.svg#icon-toggle"/>
            </svg>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery';

    export default {
        mounted(){
            var page = $('.page'),
                sidebar = $('.sidebar'),
                headerToggle = $('.header__toggle');

            headerToggle.on('click', function () {
                sidebar.addClass('active');
                page.addClass('toggle');
                $('body').addClass('no-scroll');
                $('html').addClass('no-scroll');
            });
        }
    }
</script>

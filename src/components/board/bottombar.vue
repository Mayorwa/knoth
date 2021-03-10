<template>
    <div class="bottomBar">
        <a href="/board/links" :class="routeName === 'transactions' ? 'active' : ''" class="bottomBar_item">
            <div class="bottomBar_icon">
                <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <use xlink:href="/sprite.svg#icon-link"/>
                </svg>
            </div>
        </a>
        <a href="/board/notification" :class="routeName === 'order' ? 'active' : ''" class="bottomBar_item">
            <div class="bottomBar_icon">
                <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <use xlink:href="/sprite.svg#icon-notification"/>
                </svg>
            </div>
        </a>
        <a href="/board/overview" :class="routeName === 'board-overview' ? 'active' : ''" class="bottomBar_item">
            <div class="bottomBar_icon">
                <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <use xlink:href="/sprite.svg#icon-analytics"/>
                </svg>
            </div>
        </a>
        <a href="/board/services" :class="routeName === 'services' ? 'active' : ''" class="bottomBar_item">
            <div class="bottomBar_icon">
                <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <use xlink:href="/sprite.svg#icon-services"/>
                </svg>
            </div>
        </a>
        <a href="/board/settings" :class="routeName === 'board-settings' ? 'active' : ''" class="bottomBar_item">
            <div class="bottomBar_icon">
                <svg class="icon" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <use xlink:href="/sprite.svg#icon-settings"/>
                </svg>
            </div>
        </a>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                routeName: "",
            };
        },
        mounted() {
            this.routeName = this.$route.name;
        }
    }
</script>

<template>
    <div class="login">
        <div class="login__row">
            <div class="login__col login-side">
                <img src="@/assets/img/logo/logo_flag_navy.svg" class="login-side__logo" alt="">
            </div>
            <div class="login__col login__signup-img"></div>
            <div class="login__col login-form">
                <div class="login-form__signup">
                    <a href="/sign-in">sign in to your account</a>
                </div>
                <div class="login__form-div">
                    <div class="login__form">
                        <a class="login__logo"><img src="@/assets/img/logo/logo_flag_navy.svg" alt=""></a>
                        <div class="login__stage h5">Your personal  details </div>
                        <p class="login__form-desc">Fill up your account details</p>
                        <div class="login__field">
                            <div class="field__label">email address</div>
                            <div class="field__wrap">
                                <input class="field__input" type="email" placeholder="e.g dave@gmail.com">
                            </div>
                        </div>
                        <div class="login__field">
                            <div class="field__label">password</div>
                            <div class="field__wrap">
                                <input class="field__input" type="password" placeholder="e.g **********">
                            </div>
                        </div>
                        <a class="login__btn button button--blue-white button_wide">
                            <span>Continue</span>
                            <span>
                            <svg width="24px" height="24px" class="icon icon-link">
                                <use xlink:href="/sprite.svg#icon-plus-circle"></use>
                            </svg>
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<template>
    <div class="login">
        <div class="login__row">
            <div class="login__col login-side">
                <img src="/favicon.svg" class="login-side__logo" alt="">
            </div>
            <div class="login__col"></div>
            <div class="login__col login-form">
                <a class="login__logo"><img src="/favicon.svg" alt=""></a>
                <div class="login__form">
                    <div class="login__stage h5">Sign in to your account</div>
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
                    <div class="login__links text-right">
                        <a class="login__link" href="#">
                            <svg width="24px" height="24px" class="icon icon-link">
                                <use xlink:href="/sprite.svg#icon-forgot-password"></use>
                            </svg>
                            Forgot Password?
                        </a>
                    </div>
                    <a class="login__btn button button--blue-white button_wide">
                        <span>Sign in to your account</span>
                        <span>
                            <svg width="20px" height="20px" class="icon icon-link">
                                <use xlink:href="/sprite.svg#icon-arrow-right"></use>
                            </svg>
                        </span>
                    </a>
                    <div class="login__social-text">
                        <div class="login__text">Or sign in with your social account</div>
                    </div>
                    <a href="" class="login__social-button button button--white-black">
                        <span>
                            Sign in with Google
                        </span>
                        <img src="@/assets/img/google.svg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

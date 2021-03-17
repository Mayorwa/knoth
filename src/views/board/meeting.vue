<template>
    <div class="page__container">
        <div class="page__row">
            <div class="page__col">
                <div class="page__head">
                    <button class="button page__back">
                        <svg class="icon" width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-angle-left"></use>
                        </svg>
                    </button>
                    <div class="page__title d-flex"><p>monthly alpha team report and review</p> <span class="pill pill--blue">
                        <svg class="icon" width="16px" height="16px" viewBox="0 0 24 24" version="1.1">
                            <use xlink:href="/sprite.svg#icon-group"></use>
                        </svg>
                        Team
                    </span></div>
                </div>
                <hr class="page__hr">
                <div class="page__video">
                    <div class="video__container">
                        <video autoplay src="@/assets/video/meet2.mp4"></video>
                    </div>
                    <div class="video__row">
                        <div class="video__control">
                            <div class="video__control-volume">
                                <button class="volume__button" id="volume__button">
                                    <input id="volume__slider" class="volume__slider" min="0" max="60" type="range" value="30" />
                                    <svg class="icon" width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                                        <use xlink:href="/sprite.svg#icon-volume-low"></use>
                                    </svg>
                                </button>
                            </div>
                            <div class="video__control-btns">
                                <div class="video__control-icon-expand">
                                    <button>
                                        <svg class="icon" width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                                            <use xlink:href="/sprite.svg#icon-expand"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div class="video__control-icon-mic">
                                    <button>
                                        <svg class="icon" width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                                            <use xlink:href="/sprite.svg#icon-mic"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div class="video__control-icon-ended">
                                    <button>
                                        <svg class="icon" width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                                            <use xlink:href="/sprite.svg#icon-call-ended"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div class="video__control-icon-video">
                                    <button>
                                        <svg class="icon" width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                                            <use xlink:href="/sprite.svg#icon-video"></use>
                                        </svg>
                                    </button>
                                </div>
                                <div class="video__control-icon-settings">
                                    <button>
                                        <svg class="icon" width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                                            <use xlink:href="/sprite.svg#icon-settings"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page__col">

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted(){

            var volume_audio = document.createElement('audio');
            document.getElementById('volume__button').appendChild(volume_audio);
            volume_audio.id = "volume_audio";

            playAudio('http://emilcarlsson.se/assets/Avicii%20-%20The%20Nights.mp3', 0);

            function playAudio(fileName, myVolume) {
                volume_audio.src = fileName;
                volume_audio.setAttribute('loop', 'loop');
                setVolume(myVolume);
                volume_audio.play();
            }
            function setVolume(myVolume) {
                var volume_audio = document.getElementById('volume_audio');
                volume_audio.volume = myVolume;
            }
            document.getElementById("volume__slider").oninput = function() {
                var value = (this.value-this.min)/(this.max-this.min)*100;
                this.style.background = 'linear-gradient(to right, #355DFF 0%, #355DFF ' + value + '%, #fff ' + value + '%, white 100%)';
                setVolume(value / 100);

            };
        }
    }
</script>

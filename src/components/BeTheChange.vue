<template>
    <div class="animatedHeader">
        <div class="text">
            <div class="top">
                <h1>Climate <a>Change</a></h1>
            </div>
            <div class="topoverlay">
                <h1>Climate <a>Change</a></h1>
            </div>
            <div class="botm">
                <h1>Be the <a>Change</a></h1>
            </div>
        </div>
        <div class="planetPosition">
            <div class="far-orbit"></div>
            <div class="near-orbit"></div>
            <div class="earth">
                <div class="sprites love">
                    <img src="../assets/in-love.svg">
                </div>
                <div class="sprites hearts">
                    <img src="../assets/hearts.svg">
                </div>
                <div class="sprites like">
                    <img src="../assets/like.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animatedHeader {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.text {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
}

.top,
.botm,
.topoverlay {
    position: absolute;
}

.botm {
    padding-left: 22px;
}

h1 {
    color: white;
}

.top h1 {
    animation: typing-text 3s steps(14, end), blink 0.5s infinite alternate;
    animation-fill-mode: both;
    overflow: hidden;
    white-space: nowrap;
    transform: translateY(20px);
    border-right: 2px solid #03aa6f;
}

.topoverlay h1 {
    opacity: 0;
    animation: typing-text2 1s steps(14, end), blink 0.7s infinite alternate;
    animation-fill-mode: both;
    overflow: hidden;
    white-space: nowrap;
    animation-delay: 3s;
    animation-fill-mode: forwards;
    transform: translateY(20px);

    border-right: 2px solid #03aa6f;
}

.botm h1 {
    overflow: hidden;
    white-space: nowrap;
    opacity: 0;
    animation: typing-text1 2s steps(13, end), blink 0.5s infinite alternate;
    animation-delay: 4s;
    animation-fill-mode: forwards;
    transform: translateY(20px);

    border-right: 2px solid #03aa6f;
}

h1 a {
    color: #03aa6f;
}

.planetPosition {
    opacity: 0;
    animation-delay: 4.5s;
    animation: show 7.5s;
    animation-fill-mode: forwards;
    position: absolute;
    display: flex;
    margin-top: 20px;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
}

.far-orbit {
    width: 100%;
    height: 100%;
    background-color: gray;
    opacity: .2;
    border-radius: 50%;
}

.near-orbit {
    width: 85%;
    height: 85%;
    background-color: grey;
    opacity: .2;
    position: absolute;
    border-radius: 50%;
}

.earth {
    position: absolute;
    width: 70%;
    height: 70%;
    background-image: url("../assets/earth.svg");
}

img {
    width: 15%;
}

.sprites {
    width: 100%;
    height: 100%;
    position: absolute;
}

.love {
    animation: spin 12s linear 0s infinite;
}

.love img {
    top: -5px;
    position: absolute;
}

.hearts {
    animation: spin-negative 7s linear 0s infinite;
}

.hearts img {
    top: -10px;
    position: absolute;
}

.like {
    animation: spin 9s linear 0s infinite;
}


.like img {
    top: -20px;
    position: absolute;
}

@keyframes blink {
    from {
        border-color: transparent;
    }

    to {
        border-color: #03aa6f;
    }
}

@keyframes typing-text {
    from {
        width: 0;
    }

    99.99% {
        opacity: 1;
    }

    to {
        width: 273.313px;
        opacity: 0;
    }
}


@keyframes typing-text1 {
    from {
        width: 0;
        opacity: 1;
    }
    70%{
        opacity: 1;
        margin-left: 0px;
    }
    to {
        width: 230.313px;
        opacity: 1;
        margin-left: -100px;
    }
}

@keyframes typing-text2 {
    from {
        width: 273.313px;
        opacity: 1;
    }
    99.99%{
        opacity: 1;
    }
    to {
        width: 0;
        opacity: 0;
    }
}

@keyframes show {
    from {
        margin-left: 0px;
    }

    80% {
        opacity: 0;
    }

    to {
        opacity: 1;
        margin-left: 150px;
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes spin-negative {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(-360deg);
    }
}
</style>
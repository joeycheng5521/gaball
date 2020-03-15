<template>
    <div class="live">
        <div class="liveWach">
            <van-notice-bar mode="closeable">
                3月13日火湖大战，登录App就可以领取888元豪华礼包！
            </van-notice-bar>
            <div class="vedio"></div>
        </div>

        <div class="stickyBox">
            <div class="matchInfo">
                <div class="match">
                    <img src="../../assets/img/basketball.svg" alt="" class="ballIcon">
                    <div class="name">NBA</div>
                    <div class="time">
                        <span>第一节</span>
                        <span class="yellow">10'</span>
                    </div>
                </div>

                <div class="teamInfo">
                    <div class="leftTeam">
                        <span class="name">洛杉矶湖人</span>
                        <span class="score">24</span>
                    </div>
                    <span class="vs">vs</span>
                    <div class="rightTeam">
                        <span class="score">18</span>
                        <span class="name">费城76人</span>
                    </div>
                </div>
            </div>
            <div class="betBox">
                <div class="tabs">
                    <div class="tabL">
                        <div :class="{'selected':tab === 1,'tab':true}" @click="toTab(1)">聊天<span class="red"></span></div>
                        <div :class="{'selected':tab === 2,'tab':true}"  @click="toTab(2)">下单<span class="nub">68</span></div>
                    </div>
                    <div class="tabR">
                        <div class="btn">
                            <van-icon name="cluster-o" />
                            <span>分享</span>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div v-if="tab === 1" class="chat">
                        asdf
                    </div>
                    <div v-if="tab === 2" class="betting">
                        <liveBetting/>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem,NoticeBar, Tab, Tabs } from 'vant';
    import LiveBetting from "./liveBetting";

    Vue.use(NoticeBar);
    Vue.use(Swipe);
    Vue.use(SwipeItem);
    Vue.use(Tab);
    Vue.use(Tabs);

    export default {
        name: "Live",
        components: {LiveBetting},
        data () {
            return {
                tab: 2,
                vedio: require('@/assets/img/vedio.jpg'),
            }
        },
        mounted() {
            this.getVh()
        },
        methods: {
            toTab(index) {
                this.tab = index;
            },
            getVh() {
                let vh = window.innerHeight * 0.01
                // Then we set the value in the --vh custom property to the root of the document
                document.documentElement.style.setProperty('--vh', `${vh}px`)

                // We listen to the resize event
                window.addEventListener('resize', () => {
                    // We execute the same script as before
                    let vh = window.innerHeight * 0.01
                    document.documentElement.style.setProperty('--vh', `${vh}px`)
                })
            }
        },
    }
</script>

<style lang="less">

    .live{
        flex: 1;
        color: #fff;
        font-size: 20px;
        text-align: center;
        background-color: #fff;
        height: calc(var(--vh, 1vh) * 100 - 82px);
        margin-top: 82px;
        position: relative;
        z-index: -2;

            .van-swipe__indicators--vertical{
                display: none!important;
            }
            .liveWach{
                position: fixed;
                top: 82px;
                display: block;
                z-index: -1;
                width: 100%;
                .vedio{
                    height: 210px;
                    background: #000 url("../../assets/img/vedio.jpg") center center no-repeat;
                    background-size: cover;
                    display: block;
                }

                .van-notice-bar{
                    padding: 0 12px;
                    height: 28px;
                    position: absolute;
                    top: 0;
                    width: 100%;
                    background: rgba(0,0,0,0.4);
                    backdrop-filter: blur(.05rem);
                    color: rgba(255,255,255,0.75);

                    .van-icon{
                        color: rgba(255,255,255,0.3);
                    }
                }
            }

        .stickyBox{
            position: absolute;
            width: calc(100vw);
            top: 210px;
            z-index: 2;

            .matchInfo{
                height: 50px;
                background: url("../../assets/img/matchInfoBg.jpg");
                background-size: cover;
                position: sticky;
                top: 82px;


                &::before{
                    content: '';
                    display: block;
                    position: absolute;
                    bottom: 0;
                    height: 2px;
                    width: 50%;
                    background: linear-gradient(90deg, rgba(239,116,116,0.00) 0%, #CE2727 100%);
                }
                &::after{
                    content: '';
                    display: block;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    height: 2px;
                    width: 50%;
                    background: linear-gradient(90deg, #006ED7 0%, rgba(0,110,215,0.00) 100%);
                }

                .match{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    color: rgba(255,255,255,0.5);
                    padding-top: 3px;

                    .ballIcon{
                        width: 14px;
                        margin: 0 4px;
                    }

                    .name{

                        margin: 0 4px;
                    }

                    .time{

                        margin: 0 4px;
                        .yellow{
                            color: #FFEF2C;
                            margin-left: 4px;
                        }
                    }
                }

                .teamInfo{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .vs{
                        padding: 0 15px;
                        color: rgba(255,255,255,0.5);
                        font-size: 14px;
                    }

                    .name{
                        font-size: 14px;
                        font-weight: bold;
                    }
                    .score{
                        font-family: "DIN Alternate";
                    }

                    .leftTeam{
                        display: flex;
                        align-items: center;
                        .score{
                            margin-left: 12px;
                        }
                    }

                    .rightTeam{
                        display: flex;
                        align-items: center;
                        .score{
                            margin-right: 12px;
                        }
                    }
                }
            }

            .betBox{
                background: #fff;

                .tabs{
                    display: flex;
                    color: #333;
                    padding: 0 12px;
                    height: 40px;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 0.5px solid #eee;
                    position: sticky;
                    top: 132px;

                    .tabL{
                        display: flex;

                        .tab{
                            margin-right: 10px;
                            font-size: 15px;
                            width: 60px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            position: relative;
                            height: 40px;
                            transition: 0.2s;

                            &:last-child{
                                margin-right: 0;
                            }

                            .nub{
                                background: #F0F1F4;
                                color: #858B9C;
                                border-radius: 20px;
                                font-size: 12px;
                                margin-left: 4px;
                                min-width: 14px;
                                font-family: "DIN Alternate";
                                padding: 0 4px;
                            }

                            .red{
                                width: 6px;
                                height: 6px;
                                border-radius: 50%;
                                background: #E50038;
                                position: absolute;
                                top: 0;
                                bottom: 0;
                                margin: auto;
                                right: 6px;
                            }
                        }

                        .selected{
                            color: #222;
                            font-weight: bold;
                            position: relative;

                            &::after{
                                border-bottom: 2px solid #E50038;
                                content: '';
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                right: 0;
                                margin: 0 auto;
                                width: 20px;
                                transition: 0.2s;
                            }

                            .nub{
                                color: #858B9C;
                            }
                        }
                    }

                    .tabR{
                        display: flex;

                        .btn{
                            display: flex;
                            align-items: center;
                            font-size: 13px;
                            color: #4F555C;
                            margin-left: 10px;

                            &:first-child{
                                margin-left: 0;
                            }

                            .van-icon{
                                font-size: 15px;
                                margin-right: 4px;
                                color: #BEC1C4;
                            }
                        }
                    }
                }

                .betting{
                    color: #777;
                    font-size: 13px;
                    height: 1000px;
                    position: relative;
                }
            }

        }
    }



</style>

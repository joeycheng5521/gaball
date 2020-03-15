
<template>
    <div class="liveHeader">
        <div class="header">
            <div class="left">
                <van-icon name="wap-nav" />
                <img :src="logo" alt="" class="logo">
                <div class="search">
                    <span>搜索</span>
                    <van-icon name="search" />
                </div>
            </div>
            <div class="right">
                <div class="moeny">
                    209.00
                </div>
                <van-icon name="label-o" />
            </div>
        </div>
        <div class="liveTab">
            <van-tabs
                    swipeable
                    class="balltab"
            >
                <van-tab :title="tabList" name="a" v-for="tabList in tabList" :key="tabList"></van-tab>
            </van-tabs>
            <div class="more">
                <van-icon name="weapp-nav" />
            </div>
        </div>
    </div>
</template>


<script>
    import Vue from 'vue';
    import { Icon } from 'vant';
    Vue.use(Icon);

    export default {
        name: "Header",
        data () {
            return {
                logo: require('@/assets/img/logo.svg'),
                tabList:['足球','篮球','排球','电竞','网球','24小时直播']
            }
        },
    }
</script>

<style lang="less">

    .liveHeader{
        position: fixed;
        top: 0;
        z-index: 1;
        .header{
            background: #D20437;
            height: 48px;
            display: flex;
            justify-content: space-between;
            padding: 12px;

            .van-icon{
                font-size: 24px;
                color: #fff;
            }

            .left{
                display: flex;
                align-items: center;
                .logo{
                    height: 26px;
                    margin-left: 10px;
                }

                .search{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 26px;
                    font-size: 14px;
                    padding: 0 10px;
                    background: rgba(0,0,0,0.1);
                    color: rgba(255,255,255,0.5);
                    border-radius: 20px;
                    margin-left: 10px;

                    span{
                        margin-right: 8px;
                    }

                    .van-icon{
                        font-size: 18px;
                        color: rgba(255,255,255,0.5);
                    }
                }
            }

            .right{
                display: flex;
                align-items: center;

                .moeny{
                    color: #fff;
                    font-family: "DIN Alternate";
                    margin-right: 5px;
                    font-size: 16px;
                }
            }
        }


        .liveTab{
            padding: 0;
            background: #D20437;
            display: flex;
            justify-content: space-between;
            align-items: center;
            overflow: hidden;

            .more{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                color: #fff;

                i{
                    font-size: 20px;
                }
            }

            .balltab{
                width: calc(100vw - 50px);
                .van-tab{
                    /*flex: none;*/
                    color: rgba(255,255,255,0.75);
                    transition: 0.2s;
                    flex: none;
                    flex-basis: auto!important;
                    padding: 0 12px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    line-height: normal;
                    font-size: 15px;
                }
                .van-tab--active{
                    font-weight: bold;
                    color: #fff;
                }

                .van-tabs__nav{
                    background: #D20437;
                }

                .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
                    border: 0;
                }

                .van-tabs__line{
                    background: #fff;
                    bottom: 18px;
                    height: 2px;
                    border-radius: 0;
                    width: 20px!important;
                }

                .van-tabs__wrap{
                    height: 34px;
                }

            }
        }
    }



</style>

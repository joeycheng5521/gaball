<template>
    <div class="liveBetting">
        <div class="typeBar">
            <div class="list active">全场</div>
            <div class="list">半场</div>
            <div class="list">单节</div>
            <div class="list">总进球</div>
            <div class="list">更多</div>
        </div>
        <div class="market">
            <div class="marketItem">
                <ul class="odderItem1">
                    <div class="title">
                        <span>全场</span>
                    </div>
                    <li>
                        <div class="name"><span>洛杉矶湖人</span><span>胜</span></div>
                        <div class="right"><span>3.25</span></div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "liveBetting"
    }
</script>

<style lang="less">
    .liveBetting{
        position: sticky;
        top: 172px;
        .typeBar{
            display: flex;
            height: 45px;
            align-items: center;
            justify-content: center;
            background: #fff;
            width: calc(100vw);
            padding: 0 12px;
            font-size: 14px;

            .list{
                margin: 0 15px;
            }

            .active{
                color: #E50038;
                font-weight: bold;
            }
        }

        .market{
            padding: 0 12px;

            .odderItem1{

                .title{
                    margin-bottom: 10px;
                    position: relative;
                    span{
                        padding: 0 10px;
                        background: #fff;
                    }

                    &::after{
                        content: '';
                        height: 0.5px;
                        background: #ddd;
                        position: absolute;
                        width: 200px;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        margin: auto;
                        z-index: -1;
                    }
                }

                li{
                    display: flex;
                    justify-content: space-between;
                    background: #F5F6F7;
                    height: 36px;
                    border-radius: 18px;
                    align-items: center;
                    padding: 0 20px;
                    margin-bottom: 10px;

                    &:last-child{
                        margin-bottom: 0;
                    }

                    .left{
                        color: #777777;
                        font-size: 14px;
                    }

                    .right{
                        font-size: 16px;
                        font-weight: bold;
                        color: #323840;
                        font-family: "DIN Alternate";
                    }
                }
            }
        }
    }
</style>

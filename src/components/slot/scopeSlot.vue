<!-- 
- Author:CaoJing
- Date:2018/8/23
- github:https://github.com/Mirror198829
-->
<template>
  <div class="cptWrap">
      <h1 class="cptTitle">我是一个独立的slot组件</h1>
      <div class="slotWrap">
        <div class="slotTitle">卡槽区域A</div>
        <div class="slotMain">
          <slot>
            <span class="slotTxt">为嘛什么都不传，我是卡槽a</span>
          </slot>
        </div>
      </div>
      <p>我不是卡槽区域哟~</p>
      <p>看看这个message值：<span style="font-weight:700">{{message}}</span></p>
  </div>
</template>

<script>
export default {
  name: 'customSlotName',
  data () {
    return {
      message:'message:我是子组件数据'
    }
  },
  methods:{

  },
  mounted(){},
  created(){}
}
</script>

<style  scoped lang="less">
@import '../../../less/index.less';
.cptWrap{border:2px solid @theme-color;padding:14px;background-color:#fff;margin:5px;
  .cptTitle{font-weight:400;font-size:14px;margin-bottom:14px;}
  .slotWrap{border:2px dashed @theme-color;margin:5px 0;
    .slotTitle{background-color:@theme-color;color:#fff;padding:2px}
    .slotMain{padding:14px;
      .slotTxt{color:red;font-size:12px;}
    }
  }
  p{font-size:14px;margin-top:14px;}
}
</style>

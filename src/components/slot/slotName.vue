<!-- 
- Author:CaoJing
- Date:2018/8/22
- github:https://github.com/Mirror198829
-->
<template>
  <div class="cptWrap">
      <h1 class="cptTitle">我是一个独立的slot组件</h1>
      <div class="slotWrap">
        <div class="slotTitle">卡槽区域A</div>
        <div class="slotMain">
          <slot name="a">
            <span class="slotTxt">为嘛什么都不传，我是卡槽a</span>
          </slot>
        </div>
      </div>
      <p>我不是卡槽区域哟~</p>
      <div class="slotWrap">
        <div class="slotTitle">卡槽区域B</div>
        <div class="slotMain">
          <slot name="b">
            <span class="slotTxt">为嘛什么都不传，我是卡槽b</span>
          </slot>
        </div>
      </div>
      <div class="slotWrap">
        <div class="slotTitle">卡槽区域C</div>
        <div class="slotMain">
          <slot name="C">
            <span class="slotTxt">为嘛什么都不传，我是卡槽C</span>
          </slot>
        </div>
      </div>
      <div class="slotWrap">
        <div class="slotTitle">卡槽区域Slot无名氏</div>
        <div class="slotMain">
          <slot>
            <span class="slotTxt">我是一个无名氏slot</span>
          </slot>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'customSlotName',
  data () {
    return {
      
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

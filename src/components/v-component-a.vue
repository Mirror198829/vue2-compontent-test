<template>
  <div class="box">
      <h3>子组件A(event bus)</h3>
      <el-button style="margin-top:10px" type="primary" @click="touchCompontB">点击我触发子组件B的事件</el-button>
  </div>
</template>

<script>
import eventbus from '../eventbus.js'

export default {
  name: 'box',
  data () {
    return {
      name: ''
    }
  },
  methods:{
    touchCompontB(){
      eventbus.$emit('getName',['子组件b'])
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{width: 100%;background-color:#f1c40f;color:#fff;padding:30px 0;}
</style>

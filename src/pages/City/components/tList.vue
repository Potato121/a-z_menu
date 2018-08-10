<template>
  <div class="list" ref="wrapper">
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">当前</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id"> 
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 城市列表 -->
      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="innerItem in item" :key="innerItem.id">
            <div class="button">{{innerItem.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹出层 -->
    <transition name="fade">
      <div class="toast" v-show="showToast">
          <span class="letter">{{this.letter}}</span>
      </div>
    </transition>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import eventBus from '@/model/eventBus'
export default {
  name: 'tList',
  props: {
    cities: Object,
    hotCities: Array
  },
  data() {
    return {
      letter: '',
      showToast: false
    }
  },
  watch: {
    letter() {
      if(this.letter) {
        const elment = this.$refs[this.letter][0]
        this.scroll.scrollToElement(elment)
        this.changeToast()
      }
    }
  },
  methods: {
    changeToast () {
      this.showToast = true
      if(this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(()=>{
        this.showToast = false
      },500)
    }
  },
  mounted() {
    eventBus.$on('change', (letter) => {
      this.letter = letter
    })
    this.scroll = new Bscroll(this.$refs.wrapper,{
      click: true
    })
  }
}
</script>
<style lang="stylus" scoped>
.list
  position absolute
  overflow hidden
  top 40px
  left 0
  right 0
  bottom 0
  .title
    line-height 27px
    padding-left 10px
    background #eee
  .button-list
    padding 5px 30px 5px 5px
    overflow hidden
    .button-wrapper
      float left
      width 25%
      .button
        margin 5px
        padding 5px
        font-size 12px
        border 1px solid #ccc
        border-radius 3px
        text-align center 
  .toast
    position fixed
    top 50%
    left 50%
    transform translate(-50%,-50%)
    z-index 10
    width 50px
    height 50px
    background #ed4e5e
    border-radius 50%
    text-align center
    transition all 0.5s
    &.fade-enter
        opacity 0
    &.fade-leave,&.fade-enter-active
        opacity 1
    &.fade-leave-active
        opacity 0
    .letter
      line-height 50px
      font-size 16px
      font-weight 700
      color #eee
</style>



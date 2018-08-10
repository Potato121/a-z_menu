<template>
  <div class="city">
    <t-header></t-header>
    <t-list :cities="cities" :hotCities="hotCities"></t-list>
    <t-alphabet :cities="cities"></t-alphabet>
  </div>
</template>

<script>
import { getCitiesInfo } from '@/api/getData'
import tHeader from './components/tHeader'
import tList from './components/tList'
import tAlphabet from './components/tAlphabet'
export default {
  name: 'City',
  data() {
    return {
      cities: {},
      hotCities: []
    }
  },
  components: {
    tHeader,
    tList,
    tAlphabet
  },
  methods: {
    getCityInfo() {
      getCitiesInfo().then(this.getCityInfoSucc)
    },
    getCityInfoSucc(res) {
      if(res.data.ret && res.data){
        
        const cityInfo = res.data.data
        console.log(cityInfo)
        this.cities = cityInfo.cities
        this.hotCities = cityInfo.hotCities
      }
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>

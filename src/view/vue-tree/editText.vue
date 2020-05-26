<template>
 <div>
     <!-- :on-reach-bottom="handleReachBottom" -->
  <Scroll >
      <!-- v-for="(item, index) in list1" :key="index"  Content {{ item }} -->
        <Card dis-hover  style="margin: 32px 0;height:100%;width:100%">
         <textarea style="width: 100%; height: 300px; resize:none;"  ></textarea>
        </Card>
    </Scroll>
 </div>
</template>

<script>
export default {
 data() {
 return {
  list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 }
 },
 created(){

 },
 methods: {
//  handleReachBottom () {
//                 return new Promise(resolve => {
//                     setTimeout(() => {
//                         const last = this.list1[this.list1.length - 1];
//                         for (let i = 1; i < 11; i++) {
//                             this.list1.push(last + i);
//                         }
//                         resolve();
//                     }, 2000);
//                 });
//  }
}
}
</script>

<style lang="less" scoped>
</style>

<template>
 <div>
   <div class="topButtoncontainer">
          <Button type="primary" style="margin-right:5px;"  @click="handeAddMethod">新建</Button>
     <Button @click="handleSelectAll" type="primary">编辑多条</Button>
   </div>
  <Table border :columns="columns7" :data="data6"   ref="selection"  @on-selection-change="handleSelectRow"></Table>

  <checkbox-Edit  :sleledata="sleledata"   @change="changedata"></checkbox-Edit>
  <hand-Add v-if="false"></hand-Add>
 </div>
</template>

<script>
import checkboxEdit from './checkboxEdit'
import  handAdd from './handAdd'
import {mapMutations} from 'vuex'
export default {
 data() {
 return {
  columns7: [  {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 240,
                        align: 'center',
                        marginright:'5px',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(2222222)
                                            this.handleSelectRow(params.row)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除'),
                                   h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '测试连接')
                            ]);
                        }
                    }
                ],
                 data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ],
                sleleArray:[],
                sleledata:{},
                selectdatalist:[]
 }
 },
 computed:{
  
 },
 created(){

 },
 components:{
 checkboxEdit,
 handAdd
 },
 methods: {
//  show (index) {
//                 this.$Modal.info({
//                     title: 'User Info',
//                     content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
//                 })
//             },
            remove (index) {
                this.data6.splice(index, 1);
            },
            //@on-selection-change 只要选中就会触发
            handleSelectRow(val){
                //获取点击的这一行数据以数组的形式展现
                const  a=this.$refs.selection.getSelection()
            },
            handleSelectAll(status,params){
          //选中的长度
           var  selectstatus=this.$refs.selection.getSelection().length
           if(selectstatus==0){
                 this.$Message.info('请选择你要选中多选编辑的内容');
           }else{
            this.$store.commit('addshow',true)
            const array=this.$refs.selection.getSelection()
            // console.log(array)
            // array.forEach(function(item,index){
            //     console.log(item,index)
            // })
            this.selectdatalist=array
            console.log(this.selectdatalist)
           }
            },
            changedata(val){
                console.log(val)
                // console.log(this.$refs.selection.getSelection())
                // for(let  k in this.data6){
                //     console.log(this.data6[k].name)
                //     this.data6[k].name=val.name
                //     this.data6[k].address=val.address
                //     this.data6[k].age=val.RequestMethod
                // }
                // this.selectdatalist.forEach(function(item,index){
                //     console.log(item,index)
                //     for(k in val){
                        
                //     }
                // })
                for(var  k in val){
                    this.selectdatalist.address=val[k].name
                    this.selectdatalist.age=val[k].address
                    this.selectdatalist.name=val[k].RequestMethod
                }
                console.log(this.selectdatalist)
            },
            handeAddMethod(){
                // this.$store.commit('addnewshow',true)
                // this.$router.push('/handadd')
                // this.$route.params.id 
               this.$router.push('/argu1/handadd/2')
            }
 }
}
</script>

<style lang="less" scoped>
.topButtoncontainer{
    margin:10px 0;
}
</style>

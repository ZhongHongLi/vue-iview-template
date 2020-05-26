<template>
  <div >
    <Modal v-model="$store.state.isshow" title="编辑多选的内容" @on-ok="ok" @on-cancel="cancel">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="名称" prop="name">
          <Input   v-model="formValidate.name"    placeholder="填写你要修改的名字"></Input>
        </FormItem>
        <FormItem label="地址" prop="address">
          <Input v-model="formValidate.address" placeholder="填写你要修改的地址"></Input>
        </FormItem>
           <FormItem label="服务地址" prop="serverAddress">
          <Input v-model="formValidate.serverAddress" placeholder="填写你要修改服务地址"></Input>
        </FormItem>
           <FormItem label="请求方式" prop="RequestMethod">
          <Input v-model="formValidate.RequestMethod" placeholder="填写你要修改请求方式"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
 props:{
     sleledata:{
         type:Object
     }
 },
  data() {
    return {
      modal1: false,
      formValidate: {
        name: "",
        address: "",
        serverAddress: "",
        RequestMethod: ""
      },
      ruleValidate: {
        name: [
          { required: true, message: "请填写你要修改的名字", trigger: "blur" }
        ],
        address: [
          {
            required: true,
            message: "请填写你填写的地址",
            trigger: "blur"
          }
        ],
        serverAddress: [
          {
            required: true,
            message: "请填写服务地址",
            trigger: "change"
          }
        ],
        RequestMethod: [
          { required: true, message: "请填写请求的方式", trigger: "change" }
        ]
      }
    };
  },
  created() {
  },
  methods: {
    ok() {
      this.$Message.info("确认了修改");
      console.log(this.formValidate)
      this.$emit('change',this.formValidate)
    },
    cancel() {
      this.$Message.info("用户取消了修改");
    }
  }
};
</script>

<style lang="less" scoped>
</style>

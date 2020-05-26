<template>
  <div>
    <Form
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="150"
      style="width:500px"
    >
      <FormItem label="接口名称" prop="name">
        <Input v-model="formValidate.name" placeholder="请输入接口名称"></Input>
      </FormItem>
      <FormItem label="接口地址" prop="location">
        <Input v-model="formValidate.location" placeholder="/space_time/query.json"></Input>
      </FormItem>
      <FormItem label="接口地址服务地址" prop="serverlocation">
        <Input v-model="formValidate.serverlocation" placeholder="192.168.80.192:8080"></Input>
      </FormItem>

      <Row>
        <Col span="20">
          <FormItem label="HTTP方法" prop="requestMethod">
            <Select v-model="formValidate.requestMethod" placeholder="get">
              <Option value="New York">New York</Option>
              <Option value="London">London</Option>
              <Option value="Sydney">Sydney</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span="4">
          <Button>试一下</Button>
        </Col>
      </Row>

      <Row>
        <Col span="12">
          <FormItem label="是否分页获取" prop="radio" >
            <RadioGroup v-model="radio"  on-change="changeck">
              <Radio label="否">否</Radio>
              <Radio label="是">是</Radio>
            </RadioGroup>
          </FormItem>
        </Col>
        <Col span="12" v-if="false">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <FormItem prop="user">
              <Input
                type="text"
                v-model="formInline.user"
                placeholder="Username"
                style="width:110px"
              ></Input>
            </FormItem>
            <FormItem prop="password">
              <Input
                type="password"
                v-model="formInline.password"
                placeholder="Password"
                style="width:110px"
              ></Input>
            </FormItem>
          </Form>
        </Col>
      </Row>

      <!-- <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
      </FormItem>-->
    </Form>
    <Tabs value="name1">
      <TabPane label="param" name="name1">
        <i-table border :columns="columns2" :data="data3"></i-table>
      </TabPane>
      <TabPane label="header" name="name2">
    
          <Row type="flex" justify="end">
  <a @click="batcgEdit">批量输入</a>
          </Row>
                 <!--   show-index-column -->
        <edit-table
        v-show="isshowdefault"
          v-model="data4"
          :columns="columns"
          @on-change="handleChange"
          style="border:none"
        ></edit-table>
        <edit-Text  v-show="isshow"></edit-Text>
      </TabPane>
      
      <TabPane label="返回参数" name="name3">
     
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import EditTable from "iview-edit-table";
import  editText from './editText'

export default {
  data() {
    return {
      isshowdefault:true,
      formValidate: {
        name: "",
        location: "",
        serverlocation: "",
        requestMethod: "",
        gender: "",
        radio:''
      },
      radio:'',
      show: true,
      ruleValidate: {
        name: [{ required: true, message: "请输入接口名称", trigger: "blur" }],
        location: [
          { required: true, message: "请输入接口地址", trigger: "blur" }
        ],
        serverlocation: [
          { required: true, message: "请输入服务地址", trigger: "change" }
        ],
        requestMethod: [
          { required: true, message: "请选择请求方式", trigger: "change" }
        ],
        gender: [
          { required: true, message: "请选择是否分页获取", trigger: "change" }
        ]
      },
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      columns2: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age",
          render: (h, params) => {
            return;
          }
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title: "Action",
          key: "action",
          render: (h, params) => {
            return h(
              "Button",
              {
                props: {
                  type: "text",
                  size: "small"
                },
                on: {
                  click: () => {
                    console.log(111);
                    if (params.row.$isEdit) {
                      this.handleSave(params.row);
                    } else {
                      this.handleEdit(params.row);
                    }
                  }
                }
              },
              params.row.$isEdit ? "保存" : "编辑"
            );
          }
        }
      ],
      data3: [
        {
          name: "哈哈",
          age: 18,
          address: "上海",
          $isEdit: false
        },
        {
          name: "啦啦",
          age: 24,
          address: "北京",
          $isEdit: false
        }
      ],
      data4: [
        {
          name: "John Brown",
          age: 18,
          gender: 1,
          marry: false,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
          hobby: [1, 2],
          person: [],
          params:'否'
        },
        {
          name: "Jim Green",
          age: 24,
          gender: 1,
          marry: false,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
          hobby: [1],
          person: [],
          params:'是'
        },
        {
          name: "Joe Black",
          age: 30,
          gender: 1,
          marry: true,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
          hobby: [1, 3],
          person: [],
          params:'否'
        },
        {
          name: "Jon Snow",
          age: 26,
          gender: 0,
          marry: true,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
          hobby: [2, 3],
          person: [],
          params:'是'
        }
      ],
      columns: [
        {
          key: "name",
          title: "参数",
          width: 140,
          type: "input"
        },
        {
          key: "age",
          title: "值",
          width: 120,
          type: "input"
        },
        {
         key:'params',
         title:'参数是否必填',
         width: 120,
        },
        {
          key: "address",
          title: "描述",
          type: "input",
          minWidth: 500
        }
      ],
      //    actions: [
      //     {
      //       text: '详情',
      //       type: 'primary',
      //       onClick: row => {
      //         /* eslint-disable no-console */
      //         console.log(row)
      //       }
      //     },
      //     {
      //       text: '修改',
      //       type: 'primary',
      //       disabled: row => row.age > 24,
      //       onClick: row => {
      //         /* eslint-disable no-console */
      //         console.log(row)
      //       }
      //     },
      //     {
      //       text: '删除',
      //       type: 'warning',
      //       confirm: {
      //         title: '确认删除吗？',
      //       },
      //       disabled: row => row.age > 24,
      //       onClick: row => {
      //         /* eslint-disable no-console */
      //         console.log(row)
      //       }
      //     },
      //   ],
      isshow:false
    };
  },
  components: {
    EditTable,
    editText
  },
  created() {
  },
  watch: {
    formValidate(val) {
      console.log(val);
    }
  },
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    changeck(val) {
      console.log(val);
      console.log(this.radio)
    },
    handleChange(val) {
      /* eslint-disable no-console */
      console.log(val);
    },
    //批量编辑
    batcgEdit(){
        // var isshwo=true
    //  this.$store.commit('addnewshow',true)
    this.isshow=!this.isshow
    this.isshowdefault=!this.isshowdefault
    }
  }
};
</script>

<style lang="less" scoped>
.ivu-tabs-nav::before {
  content: "*";
  display: inline-block;
  margin-right: 4px;
  line-height: 1;
  font-family: SimSun;
  font-size: 12px;
  color: #ed4014;
}
.tab1::before {
  content: "*";
  display: inline-block;
  margin-right: 4px;
  line-height: 1;
  font-family: SimSun;
  font-size: 12px;
  color: #ed4014;
}
.ivu-input-inner-container /deep/   .ivu-input  .ivu-input-default{
    border: none !important;
}
.flex-button{
    display: flex;
}
</style>

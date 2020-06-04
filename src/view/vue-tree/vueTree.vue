<template>
  <div>
    <Card>
      <div>
        已选中的权限:{{selectedPermissions}}
      </div>
      <Tree :data="tressdatas" :render="renderContent" class="permission-tree-box" show-checkbox  ></Tree>
    </Card>
  </div>
</template>
 
<script>
export default {
  name: "rbac_role_permission_page",
  data() {
    return {
      selectedPermissions: ["p1_view", "p1_export"],
      treeData:[
        {id:12,parentId:0,categoryName:'科学与技术',rank:500,imggeUrl:'http://dfs.image.com',
        children:[
          {id:100,parentId:100,categoryName:'我是资源股市'}
        ]
        },
        {id:13,parentId:1,categoryName:'心灵修炼',rank:500,imggeUrl:'http://dfs.image.com'},
        {id:14,parentId:2,categoryName:'商业与政治',rank:500,imggeUrl:'http://dfs.image.com'},
        {id:15,parentId:3,categoryName:'商业',rank:500,imggeUrl:'http://dfs.image.com'},
        {id:16,parentId:4,categoryName:'啊啊啊',rank:500,imggeUrl:'http://dfs.image.com'},
        {id:17,parentId:5,categoryName:'qqqq',rank:500,imggeUrl:'http://dfs.image.com'},
        {id:18,parentId:6,categoryName:'vvvv',rank:500,imggeUrl:'http://dfs.image.com'},
        {id:19,parentId:7,categoryName:'bbb',rank:500,imggeUrl:'http://dfs.image.com'}
      ],
      tressdatas:[],
      buttonProps: {
        type: "default",
        size: "small"
      }
    };
  },
  methods: {
    renderContent(h, { root, node, data }) {
      return h(
        "span",
        {
          style: {
            display: "inline-block",
            width: "100%"
          },
          class: "permission-tree-node"
        },
        [
          h("span", [
            h("Icon", {
              props: {
                type: "ios-paper-outline"
              },
              style: {
                marginRight: "8px"
              }
            }),
            h("span", data.title)
          ]),
          h(
            "span",
            {
              style: {
                display: "inline-block",
                float: "right",
                marginRight: "32px"
              }
            },
            [
              h(
                "CheckboxGroup",
                {
                  props: {
                    value: this.selectedPermissions
                  },
                  on: {
                    "on-change": event => {
                      this.selectedPermissions = event;
                    }
                  }
                },
                (data.permissions || []).map(obj => {
                  return h(
                    "Checkbox",
                    {
                      props: {
                        label: obj.value
                      }
                    },
                    obj.text
                  );
                })
              )
            ]
          )
        ]
      );
    },
     getTree (tree = []) {
        let arr = [];
        if (tree.length !== 0) {
          tree.forEach(item => {
            let obj = {};
            obj.title = item.categoryName;
            obj.id = item.id; // 其他你想要添加的属性
            obj.removed = item.removed; // 其他你想要添加的属性
            obj.rank = item.rank; // 其他你想要添加的属性
            obj.imageUrl = item.imageUrl; // 其他你想要添加的属性
            obj.desc = item.desc; // 其他你想要添加的属性
            obj.parentId = item.parentId; // 其他你想要添加的属性
            // if(item.child === 1) {
            //   obj.children = [];
            //   obj.loading = false;
            // }
            // if(item.children==undefined||item.children.length<0) return
            obj.children=this.getTree(item.children)
            arr.push(obj);
          });
        }
        return arr
      },
    append(data) {
      const children = data.children || [];
      children.push({
        title: "appended node",
        expand: true
      });
      this.$set(data, "children", children);
    },
    remove(root, node, data) {
      const parentKey = root.find(el => el === node).parent;
      const parent = root.find(el => el.nodeKey === parentKey).node;
      const index = parent.children.indexOf(data);
      parent.children.splice(index, 1);
    }
  },
  mounted() {
    this.tressdatas=this.getTree(this.treeData)
    console.log(this.tressdatas)
  }
};
</script>
<style>
.permission-tree-box ul.ivu-tree-children > li {
  margin: 0;
}
.permission-tree-node {
  padding: 10px 5px 10px 0;
  border-bottom: 1px solid #f6f6f6;
}
.permission-tree-node:hover {
  background-color: #f7f7f7;
}
</style>
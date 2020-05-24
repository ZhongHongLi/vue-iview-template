<template>
  <div class="tree-caninteaer">
    <!-- <button @click="addNode">Add Node</button> -->
    <!-- default-tree-node-name 添加默认的 -->
    <vue-tree-list
      @click="onClick"
      @change-name="onChangeName"
      @delete-node="onDel"
      @add-node="onAddNode"
      :model="data"
      default-tree-node-name="new node"
      default-leaf-node-name="new leaf"
      :default-expanded="false"
    >
      <span class="icon" slot="addTreeNodeIcon"  >📂</span>
      <span class="icon" slot="addLeafNodeIcon" >＋</span>
      <span class="icon" slot="editNodeIcon" >📃</span>
      <span class="icon" slot="delNodeIcon" >✂️</span>
      <!-- 子节点前面的图标 -->
      <span class="icon flex" slot="leafNodeIcon">
        🍃
        <input type="checkbox" />
      </span>
      <span class="icon" slot="treeNodeIcon">
        <input type="checkbox" />
      </span>
    </vue-tree-list>
    <!-- <button @click="getNewTree">Get new tree</button> -->
    <!-- <pre v-if="newTree">
      {{newTree}}
    </pre>-->
  </div>
</template>

<script>
import { VueTreeList, Tree, TreeNode } from "vue-tree-list";
import "./index-two.less";
export default {
  components: {
    VueTreeList
  },
  data() {
    return {
      newTree: {},
      data: new Tree([
        {
          name: "列表1",
          id: 1,
          pid: 0,
          // dragDisabled: true,
          // addTreeNodeDisabled: true,
          // addLeafNodeDisabled: true,
          // editNodeDisabled: true,
          // delNodeDisabled: true,
          children: [
            {
              name: "Node 1-2",
              id: 2,
              isLeaf: true,
              pid: 1
            }
          ]
        },
        {
          name: "列表2",
          id: 4,
          pid: 0,
          // disabled: true,
          // dragDisabled: true,
          //添加文件的
          // addTreeNodeDisabled: true,
          //+
          // addLeafNodeDisabled: true,
          //修改的图标
          // editNodeDisabled: true,
          //删除的图标
          // delNodeDisabled: true,
          children: [
            {
              name: "我是node2下面的子节点",
              id: 10,
              isLeaf: true,
              pid: 5
            }
          ]
        },
        {
          name: "列表3",
          id: 5,
          pid: 0,
            children: [
            {
              name: "Node 1-2",
              id: 7,
              isLeaf: true,
              pid: 1
            }
          ]
        },
        {
          name: "列表4",
          id: 6,
          pid: 0,
          // dragDisabled: true,
          // addTreeNodeDisabled: true,
          // addLeafNodeDisabled: true,
          // editNodeDisabled: true,
          // delNodeDisabled: true,
          children: [
            {
              name: "Node 1-2",
              id: 7,
              isLeaf: true,
              pid: 1
            }
          ]
        },
        {
          name: "列表五",
          id: 8,
          pid: 0,
          //禁用
          // disabled: true,
          children: [
            {
              name: "Node 1-2",
              id: 7,
              isLeaf: true,
              pid: 1
            }
          ]
        },
        {
          name: "列表6",
          id: 9,
          pid: 0,
            children: [
            {
              name: "Node 1-2",
              id: 7,
              isLeaf: true,
              pid: 1
            }
          ]
        }
      ])
    };
  },
  created() {},
  methods: {
    onDel(node) {
      console.log(node);
      node.remove();
    },
    //修改
    onChangeName(params) {
      console.log(params);
    },
    //追加父节点下面的子节点
    onAddNode(params) {
      console.log(params);
    },
    addChildren(params){
     console.log(111)
     console.log(params)
    },
    onClick(params) {
      console.log(params);
    //   arr.push(...params.name)
    },
    //添加节点
    //     addNode () {
    //     var node = new TreeNode({ name: 'new node', isLeaf: false })
    //     if (!this.data.children) this.data.children = []
    //     this.data.addChildren(node)
    //   },

    getNewTree() {
      var vm = this;
      function _dfs(oldNode) {
        var newNode = {};

        for (var k in oldNode) {
          if (k !== "children" && k !== "parent") {
            newNode[k] = oldNode[k];
          }
        }

        if (oldNode.children && oldNode.children.length > 0) {
          newNode.children = [];
          for (var i = 0, len = oldNode.children.length; i < len; i++) {
            newNode.children.push(_dfs(oldNode.children[i]));
          }
        }
        return newNode;
      }

      vm.newTree = _dfs(vm.data);
    }
  }
};
</script>

<style lang="less" scoped>
.tree-caninteaer {
  width: 500px !important;
}

input{
    width: 20px;
    height: 20px;
}

.vtl-icon vtl-icon-caret-right:::before{
    display: block;
    width: 10px !important;
    height: 10px !important;
}

.flex{
    display: flex;
}
</style>
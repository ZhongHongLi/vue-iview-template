<template>
 <div>
       <!-- <div class="core">
        <div class="abs-zone" v-if="editZoneDisplayBoolean">
            <div class="box">
                <Input placeholder="Enter something..." style="width:200px" v-model="beforeSubmitNodeTitleString" />
                <Button type="success" :style="{marginLeft:'5px'}" @click="submitNameEditFunc(1)">
                    <Icon type="md-checkmark" />
                </Button>
                <Button type="error" :style="{marginLeft:'5px'}" @click="submitNameEditFunc(0)">
                    <Icon type="md-close" />
                </Button>
            </div>
        </div>
       </div> -->
       <Modal v-model="isshowEdit"  title="编辑"  @on-ok="submitNameEditFunc(1)" @on-cancel="submitNameEditFunc(0)">
           修改:<Input placeholder="编辑你想要编辑的内容"  style="width:150px "  v-model="beforeSubmitNodeTitleString"    ></Input>
       </Modal>
 <Tree :data="data5" :render="renderContent" class="demo-tree-render"></Tree>
 </div>
</template>

<script>
export default {
 data() {
 return {
isshowEdit:false,
isShow:true,
root:null,
editZoneDisplayBoolean:false,
beforeSubmitNodeTitleString:'',
edit_root:null,
edit_node:null,
edit_data:null,
 data5: [
                    {
                        title: 'parent 1',
                        expand: true,
                        render: (h, { root, node, data }) => {
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%'
                                }
                            }, [
                                h('span', [
                                    h('Icon', {
                                        props: {
                                            type: 'ios-folder-outline'
                                        },
                                        style: {
                                            marginRight: '8px'
                                        }
                                    }),
                                    h('span', data.title)
                                ]),
                                h('span', {
                                    style: {
                                        display: 'inline-block',
                                        float: 'right',
                                        marginRight: '32px'
                                    }
                                }, [
                                    h('Button', {
                                        props: Object.assign({}, this.buttonProps, {
                                            icon: 'ios-add',
                                            type: 'primary'
                                        }),
                                        style: {
                                            width: '64px'
                                        },
                                        on: {
                                            click: () => { this.append(data) }
                                        }
                                    })
                                ])
                            ]);
                        },
                        children: [
                            {
                                title: 'child 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: 'child 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    },
                      {
                        title: 'parent 1',
                        expand: true,
                        render: (h, { root, node, data }) => {
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%'
                                }
                            }, [
                                h('span', [
                                    h('Icon', {
                                        props: {
                                            type: 'ios-folder-outline'
                                        },
                                        style: {
                                            marginRight: '8px'
                                        }
                                    }),
                                    h('span', data.title)
                                ]),
                                h('span', {
                                    style: {
                                        display: 'inline-block',
                                        float: 'right',
                                        marginRight: '32px'
                                    }
                                }, [
                                    h('Button', {
                                        props: Object.assign({}, this.buttonProps, {
                                            icon: 'ios-add',
                                            type: 'primary'
                                        }),
                                        style: {
                                            width: '64px'
                                        },
                                        on: {
                                            click: () => { this.append(data) }
                                        }
                                    })
                                ])
                            ]);
                        },
                        children: [
                            {
                                title: 'child 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: 'child 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                 buttonProps: {
                    type: 'default',
                    size: 'small',
                }
 }
 },
 created(){

 },
 methods: {
 renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-add'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => { this.append(root,node,data) }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-remove'
                            }),
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        }),
                      h('Button', {
              props: Object.assign({},  {
                type: 'primary',
                size: 'small',
              }),
              style: {
                marginRight: '8px'
              },
              on: {
                click: () => { this.albumCategoryEdit(root,node,data) }
              }
            }, '编辑')
                    ])
                ]);
            },
            append (data) {
                console.log(data)
                const children = data.children || [];
                children.push({
                    title: 'appended node',
                    expand: true
                });
                this.$set(data, 'children', children);
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            },
            albumCategoryEdit(root,node,data){
                //root 是所有的节点 node是当前的点击的节点//当前节点的数据
                // console.log(root)
                // console.log(node)
                // console.log(data)
                this.isshowEdit=true
                this.editZoneDisplayBoolean =true,
                this.edit_root=root
                this.edit_node=node
                this.edit_data=data
                //讲确认的点击修改的title 赋值到input中
                 this.beforeSubmitNodeTitleString = this.edit_node.node.title
            },
              submitNameEditFunc(x){
                  console.log('我点击了')
                  console.log(x)
                  //0 是确认 1是取消
            if (!x) {
                this.editZoneDisplayBoolean = false
                return
            } else {
                this.edit_node.node.title = this.beforeSubmitNodeTitleString
                this.editZoneDisplayBoolean = false
                return
            }
        },
        ok(x){
            console.log(x)
        }
 }
}
</script>

<style lang="less" scoped>
.core{
    width: 500px;
    height: 400px;
    border:1px solid #979797;
    border-radius: 5px;
    padding: 10px;
    overflow: hidden;
    position:relative;
    .abs-zone{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        background: rgba(255,255,255,.8);
        z-index: 1;
        .box{
            position:absolute;
            width: 100%;
            top:50%;
            left: 0;
            margin-top: 32px;
            text-align: center;
        }
    }
}
</style>

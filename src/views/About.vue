<template>
    <div class="dd">
        <Input  v-model="value" placeholder="Enter something..." style="width: 300px" />
        <Input  v-model="value" placeholder="Enter something..." style="width: 300px" />
        <div>
            <div>
                <div>
                    <Table v-scoped border :columns="tableColumns" :data="tableData" no-data-text=""></Table>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'About',
    data () {
        return {
            value: '',
            tableData: [{
                xh: "ddddd",
            }],
            tableColumns: [
                {
                    title: '学号',
                    key: 'xh',
                    width: 120,
                    align: 'center',
                    sortable: 'custom',
                    render:(h,params)=>{
                        return h('Tooltip',{
                            props: {
                                content: params.row.xh
                            }
                        },params.row.xh)
                    }
                }
            ],
        }
    },
    computed: {

    },
    mounted () {
      console.log(Vue.myGlobalMethod)  
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
        .dd{
            .ivu-input{
                width: 100px;
            }
            /deep/.ivu-table-cell,/deep/.ivu-tooltip-rel {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            /deep/.ivu-tooltip{
                width: 100%;
            }
            /deep/.ivu-tooltip-inner{
                white-space: normal;
            }
        }

    
</style>


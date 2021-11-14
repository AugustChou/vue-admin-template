<template>
  <div>
    <list-layout>
      <template slot="header">
        <conditions />
      </template>
      <template slot="content">
        <lb-table :column="fromDate.column" :data="fromDate.list" :pagination="true" />
      </template>
    </list-layout>
  </div>
</template>

<script>
import { getTestList } from '@/api/test.js'
import ListLayout from '@/components/ListLayout/index.vue'
import LbTable from '@/components/lb-table/lb-table.vue'
import Conditions from './components/conditions/index.vue'
export default {
  components: {
    ListLayout,
    LbTable,
    Conditions
  },
  data() {
    return {
      fromDate: {
        column: [
          {
            prop: 'nick',
            label: '昵称'
          },
          {
            prop: 'phone',
            label: '手机号'
          },
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'job',
            label: '职位'
          },
          {
            prop: 'subject',
            label: '学科'
          },
          {
            prop: 'year',
            label: '工作年限'
          },
          {
            prop: 'updateTime',
            label: '录入时间'
          },
          {
            prop: 'actions',
            label: '操作',
            render(_, scope) {
              return (<div>
                <button>操作</button>
                <button>操作</button>
                <button>操作</button>
              </div>)
            }
          }
        ],
        list: []

      }
    }
  },
  created() {
    getTestList().then((res) => {
      const { code, data } = res
      if (Number.parseInt(code) === 20000) {
        const { items } = data
        this.fromDate.list = items
      }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>

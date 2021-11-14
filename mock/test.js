
const list = [
  {
    nick: 'zxx',
    phone: 12346464,
    name: '周星星',
    job: 'aaa',
    subject: '数学',
    year: 20,
    updateTime: '2021-11-10'
  }
]

module.exports = [
  {
    url: '/vue-admin-template/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]


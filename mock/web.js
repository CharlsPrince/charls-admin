import Mock from 'mockjs'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    _id: '@increment',
    'status|1': ['published', 'draft', 'deleted'],
    name: '@cname',
    link: 'https://www.baidu.com',
    remark: '@cparagraph(2)',
    meta: {
       createAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
       updateAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
    }

  }))
}

export default [{
    url: '/webs/list',
    type: 'get',
    response: config => {
      const {
        title,
        page = 1,
        limit = 20,
        sort
      } = config.query

      let mockList = List.filter(item => {
        if (title && item.name.indexOf(title) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 200,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/webs/info',
    type: 'get',
    response: config => {
      const {
        id
      } = config.query
      for (const web of List) {
        if (web.id === +id) {
          return {
            code: 200,
            data: web
          }
        }
      }
    }
  },

  {
    url: '/webs/pv',
    type: 'get',
    response: _ => {
      return {
        code: 200,
        data: {
          pvData: [{
              key: 'PC',
              pv: 1024
            },
            {
              key: 'mobile',
              pv: 1024
            },
            {
              key: 'ios',
              pv: 1024
            },
            {
              key: 'android',
              pv: 1024
            }
          ]
        }
      }
    }
  },

  {
    url: '/webs/add',
    type: 'post',
    response: _ => {
      var _tmp = Mock.mock({
        _id: '@increment',
        'status|1': ['published', 'draft', 'deleted'],
        name: '@cname',
        link: 'https://www.baidu.com',
        remark: '@cparagraph(2)',
        meta: {
          createAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
          updateAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
        }
      })
      return {
        code: 200,
        data: _tmp
      }
    }
  },

  {
    url: '/webs/update',
    type: 'post',
    response: _ => {
      var _tmp = Mock.mock({
        _id: '@increment',
        'status|1': ['published', 'draft', 'deleted'],
        name: '@cname',
        link: 'https://www.baidu.com',
        remark: '@cparagraph(2)',
        meta: {
          createAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
          updateAt: '@datetime("yyyy-MM-dd A HH:mm:ss")',
        }
      })
      return {
        code: 200,
        data: _tmp
      }
    }
  }
]

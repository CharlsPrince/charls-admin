import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/webs/list',
    method: 'get',
    params: query
  })
}

export function fetchWeb(id) {
  return request({
    url: '/webs/info',
    method: 'get',
    params: {
      id
    }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/webs/pv',
    method: 'get',
    params: {
      pv
    }
  })
}

export function createWeb(data) {
  return request({
    url: '/webs/add',
    method: 'post',
    data
  })
}

export function updateWeb(data) {
  return request({
    url: '/webs/update',
    method: 'post',
    data
  })
}

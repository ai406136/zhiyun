var URL = 'https://ans.webwk.com/api'
var postAjax = function (params, url, cb) {
  setTimeout(function() {
    api.showProgress({
      title: '拼命加载中',
      modal: false
    })
    api.ajax({
        url: URL + url,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'flag': 'an'
        },
        data: {
          body: params
        }
    }, function(ret, err) {
        api.hideProgress()
        if (ret) {
          // 接口返回成功后执行传入的 回调函数 key陈宫了没key
          if (ret.errorCode === 0) {
            cb(ret.data)
          } else {
            // 失败
            api.alert({msg: JSON.stringify(ret.message)})
          }
        } else {
          // 接口错误
            api.alert({msg: '请求错误'})
        }
    })
  }, 300)
}

var tokenAjax = function (params, url, cb) {
  setTimeout(function() {
    api.showProgress({
      title: '拼命加载中',
      modal: false
    })
    // 从localStorage 获取登录时保存的token，传给需要的接口
    //这个才是本体 这个函数 在这里一大堆 首先请求了 一个ajax 异步的。有可能几分钟后才请求成功。但是我们的cb 必须等到 请求成功 获取数据才能执行
    // 所以
    var token = localStorage.getItem('token')
    api.ajax({
        url: URL + url,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'token': token,
          'flag': 'an'
        },
        data: {
          body: params
        }
    }, function(ret, err) {
        api.hideProgress()
        if (ret) {
            // 这个回调执行的时候 我把接口请求成功的结果 给了他
          if (ret.errorCode === 0) {
            cb(ret.data)
          } else {
            api.alert({msg: JSON.stringify(ret.message)})
            console.log(JSON.stringify(ret.data), '请求失败')
          }
        } else {
            api.alert({msg: '请求错误'})
        }
    })
  }, 300)
}

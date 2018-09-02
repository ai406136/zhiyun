var router = {
    modifyinfor: {
        name: 'modifyinfor',
        url: 'html/modifyinfor.html'
    },
    myvip: {
        name: 'myvip',
        url: 'html/myvip.html'
    },
    opinion: {
        name: 'opinion',
        url: 'html/opinion.html'
    },
    login: {
        name: 'login',
        url: 'html/login.html'
    },
    signin: {
        name: 'signin',
        url: './signin.html'
    },
    index: {
        name: 'index',
        url: 'index.html'
    },
    subject: {
        name: 'subject',
        url: 'html/subject.html'
    },
    report: {
        name: 'subject',
        url: 'html/report.html'
    },
    commission: {
        name: 'subject',
        url: 'html/commission.html'
    },
    errorques: {
      name: 'errorques',
      url: 'html/errorques.html'
    },
    family: {
      name: 'family',
      url: 'html/family.html'
    },
    forgetpass: {
      name: 'forgetpass',
      url: './forgetpass.html'
    },
    regisphone: {
      name: 'regisphone',
      url: './regisphone.html'
    },
    binding: {
      name: 'binding',
      url: './binding.html'
    },
    password: {
      name: 'password',
      url: './password.html'
    },
    problemgrade: {
      name: 'problemgrade',
      url: './problemgrade.html'
    },
    reportdeta: {
      name: 'reportdeta',
      url: './reportdeta.html'
    },
    changepass: {
      name: 'changepass',
      url: 'html/changepass.html'
    },
    photodetails: {
      name: 'photodetails',
      url: 'html/photodetails.html'
    }
}

function openWins(type, url, params) {
    var url = url ? url : router[type].url
    api.openWin({
        name: router[type].name,
        url: url,
        bounces: true,
        slidBackEnabled: false,
        pageParam: {
            name: router[type].name,
            params: params
        }
    })
}

function closeWins(type) {
    api.closeWin({
        name: router[type].name
    })
}

function openCameras(router) {
    api.getPicture({
        sourceType: 'camera',
        encodingType: 'png',
        mediaValue: 'pic',
        destinationType: 'base64',
        allowEdit: true,
        quality: 20,
        saveToPhotoAlbum: false
    }, function(ret, err) {
        if (ret) {
          var params = {
            base64Data: ret.base64Data
          }
         openWins('photodetails', router, params)
        }
    });
}

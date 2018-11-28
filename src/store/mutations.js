export default {
  saveParm (state, result) { // 保存用户和headers信息
    state.loginParm = result
  },
  saveMyAppData (state, myAppData) { // 保存我的应用数据
    state.myAppData = myAppData
  },
  saveAllAppData (state, allAppData) { // 保存应用中心数据
    state.allAppData = allAppData
  },
  unInstallMyAppStore (state, appData) { // 改变我的应用数据状态
    let data = appData.data
    let installStatus = appData.status
    let myAppData = state.myAppData
    for (let i = 0; i < myAppData.length; i++) {
      if (myAppData[i].app_id === data.app_id) {
        myAppData[i].installStatus = installStatus
        return false
      }
    }
  },
  addMyApp (state, appData) { // 安装单个应用
    let myAppData = state.myAppData
    let status = true
    for (let i = 0; i < myAppData.length; i++) {
      if (myAppData[i].app_id === appData.app_id) {
        myAppData[i].installStatus = '1'
        status = false
      }
    }
    if (status) {
      myAppData.push(appData)
    }
  },
  changeAllAppInstall (state, data) { // 安装卸载应用后改变所有应用列表的状态
    let app = data.data
    let isInstall = data.isInstall
    let id = app.app_id
    let allAppData = state.allAppData
    for (let i = 0; i < allAppData.length; i++) {
      if (allAppData[i].app_id === id) {
        allAppData[i].isInstall = isInstall
        return
      }
    }
  }
}

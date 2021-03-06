import {fetchPosts} from "components/common/fetch"
import { setCookie } from 'libs/util'

export default {
  namespace: 'home',
  state: {
    loading: false,
    levelInfo: {
      "level" : ""
    },
    userInfo: {
      "level": "",
      "assetsDes": 0,
      "profitDes": 0
    },
    projList: [],
    progressInfo: {},
    serverTime: '',
    helpShow: false,
    isAgreementShow: false
  },
  effects: {
    // *'fetch' (action, {put, call}) {
    //   yield put({type: 'request', loading: true})
    //
    //   let count = yield call((count) => {
    //     return new Promise(resolve => {
    //       setTimeout(() => {
    //         resolve(count + 1)
    //       }, 1000)
    //     })
    //   }, action.count)
    //
    //   yield put({
    //     type: 'response',
    //     loading: false,
    //     count
    //   })
    // },
    // *getUserId (action, {put, call}) {
    //   yield put({type: 'levelReq', loading: true})

    //   yield call(() => {
    //     return fetchPosts("/api/user/userId",{},"GET")
    //       .then(data => data.result)
    //       .then(data => {

    //         let levelInfo =  call(() => {
    //           return fetchPosts("/api/user/level",{},"GET")
    //             .then(data => data.result)
    //             .catch(err => ({
    //           		"userId" : 111111,
    //           		"level" : "暂无"
    //              }))
    //         }, action.levelInfo)

    //         let userInfo =  call(() => {
    //           return fetchPosts("/api/user/userInfo",{},"GET")
    //             .then(data => data.result.user)
    //             .catch(err => ({
    //               "id": 111111,
    //         			"level": "暂无",
    //         			"assets": 0,
    //         			"profit": 0
    //             }))
    //         }, action.userInfo)

    //         let projList =  call(() => {
    //           return fetchPosts("/api/project/1",{},"GET")
    //             .then(data => data.result.project)
    //             .catch(err => ({
    //               "assetsId": 1,
    //               "id": 1,
    //               "name": "--",
    //               "pics": "",
    //               "tag": "--",
    //               "watched": 0,
    //               "projectAssets": {},
    //               "projectInfo": {
    //                   "assetsRatio": [
    //                       {
    //                           "name": "--",
    //                           "value": 1
    //                       },
    //                       {
    //                           "name": "--",
    //                           "value": 1
    //                       },
    //                       {
    //                           "name": "--",
    //                           "value": 1
    //                       }
    //                   ],
    //                   "id": 2,
    //                   "projectId": 1,
    //                   "tag1": "+0%",
    //                   "tag2": "0款",
    //                   "tag3": "0个",
    //               },
    //           }))
    //         }, action.projList)

    //         let progressInfo =  call(() => {
    //           return fetchPosts("/api/project/1/progress",{},"GET")
    //             .then(data => data.result)
    //             .catch(err => ({
    //               "amount": 0,
    //               "target": 0,
    //               "user_count": 0
    //             }))
    //         }, action.progressInfo)

    //       })
    //       .catch(err => {
    //         console.log(err);
    //       })
    //   })


    //   yield call(() => {
    //     setCookie("level",levelInfo.level,"storage");
    //   })
    //   yield put({
    //     type: 'levelRes',
    //     loading: false,
    //     levelInfo,
    //     userInfo,
    //     projList,
    //     progressInfo
    //   })
    // },
    *getLevel (action, {put, call}) {
      yield put({type: 'levelReq', loading: true})

      let levelInfo = yield call(() => {
        return fetchPosts("/api/user/level",{},"GET")
          .then(data => data.result)
          .catch(err => ({
            "userId" : 111111,
            "level" : "暂无"
            }))
      }, action.levelInfo)

      yield call(() => {
        setCookie("level",levelInfo.level,"storage");
      })
      yield put({
        type: 'levelRes',
        loading: false,
        levelInfo
      })
    },
    *getUserInfo (action, {put, call}) {
      yield put({type: 'userInfoReq', loading: true})

      let userInfo = yield call(() => {
        return fetchPosts("/api/user/userInfo",{},"GET")
          .then(data => data.result.user ? data.result.user : {
            "level": "暂无",
            "assetsDes": 0,
            "profitDes": 0
          })
          .catch(err => ({
            "id": 111111,
      			"level": "暂无",
      			"assetsDes": 0,
      			"profitDes": 0
          }))
      }, action.userInfo)

      yield put({
        type: 'userInfoRes',
        loading: false,
        userInfo
      })
    },
    *getProjList (action, {put, call}) {
      yield put({type: 'projListReq', loading: true})
      let serverTime, helpShow
      let projList = yield call(() => {
        return fetchPosts("/api/project/list",{},"GET")
          .then(data => {
            serverTime = data.serverTime
            helpShow = data.result.projects.length>0
            return data.result.projects
          })
          .catch(err => ({
            "assetsId": 1,
            "id": 1,
            "name": "--",
            "pics": [""],
            "tag": "--",
            "watched": 0,
            "projectAssets": {},
            "projectInfo": {
                "assetsRatio": [
                    {
                        "name": "--",
                        "value": 1
                    },
                    {
                        "name": "--",
                        "value": 1
                    },
                    {
                        "name": "--",
                        "value": 1
                    }
                ],
                "id": 2,
                "projectId": 1,
                "tag1": "+0%",
                "tag2": "0款",
                "tag3": "0个",
            },

        }))
      }, action.projList)

      yield put({
        type: 'projListRes',
        loading: false,
        projList,
        serverTime,
        helpShow
      })
    },
    *getProgressInfo (action, {put, call}) {
      yield put({type: 'progressInfoReq', loading: true})
      let id = action.progressInfo,
          progressInfo = {}
      progressInfo[id] = yield call(() => {
        return fetchPosts("/api/project/"+id+"/progress",{},"GET")
          .then(data => data.result)
          .catch(err => ({
            "amount": 0,
            "target": 0,
            "user_count": 0
          }))
      }, action.progressInfo)
      yield put({
        type: 'progressInfoRes',
        loading: false,
        progressInfo
      })
    },
    *setHelpStatus(action,{put}) {
      yield put({type: 'helpShowReq'})
      yield put({
        type : 'helpShowRes',
        helpShow:true
      })
    },
    *setAgreement(action,{put}) {
      yield put({type: 'helpShowReq'})
      yield put({
        type : 'helpShowRes',
        isAgreementShow:action.isShow
      })
    }

  },
  reducers: {
    helpShowReq (state, payload) {
      return {...state, ...payload}
    },
    helpShowRes (state, payload) {
      return {...state, ...payload}
    },
    levelReq (state, payload) {
      return {...state, ...payload}
    },
    levelRes (state, payload) {
      return {...state, ...payload}
    },
    userInfoReq (state, payload) {
      return {...state, ...payload}
    },
    userInfoRes (state, payload) {
      return {...state, ...payload}
    },
    projListReq (state, payload) {
      return {...state, ...payload}
    },
    projListRes (state, payload) {
      return {...state, ...payload}
    },
    progressInfoReq (state, payload) {
      return {...state, ...payload}
    },
    progressInfoRes (state, payload) {
      payload.progressInfo = Object.assign(state.progressInfo, payload.progressInfo)
      return {...state, ...payload}
    }
  }
}

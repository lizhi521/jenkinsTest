/*
  前端适配方案：
  1.把宽高是px的转成rem
  2.字体使用px而不是rem
*/
export default (function () {
  function setInitialRem (_standard, baseDPR) {
    // 获取当前设备的DRP
    var dpr = window.devicePixelRatio || 1

    // 如果设定了默认最小的DPR的值
    if (baseDPR) {
      dpr = dpr >= baseDPR ? dpr : baseDPR
    }

    // 设置缩放图比例
    var scale = 1 / dpr
    // 设置视图缩放比例
    // document.head.querySelector('meta[name="viewport"]').content = 'width=device-width,initial-scale=' + scale + ',minimum-scale=' + scale + ',maximum-scale=' + scale + ',user-scalable=no,shrink-to-fit=no'

    // 取得当前设备宽度
    var deviceWidth = document.documentElement.clientWidth
    // window.innerWidth
    // 标定原稿涉及基准值 当前稿件涉及宽度为 iPhone6/6s 375像素,设计稿为750像素
    var standardWidth = _standard * dpr

    // 设定基准单位
    var baseValue = 15
    // 基准系数 = 设备宽度/稿件基准宽度 *设备DPR *10
    var rem = deviceWidth / standardWidth * dpr * baseValue
    // 设置REM
    document.documentElement.style.fontSize = rem + 'px'
  }

  window.addEventListener('resize', function () {
    setInitialRem(375, 1)
  })

  setInitialRem(375, 1)
})()

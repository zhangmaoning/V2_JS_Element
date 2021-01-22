export default {
  login() {
    console.log("处理登录事件的方法")
  },
  // 统计字符串字节长度
  getRealLength(val) {
    var str = new String(val);
    var bytesCount = 0;
    for (var i = 0, n = str.length; i < n; i++) {
      var c = str.charCodeAt(i);
      if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
        bytesCount += 1;
      } else {
        bytesCount += 2;
      }
    }
    return bytesCount;
  },
  // js添加水印
  watermark(content) {
    var name = content;
    var opacity = 0.2; // 水印透明度
    var w = 200; // 水印宽度
    var h = 200; // 水印高度
    var genWater = function (name) {
      var waterCanvas = document.createElement('canvas');
      waterCanvas.id = 'water-canvas';
      waterCanvas.setAttribute('width', w);
      waterCanvas.setAttribute('height', h);
      var ctx = waterCanvas.getContext('2d');
      ctx.rotate(Math.PI / 180 * 30);
      ctx.font = '15px serif';
      ctx.fillText(name, 10, 10);
      var base64Url = waterCanvas.toDataURL();

      var waterMarkDiv = document.createElement('div');
      var styleStr = 'position:absolute;top:0;left:0;width:100%;height:100%;z-index:99999;pointer-events:none;background-image:url(' + base64Url + ');opacity: ' + opacity + ';';
      waterMarkDiv.setAttribute('style', styleStr);
      waterMarkDiv.classList.add('__wm');
      return waterMarkDiv;
    };
    var container = document.body;
    var waterMarkDiv = genWater(name);
    container.insertBefore(waterMarkDiv, container.firstChild);

    var callback = function (record) {
      for (var i = 0; i < record.length; i++) {
        var item = record[i];
        var target = item.target;
        if (target.nodeType === 1) {
          var removedNodes = item.removedNodes;
          if (target.nodeName === 'BODY' && removedNodes.length > 0) {
            for (var j = 0; j < removedNodes.length; j++) {
              var element = removedNodes[j];
              if (element.nodeType === 1 && element.nodeName === 'DIV' && element.classList.contains('__wm')) {
                waterMarkDiv = genWater(name);
                container.insertBefore(waterMarkDiv, container.firstChild);
              }
            }
          }
          var type = item.type;
          if (target.nodeName === 'DIV' && target.classList.contains('__wm') && type === 'attributes') {
            container.removeChild(waterMarkDiv);
          }
        }
      }
    };

    if (typeof MutationObserver === 'function') {
      var obs = new MutationObserver(callback);
      var options = {
        childList: true,
        attributes: true,
        subtree: true,
        characterData: true
      };
      obs.observe(container, options);
    }


  }
}

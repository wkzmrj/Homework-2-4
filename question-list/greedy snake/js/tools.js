// 随机对象的函数封装
(
  function() {
    //随机获取整数的对象；
    var Tools = {
      //获取在一个范围之内的任意整数
      getRandom: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      },

      //获取随机颜色

      getColor: function() {
        //根据rgb获取颜色的数字
        var r = this.getRandom(0, 255);
        var g = this.getRandom(0, 255);
        var b = this.getRandom(0, 255);
        return "rgb('+r+','+g+','+b')";
      }
    };
    window.Tools = Tools;
  }
)();

(function() {
  var ps = 'absolute';

  // 食物的函数属性：x,y,width,height,color
  function Food(option) {
    //数据类型的判断，需要保证对象类型数据的有效性；
    option = option instanceof Object ? option : {};
    this.width = option.width || 20;
    this.height = option.height || 20;
    this.x = option.x || 0;
    this.y = option.y || 0;
    this.color = option.color || 'green';

    //后期调用food的div 元素；
    this.elements = [];
  }
  //原型对象的行为属性设置，元素渲染到主页上；


  Food.prototype.render = function(map) {
    var ele = document.createElement('div');
    //食物的随机获取位置的更新；
    this.x = Tools.getRandom(0, map.clientWidth / this.width - 1) * this.width;
    this.y = Tools.getRandom(0, map.clientHeight / this.height - 1) * this.height;

    ele.style.width = this.width + "px";
    ele.style.height = this.height + "px";
    ele.style.left = this.x + "px";
    ele.style.top = this.y + "px";
    ele.style.backgroundColor = this.color;
    ele.style.position = ps;
    //新的元素添加到父级中
    map.appendChild(ele);
    //添加新的元素到数组，方便后期删除；
    this.elements.push(ele);
  };

  Food.prototype.remove = function(map, i) {
    //删除哪个数组对象的下标；
    //删除实例对象的新建div的元素；
    map.removeChild(this.elements[i]);
    //同步需要删除数组的元素；
    this.elements.splice(i, 1);
  }

  // 利用 window 对象暴露 Food 函数可以给外部使用
  window.Food = Food;
})();

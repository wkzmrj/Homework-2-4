(
  function() {
    var ps = 'absolute';
    //设置蛇的对象函数
    function Snake(option) {
      //判断数据类型和有效性；
      option = option instanceof Object ? option : {};
      //传递蛇的对象属性；
      this.width = this.width || 20;
      this.height = this.height || 20;
      //蛇身的数据需要设置；
      this.body = [{
          x: 3,
          y: 2,
          color: 'red'
        },
        {
          x: 2,
          y: 2,
          color: 'blue'
        },
        {
          x: 1,
          y: 2,
          color: 'blue'
        }
      ];
      //方向也需要设置，默认向右移动
      this.direction = 'right';
      //同食物，储存渲染的div元素；
      this.elements = [];

    }
    //给蛇的原型设置对象属性，渲染到页面
    Snake.prototype.render = function(map) {
      //div元素遍历；
      for (var i = 0, len = this.body.length; i < len; i++) {
        //每一节产生的新的数据
        var piece = this.body[i];
        //同食物创建新元素；
        var ele = document.createElement('div');
        //直接设置样式和定位；

        ele.style.width = this.width + 'px';
        ele.style.height = this.height + 'px';
        ele.style.left = piece.x * this.width + 'px';
        ele.style.top = piece.y * this.height + 'px';
        ele.style.position = ps;
        ele.style.backgroundColor = piece.color;

        //渲染到map父级内部；
        map.appendChild(ele);
        //数据添加到数组elements;
        this.elements.push(ele);
      }
    };

    //蛇运动的方法
    Snake.prototype.move = function() {
      //蛇身的运动每一节的运动位置，倒向
      for (var i = this.body.length - 1; i > 0; i--) {
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;
      }

      //蛇头的位置和方向改变
      var head = this.body[0];
      switch (this.direction) {
        case 'right':
          head.x += 1;
          break;
        case 'left':
          head.x -= 1;
          break;
        case 'top':
          head.y -= 1;
          break;
        case 'bottom':
          head.y += 1;
          break;
      }
    };

    //删除蛇的数据
    Snake.prototype.remove = function(map) {
      for (var i = this.body.length - 1; i >= 0; i--) {
        map.removeChild(this.elements[i]);
      }
      this.elements = [];
    }

    window.Snake = Snake;
  })();

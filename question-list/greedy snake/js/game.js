//游戏的数据逻辑
//food, snake, map属性，start方法

(
  function() {
    var that;
    //内部创建游戏函数
    function Game() {
      //实例对象的使用属性，方便调用；
      this.food = new Food();
      this.snake = new Snake();
      this.map = map;
      that = this;
    }

    //游戏开始初始化的状态
    Game.prototype.start = function() {
      //1. 添加蛇和食物到地图上
      this.food.render(this.map);
      this.food.render(this.map);
      this.food.render(this.map);
      this.snake.render(this.map);
      //2. 开始游戏的逻辑
      //2.1 蛇自动运动
      runSnake();
      //2.2 蛇通过不同方向键盘控制
      bindKey();
      //2.3 蛇头与食物是否碰撞

      //2.4 蛇是否超出地图范围，结束游戏
      // this.snake.move();
      // //必须渲染在父级；
      // this.snake.render(this.map);
    }
    //键盘的方向控制
    function bindKey() {
      //键盘按下事件；
      document.onkeydown = function(e) {
        switch (e.keyCode) {
          case 37:
            that.snake.direction = 'left';
            break;
          case 38:
            that.snake.direction = 'top';
            break;
          case 39:
            that.snake.direction = 'right';
            break;
          case 40:
            that.snake.direction = 'bottom';
            break;
        }
      };
    }
    //2.4
    function runSnake() {
      var timer = setInterval(function() {
        that.snake.move();
        that.snake.remove(that.map);
        that.snake.render(that.map);
        //2.3 判断是否蛇吃到食物，蛇身增加一节；
        //2.4 是否超出地图边缘的计算
        var maxX = that.map.offsetWidth / that.snake.width;
        var maxY = that.map.offsetHeight / that.snake.height;
        //当前蛇头的位置
        var headX = that.snake.body[0].x;
        var headY = that.snake.body[0].y;
        //蛇头具体的位置；
        var hX = headX * that.snake.width;
        var hY = headY * that.snake.height;
        //食物的指定和增加；
        for (var i = 0; i < that.food.elements.length; i++) {
          if (that.food.elements[i].offsetLeft === hX && that.food.elements[i].offsetTop === hY) {
            //是否吃到食物，增加或者删除食物的数据
            that.food.remove(that.map, i);
            that.food.render(that.map);
            //蛇身的增加
            var last = that.snake.body[this.snake.length - 1];
            that.snake.body.push({
              x: last.x,
              y: last.y,
              color: last.color
            });
          }
        }
        //蛇头是否超出活动范围
        if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
          clearInterval(timer);
          alert('game over');
        }
      }, 200);
    }
    window.Game = Game;
  }
)();

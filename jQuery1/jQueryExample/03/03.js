    // This is the custom JavaScript file referenced by index.html. You will notice
    // that this file is currently empty. By adding code to this empty file and
    // then viewing index.html in a browser, you can experiment with the example
    // page or follow along with the examples in the book.
    //
    // See README.txt for more information.
   // $(function () {
   //   $('#switcher-large').on('click',function () {
   //       $('body').addClass('large');
   //       $('body').removeClass('narrow');
   //   })
   //     $('#switcher-narrow').on('click',function () {
   //         $('body').addClass('narrow');
   //         $('body').removeClass('large');
   //     })
   //     $('#switcher-default').on('click',function () {
   //         $('body').removeClass('narrow');
   //         $('body').removeClass('large');
   //     })
   // })

    // $(function () {
    //     $('#switcher-large')
    //         .on('click',function () {
    //         $('body').addClass('large');
    //         $('body').removeClass('narrow');
    //             $('#switcher button').removeClass('selected');
    //             $(this).addClass('selected')
    //     })
    //     $('#switcher-narrow').on('click',function () {
    //         $('body').addClass('narrow');
    //         $('body').removeClass('large');
    //         $('#switcher button').removeClass('selected');
    //         $(this).addClass('selected')
    //     })
    //     $('#switcher-default').
    //         addClass('selected').on('click',function () {
    //         $('body').removeClass('narrow');
    //         $('body').removeClass('large');
    //         $('#switcher button').removeClass('selected');
    //         $(this).addClass('selected')
    //     })
    // })

    //终极写法
    // $(document).ready(function () {
    //     // $('#switcher-default').addClass('selected');
    //     // $('#switcher button').on('click',function () {
    //     //     var bodyClass=this.id.split('-')[1];
    //     //     $('body').removeClass().addClass(bodyClass);
    //     //     $('#switcher button').removeClass();
    //     //     $(this).addClass('selected');
    //     // })
    //     // $('#switcher h3').click(function () {
    //     //     $('#switcher button').toggleClass('hidden')
    //     // })
    //     $('#switcher h3').hover(function () {
    //         $(this).addClass('hover')
    //     },function () {
    //         $(this).removeClass('hover')
    //     })
    //
    // })
    //这是点击空白区域按钮折叠
    // $(document).ready(function () {
    //     $('#switcher').click(function (event) {
    //         if(event.target==this){
    //             $('#switcher button').toggleClass('hidden')
    //         }
    //
    //
    //     })
    // })

    //有一种写法是对上述两种不同操作反应的综合写法
    // $(document).ready(function () {
    //     $('#switcher').click(function (event) {
    //
    //             $('#switcher button').toggleClass('hidden')
    //     })
    // })
//下面程序有两种写法，第一种是 采用jQuery内部遍历的方法
//     $(document).ready(function () {
//         $('#switcher-default').addClass('selected');
//         $('#switcher button').on('click',function () {
//             var bodyClass=this.id.split('-')[1];
//             $('body').removeClass().addClass(bodyClass);
//             $('#switcher button').removeClass();
//             $(this).addClass('selected');
//             event.stopPropagation();
//         })
//     })
    //下面程序有两种写法，第二种采用的是事件委托的方法，事件委托采用的是事件冒泡的策略,通过条件判使通过条件的事件才能冒上来
    // $(document).ready(function () {
    //     $('#switcher-default').addClass('selected');
    //     $('#switcher').on('click',function (event) {
    //         if($(event.target).is('button')){   //条件判断属性是不是button
    //             var bodyClass=event.target.id.split('-')[1];
    //             $('body').removeClass().addClass(bodyClass);
    //             $('#switcher button').removeClass('selected');
    //             $(event.target).addClass('selected');
    //             // event.stopPropagation();
    //         }else {
    //             $('#switcher button').toggleClass('hidden');
    //         }
    //
    //     })
    // })
    //内置事件委托功能
    // $(document).ready(function () {
    //     $('#switcher').on('click','button',function () { //将#switcher下的button绑定click事件
    //         console.log("我是内置事件委托方法.on()")
    //     })
    // })
    //移除事件处理程序
    // $(document).ready(function () {
    //     // $('#switcher-default').addClass('selected');
    //     $('#switcher').on('click.collapse',function (event) {
    //         if(!$(event.target).is('button')){   //条件判断属性是不是button
    //
    //             $('#switcher button').toggleClass('hidden');
    //         }
    //
    //     })
    //     $('#switcher-narrow,#switcher-large').click(function () {
    //         $('#switcher').off('click.collapse')
    //     })
    //
    // })

    //换一种简写的方式
    // $(document).ready(function () {
    //    var switcherToggle=function (event) {
    //        if(!$(event.target).is('button')){   //条件判断属性是不是button
    //            $('#switcher button').toggleClass('hidden');
    //        }
    //    }
    //     $('#switcher').on('click.collapse',switcherToggle);
    //     $('#switcher-narrow,#switcher-large').click(function () {
    //         $('#switcher').off('click.collapse')
    //     })
    //     $('#switcher-default').click(function () {
    //         $('#switcher').on('click.collapse',switcherToggle)
    //     })
    // })

    //上述代码有一个bug，就是当switch-default点击次数为偶数次的时候，那么将会失效，所以需要一种解决方案，用户在单击任何按钮时解除绑定，在确定单击按钮
    //是在switch-default 这个id下的重新绑定
    // $(document).ready(function () {
    //     //    var switcherToggle=function (event) {
    //     //        if(!$(event.target).is('button')){   //条件判断属性是不是button
    //     //            $('#switcher button').toggleClass('hidden');
    //     //        }
    //     //    }
    //     //     $('#switcher').on('click.collapse',switcherToggle);
    //     //     $('#switcher button').click(function () {
    //     //         $('#switcher').off('click.collapse');
    //     //         if(this.id==='switcher-default'){
    //     //        $('#switcher').on('click.collapse',switcherToggle);
    //     //     }
    //     //
    //     // })
    //     // })
    //第一题 在Charls Dickens被单击时，添加selected样式
    $(document).ready(function () {
        $('.author').click(function () {
           $(this).addClass('selected')
            console.log($('#header div'))
        })
    })
//第二题 双击标题（<h3 class="chapter-title">）时，切换文本的可见性
    $(document).ready(function () {
        $('.chapter-title').on('dblclick',function () {
            $(this).nextAll().toggleClass('hidden')

        })
    })
    //第三题 向右的方向键码是39 按下的时候切换到下一个body类
//     $(document).ready(function () {
//             var setBodyClass = function(className) {
//                 $('body').removeClass().addClass(className);
//                 $('#switcher button').removeClass('selected');
//                 $('#switcher-' + className).addClass('selected');
//             };
//         $('#switcher-default').addClass('selected');
//         var bodyClass=['default','narrow','large'];
//         var count=0;
//         $(document).keyup(function (event) {
//             if (event.keyCode===39){
//                 var num=(count+1)%3
//                 count++;
//                 setBodyClass(bodyClass[num]);
//             }
//         })
//
// })

    $(document).ready(function () {
        var setBodyClass=function(className){
            $("body").removeClass().addClass(className);
            $(".switcher button").removeClass("selected");
            $("#switcher-"+className).addClass("selected");
        }
        $("#switcher-default").addClass("selected");//页面初始时默认为选中状态
        $(document).keyup(function (event) {
            var num=$(".switcher button").filter(".selected").index()-1;
            console.log("num1是"+num)
            if(event.which==39) num=(num+1)%3;
            else if(event.which==37) num=(num-1)%3;
            else return false;
            var btnClassname=$(".switcher button").eq(num).attr("id").split("-")[1];//.eq(index)  index整数，指示元素的位置（最小为 0）。
                                                                                    // 如果是负数，则从集合中的最后一个元素往回计数
            setBodyClass(btnClassname);
            console.log($(".switcher button").filter(".selected").index())
            console.log("num是"+num)
            console.log("(num-1)%3;是"+(num-1)%3)
            console.log($(".switcher button").eq(num))
        })



    })

    //4、挑战：使用console.log()函数记录在段落中移动的鼠标的坐标位置。
    $(function(){
        $(document).mouseover(function(event) {
            console.log(event.pageX);
            console.log(event.pageY);
        })
    })


    // 5、挑战：使用.mousedown()和.mouseup()跟踪页面中的鼠标事件。如果鼠标按键在按下它的地方被释放，
    // 则为所有段落添加hidden类。如果是在按下它的地方之下被释放的，删除所有段落的hidden类。(这

    // $(function () {
    //   var x_down,y_down,x_up,y_up;
    //   $(document).mousedown(function (event) {
    //       x_down=event.clientX;
    //       y_down=event.clientY;
    //   })
    //
    //     $(document).mouseup(function () {
    //         x_up=event.clientX;
    //         y_up=event.clientY;
    //
    //         if (x_up===x_down|| y_up===y_down){
    //             $('p').addClass('hidden')
    //         }else{
    //             $('p').removeClass('hidden')
    //         }
    //     })
    // })




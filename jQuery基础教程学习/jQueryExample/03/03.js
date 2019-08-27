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
    $(document).ready(function () {
       var switcherToggle=function (event) {
           if(!$(event.target).is('button')){   //条件判断属性是不是button
               $('#switcher button').toggleClass('hidden');
           }
       }
        $('#switcher').on('click.collapse',switcherToggle);
        $('#switcher button').click(function () {
            $('#switcher').off('click.collapse');
            if(this.id==='switcher-default'){
           $('#switcher').on('click.collapse',switcherToggle);
        }

    })
    })
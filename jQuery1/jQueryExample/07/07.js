    // This is the custom JavaScript file referenced by index.html. You will notice
    // that this file is currently empty. By adding code to this empty file and
    // then viewing index.html in a browser, you can experiment with the example
    // page or follow along with the examples in the book.
    //
    // See README.txt for more information.
   //7-2带参数的键值对 cycle是插件
   //  $(function () {
   //      $('#books').cycle({
   //          timeout:2000,
   //          speed:200,
   //          paused:true
   //      });
   //  })
    //7-3带参数的键值对 cycle是插件 修改默认值
    $.fn.cycle.defaults.timeout=10000;
    $.fn.cycle.defaults.random=false;
    $(function () {
        $('#books').cycle({
            timeout:2000,
            speed:200,
            pause:true
        });
    })
    //7-3添加两个按键 可以暂停 可以开始
    // $(function () {
    //     var $books=$('#books');
    //     var control=$('<div id="books_control"></div>')
    //     control.insertAfter($books);
    //     $('<button>paused</button>').click(function (event) {
    //         event.preventDefault();
    //         $('#books').cycle('pause')
    //     }).appendTo(control);
    //     $('<button>resume</button>').click(function (event) {
    //         event.preventDefault();
    //
    //         $('#books').cycle('resume');
    //
    //     }).appendTo(control)
    // })
    //7-7添加两个按键 可以暂停 可以开始
    $(function () {
        var $books=$('#books');
        var control=$('<div id="books_control"></div>')
        control.insertAfter($books);
        $('<button>paused</button>').click(function (event) {
            event.preventDefault();
            $('#books').cycle('pause');
            $.cookie('cyclePaused','y')
        }).appendTo(control).button({
            icons:{
                primary:'ui-icon-pause'
            }
        });
        // $('<button>resume</button>').click(function (event) {
        //     event.preventDefault();
        //
        //     $('#books').cycle('resume');
        //     $.cookie('cyclePaused',null)
        // }).appendTo(control).button({
        //     icons:{
        //         primary:'ui-icon-play'
        //     }
        // });



//在鼠标放在title的class属性的元素上 实现背景颜色的跟字体的切换
        $books.hover(function () {
            $books.find('.title').animate({
                backgroundColor:'#eee',
                color:'#000'
            },1000);
        },function () {
            $books.find('.title').animate({
                backgroundColor:'#000',
                color:'#fff'
            },1000);
        });



        //7-11高级缓动函数 点击button事件
        $('<button>resume</button>').click(function (event) {
            event.preventDefault();
             var $paused=$('ul:paused');
            if ($paused.length){
                 $paused.cycle('resume')
            }else{
            $(this).effect('shake',{
                distance:1
            })
            }

        }).appendTo(control).button({
            icons:{
                        primary:'ui-icon-play'
                    }
        })

        $('button').button();//修饰button的函数

        $('<div id="slider"></div>').slider({
            min:0,
            max:$('#books li').length-1,
            slide:function (event,ui) {
               $books.cycle(ui.value)
           },
            // animate:'slow'
            animate:true
        }).appendTo(control);

        // $('#books').cycle({
        //         timeout:2000,
        //         speed:200,
        //         before: function () {
        //             $('#slider').slide('value',$('#books li').index(this))
        // }})



    })


    $(function () {
        $('#books').cycle({
            timeout:2000,
            speed:200,
            before: function () {
                $('#slider').slider('value',$('#books li').index(this))
            }})
    })
//7-9基于类的动画 toggleclass

    $(function () {
        var $books=$('#books');
       $books.find('.title').click(function () {
            $(this).resizable({
                // handle:'s'
                grid: [ 10, 10 ]
            });
        })
    })
    //部件
    //幻灯片变化时候进行slide变换





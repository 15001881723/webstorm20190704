    //第一题将动画的切换周期延长到1.5秒 下一张幻灯片淡入之前，前一张幻灯片淡出 采用cycle文档
    $(function () {
        var $books=$('#books');
        var control=$('<div id="books_control"></div>')
        control.insertAfter($books);
        var  $books=$('#books');
        $($books).cycle({
            timeout:2000,
            // speed:1500,
            fadeOut:1500,
            autostop: true, // 若为true则播放完'autostopCount'个幻灯片时自动停止
        })
        $('<button>paused</button>').click(function (event) {
            event.preventDefault();
            $('#books').cycle('pause');
            $.cookie('cyclePaused','y')
        }).appendTo(control).button({
            icons:{
                primary:'ui-icon-pause'
            }
        });

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
            animate:'slow'
        }).appendTo(control);

    })




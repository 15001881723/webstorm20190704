    // This is the custom JavaScript file referenced by index.html. You will notice
    // that this file is currently empty. By adding code to this empty file and
    // then viewing index.html in a browser, you can experiment with the example
    // page or follow along with the examples in the book.
    //
    // See README.txt for more information.
//代码5-4/5-5对id 以及title进行值回调
    $(document).ready(function () {
        $('div.chapter a[href*=wikipedia]').attr({
            rel:'eternal'
            ,title:'Learn a lot of knowloge'
            ,id:function (index,oldValue) {
                return 'baidu-'+index;
            }
        })

    })
//在内个链接上有注释显示出来
    $(document).ready(function () {
        $('div.chapter a[href*=wikipedia]').attr({
            rel:'eternal'
            ,title:function () {
              return  'Learn a lot of knowloge'+$(this).text()+'at baidu';
            }
            ,id:function (index,oldValue) {
                return 'baidu-'+index;
            }
        })

    })
    //插入元素 代码5-8 主要讲解。insertBefore()在现有元素外部，之前添加内容
    //.prependTo()在现有元素内部，之前添加内容
    //.appendTo()  内部 之后     insertAfter() 外部 之后
    //需求：在每段的末尾添加一个回到顶部的提示按钮 在顶部设置锚点
    $(function () {
        $('<a type="button" href="#top"> back to top</a>').insertAfter( $('.chapter p'))
        $('<a id="top">  </a>').insertBefore($('body'))
    })

        //例 5-9 将每个段落的footnote找出来添加到文章footer与chapter之间 使用的技术是元素的移动 insertBefore()在现有元素外部，之前添加内容
    /**
     * 第一种写法
     * $(function () {
        $('span.footnote').insertBefore($('#footer')).wrapAll('<ol></ol>>').wrap('<li></li>')
    })
      */
    /**
     * 第二种写法是采用.each（）遍历写法
     *
     */
    // $(function () {
    //     var $note=$('<ol></ol>').insertBefore('#footer');
    //     $('span.footnote').each(function (index) {
    //         $(this).appendTo($note).wrap('<li></li>')
    //     })
    // })
    //例 5-9 将每个段落的footnote找出来添加到文章footer与chapter之间 使用的技术是元素的移动 insertBefore()在现有元素外部，之前添加内容
    //并将sup插入到正文中
    // $(function () {
    //     var $note=$('<ol></ol>').insertBefore('#footer');
    //     $('span.footnote').each(function (index) {
    //         $('<sup>'+(index+1)+'</sup>').insertBefore(this);
    //         $(this).appendTo($note).wrap('<li></li>');
    //     })
    // })
    //例 5-16 将每个段落的footnote找出来添加到文章footer与chapter之间 使用的技术是元素的移动 insertBefore()在现有元素外部，之前添加内容
    //并将sup插入到正文中
    //对footnote与下面的内容进行连接 具体需求为 点击任何一方 都会指向另外一方
    // $(function () {
    //     var $note=$('<ol></ol>').insertBefore('#footer');
    //     $('span.footnote').each(function (index) {
    //       //反向插入用before  $('<sup>'+(index+1)+'</sup>').insertBefore(this);
    //         $(this).before(['<sup>',(index+1),'</sup>'].join(''))
    //                .appendTo($note)
    //                .wrap('<li></li>');
    //     })
    // })
    /*
     先添加在脚注上a链接指向 下面的标注
     */
//     $(function () {
    // //         var $note=$('<ol></ol>').insertBefore('#footer');
    // //         $('span.footnote').each(function (index) {
    // //             //反向插入用before  $('<sup>'+(index+1)+'</sup>').insertBefore(this);
    // //             $(this).before([
    // // '<a href="#footer-', index+1, '" id="context"', 'class="context">' ,'<sup>' ,(index+1) , '</sup></a>'
    // //             ].join(''))
    // //                 .appendTo($note)
    // //                 .append([
    // //                     '&nbsp;(<a href="#context-',
    // //                     index+1,
    // //                     '">context</a>)'//把context这个字符串反向添加到下面的li中 并为该字符串添加a链接
    // //                 ].join(''))
    // //                 .wrap('<li id="footer-'+(index+1)+'"></li>');
    // //         })
    // //     })
    //例题5-18 对带有类pulled-quote 的p进行复制 然后添加类pulled 调整位置 做出突出引用的效果
    // $(function () {
    //     $('.pull-quote').each(function () {
    //         var span_parent=$(this).parent('p');//指定找到p的父级元素
    //         span_parent.css({position:'relative'});
    //         var copy=$(this).clone();
    //         copy.addClass('pulled').prependTo(span_parent)//元素.prependTo(位置) 将元素添加到位置
    //
    //     })
    // })
    //例题5-20 对带有类pulled-quote 的p进行复制 然后添加类pulled 调整位置 做出突出引用的效果
    //新增需求 将突出显示的那个框的加粗 标记等特性去掉 使用的是.text()方法 该方法与.html()类似但是
    //html（）不加内容是取得是元素本身的内容 而text获取是纯文本 在添加方法也是添加纯文本
    $(function () {
        $('.pull-quote').each(function () {
            var span_parent=$(this).parent('p');//指定找到p的父级元素
            span_parent.css({position:'relative'});
            var copy=$(this).clone();
            copy.addClass('pulled')
                .find('span.drop')
                .html('&hellip;')
                .end()
                .text(copy.text())
                .prependTo(span_parent)//元素.prependTo(位置) 将元素添加到位置

        })
    })
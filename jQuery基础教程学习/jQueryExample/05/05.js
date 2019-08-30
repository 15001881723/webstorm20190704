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
    $(function () {
        var $note=$('<ol></ol>').insertBefore('#footer');
        $('span.footnote').each(function (index) {
            $('<sup>'+(index+1)+'</sup>').insertBefore(this);
            $(this).appendTo($note).wrap('<li></li>');
        })
    })
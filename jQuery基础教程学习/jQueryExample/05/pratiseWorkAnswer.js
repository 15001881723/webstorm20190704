    /**
     * Created by Administrator on 2019/8/29.
     */

   //第一题  在第四个p之后插入back to top 采用each 与 insertAfter函数
    $(function () {
     $('div.chapter p').each(function (index) {

         if (index>2){
      $('<a type="button" href="#top"> back to top</a>')
       .insertAfter( $('.chapter p').eq(index))
       $('<a id="top"></a>');
         }
     })

    })
    //第二题 单击back to top 时候为每个链接 添加一个新的段落 包含you were here字样
    // 但是确保链接任然有效
    $(function () {
     $('.chapter a').click(function () {
         console.log($('.chapter a'))
         $('<p>You were here</p>')
             .insertAfter($('.chapter a:contains(\'back to top\')'));
         $('<a id="top"></a>');
     })
    })




    //第三题 单击作者的名字的时候 把文本改为粗体 通过添加标签的方式 不是操作类或者css 属性
    // $(function () {
    //     $('div#f-author').click(function () {
    //         $('div#f-author').wrap('<b></b>')
    //     })
    // })

    //第四题 单击作者的名字的时候 把文本改为粗体 通过添加标签的方式 不是操作类或者css 属性
    //在黑体加粗与正常字体之间进行切换
    $(function () {
        $('div#f-author').click(function () {
            var content=$(this).html();
            if (content=='by Edwin A. Abbott'){
                $(this).html('<b>by Edwin A. Abbott</b>')
            } else{
                $(this).html('by Edwin A. Abbott')
            }
        })
    })
    //第五题 为每一个段落添加一个inhabitants类 不能使用addClass方法

    // $(function () {
    //     $('div.chapter p').each(function () {
    //      var $class=$(this).attr('class')
    //       if($class==null){
    //           $(this).attr('class','inhabitants');
    //       }else{
    //           $(this).attr('class',$class+'inhabitants');
    //       }
    //     })
    //
    // })

    //第五题第二种方法
    // $(document).ready(function () {
    //     $('div.chapter p').attr({
    //         class:'+= inhabitants'
    //     });
    //  })


    $(document).ready(function(){
        $('div.chapter p').attr({
            class:'+= inhabitants'
        });
    })
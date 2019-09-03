    // This is the custom JavaScript file referenced by index.html. You will notice
    // that this file is currently empty. By adding code to this empty file and
    // then viewing index.html in a browser, you can experiment with the example
    // page or follow along with the examples in the book.
    //
    // See README.txt for more information.
    
// //例6-2 将html片段a.html添加到主页面中
    $(function () {
        $('#letter-a a').click(function (event) {
            event.preventDefault();
            $('#dictionary').load('a.html');
            alert('loaded!!');
        })
    })
//
//     //例6-6 通过$.getJSON获取b.json，然后当这个json加载完成以后 利用回调函数
    $(function () {
        $('#letter-b a').click(function (event) {
            event.preventDefault();
            $.getJSON('b.json',function (data) {
                var html='';
                $.each(data,function (entryIndex,entry) {
                    html+='<div class="entry">'
                    html+='<h3 class="term">'+entry.term+'</h3>'
                    html+='<div class="part">'+entry.part+'</div>'
                    html+='<div class="definition">';
                    html+=entry.definition;
                    if (entry.quote){
                        html+='<div class=quote>';
                        $.each( entry.quote,function (lineIndex,line) {
                            html+='<div class="quote-line">'+line+'</div>';
                        });
                        if(entry.author){
                            html+='<div class="quote-author">'+entry.author+'</div>'
                        }
                        html+='</div>';
                    }
                    html+='</div>';
                    html+='</div>';
                });
                $('#dictionary').html(html)
            })
        })
    })
//
//     //例6-7 通过$.getScript获取c.js，然后当这个js加载完成以后 可以自动执行
    $(function () {
        $('#letter-c a').click(function (event) {
            event.preventDefault();
            $.getScript('c.js');
        })

    })
//     //例6-9 通过$.getScript获取d.xml文件，然后加载完成以后 跟加载html片段那时候一样
//
    $(function () {
        $('#letter-d a').click(function (event) {
            event.preventDefault();
            $.get('d.xml',function (data) {
                $('#dictionary').empty();
                // var html='';
                // $.each(data,function (entryIndex,entry) {
                $(data).find('entry').each(function () {
                //     $(data).find('entry:has(quote[author])').each(function () {
                    var $entry=$(this);

                     var html='<div class="entry">'
                    html+='<h3 class="term">'+$entry.attr('term')+'</h3>'
                    html+='<div class="part">'+$entry.attr('part')+'</div>'
                    html+='<div class="definition">';
                    html+=$entry.find('definition').text()
                     var $quote=$entry.find('quote');


                    if ($quote.length){
                     console.log("$quote.length    "+$quote.length)
                        console.log("$quote    "+$quote)

                        html+='<div class=quote>';
                       $quote.find('line').each(function () {
                           html+='<div class="quote-line">'+$(this).text()+'</div>';
                       })
                        $.each( entry.quote,function (lineIndex,line) {
                            html+='<div class="quote-line">'+line+'</div>';
                        });



                        if($quote.attr('author')){
                            html+='<div class="quote-author">'+$quote.attr('author')+'</div>'
                        }
                        html+='</div>';
                    }
                    html+='</div>';
                    html+='</div>';
                    $('#dictionary').append($(html))
                });

            })
        })
    })
    //6-10模拟向服务器请求 get 模拟服务器接口
    // 接口：在a链接绑定的事件上 这个 var requestData={ term: $(this).text()};
    //在li标签上取得term
    $(function () {
        $('#letter-e a').click(function (event) {
            event.preventDefault();
            var requestData={term: $(this).text()}
            $.get('e.php',requestData,function (data) {
                $('#dictionary').html(data);
            })
            // $('#dictionary').load('e.php',requestData);
        })
    })
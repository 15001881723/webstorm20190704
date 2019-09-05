    /**
     * Created by Administrator on 2019/9/5.
     */
    //第一题 将exercise的body提取到页面的内容区域#dictionary这个div中去 采用的是加载部分html的手法 load()中选择符表达式
// $(function () {
//     $('#letter-a').on('click',function (event) {
//         event.preventDefault();
//         alert('1212');
//
//         $('#dictionary').load('exercises-content.html#bodyb');
//     })
// })
    //第二题  不要一次就显示整个文档，请为左侧的字母列表创建“提示条”，当用户鼠标放到字母上时，从exercises-content.html中加载与该字母有关的内容
    // $(function () {
    //     $('.letter').mouseover(function (event) {
    //         event.preventDefault();
    //         var $word=$(this).text().trim().charAt(0).toLowerCase();  //trim()修剪字符两端的空白字符串 charAt(0)是从字符串的第一位开始取 toLowerCase()将取到的字母变为小写
    //         $('#dictionary').load('exercises-content.html #letter-'+$word)
    //     })
    // })

    //第3题 为页面加载添加错误处理功能，在页面的内容区显示错误消息。修改脚本，请求does-not-exsit.html而不是exerises-content.html，以测试错误处理功能。
    //采用是代码6-17

    // $(function () {
    //     $('.letter').mouseover(function (event) {
    //         event.preventDefault();
    //         var $word=$(this).text().trim().charAt(0).toLowerCase();  //trim()修剪字符两端的空白字符串 charAt(0)是从字符串的第一位开始取 toLowerCase()将取到的字母变为小写
    //         // $('#dictionary').load('error.html #letter-'+$word).fail(function (jqXHR) {
    //         //     $('#dictionary').html('an error occur:'+jqXHR.status).append(jqXHR.responseText);
    //         // })
    //         $('#dictionary').load('does-not-exist.html #letter-'+$word,function (response,status,jqXHR) {
    //             console.log(jqXHR.status);
    //             if (jqXHR.status=='404'){
    //                 // $('#dictionary').html('an error occur:'+jqXHR.status).append(jqXHR.responseText);
    //                 $('#dictionary').html('an error occur:'+jqXHR.status+'ksdskdjk'+jqXHR.statusText)
    //
    //             }
    //
    //         })
    //     })
    // })
    // 4、挑战：页面加载后，向GitHub发送一个JSONP请求，取得某个用户代码库的列表。把每个代码库的名称和URL插入到页面的内容区。
    // 取得JQuery项目代码库的URL是：https://api.github.com/users/jquery/repos

        $(document).ready(function () {
        $.getJSON('https://api.github.com/users/jquery/repos',function(data){
            var html='';
            $.each(data,function(jsonindex,json){
                html+="<div>"+(jsonindex+1)+"<br>";
                html+="name: "+json.name+"<br>";
                html+="url: "+json.html_url+"<br>";
                html+="</div>"
            })
            $("#dictionary").html(html);
        })
    })


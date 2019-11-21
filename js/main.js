// jQuery
// 尋找指定元素
// 點下(方式) 
// $(".btn-pd").click(function(){
//     // 測試:alert("點下");
//     // 消失的區塊.移除("出現").加入("消失")
//     $(".cd").removeClass("appear").addClass("disappear");
//     $(".web").removeClass("appear").addClass("disappear")
//     // 出現的區塊.移除("消失").加入("出現")
//     $(".pd").removeClass("disappear").addClass("appear");
// });
// $(".btn-cd").click(function(){
//     // 測試:alert("點下");
//     // 消失的區塊.移除("出現").加入("消失")
//     $(".pd").removeClass("appear").addClass("disappear");
//     $(".web").removeClass("appear").addClass("disappear")
//     // 出現的區塊.移除("消失").加入("出現")
//     $(".cd").removeClass("disappear").addClass("appear");
// });
// $(".btn-web").click(function(){
//     // 測試:alert("點下");
//     // 消失的區塊.移除("出現").加入("消失")
//     $(".cd").removeClass("appear").addClass("disappear");
//     $(".pd").removeClass("appear").addClass("disappear")
//     // 出現的區塊.移除("消失").加入("出現")
//     $(".web").removeClass("disappear").addClass("appear");
// });

// 上面簡化下來
// 自定義函式 不會執行,需要呼叫
function filter(nameBtn, nameClass){
    $(nameBtn).click(function(){
        // 測試:alert("點下");
        // 消失的區塊.移除("出現").加入("消失")
        $(".work-box").removeClass("appear").addClass("disappear");
             // 出現的區塊.移除("消失").加入("出現")
        $(nameClass).removeClass("disappear").addClass("appear");
    });
}
filter(".btn-pd",".pd");
filter(".btn-cd",".cd");
filter(".btn-web",".web");
filter(".btn-all",".work-box");

// info 展開解釋
// jqclick
$(".experience h2").click(function () { 
    $(this).next("p").slideToggle();
});

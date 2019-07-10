function hide(e,reflow) {
    if(reflow){
        e.style.display="none";//位置都没有了
    }else{
        e.style.visibility="hidden";//位置依然在
    }
}
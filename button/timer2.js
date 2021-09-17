//動態時間顯示
//得到時間並寫入div
function mygetDate() {
    //得到當下時間
    var mydate = new Date();
    //格式化為本地時間
    var mydate1 = mydate.toLocaleString();
    //得到div
    var mydiv1 = document.getElementById("timer2");
    //將時間寫入div
    mydiv1.innerHTML = mydate1;

    // var myhour =mydate.getHours();
    // var mymin =mydate.getMinutes();
    // var mysec =mydate.getSeconds();
    // var mydiv1 = document.getElementById("timer2");
    // var mydiv2 = document.getElementById("timer3");
    // var mydiv3 = document.getElementById("timer4");
    // mydiv1.innerHTML = myhour;
    // mydiv2.innerHTML = mymin;
    // mydiv3.innerHTML = mysec;
    


}
//使用定時器每秒向div寫入當前時間
setInterval("mygetDate()", 1000);

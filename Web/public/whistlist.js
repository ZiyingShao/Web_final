window.onload = function () {
    var olink1 = document.querySelector(".star-1");
    var cross1 = document.querySelector(".cross-1");
    var count1 = 0;
    var olink2 = document.querySelector(".star-2");
    var cross2 = document.querySelector(".cross-2");
    var count2 = 0;
    var olink3 = document.querySelector(".star-3");
    var cross3 = document.querySelector(".cross-3");
    var count3 = 0;
    var olink4 = document.querySelector(".star-4");
    var cross4 = document.querySelector(".cross-4");
    var count4 = 0;
    var olink5 = document.querySelector(".star-5");
    var cross5 = document.querySelector(".cross-5");
    var count5 = 0;
    var olink6 = document.querySelector(".star-6");
    var cross6 = document.querySelector(".cross-6");
    var count6 = 0;
    var olink7 = document.querySelector(".star-7");
    var cross7 = document.querySelector(".cross-7");
    var count7 = 0;
    var olink8= document.querySelector(".star-8");
    var cross8 = document.querySelector(".cross-8");
    var count8 = 0;
    var olink9 = document.querySelector(".star-9");
    var cross9 = document.querySelector(".cross-9");
    var count9 = 0;
    var olink10 = document.querySelector(".star-9");
    var cross10= document.querySelector(".cross-9");
    var count10= 0;
    var olink11 = document.querySelector(".star-9");
    var cross11= document.querySelector(".cross-9");
    var count11= 0;
    var olink12 = document.querySelector(".star-9");
    var cross12= document.querySelector(".cross-9");
    var count12 = 0;
    var olink13= document.querySelector(".star-9");
    var cross13= document.querySelector(".cross-9");
    var count13 = 0;
    var olink14 = document.querySelector(".star-9");
    var cross14= document.querySelector(".cross-9");
    var count14= 0;
    var olink15 = document.querySelector(".star-9");
    var cross15= document.querySelector(".cross-9");
    var count15= 0;
    var olink16 = document.querySelector(".star-9");
    var cross16= document.querySelector(".cross-9");
    var count16 = 0;
    var olink17 = document.querySelector(".star-9");
    var cross17 = document.querySelector(".cross-9");
    var count17 = 0;
    var olink18 = document.querySelector(".star-9");
    var cross18= document.querySelector(".cross-9");
    var count18 = 0;
    olink1.onclick = function () {
        //zhe ge shi mo ban 
        //html->pug
        //passport
        // yun xing de wen jian jiao app.js
        // node app.js
        //go to localhost 3000
        count1 = count1 + 1;
        if (count1 % 2 == 0) {
            console.log('even!')
            console.log(cross1)
            olink1.style.color = "gray";
            cross1.parentElement.remove();
        } else {
            olink1.style.color = "black";
            console.log('cao!')
            addToCartClicked1(olink1)
        }
    };
    //gai sheng xia de wu ge 
    olink2.onclick = function () {
        count2 = count2 + 1;
        if (count2 % 2 == 0) {
            console.log('even!')
            console.log(cross2)
            olink2.style.color = "gray";
            cross2.parentElement.remove();
        } else {
            olink2.style.color = "black";
            console.log('cao!')
            addToCartClicked2(olink2)
        }
    };
    olink3.onclick = function () {
        count3 = count3 + 1;
        if (count3 % 2 == 0) {
            console.log('even!')
            console.log(cross3)
            olink3.style.color = "gray";
            cross3.parentElement.remove();
        } else {
            olink3.style.color = "black";
            console.log('cao!')
            addToCartClicked3(olink3)
        }
    };
    olink4.onclick = function () {
        count4 = count4 + 1;
        if (count4 % 2 == 0) {
            console.log(cross4)
            olink4.style.color = "gray";
            cross4.parentElement.remove();
        } else {
            olink4.style.color = "black";
            addToCartClicked4(olink4)
        }
    };
    olink5.onclick = function () {
        count5 = count5 + 1;
        if (count5 % 2 == 0) {
            console.log(cross5)
            olink5.style.color = "gray";
            cross5.parentElement.remove();
        } else {
            olink5.style.color = "black";
            addToCartClicked5(olink5)
        }
    };
    olink6.onclick = function () {
        count6 = count6 + 1;
        if (count6 % 2 == 0) {
            console.log(cross6)
            olink6.style.color = "gray";
            cross6.parentElement.remove();
        } else {
            olink6.style.color = "black";
            addToCartClicked6(olink6)
        }
    };
    olink7.onclick = function () {
        count7 = count7 + 1;
        if (count7 % 2 == 0) {
            console.log('even!')
            console.log(cross7)
            olink7.style.color = "gray";
            cross7.parentElement.remove();
        } else {
            olink7.style.color = "black";
            console.log('cao!')
            addToCartClicked7(olink7)
        }
    };
    olink8.onclick = function () {
        count8 = count8 + 1;
        if (count8 % 2 == 0) {
            console.log('even!')
            console.log(cross8)
            olink8.style.color = "gray";
            cross8.parentElement.remove();
        } else {
            olink8.style.color = "black";
            console.log('cao!')
            addToCartClicked7(olink8)
        }
    };
    olink9.onclick = function () {
        count9 = count9 + 1;
        if (count9 % 2 == 0) {
            console.log('even!')
            console.log(cross9)
            olink9.style.color = "gray";
            cross9.parentElement.remove();
        } else {
            olink9.style.color = "black";
            console.log('cao!')
            addToCartClicked9(olink9)
        }
    };
    olink10.onclick = function () {
        //zhe ge shi mo ban 
        //html->pug
        //passport
        // yun xing de wen jian jiao app.js
        // node app.js
        //go to localhost 3000
        count10 = count10 + 1;
        if (count10 % 2 == 0) {
            console.log('even!')
            console.log(cross1)
            olink10.style.color = "gray";
            cross10.parentElement.remove();
        } else {
            olink10.style.color = "black";
            console.log('cao!')
            addToCartClicked10(olink10)
        }
    };
    olink11.onclick = function () {
        count11 = count11 + 1;
        if (count11 % 2 == 0) {
            console.log('even!')
            console.log(cross9)
            olink11.style.color = "gray";
            cross11.parentElement.remove();
        } else {
            olink11.style.color = "black";
            console.log('cao!')
            addToCartClicked11(olink11)
        }
    };
    olink13.onclick = function () {
        count13 = count13 + 1;
        if (count13 % 2 == 0) {
            console.log('even!')
            console.log(cross13)
            olink13.style.color = "gray";
            cross13.parentElement.remove();
        } else {
            olink13.style.color = "black";
            console.log('cao!')
            addToCartClicked13(olink13)
        }
    };
    olink14.onclick = function () {
        count14 = count14 + 1;
        if (count14 % 2 == 0) {
            console.log('even!')
            console.log(cross14)
            olink14.style.color = "gray";
            cross14.parentElement.remove();
        } else {
            olink14.style.color = "black";
            console.log('cao!')
            addToCartClicked14(olink14)
        }
    };
    olink15.onclick = function () {
        count15 = count15 + 1;
        if (count15 % 2 == 0) {
            console.log('even!')
            console.log(cross15)
            olink15.style.color = "gray";
            cross15.parentElement.remove();
        } else {
            olink15.style.color = "black";
            console.log('cao!')
            addToCartClicked9(olink15)
        }
    };
    olink16.onclick = function () {
        count16 = count16 + 1;
        if (count16 % 2 == 0) {
            console.log('even!')
            console.log(cross16)
            olink16.style.color = "gray";
            cross16.parentElement.remove();
        } else {
            olink16.style.color = "black";
            console.log('cao!')
            addToCartClicked16(olink16)
        }
    };
    olink17.onclick = function () {
        count17 = count17 + 1;
        if (count17 % 2 == 0) {
            console.log('even!')
            console.log(cross17)
            olink17.style.color = "gray";
            cross17.parentElement.remove();
        } else {
            olink17.style.color = "black";
            console.log('cao!')
            addToCartClicked17(olink17)
        }
    };
    olink18.onclick = function () {
        count18 = count18 + 1;
        if (count18 % 2 == 0) {
            console.log('even!')
            console.log(cross18)
            olink18.style.color = "gray";
            cross18.parentElement.remove();
        } else {
            olink18.style.color = "black";
            console.log('cao!')
            addToCartClicked9(olink18)
        }
    };
};

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    var removeCartItemButtons1 = document.getElementsByClassName("cross-1");
    for (var i = 0; i < removeCartItemButtons1.length; i++) {
        var button = removeCartItemButtons1[i];
        button.addEventListener("click", removeCartItem);
    }

    var removeCartItemButtons2 = document.getElementsByClassName("cross-2");
    for (var i = 0; i < removeCartItemButtons2.length; i++) {
        var button = removeCartItemButtons2[i];
        button.addEventListener("click", removeCartItem);
    }

    var removeCartItemButtons3 = document.getElementsByClassName("cross-3");
    for (var i = 0; i < removeCartItemButtons3.length; i++) {
        var button = removeCartItemButtons3[i];
        button.addEventListener("click", removeCartItem);
    }

    var removeCartItemButtons4 = document.getElementsByClassName("cross-4");
    for (var i = 0; i < removeCartItemButtons4.length; i++) {
        var button = removeCartItemButtons4[i];
        button.addEventListener("click", removeCartItem);
    }

    var removeCartItemButtons5 = document.getElementsByClassName("cross-5");
    for (var i = 0; i < removeCartItemButtons5.length; i++) {
        var button = removeCartItemButtons5[i];
        button.addEventListener("click", removeCartItem);
    }

    var removeCartItemButtons6 = document.getElementsByClassName("cross-6");
    for (var i = 0; i < removeCartItemButtons6.length; i++) {
        var button = removeCartItemButtons6[i];
        button.addEventListener("click", removeCartItem);
    }

    var removeCartItemButtons7 = document.getElementsByClassName("cross-7");
    for (var i = 0; i < removeCartItemButtons7.length; i++) {
        var button = removeCartItemButtons7[i];
        button.addEventListener("click", removeCartItem);
    }

    var removeCartItemButtons8 = document.getElementsByClassName("cross-8");
    for (var i = 0; i < removeCartItemButtons8.length; i++) {
        var button = removeCartItemButtons8[i];
        button.addEventListener("click", removeCartItem);
    }

    var removeCartItemButtons9 = document.getElementsByClassName("cross-9");
    for (var i = 0; i < removeCartItemButtons9.length; i++) {
        var button = removeCartItemButtons9[i];
        button.addEventListener("click", removeCartItem);
    }

    var removeCartItemButtons10 = document.getElementsByClassName("cross-10");
    for (var i = 0; i < removeCartItemButtons10.length; i++) {
        var button = removeCartItemButtons10[i];
        button.addEventListener("click", removeCartItem);
    }

    var removeCartItemButtons11 = document.getElementsByClassName("cross-11");
    for (var i = 0; i < removeCartItemButtons11.length; i++) {
        var button = removeCartItemButtons11[i];
        button.addEventListener("click", removeCartItem);
    }
    var removeCartItemButtons12 = document.getElementsByClassName("cross-12");
    for (var i = 0; i < removeCartItemButtons12.length; i++) {
        var button = removeCartItemButtons12[i];
        button.addEventListener("click", removeCartItem);
    }
    var removeCartItemButtons13 = document.getElementsByClassName("cross-13");
    for (var i = 0; i < removeCartItemButtons13.length; i++) {
        var button = removeCartItemButtons13[i];
        button.addEventListener("click", removeCartItem);
    }
    var removeCartItemButtons14 = document.getElementsByClassName("cross-14");
    for (var i = 0; i < removeCartItemButtons14.length; i++) {
        var button = removeCartItemButtons14[i];
        button.addEventListener("click", removeCartItem);
    }
    var removeCartItemButtons15 = document.getElementsByClassName("cross-15");
    for (var i = 0; i < removeCartItemButtons15.length; i++) {
        var button = removeCartItemButtons15[i];
        button.addEventListener("click", removeCartItem);
    }
    var removeCartItemButtons16 = document.getElementsByClassName("cross-16");
    for (var i = 0; i < removeCartItemButtons16.length; i++) {
        var button = removeCartItemButtons16[i];
        button.addEventListener("click", removeCartItem);
    }

    // var addToCartButtons1 = document.getElementsByClassName("star-1");
    // for (var i = 0; i < addToCartButtons1.length; i++) {
    //   var count = 0;
    //   var button = addToCartButtons1[i];
    //   button.onclick = function(){
    //     count= count + 1;
    //     if (count % 2 == 0) {
    //       removeCartItemButtons1[0].addEventListener("click",removeCartItem);
    //     } else {
    //       button.addEventListener("click", addToCartClicked1);
    //     }
    //   }
    // }

    // var addToCartButtons2 = document.getElementsByClassName("star-2");
    // for (var i = 0; i < addToCartButtons2.length; i++) {
    //   var button = addToCartButtons2[i];
    //   button.addEventListener("click", addToCartClicked2);
    // }

    // var addToCartButtons3 = document.getElementsByClassName("star-3");
    // for (var i = 0; i < addToCartButtons3.length; i++) {
    //   var button = addToCartButtons3[i];
    //   button.addEventListener("click", addToCartClicked3);
    // }

    // var addToCartButtons4 = document.getElementsByClassName("star-4");
    // for (var i = 0; i < addToCartButtons4.length; i++) {
    //   var button = addToCartButtons4[i];
    //   button.addEventListener("click", addToCartClicked4);
    // }

    // var addToCartButtons5 = document.getElementsByClassName("star-4");
    // for (var i = 0; i < addToCartButtons5.length; i++) {
    //   var button = addToCartButtons5[i];
    //   button.addEventListener("click", addToCartClicked5);
    // }

    // var addToCartButtons6 = document.getElementsByClassName("star-4");
    // for (var i = 0; i < addToCartButtons6.length; i++) {
    //   var button = addToCartButtons6[i];
    //   button.addEventListener("click", addToCartClicked6);
    // }
}

function removeCartItem() {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
}

function addToCartClicked1(button) {
    //zhe li shi home jie mian
    // var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart1(click_btn);
}

function addToCartClicked2(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart2(click_btn);
}

function addToCartClicked3(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart3(click_btn);
}


function addToCartClicked4(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart4(click_btn);
}


function addToCartClicked5(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart5(click_btn);
}


function addToCartClicked6(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart6(click_btn);
}

function addToCartClicked7(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart7(click_btn);
}

function addToCartClicked8(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart8(click_btn);
}

function addToCartClicked9(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart9(click_btn);
}

function addToCartClicked10(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart10(click_btn);
}


function addToCartClicked11(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart11(click_btn);
}

function addToCartClicked12(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart12(click_btn);
}

function addToCartClicked13(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart13(click_btn);
}

function addToCartClicked14(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart14(click_btn);
}

function addToCartClicked15(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart15(click_btn);
}

function addToCartClicked16(button) {
    //zhe li shi home jie mian
    //var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // var title = shopItem.getElementsByClassName("btn btn-default")[0].click;
    var click_btn = shopItem.getElementsByClassName("btn btn-default")[0].innerText
    console.log("click_btn is ${click_btn}");
    addItemToCart16(click_btn);
}
//zhe ge shi mo ban ni yao ba sheng xia de liu ge xie le
function addItemToCart1(click_btn) {
    //zhe li shi xin de jie mian
    var cartRow1 = document.createElement("div");
    cartRow1.classList.add("ez2");
    var cartItems = document.getElementsByClassName("product-col-4 col-md-4")[0];
    var cartItemNames = cartItems.getElementsByClassName('btn btn-default')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == click_btn) {
            alert('This item is already added to the whish list!')
            return
        }
    }
    var cartRow1Contents = `<div class="img img-raised col-md-12">
                             <button class="cross-1">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
                            <img src="assets/img/toro01.png">
                            <div class="row">
                            <button type="button" class="btn btn-default" style="height:35px;width:193px; background-color: pink" v-on:click="win4">${click_btn}</button>
        </div>`;
    cartRow1.innerHTML = cartRow1Contents;
    cartItems.append(cartRow1);
    cartRow1.getElementsByClassName('cross-1')[0].addEventListener('click', removeCartItem)

}

function addItemToCart2(click_btn) {
    //zhe li shi xin de jie mian
    var cartRow2 = document.createElement("div");
    cartRow2.classList.add("ez2");
    var cartItems = document.getElementsByClassName("product-col-4 col-md-4")[0];
    var cartItemNames = cartItems.getElementsByClassName('btn btn-default')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == click_btn) {
            alert('This item is already added to the whish list!')
            return
        }
    }
    var cartRow2Contents = `<div class="img img-raised col-md-12">
                         <button class="cross-2">
                             <i class="fa fa-times" aria-hidden="true"></i>
                         </button>
                        <img src="assets/img/brisnoodles01.jpg">
                        <div class="row">
                        <button type="button" class="btn btn-default" style="height:35px;width:193px; background-color: pink"
                          v-on:click="win5">${click_btn}</button>
        </div>`;
    cartRow2.innerHTML = cartRow2Contents;
    cartItems.append(cartRow2);
    cartRow2.getElementsByClassName('cross-2')[0].addEventListener('click', removeCartItem)

}

function addItemToCart3(click_btn) {
    //zhe li shi xin de jie mian
    var cartRow3 = document.createElement("div");
    cartRow3.classList.add("ez2");
    var cartItems = document.getElementsByClassName("product-col-4 col-md-4")[0];
    var cartItemNames = cartItems.getElementsByClassName('btn btn-default')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == click_btn) {
            alert('This item is already added to the whish list!')
            return
        }
    }
    var cartRow3Contents = `<div class="img img-raised col-md-12">
          <button class="cross-3">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <img src="assets/img/mayflower01.jpg">
          <button type="button" class="btn btn-default" v-on:click="torolink">${click_btn}</button>
        </div>`;
    cartRow3.innerHTML = cartRow3Contents;
    cartItems.append(cartRow3);
    cartRow3.getElementsByClassName('cross-3')[0].addEventListener('click', removeCartItem)

}

function addItemToCart4(click_btn) {
    //zhe li shi xin de jie mian
    var cartRow4 = document.createElement("div");
    cartRow4.classList.add("ez2");
    var cartItems = document.getElementsByClassName("product-col-4 col-md-4")[0];
    var cartItemNames = cartItems.getElementsByClassName('btn btn-default')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == click_btn) {
            alert('This item is already added to the whish list!')
            return
        }
    }
    var cartRow4Contents = `<div class="img img-raised col-md-12">
          <button class="cross-4">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <img src="assets/img/bentoboss01.jpg">
          <button type="button" class="btn btn-default" v-on:click="torolink">${click_btn}</button>
        </div>`;
    cartRow4.innerHTML = cartRow4Contents;
    cartItems.append(cartRow4);
    cartRow4.getElementsByClassName('cross-2')[0].addEventListener('click', removeCartItem)

}

function addItemToCart5(click_btn) {
    //zhe li shi xin de jie mian
    var cartRow5 = document.createElement("div");
    cartRow5.classList.add("ez2");
    var cartItems = document.getElementsByClassName("product-col-4 col-md-4")[0];
    var cartItemNames = cartItems.getElementsByClassName('btn btn-default')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == click_btn) {
            alert('This item is already added to the whish list!')
            return
        }
    }
    var cartRow5Contents = `<div class="img img-raised col-md-12">
          <button class="cross-5">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <img src="assets/img/obento01.jpg">
          <button type="button" class="btn btn-default" v-on:click="torolink">${click_btn}</button>
        </div>`;
    cartRow5.innerHTML = cartRow5Contents;
    cartItems.append(cartRow5);
    cartRow5.getElementsByClassName('cross-5')[0].addEventListener('click', removeCartItem)

}

function addItemToCart6(click_btn) {
    //zhe li shi xin de jie mian
    var cartRow6 = document.createElement("div");
    cartRow6.classList.add("ez2");
    var cartItems = document.getElementsByClassName("product-col-4 col-md-4")[0];
    var cartItemNames = cartItems.getElementsByClassName('btn btn-default')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == click_btn) {
            alert('This item is already added to the whish list!')
            return
        }
    }
    var cartRow6Contents = `<div class="img img-raised col-md-12">
          <button class="cross-6">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <img src="assets/img/noa01.jpg">
          <button type="button" class="btn btn-default" v-on:click="torolink">${click_btn}</button>
        </div>`;
    cartRow6.innerHTML = cartRow6Contents;
    cartItems.append(cartRow6);
    cartRow6.getElementsByClassName('cross-6')[0].addEventListener('click', removeCartItem)

}

function addItemToCart7(click_btn) {
    //zhe li shi xin de jie mian
    var cartRow7 = document.createElement("div");
    cartRow7.classList.add("ez2");
    var cartItems = document.getElementsByClassName("product-col-4 col-md-4")[0];
    var cartItemNames = cartItems.getElementsByClassName('btn btn-default')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == click_btn) {
            alert('This item is already added to the whish list!')
            return
        }
    }
    var cartRow7Contents = `<div class="img img-raised col-md-12">
          <button class="cross-7">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <img src="assets/img/coronation01.jpg">
          <button type="button" class="btn btn-default" v-on:click="torolink">${click_btn}</button>
        </div>`;
    cartRow7.innerHTML = cartRow4Contents;
    cartItems.append(cartRow7);
    cartRow7.getElementsByClassName('cross-7')[0].addEventListener('click', removeCartItem)

}

function addItemToCart8(click_btn) {
    //zhe li shi xin de jie mian
    var cartRow8 = document.createElement("div");
    cartRow8.classList.add("ez2");
    var cartItems = document.getElementsByClassName("product-col-4 col-md-4")[0];
    var cartItemNames = cartItems.getElementsByClassName('btn btn-default')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == click_btn) {
            alert('This item is already added to the whish list!')
            return
        }
    }
    var cartRow8Contents = `<div class="img img-raised col-md-12">
          <button class="cross-4">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <img src="assets/img/Urban_Tandoor01.jpg">
          <button type="button" class="btn btn-default" v-on:click="torolink">${click_btn}</button>
        </div>`;
    cartRow8.innerHTML = cartRow8Contents;
    cartItems.append(cartRow8);
    cartRow8.getElementsByClassName('cross-2')[0].addEventListener('click', removeCartItem)

}

function addItemToCart9(click_btn) {
    //zhe li shi xin de jie mian
    var cartRow9 = document.createElement("div");
    cartRow9.classList.add("ez2");
    var cartItems = document.getElementsByClassName("product-col-4 col-md-4")[0];
    var cartItemNames = cartItems.getElementsByClassName('btn btn-default')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == click_btn) {
            alert('This item is already added to the whish list!')
            return
        }
    }
    var cartRow9Contents = `<div class="img img-raised col-md-12">
          <button class="cross-9">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <img src="assets/img/Raj01.jpg">
          <button type="button" class="btn btn-default" v-on:click="torolink">${click_btn}</button>
        </div>`;
    cartRow9.innerHTML = cartRow9Contents;
    cartItems.append(cartRow9);
    cartRow9.getElementsByClassName('cross-9')[0].addEventListener('click', removeCartItem)

}

function addItemToCart10(click_btn) {
    //zhe li shi xin de jie mian
    var cartRow10 = document.createElement("div");
    cartRow10.classList.add("ez2");
    var cartItems = document.getElementsByClassName("product-col-4 col-md-4")[0];
    var cartItemNames = cartItems.getElementsByClassName('btn btn-default')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == click_btn) {
            alert('This item is already added to the whish list!')
            return
        }
    }
    var cartRow10Contents = `<div class="img img-raised col-md-12">
                             <button class="cross-10">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
                            <img src="assets/img/BoxE01.jpg">
                        <div class="row">
                            <button type="button" class="btn btn-default" style="height:35px;width:193px; background-color: pink" v-on:click="win4">${click_btn}</button>
        </div>`;
    cartRow10.innerHTML = cartRow10Contents;
    cartItems.append(cartRow10);
    cartRow10.getElementsByClassName('cross-10')[0].addEventListener('click', removeCartItem)

}
function addItemToCart11(click_btn) {
    //zhe li shi xin de jie mian
    var cartRow11 = document.createElement("div");
    cartRow11.classList.add("ez2");
    var cartItems = document.getElementsByClassName("product-col-4 col-md-4")[0];
    var cartItemNames = cartItems.getElementsByClassName('btn btn-default')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == click_btn) {
            alert('This item is already added to the whish list!')
            return
        }
    }
    var cartRow11Contents = `<div class="img img-raised col-md-12">
                             <button class="cross-10">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
                           <img src="assets/img/Mugshot_Restaurants03.jpg">
                        <div class="row">
                            <button type="button" class="btn btn-default" style="height:35px;width:193px; background-color: pink" v-on:click="win4">${click_btn}</button>
        </div>`;
    cartRow11.innerHTML = cartRow11Contents;
    cartItems.append(cartRow11);
    cartRow11.getElementsByClassName('cross-11')[0].addEventListener('click', removeCartItem)

}
function addItemToCart12(click_btn) {
    //zhe li shi xin de jie mian
    var cartRow12 = document.createElement("div");
    cartRow12.classList.add("ez2");
    var cartItems = document.getElementsByClassName("product-col-4 col-md-4")[0];
    var cartItemNames = cartItems.getElementsByClassName('btn btn-default')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == click_btn) {
            alert('This item is already added to the whish list!')
            return
        }
    }
    var cartRow12Contents = `<div class="img img-raised col-md-12">
                             <button class="cross-12">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
                            <img src="assets/img/Pasture01.jpg">
                        <div class="row">
                            <button type="button" class="btn btn-default" style="height:35px;width:193px; background-color: pink" v-on:click="win4">${click_btn}</button>
        </div>`;
    cartRow10.innerHTML = cartRow10Contents;
    cartItems.append(cartRow10);
    cartRow10.getElementsByClassName('cross-10')[0].addEventListener('click', removeCartItem)

}

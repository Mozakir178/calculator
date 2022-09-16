var num = document.querySelectorAll("#keyboard>div");
var dis = document.querySelector("#input");

// console.log(dis); 
for (i = 0; i < num.length; i++) {
    num[i].addEventListener("click", cal);

}


function cal() {
    var tar = event.target.innerText;
    var a = dis.innerText;
    var b = a.slice(0, -1);


    switch (tar) {

        case "C":
            dis.innerText = "";
            break;

        case "=":
            if (a[0] == "/" || a[0] == "*") {
                dis.innerText = "Please check the input";
            } else if (dis.innerText != "") {
                dis.innerText = eval(dis.innerText);
            }
            break;
        case "Back":
            dis.innerText = b;


            break;
        default:
            dis.innerText += tar;
    }

}
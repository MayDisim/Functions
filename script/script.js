function longestString() {
    if (document.getElementById("task1").value != "") {
    let txt = document.getElementById("task1");
    let array = txt.value.split(" ");
    alert(returnString(array));
    }
    else alert("Введите данные!");
    function returnString(arg){
        let max = 0;
        let res = "";
        for(let i = 0;i < arg.length; i++){
            if(arg[i].length > max){
            max=arg[i].length;
            res=arg[i];
            }
        }
    return res;
    }
}

function frequentSymbol(){
    if (document.getElementById("task2").value!= ""){
    window.array = document.getElementById("task2").value;
    let amount = 1;
    let t = 0;
    window.item;
    for (let i = 0;i < array.length; i++){
        for (let j=i; j< array.length; j++){
            if(array[i] == array[j])
            t++;
            if (amount<t)
            {
                amount = t;
                item = array[i];
            }
        }
        t=0;
    }

    alert("Самый частый элемент: " + item + "\nЕго количество: " + amount);
   
    }
    else {
        alert("Вы ничего не ввели");
    }
}

function changeSymbol(){
    let symbol = document.getElementById("task3").value;
    if (symbol.length == 1){
    let newArray = "";     
        for (let i = 0; i < array.length; i++){
            if (array[i] == item) { 
                newArray += symbol;
            }
            else {
                newArray += array[i];
            }
        }
        document.querySelector(".popup-text").innerHTML = "<span class=popup-text>"  + "новая строка: </span> "+ newArray;
    }
    else alert("Введите один символ");
}

function isAnagram(){
    let str1 = document.getElementById("task41").value;
    let str2 = document.getElementById("task42").value;
    if (!str1 || str1.length <= 1){
        alert("Вы ввели меньше одного символа в поле для первой строки");
        return false;
    }
    if (!str2 || str2.length <= 1){
        alert("Вы ввели меньше одного символа в поле для второй строки");
        return false;
    }
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");
    if (str1 == str2) {
        document.querySelector(".not_anagram").style.display = "none";
        document.querySelector(".anagram").style.display = "block";
        document.querySelector(".anagram").innerHTML = "Строки являются анаграммами";
    }
    else {
        document.querySelector(".anagram").style.display = "none";
        document.querySelector(".not_anagram").style.display = "block";
        document.querySelector(".not_anagram").innerHTML = "Строки не являются анаграммами";
    }

}




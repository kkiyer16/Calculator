function getPreviousHistory(){
    return document.getElementById("value-history").innerText;
}

function printPreviousHistory(num){
    document.getElementById("value-history").innerText = num;
}

function getCurrentNumber(){
    return document.getElementById("value-output").innerText;
}

function printCurrentNumber(num){
    if(num == ""){
        document.getElementById("value-output").innerText = " ";
    }
    else{
        // document.getElementById("value-output").innerText = getFormattedNumber(num);
        document.getElementById("value-output").innerText = num;
    }
}

function forUsingOperator(num1, opr, num2){

    if(opr == '+'){
        let ans = parseInt(num1) + parseInt(num2);
        return ans;
    }
    else if(opr == '-'){
        let ans = parseInt(num1) - parseInt(num2);
        return ans;
    }
    else if(opr == '*'){
        let ans = parseInt(num1) * parseInt(num2);
        return ans;
    }
    else if(opr == '/'){
        let ans = parseInt(num1) * parseInt(num2);
        return ans;
    }
}

// function getFormattedNumber(num){
// 	if(num=="-"){
// 		return "";
// 	}
// 	var n = Number(num);
// 	var value = n.toLocaleString("en");
// 	return value;
// }

function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

let operator = document.getElementsByClassName("calc-operator");
for(let i=0; i < operator.length ; i++){
    operator[i].addEventListener("click", function(){ 
        if(this.id == 'clear'){
            printCurrentNumber("");
            printPreviousHistory("");
        }
        else if(this.id == 'backspace'){
            let numb = getCurrentNumber().toString();
            if(numb){
                numb = numb.substr(0, numb.length-1);
                printCurrentNumber(numb);
            }
        }
        else if(this.id == '+'){
            let curr_num = getCurrentNumber();
            console.log(curr_num);
            printPreviousHistory(curr_num);
            let prev_his = getPreviousHistory();
            console.log(prev_his);
            let ans = parseInt(curr_num) + parseInt(prev_his);
            console.log('ans'+ans);
            printCurrentNumber(ans);
            printPreviousHistory("");
        }


        else{
            let curr_num = getCurrentNumber();
            let prev_his = getPreviousHistory();

            if(curr_num != ""){
                curr_num = parseInt(curr_num);
                console.log('current '+ curr_num);
                prev_his = prev_his + curr_num;
                console.log('prev '+ prev_his);

                if(this.id == "+"){
                    alert('click')
                    // let temp = 0;
                    // temp = temp + parseInt(prev_his);
                    // printCurrentNumber(temp);
                    // printPreviousHistory("");
                    let ans = parseInt(curr_num) + parseInt(prev_his);
                    printCurrentNumber(ans);
                    printPreviousHistory("");
                }

                else if(this.id=="="){
                    // let result = eval(prev_his);
					// printCurrentNumber(result);
                    // printPreviousHistory("");



                    //for addition
                    if(prev_his.includes('+')){
                        // var splitted_value = prev_his.split('+');
                        // let temp = 0;
                        // for(let i =0; i<splitted_value.length; i++){
                        //     temp = temp + parseInt(splitted_value[i]); 
                        //     printCurrentNumber(temp);
                        //     printPreviousHistory("");
                        // }
                        let temp = forUsingOperator(prev_his, '+', curr_num);
                        printCurrentNumber(temp);
                        printPreviousHistory("");
                    }
                    //for subtraction
                    if(prev_his.includes('-')){
                        var splitted_value = prev_his.split('-');
                        let temp;
                        for(let i =0; i<splitted_value.length; i++){
                            // temp = parseInt(splitted_value[i])-parseInt(curr_num);
                            // let a = temp;
                            // printCurrentNumber(a);
                            // a = a - parseInt(curr_num);
                            let a = sub(splitted_value[parseInt(prev_his)], curr_num);
                            printCurrentNumber(a);
                            printPreviousHistory("");
                            //document.getElementById('-').disabled = true;
                        }
                    }
                    //for multiplication
                    if(prev_his.includes('*')){
                        var splitted_value = prev_his.split('*');
                        let temp = 1;
                        for(let i =0; i<splitted_value.length; i++){
                            temp = temp * parseInt(splitted_value[i]); 
                            printCurrentNumber(temp);
                            printPreviousHistory("");
                        }
                    }
                    //for division
                    if(prev_his.includes('/')){
                        var splitted_value = prev_his.split('/');
                        let temp;
                        for(let i =0; i<splitted_value.length; i++){
                            temp = temp / parseInt(splitted_value[i]); 
                            printCurrentNumber(temp);
                            printPreviousHistory("");
                        }
                    }
				}
				else{
					prev_his=prev_his+this.id;
					printPreviousHistory(prev_his);
					printCurrentNumber("");
				}
            }
        }
    })
}

let number = document.getElementsByClassName("calc-number")
for(let i=0; i < number.length ; i++){
    number[i].addEventListener("click", function(){
        let op = getCurrentNumber();
        if(op != NaN){
            op += this.id;
            printCurrentNumber(op);
        }
    })
}

function add(n1,n2){
    let res = n1+n2;
    return res;
}

// alert(add(7,3));
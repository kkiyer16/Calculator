class Calculator{
    constructor(previousNumberText, currentNumberText){
        this.previousNumberText = previousNumberText
        this.currentNumberText = currentNumberText
        this.clear()
    }

    clear(){
        this.currentNumber = ''
        this.previousNumber = ''
        this.operator = undefined
    }

    backspace(){
        this.currentNumber = this.currentNumber.toString().slice(0, -1);
    }

    appendNumber(number){
        if(number === '.' && this.currentNumber.includes('.')) return
        this.currentNumber = this.currentNumber.toString() + number.toString()
        
    }

    chooseOperation(operator){
        if(this.currentNumber === '') return
        if(this.previousNumber !== ''){
            this.compute()
        }
        this.operator = operator
        this.previousNumber = this.currentNumber
        this.currentNumber = ''
    }

    compute(){
        let result;
        const prev = parseFloat(this.previousNumber)
        const curr = parseFloat(this.currentNumber)
        if(isNaN(prev) || isNaN(curr)) return
        switch(this.operator){
            case '+':
                result = prev + curr
                break
            case '-':
                result = prev - curr
                break
            case '*':
                result = prev * curr
                break
            case '÷':
                result = prev / curr
                break
            case '%':
                result = prev % curr
                break
            default:
                break
        }
        this.currentNumber = result
        this.operator = undefined
        this.previousNumber = ''
    }

    getFormattedNumber(num){
        const strNumber = num.toString()
        const integerDigits = parseFloat(strNumber.split('.')[0]);
        const decimalDigits = strNumber.split('.')[1];
        let intDisp;
        if(isNaN(integerDigits)){
            intDisp = '';
        }
        else{
            intDisp = integerDigits.toLocaleString('en', { maximumFractionDigits :  0 });
        }
        if(decimalDigits != null){
            return `${intDisp}.${decimalDigits}`;
        }
        else{
            return intDisp;
        }
    }

    updateDisplay(){
        this.currentNumberText.innerText = this.getFormattedNumber(this.currentNumber);
        if(this.operator != null){
            this.previousNumberText.innerText = `${this.getFormattedNumber(this.previousNumber)} ${this.operator}`;
        }
        else{
            this.previousNumberText.innerText = '';
        }

        // this.currentNumberText.innerText = this.currentNumber;
        // this.previousNumberText.innerText = `${this.previousNumber} ${this.operator}`;

    }
}



const numbers = document.querySelectorAll(".calc-number");
const operators = document.querySelectorAll(".calc-operator");
const clearAll = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const equals = document.querySelector(".calc-equals");
const previousNumberText = document.getElementById("value-history");
const currentNumberText = document.getElementById("value-output");

const calculator = new Calculator(previousNumberText, currentNumberText)

numbers.forEach(btn =>{
    btn.addEventListener('click', function(){
        calculator.appendNumber(btn.innerText)
        calculator.updateDisplay()  
    })
})

operators.forEach(btn =>{
    btn.addEventListener('click', function(){
        calculator.chooseOperation(btn.innerText)
        calculator.updateDisplay()  
    })
})

equals.addEventListener('click', function(){
    calculator.compute()
    calculator.updateDisplay()
})

clearAll.addEventListener('click', function(){
    calculator.clear()
    calculator.updateDisplay()
})

backspace.addEventListener('click', function(){
    calculator.backspace()
    calculator.updateDisplay()
})
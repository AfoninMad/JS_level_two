class Burger {
    constructor(size, content, topping1, topping2, sum, callory) {
        this.size = size;
        this.content = content;
        this.topping1 = topping1;
        this.topping2 = topping2;
        this.sum = 0;
        this.callory = 0;
    }
    _calcPrice() {
        // расчет
        if (this.size == document.getElementById("burger1").value) {
            this.sum += 50;
            this.callory += 20;
        } else if (this.size == document.getElementById("burger2").value) {
            this.sum += 100;
            this.callory += 40;
        }
        if (this.content == document.getElementById("burger3").value) {
            this.sum += 10;
            this.callory += 20;
        } else if (this.content == document.getElementById("burger4").value) {
            this.sum += 15;
            this.callory += 10;
        } else if (this.content == document.getElementById("burger5").value) {
            this.sum += 20;
            this.callory += 5;
        }
        if ((this.topping1 == document.getElementById("burger6").value) && (this.topping2 == document.getElementById("burger7").value)) {
            this.sum += 35;
            this.callory += 5;
        } else if ((this.topping1 == document.getElementById("burger6").value) && (this.topping2 != document.getElementById("burger7").value)) {
            this.sum += 20;
            this.callory += 5;
        } else if ((this.topping1 == document.getElementById("burger7").value) && (this.topping2 != document.getElementById("burger6").value)) {
            this.sum += 15;

        }

    }
    _showResult() {
        //вывод
        $('#message').remove(); //удаление ранее сзданного элемента на JQ // на JS не вышло
        const result = `<span id="message">
                Вы заказали  бургер ${this.size}, начинка - ${this.content} и топингами: 1 - ${this.topping1}, 2 - ${this.topping2}</br>
                <span>Сумма - ${this.sum} рублей. Каллорийность - ${this.callory} ккал.
                </<span></br> `;
        document.getElementById("result").insertAdjacentHTML("beforebegin", result);




    }
    _clearAllArg() {
        this.size = undefined;
        this.content = undefined;
        this.topping1 = undefined;
        this.topping2 = undefined;
        this.sum = 0;
        this.callory = 0;
    }

    _getParam() {
        if (document.getElementById("burger1").checked == true) {
            this.size = document.getElementById("burger1").value;
        } else if (document.getElementById("burger2").checked == true) {
            this.size = document.getElementById("burger2").value
        }
        if (document.getElementById("burger3").checked == true) {
            this.content = document.getElementById("burger3").value;
        } else if (document.getElementById("burger4").checked == true) {
            this.content = document.getElementById("burger4").value;

        } else if (document.getElementById("burger5").checked == true) {
            this.content = document.getElementById("burger5").value;

        }
        if ((document.getElementById("burger6").checked == true) && (document.getElementById("burger7").checked == false)) {
            this.topping1 = document.getElementById("burger6").value;
        } else if ((document.getElementById("burger7").checked == true) && (document.getElementById("burger6").checked == false)) {
            this.topping1 = document.getElementById("burger7").value;
        } else if ((document.getElementById("burger6").checked == true) && (document.getElementById("burger7").checked == true)) {
            this.topping1 = document.getElementById("burger6").value;
            this.topping2 = document.getElementById("burger7").value;
        } else {
            this.topping1 = undefined;
            this.topping2 = undefined;
        }


    }
    init() {
        this._getParam();
        this._calcPrice();
        this._showResult();
        this._clearAllArg();
    }
}
let order = new Burger;
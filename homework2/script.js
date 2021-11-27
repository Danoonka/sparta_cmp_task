class superArray {
    constructor(n, m, {min, max}, globArr) {
        this.n = n;
        this.m = m;
        this.min = min;
        this.max = max;
    }




    fillArray(){
        this.Arr = [];
        for (let i = 0; i < this.m; i++) {
            this.Arr[i] = [];
            for (let j = 0; j < this.n; j++){
                this.Arr[i][j] = this.getRandomInt();
            }
        }//document.write(this.Arr);
        return this.Arr;
    }


    getRandomInt(){
        this.min = Math.ceil(this.min);
        this.max = Math.floor(this.max);
        return Math.floor(Math.random() * (this.max - this.min) + this.min);
    }

    render() {
        this.newArr = this.fillArray();
        for (let i = 0; i < this.m; i++) {
            document.write("<p>" + this.newArr[i] + "</p>");
        } return this.newArr;
    }

    clear(direction, k){
        this.clearArray = secondTask;
        if (direction === 'row') {
            for (let i = 0; i < this.m; i++) {
                for (let j = 0; j < this.n; j++){
                    if (i === k) {
                        this.clearArray[i][j] = 0;
                    }
                }document.write("<p>" + this.clearArray[i] + "</p>");
            }
        }else if (direction === 'column'){
            for (let i = 0; i < this.m; i++) {
                for (let j = 0; j < this.n; j++){
                    if (j === k) {
                        this.clearArray[i][j] = 0;
                    }
                }document.write("<p>" + this.clearArray[i] + "</p>");
            }
        }return this.clearArray;
    }

    setMarker({x,y}) {
        let markedArr = thirdTask;
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (i === x && j === y) {
                    markedArr[i][j] = "&";
                }
            }document.write("<p>" + markedArr[i] + "</p>");
        }
        return markedArr

    }

    goTo({x,y}) {
        let intoMove = forthTask;
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (intoMove[i][j]=="&"){
                    intoMove[i][j] = firstTask[i][j];
                }
                if (i === x && j === y) {
                    intoMove[i][j] = "&";
                }
            }document.write("<p>" + intoMove[i] + "</p>");
        } return intoMove
    }

    shift(direction){
        let oneStep = fifthTask;
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (oneStep[i][j]=="&"){
                    oneStep[i][j] = firstTask[i][j];
                    if (direction == 'bottom'){
                        oneStep[i + 1][j] = "&";
                    }else if(direction =='top'){
                        oneStep[i - 1][j] = "&";
                    }else if(direction == 'right'){
                        oneStep[i][j + 1] = "&";
                    }else if(direction == 'left') {
                        oneStep[i][j - 1] = "&";
                    }
                }
            }document.write("<p>" + oneStep[i] + "</p>");
        }return oneStep;
    }


}

let firstTask = new superArray(4, 4, {min:10, max:55}).fillArray();
document.write("task 2");
let secondTask = new superArray(4, 4, {min:10, max:55}).render();
document.write("task 3");
let thirdTask = new superArray(4,4,{min:10, max:55}).clear('column', 2);
document.write("task 4");
let forthTask = new superArray(4,4,{min:10, max:55}).setMarker({x:2, y: 1});
document.write("task 5");
let fifthTask = new superArray(4,4,{min:10, max:55}).goTo({x:1,y:2});
document.write("task 6");
let sixthTask = new superArray(4,4,{min:10, max:55}).shift('left');


let imgArray = document.querySelectorAll('ul li');

class Iterator {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length;
    }
}

elements = new Iterator(imgArray);
let num = 0;
let nextElement = [];
while (elements.hasNext()) {
    nextElement.push(elements.next());
}

window.change = function (nextElement, times){
    num = num + times;
    num = Math.min(Math.max(num, 0), imgArray.length-1);
    return nextElement[num].scrollIntoView({behavior: "smooth"});
}


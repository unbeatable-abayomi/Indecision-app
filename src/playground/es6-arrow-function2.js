let add = function (a,d) {
    return a * d;
    console.log(arguments)
}

add(3,2)


const mulitipiler = {
    myNumbers: [10,20,30,40],
    numberMuli : 2,
    mulitipilerFun () {
        return this.myNumbers.map((num)=> this.numberMuli * num)
    }

}
mulitipiler.mulitipilerFun()
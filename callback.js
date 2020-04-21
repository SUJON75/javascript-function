function explain_callback(name, age, task){
    console.log('Hello ', name);
    console.log('you age', age);
    task();
}

function washHand(){
    console.log('wash hand with soap');
}
function takeshower(){
    console.log('Take shower');
}
function scrollFacebook(){
    console.log('scroll facebook every day');
}

explain_callback('sogir Uddin', 17, washHand);
explain_callback('Jogir Uddin', 13, takeshower);
explain_callback('Jogir Uddin', 13, scrollFacebook);



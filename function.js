function evenify(num){
    if(num % 2 == 0){
        console.log(num, ': is even number')
    }
    else{
        console.log(num, ': is odd number')
    }
}

function myName_all(name){
    for (let i = 0; i < name.length; i++){
        const num = name[i];

        if(num % 2 == 0){
            console.log(num, ': is even number')
        }
    }
}




nums = [5, 12, 89, 45, 18, 8];

for (let i = 0; i < nums.length; i++){
    const num = nums[i];
    //console.log(num*2); 
    evenify(num);
    
}
friends_age = [13, 17, 16, 20, 18,]
for (let i = 0; i < friends_age.length; i++) {
    const age = friends_age[i];

    evenify(age);
}

function evenify_all(age: any): void
evenify_all(age)
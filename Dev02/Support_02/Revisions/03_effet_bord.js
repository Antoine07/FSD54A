let a = 1; // portée global
function One(){

    return a; 
}

console.log( One() === 1, One() )

// effet de bord => modifié la valeur dans la fonction One
a = 19
console.log( One() === 1 , One() )

a = 0
function addition(x, y){

    return x + y + a
}

console.log( addition(1, 1))
a = -1
console.log( addition(1, 1))

function baz(){
    function One(){
        // le let dans la fonction à scoper <=> la portée est uniquement dans la fonction 
        let a = 1

        return a 
    }
    a = 7 // aucun effet de bord 
    return One()
}

a = 9
console.log('baz', baz())

function Two(){
    // le let dans la fonction à scoper <=> la portée est uniquement dans la fonction 
    let a = 2

    return a 
}

// pas les memes variables 
a = 3
console.log('Two', Two())

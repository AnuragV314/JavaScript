// The break statement "jumps out" of a loop.

// The continue statement "jumps over" one iteration in the loop.

// break
for(let i = 1; i<=10; i++){
    if(i==5){
        break;
    }
    console.log(i);
}

// continue
for(let i = 1; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

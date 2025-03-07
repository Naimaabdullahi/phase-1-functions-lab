// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
        const hqBlock = 42;
        return Math.abs(someValue - hqBlock)
        
}
console.log (distanceFromHqInBlocks(43));
console.log (distanceFromHqInBlocks(50));
console.log (distanceFromHqInBlocks(34));

function distanceFromHqInFeet(someValue) {
    const hqBlock = 42;
    return Math.abs((someValue-hqBlock)* 264) 
}
console.log (distanceFromHqInFeet(43));
console.log (distanceFromHqInFeet(50));
console.log (distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination) {
        return Math.abs((destination - start)*264);
}
console.log (distanceTravelledInFeet((48, 43)*264))

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start)*264
    if (distance <= 400) {
        return 0;
    }else if (distance > 400 && distance <=2000) {
        return 2.56;
    }else if (distance > 2000 && distance <=2500) {
        return 25;
    }else {
        return 'cannot travel that far'
    } 
}
console.log (calculatesFarePrice(43, 44));
console.log (calculatesFarePrice(34, 32));
console.log (calculatesFarePrice(50, 58));
console.log (calculatesFarePrice(34, 24));

// Code your solution in this file!
const distanceFromHqInBlocks=(distance)=>{
    let distanceInBlocks = 0

    if(distance>42){
        distanceInBlocks = distance - 42
    }else if(distance<42){
        distanceInBlocks = 42 - distance
    }else{
        distanceInBlocks = 0
    }
   

    return distanceInBlocks
}

const distanceFromHqInFeet = (distance)=> distanceFromHqInBlocks(distance)*264    


const distanceTravelledInFeet=(start, destination) => {
    let distanceTravelled = 0
    if(destination>start){
        distanceTravelled = (destination-start)*264
    }else if(destination<start){
        distanceTravelled = (start - destination)*264
    }else{
        distanceTravelled = 0
    }
    return distanceTravelled
}

const calculatesFarePrice=(start, destination)=>{
    let distance = distanceTravelledInFeet(start,destination)
    let price = 0
    if(distance<=400){
        price = 0
    }else if(distance>400&&distance<=2000){
        price = (distance-400)*0.02
    }else if(distance>2000&&distance<2500){
        price = 25
    }else{
        price = 'cannot travel that far'
    }
    return price
}
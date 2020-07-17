//problem number 1:

function feetToMile(feetValue){
    let miles = 0;
    if(feetValue<1){
        console.log("Distance can not be ba Negative Value\n");
        return ;
    }
    else{
        //1 mile= 5280 foot

        miles = feetValue/5280;
        return miles.toFixed(3)

    }
}


 
//problem number 2:

function woodCalculator(chair = 0,table = 0,bed = 0){

    //using default value 0 so that functon can work properly 
    //even if the user dont give 3 parameters.

    let totalWood = 0;
    let totalchair = chair*1;
    let totaltable = table*3;

    let totalbed = bed*5;

    totalWood = totalchair + totaltable + totalbed ;
    return totalWood;
}

 

//problem number 3:

function brickCalculator(height=0){
    let totalBricks=0;
    let temp=height;

    if(height<1){
        return 0;
    }

    if(height > 0 ){
        if(height <= 10){
            return height * 15 *1000;
        }
        else{
            totalBricks += 10 * 15;
            temp -=  10;
        } 
    }

    if(height > 10){

        if(height <= 20){

            totalBricks += temp*12;
            return totalBricks*1000;
        }

        else{

            totalBricks += 10 * 12;
            temp -= 10;
        }
    }

    if(height > 20){

        totalBricks += temp*10;
        return totalBricks*1000;

    }
}



//problem number 4:
 
function tinyFriend(friendList=[]) {

    //check if the list is empty;

    if(friendList.length < 1){

        return "You have no Friends";
    }

    var len = Number.MAX_VALUE;
    var tiny = "";

     // check and remove if a name is ('')/empty
        
    friendList=friendList.filter(function(e){return e});

    for(let i of friendList){

        if(i.length < len){
            len = i.length;
            tiny = i;
        }
    }

    return tiny;
}

 
 
 console.log(feetToMile(8000));
 console.log(woodCalculator(10,10,2))

 console.log(brickCalculator(27))

 console.log(tinyFriend(['helo','po']))

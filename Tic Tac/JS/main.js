
var OccopiedBlocks = [];
var counter = 0;
function makeCross(block){
    var winner = winnerDetected();
    

    if (OccopiedBlocks.length < 1 ){
        firstMove(block);
        markPlayerMove(block);
    }
    else{
        
        if ( winner == false){
       

            let isOccupied = OccupiedBlock(block);    
            
            if (isOccupied == false){
                document.getElementById('area'+block).innerHTML = 'X';
                document.getElementById('area'+block).style.color = "Blue";
                OccopiedBlocks.push(block);
                counter++;
                markPlayerMove(block);
                console.log('user played');
                if (winner == false){                
                    makeCircle();
                }
            }
            else{
                
                console.log('occupied');
            }
        }
        else{
            if (winner == 1){
                //player wins
                document.getElementById('Animate').innerHTML = 'You win, well done';
                document.getElementById('Animate').style.color = "Green";
                console.log('user won')
            }
            else if ( winner == 2){
                //Compueter wins
                document.getElementById('Animate').innerHTML = 'oof, sorry you lost';
                document.getElementById('Animate').style.color = "Red";
                console.log('user lost')
            }
            else if (winner == 3){
                //tie
                document.getElementById('Animate').innerHTML = 'WOW! you tied';
                document.getElementById('Animate').style.color = "Yellow";
                console.log('tie');
            }
        }
    }        
}

//vcount for vertical (column) count of player moves
//hCount for horizontal (row) player moves
//dCount for diaganol moves, d1 for positive diaganol, d2 for negative diaganol
var v1Count = 0;
var v2Count = 0;
var v3Count = 0;
var h1Count = 0;
var h2Count = 0;
var h3Count = 0;
var d1Count = 0;
var d2Count = 0;
function markPlayerMove(block){
    switch(block){
        case 1:
            v1Count++;
            h1Count++;
            d2Count++;
            break;   
        case 2:
            v2Count++;
            h1Count++;
            break;
        case 3:
            h1Count++;
            v3Count++;
            d1Count++;
            break;
        case 4:
            v1Count++;
            h2Count++;
            break;
        case 5:
            v2Count++;
            h2Count++;
            d1Count++;
            d2Count++;
            break;
        case 6:
            v3Count++;
            h2Count++;
            break;
        case 7:
            v1Count++;
            h3Count++;
            d1Count++;
            break;
        case 8:
            v2Count++;
            h3Count++;
            break;
        case 9:
            v3Count++;
            h3Count++;
            d2Count++;
            break;
        default:
            console.log('error in switch logic')
            window.alert('error in switch logic')
            location.reload()
            break;
    }

}

var v1CountCPU = 0;
var v2CountCPU = 0;
var v3CountCPU = 0;
var h1CountCPU = 0;
var h2CountCPU = 0;
var h3CountCPU = 0;
var d1CountCPU = 0;
var d2CountCPU = 0;

function markComputerMove(block){
    switch(block){
        case 1:
            v1CountCPU++;
            h1CountCPU++;
            d2CountCPU++;
            break;   
        case 2:
            v2CountCPU++;
            h1CountCPU++;
            break;
        case 3:
            h1CountCPU++;
            v3CountCPU++;
            d1CountCPU++;
            break;
        case 4:
            v1CountCPU++;
            h2CountCPU++;
            break;
        case 5:
            v2CountCPU++;
            h2CountCPU++;
            d1CountCPU++;
            d2CountCPU++;
            break;
        case 6:
            v3CountCPU++;
            h2CountCPU++;
            break;
        case 7:
            v1CountCPU++;
            h3CountCPU++;
            d1CountCPU++;
            break;
        case 8:
            v2CountCPU++;
            h3CountCPU++;
            break;
        case 9:
            v3CountCPU++;
            h3CountCPU++;
            d2CountCPU++;
            break;
        default:
            console.log('error in switch logic')
            window.alert('error in switch logic')
            break;
    }

}




function firstMove(block){ //need firstmove to populate array
    document.getElementById('area'+block).innerHTML = 'X';
    document.getElementById('area'+block).style.color = "Blue";
    OccopiedBlocks.push(block)
    counter++;
    makeCircle();
    document.getElementById('Animate').style.color = "black";

}

function makeCircle(){ //computer plays
    let state = winnerDetected();
    if (state == false){
        if (OccopiedBlocks.length<8){
            let CPUBlock = Math.floor(Math.random() * 5) +1;
            CPUBlock += Math.floor(Math.random()*4) +1

            while (OccupiedBlock(CPUBlock)==true){
                CPUBlock = Math.floor(Math.random() * 9)+1
            }

            document.getElementById('area'+CPUBlock).innerHTML = 'O';
            document.getElementById('area'+CPUBlock).style.color = "Red";
            markComputerMove(CPUBlock);
            OccopiedBlocks.push(CPUBlock);

            
        }
        if(winnerDetected() != false){
            makeCross(0)
        }


    }else { 
        makeCross(0)
    }


}

function OccupiedBlock(block){
    let isOccupied = false;
    for (let i = 0; i < OccopiedBlocks.length; i++) {
        if (block == OccopiedBlocks[i]){
            isOccupied = true;
        }
        
    }

    return isOccupied;
}

function winnerDetected(){ // return 1 for player, 2 for CPU, 3 for tie
    //player checks
    if (v1Count==3 || v2Count==3 || v3Count==3){
        return 1 
    }
    else if ( h1Count == 3 || h2Count == 3 || h3Count == 3 ){
        return 1
    }
    else if (d1Count == 3 || d2Count == 3){
        return 1
    }

    //cpu checks
    else if (v1CountCPU==3 || v2CountCPU==3 || v3CountCPU==3){
        return 2 
    }
    else if ( h1CountCPU == 3 || h2CountCPU == 3 || h3CountCPU == 3 ){
        return 2
    }
    else if (d1CountCPU == 3 || d2CountCPU == 3){
        return 2
    }

    //tie
    else if (OccopiedBlocks.length==9){
        return 3
    }
    else return false;


}

function clearBoard(){
    location.reload();
}
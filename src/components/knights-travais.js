import React, { useState } from "react";

function square (x, y, link, upOneRightTwo, downOneLeftTwo, upTwoRightOne, downTwoLeftOne, upOneLeftTwo, downOneRightTwo, upTwoLeftOne, downTwoRightOne) {
    this.x = x;
    this.y = y;
    this.link = link; 

    this.upOneRightTwo = upOneRightTwo;
    this.downOneLeftTwo = downOneLeftTwo;
    this.upTwoRightOne = upTwoRightOne;
    this.downTwoLeftOne = downTwoLeftOne;
    this.upOneLeftTwo = upOneLeftTwo;
    this.downOneRightTwo = downOneRightTwo;
    this.upTwoLeftOne = upTwoLeftOne;
    this.downTwoRightOne = downTwoRightOne; 

}

function node (data, x, y, left = null, right = null, link) {
    this.data = data;
    this.x = x;
    this.y = y;
    this.left = left;
    this.right = right; 
    this.link = link;
    


}
const board = [[1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8], [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7], [5,8], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7], [6,8], [7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7],[7,8], [8,1], [8,2], [8,3], [8,4], [8,5], [8,6], [8,7], [8,8]];
const allSquares = [];

class tree { 
    constructor () {
        this.root = null
    }

    mkTree (array) {
    if(0 > array.length - 1) {
        return null
    }

    let mid = Math.floor(array.length /2);
    let newSquare = new square(array[mid][0],array[mid][1])
    let newNode = new node(array[mid], array[mid][0], array[mid][1], '', '', newSquare);
   
    if (this.root === null){ 
    this.root = newNode;}

    let left = array.slice(0, mid);
    let right = array.slice(mid +1, );

    
    
    newNode.left = this.mkTree(left)
    newNode.right = this.mkTree(right)

    return newNode
}

mkBoard (pointer = this.root) {
    if (pointer === null){
        return;
    }
    
    let newSquare = pointer.link
    
    
   
    this.mkBoard(pointer.right);
    this.mkBoard(pointer.left);
    
    
    newSquare.upOneRightTwo = this.linkElements(this.root, newSquare.x + 1, newSquare.y + 2, newSquare)
    newSquare.upOneLeftTwo = this.linkElements(this.root, newSquare.x + 1, newSquare.y - 2, newSquare)
    newSquare.upTwoLeftOne = this.linkElements(this.root, newSquare.x + 2, newSquare.y - 1, newSquare)
    newSquare.upTwoRightOne = this.linkElements(this.root, newSquare.x + 2, newSquare.y + 1, newSquare)
    newSquare.downOneLeftTwo = this.linkElements(this.root, newSquare.x - 1, newSquare.y - 2, newSquare)
    newSquare.downTwoLeftOne = this.linkElements(this.root, newSquare.x - 2, newSquare.y - 1, newSquare)
    newSquare.downOneRightTwo = this.linkElements(this.root, newSquare.x - 1, newSquare.y + 2, newSquare)
    newSquare.downTwoRightOne = this.linkElements(this.root, newSquare.x - 2, newSquare.y + 1, newSquare)

   // console.log('board', newSquare)
   
}
    
linkElements(pointer, a, b, newSquare) {
   
  //  console.log('start', newSquare, a, b)
    
   while(pointer !== null) {
            //console.log('runs', a, b)

              
            if (a > 8 ||a < 1 || b > 8 || b < 1){
             pointer = null
             //console.log('broke')
             return null
            }
 
             
             if(a === pointer.x) {
                 if(b === pointer.y) {
                 //console.log('completes', pointer['link'])
                 return  pointer.link
                }
                 else if(b > pointer.y) {
                    //console.log('a equals but b greater')
                 pointer = pointer.right;
                     continue}
                else {
                 pointer = pointer.left
                 //console.log('a = but b is <')
                 continue}
             }
         
             else if (a > pointer.x) {
             pointer = pointer.right;
             //console.log('a >')
             continue
             }
             
             else {//console.log('a <')
             pointer = pointer.left
             
                 continue}
             
            }
          
      
}

findStart (start, end, pointer) {
    
    if(pointer === null) {
        return
    }
        if (pointer.x == start[0]) {
            if (pointer.y == start[1]) {
           return pointer.link
        }
        }
        return this.findStart(start,end, pointer.right) || this.findStart(start,end,pointer.left)  
    }

 movDistance (start, end, pointer = null, runCap = 0, move1 = [], move2 = [], move3 = [], move4 = [], move7 = [], move8 = [], move9 = [], move10 = []) {

    if (pointer === null) {
        return []
    }; 
    if (pointer.x === end[0] && pointer.y === end[1]){
            return [`[${pointer.x}:${pointer.y}]`]
    }
       
   if (runCap === 7) {
    return []
   }

    
    runCap++

   
  
        
    if (pointer.x <= end[0]) {
        if (pointer.y < end[1]) {
         
         move1 = this.movDistance(start, end, pointer.upOneRightTwo, runCap);
         move2 = this.movDistance(start, end, pointer.upTwoRightOne, runCap);
            if (move1.length >= 1) {
                if (move2.length >= 1){
                if(move2.length <= move1.length) {
                    move2.unshift(`[${pointer.x}:${pointer.y}]`)
                    return move2 
                }
                else {
                move1.unshift(`[${pointer.x}:${pointer.y}]`)
                return move1 
                }
            }
                else {
                    move1.unshift(`[${pointer.x}:${pointer.y}]`)
                return move1 
                }}
            else if (move2.length >= 1) {
                move2.unshift(`[${pointer.x}:${pointer.y}]`)
            return move2            }
            return []
        }
        else {
           
         move3 = this.movDistance(start, end, pointer.upOneLeftTwo, runCap);
         move4 = this.movDistance(start, end, pointer.upTwoLeftOne, runCap);
        if (move3.length >= 1) {
            if (move4.length >= 1){
            if(move4.length <= move3.length) {
                move4.unshift(`[${pointer.x}:${pointer.y}]`)
                return move4 
            }
            else {
                move3.unshift(`[${pointer.x}:${pointer.y}]`)
            return move3 
            }}
            else {
                move3.unshift(`[${pointer.x}:${pointer.y}]`)
            return move3 
            }
        }
        else if (move4.length >= 1) {
            move4.unshift(`[${pointer.x}:${pointer.y}]`)
        return move4           }
        return []
    }
    }
    else  {
        if (pointer.y <= end[1]) {
         move7 = this.movDistance(start, end, pointer.downOneRightTwo, runCap);
         move8 = this.movDistance(start, end, pointer.downTwoRightOne, runCap);
                if (move7.length >= 1) { 
                    if (move8.length >= 1) {
                    if(move8.length <= move7.length) {
                        move8.unshift(`[${pointer.x}:${pointer.y}]`)
                        return move8
                    }
                    else {
                        move7.unshift(`[${pointer.x}:${pointer.y}]`)
                    return move7
                    }
                }
                else {
                    move7.unshift(`[${pointer.x}:${pointer.y}]`)
                    return move7
                }
                }
                else if (move8.length >= 1){
                    move8.unshift(`[${pointer.x}:${pointer.y}]`)
                return move8            }  
                return []
            }
        else {
         move9 = this.movDistance(start, end, pointer.downOneLeftTwo, runCap);
         move10 = this.movDistance(start, end, pointer.downTwoLeftOne, runCap);
        if (move9.length >= 1) {
            if (move10.length >= 1){
            if(move9.length <= move10.length) {
                move9.unshift(`[${pointer.x}:${pointer.y}]`)
                return move9 
            }
            else {
                move10.unshift(`[${pointer.x}:${pointer.y}]`)
            return move10
            }
        }
        else {
            move9.unshift(`[${pointer.x}:${pointer.y}]`)
            return move9
        }
        }
        else if (move10.length >= 1){
            move10.unshift(`[${pointer.x}:${pointer.y}]`)
        return move10            }
        return []
    }   
       
    }
}}

const myTree = new tree();
const builtTree = myTree.mkTree(board)





// const prettyPrint = (node, prefix = '', isLeft = true) => {
//     if (node.right !== null) {
//       prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
//     }
//     console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
//     if (node.left !== null) {
//       prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
//     }
//   }
//  prettyPrint(myTree.root)
  
  myTree.mkBoard();
 
   
   

   const KnightsUI = () => {
    const [message, Setmessage] = useState('Your Results Will Update Here!');

    const findRoute = (e) => {
    
        console.log(e)
        e.preventDefault()
       
        let x = myTree.findStart([e.target[0].value, e.target[1].value], [e.target[2].value, e.target[3].value], myTree.root)
        let y = Array.from(myTree.movDistance([e.target[0].value, e.target[1].value], [Number(e.target[2].value), Number(e.target[3].value)], x));
        console.log(y)
        let z = y.length
       Setmessage('Your fastest route is ' + y.join() + ` in ${z} moves`)
        }
    return (
       <div> 
        <h2>{message}</h2>
        <form onSubmit={findRoute}>
            <label>Start X value</label>
            <input name="x" type='number' max={8} min={1}></input>
            <label>Start Y Value</label>
            <input name="y" type='number' max={8} min={1}></input>
            <label>End X Value</label>
            <input name="xEnd" type='number' max={8} min={1}></input>
            <label>End Y Value</label>
            <input name="yEnd" type='number' max={8} min={1}></input>
            <button >Submit</button>
        </form>
        </div> 
    )
   };

   export default KnightsUI
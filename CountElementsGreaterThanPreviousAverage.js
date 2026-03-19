/*
Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.

responseTimes = [100, 200, 150,300]
output: 2
*/

function countResponseTimeRegressions(responseTimes) {
    // Write your code here
    
    let count = 0
    let total = 0
    
    
    for(let i=0; i<responseTimes.length; i++){
        
        if(i !== 0) {
           
           if(total/i < responseTimes[i]){
            count++
           } 
        
        }
        
        total += responseTimes[i]
        
    }
    
    return count
    
    
    

}
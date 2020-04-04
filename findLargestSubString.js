const lengthOfLongestSubstring = function(s) {
    
    const str = s,
     strLength = str.length;
    let length = 0,
     highestLength = 0,
     runStr = '',
     highestStr = '';
    
    const isOdd = function(x) { return x & 1; };
    for (let i = 0; i < strLength; i++) {
        
                
        if(str[i] !== str[i+1]) {
           
            
            runStr += str[i];
           
            
            if (isOdd(i)) {
                const firstHalf = runStr.slice(0,runStr.length/2),
                      secondHalf = runStr.slice(runStr.length/2,runStr.length);
               
                
                if (firstHalf !== secondHalf) {
                   
                    highestStr = runStr;
                    length++;
                    
                    if (length > highestLength) {
                        
                        highestLength = length; 
                        
                    }
                    
                
                } else {
                   
                    runStr = '';
                    length = 0;
                    //decrement highestLength since we incremented in the previous look before we knew a match would                        //appear in the odd loop
                    highestLength--;
                    
                }
            
            } else {
                
                highestStr = runStr;
                length++;
                
                }
        
        } else {
            runStr = '';
            length = 0;
        }
    }
    
    length = highestLength;
    
    return length;
};
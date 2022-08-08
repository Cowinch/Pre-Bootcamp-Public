function generateRandomInteger(min,max){
    return Math.floor(Math.random() * (max-min +1)+min);
}

function generateArray(arrayLength,min, max){
    var arr =[]
    for(i=1;i<arrayLength+1;i++){
        arr.push(generateRandomInteger(min,max));
    }
    return arr;
}

function sumArr(array){
    var arr=array; var sum=arr[0];
    for(i=1;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}

function maxArr(array){
    var arr=array; var max=arr[0];
    for(i=1;i<=arr.length;i++){
        if(arr[i]>=max){
            max=arr[i];
        }
    }
    return max;
}

function meanArr(array){
    var arr=array; var avg=0;
    for(i=0;i<arr.length;i++){
        avg=avg+arr[i];
    }
    return avg/arr.length;
}

function greaterY(array,Y){
    var arr=array; var count=0;
    for(i=0;i<arr.length;i++){
        if(Y<arr[i]){
            count=count+1;
        }
    }
    return count;
}

function squareVal(array){
    var squared=array;
    for(i=0;i<squared.length;i++){
        squared[i]=squared[i]*squared[i];
    }
    return squared;
}

function copyArray(array){
    var arr=array;
    return arr;
}

function noNeg(array){
    var positives=array;
    for(i=0;i<positives.length;i++){
        if(positives[i]<0){
            positives[i]=0;
        }
    }
    return positives;
}

function runArray(length, min, num,Y){
    var wholeArray=generateArray(length,min,num); 
    var squareArray=copyArray(wholeArray);
    console.log(wholeArray);
    a=sumArr(wholeArray);
    console.log("the sum of the array is " + a);
    b=maxArr(wholeArray);
    console.log("the highest number of the array is " + b);
    c=meanArr(wholeArray);
    console.log("the average of the array is " + c);
    d=greaterY(wholeArray,Y);
    console.log("the number of numbers that is above " + Y + " is " + d);
    e=squareVal(squareArray);
    console.log("[" + e + "]" + " is the array sqaured");
    f=noNeg(wholeArray);
    console.log("[" + f + "]"+ " is the array with negatives removed");
}
x=runArray(5,-15,15,generateRandomInteger(3,10));

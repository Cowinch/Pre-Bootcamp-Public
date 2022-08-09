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
    var oldArray=array; var squared=[];
    for(i=0;i<oldArray.length;i++){
        squared.push(oldArray[i]);
    }
    for(i=0;i<squared.length;i++){
        squared[i]=squared[i]*squared[i];
    }
    return squared;
}

function noNeg(array){
    var oldArray=array; var positives=[];
    for(i=0;i<oldArray.length;i++){
        positives.push(oldArray[i]);
    }
    for(i=0;i<positives.length;i++){
        if(positives[i]<0){
            positives[i]=0;
        }
    }
    return positives;
}

function minMaxAvg(array){
    var oldArray=array; var newArray=[oldArray[0],oldArray[0],oldArray[0]];
    for(i=1;i<oldArray.length;i++){
        if(newArray[0]>oldArray[i]){
            newArray[0]=oldArray[i];
        }
        if(newArray[1]<oldArray[i]){
            newArray[1]=oldArray[i];
        }
        newArray[2]=newArray[2]+oldArray[i];
    }
    newArray[2]=newArray[2]/oldArray.length;
    return newArray;
}

function swap(array){
    var swapped=array; var placeholder=swapped[0];
    swapped[0]=swapped[swapped.length-1];
    swapped[swapped.length-1]=placeholder;
    return swapped;
}

function dojo(array){
    var arr=array;
    for(i=0;i<arr.length;i++){
        if(0>arr[i]){
            arr[i]="dojo";
        }
    }
    return arr;
}

function runArray(length, min, num,Y){
    var wholeArray=generateArray(length,min,num); 
    console.log(wholeArray);
    console.log("the sum of the array is " + sumArr(wholeArray));
    console.log("the highest number of the array is " + maxArr(wholeArray));
    console.log("the average of the array is " + meanArr(wholeArray));
    console.log("the number of numbers that is above " + Y + " is " + greaterY(wholeArray,Y));
    console.log("[" + squareVal(wholeArray) + "]" + " is the array sqaured");
    console.log("[" + noNeg(wholeArray) + "]"+ " is the array with negatives removed");
    console.log(minMaxAvg(wholeArray)+" is the min value, max value, and average, respectively");
    console.log(swap(wholeArray)+" is the first and last value swapped");
}
x=runArray(5,-15,15,generateRandomInteger(3,10));

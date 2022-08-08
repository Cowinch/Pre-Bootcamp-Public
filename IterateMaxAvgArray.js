function generateRandomInteger(num){
    return Math.floor(Math.random() * num +1);
}

function generateArray(arrayLength, max){
    var arr =[]
    for(i=1;i<arrayLength+1;i++){
        arr.push(generateRandomInteger(max));
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

function summarizeArray(length, num,array){
    var array=generateArray(length,num);
    console.log(array);
    a=sumArr(array);
    console.log("the sum of the array is " + a);
    b=maxArr(array);
    console.log("the highest number of the array is " + b);
    c=meanArr(array);
    console.log("the average of the array is " + c);
}
x=summarizeArray(5,10);

var num = [];
var i= 0;
var sort = "";
var s = 5;

function setup() {
	createCanvas(windowWidth, windowHeight);
	//get random values for num array
	for (let i = 0; i < 288; i++) { // for rect: 144, lines: width
		num[i] = Math.floor(Math.random() * height);
	}
	userPrompt(); // user inputs what sort they want
}


function userPrompt() {
	sort = prompt("Please enter what sort to visualize: \nBubble\nInsertion\nSelection", "Bubble"); 
	
}
function bars (){
	// for (let i = 0; i < num.length; i++){
	// 	stroke(0);
	// 	line(i,height,i,height - num[i]);
	// }	

	for (let i = 0;i < windowWidth/s;i++){
		stroke(255,200,70);
		fill(0);
		rect(i*s,height-num[i],s,num[i]);
	}
}

function bubbleSort () {
	//had do to bubbe sort a bit differently to allow for visualization of sort
	if (i < num.length){
		for(let j = 0; j < num.length-i-1; j++){
			var first = num[j];
			var second = num[j+1];
			if (first > second){ // if element in first index is greater than element in second index
				swap(num,j,j+1);
			}
		}
	}
	i++;
}

function insertionSort(arr) {
	if (i < arr.length){
		let current = arr[i]; // current digit, basically a temp that wil be used for swapping
        let j = i - 1; //index before
        while (j >= 0 && num[j] > current) { //if num of index before is greater than current, i need to swap
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
	}
	i++
}

function selectionSort(arr) {//sort by smallest number
	if (i < arr.length){
		var min = i; // start with min being the first element 
		var j = i+1 // next digit
		while(j < arr.length){
			if (arr[j]<arr[min]){ //mening I have I have a new min
				min = j;
			}
			j++;
		}
		if (i != min){ // making sure current i is not the min
			swap(arr,i,min);
		}
	}
	i++;
}

function chooseSort() {
	if (sort == "Bubble"){
		bubbleSort();
	}else if (sort == "Quick"){
		quickSort(num, 0, num.length-1);
		//iterativeQuick(num);
	}else if (sort == "Heap"){
		heapSort(num);
	}else if (sort == "Insertion"){
		insertionSort(num);
	}else if (sort == "Selection"){
		selectionSort(num);
	}
}

async function swap(arr,first, second){
	if (sort =="Quick"){
		await sleep(); //works everytime when no sleep, however has issues when there is
	}else if (sort =="Bubble"){
		//await sleep();
	}else if (sort == "Heap"){
		await sleep();
	}
	
	var temp = arr[first];
	arr[first] = arr[second];
	arr[second]= temp;
}

//used when making functions async, but sort never turned out well
const sleep = (milliseconds) => { 
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function draw() {
	background(255,200,70);
	bars();
	textSize(30);
	text(sort + " Sort",width/2-90,30)
	keyPressed();	
}

function keyPressed(){
	if (keyCode === ENTER){
		chooseSort();
	}
}
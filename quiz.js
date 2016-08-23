var button = document.getElementById("grow");
var inputHeight = document.getElementById("height");
var inputChar = document.getElementById("char");

button.addEventListener("click", checkMe);
inputChar.addEventListener("keyup", enterKey);
inputHeight.addEventListener("keyup", enterKey);
function enterKey(event){
    if(event.keyCode === 13){
      checkMe();
    }
};

function checkMe () {
	if (inputHeight.value === "" || inputChar.value === "") {
    	alert("Both Fields Required!");
	} else {
      	var tree = {
        	height: inputHeight.value,
        	char: inputChar.value,
        };
     	buildTree(tree);
    }
};

function buildTree(treeMe) {
	var char = treeMe.char;
	var space = treeMe.height - 1;
  var charString = "";

  	for (var i = 0, t = space; i < treeMe.height; i++, t--) {
   		charString += char;
    	console.log(" ".repeat(t) + charString);
    	charString += char;
	}
};

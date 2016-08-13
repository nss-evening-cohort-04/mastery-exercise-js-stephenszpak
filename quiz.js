var button = document.getElementById("grow");
var inputHeight = document.getElementById("height");
var inputChar = document.getElementById("char");
var enterKey = document.getElementById("grow");

button.addEventListener("click", checkMe);

enterKey.addEventListener('keyup', function (event) {
  if (event.which === 13) {
    checkMe();
  }
});

function checkMe () {
	if (inputHeight.value == "" || inputChar.value == "") {
    	alert("HALP");
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

  	for (var i = 0, j = space; i < treeMe.height; i++, j--) {
   		charString += char;
    	console.log(" ".repeat(j) + charString);
    	charString += char;
	}
};

// 클릭해서 TODO 가로선 그리기
var list = document.querySelector("ul");

list.addEventListener("click", function(event){
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("completed");
		store();
	}
}, false);

// span 클릭시 TODO 삭제하기
list.addEventListener("click", function(event){
	if (event.target.tagName === "SPAN") {
		var parent = event.target.parentNode;
		parent.remove();
		store();
	}
})

// input 설정
var input = document.querySelector("input[type='text']")

input.addEventListener("keypress", function(event){
	if (event.which === 13){
		console.log("new list")
		// input 에서 텍스트 가져오기
		var todoText = this.value;
		// 새로운 li 추가하기
		var newLi = "<li><span><i class=\"fa fa-trash-alt\"></i></span> " + todoText +"</li>";
		list.innerHTML += newLi;
		store();
		input.value = "";
	}
})

// + 아이콘 토글
var plus = document.querySelector(".fa-plus")

plus.addEventListener("click", function(event){
	if (input.style.display === "none") {
		input.style.display = "block";
		event.target.classList.toggle("rotated")
	} else {
		input.style.display = "none";
		event.target.classList.toggle("rotated")
	}
})

// delete all Todos
var clear = document.querySelector(".fa-trash")

clear.addEventListener("click", function(event){
	console.log("clear the list")
	while (list.hasChildNodes()) {
		list.removeChild(list.firstChild);
	}
	store();
}, false);

// localStorage 활용하기
function store() {
	window.localStorage.myitems = list.innerHTML;
}

function getValues() {
	var storedValues = window.localStorage.myitems;
	if(storedValues) {
		list.innerHTML = storedValues;
	}
}
getValues();

var obj_select = document.getElementById('select');
obj_select.addEventListener('change',function(){
	var show= obj_select.value;
	alert("Quốc gia bạn chọn là: " +show);
});
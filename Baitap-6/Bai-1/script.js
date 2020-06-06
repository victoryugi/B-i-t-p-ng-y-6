var obj_form = document.getElementById('form');
obj_form.addEventListener('submit',function(){

	console.log('đã chạy');

	var obj_name = document.getElementById('name');
	var name = obj_name.value;
	var obj_age = document.getElementById('age');
	var age = obj_age.value;
	var show = "Tên vừa nhập: " + name + "</br>Tuổi vừa nhập: " + age;
	var obj_show = document.getElementById('showinfo');
	obj_show.innerHTML = show;
	event.preventDefault();
});
var obj_form = document.getElementById('form');
obj_form.addEventListener('submit',function(){
	var obj_name = document.getElementById('name');
	var name = obj_name.value;
	var obj_email = document.getElementById('email');
	var email = obj_email.value;
	alert("Tên vừa nhập: " + name + "\nEmail vừa nhập: " + email);
});
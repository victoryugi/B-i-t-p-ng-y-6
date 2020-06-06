var obj_form = document.getElementById('form');
obj_form.addEventListener('submit',function(){
	var obj_name = document.getElementById('name');
	var obj_email = document.getElementById('email');
	var obj_contact = document.getElementById('contact');
	var name = obj_name.value;
	var email = obj_email.value;
	var contact = obj_contact.value;
	var showInfo = "Name: "+name+"</br>Email: "+email+"</br>Contact No: "+contact;
	var obj_show = document.getElementById('showinfo');
	obj_show.innerHTML=showInfo;
	event.preventDefault();
});
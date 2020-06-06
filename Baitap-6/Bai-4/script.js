var obj_form = document.getElementById('form');
obj_form.addEventListener('submit',function(){
	var obj_title = document.getElementById('title');
	var obj_author = document.getElementById('author');
	var obj_date = document.getElementById('date');
	var obj_keyword = document.getElementById('keyword');
	var title = obj_title.value;
	var author = obj_author.value;
	var date = obj_date.value;
	var keyword = obj_keyword.value;
	var show = "Title: "+title+"</br>Author: "+author+"</br>Release date: "+date+"</br>Keyword: "+keyword;
	var obj_show = document.getElementById('showinfo');
	obj_show.innerHTML = show;
	event.preventDefault();

});
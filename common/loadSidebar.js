// load sidebar

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() 
{
    if (xhr.readyState == 4 && xhr.status == 200)
	{ 
        document.getElementById("sidebar").innerHTML = xhr.responseText;
    } 
}

xhr.open('get', "/html/sidebar.html", false);
xhr.send();

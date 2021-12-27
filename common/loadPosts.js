/*
 *	Load the sidebar
 *	TODO: Add something to detect if the page is not the index page
 * 		  and change this links to be correct for that page
 */

// thank you baao from stackoverflow


// var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

var xhr = new XMLHttpRequest();

// thumbnails to display
const thumbnailDirs = [
	"/posts/2021s1-exam/thumbnail.html",
	"/posts/apt-reception/thumbnail.html",
	"/posts/homelab/thumbnail.html"
];

// for every thumbnail in array, load it to the appropriate div
for (let i = 0; i < thumbnailDirs.length; i++)
{
	xhr.onreadystatechange = function() 
	{
		if (xhr.readyState == 4 && xhr.status == 200)
		{ 
			document.getElementById( "post" + i ).innerHTML = xhr.responseText;
		} 
	}
	xhr.open('get', thumbnailDirs[i], false);
	xhr.send();
}


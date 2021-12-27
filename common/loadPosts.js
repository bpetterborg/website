/*
 *	Load posts to main page
 *	TODO:
 *		- Move thumbnailPaths to a config file
 * 
 */

// thank you baao from stackoverflow

var xhr = new XMLHttpRequest();

// thumbnails to display
const thumbnailPaths = [
	"/posts/2021s1-exam/thumbnail.html",
	"/posts/apt-reception/thumbnail.html",
	"/posts/homelab/thumbnail.html"
];

// for every thumbnail in array, load it to the appropriate div
for (let i = 0; i < thumbnailPaths.length; i++)
{
	xhr.onreadystatechange = function() 
	{
		if (xhr.readyState == 4 && xhr.status == 200)
		{ 
			document.getElementById("post" + i).innerHTML = xhr.responseText;
		} 
	}
	xhr.open('get', thumbnailPaths[i], false);
	xhr.send();
}


/*
 *	Load all the posts and fetch all metadata for those posts
 * 	TODO:
 * 		- metadata fetching
 * 
 */

console.log('Loading post locations from posts.json');
var postArray = JSON.parse(fetch('posts.json'));	// posts.json contains list of all the posts
console.log('Success! Output: \n' + postArray); 	// for debugging

console.log('Loading posts metadata from paths in posts.json');
var xhr = new XMLHttpRequest();

var postPath;													// post directory
var postMetadata = JSON.parse(fetch(postPath + '/meta.json'));	// parse the metadata file. located within post directory



// for everything in the postArray, load it
for (let i = 0; i < postArray.length; i++)
{
	xhr.onreadystatechange = function() 
	{
		if (xhr.readyState == 4 && xhr.status == 200)
		{
			// add in metadata fetching here ??
			console.log('Adding to page: ' + xhr.responseText)
			document.getElementById('post').innerHTML += xhr.responseText; // this is where the content is added in
		}
	}
	xhr.open('get', '/posts/' + postArray[i].paths + '/thumbnail.html', false);
	xhr.send();
}

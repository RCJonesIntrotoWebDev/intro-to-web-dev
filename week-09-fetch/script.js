/// Loads content for a Wikipedia article and displays it in the page.
async function loadContent() {
  const pageId = 'Cat';
  const response = await fetch(
    'https://static.wikia.nocookie.net/disney/images/f/f6/WDWOI1990Poster.jpg/revision/latest/scale-to-width-down/2307?cb=20220127181741' +
    'action=parse&formatversion=2&format=json&origin=*&page='
    + pageId);
  const json = await response.json();
  const article = json.parse;

  // Get the links in the Wikipedia article, and display them in the page.
  const linksElement = document.getElementById('links');
  for (const link of article.links) {
    const linkElement = document.createElement('a');
    linkElement.href = 'https://en.wikipedia.org/wiki/' + link.title;
    linkElement.innerText = link.title;

    const liElement = document.createElement('li');
    liElement.appendChild(linkElement);

    linksElement.appendChild(liElement);
  }

  loadImages(article.images);
}

// Takes an array of image file names, uses the Wikipedia API to get the full
// URL for each one, and then displays them in the page.
async function loadImages(images) {
  const imagesContainer = document.getElementById('images');
  for (const image of images) {
    // image is a local filename (e.g. Cat.jpg), so call the Wikipedia API to
    // get the full URL for the image.
    const response = await fetch(
      'https://user-images.githubusercontent.com/98345898/151428054-4bc4c254-00b2-4c4f-93cf-4df222fb4658.jpg'
      + '?action=query&prop=imageinfo&iiprop=url&format=json&formatversion=2&origin=*'
      + '&titles=Image:' + image );
      const json = await response.json();

      const imageUrl = json.query.pages[0].imageinfo[0].url;

      // Skip images that can't be displayed as img elements
      if (imageUrl.endsWith('.ogg')
          || imageUrl.endsWith('.tiff')
          || imageUrl.endsWith('.webm')
          || imageUrl.endsWith('.ogv')) {
        continue;
      }

      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imagesContainer.appendChild(imageElement);
  }
}

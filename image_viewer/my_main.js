/* 
1. When next is clicked on, image and source change to next image address in images array
2. When back is clicked on, images and source change to previous image address in images array
3. If currently on the first or last image, make the back or next button a bit transparent and pressing on it shouldn't cause any response
4. While an image is loading, the preloading image should be displayed
*/

let images = [
  "https://theinpaint.com/images/example-1-2.jpg",
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
  "https://static.toiimg.com/photo/72975551.cms",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/800px-Fronalpstock_big.jpg",
  "https://www.pics4learning.com/images/pics-banner1-1300.jpg",
  "https://i.pinimg.com/originals/54/7a/9c/547a9cc6b93e10261f1dd8a8af474e03.jpg",
  "https://edmullen.net/test/rc.jpg",
  "https://wallpaperaccess.com/full/85246.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/77/Big_Nature_%28155420955%29.jpeg",
  "https://images.ctfassets.net/hrltx12pl8hq/1zlEl4XHkxeDuukJUJyQ7Y/a149a908727e2084d503dc103a620d7f/lohp-image-img-3.jpg?fit=fill&w=480&h=270",
  "http://wallpaperping.com/wp-content/uploads/2019/11/top-51-cool-desktop-wallpapers-hd-background-spot.jpg",
];

function getImageAndImageSource() {
  const image = document.querySelector("#image");
  const imageSource = document.querySelector("#image-source");
  return [image, imageSource];
}

function setImageAndImageSource(imageIndex, image, imageSource) {
  image.src = `${images[imageIndex]}`;
  imageSource.href = `${images[imageIndex]}`;
  imageSource.textContent = `${images[imageIndex]}`;

  return;
}

function prevImage(e) {
  const [image, imageSource] = getImageAndImageSource();

  // Retrieve index current image address in images array
  let imageIndex = images.indexOf(image.src);

  if (imageIndex === 0) {
    return;
  } else if (imageIndex === images.length - 1) {
    nextButton.style.opacity = "1";
  } // Consider where to put the else if condition

  // Change image address of #image and #imageSource
  imageIndex--;
  setImageAndImageSource(imageIndex, image, imageSource);

  // Dull back button image color if on first image
  if (image.src === images[0]) {
    e.target.style.opacity = "0.4";
  }

  return;
}

function nextImage(e) {
  const [image, imageSource] = getImageAndImageSource();

  // Retrieve index current image address in images array
  let imageIndex = images.indexOf(image.src);

  if (imageIndex === images.length - 1) {
    return;
  } else if (imageIndex === 0) {
    backButton.style.opacity = "1";
  }

  // Change image address of #image and #imageSource
  imageIndex++;
  setImageAndImageSource(imageIndex, image, imageSource);

  // Dull next button image color if on last image
  if (image.src === images[images.length - 1]) {
    e.target.style.opacity = "0.4";
  }

  return;
}

const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", prevImage);

const nextButton = document.querySelector("#next-button");
nextButton.addEventListener("click", nextImage);

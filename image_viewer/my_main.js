/* 
1. When next is clicked on, image and source change to next image address in images array
2. When back is clicked on, images and source change to previous image address in images array
3. If currently on the first or last image, make the back or next button a bit transparent and pressing on it shouldn't cause any response
4. While an image is loading, the preloading image should be displayed
*/

let imageIndex = 0;

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

function setImageAndImageSource(imageIndex) {
  const image = document.querySelector("#image");
  const imageSource = document.querySelector("#image-source");
  image.src = "";
  image.src = `${images[imageIndex]}`;
  imageSource.href = `${images[imageIndex]}`;
  imageSource.textContent = `${images[imageIndex]}`;
}

const showImage = (move) => () => {
  if (move > 0) {
    if (imageIndex === images.length - 1) {
      return;
    }
    if (imageIndex === 0) {
      backButton.disabled = false;
    }
    if (imageIndex + move >= images.length - 1) {
      nextButton.disabled = true;
    }
  } else if (move < 0) {
    if (imageIndex === 0) {
      return;
    }
    if (imageIndex === images.length - 1) {
      nextButton.disabled = false;
    }
    if (imageIndex + move <= 0) {
      backButton.disabled = true;
    }
  }

  imageIndex = Math.max(Math.min(imageIndex + move, images.length - 1), 0);
  // Change image address of #image and #imageSource
  setImageAndImageSource(imageIndex);
};

const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");

backButton.addEventListener("click", showImage(-1));
nextButton.addEventListener("click", showImage(1));

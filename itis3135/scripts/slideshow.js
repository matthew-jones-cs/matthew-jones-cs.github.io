const notSlideCurrent = document.getElementById("thumbNail");
const currentImage = document.getElementById("current");
const imageListContainer = document.getElementById("imageListContainer");
const slideDisplay = document.getElementById("slideDisplay");
const defaultDisplay = document.getElementById("defaultDisplay");
const slideNavigation = document.getElementById("slideNavigation");

const imageAmount = 2;



function navigate()
{
    const id = event.target.id;

    if (id === "out")
    {
        slideDisplay.style.display = "none";
        defaultDisplay.style.display = "block"; 
    }
    else if (id === "next")
    {
        const currentImageIndex = parseInt(currentImage.src.substring(currentImage.src.indexOf("image_") + 6, currentImage.src.indexOf(".JPG")));
        currentImage.src = "images/slideshow_image_"+ ((currentImageIndex + 1) % (imageAmount)) + ".JPG";
    }
    else if (id === "previous")
    {
        const currentImageIndex = parseInt(currentImage.src.substring(currentImage.src.indexOf("image_") + 6, currentImage.src.indexOf(".JPG")));
        
        if(currentImageIndex === 0)
        {
            currentImage.src = "images/slideshow_image_"+ (imageAmount - 1) + ".JPG";
        }
        else
        {
            currentImage.src = "images/slideshow_image_"+ ((currentImageIndex - 1) % (imageAmount)) + ".JPG";
        }
    }
    else
    {
        return;
    }
}


function displayImage()
{
    slideDisplay.style.display = "block";
    defaultDisplay.style.display = "none";
    return;
}


notSlideCurrent.addEventListener("click", displayImage);
slideNavigation.addEventListener("click", navigate);




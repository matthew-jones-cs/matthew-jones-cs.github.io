const currentImage = document.getElementById("current");
const slideNavigation = document.getElementById("slideNavigation");
const caption = document.getElementById("figCaption");
const goTo = document.getElementById("imageListContainer");
const captions = ["M for Mac", "A for Airpod", "T for Time", "T for Time", "H for Hair", "E for Ear", "W for Wallet", "J for Jacket", "O for Old Spice", "N for Nintindo", "E for Ethernet", "S for Slides"];

const imageAmount = 12;



function navigate()
{
    const id = event.target.id;
    if (id === "next")
    {
        const currentImageIndex = parseInt(currentImage.src.substring(currentImage.src.indexOf("image_") + 6, currentImage.src.indexOf(".JPG")));
        currentImage.src = "images/slideshow_image_"+ ((currentImageIndex + 1) % (imageAmount)) + ".JPG";
        caption.innerText = captions[(currentImageIndex + 1) % (imageAmount)];
    }
    else if (id === "previous")
    {
        const currentImageIndex = parseInt(currentImage.src.substring(currentImage.src.indexOf("image_") + 6, currentImage.src.indexOf(".JPG")));
        
        if (currentImageIndex === 0)
        {
            currentImage.src = "images/slideshow_image_"+ (imageAmount - 1) + ".JPG";
            caption.innerText = captions[imageAmount - 1];
        }
        else
        {
            currentImage.src = "images/slideshow_image_"+ ((currentImageIndex - 1) % (imageAmount)) + ".JPG";
            caption.innerText = captions[(currentImageIndex - 1) % (imageAmount)];
        }
    }
    else
    {
        return;
    }
}

function go()
{
    if (event.target.id.match(/[0-9]/i))
    {
        currentImage.src = "images/slideshow_image_"+ (event.target.id) + ".JPG";
        caption.innerText = captions[event.target.id];
    }
    else
    {
        return;
    }
}


slideNavigation.addEventListener("click", navigate);
goTo.addEventListener("click", go);




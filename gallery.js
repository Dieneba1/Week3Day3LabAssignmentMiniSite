// Image sources for each gallery photo
const images = [
    "images/biscuit.jpg",
    "images/luna.jpg",
    "images/rocky.jpg",
    "images/mochi.jpg",
    "images/ziggy.jpg",
    "images/peanut.jpg",
    "images/daisy.jpg",
    "images/cooper.jpg",
    "images/willow.jpg",
    "images/bean.jpg"
  ];
  
  // Caption text shown below each image at all times
  const captionTexts = [
    "BISCUIT",
    "LUNA",
    "ROCKY",
    "MOCHI",
    "ZIGGY",
    "PEANUT",
    "DAISY",
    "COOPER",
    "WILLOW",
    "BEAN"
  ];
  
  // Description text shown only on hover
  const descTexts = [
    "A playful Labrador mix who loves belly rubs.",
    "A gentle cat who enjoys sunny windowsills.",
    "A loyal pit bull mix, great with kids.",
    "A curious kitten always chasing string.",
    "An energetic pup who loves fetch.",
    "A sweet senior cat looking for a quiet home.",
    "A shy dog who warms up fast with treats.",
    "A goofy retriever mix who loves the beach.",
    "A calm cat who loves to nap in laundry baskets.",
    "A tiny bundle of energy, best with an active family."
  ];
  
  let openList = "";
  
  for (let i = 0; i < images.length; i++) {
    let num = i + 1;
    let openCaptionTag = "<span class='caption'>";
    let closeCaptionTag = "</span>";
    let openDescTag = "<span class='description'>";
    let closeDescTag = "</span>";
  
    openList += "<li id='photo" + num + "' class='photo'>";
    openList += "<img src='" + images[i] + "' alt='" + captionTexts[i] + "'>";
    openList += openCaptionTag + captionTexts[i] + closeCaptionTag;
    openList += openDescTag + descTexts[i] + closeDescTag;
    openList += "</li>";
  }
  
  document.getElementById("galleryList").innerHTML = openList;
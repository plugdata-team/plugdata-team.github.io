const storeContainer = document.getElementById("storeContainer");
const carousel = document.getElementById("carousel");
let currentPage = 0;

window.addEventListener("resize", () => {});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

fetch("store.json")
  .then((response) => response.json())
  .then((jsonData) => {
    // Sort the array by "Release date"
    jsonData.Patches.sort((a, b) => {
      // Parse the "Release date" as a Date object for comparison
      let dateA = new Date(a["Release date"]);
      let dateB = new Date(b["Release date"]);

      // Compare the dates
      return dateB - dateA; // For ascending order, swap for descending if needed
    });

    jsonData.Patches.forEach((patch) => {
      // Create tile container
      const tile = document.createElement("div");
      tile.classList.add("tile");

      // Add thumbnail
      const thumb = document.createElement("img");
      thumb.src = patch.StoreThumb;
      thumb.alt = patch.Title;
      tile.appendChild(thumb);

      // Add content section
      const content = document.createElement("div");
      content.classList.add("tile-content");

      // Add title
      const title = document.createElement("h3");
      title.classList.add("tile-title");
      title.textContent = patch.Title;
      content.appendChild(title);

      // Add author
      const author = document.createElement("p");
      author.classList.add("tile-author");
      author.textContent = `By ${patch.Author}`;
      content.appendChild(author);

      // Add description
      const description = document.createElement("p");
      description.classList.add("tile-description");
      description.textContent = patch.Description;
      content.appendChild(description);

      // Price
      const price = document.createElement("span");
      price.classList.add("price");
      price.textContent = patch.Price;
      content.appendChild(price);

      tile.appendChild(content);
      tile.addEventListener("click", () => {
        window.location.href = `store-item.html?id=${encodeURIComponent(patch.Title)}`;
      });

      // Append tile to store container
      storeContainer.appendChild(tile);
    });

    const highlightData = {
      Highlights: [
        {
          Image: "thumbnails/freakytable.png",
          Data: jsonData.Patches.find(
            (patch) => patch.Title === "EB-FreakyTable",
          ),
        },
        {
          Image: "thumbnails/photosynthesis.png",
          Data: jsonData.Patches.find(
            (patch) => patch.Title === "Photosynthesis",
          ),
        },
      ],
    };

    function renderCarousel() {
      // Clear existing content
      carousel.innerHTML = "";

      // Create a slide for each highlight
      highlightData.Highlights.forEach((highlight, index) => {
        const slide = document.createElement("div");
        slide.classList.add("slide");

        slide.innerHTML = `
          <img src="${highlight.Image}" alt="${highlight.Title || "Highlight"}">
        `;

        // Add click event to open the popup if "Data" exists
        if (highlight.Data) {
          slide.addEventListener("click", () => {
            window.location.href = `store-item.html?id=${encodeURIComponent(highlight.Data.Title)}`;
          });
        }

        carousel.appendChild(slide);
      });

      // Set the initial slide position
      updateCarousel(0);
    }

    function updateCarousel(direction) {
      currentPage += direction;

      // Wrap around to the beginning or end if necessary
      if (currentPage < 0) {
        currentPage = highlightData.Highlights.length - 1;
      } else if (currentPage >= highlightData.Highlights.length) {
        currentPage = 0;
      }

      // Slide to the correct position
      carousel.style.transform = `translateX(-${currentPage * 100}%)`;
    }
    document
      .getElementById("prevButton")
      .addEventListener("click", () => updateCarousel(-1));
    document
      .getElementById("nextButton")
      .addEventListener("click", () => updateCarousel(1));

    renderCarousel();
    // Padding so that the last row doesn't get evenly spaced
    for (let i = 0; i < 8; i++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.style.height = 0;
      tile.style.visibility = "hidden";
      storeContainer.appendChild(tile);
    }
  });

const smallImageContainers = document.querySelectorAll(".sm-inner-div");
const bigImageContainer = document.querySelector(".big-img-container");
const mainSearch = document.getElementById("main-search");
const searchModal = document.getElementById("search-modal");

let pData = [];

const searchHandler = (e) => {
  if (pData.length === 0) {
    return;
  }
  searchModal.innerHTML = "";
  const pDataArray = Object.values(pData);
  const searchValue = e.target.value.trim().toLowerCase();
  if (searchValue.length === 0) {
    searchModal.classList.add("d-none");
    return;
  }
  const filteredArray = pDataArray.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchValue) ||
      item.brand.toLowerCase().includes(searchValue)
    );
  });
  if (filteredArray.length === 0) {
    searchModal.classList.add("d-none");
    return;
  }
  searchModal.classList.remove("d-none");
  filteredArray.forEach((item) => {
    searchModal.innerHTML += `
        <li class="d-flex flex-row justify-content-between w-100 text-black">
          <span class="py-1 px-3 text-black fw-normal align-self-end"> ${item.name}</span>
          <span class="py-1 px-3 text-black fw-normal align-self-end">Brand: ${item.brand}</span>
        </li>`;
  });
};

smallImageContainers.forEach((smallImageContainer) => {
  return (smallImageContainer.innerHTML = `

  <div
  class="sm-inner-div d-flex flex-column position-relative justify-content-between align-items-center"
>
  <img src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" class="w-100 h-100 rounded-3" />
  <div style= "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
  <div class="spinner-border text-black-50 role="status"> </div>
  </div>
</div>
            
          `);
});
bigImageContainer.innerHTML = `
<div
        class="sm-inner-div d-flex flex-column position-relative justify-content-between align-items-center"
      >
        <img src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png" class="w-100 h-100 rounded-3" />
        <div style= "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div class="spinner-border text-black-50 role="status"> </div>
        </div>
      </div>
`;

// Event Listeners

// Search Event

mainSearch.addEventListener("input", searchHandler);
mainSearch.addEventListener("blur", function () {
  searchModal.classList.add("d-none");
});

// Fetch Data for Products' information
async function fetchData() {
  try {
    const response = await fetch(
      " https://case-test-8cd5d-default-rtdb.firebaseio.com/products.json"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    pData = data;

    smallImageContainers.forEach((smallImageContainer, index) => {
      return (smallImageContainer.innerHTML = `
  
      <img id = "${pData[`p${index + 1}`].id}" src="${
        pData[`p${index + 1}`].img
      }" class="small-img" />
      <div class= "d-flex flex-md-row flex-column justify-content-between px-3 w-100 align-items-center">
      <p
        class="fw-bold w-100"
      >
      ${pData[`p${index + 1}`].name}
      </p>
      <p
          class="py-1 px-3 bg-white text-accent-color rounded-5 fw-normal"
          >$${pData[`p${index + 1}`].price}
          </p>
      </div>
 `);
    });
    bigImageContainer.innerHTML = `
      <div id="${
        pData["p5"].id
      }" class="d-flex flex-row justify-content-between w-100">
                  <span
                    class="py-1 px-3 bg-black text-white rounded-5 fw-normal align-self-end"
                    >SALE %${pData["p5"].sale * 100}</span
                  >
                  <span
                    class="py-1 px-3 bg-white text-accent-color rounded-5 fw-normal align-self-end"
                    >$${pData[`p5`].price * pData[`p5`].sale}</span
                  >
                </div>
                <img src="./assets/images/sneakers-imgs/af-shadow.png" />
                <p class="h3 fw-bold w-100 text-start">
                ${pData[`p5`].name}
                </p>
                <p class="text-start w-100 text-black-50">Brand: ${
                  pData[`p5`].brand
                }</p> `;
  } catch (error) {
    console.error("Hata:", error);
    error = true;
  }
}

fetchData();

export const searchEvent = ( pData ) => {
const mainSearch = document.getElementById("main-search");
const searchModal = document.getElementById("search-modal");

const searchHandler = (e) => {
    console.log('tahts the search handler')
    if (pData.length === 0) {
        console.log('no data')
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
  

mainSearch.addEventListener("input", searchHandler);
mainSearch.addEventListener("blur", function () {
  searchModal.classList.add("d-none");
});
}
export const largeProduct = (pData) => {
  const lgContainerTemplate = `
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
            <img src="${pData[`p5`].img}" />
            <p class="h3 fw-bold w-100 text-start">
            ${pData[`p5`].name}
            </p>
            <p class="text-start w-100 text-black-50">Brand: ${
              pData[`p5`].brand
            }</p> `;
  return lgContainerTemplate;
};

export const smallProduct = (pData, index) => {
  const smContainerTemplate = `<img id = "${pData[`p${index + 1}`].id}" src="${
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
        </div>`;
  return smContainerTemplate;
};

const Slider = () => {
    const template = `
    <div
    id="carouselExampleIndicators"
    class="carousel slide slider-container"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="w-100 h-100">
      <div class="carousel-item active slider-1 text-white w-100 h-100 position-relative">
        <div class="phones d-none d-md-block"></div>
        <div class="h-100 position-relative d-flex flex-column align-items-start justify-content-center">
          <div class="slider-main-content z-2">
            <h1 class="slider-title display-5 fw-bold text-white mb-5">GET THE NEW IPHONE 12 PRO</h1>
            <p class="slider-text text-white mb-5">
              A transformative triple-camera system that adds tons of
              capability without complexity
            </p>
            <div class="w-100 m-0 p-0 d-flex  flex-column flex-lg-row gap-5 justify-content-start align-items-lg-center align-items-start">
              <button
                class="btn btn-accent-color text-white border-0 p-2 px-4"
              >
                Buy Now<i class="bi bi-bag-plus-fill ps-3"></i>
              </button>
              <button
                class="btn btn-whitish-bg-color text-white p-2 px-4 border-0 bg-opacity-10"
              >
                With $599 with trade-in
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item slider-2 text-white w-100 h-100 position-relative">
        <div class="phones d-none d-md-block"></div>
        <div class="h-100 position-relative d-flex flex-column align-items-start justify-content-center text-white">
          <div class="slider-main-content">
            <h1 class="slider-title display-5 fw-bold text-white mb-5">GET THE NEW IPHONE 12 PRO</h1>
            <p class="slider-text text-white mb-5">
              A transformative triple-camera system that adds tons of
              capability without complexity
            </p>
            <div class="w-100 m-0 p-0 d-flex  flex-column flex-lg-row gap-5 justify-content-start align-items-lg-center align-items-start">
              <button
                class="btn btn-accent-color text-white border-0 p-2 px-4"
              >
                Buy Now<i class="bi bi-bag-plus-fill ps-3"></i>
              </button>
              <button
                class="btn btn-whitish-bg-color text-white p-2 px-4 border-0 bg-opacity-10"
              >
                With $599 with trade-in
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item slider-3 text-white w-100 h-100 position-relative">
        <div class="phones d-none d-md-block"></div>
        <div class="h-100 position-relative d-flex flex-column align-items-start justify-content-center text-white">
          <div class="slider-main-content">
            <h1 class="slider-title display-5 fw-bold text-white mb-5">GET THE NEW IPHONE 12 PRO</h1>
            <p class="slider-text text-white mb-5">
              A transformative triple-camera system that adds tons of
              capability without complexity
            </p>
            <div class="w-100 m-0 p-0 d-flex  flex-column flex-lg-row gap-5 justify-content-start align-items-lg-center align-items-start">
              <button
                class="btn btn-accent-color text-white border-0 p-2 px-4"
              >
                Buy Now<i class="bi bi-bag-plus-fill ps-3"></i>
              </button>
              <button
                class="btn btn-whitish-bg-color text-white p-2 px-4 border-0 bg-opacity-10"
              >
                With $599 with trade-in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;
    return template;
};

export default Slider;
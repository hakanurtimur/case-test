const Header = () => {
    const template = `
    <div
    class="container-fluid pe-5 ps-5 pb-4 pt-3 d-flex justify-content-between align-items-center"
  >
    <div class="logo-container"></div>
    <form class="d-lg-flex d-none" role="search">
      <div class="input-box position-relative">
        <input
          id="main-search"
          type="text"
          placeholder="Search For Products, Brands & Categories"
        />
        <i class="bi bi-search"></i>
        <ul id="search-modal" class="p-0 w-100 h-auto d-none bg-white position-absolute top-100 start-0 z-3 rounded-3 border mt-1  border-sub-border-color border-2">
        </ul>
      </div>
    </form>
    <div class="d-flex flex-row align-items-center justify-content-between gap-5">
      <div class="p-0 position-relative btn">
        <i class="bi bi-heart i-heart h5"></i>
        <span
          class="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger"
        >
          1
        </span>
      </div>
      <div class="p-0 position-relative btn">
        <i class="bi bi-person h4"></i>
        <span
          class="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger"
        >
          2
        </span>
      </div>
      <div class="p-0 position-relative btn">
        <i class="bi bi-cart3 h4"></i>
        <span
          class="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger"
        >
          1
        </span>
      </div>
    </div>
  </div>`
    return template
}

export default Header

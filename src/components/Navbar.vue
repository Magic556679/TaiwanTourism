<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent ps-5 pt-5">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/logo.png" alt="">
        <img src="@/assets/images/logotitle.png" alt="" class="ps-3">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">熱門景點</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">熱門美食</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">熱門住宿</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
// .navbar {
//   position: fixed;
// }
</style>

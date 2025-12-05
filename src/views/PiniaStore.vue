<template>
  <div>
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <span class="navbar-brand" href="#">臭臭餅乾店</span>
        <button type="button" class="btn nav-link">
          購物車
          <span class="badge rounded-pill bg-danger text-white">5</span>
        </button>
      </div>
    </nav>

    <div class="bg-light p-4 my-4">
      <div>購物車沒有任何品項</div>
      <table class="table align-middle">
        <tbody>
          <tr>
            <td width="100">
              <a href="#" class="text-dark"><i class="fas fa-times"></i></a>
            </td>
            <td width="100">
              <img
                src="https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80"
                class="table-image" alt="" />
            </td>
            <td>爽快快的</td>
            <td width="200">
              <select name="" id="" class="form-select">
                <option value="1">1</option>
              </select>
            </td>
            <td width="200" class="text-end">$900</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" class="text-end">總金額 NT$ 1000</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="row row-cols-3 my-3">
      <div class="col">
        <div class="card">
          <img
            src="https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80"
            class="card-img-top" alt="..." />
          <div class="card-body">
            <h6 class="card-title">
              爽快快的
              <span class="float-end">$60</span>
            </h6>
            <a href="#" class="btn btn-outline-primary w-100">加入購物車</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-img-top {
  object-fit: cover;
  height: 200px;
}

.table-image {
  width: 75px;
  height: 75px;
  object-fit: cover;
}
</style>
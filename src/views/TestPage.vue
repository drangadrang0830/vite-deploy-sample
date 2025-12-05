<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link class="list-group-item list-group-item-action" aria-current="true"
          to="/testpage/easycomponents">簡單組件
        </router-link>
        <router-link class="list-group-item list-group-item-action" aria-current="true" to="/testpage/gridview">可搜尋排序的表格
        </router-link>

      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>

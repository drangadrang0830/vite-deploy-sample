<script setup>
import { RouterLink, RouterView } from 'vue-router'
import "bootstrap"
// import HelloWorld from './components/HelloWorld.vue'
</script>

<style lang="scss">
@import 'bootstrap/dist/css/bootstrap.css';
</style>

<template>
  <div>
    <!-- <HelloWorld msg="You did it!" /> -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">首頁</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">關於</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/aboutcopy">關於複製</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                課程練習
              </a>
              <ul class="dropdown-menu">
                <li>
                  <RouterLink class="nav-link" to="/attribute">屬性綁定</RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link" to="/ifandfor">條件與循環</RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link" to="/formcontrol">表單綁定</RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link disabled" to="/shoppingstore">商店(未成功)</RouterLink>
                </li>
                <li>
                  <RouterLink class="nav-link" to="/piniastore">PiniaStore</RouterLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/testpage">練習用</RouterLink>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <div class="container pt-2">
      <RouterView />
    </div>
  </div>
</template>
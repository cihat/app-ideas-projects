<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #563f7a"
  >
    <router-link to="/" tag="a" class="navbar-brand">
      Post App with MEVN
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          active-class="active"
          to="/"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">Posts</a>
        </router-link>
        <router-link
          active-class="active"
          to="/posts/add"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">Post Ekle</a>
        </router-link>
        <router-link
          active-class="active"
          to="/posts/edit"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">Post Edit</a>
        </router-link>
        <router-link
          active-class="active"
          to="/not-found"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">Not Found</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

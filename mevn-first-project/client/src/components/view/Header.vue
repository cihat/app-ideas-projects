<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #563f7a"
  >
    <router-link to="/" tag="a" class="navbar-brand">
      ToDo App with MongoDB
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          active-class="active"
          to="/todos"
          tag="li"
          class="nav-item"
        >
          <a class="nav-link">ToDo Ekle</a>
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

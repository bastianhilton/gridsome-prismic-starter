<template>
  <div class="layout">
    <header class="header">
      <section data-bs-version="5.1" class="nichem5 menu menu1 cid-txFeNPSqts" once="menu" id="menu01-7">

        <nav class="navbar navbar-dropdown navbar-expand-lg">
          <div class="container-fluid">
            <div class="navbar-brand">
              <span class="navbar-logo">
                <a href="/">
                  <img src="../assets/images/logo.png" alt="" style="height: 5.1rem;">
                </a>
              </span>

            </div>
            <div class="navbar-buttons mbr-section-btn"><a class="btn btn-lg btn-info display-4"
                href="https://www.gridsome.org" target="_blank">Get
                Started</a></div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse"
              data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true">
                <li class="nav-item"><a class="nav-link link text-white text-primary display-4" href="/about">
                    About us</a></li>
                <li class="nav-item"><a class="nav-link link text-white text-primary display-4" href="/blog">Blog</a>
                </li>
                <li class="nav-item"><a class="nav-link link text-white text-primary display-4"
                    href="/contact">Contacts</a>
                </li>
              </ul>


            </div>

          </div>
        </nav>
      </section>
    </header>
    <slot />
    <section data-bs-version="5.1" class="nichem5 footer2 cid-txFek2N27s" once="footers" id="footer02-3">





      <div class="container">
        <div class="media-container-row align-center mbr-white">
          <div class="col-12">
            <p class="mbr-text mb-0 mbr-fonts-style display-4">
              © Copyright 2030 <a href="/">Gridsome Prismic Starter</a> - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<static-query>
  query {
  metadata {
  siteName
  }
  }
</static-query>

<style>

</style>
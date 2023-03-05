# Starter for Gridsome + Prismic

This is the project you get when you run `gridsome create new-project`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create gridsome-starter-prismic` to install starter
2. `cd gridsome-starter-prismic` to open the folder
3. Rename .sample.env to .env
4. Enter repository name from your Prismic settings and now you can query data from Prismic
5. `gridsome develop` to start a local dev server at `http://localhost:8080`
6. Happy Coding

# Be Aware #

### Because the way the included module works, you must first set your prismic repository name inside of your .env file before starting this template or it will fail.

Examples of how to query data would be:

<template>
  <Layout>
    <section data-bs-version="5.1" class="content7 cid-txzqCUPk3D mbr-fullscreen" id="content7-3">
      <div class="container-fluid">
        <div class="row">
          <div class="row row-wrapper" v-for="edge in $page.prismic.blogs.edges" :key="edge.node.id">
            <div class="col-12 col-lg-6 image-card">
              <div class="image-wrapper">
                <g-img :src="edge.node.image" :alt="edge.node.name" />
              </div>
            </div>
            <div class="col-12 col-lg-6 text-card">
              <div class="text-wrapper">
                <h2 class="mbr-section-title mbr-fonts-style display-2">Hey, I'm Prismic</h2>
                <a class="link-wrapper" href="#">
                  <p class="mbr-link mbr-fonts-style display-4" v-html="edge.node.name"></p>
                </a>
                <p class="mbr-text mbr-fonts-style display-7" v-html="edge.node.description"></p>
              </div>
            </div>
          </div>
          <div class="blur-circle"></div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
  prismic {
    blogs: allBlogs {
      edges {
        node {
          name
          description
          excerpt
          image
        }
      }
    }
  }
}
</page-query>



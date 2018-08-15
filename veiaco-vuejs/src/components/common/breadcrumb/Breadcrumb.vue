<template>
<div>
  <b-breadcrumb :items="breadcrumbList"/>
</div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbList: []
    }
  },
  mounted() {
    this.updateList()
  },
  watch: {
    '$route' () {
      this.updateList()
    }
  },
  methods: {
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb
    }
  },
}
</script>

<style scoped>
div > ol {
  background-color: #ffc107 !important;
}

div > ol > li > a,
span {
  color: yellow !important;
  font-size: 18px;
}
</style>

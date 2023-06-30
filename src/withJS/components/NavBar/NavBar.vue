<template>
  <div class="nav-bar">
    <!-- logo -->
    <div class="nav-bar--logo">
      <img :src="Logo" alt="logo" />
    </div>
    <!-- page -->
    <div class="nav-bar--pages">
      <RouterLink to="/with-ts" active-class="active-class">
        TS 가 적용된 page
      </RouterLink>
      <RouterLink to="/with-js" active-class="active-class">
        JS 가 적용된 page
      </RouterLink>
    </div>
    <!-- github -->
    <a target="_blank" href="https://github.com/mg5566/auto-project">
      Go to Git Hub
    </a>
  </div>
</template>

<script setup>
  import Logo from '../../../assets/vue.svg';
</script>

<style scoped lang="scss">

  .nav-bar {
    background-color: #634fb6;
    color: white;

    // layout
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 1rem;

    height: 4rem;

    &--logo {
      // img 를 block 중앙에 배치하기
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &--pages {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      gap: 1rem;
    }
  }

  .active-class {
    color: #fed03e;
    font-weight: bold;
  }
</style>

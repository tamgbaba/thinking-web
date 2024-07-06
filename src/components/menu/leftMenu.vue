<script setup lang="ts">
import { defineComponent, reactive } from 'vue';


interface MenuItem {
  title: string;
  subMenuOpen: boolean;
  subMenu: { title: string; route: string }[];
}
 const menuItems: MenuItem[] = reactive([
      {
        title: 'Dashboard',
        subMenuOpen: false,
        subMenu: [
          { title: 'Overview', route: '/dashboard/overview' },
          { title: 'Analytics', route: '/dashboard/analytics' }
        ]
      },
      {
        title: 'Products',
        subMenuOpen: false,
        subMenu: [
          { title: 'All Products', route: '/products/all' },
          { title: 'Add Product', route: '/products/add' }
        ]
      },
      // Add more menu items as needed
    ]);
  const toggleSubMenu = (index: number) => {
      menuItems[index].subMenuOpen = !menuItems[index].subMenuOpen;
    };
    
</script>

<template>
<div>
    <div class="menu-container">
    <!-- 侧边栏菜单 -->
    <nav class="sidebar">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <button @click="toggleSubMenu(index)">
            {{ item.title }}
            <span v-if="item.subMenuOpen">&#9650;</span>
            <span v-else>&#9660;</span>
          </button>
          <!-- 子菜单 -->
          <transition name="fade">
            <ul v-if="item.subMenuOpen">
              <li v-for="(subItem, subIndex) in item.subMenu" :key="subIndex">
                <router-link :to="subItem.route">{{ subItem.title }}</router-link>
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </nav>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<style scoped>
.menu-container {
  display: flex;
  height: 100%;
}

.sidebar {
  width: 250px;
  background-color: #333;
  color: #fff;
  padding-top: 20px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  /* margin-bottom: 10px; */
}

.sidebar button {
  background: none;
  border: none;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.sidebar button:hover {
  background-color: #555;
}

.sidebar ul ul {
  /* padding-left: 20px; */
  display: none;
}

.sidebar ul ul li {
  /* margin-bottom: 5px; */
}

.sidebar ul ul li a {
  color: #fff;
  text-decoration: none;
  /* padding: 5px 0; */
  display: block;
}

.main-content {
  flex: 1;
  /* padding: 20px; */
}
</style>
<template>
  <v-app id="inspire">
    <Teleport to=".titlebar">
      <v-toolbar
        id="MainToolbar"
        @click="drag()"
        class="px-0"
        flat
        height="1rem"
        density="compact"
      >
        <v-btn class="rounded-0 text-capitalize" size="small">
          File
          <v-menu activator="parent" location="bottom left">
            <v-list density="compact" nav :lines="false">
              <v-list-item
                v-for="(item, index) in fileMenu"
                :key="index"
                :value="index"
              >
                <v-list-item-title
                  class="text-capitalize"
                  v-text="item.label"
                />
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
        <v-spacer />
        <v-btn size="x-small" icon @click="appWindow.minimize()">
          <v-icon>mdi-window-minimize</v-icon>
        </v-btn>
        <v-btn size="x-small" icon @click="appWindow.maximize()">
          <v-icon>mdi-window-maximize</v-icon>
        </v-btn>
        <v-btn size="x-small" icon @click="appWindow.close()">
          <v-icon>mdi-window-close</v-icon>
        </v-btn>
      </v-toolbar>
    </Teleport>

    <v-main>
      <text-editor />
    </v-main>
  </v-app>
</template>

<script setup>
import TextEditor from "./components/TextEditor.vue";
import { appWindow } from "@tauri-apps/api/window";
import { onMounted, ref } from "vue";

onMounted(() => {
  //Add draggable
  const toolbarDragArea = document.querySelector(
    "#MainToolbar > .v-toolbar__content"
  );

  toolbarDragArea.setAttribute("data-tauri-drag-region", true);
  document.addEventListener('mousedown', (e) => {
	if (e.target.hasAttribute('data-tauri-drag-region') && e.buttons === 1) {
		e.detail === 2
			// only call maximize for Windows platform or other platforms that has this behavior for normal windows ?
			? appWindow.maximize()
            : appWindow.drag();
	}
})
});
const fileMenu = [
  {
    label: "Open file",
    action: () => {},
  },
];
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>

# AUTO Project
# [DEMO PAGE](https://auto-project-seven.vercel.app/)
page 구성
1. /root - /with-ts 로 redirection
2. /with-ts - ts 적용 page
3. /with-js - js 적용 page (ts 없음)
4. other paths - 그 외 page 들은 fallback 처리

# Project start
```shell
$ yarn
$ yarn dev
```
## Project Init Settings
1. yarn 사용
2. vite
3. Pinia
4. TypeScript
5. vue 최신버전 사용 (3.3+)
6. storybook 사용
7. vue-router@4
8. grid-layout-next
9. element plus
10. lodash

## grid layout plus

vue3 에서 사용가능한 grid layout 라이브러리를 적용합니다.

[grid-layout-next](https://github.com/qmhc/grid-layout-plus)

## 요구사항

1. resizable
2. draggable
3. add element using drag from outside

---

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

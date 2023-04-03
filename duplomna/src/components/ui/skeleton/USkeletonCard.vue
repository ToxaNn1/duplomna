<template>
  <el-skeleton animated>
    <template #template>
      <el-skeleton style="--el-skeleton-circle-size: 100px">
        <template #template>
          <el-skeleton-item variant="h3" style="width: 50%" />
          <el-skeleton-item variant="text" style="margin-right: 16px" />
          <el-skeleton-item variant="text" style="width: 30%" />
        </template>
      </el-skeleton>
    </template>
  </el-skeleton>
</template>

<script setup lang="ts"></script>

<style scoped></style>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <p>{{ ts("test") }}</p>
  </el-row>
</template>
<script lang="ts" setup>
import { useScopedI18n } from "@/utils/scopedI18n";

const { ts } = useScopedI18n("global");
</script>

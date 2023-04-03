<template>
  <u-wrapper-card>
    <el-skeleton animated>
      <template #template>
        <div class="flex gap-[20px] items-center flex-col">
          <el-skeleton-item
            v-for="item in Number(countOfLines)"
            :key="item"
            variant="h3"
            class="!h-[50px] w-full"
          />
        </div>
      </template>
    </el-skeleton>
  </u-wrapper-card>
</template>

<script setup lang="ts">
import UWrapperCard from "@/components/ui/UWrapperCard.vue";
import { StringOrNumber } from "@/types/global";

defineProps<{ countOfLines: StringOrNumber }>();
</script>

<style scoped></style>

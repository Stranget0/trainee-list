<template>
  <SectionTitle>{{ props.title }}</SectionTitle>
  <component
    :is="props.as"
    class="bg-slate-200 p-2 grid gap-4  md:grid-cols-[2fr,1fr] md:grid-rows-none"
    :class="props.containerClass"
		v-bind="$attrs"
  >
    <section class="box" :class="props.leftContainerClass">
      <slot>Content</slot>
    </section>
    <section class="box" :class="props.rightContainerClass">
      <slot name="aside">Aside</slot>
    </section>
  </component>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    title: string
    containerClass?: string
    leftContainerClass?: string
    rightContainerClass?: string
    as?: keyof HTMLElementTagNameMap
  }>(),
  { containerClass: 'mx-2 my-8', as: 'div' }
)
</script>

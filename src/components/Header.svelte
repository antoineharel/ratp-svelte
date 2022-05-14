<script lang="ts">
  import type { LineType } from "../lib/ratp";

  export let icon: LineType;
</script>

<h2 class="flex items-center gap-1 sm:gap-1.5 text-xl font-semibold sm:text-xl md:text-2xl">
  <img alt="" class="w-6 sm:w-7 md:w-8" src={`/img/${icon}.svg`} />
  <slot />
</h2>

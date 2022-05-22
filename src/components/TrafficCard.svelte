<script lang="ts">
  import { Link } from "svelte-navigator";

  import { cx } from "../lib/cx";
  import type { LineTraffic, LineType } from "../lib/ratp";

  export let traffic: LineTraffic;
  export let type: LineType;

  $: hasWorks = traffic.slug.includes("trav");
  $: hasIncidents = traffic.slug === "critical";
  $: classNames = cx("relative flex-shrink-0 p-1.5 sm:p-2.5 transition-shadow bg-white shadow cursor-pointer hover:shadow-lg cursor rounded-lg sm:rounded-xl", {
    "ring-2 sm:ring ring-orange-300 bg-orange-50 hover:shadow-orange-200": hasWorks,
    "ring-2 sm:ring ring-red-500 bg-red-50 hover:shadow-red-200": hasIncidents,
  });
</script>

<div class="relative group">
  <div class="absolute hidden group-hover:block -translate-x-1/2 left-1/2 bottom-[calc(100%+10px)] rounded-lg w-72 p-4 space-y-1 text-sm bg-white shadow-xl z-[999999]">
    <div
      class={cx("font-semibold", {
        "text-green-600": traffic.slug === "normal",
        "text-red-500": hasIncidents,
        "text-orange-500": hasWorks,
      })}
    >
      {traffic.title}
    </div>
    <div>{traffic.message}</div>
  </div>
  <Link to={`/ligne/${type}/${traffic.line}`}>
    <div class={classNames}>
      <img class="w-7 sm:w-8" src={`/img/lines/${type}/${traffic.line}.svg`} alt={`Ligne ${traffic.line}`} />
    </div>
  </Link>
</div>

<script lang="ts">
  import TrafficGrid from "../components/TrafficGrid.svelte";
  import TrafficCard from "../components/TrafficCard.svelte";
  import { ratp } from "../lib/ratp";
  import { fly } from "svelte/transition";

  const traffic = ratp.traffic();
</script>

{#await traffic then traffic}
  <div class="flex items-center justify-center h-screen p-6">
    <div class="space-y-8 md:space-y-10 sm:w-[640px] mx-auto">
      <div class="space-y-3 sm:space-y-4" in:fly={{ y: 10, duration: 300 }}>
        <h2 class="flex items-center gap-1 sm:gap-1.5 text-xl font-semibold sm:text-xl md:text-2xl">
          <img class="w-6 sm:w-7 md:w-8" src="/img/metro.svg" />
          Métros
        </h2>
        <TrafficGrid>
          {#each traffic.metros as line}
            <TrafficCard type="metro" traffic={line} />
          {/each}
        </TrafficGrid>
      </div>
      <div class="space-y-3 sm:space-y-4" in:fly={{ y: 10, duration: 300, delay: 100 }}>
        <h2 class="flex items-center gap-1 sm:gap-1.5 text-xl font-semibold sm:text-xl md:text-2xl">
          <img class="w-6 sm:w-7 md:w-8" src="/img/rer.svg" />
          RER
        </h2>
        <TrafficGrid>
          {#each traffic.rers as line}
            <TrafficCard type="rer" traffic={line} />
          {/each}
        </TrafficGrid>
      </div>
      <div class="space-y-3 sm:space-y-4" in:fly={{ y: 10, duration: 300, delay: 200 }}>
        <h2 class="flex items-center gap-1 sm:gap-1.5 text-xl font-semibold sm:text-xl md:text-2xl">
          <img class="w-6 sm:w-7 md:w-8" src="/img/tramway.svg" />
          Tramway
        </h2>
        <TrafficGrid>
          {#each traffic.tramways as line}
            <TrafficCard type="tramway" traffic={line} />
          {/each}
        </TrafficGrid>
      </div>
    </div>
  </div>
{/await}

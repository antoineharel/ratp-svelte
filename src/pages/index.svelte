<script lang="ts">
  import TrafficGrid from "../components/TrafficGrid.svelte";
  import TrafficCard from "../components/TrafficCard.svelte";
  import Header from "../components/Header.svelte";
  import { traffic } from "../stores/data";
  import { fly } from "svelte/transition";
</script>

{#if $traffic}
  <div class="space-y-8 md:space-y-10 sm:w-[640px] mx-auto">
    <div class="space-y-3 sm:space-y-4" in:fly={{ y: 10, duration: 300 }}>
      <Header icon="metro">Métros</Header>
      <TrafficGrid>
        {#each $traffic.metros as line}
          <TrafficCard type="metro" traffic={line} />
        {/each}
      </TrafficGrid>
    </div>
    <div class="space-y-3 sm:space-y-4" in:fly={{ y: 10, duration: 300, delay: 100 }}>
      <Header icon="rer">RER</Header>
      <TrafficGrid>
        {#each $traffic.rers as line}
          <TrafficCard type="rer" traffic={line} />
        {/each}
      </TrafficGrid>
    </div>
    <div class="space-y-3 sm:space-y-4" in:fly={{ y: 10, duration: 300, delay: 200 }}>
      <Header icon="tramway">Tramway</Header>
      <TrafficGrid>
        {#each $traffic.tramways as line}
          <TrafficCard type="tramway" traffic={line} />
        {/each}
      </TrafficGrid>
    </div>
  </div>
{/if}

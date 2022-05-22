<script lang="ts">
  import { traffic } from "../../stores/data";

  import { Link, useParams } from "svelte-navigator";
  import { PluralLineType, ratp, Traffic } from "../../lib/ratp";
  import { cx } from "../../lib/cx";

  const params = useParams();

  const line = $traffic[`${$params.type}s` as keyof Traffic].find((line) => line.line === $params.id);

  const load = async () => {
    const stations = await ratp.stations(`${$params.type}s` as PluralLineType, line.line);

    return { stations };
  };

  const data = load();
</script>

<div class="space-y-5">
  <Link to="/" class="text-blue-500 rounded-lg font-medium bg-gray-100 hover:bg-gray-200 px-3 py-1 inline-block">← Retour</Link>
  <div class="flex space-x-1 md:space-x-2">
    <img class="w-8 md:w-16" src={`/img/${$params.type}.svg`} alt="$params.type" />
    <img class="w-8 md:w-16" src={`/img/lines/${$params.type}/${$params.id}.svg`} id="line-logo" alt={`Ligne ${$params.id}`} />
  </div>
  {#if line.slug !== "normal"}
    <div
      class={cx("p-4 mb-4 space-y-1 text-sm text-red-700 bg-red-100 rounded-lg ", {
        "bg-red-100 text-red-700": line.slug === "critical",
        "bg-orange-100 text-orange-700": line.slug === "normal_trav",
      })}
      role="alert"
    >
      <div class="font-medium">{line.title}</div>
      <div>
        {line.message}
      </div>
    </div>
  {/if}
  <div class="max-h-72 overflow-y-auto bg-white p-3 border">
    {#await data then data}
      {#each data.stations as station}
        <div class="font-medium">
          {station.name}
        </div>
      {/each}
    {/await}
  </div>
</div>

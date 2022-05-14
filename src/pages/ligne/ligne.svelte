<script lang="ts">
  import { useLocation, useParams } from "svelte-navigator";
  const params = useParams();

  console.log($params);
</script>

<div>ligne {$params.type} {$params.id}</div>

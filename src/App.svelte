<script>
  import TailwindCss from "./TailwindCSS.svelte";
  import { Router, Route } from "svelte-navigator";
  import Index from "./pages/index.svelte";
  import Ligne from "./pages/ligne/ligne.svelte";
</script>

<Router>
  <Route path="/" component={Index} />
  <Route path="/ligne/:type/:id" component={Ligne} />
</Router>
<TailwindCss />

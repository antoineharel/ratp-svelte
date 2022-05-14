<script>
  import TailwindCss from "./TailwindCSS.svelte";
  import { Router, Route } from "svelte-navigator";
  import Index from "./pages/index.svelte";
  import Ligne from "./pages/ligne/ligne.svelte";
  import Layout from "./components/Layout.svelte";
  import { traffic } from "./stores/data";
  import LoadingScreen from "./components/LoadingScreen.svelte";
</script>

{#if $traffic}
  <Layout>
    <Router primary={false}>
      <Route path="/" component={Index} let:navigate />
      <Route path="/ligne/:type/:id" component={Ligne} let:navigate />
    </Router>
  </Layout>
{:else}
  <LoadingScreen />
{/if}
<TailwindCss />

<script>
import Button from '$lib/components/Button/Button.svelte';
import Badge from '$lib/components/Badge/Badge.svelte';

</script>

<Badge  size="lg" variant="outline"  color="primary">Hello</Badge>
<Badge  size="lg" variant="glass" color="primary">Hello</Badge>
<Badge  size="lg" variant="ghost" color="primary">Hello</Badge>
<Badge  size="lg" variant="link" color="primary">Hello</Badge> 
<Badge  size="lg" variant="dot" color="primary">Hello</Badge>
<Badge  size="lg" variant="dot" color="natural">Hello</Badge>
<Badge  size="lg" variant="dot" color="error">Hello</Badge>
<Badge  size="lg" variant="dot" class="before:bg-cyan-500 !text-cyan-500">Hello</Badge>
<Button color="primary" >Notifications <Badge >14</Badge></Button>
<Button color="primary" variant="outline" >Notifications <Badge >14</Badge></Button>
<Button color="secondary" variant="outline" >Notifications <Badge >14</Badge></Button>
<Button color="success" variant="outline" >Notifications <Badge >14</Badge></Button>
<Button color="error" variant="outline" >Notifications <Badge >14</Badge></Button>
<Button color="accent" variant="outline" >Notifications <Badge >14</Badge></Button>
<Button color="info" variant="outline" >Notifications <Badge >14</Badge></Button>
<Button color="natural" variant="outline" >Notifications <Badge >14</Badge></Button>
<Button color="warning" variant="outline" >Notifications <Badge >14</Badge></Button>
<Button color="warning" variant="outline" >Notifications <Badge >14</Badge></Button>
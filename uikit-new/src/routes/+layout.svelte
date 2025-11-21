<script>
    import '../app.css';
    import '$lib/css/themes/fluent.css';
    import '$lib/css/themes/polaris.css';

    let {children} = $props()
</script>

<div class="main" data-theme="polaris">
	{@render children()}
</div>

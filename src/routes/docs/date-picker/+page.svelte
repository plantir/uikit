<script>
	import DatePicker from "$lib/components/DatePicker/DatePicker.svelte";
	import Icon from "$lib/components/Icon/Icon.svelte";

    let value = ''
    let formattedValue = ''
    let value2  = []
    let formattedValue2 = []

$:console.log(value2)
$:console.log(formattedValue2)
</script>


<div>
    value: {value}

</div>
<div>
    formated value: {formattedValue}

</div>
<DatePicker bind:formattedValue bind:value></DatePicker>
<br class="mb-4" />


<div>
    value: {value2}

</div>
<div>
    formated value: {formattedValue2}

</div>
<DatePicker bind:formattedValue = {formattedValue2} bind:value = {value2} range>
<Icon name = "DataDrivenModelMinor" slot = 'start' />
<Icon name = "DataDrivenModelMinor" slot = 'end' />
</DatePicker>
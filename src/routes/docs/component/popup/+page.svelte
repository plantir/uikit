<script lang="ts">
	import Title from '$lib/DocsComponent/Doc/Title.svelte';
	import SampleWrapper from '$lib/DocsComponent/Samples/SampleWrapper.svelte';
	import PropTable from '$lib/DocsComponent/ComponentCode/PropTable.svelte';
	import TagCode from '$lib/DocsComponent/ComponentCode/TagCode.svelte';
	import { Button, Popup } from '$lib/index.js';
    let props = [
            {
                name: 'placement',
                type: `'left' | 'right' | 'top' | 'bottom'`,
                default: 'bottom'
            },
            {
                name: 'open',
                type: `'true' | 'false'`,
                default: 'false'
            },
            {
                name: 'offset',
                type: `number`,
                default: '4'
            },
        ];

</script>

<div class="component-wrapper">
	<h1>Popup</h1>
	<p>
		The Popup component show some extra contents when some other action is done e.g a button is clicked.
	</p>

	<Title id="default" title="Default" />

	<SampleWrapper>
		<div slot="javascript">
            <TagCode name="script">
                import Button from '$lib/components/Button/Button.svelte';
                import Popup from '$lib/components/Popup/Popup.svelte';
            </TagCode>
		</div>
		<div slot="html">
			<TagCode name="Popup">
				<TagCode name="Button" props={['slot="toggler"']}>Open Popup</TagCode>
				<TagCode name="p">List of items...</TagCode>
			</TagCode>
		</div>
		<div slot="preview">
			<Popup>
				<Button slot="toggler">Open Popup</Button>
				List of items...
			</Popup>
		</div>
	</SampleWrapper>
    <Title id="props" title="Props" />
    
    <div class="flex">
        <PropTable items={props} />
    </div>
    
</div>

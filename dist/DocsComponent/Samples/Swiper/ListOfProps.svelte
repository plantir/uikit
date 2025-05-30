<script>
	import PropTable from '../../ComponentCode/PropTable.svelte';

	let items = [
		{
			name: 'slidesPerView',
			type: `string | number`,
			default: '6'
		},
		{
			name: 'spaceBetween',
			type: `string | number`,
			default: '10'
		},
		{
			name: 'centered',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'navigation',
			type: `boolean | swiper parameters`,
			default: 'false'
		},
		{
			name: 'pagination',
			type: `boolean | swiper parameters`,
			default: 'false'
		},
		{
			name: 'loop',
			type: `boolean`,
			default: 'false'
		},
		{
			name: 'breakpoints',
			type: `Object`,
			default: '320:SPV / 5 | 640: SPV / 3 | 768: SPV / 2 | 1024: SPV(SlidesPerView)'
		},
	];
</script>

<div>
	<PropTable {items} />
</div>

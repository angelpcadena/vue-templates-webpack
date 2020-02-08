<template>
	<div class="x-app">
		<x-header></x-header>
		<main>
			I'm in? oh yeah, oops
		</main>
	</div>
</template>

<script>
import Header from './components/Header'

export default {
	components: {
		XHeader: Header
	},
	data: () => {
		
	}
}
</script>

<style lang="scss">
	.x-app {
		background-color: lightgray;
		font-family: "Source Sans Pro";
		min-height: inherit;
	}
</style>
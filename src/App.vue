<template>
	<v-app>
		<v-navigation-drawer app clipped color="secondary">
		</v-navigation-drawer>
		<v-app-bar app clipped-left dark>
			<v-toolbar-title>My pretty test</v-toolbar-title>
		</v-app-bar>
		<v-content>
			<v-container>
				{{ description }}
			</v-container>
		</v-content>
		<v-footer app inset>
			&copy; {{ new Date().getFullYear() }} me
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data: () => {
		return {
			description: 'this is working'
		}
	}
}
</script>

<style lang="scss">
	
</style>
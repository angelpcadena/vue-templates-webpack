<template>
	<v-app>
		<v-navigation-drawer app clipped color="secondary" dark>
			<v-list>
				<v-list-item link>
					<v-list-item-icon>
						<v-icon>nn-user</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>
							Página
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
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
	@import './styles/overrides.scss';
</style>
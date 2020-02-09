<template>
	<v-app>
		<v-navigation-drawer app clipped color="secondary" dark v-model="showNav">
			<v-list>
				<v-list-item link v-for="route in routes" :key="route.name" :to="route.path">
					<v-list-item-icon>
						<v-icon>{{ route.meta.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>
							{{ route.meta.title }}
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar app clipped-left dark>
			<v-app-bar-nav-icon @click.stop="showNav = !showNav" class="d-md-none" />
			<v-toolbar-title class="pl-md-0">My pretty test</v-toolbar-title>
		</v-app-bar>
		<v-content>
			<v-container fluid>
				<router-view></router-view>
			</v-container>
		</v-content>
		<v-footer app inset>
			&copy; {{ new Date().getFullYear() }} me
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		showNav: true
	}),
	computed: {
		routes() {
			return this.$router.options.routes.filter(route => {
				return !route.meta.hidden
			})
		}
	}
}
</script>

<style lang="scss">
	@import './styles/overrides.scss';
</style>
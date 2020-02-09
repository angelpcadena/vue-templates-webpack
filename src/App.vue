<template>
	<v-app>
		<v-navigation-drawer app clipped color="secondary" dark v-model="showNav">
			<v-list>
				<v-list-item link v-for="route in $router.options.routes" :key="route.name" :to="route.path">
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
			<v-toolbar-title>My pretty test</v-toolbar-title>
		</v-app-bar>
		<v-content>
			<v-container>
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
	mounted() {
		
	}
}
</script>

<style lang="scss">
	@import './styles/overrides.scss';
</style>
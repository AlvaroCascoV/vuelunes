<template>
	<ul id="menu">
		<li>
			<router-link to="/">Home</router-link>
			|
		</li>
		<li>
			<router-link to="/collatz">Collatz</router-link>
			|
		</li>
		<li>
			<router-link to="/tablamultiplicar">Tablas</router-link>
			|
		</li>
	</ul>
</template>
<script>
	export default {
		name: "MenuComponent",
	};
</script>
<style>
	ul#menu li {
		display: inline;
	}
</style>

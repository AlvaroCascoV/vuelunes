<template>
	<h1>Collatz</h1>
	<label>Introduzca Numero:</label>
	<input type="number" v-model="numero" />
	<button v-on:click="generarCollatz">Generar Collatz</button>
	<ul>
		<li
			v-for="num in numeroscollatz"
			:key="num"
			v-html="$filters.evaluarNumero(num)"
		></li>
	</ul>
</template>
<script>
	export default {
		name: "CollatzComponent",
		data() {
			return {
				numero: 0,
				numeroscollatz: [],
			};
		},
		methods: {
			generarCollatz() {
				let aux = [];
				while (this.numero != 1) {
					if (this.numero % 2 == 0) {
						this.numero = this.numero / 2;
					} else {
						this.numero = this.numero * 3 + 1;
					}
					aux.push(this.numero);
				}
				this.numerosCollatz = aux;
			},
		},
	};
</script>

<style>
	ul li {
		display: block;
	}
</style>

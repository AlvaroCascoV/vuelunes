<template>
	<h1>Collatz</h1>
	<label>Introduzca Numero:</label>
	<input type="number" v-model="numero" />
	<button v-on:click="getCollatz">Collatz</button>
	<ul>
		<li v-for="numero in listacollatz" :key="numero">{{ numero }}</li>
	</ul>
</template>
<script>
	export default {
		name: "CollatzComponent",
		data() {
			return {
				numero: 0,
				listacollatz: [],
			};
		},
		methods: {
			getCollatz() {
				this.listacollatz = [];
				this.listacollatz.push(this.numero);
				while (this.listacollatz[this.listacollatz.length - 1] != 1) {
					if (this.numero % 2 == 0) {
						let num = this.numero / 2;
						this.listacollatz.push(num);
						this.numero = num;
					} else {
						let num = this.numero * 3 + 1;
						this.listacollatz.push(num);
						this.numero = num;
					}
				}
			},
		},
	};
</script>

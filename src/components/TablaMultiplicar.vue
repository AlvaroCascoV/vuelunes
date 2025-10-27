<template>
	<h1>Tabla de multiplicar</h1>
	<label>Introduzca Numero:</label>
	<input type="number" v-model="numero" />
	<button v-on:click="generarTabla()">Generar Tabla</button>
	<div id="contenedor">
		<table border="1" id="tablametodo">
			<thead>
				<tr>
					<th>OperacionM</th>
					<th>Resultado</th>
				</tr>
			</thead>
			<tbody v-html="tabla"></tbody>
		</table>
		<table border="1" id="tabladirectivas">
			<thead>
				<tr>
					<th>OperacionD</th>
					<th>Resultado</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="i in 10" :key="i">
					<td>{{ numero }} * {{ i }}</td>
					<td>{{ numero * i }}</td>
				</tr>
			</tbody>
		</table>
		<table border="1" id="tablafilters">
			<thead>
				<tr>
					<th>OperacionF</th>
					<th>Resultado</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="i in 10" :key="i">
					<td v-html="$filters.getOperacion(numero, i)"></td>
					<td v-html="$filters.getResultado(numero, i)"></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	export default {
		name: "TablaMultiplicar",
		data() {
			return {
				numero: 0,
				tabla: "",
			};
		},
		methods: {
			generarTabla() {
				let tablaAux = "";
				for (let i = 1; i <= 10; i++) {
					let operacion = this.numero + " * " + i;
					let resultado = this.numero * i;
					tablaAux +=
						"<tr><td>" + operacion + "</td><td>" + resultado + "</td></tr>";
				}
				this.tabla = tablaAux;
			},
		},
	};
</script>
<style>
	#contenedor {
		display: flex;
		justify-content: space-between;
	}
</style>

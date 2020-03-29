<template>
	<div id="app" class="container">
		<counter/>
		<p>{{message}}</p>
  	</div>
</template>

<script>
import Counter from './Components/Counter'
import { mapState, mapGetters } from 'vuex'

export default {
	name: 'app',
	components: {
		Counter
	},
	computed: {
		...mapGetters(['tripleCounter']),
		...mapState({
			contador: 'counter',
			message() {
				return "El contador es: " + this.contador + " y multiplicado por 3 es: " + this.tripleCounter
			}
		})
	}
}
</script>


<template>
	<div id="app" class="container">
		<counter/>
		<p>{{counter}}</p>
  	</div>
</template>

<script>
import Counter from './Components/Counter'

export default {
	name: 'app',
	components: {
		Counter
	},
	computed: {
		counter() {
            return this.$store.state.counter
        }
	}
}
</script>


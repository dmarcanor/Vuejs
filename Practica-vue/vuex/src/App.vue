<template>
	<div id="app" class="container">
		<counter/>
		<p>{{counter}}</p>
  	</div>
</template>

<script>
import Counter from './Components/Counter'
import store from './store'

export default {
	name: 'app',
	components: {
		Counter
	},
	computed: {
		counter() {
            return store.state.counter
        }
	}
}
</script>


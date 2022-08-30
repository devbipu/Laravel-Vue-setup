<template>
	<div>
		<h3>Home page</h3>
		<p>{{msg}}</p>
		<Button type="primary">Post</Button>
	</div>
</template>


<script>
	export default {
		name: 'Home',
		data(){
			return{
				msg: 'This is Front app'
			}
		},
		methods: {
			
			getInterCunn(){
				var incan = navigator.onLine;
				console.log(incan)
				return incan;
			}
		},
		created(){
			
			console.log(this.getInterCunn());
		},
		watch(){
			
				console.log(this.getInterCunn());
			
		}
	}
</script>
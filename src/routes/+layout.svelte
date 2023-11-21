<script>
	export const prerender = true;
</script>

<nav>
	<a href="/"><b>Home</b></a>
	<a href="/exercises"><b>Exercícios</b></a>
</nav>


<slot />

<style>

nav {
	height: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: gray;
	border: 1px solid gray;
}

a {
	height: 100%;
	width: 100px;
	color: white;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	
}

a:hover {
	background-color: white;
	color: gray;
}

</style>
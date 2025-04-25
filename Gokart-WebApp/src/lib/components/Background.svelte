<script>
	import myImage from '$lib/assets/background1.jpg?enhanced';

</script>

<enhanced:img
	src={myImage}
	alt="Background"
	style="
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		object-fit: cover;
		z-index: -1;
	"
/>

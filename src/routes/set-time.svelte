<script>
	let value

	async function setTime(event) {
		event.preventDefault()
		event.stopPropagation()
		const date = new Date()
		const [hour, minutes] = value.split(":")
		date.setHours(+hour, +minutes)
		const time = date.getTime()
		const res = await fetch('/player/when.json', { 
			method: 'POST', 
			body: JSON.stringify({time}),
			headers: { 'Content-Type': 'application/json' } 
		})
		console.log(await res.json())
	}
</script>

<svelte:head>
	<title>Set time</title>
</svelte:head>

<h1>Set time</h1>

<form class="form" on:submit={setTime}>
	<input type="time" bind:value class="input">
	<button class="button" on:click={setTime}>submit</button>
</form>
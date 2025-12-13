<script>
	let count = 0;
	let name = 'Svelte';

	$: count = count * 2;
</script>

<h1>Xin chào {name}!</h1>

<input bind:value={name} placeholder="Đổi tên ở đây" />

<p>
	Số hiện tại: <strong>{count}</strong> <br />
</p>

<button on:click={() => (count += 1)}> Tăng số </button>

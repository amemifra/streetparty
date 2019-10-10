<script>
    import { onMount } from 'svelte'
    let audio
    let paused = true
    let src = 'PAZZESKA.mp3';
    // fetch('PAZZESKA.mp3').then(res => res.body).then(sr => {
    //     src = sr
    // });
    //     const ctx = new AudioContext
    //     let destination = ctx.createMediaStreamDestination()
    //     ctx.decodeAudioData('')
    //     ctx.createMediaElementSource(audio)
    onMount(() => {
        const ctx = new AudioContext
        fetch('PAZZESKA.mp3').then(b => ctx.decodeAudioData(b.arrayBuffer()))
        ctx.createMediaElementSource(audio)
        // audio.autoplay = true
        // audio.play()
    })
</script>

<h1>Player</h1>

<audio {src} bind:this={audio} controls bind:paused autoplay></audio>
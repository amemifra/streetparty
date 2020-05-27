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
    onMount(async () => {
        const ctx = new AudioContext(audio)
        const source = ctx.createBufferSource()
        const res = await fetch('PAZZESKA.mp3')
        const arrayBuffer = await res.arrayBuffer()
        source.buffer = await ctx.decodeAudioData(arrayBuffer)
        source.connect(ctx.destination)
        const whenRes = await fetch('/player/when.json')
        const when = await whenRes.json()
        const now = Date.now()
        const delay = when - now
        console.log({when, now, delay, 1: delay > 0 ? delay / 1000 : 0, 2: delay > 0 ? 0 : -(delay / 1000)})
        
        source.start(delay > 0 ? delay / 1000 : 0, delay > 0 ? 0 : -(delay / 1000))
        
        // audio.autoplay = true
        // audio.play()
    })
</script>

<h1>Player</h1>

<audio {src} bind:this={audio}></audio>
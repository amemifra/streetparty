<script>
    import { onMount } from 'svelte'
    let audio
    let paused = true
    let src = '100 ROSE.m4a';
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

    function playWhen() {
        fetch('/api/when').then(r => r.text()).then(when => {
            const now = Date.now()
            const sec = ~~(now - when / 10) / 100
            if (now > when) {
                src = src + `#t=${sec}`
                console.log('past', sec)
                paused = false;
            } else {
                setTimeout(() => { console.log('future'); paused = false }, (when - now))
            }
            const newTime = Date.now + 8000
            // fetch(`/api/when/${newTime}`).then(r => r.text()).then(r => console.log(r))
        })
    } 
</script>

<h1>Player</h1>

<<<<<<< HEAD
<audio {src} bind:this={audio}></audio>
=======
<audio {src} bind:this={audio} bind:paused on:canplaythrough={playWhen()}></audio>
>>>>>>> d612ad2e2f796bce4c3e867194bc841c74fa4cab

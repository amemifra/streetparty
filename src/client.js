import * as sapper from '@sapper/app';
import { createProxyClient } from 'ipfs-postmsg-proxy';

const swName = 'ipfs-worker.js'
let node

sapper.start({
	target: document.querySelector('#sapper')
});


if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register(swName)
	.then((registration) => {
		node = createProxyClient({
			addListener: navigator.serviceWorker.addEventListener.bind(navigator.serviceWorker),
			postMessage: (data) => navigator.serviceWorker.controller.postMessage(data)
		})
	})
	.catch((err) => {
		console.log('-> Failed to register:', err)
	})
}
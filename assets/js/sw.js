// Check if the browser supports service workers and the beforeinstallprompt event
if ('serviceWorker' in navigator && 'beforeinstallprompt' in window) {
    // Register the service worker
    navigator.serviceWorker.register('/assets/js/sw.js').then(reg => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);

    }).catch(error => {
        console.error('Service worker registration failed:', error);
    });
}



// let deferredPrompt;
// var div = document.querySelector('.add-to');
// var button = document.querySelector('.add-to-btn');
// div.style.display = 'none';

// window.addEventListener('beforeinstallprompt', (e) => {
//     // Prevent Chrome 67 and earlier from automatically showing the prompt
//     e.preventDefault();
//     // Stash the event so it can be triggered later.
//     deferredPrompt = e;
//     div.style.display = 'block';

//     button.addEventListener('click', (e) => {
//         // hide our user interface that shows our A2HS button
//         div.style.display = 'none';
//         // Show the prompt
//         deferredPrompt.prompt();
//         // Wait for the user to respond to the prompt
//         deferredPrompt.userChoice
//             .then((choiceResult) => {
//                 if (choiceResult.outcome === 'accepted') {
//                     console.log('User accepted the A2HS prompt');
//                 } else {
//                     console.log('User dismissed the A2HS prompt');
//                 }
//                 deferredPrompt = null;
//             });
//     });
// });
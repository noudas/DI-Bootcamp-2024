// Goal of this Mini project
// This looks complex, but it’s pretty simple.

// Get the clicked element, or key press.
// Use it’s value to get the correct audio element.
// Play the audio element.
function playSound(fileName) {
    const sound = new Audio(`./sounds/${fileName}`);
    sound.play();
}

function addSoundListeners() {
    const keySoundMap = {
        'a': 'boom.wav',
        's': 'clap.wav',
        'd': 'hihat.wav',
        'f': 'kick.wav',
        'g': 'openhat.wav',
        'h': 'ride.wav',
        'j': 'snare.wav',
        'k': 'tink.wav',
        'l': 'tom.wav'
    };

    document.getElementById("playBoom").addEventListener("click", function() {
        playSound('boom.wav');
    });
    document.getElementById("playClap").addEventListener("click", function() {
        playSound('clap.wav');
    });
    document.getElementById("playHihat").addEventListener("click", function() {
        playSound('hihat.wav');
    });
    document.getElementById("playKick").addEventListener("click", function() {
        playSound('kick.wav');
    });
    document.getElementById("playOpenhat").addEventListener("click", function() {
        playSound('openhat.wav');
    });
    document.getElementById("playRide").addEventListener("click", function() {
        playSound('ride.wav');
    });
    document.getElementById("playSnare").addEventListener("click", function() {
        playSound('snare.wav');
    });
    document.getElementById("playTink").addEventListener("click", function() {
        playSound('tink.wav');
    });
    document.getElementById("playTom").addEventListener("click", function() {
        playSound('tom.wav');
    });

    document.addEventListener("keydown", function(event) {
        const key = event.key.toLowerCase();
        
        if (keySoundMap[key]) {
            playSound(keySoundMap[key]);
        }
    });
}

addSoundListeners();



// Hints
// Focus on the JS. Get it working. Make it look pretty later.
// Look up how to play audio in HTML and JS. (w3schools)
// Add event listeners for keyboard and/or mouse clicks.
// for keyboard events, you can get the key by looking at the property keyCode of the event object
// for mouse click events, you can get the key by looking at the this object.
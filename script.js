const songDiv = document.getElementById('song');


const songs = [
    "Song 1",
    "Song 2",
    "Song 3",
    // Add more songs here
];

function displayRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
   
}


document.addEventListener('DOMContentLoaded',function(){

    document.getElementById('message').onclick= function(){
        document.getElementById('messageModal').style.display = 'block';
    };
    
    document.getElementById('closeButton').onclick=function(){
        document.getElementById('messageModal').style.display = 'none';
    };
})

document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');

    // Event listener for the play button
    playButton.addEventListener('click', function() {
        audioPlayer.play().catch(function(error) {
            console.error('Failed to play audio:', error);
        });
    });

    // Event listener for the pause button
    pauseButton.addEventListener('click', function() {
        audioPlayer.pause();
    });
});

function checkAnswer() {
    var answer = document.getElementById('answer').value;
    if (answer === '4') {
        var surpriseBox = document.getElementById('surpriseBox');
        surpriseBox.style.display = 'block'; // Show the surprise box
        
        playExplosionSound(); // Play explosion sound
        animateExplosion(); // Animate explosion effect

        var qr = document.getElementById('qr');
        qr.style.display = 'block'; 
        
    }
}

function animateExplosion() {
    var surpriseBox = document.getElementById('surpriseBox');
    surpriseBox.classList.add('animate__animated', 'animate__bounceOut'); // Add bounceOut animation class
    setTimeout(function() {
        surpriseBox.style.display = 'none'; // Hide the surprise box after animation
    }, 1000); // Set timeout based on animation duration
}

function playExplosionSound() {
    var explosionSound = document.getElementById('explosionSound');
    explosionSound.play(); // Play explosion sound
}



displayRandomSong();


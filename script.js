const container = document.getElementById('star-container');
const numStars = 50;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Random position
  star.style.left = Math.random() * 100 + 'vw';
  star.style.top = Math.random() * 100 + 'vh';

  // Random size between 10px and 40px
  const size = 10 + Math.random() * 30;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Random movement
  const moveX = (Math.random() - 0.5) * 600;  // ±300px
const moveY = (Math.random() - 0.5) * 600;
  star.style.setProperty('--x', `${moveX}px`);
  star.style.setProperty('--y', `${moveY}px`);
  star.style.animationDuration = 15 + Math.random() * 25 + 's';

  container.appendChild(star);
} 


/*

// Get the button and menu elements
const dropupBtn = document.querySelector('.dropup-btn');
const dropupMenu = document.querySelector('.dropup-menu');

// Initially hide the menu
dropupMenu.style.display = 'none';

// Toggle the menu when the button is clicked
dropupBtn.addEventListener('click', function(event) {
    // Prevent the click event from bubbling to the window
    event.stopPropagation();
    
    // Toggle visibility of the menu
    dropupMenu.style.display = dropupMenu.style.display === 'block' ? 'none' : 'block';
});

// Close the menu if clicked outside
window.addEventListener('click', function(event) {
    if (!dropupBtn.contains(event.target) && !dropupMenu.contains(event.target)) {
        dropupMenu.style.display = 'none';
    }
});

// 🔊 Button sound toggle
    const dropupBtn = document.querySelector('.dropup-btn');
    const dropupMenu = document.querySelector('.dropup-menu');
    const openSound = document.getElementById('openSound');
    const closeSound = document.getElementById('closeSound');

    let menuOpen = false;

    dropupBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;

        if (menuOpen) {
            dropupMenu.style.display = 'block';
            openSound.currentTime = 0;
            openSound.play();
        } else {
            dropupMenu.style.display = 'none';
            closeSound.currentTime = 0;
            closeSound.play();
        }
    });
	

// Man talkbox behavior
    const man = document.getElementById("man");
    const talkboxes = [
        document.getElementById("talkbox1"),
        document.getElementById("talkbox2"),
        document.getElementById("talkbox3"),
        document.getElementById("talkbox4")
    ];

    man.addEventListener("click", function() {
        const randomChance = Math.random() * 100;
        let selectedTalkbox;

        if (randomChance < 33) {
            selectedTalkbox = talkboxes[0];
        } else if (randomChance < 66) {
            selectedTalkbox = talkboxes[1];
        } else if (randomChance < 99) {
            selectedTalkbox = talkboxes[2];
        } else {
            selectedTalkbox = talkboxes[3];
        }

        selectedTalkbox.style.display = "block";
        setTimeout(() => {
            selectedTalkbox.style.opacity = 1;
        }, 10);

        setTimeout(() => {
            selectedTalkbox.style.opacity = 0;
        }, 1000);

        setTimeout(() => {
            selectedTalkbox.style.display = "none";
        }, 2000);
    }); 

    */
	
	 
 

    // Man talkbox behavior
    const man = document.getElementById("man");
    const talkboxes = [
        document.getElementById("talkbox1"),
        document.getElementById("talkbox2"),
        document.getElementById("talkbox3"),
        document.getElementById("talkbox4")
    ];

const talkSounds = [
  document.getElementById("talk1"),
  document.getElementById("talk2"),
  document.getElementById("talk3")
];

talkSounds.forEach(sound => {
  sound.volume = 0.3; // 30% volume
});

    man.addEventListener("click", function () {
  const randomChance = Math.random() * 100;
  let selectedTalkbox;

  if (randomChance < 33) {
    selectedTalkbox = talkboxes[0];
  } else if (randomChance < 66) {
    selectedTalkbox = talkboxes[1];
  } else if (randomChance < 99) {
    selectedTalkbox = talkboxes[2];
  } else {
    selectedTalkbox = talkboxes[3];
  }

  // Play random talk sound
  const randomSound = talkSounds[Math.floor(Math.random() * talkSounds.length)];
  randomSound.currentTime = 0;
  randomSound.play();

  selectedTalkbox.style.display = "block";
  setTimeout(() => {
    selectedTalkbox.style.opacity = 1;
  }, 10);

  setTimeout(() => {
    selectedTalkbox.style.opacity = 0;
  }, 1000);

  setTimeout(() => {
    selectedTalkbox.style.display = "none";
  }, 2000);
});

    // 🔊 Button sound toggle
    const dropupBtn = document.querySelector('.dropup-btn');
    const dropupMenu = document.querySelector('.dropup-menu');
    const openSound = document.getElementById('openSound');
    const closeSound = document.getElementById('closeSound');
	
 openSound.volume = 0.2;   // 30% volume
closeSound.volume = 0.2;  // 30% volume 

    let menuOpen = false;

    dropupBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;

        if (menuOpen) {
            dropupMenu.style.display = 'block';
            openSound.currentTime = 0;
            openSound.play();
        } else {
            dropupMenu.style.display = 'none';
            closeSound.currentTime = 0;
            closeSound.play();
        }
    });
	
	// Play sound when any dropup menu link is clicked
const menuLinks = document.querySelectorAll('.dropup-menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Play button sound
        openSound.currentTime = 0;
        openSound.play();

        // Mute the loop immediately
        loopAudio.muted = true;

        // Open new tab after short delay
        setTimeout(() => {
            window.open(link.href, '_blank');
        }, 300);
    });
});


window.addEventListener("focus", () => {
  if (!isMuted) {
    loopAudio.muted = false;
    loopAudio.play();
  }
});



// Add this inside your existing <script> block
const glowButton = document.getElementById('glow-button');
const weedFx = document.getElementById('weedFx');
weedFx.volume = 0.3;

glowButton.addEventListener('click', () => {
  weedFx.currentTime = 0;
  weedFx.play();
  
  loopAudio.muted = true;
});

const loopAudio = document.getElementById("loopAudio");
const autoplayIcon = document.getElementById("autoplay-icon");

loopAudio.volume = 0.7;
autoplayIcon.style.display = "none";

// Function to show icon
function showAutoplayPrompt() {
  autoplayIcon.style.display = "block";
  // Trigger reflow for CSS transition
  void autoplayIcon.offsetWidth;
  autoplayIcon.classList.add("visible");
}

// Function to hide icon
function hideAutoplayPrompt() {
  autoplayIcon.classList.remove("visible");
  autoplayIcon.classList.add("fade-out");
  setTimeout(() => {
    autoplayIcon.style.display = "none";
    autoplayIcon.classList.remove("fade-out");
  }, 2000);
}

// Try to play audio
function tryAutoplay() {
  loopAudio.play().then(() => {
    console.log("Autoplay successful");
    hideAutoplayPrompt();
  }).catch((err) => {
    console.warn("Autoplay blocked", err);
    showAutoplayPrompt();
    waitForUserInteraction();
  });
}

function waitForUserInteraction() {
  const resume = () => {
    loopAudio.play().then(() => {
      hideAutoplayPrompt();
      document.removeEventListener("click", resume);
      document.removeEventListener("keydown", resume);
    });
  };
  document.addEventListener("click", resume);
  document.addEventListener("keydown", resume);
}

// Start check
tryAutoplay();

const muteToggle = document.getElementById("mute-toggle");
let isMuted = false;

// Initialize icon and state
muteToggle.src = "unmute.png";

muteToggle.addEventListener("click", () => {
  isMuted = !isMuted;
  loopAudio.muted = isMuted;
  muteToggle.src = isMuted ? "mute.png" : "unmute.png";
});






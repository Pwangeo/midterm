let leftPosition = 100;

document.addEventListener('keydown', (event) => {
    let keyContainer = document.createElement('div');
    keyContainer.style.position = 'absolute';
    keyContainer.style.left = leftPosition + 'px';

    let newImage = document.createElement('img');
    newImage.classList.add('dynamic-image'); 
    newImage.style.display = 'block'; // 이미지 표시

    let audioSrc; 

    switch (event.key.toLowerCase()) {
        case 's':
            newImage.src = 'do.png'; 
            newImage.style.top = '700px'; 
            audioSrc = 'C4.mp3';
            break;
        case 'e':
            newImage.src = 'do.png'; 
            newImage.style.top = '675px'; 
            audioSrc = 'CS4.mp3';
            addSharp(keyContainer, newImage); // sharp.png 추가
            break;
        case 'd':
            newImage.src = 're.png'; 
            newImage.style.top = '650px'; 
            audioSrc = 'D4.mp3';
            break;
        case 'r':
            newImage.src = 're.png';
            newImage.style.top = '625px'; 
            audioSrc = 'DS4.mp3';
            addSharp(keyContainer, newImage); // sharp.png 추가
            break;
        case 'f':
            newImage.src = 'mi.png';
            newImage.style.top = '600px'; 
            audioSrc = 'E4.mp3';
            break;
        case 'g':
            newImage.src = 'fa.png'; 
            newImage.style.top = '550px'; 
            audioSrc = 'F4.mp3';
            break;
        case 'y':
            newImage.src = 'fa.png'; 
            newImage.style.top = '525px'; 
            audioSrc = 'FS4.mp3';
            addSharp(keyContainer, newImage); // sharp.png 추가
            break;
        case 'h':
            newImage.src = 'sol.png'; 
            newImage.style.top = '500px'; 
            audioSrc = 'G4.mp3';
            break;
        case 'u':
            newImage.src = 'sol.png'; 
            newImage.style.top = '475px'; 
            audioSrc = 'GS4.mp3';
            addSharp(keyContainer, newImage); // sharp.png 추가
            break;
        case 'j':
            newImage.src = 'la.png'; 
            newImage.style.top = '450px'; 
            audioSrc = 'A4.mp3';
            break;
        case 'i':
            newImage.src = 'la.png'; 
            newImage.style.top = '425px'; 
            audioSrc = 'AS4.mp3';
            addSharp(keyContainer, newImage); // sharp.png 추가
            break;
        case 'k':
            newImage.src = 'ti.png'; 
            newImage.style.top = '400px'; 
            audioSrc = 'B4.mp3';
            break;
        case 'l':
            newImage.src = 'do2.png'; 
            newImage.style.top = '350px'; 
            audioSrc = 'C5.mp3';
            break;
        default:
            return; 
    }

    
    keyContainer.appendChild(newImage); 
    document.body.appendChild(keyContainer); 

    const audio = new Audio(audioSrc);
    audio.play();

    leftPosition += 60; 

    window.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});


function addSharp(container, newImage) {
    let sharpImage = document.createElement('img');
    sharpImage.src = 'sharp.png'; 
    sharpImage.style.width = '30px'; 
    sharpImage.style.height = 'auto'; 
    sharpImage.style.position = 'absolute'; 
    sharpImage.style.left = (35) + 'px'; 
    sharpImage.style.top = newImage.style.top; 
    sharpImage.style.zIndex = '1';

    
    sharpImage.style.opacity = '0';
    sharpImage.style.transition = 'opacity 0.5s'; 
    setTimeout(() => {
        sharpImage.style.opacity = '1'; 
    }, 0);

    container.appendChild(sharpImage); 
}

 document.getElementById('modeButton').addEventListener('click', function() {

            window.location.href = 'page2.html'; 
        });
document.getElementById('mainButton').addEventListener('click', function() {
            
            window.location.href = 'index.html'; 
        });
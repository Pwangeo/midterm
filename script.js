let leftPosition = 100; 

document.addEventListener('keydown', (event) => {
    let newImage = document.createElement('img');
    newImage.classList.add('dynamic-image'); 
    newImage.style.left = leftPosition + 'px'; 

    
    switch (event.key.toLowerCase()) {
        case 's':
            newImage.src = 'do.png'; 
            newImage.style.top = '700px'; 
            audioSrc = 'do.mp3'
            break;
        case 'd':
            newImage.src = 're.png'; 
            newImage.style.top = '650px'; 
            audioSrc = 're.mp3'
            break;
        case 'f':
            newImage.src = 'mi.png';
            newImage.style.top = '600px'; 
            audioSrc = 'mi.mp3'
            break;
        case 'g':
            newImage.src = 'fa.png'; 
            newImage.style.top = '550px'; 
            audioSrc = 'fa.mp3'
            break;
        case 'h':
            newImage.src = 'sol.png'; 
            newImage.style.top = '500px'; 
            audioSrc = 'sol.mp3'
            break;
        case 'j':
            newImage.src = 'la.png'; 
            newImage.style.top = '450px'; 
            audioSrc = 'la.mp3'
            break;
        case 'k':
            newImage.src = 'ti.png'; 
            newImage.style.top = '400px'; 
            audioSrc = 'ti.mp3'
            break;
        case 'l':
            newImage.src = 'do2.png'; 
            newImage.style.top = '350px'; 
           audioSrc = 'do2.mp3'
            break;
        default:
            return; 
    }

    newImage.style.display = 'block';
    document.body.appendChild(newImage); 

    const audio = new Audio(audioSrc);
    audio.play();


    leftPosition += 60; 
});

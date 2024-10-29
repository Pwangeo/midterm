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

    // newImage를 컨테이너에 추가
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
function getRandomColor() {
    let r, g, b;

    // 밝기가 너무 밝지 않도록 RGB 값 조정
    do {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
    } while (r > 200 && g > 200 && b > 200); // 너무 밝은 색상은 제외

    return `rgb(${r}, ${g}, ${b})`;
}


function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// 페이지 로드 시 배경 색상 변경
window.onload = changeBackgroundColor;



function addSharp(container, newImage) {
    let sharpImage = document.createElement('img');
    sharpImage.src = 'sharp.png'; // sharp.png 이미지 경로
    sharpImage.style.width = '30px'; 
    sharpImage.style.height = 'auto'; 
    sharpImage.style.position = 'absolute'; 
    sharpImage.style.left = (35) + 'px'; // newImage의 오른쪽에 위치
    sharpImage.style.top = newImage.style.top; // newImage와 같은 높이
    sharpImage.style.zIndex = '1'; // sharp.png를 위로 올림

    // 랜덤 색상 생성
    const randomColor = getRandomColor();
    sharpImage.style.filter = `hue-rotate(${Math.random() * 360}deg)`;

    // sharp.png와 newImage가 동시에 나타나도록 애니메이션 추가
    sharpImage.style.opacity = '0';
    sharpImage.style.transition = 'opacity 0.5s'; // 부드러운 전환 효과
    setTimeout(() => {
        sharpImage.style.opacity = '1'; // 나타나게 설정
    }, 0);

    container.appendChild(sharpImage); 
}



 document.getElementById('modeButton').addEventListener('click', function() {
            // 원하는 HTML 파일로 이동
            window.location.href = '../page1/page1.html'; // 여기에 원하는 HTML 파일 이름 입력
        });
document.getElementById('mainButton').addEventListener('click', function() {
            // 원하는 HTML 파일로 이동
            window.location.href = '../page0/index.html'; // 여기에 원하는 HTML 파일 이름 입력
        });
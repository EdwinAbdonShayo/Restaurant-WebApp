document.addEventListener("DOMContentLoaded", function(){

    function main() {

        document.body.innerHTML = `
        <header>
            <div class="header-logo">
                <img src="Logo&Icons/Logo.jpg" alt="Shishi Food Logo">
                <h2 class="logo-name">Shishi Food</h2>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#menu">Menu</a>
                    <a href="#orders">Order Here</a>
                    <a href="#about">Sisi</a>
                </nav>
            </div>
        </header>
        `
    }

    // main()


    // Rotating Images

    const images = [
        '/Files/Media/dish-1.jpg',
        '/Files/Media/dish-2.jpg',
        '/Files/Media/dish-3.jpg',
        '/Files/Media/dish-4.jpg',
        '/Files/Media/dish-5.jpg',
    ];

    let index = 0;

    function rotateImages() {
        const section = document.querySelector('.dish');
        section.style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
    }
    
    rotateImages();

    setInterval(rotateImages, 3000);

})
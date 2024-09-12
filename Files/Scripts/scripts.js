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
    // const images = [
    //     '/Files/Media/dish-1.jpg',
    //     '/Files/Media/dish-2.jpg',
    //     '/Files/Media/dish-3.jpg',
    //     '/Files/Media/dish-4.jpg',
    //     '/Files/Media/dish-5.jpg',
    // ];

    // let dishIndex = 1;
    // let bodyIndex = 0;

    // function rotateImages() {
    //     const section = document.querySelector('.dish');
    //     const body = document.querySelector('body');
        
    //     if (section && body) {
    //         section.style.backgroundImage = `url('${images[dishIndex]}')`;

    //         body.style.backgroundImage = `url('${images[bodyIndex]}')`;

    //         dishIndex = (dishIndex + 1) % images.length;
    //         bodyIndex = (bodyIndex + 1) % images.length;
    //     }
    // }

    // rotateImages();

    // setInterval(rotateImages, 3000);


    const images = [
        '/Files/Media/dish-1.jpg',
        '/Files/Media/dish-2.jpg',
        '/Files/Media/dish-3.jpg',
        '/Files/Media/dish-4.jpg',
        '/Files/Media/dish-5.jpg',
    ];
    
    let index = 0;
    let dishIndex = 1; // Start the .dish element with image 2
    
    function rotateImages() {
        const section = document.querySelector('.dish');
        const body = document.querySelector('body');
        
        if (section && body) {
            // Add the animate class to trigger the image enlargement and transition
            section.classList.add('animate');
            
            // Update the background image of the body element
            body.style.backgroundImage = `url('${images[index]}')`;
            
            // Update the background image of the dish element
            section.style.backgroundImage = `url('${images[dishIndex]}')`;
            
            // Increment index and loop it around using modulo
            index = (index + 1) % images.length;
            dishIndex = (dishIndex + 1) % images.length;
    
            // Remove the animate class and add the reset class after the animation completes
            setTimeout(() => {
                section.classList.remove('animate');
                section.classList.add('reset');
                
                // Remove the reset class after the sliding in animation completes
                setTimeout(() => {
                    section.classList.remove('reset');
                }, 2000); // Duration of the slideIn animation
            }, 4000); // Duration of the moveOut animation
        }
    }
    
    // Call rotateImages initially to set the first image
    rotateImages();
    
    // Rotate images every 3 seconds
    setInterval(rotateImages, 12000);
    

})
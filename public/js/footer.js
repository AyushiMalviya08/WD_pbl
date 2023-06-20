
const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/dark-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Artist</li>
            <li><a href="#" class="footer-link">About</a></li>
            <li><a href="#" class="footer-link">Artworks</a></li>
            <li><a href="#" class="footer-link">Contact</a></li>
            <li><a href="#" class="footer-link">Experience</a></li>
           
        </ul>
        <ul class="category">
            <li class="category-title">Gallery</li>
            <li><a href="#" class="footer-link">Acrylic Painting</a></li>
            <li><a href="#" class="footer-link">Bottle Art</a></li>
            <li><a href="#" class="footer-link">Mandala</a></li>
            <li><a href="#" class="footer-link">Scenery</a></li>
            <li><a href="#" class="footer-link">Skeches</a></li>
            <li><a href="#" class="footer-link">Potrait</a></li>
            <li><a href="#" class="footer-link">Abstract Painting</a></li>
            <li><a href="#" class="footer-link">clay Art</a></li>
            
        </ul>
    </div>
</div>
<p class="footer-title">About</p>
<p class="info">This is collaborative work of Ayushi Malviya and Aastha Goyal.</p>
<p class="info">support emails - ayushi.2125it1164@kiet.edu, aastha.it@kiet.edu</p>
<p class="info">telephone - 8770126708, </p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
</div>
<p class="footer-credit">Art, It's a feeling.</p>
   
    `;
}

createFooter();
import heroImg from '../assets/techProducts.png'

function AboutPage() {
    return (
        <div>
            <img 
                src={heroImg}
                alt="hero image" 
                className="image"
            />
            <h3>Logan's Tech Shop has made it their mission to sell only the best tech products for all your needs!</h3>
            <h4>We sell everything from computer towers, to CD-Rs! If there is anything we don't sell that you'd like us to, let us know!</h4>
        </div>
    );
}

// Every component file must export the component
export default AboutPage;
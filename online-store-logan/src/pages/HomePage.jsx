import Hero from '../components/Hero'
import heroImg from '../assets/techProducts.png'

function HomePage() {
    return (
        <div>
            <Hero
                image={heroImg}
            />
        </div>
    );
}

// Every component file must export the component
export default HomePage;
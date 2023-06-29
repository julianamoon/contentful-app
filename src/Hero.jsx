import heroImg from "./assets/hero.svg"

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet temporibus ratione. Voluptatem non commodi odit molestias quas. Maiores, dolores.</p>
            </div>

            <div className="image-container">
                <img src={heroImg} alt="woman interacting with the browser" className="img" />
            </div>
        </div>
    </section>
  )
}

export default Hero
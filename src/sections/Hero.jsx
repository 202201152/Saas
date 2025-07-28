import { useEffect, useRef } from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import gsap from "gsap";
import Button from "../components/Button.jsx";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(".hero-caption", { y: -30, opacity: 0, duration: 0.6 })
        .from(
          ".hero-heading",
          {
            y: 40,
            opacity: 0,
          },
          "-=0.5"
        )
        .from(".hero-paragraph", { y: 30, opacity: 0 }, "-=0.6")
        .from(".hero-button", { y: 20, opacity: 0 }, "-=0.5")
        .from(
          ".hero-image",
          {
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
          },
          "-=0.8"
        );
    }, heroRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section
      className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 overflow-hidden"
      ref={heroRef}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animated-bg" />
      </div>

      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3 hero-caption">
              Video Editing
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12 hero-heading">
              Amazingly simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10 hero-paragraph">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg" className="hero-button">
                Try it now
              </Button>
            </LinkScroll>
          </div>

          {/* Hero image visual */}
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto hero-image"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;

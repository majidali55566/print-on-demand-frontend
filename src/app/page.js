import Layout from "./Components/Layout";
import Image from "next/image";
import "./main.scss";
import FAQ from "./Components/FAQ.jsx";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <div className="home-page">
      <Layout>
        <section className="intro-section">
          <div className="d-flex flex-column gap-500">
            <h1>Create and sell custom printed products</h1>
            <p className="fs-700">
              Effortlessly design and confidently sell with your top
              print-on-demand dropshipping and fulfillment partner.
            </p>
            <div className="start-now-buttons d-flex gap-400">
              <button>
                Start now
                <svg
                  className="arrow-icon"
                  width="1rem"
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button>
                how it works{" "}
                <svg
                  width="1rem"
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"></path>
                </svg>
              </button>
            </div>
            <div className="benefits">
              <span>
                <Image src="/svg/correct.svg" width="32" height="32"></Image>
                100% Free to use
              </span>
              <span>
                <Image src="/svg/correct.svg" width="32" height="32"></Image>
                No order minimums
              </span>
              <span>
                <Image src="/svg/correct.svg" width="32" height="32"></Image>
                Print on Demand
              </span>
              <span>
                <Image src="/svg/correct.svg" width="32" height="32"></Image>
                100% Moroccan
              </span>
            </div>
          </div>
          <Image
            className="hero-image"
            src="/images/hero-image1.webp"
            width={400}
            alt="hero image"
            height={400}
          ></Image>
        </section>
        <section className="business-solution-section">
          <div className="d-flex flex-column gap-400 items-center">
            <h2 className="fw-bold">
              Tailored to meet your business requirements like yours
            </h2>
            <p className="fs-700">
              Explore Brand Name, your premier solution for leveraging
              technology, innovation, and resources to generate enduring value
              and drive economic growth.
            </p>
          </div>
          <div className="d-flex flex-wrap gap-500">
            <div className="process-card">
              <Image
                src="/images/custom-product.webp"
                width={350}
                height={400}
              ></Image>
              <div>
                <h3 className="clr-primary-400">Be product designer</h3>
                <p>
                  Design it, build it, launch it. Whether you're a novice or an
                  expert designer, easily create and personalize a variety of
                  products with just a few clicks.
                </p>
              </div>
            </div>
            <div className="process-card">
              <Image
                src="/images/custom-product1.jpg"
                width={350}
                height={400}
              ></Image>
              <div>
                <h3 className="clr-primary-400">Be seller</h3>
                <p>
                  Design it, build it, launch it. Whether you're a novice or an
                  expert designer, easily create and personalize a variety of
                  products with just a few clicks.
                </p>
              </div>
            </div>
            <div className="process-card">
              <Image
                src="/images/box-packedd.png"
                width={350}
                height={400}
              ></Image>
              <div>
                <h3 className="clr-primary-400">We handle</h3>
                <p>
                  Design it, build it, launch it. Whether you're a novice or an
                  expert designer, easily create and personalize a variety of
                  products with just a few clicks.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="discover-our-product">
          <div className="d-flex flex-column gap-400">
            <h2 className="fw-bold">Discover Our Products and Services</h2>
            <p className="fs-700">
              Watch our video to learn more about our products and services. We
              provide high-quality custom printed products that you'll love!
            </p>
          </div>
          <div>
            <div className="video-responsive">
              <iframe
                height="315"
                src="https://www.youtube.com/embed/dJQn4DqzMVQ?si=BVq_THWPY0IKTfIn"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
        <section className="work-with-us">
          <div className="d-flex flex-column gap-400 ">
            <h2 className="fw-bold">Who can work with us?</h2>
            <p className="fs-700">
              Tailored for innovators and digital artists eager to leave their
              imprint
            </p>
          </div>
          <div className="our-collobrators">
            <div className="card">
              <Image
                src="/images/work-from-home.png"
                width={250}
                height={230}
              ></Image>

              <h3>Working From Home</h3>
              <p>
                Perfect for those looking to personalize their workspace or
                equipment.
              </p>
            </div>
            <div className="card">
              <Image
                src="/images/businesman.png"
                width={250}
                height={270}
              ></Image>

              <h3>Online Entrepreneurs</h3>
              <p>
                Ideal for online entrepreneurs looking to expand their product
                offerings with distinctive items.
              </p>
            </div>
            <div className="card">
              <Image
                src="/images/influencer2.png"
                width={250}
                height={280}
              ></Image>

              <h3>Influencer</h3>
              <p>
                Tailored for influencers aiming to generate revenue from their
                personal brand with personalized merchandise
              </p>
            </div>
            <div className="card">
              <Image src="/images/brands.png" width={250} height={290}></Image>

              <h3>Brands</h3>
              <p>
                Perfect for businesses aiming to expand their reach with branded
                merchandise.
              </p>
            </div>
          </div>
        </section>
        <section className="we-have-your-desires">
          <div>
            <h2 className="fw-bold">Anything you want, we have it!</h2>
            <p>
              We offer a wide array of customizable products tailored to our
              customers' distinct needs and preferences.
            </p>
          </div>
          <div className="we-offer">
            <div className="product-card">
              <Image
                src="/images/oversize-hoodie.png"
                alt="oversize-hoodie"
                width={300}
                height={200}
              ></Image>
              <div className="random d-flex flex-column gap-400">
                <h3>Over Sized Hoodie</h3>
                <button>Start Designing</button>
              </div>
            </div>
            <div className="product-card">
              <Image
                src="/images/oversize-t-shirt.jpg"
                alt="oversize-hoodie"
                width={300}
                height={200}
              ></Image>
              <div className="random d-flex flex-column gap-400">
                <h3>Over Sized t-shirt</h3>
                <button>Start Designing</button>
              </div>
            </div>
            <div className="product-card">
              <Image
                src="/images/uni-sex.jpg"
                alt="oversize-hoodie"
                width={300}
                height={200}
              ></Image>
              <div className="random d-flex flex-column gap-400">
                <h3>Poly-Cotton Unisex Oversize</h3>
                <button>Start Designing</button>
              </div>
            </div>
            <div className="product-card">
              <Image
                src="/images/cap.jpg"
                alt="oversize-hoodie"
                width={300}
                height={200}
              ></Image>
              <div className="random d-flex flex-column gap-400">
                <h3>Unisex advertising cap</h3>
                <button>Start Designing</button>
              </div>
            </div>
            <div className="product-card">
              <Image
                src="/images/mug.png"
                alt="oversize-hoodie"
                width={300}
                height={200}
              ></Image>
              <div className="random d-flex flex-column gap-400">
                <h3>Ceramic Mug</h3>
                <button>Start Designing</button>
              </div>
            </div>
            <div className="product-card">
              <Image
                src="/images/bag.png"
                alt="oversize-hoodie"
                width={300}
                height={200}
              ></Image>
              <div className="random d-flex flex-column gap-400">
                <h3>Cotton Canvas Tote Bag</h3>
                <button>Start Designing</button>
              </div>
            </div>
          </div>
        </section>
        <section className="plateform-integrations">
          <div className="d-flex align-center flex-column justify-center">
            <h2 className="fw-bold text-center">Plateform integrations</h2>
            <p className="fs-700 text-center">
              Integrate your business seamlessly with the platforms you love.
            </p>
          </div>
          <div className="d-flex align-center flex-wrap gap-500 justify-center ">
            <div className="card d-flex flex-column items-center">
              <Image
                src="/images/shopify.png"
                width={300}
                height={300}
                alt="shopify"
              ></Image>
              <h3>shopify</h3>
              <p>
                Launch your Shopify store with all the essential tools for
                success.
              </p>
            </div>
            <div className="card d-flex flex-column items-center">
              <Image
                src="/images/woo.png"
                width={300}
                height={300}
                alt="shopify"
              ></Image>
              <h3>WooCommerce</h3>
              <p>
                Improve your WooCommerce capabilities and manage your store with
                ease.
              </p>
            </div>
            <div className="card d-flex flex-column items-center">
              <Image
                src="/images/dripify.png"
                width={300}
                height={300}
                alt="shopify"
              ></Image>
              <h3>Dropify</h3>
              <p>Inhance Your business work flow by connecting with dropify.</p>
            </div>
          </div>
        </section>
        <section className="faqs">
          <div className="d-flex flex-column items-center justify-center">
            <h2>Frequently Asked Questions</h2>
            <p className="text-center">
              Curious about how everything functions? Our FAQ section explains
              it all. Discover the steps to create your own designs, place
              orders, and have them shipped directly to you.
            </p>
          </div>
          <FAQ />
        </section>
        <Footer />
      </Layout>
    </div>
  );
}

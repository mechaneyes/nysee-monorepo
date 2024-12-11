"use client";

import Image from "next/image";
import SaveVCard from "@/components/vcard";
import Navigation from "@/components/nav";

import "@/styles/styles.scss";

export default function Ray() {
  return (
    <>
      <div className="ray">
        <Navigation />
        <div className="vcard">
          <div className="vcard__outer">
            <div className="vcard__inner">
              <div className="hero">
                <Image
                  className="hero__image"
                  alt="hero image"
                  src="/images/hero.png"
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={390}
                  height={259}
                  quality={100}
                />
              </div>
              <div className="main-container">
                {/* // ————————————————————————————————————o————————————————————————————————————o contact section -->
                  // ————————————————————————————————————o contact section —>
              //  */}
                <section className="section section--title">
                  <div className="title">
                    <Image
                      className="hero__image"
                      alt="ray weitzeberg logo"
                      src="/images/initials.png"
                      width={100}
                      height={100}
                      quality={100}
                    />
                    <h1>Ray Weitzenberg</h1>
                    <h3>Benevolent Creator</h3>
                  </div>
                  <div className="connect-icons">
                    <div className="connect-icons__item">
                      <a href="tel:+17186822628">
                        <img alt="phone icon" src="images/phone.svg" />
                      </a>
                    </div>
                    <div className="connect-icons__item">
                      <a href="sms:+17186822628">
                        <img alt="sms icon: text bubble" src="images/sms.svg" />
                      </a>
                    </div>
                    <div className="connect-icons__item">
                      <a href="mailto:ray@nysee.nyc">
                        <img
                          alt="email icon: envelope image"
                          src="images/mail.svg"
                        />
                      </a>
                    </div>
                    <div className="connect-icons__item">
                      <a href="https://www.google.com/maps/search/394+Myrtle+Ave%2C+%2399">
                        <img
                          alt="location icon: map pin"
                          src="images/location.svg"
                        />
                      </a>
                    </div>
                  </div>
                </section>

                {/* // ————————————————————————————————————o————————————————————————————————————o connect section -->
                  // ————————————————————————————————————o connect section —>
              //  */}
                <section className="section section--connect">
                  <div className="section-header">
                    <img
                      alt="Connect icon: phone handset"
                      src="images/contact.svg"
                    />
                    <h2>Connect</h2>
                  </div>
                  <ul>
                    <li>
                      <h4>Name</h4>
                      <p>Ray Weitzenberg</p>
                    </li>
                    <li>
                      <h4>Email</h4>
                      <p>
                        <a href="mailto:ray@nysee.nyc" target="_blank">
                          ray@nysee.nyc
                        </a>
                      </p>
                    </li>
                    <li>
                      <h4>Signal</h4>
                      <p>geist.404</p>
                    </li>
                    <li>
                      <h4>Mobile</h4>
                      <p>718.682.2628</p>
                    </li>
                    <li>
                      <h4>Company</h4>
                      <p>Mechaneyes</p>
                    </li>
                    <li>
                      <h4>Department</h4>
                      <p>Art+Tech</p>
                    </li>
                  </ul>

                  <SaveVCard />
                </section>

                {/* // ————————————————————————————————————o————————————————————————————————————o summary -->
                  // ————————————————————————————————————o summary —>
              //  */}
                <section className="section">
                  <div className="section-header">
                    <img
                      alt="Précis icon: speech bubble with 'i' inside"
                      src="images/summary.svg"
                    />
                    <h2>Précis</h2>
                  </div>
                  <p>
                    Fusing Art and Technology to
                    <br />
                    Inspire Delight and Wonder
                  </p>
                </section>

                {/* // ————————————————————————————————————o————————————————————————————————————o location -->
                  // ————————————————————————————————————o location —>
              //  */}
                <section className="section section--location">
                  <div className="section-header">
                    <img
                      className="location-icon"
                      alt="location icon: map pin"
                      src="images/location.svg"
                    />
                    <h2>IRL</h2>
                  </div>
                  <p>394 Myrtle Ave, #99</p>
                  <div className="location-button">
                    <a
                      href="https://www.google.com/maps/search/394+Myrtle+Ave%2C+%2399"
                      target="_blank"
                    >
                      Show on Map
                    </a>
                  </div>
                </section>

                {/* // ————————————————————————————————————o————————————————————————————————————o links -->
                  // ————————————————————————————————————o links —>
              //  */}
                <section className="section section--links">
                  <div className="section-header">
                    <img
                      alt="Links icon: globe icon"
                      src="images/webLinks.svg"
                    />
                    <h2>Digital Footprints</h2>
                  </div>
                  <ul>
                    <li>
                      <a href="https://mechaneyes.com/" target="_blank">
                        Mechaneyes
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://bsky.app/profile/nysee.nyc"
                        target="_blank"
                      >
                        Bluesky
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://vis.social/@mechaneyes"
                        target="_blank"
                      >
                        Mastodon
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/mechaneyes" target="_blank">
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/mechaneyes"
                        target="_blank"
                      >
                        InstaFuckZuck
                      </a>
                    </li>
                  </ul>
                </section>

                {/* // ————————————————————————————————————o————————————————————————————————————o gallery -->
                  // ————————————————————————————————————o gallery —>
              //  */}
                <section className="section section--gallery">
                  <Image
                    alt="mechaneyes logo"
                    src="/images/mechaneyes.gif"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={500}
                    height={300}
                    quality={100}
                  />
                  <Image
                    alt="untitled"
                    src="/images/untitled.jpg"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={500}
                    height={300}
                    quality={100}
                  />
                  <Image
                    alt="tree branches covered in snow"
                    src="/images/willoughbyWinter.jpg"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={500}
                    height={300}
                    quality={100}
                  />
                  <Image
                    alt="lined ceiling with fluorescent light tubes"
                    src="/images/atlanticTerminal.jpg"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={500}
                    height={300}
                    quality={100}
                  />
                  <Image
                    alt="shapes decending down stairwell"
                    src="/images/pacificDesignCenter.jpg"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={500}
                    height={300}
                    quality={100}
                  />
                  <Image
                    alt="distorted image with river wrapping around person in canoe"
                    src="/images/americanRiverVortex.jpg"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={500}
                    height={300}
                    quality={100}
                  />
                  <Image
                    alt="dancer lit from behind by strobe light"
                    src="/images/noOrdinaryMonkey.jpg"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={500}
                    height={300}
                    quality={100}
                  />
                  <Image
                    alt="portrait of some woman goes by the name, hetal"
                    src="/images/hetal.jpg"
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={500}
                    height={300}
                    quality={100}
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

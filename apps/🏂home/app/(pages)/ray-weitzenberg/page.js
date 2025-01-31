"use client";

import Image from "next/image";
import SaveVCard from "@/components/vcard";

import "@/styles/styles.scss";

export default function Ray() {
  return (
    <>
      <div className="ray">
        <nav className="w-full max-w-[750px]">
          <ul>
            <li>
              <a href="/">https://nysee.nyc</a>
            </li>
          </ul>
        </nav>
        <div className="vcard w-full">
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
                        <Image
                          alt="phone icon"
                          src="/images/phone.svg"
                          width={24}
                          height={24}
                        />
                      </a>
                    </div>
                    <div className="connect-icons__item">
                      <a href="sms:+17186822628">
                        <Image
                          alt="sms icon: text bubble"
                          src="/images/sms.svg"
                          width={24}
                          height={24}
                        />
                      </a>
                    </div>
                    <div className="connect-icons__item">
                      <a href="mailto:ray@nysee.nyc">
                        <Image
                          alt="email icon: envelope image"
                          src="/images/mail.svg"
                          width={24}
                          height={24}
                        />
                      </a>
                    </div>
                    <div className="connect-icons__item">
                      <a href="https://www.google.com/maps/search/394+Myrtle+Ave%2C+%2399">
                        <Image
                          alt="location icon: map pin"
                          src="/images/location.svg"
                          width={24}
                          height={24}
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
                    <Image
                      alt="Connect icon: phone handset"
                      src="/images/contact.svg"
                      width={24}
                      height={24}
                    />
                    <h2>Connect</h2>
                  </div>
                  <SaveVCard />
                  <ul>
                    <li>
                      <h4>Name</h4>
                      <p>Ray Weitzenberg</p>
                    </li>
                    <li>
                      <h4>Company</h4>
                      <p>Mechaneyes</p>
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
                      <h4>Encrypted Email</h4>
                      <p>
                        <a href="mailto:nysee.nyc@proton.me" target="_blank">
                          nysee.nyc@proton.me
                        </a>
                      </p>
                    </li>
                    <li>
                      <h4>Signal</h4>
                      <p>
                        <a href="https://signal.me/#u/geist.404">geist.404</a>
                      </p>
                    </li>
                    <li>
                      <h4>Mobile</h4>
                      <p>
                        <a href="tel:+17186822628">718.682.2628</a>
                      </p>
                    </li>
                    {/* <li>
                      <h4>Department</h4>
                      <p>Art+Tech</p>
                    </li> */}
                  </ul>
                </section>

                {/* // ————————————————————————————————————o————————————————————————————————————o summary -->
                    // ————————————————————————————————————o summary —>
                    //  */}
                <section className="section">
                  <div className="section-header">
                    <Image
                      alt="Précis icon: speech bubble with 'i' inside"
                      src="/images/summary.svg"
                      width={24}
                      height={24}
                    />
                    <h2>Précis</h2>
                  </div>
                  <p>
                    Fusing Art and Technology to
                    <br />
                    Inspire Delight and Wonder
                  </p>
                </section>

                {/* // ————————————————————————————————————o————————————————————————————————————o links -->
                  // ————————————————————————————————————o links —>
              //  */}
                <section className="section section--links">
                  <div className="section-header">
                    <Image
                      alt="Links icon: globe icon"
                      src="/images/webLinks.svg"
                      width={24}
                      height={24}
                    />
                    <h2>Digital Footprints</h2>
                  </div>
                  <ul>
                    <li>
                      <h4>Hella</h4>
                      <a href="https://nysee.nyc/" target="_blank">
                        NYSee.nyc
                      </a>
                    </li>
                    <li>
                      <h4>Archive</h4>
                      <a href="https://mechaneyes.com/" target="_blank">
                        Mechaneyes
                      </a>
                    </li>
                    <li>
                      <h4>Bluesky</h4>
                      <a
                        href="https://bsky.app/profile/nysee.nyc"
                        target="_blank"
                      >
                        @nysee.nyc
                      </a>
                    </li>
                    <li>
                      <h4>Bluesky</h4>
                      <a
                        href="https://bsky.app/profile/techno.cat"
                        target="_blank"
                      >
                        @techno.cat
                      </a>
                    </li>
                  </ul>
                </section>

                {/* // ————————————————————————————————————o————————————————————————————————————o location -->
                    // ————————————————————————————————————o location —>
                    //  */}
                <section className="section section--location">
                  <div className="section-header">
                    <Image
                      className="location-icon"
                      alt="location icon: map pin"
                      src="/images/location.svg"
                      width={24}
                      height={24}
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
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-lg mb-5"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <source
                      src="/images/dekalb-station-glitch.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
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
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-lg mb-5"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  >
                    <source src="/images/portable-soho.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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

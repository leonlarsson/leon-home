import { Metadata } from "next";
import generateOGMetadata from "@/app/utils/generateOGMetadata";
import CvHeader from "../CVHeader";
import Employment from "../Employment";

const pageTitle = "English CV";
const pageDescription = "Leon San José Larsson's CV/Resume in English.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  ...generateOGMetadata({
    title: pageTitle,
    description: pageDescription,
    url: "https://leonlarsson.com/cv",
    appendNameInOG: true,
  }),
};

export default () => {
  return (
    <div className="sf-wrapper">
      <div className="sf-holder">
        {/* Image */}
        <CvHeader />
        <div className="sf-content-holder">
          {/* Summary
								<div class="jewlery-summary-holder">
									<div class="sf-heading-holder">
										<span class="sf-main-title">Career summary</span>
									</div>
									<div class="sf-heading-underline"></div>
									<div class="small-segment-holder">
										<span class="text"><p>Career summary text</p></span>
									</div>
								</div> */}
          <div className="sf-main-holder">
            <div className="sf-main-left hidden-small">
              <div className="sf-main-box-holder-left">
                <div className="sf-contact">
                  <span className="sf-contact-heading">Email</span>
                  <span className="text">
                    <a
                      style={{ color: "#000" }}
                      href="mailto:leonlarsson8@gmail.com"
                      target="_blank"
                    >
                      leonlarsson8@gmail.com
                    </a>
                  </span>
                </div>
                {/* <div class="sf-contact">
								<span class="sf-contact-heading">Drivers license</span>
								<span class="text">AM/B</span>
							</div> */}
                <div className="sf-top-social">
                  <span className="sf-contact-heading">External Links</span>
                  <div className="flex flex-col items-end text-sm">
                    <a
                      title="LinkedIn"
                      href="https://www.linkedin.com/in/leonlarsson/"
                      target="_blank"
                      className="!text-black hover:underline"
                    >
                      LinkedIn
                    </a>
                    <a
                      title="GitHub"
                      href="https://github.com/leonlarsson/"
                      target="_blank"
                      className="!text-black hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                {/* SKILLS */}
                <div className="no-pagebreak-header" />
                <div className="sf-heading-holder">
                  <span className="sf-main-title">Skills</span>
                </div>
                <div className="sf-heading-underline-left extra-margin-bottom" />
                <div className="small-segment-skill-holder">
                  <span className="text">Software Engineering</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Web Development</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Community Management</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Localization</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Quality Assurance</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Photo/Video Editing</span>
                </div>
                {/* LANGUAGE */}
                <div className="no-pagebreak-header" />
                <div className="sf-heading-holder">
                  <span className="sf-main-title">Language</span>
                </div>
                <div className="sf-heading-underline-left extra-margin-bottom" />
                <div className="small-segment-skill-holder">
                  <span className="text">Swedish - Native</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">English - Fluent</span>
                </div>
                {/* REFERENSER */}
                {/* END REFERENSER */}
              </div>{" "}
              {/* sf-main-box-holder-left */}
            </div>{" "}
            {/* SF MAIN LEFT */}
            <div className="sf-main-right">
              <div className="sf-main-box-holder-right">
                <div className="no-pagebreak-header">
                  <div className="sf-heading-holder">
                    <span className="sf-main-title">Work experience</span>
                  </div>
                  <div className="sf-heading-underline" />

                  <div style={{ marginTop: 5 }}>
                    Read about my software development experience{" "}
                    <a
                      href="#softwareDevelopment"
                      style={{ fontWeight: 600, color: "inherit" }}
                    >
                      here
                    </a>
                    .
                  </div>

                  <Employment
                    title="Community & Support Specialist"
                    company="Sharkmob AB"
                    companyUrl="https://sharkmob.com"
                    date="Aug 2022 - Current"
                  >
                    <>
                      <p>
                        At Sharkmob, I manage the player support and related
                        systems. I also own, manage, and build the pages and
                        content on the{" "}
                        <a
                          href="https://bloodhunt.com/en-us"
                          target="_blank"
                          className="inline-href"
                        >
                          Bloodhunt website
                        </a>
                        . In addition to this, I also help with community areas
                        such as managing the Bloodhunt Discord and setting up
                        Twitch Drops. In my role, I always work closely with the
                        marketing team and the player relations team to make
                        sure everything is synced and in the best condition for
                        our players. I also work directly with the developers on
                        areas such as anti-cheat, making sure that both our
                        developers and support teams have everything they need.
                      </p>

                      <p>
                        On our{" "}
                        <a
                          href="https://www.youtube.com/watch?v=Zu2z5M4gmno&t=10018s"
                          target="_blank"
                          className="inline-href"
                        >
                          newly announced game
                        </a>
                        , Exoborne, in addition to community management, I work
                        closely with the teams building both the{" "}
                        <a
                          href="https://exoborne.com/"
                          target="_blank"
                          className="inline-href"
                        >
                          main website
                        </a>{" "}
                        and the{" "}
                        <a
                          href="https://exoborne.com/rehack"
                          target="_blank"
                          className="inline-href"
                        >
                          RE_HACK ARG website
                        </a>
                        . For the ARG, I provided the technical specifications
                        and requirements for the website and puzzles, which
                        included building several functional prototypes (where I
                        used Next.js).
                      </p>
                    </>
                  </Employment>

                  <hr />

                  <Employment
                    title="Localization/QA Tester - Swedish"
                    company="Electronic Arts"
                    companyUrl="https://www.ea.com"
                    date="Nov 2019 - Aug 2022"
                  >
                    <>
                      <p>
                        My work at Electronic Arts (EA) saw me reviewing and
                        ensuring the quality of EA games (PC+consoles) and
                        marketing material such as trailers, websites and much
                        more. During peak seasons, I was also responsible for
                        reviewing the tests of potential candidates, as well as
                        partaking in crafting the application test materials. On
                        The Sims 4, which was my main project, I was the main
                        person responsible for the quality of the Swedish
                        localization effort. This included reviewing all the
                        text, its implementation in-game, and reporting any
                        issues that could not be fixed with a text change.
                      </p>

                      <i>Projects I've worked on:</i>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-discover-university"
                            target="_blank"
                          >
                            The Sims™ 4: Discover University
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/the-sims/the-sims-4/packs/stuff-packs/the-sims-4-tiny-living"
                            target="_blank"
                          >
                            The Sims™ 4: Tiny Living
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-eco-lifestyle"
                            target="_blank"
                          >
                            The Sims™ 4: Eco Lifestyle
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/the-sims/the-sims-4/packs/stuff-packs/the-sims-4-nifty-knitting"
                            target="_blank"
                          >
                            The Sims™ 4: Nifty Knitting
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-star-wars-journey-to-batuu"
                            target="_blank"
                          >
                            The Sims™ 4: <i>Star Wars™</i>: Journey to Batuu
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-snowy-escape"
                            target="_blank"
                          >
                            The Sims™ 4: Snowy Escape
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/the-sims/the-sims-4/packs/stuff-packs/the-sims-4-paranormal"
                            target="_blank"
                          >
                            The Sims™ 4: Paranormal
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-dream-home-decorator"
                            target="_blank"
                          >
                            The Sims™ 4: Dream Home Decorator
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-cottage-living"
                            target="_blank"
                          >
                            The Sims™ 4: Cottage Living
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-my-wedding-stories"
                            target="_blank"
                          >
                            The Sims™ 4: My Wedding Stories
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-werewolves"
                            target="_blank"
                          >
                            The Sims™ 4: Werewolves
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/the-sims/the-sims-4/the-sims-4-high-school-years"
                            target="_blank"
                          >
                            The Sims™ 4: High School Years
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/the-sims/the-sims-4/packs/kits"
                            target="_blank"
                          >
                            The Sims™ 4 Kits: Bust the Dust, Country Kitchen,
                            Throwback Fit, Courtyard Oasis, Industrial Loft,
                            Fashion Street, Incheon Arrivals, Blooming Rooms,
                            Modern Menswear, Carnaval Streetwear, Décor to the
                            Max, Moonlight Chic, Little Campers, First Fits,
                            Desert Luxe
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/fifa/fifa-21"
                            target="_blank"
                          >
                            FIFA 21
                          </a>
                        </li>

                        <li>
                          <a
                            style={{ color: "#333" }}
                            href="https://www.ea.com/games/lord-of-the-rings/the-lord-of-the-rings-heroes-of-middle-earth"
                            target="_blank"
                          >
                            The Lord of the Rings: Heroes of Middle-earth
                          </a>
                        </li>
                      </ul>
                    </>
                  </Employment>
                </div>

                <div className="no-pagebreak-header">
                  <div className="sf-heading-holder">
                    <span className="sf-main-title">Education</span>
                  </div>
                  <div className="sf-heading-underline" />
                  <div className="small-segment-holder">
                    <span className="datum">Aug 2015 - June 2018</span>
                    <span className="namn">
                      <a
                        href="https://vellinge.se/sundsgymnasiet/"
                        target="_blank"
                      >
                        Sundsgymnasiet
                      </a>
                    </span>
                    <span className="titel">Civics / Media</span>
                    <span className="text">
                      <p>
                        I graduated high school in Sweden on the 7th of June
                        2018. I attended Sundsgymnasiet from 2015 to 2018. I
                        studied civics / media. It included some communication,
                        marketing, and content creation.
                      </p>
                    </span>
                  </div>
                </div>

                <div className="no-pagebreak-header">
                  <div className="sf-heading-holder">
                    <span className="sf-main-title">Miscellaneous</span>
                  </div>

                  <div className="sf-heading-underline" />

                  <div className="small-segment-holder">
                    <span id="softwareDevelopment" className="namn">
                      Software Development
                    </span>
                    <div className="text">
                      <p>
                        I have a very strong interest in software engineering
                        and frontend design. I love working with technologies
                        such as React, Next.js, Node.js using JavaScript (and
                        TypeScript). I also have some experience with SQLite and
                        MySQL, and I these databases in a couple of my projects.
                        Below you can read about a few of my projects.
                      </p>

                      <div>
                        <a
                          href="/projects/battlefield-stats"
                          style={{ fontWeight: 600, color: "inherit" }}
                        >
                          Battlefield Stats Discord Bot
                        </a>
                        <p style={{ marginTop: 0 }}>
                          The Battlefield Stats Discord Bot is a bot developed
                          for use on the platform Discord. This bot lets users
                          look up their Battlefield game stats easily. This
                          project is being written in JavaScript with Node.js.
                          This bot has been invited to over 3,000 Discord
                          servers, with more inviting it every day. Data in
                          real-time is found{" "}
                          <a
                            href="https://battlefieldstats.com/data"
                            target="_blank"
                            className="inline-href"
                          >
                            here
                          </a>
                          . The bot has also been fully localized to 13 language
                          with the help of many helpful community members.
                        </p>
                      </div>

                      <div>
                        <a
                          href="/projects/the-finals-leaderboard"
                          style={{ fontWeight: 600, color: "inherit" }}
                        >
                          THE FINALS Leaderboard
                        </a>
                        <p style={{ marginTop: 0 }}>
                          The Enhanced THE FINALS Leaderboard is a project of
                          mine that delivers an improved version of the official
                          leaderboard for the game THE FINALS from Embark
                          Studios. It features, searching, sorting, filtering,
                          and supports all past playtests. It's built using
                          React, Vite, TypeScript, shadcn/ui, Tailwind, and
                          TanStack Query.
                        </p>
                      </div>

                      <div>
                        <a
                          href="/projects/case-sim"
                          style={{ fontWeight: 600, color: "inherit" }}
                        >
                          Counter-Strike Case Simulator
                        </a>
                        <p style={{ marginTop: 0 }}>
                          The Counter-Strike Case Simulator is a project of mine
                          that simulates opening cases in the game
                          Counter-Strike. It features items from the game. Along
                          with a faithfully recreated UI, there is also a{" "}
                          <a
                            href="https://case-sim.com/unboxed"
                            className="inline-href"
                          >
                            Global Unbox History
                          </a>{" "}
                          that tracks all the items unboxed in the app globally.
                          This project is built using React, Next.js,
                          TypeScript, and Tailwind.
                        </p>
                      </div>

                      <div>
                        <a
                          href="/projects/home"
                          style={{ fontWeight: 600, color: "inherit" }}
                        >
                          My personal website
                        </a>
                        <p style={{ marginTop: 0 }}>
                          One of my biggest projects is my own website, which is
                          built with Next.js, a React framework. This website
                          uses state of the art technologies and experimental
                          features to create a great experience.
                        </p>
                      </div>

                      <p>
                        These are just a fraction of all my projects. If you
                        want to see more, all 20+ of my projects can be found{" "}
                        <a href="/projects" className="inline-href">
                          here
                        </a>
                        .
                      </p>
                    </div>
                  </div>

                  <hr />

                  <div className="small-segment-holder">
                    <span className="datum">Nov 2016 - Ongoing</span>
                    <span className="namn">
                      Community Management / Building
                    </span>
                    <div className="text">
                      <p>
                        I volunteer as an Admin for the Official*{" "}
                        <a
                          className="inline-href"
                          href="/projects/battlefield-discord"
                        >
                          Battlefield Discord
                        </a>
                        .
                      </p>
                      <p>
                        I started volunteering as a moderator in the Battlefield
                        Discord in late 2016 and I am now an Admin and co-owner
                        there. Since I joined, we have successfully grown and
                        transformed the Discord from a small community with a
                        couple thousand members to being the official home of
                        Battlefield on Discord, which hovers between 170K and
                        190K members. This included aligning with the EA
                        Community Team to make sure everything went smoothly,
                        which continues to this day.
                        <br />
                        <i>
                          *In October 2022, we decided to return this to be 100%
                          community owned.
                        </i>
                      </p>
                      My work as an admin for the Battlefield Discord includes:
                      <ul>
                        <li>Making sure no rules are being broken</li>
                        <li>Taking care of people who do break them</li>
                        <li>Answering any questions people may have</li>
                        <li>
                          Developing new ways our users can interact with the
                          developers
                        </li>
                        <li>
                          Ensuring a safe environment for players and developers
                          alike
                        </li>
                        <li>Overseeing and managing our moderators</li>
                        <li>
                          Overseeing our partnership and communications with EA
                        </li>
                      </ul>
                      <p>
                        On top of this, I was also involved in the community
                        task force that took care of the Reddit and Discord for
                        Battlefield 1 Incursions. My role there was to help
                        players get access to the game, keep it a safe place,
                        and collect feedback from users. Additionally, I was
                        also a volunteer moderator in the early days of the Apex
                        Legends Discord, helping users and making sure the
                        Discord was a safe place for all.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

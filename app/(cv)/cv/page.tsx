import { Metadata } from "next";
import CvHeader from "../CVHeader";
import Employment from "../Employment";

const pageTitle = "English CV | Leon San José Larsson";
const pageDescription = "Leon San José Larsson's CV/Resume in English.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    type: "website",
    url: "https://leonlarsson.com/cv",
    title: pageTitle,
    description: pageDescription,
    images: "/assets/images/avatar.png"
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
    creator: "@mozzyfx",
    images: "/assets/images/avatar.png"
  }
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
                    <a style={{ color: "#000" }} href="mailto:leonlarsson8@gmail.com" target="_blank">
                      leonlarsson8@gmail.com
                    </a>
                  </span>
                </div>
                {/* <div class="sf-contact">
								<span class="sf-contact-heading">Drivers license</span>
								<span class="text">AM/B</span>
							</div> */}
                <div className="sf-top-social">
                  <span style={{ marginBottom: "10px" }} className="sf-contact-heading">
                    External Links
                  </span>
                  <a title="LinkedIn" style={{ textDecoration: "none", color: "black" }} href="https://www.linkedin.com/in/leonlarsson/" target="_blank">
                    <i className="fa-brands fa-linkedin-in fa-2xl" />
                  </a>
                  <a title="GitHub" style={{ textDecoration: "none", color: "black", marginLeft: "8px" }} href="https://github.com/leonlarsson/" target="_blank">
                    <i className="fa-brands fa-github fa-2xl" />
                  </a>
                </div>
                {/* SKILLS */}
                <div className="no-pagebreak-header" />
                <div className="sf-heading-holder">
                  <span className="sf-main-title">Skills</span>
                </div>
                <div className="sf-heading-underline-left extra-margin-bottom" />
                <div className="small-segment-skill-holder">
                  <span className="text">Quality Assurance</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Localization</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Community Management</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Software Engineering</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Web Development</span>
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

                  <Employment title="Community & Support Specialist" company="Sharkmob AB" companyUrl="https://sharkmob.com" date="Aug 2022 - Current">
                    <p>
                      At Sharkmob, I manage the player support and related systems. I also own, manage, and build the pages and content on the Bloodhunt website. In addition to this, I also help with community areas such as managing the Bloodhunt Discord and setting up Twitch Drops. In my role, I
                      always work closely with the marketing team and the player relations team to make sure everything is synced and in the best condition for our players. I also work directly with the developers on areas such as anti-cheat, making sure that both our developers and support teams
                      have everything they need.
                    </p>
                  </Employment>

                  <hr />

                  <Employment title="Localization/QA Tester - Swedish" company="Electronic Arts" companyUrl="https://www.ea.com" date="Nov 2019 - Aug 2022">
                    <p>
                      My work at Electronic Arts (EA) saw me reviewing and ensuring the quality of Swedish EA games (PC+Consoles) and marketing material such as trailers, websites and much more. During peak seasons, I was also responsible for reviewing the tests of potential candidates, as well as
                      partaking in crafting the application test materials. On The Sims 4, which was my main project, I was the main person responsible for the quality of the Swedish localization effort. This included reviewing all the text, its implementation in-game, and reporting
                      (JIRA)/escalating any issues that cannot be fixed with a text change. I performed both ad-hoc tests and executed tests against pre-defined test cases.
                      <br />
                      <br />
                      <i>Game releases I've worked on:</i>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-discover-university" target="_blank">
                        The Sims™ 4: Discover University
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/the-sims/the-sims-4/packs/stuff-packs/the-sims-4-tiny-living" target="_blank">
                        The Sims™ 4: Tiny Living
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-eco-lifestyle" target="_blank">
                        The Sims™ 4: Eco Lifestyle
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/the-sims/the-sims-4/packs/stuff-packs/the-sims-4-nifty-knitting" target="_blank">
                        The Sims™ 4: Nifty Knitting
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-star-wars-journey-to-batuu" target="_blank">
                        The Sims™ 4: <i>Star Wars™</i>: Journey to Batuu
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-snowy-escape" target="_blank">
                        The Sims™ 4: Snowy Escape
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/the-sims/the-sims-4/packs/stuff-packs/the-sims-4-paranormal" target="_blank">
                        The Sims™ 4: Paranormal
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-dream-home-decorator" target="_blank">
                        The Sims™ 4: Dream Home Decorator
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-cottage-living" target="_blank">
                        The Sims™ 4: Cottage Living
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-my-wedding-stories" target="_blank">
                        The Sims™ 4: My Wedding Stories
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-werewolves" target="_blank">
                        The Sims™ 4: Werewolves
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/the-sims/the-sims-4/the-sims-4-high-school-years" target="_blank">
                        The Sims™ 4: High School Years
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/the-sims/the-sims-4/packs/kits" target="_blank">
                        The Sims™ 4 Kits: Bust the Dust, Country Kitchen, Throwback Fit, Courtyard Oasis, Industrial Loft, Fashion Street, Incheon Arrivals, Blooming Rooms, Modern Menswear, Carnaval Streetwear, Décor to the Max, Moonlight Chic, Little Campers, First Fits, Desert Luxe
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/fifa/fifa-21" target="_blank">
                        FIFA 21
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/lord-of-the-rings/the-lord-of-the-rings-heroes-of-middle-earth" target="_blank">
                        The Lord of the Rings: Heroes of Middle-earth
                      </a>
                    </p>
                  </Employment>

                  <hr />

                  <Employment title="Terminal worker" company="PostNord Logistics AB" companyUrl="https://www.postnord.se/" date="Nov 2018 - June 2019">
                    <p>
                      I worked nights at one of PostNord's package terminals. The hours were midnight to 8AM.
                      <br />
                      One task I had was to scan around 1,500 packages per night and then put them in their correct locations for them to later be delivered. Another task I had was to unload the trucks that deliver the packages to the terminal. One person usually unloads two to four thousand
                      packages a night.
                    </p>
                  </Employment>

                  <hr />

                  <Employment title="Kitchen Assistant" company="Förenade Care" companyUrl="https://www.forenadecare.com/" date="July 2015 - Aug 2015">
                    <p>I worked in a kitchen as part of a summer job for 3 weeks. This included tasks like doing the dishes, serving/making/preparing food, answering phonecalls, and taking deliveries.</p>
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
                      <a href="https://vellinge.se/sundsgymnasiet/" target="_blank">
                        Sundsgymnasiet
                      </a>
                    </span>
                    <span className="titel">Civics / Media</span>
                    <span className="text">
                      <p>I graduated high school in Sweden on the 7th of June 2018. I attended Sundsgymnasiet from 2015 to 2018. I studied civics / media. It included some communication, marketing, and content creation.</p>
                    </span>
                  </div>
                </div>
                <div className="no-pagebreak-header">
                  <div className="sf-heading-holder">
                    <span className="sf-main-title">Miscellaneous</span>
                  </div>
                  <div className="sf-heading-underline" />
                  <div className="small-segment-holder">
                    <span className="datum">Nov 2016 - Ongoing</span>
                    <span className="namn">Volunteer Administrator/Moderator, Electronic Arts</span>
                    <span className="text">
                      <p>
                        I volunteer as an Admin for the Official* Battlefield Discord.
                        <br />
                        <br />
                        I started volunteering as a moderator in the Battlefield Discord in late 2016 and I am now an Admin and co-owner there. Since I joined, we have successfully grown and transformed the Discord from a small community with a couple thousand members to being the official home of
                        Battlefield on Discord, which hovers between 170K and 190K members. This included aligning with the EA Community Team to make sure everything went smoothly, which continues to this day.
                        <br />
                        <i>*In October 2022, we decided to return this to be 100% community owned.</i>
                        <br />
                        <br />
                        My work as an admin for the Battlefield Discord includes:
                      </p>
                      <ul>
                        <li>Making sure no rules are being broken</li>
                        <li>Taking care of people who do break them</li>
                        <li>Answering any questions people may have</li>
                        <li>Developing new ways our users can interact with the developers</li>
                        <li>Ensuring a safe environment for players and developers alike</li>
                        <li>Overseeing and managing our moderators</li>
                        <li>Overseeing our partnership and communications with EA</li>
                      </ul>
                      On top of this, I was also involved in the community task force that took care of the Reddit and Discord for Battlefield 1 Incursions. My role there was to help players get access to the game, keep it a safe place, and collect feedback from users. Additionally, I was also a
                      volunteer moderator in the early days of the Apex Legends Discord, helping users and making sure the Discord was a safe place for all.
                      <p />
                    </span>
                  </div>
                </div>
                <hr />
                <div className="small-segment-holder">
                  <span className="datum" />
                  <span className="namn">Software Development</span>
                  <span className="text">
                    <p>
                      I have a hobby interest in software development, both with web and the Node.js runtime.
                      <br />
                      <br />
                      The{" "}
                      <a className="inline-href" target="_blank" href="https://battlefieldstats.com/">
                        Battlefield Stats Discord Bot
                      </a>{" "}
                      is a bot/program developed for use on the platform Discord. This bot lets users look up their Battlefield game stats easily. This project is being written in JavaScript with{" "}
                      <a className="inline-href" target="_blank" href="https://nodejs.org/">
                        Node.js
                      </a>
                      . This bot has been invited to over 3,000 Discord servers, with more inviting it every day. Data in real-time is found{" "}
                      <a className="inline-href" target="_blank" href="https://battlefieldstats.com/data">
                        here
                      </a>
                      . The bot has also been fully localized to 13 language with the help of many helpful community members.
                      <br />
                      <br />
                      The{" "}
                      <a className="inline-href" target="_blank" href="https://logsorter.com/">
                        Log Sorter
                      </a>{" "}
                      was created for Discord moderators like myself to easily sort massive amounts of user IDs from moderation logs to assist a server against bot accounts.
                      <br />
                      <br />
                      <a className="inline-href" target="_blank" href="https://api.onlyraccoons.com/">
                        TrasHTTPandas
                      </a>{" "}
                      is an API I created as a fun test project. It returns HTTP response images, but with an fun twist. This project is built using{" "}
                      <a className="inline-href" target="_blank" href="https://workers.cloudflare.com/">
                        Cloudflare Workers
                      </a>
                      .
                    </p>
                    ➡{" "}
                    <strong>
                      <a className="inline-href" href="/projects">
                        More projects
                      </a>
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

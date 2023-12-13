import { Metadata } from "next";
import generateOGMetadata from "@/app/utils/generateOGMetadata";
import CvHeader from "../CVHeader";
import Employment from "../Employment";

const pageTitle = "Svenskt CV";
const pageDescription = "Leon San José Larssons CV/Resume på svenska.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  ...generateOGMetadata({
    title: pageTitle,
    description: pageDescription,
    url: "https://leonlarsson.com/cv-swe",
    appendNameInOG: true
  })
};

export default () => {
  return (
    <div className="sf-wrapper">
      <div className="sf-holder">
        {/* Image */}
        <CvHeader swedish={true} />
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
								<span class="sf-contact-heading">Körkort</span>
								<span class="text">AM/B</span>
							</div> */}
                <div className="sf-top-social">
                  <span style={{ marginBottom: "10px" }} className="sf-contact-heading">
                    Externa länkar
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
                  <span className="sf-main-title">Kunskaper</span>
                </div>
                <div className="sf-heading-underline-left extra-margin-bottom" />
                <div className="small-segment-skill-holder">
                  <span className="text">Programutveckling</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Webbutveckling</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Community Management</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Språklokalisering</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Kvalitetssäkring</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Bild-/videoredigering</span>
                </div>
                {/* LANGUAGE */}
                <div className="no-pagebreak-header" />
                <div className="sf-heading-holder">
                  <span className="sf-main-title">Språk</span>
                </div>
                <div className="sf-heading-underline-left extra-margin-bottom" />
                <div className="small-segment-skill-holder">
                  <span className="text">Svenska – Modersmål</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Engelska – Flytande</span>
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
                    <span className="sf-main-title">Arbetserfarenhet</span>
                  </div>
                  <div className="sf-heading-underline" />

                  <div style={{ marginTop: 5 }}>
                    Läs om min erfarenhet inom programutveckling{" "}
                    <a href="#softwareDevelopment" style={{ fontWeight: 600, color: "inherit" }}>
                      här
                    </a>
                    .
                  </div>

                  <Employment title="Community & Support Specialist" company="Sharkmob AB" companyUrl="https://sharkmob.com" date="Aug 2022 – Nuvarande">
                    <>
                      <p>
                        På Sharkmob hanterar jag spelarsupporten och relaterade system. Jag äger, hanterar och bygger också sidorna och innehållet på{" "}
                        <a href="https://bloodhunt.com/en-us" target="_blank" className="inline-href">
                          Bloodhunt-hemsidan
                        </a>
                        . Utöver detta hjälper jag även till med communityområden som att hantera Bloodhunts Discord och sätta upp Twitch Drops. I min roll arbetar jag alltid nära marketing och player relations för att se till att allt är synkat och i bästa möjligaste skick för våra spelare. Jag
                        arbetar också direkt med utvecklarna i områden som antifusk och ser till att både våra utvecklare och supportteam har allt de behöver.
                      </p>

                      <p>
                        På vårt{" "}
                        <a href="https://www.youtube.com/watch?v=Zu2z5M4gmno&t=10018s" target="_blank" className="inline-href">
                          nyligen uppvisade spel
                        </a>{" "}
                        Exoborne arbetar jag, förutom med community management, nära de team som bygger både{" "}
                        <a href="https://exoborne.com/" target="_blank" className="inline-href">
                          huvudhemsidan
                        </a>{" "}
                        och{" "}
                        <a href="https://exoborne.com/" target="_blank" className="inline-href">
                          hemsidan för ARG:et RE_HACK
                        </a>
                        . För ARG:et hjälpte jag till med de tekniska specifikationerna och kraven för hemsidan samt pusslen, vilket inkluderade att bygga flera funktionella prototyper (där jag använde Next.js).
                      </p>
                    </>
                  </Employment>

                  <hr />

                  <Employment title="Localization/QA Tester - Swedish" company="Electronic Arts" companyUrl="https://www.ea.com" date="Nov 2019 – Aug 2022">
                    <>
                      <p>
                        Hos Electronic Arts (EA) granskade och säkerställde jag kvaliteten på svenska EA-spel (PC+konsoler) och marknadsföringsmaterial som trailers och webbplatser med mera. Under högsäsong var jag också ansvarig för att granska anställningstest från potentiella kandidater. Jag var
                        även medverkande med att skapa och bygga innehållet i rekryteringstestet. På The Sims 4 var jag huvudansvarig för kvaliteten av den svenska lokaliseringsinsatsen. Detta inkluderade att granska all text, dess implementering i spelet och rapportera (via JIRA) / eskalera
                        eventuella problem som inte kunde åtgärdas med en textändring. Jag utförde både ad-hoc-tester och tester baserade på fördesignade testfall.
                      </p>

                      <i>Spelreleaser som jag har arbetat på:</i>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-discover-university" target="_blank">
                            The Sims™ 4: Studentliv
                          </a>
                        </li>

                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/stuff-packs/the-sims-4-tiny-living" target="_blank">
                            The Sims™ 4: Smått och smart
                          </a>
                        </li>

                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-eco-lifestyle" target="_blank">
                            The Sims™ 4: Eko-liv
                          </a>
                        </li>

                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/stuff-packs/the-sims-4-nifty-knitting" target="_blank">
                            The Sims™ 4: Skickligt stickat
                          </a>
                        </li>

                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-star-wars-journey-to-batuu" target="_blank">
                            The Sims™ 4: <i>Star Wars™</i>: Resan till Batuu
                          </a>
                        </li>

                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-snowy-escape" target="_blank">
                            The Sims™ 4: Snöiga bergen
                          </a>
                        </li>
                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/stuff-packs/the-sims-4-paranormal" target="_blank">
                            The Sims™ 4: Paranormalt
                          </a>
                        </li>

                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-dream-home-decorator" target="_blank">
                            The Sims™ 4: Styla ditt drömhus
                          </a>
                        </li>

                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-cottage-living" target="_blank">
                            The Sims™ 4: Lantliv
                          </a>
                        </li>

                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-my-wedding-stories" target="_blank">
                            The Sims™ 4: Mina bröllopshistorier
                          </a>
                        </li>

                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-werewolves" target="_blank">
                            The Sims™ 4: Varulvar
                          </a>
                        </li>

                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/the-sims-4-high-school-years" target="_blank">
                            The Sims™ 4: High school-åren
                          </a>
                        </li>

                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/kits" target="_blank">
                            The Sims™ 4 Kit: Dammråttor, Lantkök, Retro, Innergårdsoas, Industriloft, Fashion Street, Välkommen till Incheon, Blommande rum, Modernt herrmode, Karnevalmode, Maxad inredning, Ungdomlig elegans, Knattarnas camping, Första modet, Ökenlyx
                          </a>
                        </li>

                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/fifa/fifa-21" target="_blank">
                            FIFA 21
                          </a>
                        </li>

                        <li>
                          <a style={{ color: "#333" }} href="https://www.ea.com/games/lord-of-the-rings/the-lord-of-the-rings-heroes-of-middle-earth" target="_blank">
                            The Lord of the Rings: Midgårds hjältar
                          </a>
                        </li>
                      </ul>
                    </>
                  </Employment>

                  <hr />

                  <Employment title="Terminalarbetare" company="PostNord Logistics AB" companyUrl="https://www.postnord.se/" date="Nov 2018 – Juni 2019">
                    <>
                      <p>Jag jobbade natt på en av PostNords paketterminaler. Timmarna var midnatt till 08:00.</p>

                      <p>En uppgift jag hade var att skanna uppemot 1&nbsp;500 paket per natt inför morgonens leveranser. En annan uppgift jag hade var att lasta av paket från lastbilar rakt in till terminalens band. En person brukar lasta av ungefär två- till fyratusen paket om natten.</p>
                    </>
                  </Employment>
                </div>

                <div className="no-pagebreak-header">
                  <div className="sf-heading-holder">
                    <span className="sf-main-title">Utbildning</span>
                  </div>
                  <div className="sf-heading-underline" />
                  <div className="small-segment-holder">
                    <span className="datum">2015 – 2018</span>
                    <span className="namn">
                      <a href="https://vellinge.se/sundsgymnasiet/" target="_blank">
                        Sundsgymnasiet
                      </a>
                    </span>
                    <span className="titel">Samhällskunskap / Media</span>
                    <span className="text">
                      <p>Jag tog studenten i Sverige den 7 juni 2018. Jag gick på Sundsgymnasiet i Vellinge från 2015 till 2018. Jag studerade Samhällskunskap med inrikting Media.</p>
                    </span>
                  </div>
                </div>

                <div className="no-pagebreak-header">
                  <div className="sf-heading-holder">
                    <span className="sf-main-title">Övrigt</span>
                  </div>

                  <div className="sf-heading-underline" />

                  <div className="small-segment-holder">
                    <span id="softwareDevelopment" className="namn">
                      Programutveckling
                    </span>
                    <div className="text">
                      <p>
                        Jag har ett mycket starkt intresse för programutveckling och frontend-design. Jag älskar att arbeta med teknologier som React, Next.js, Node.js med JavaScript (och TypeScript). Jag har också viss erfarenhet av SQLite och MySQL, och jag använder dessa databaser i ett par av
                        mina projekt. Nedan kan du läsa om ett par av mina projekt.
                      </p>

                      <div>
                        <a href="/projects/battlefield-stats" style={{ fontWeight: 600, color: "inherit" }}>
                          Battlefield Stats Discord-botten
                        </a>
                        <p style={{ marginTop: 0 }}>
                          Battlefield Stats Discord-botten än en bot utvecklad för användning på plattformen Discord. Denna bot kan personer använda för att enkelt kolla upp sin Battlefield-spelstatistik. Programmet är skrivet i JavaScript med Node.js. Denna bot har blivit inbjuden till över 3,000
                          Discord-servrar, ett nummer som växer varje dag. Data i realtid finns{" "}
                          <a className="inline-href" target="_blank" href="https://battlefieldstats.com/data">
                            här
                          </a>
                          . Botten är även fullt översatt till 13 språk med hjälp av hjälpsamma communitymedlemmar.
                        </p>
                      </div>

                      <div>
                        <a href="/projects/home" style={{ fontWeight: 600, color: "inherit" }}>
                          Min personliga hemsida
                        </a>
                        <p style={{ marginTop: 0 }}>Ett av mina största projekt är min egen webbplats, som är byggd med Next.js, ett React-ramverk. Webbplatsen använder toppmodern teknik och experimentella funktioner för att skapa en fantastisk upplevelse.</p>
                      </div>

                      <p>
                        Det här är bara en bråkdel av alla mina projekt. Om du vill se mer kan du hitta alla mina 20+ projekt{" "}
                        <a className="inline-href" href="/projects">
                          här
                        </a>
                        .
                      </p>
                    </div>
                  </div>

                  <hr />

                  <div className="small-segment-holder">
                    <span className="datum">Nov 2016 – Pågående</span>
                    <span className="namn">Community Management / Uppbyggning</span>
                    <div className="text">
                      <p>
                        Jag jobbar volontärt som en administratör för den officiella*{" "}
                        <a className="inline-href" href="/projects/battlefield-discord">
                          Battlefield Discord
                        </a>
                        -kanalen.
                      </p>
                      <p>
                        Jag började jobba som en volontärmoderator på Battlefields Discord sent in i 2016 och nu är jag en administratör/ägare där. Sen jag började har Discord-kanalen vuxit från att vara ett litet community med ett par tusen medlemmar till att vara det officiella hemmet för
                        Battlefield på Discord. Den sitter oftast mellan 170K och 190K medlemmar. Detta inkluderade att jobba med EA:s community team för att försäkra att allting går lugnt och fungerar, något som fortsätter än idag.
                        <br />
                        <i>*I oktober 2022 valde vi att återgå till att kanalen ska vara 100% ägd av communityn.</i>
                      </p>
                      Mitt arbete som en moderator/admin för dessa kanaler inkluderar:
                      <ul>
                        <li>Hålla koll så att inga regler blir brutna</li>
                        <li>Ta hand om människor som bryter reglerna</li>
                        <li>Besvara alla frågor som folk kan ha</li>
                        <li>Utveckla nya sätt som spelarna kan interagera med spelutvecklarna</li>
                        <li>Säkerställa en säker miljö för både spelare och utvecklare</li>
                        <li>Övervaka och hantera våra Discord-moderatorer</li>
                        <li>Övervaka vårt partnerskap och kommunikation med EA</li>
                      </ul>
                      <p>
                        Utöver detta var jag också engagerad i community-teamet som tog hand om av Reddit och Discord-kanalerna för Battlefield 1 Incursions. Min roll där var att hjälpa spelare få tillgång till spelet, att säkerställa en bra miljö och samla in feedback från spelarna. Dessutom var
                        jag också volontärmoderator under Apex Legends tidiga dagar för deras Discord-kanal. Även där var min roll att hjälpa spelarna och att se till att Discorden är en säker miljö för alla.
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

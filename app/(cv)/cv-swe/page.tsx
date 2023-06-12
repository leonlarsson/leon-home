import { Metadata } from "next";
import CvHeader from "../CVHeader";
import Employment from "../Employment";

const pageTitle = "Svenskt CV | Leon San José Larsson";
const pageDescription = "Leon San José Larssons CV/Resume på svenska.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    type: "website",
    url: "https://leonlarsson.com/cv-swe",
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
                    <a style={{ color: "#000", textDecoration: "underline" }} href="mailto:leonlarsson8@gmail.com" target="_blank">
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
                  <span className="text">Kvalitetssäkring</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Språklokalisering</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Community Management</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Programutveckling</span>
                </div>
                <div className="small-segment-skill-holder">
                  <span className="text">Webbutveckling</span>
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

                  <Employment title="Community & Support Specialist" company="Sharkmob AB" companyUrl="https://sharkmob.com" date="Aug 2022 – Nuvarande">
                    <p>
                      På Sharkmob hanterar jag spelarsupporten och relaterade system. Jag äger, hanterar och bygger också sidorna och innehållet på Bloodhunt-hemsidan. Utöver detta hjälper jag även till med communityområden som att hantera Bloodhunts Discord och sätta upp Twitch Drops. I min roll
                      arbetar jag alltid nära marketing och player relations för att se till att allt är synkat och i bästa möjligaste skick för våra spelare. Jag arbetar också direkt med utvecklarna i områden som antifusk och ser till att både våra utvecklare och supportteam har allt de behöver.
                    </p>
                  </Employment>

                  <hr />

                  <Employment title="Localization/QA Tester - Swedish" company="Electronic Arts" companyUrl="https://www.ea.com" date="Nov 2019 – Aug 2022">
                    <p>
                      Hos Electronic Arts (EA) granskade och säkerställde jag kvaliteten på svenska EA-spel (PC+konsoler) och marknadsföringsmaterial som trailers och webbplatser med mera. Under högsäsong var jag också ansvarig för att granska anställningstest från potentiella kandidater. Jag var
                      även medverkande med att skapa och bygga innehållet i rekryteringstestet. På The Sims 4 var jag huvudansvarig för kvaliteten av den svenska lokaliseringsinsatsen. Detta inkluderade att granska all text, dess implementering i spelet och rapportera (via JIRA) / eskalera
                      eventuella problem som inte kunde åtgärdas med en textändring. Jag utförde både ad-hoc-tester och tester baserade på fördesignade testfall.
                      <br />
                      <br />
                      <i>Spelreleaser som jag har arbetat på:</i>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-discover-university" target="_blank">
                        The Sims™ 4: Studentliv
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/stuff-packs/the-sims-4-tiny-living" target="_blank">
                        The Sims™ 4: Smått och smart
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-eco-lifestyle" target="_blank">
                        The Sims™ 4: Eko-liv
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/stuff-packs/the-sims-4-nifty-knitting" target="_blank">
                        The Sims™ 4: Skickligt stickat
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-star-wars-journey-to-batuu" target="_blank">
                        The Sims™ 4: <i>Star Wars™</i>: Resan till Batuu
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-snowy-escape" target="_blank">
                        The Sims™ 4: Snöiga bergen
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/stuff-packs/the-sims-4-paranormal" target="_blank">
                        The Sims™ 4: Paranormalt
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-dream-home-decorator" target="_blank">
                        The Sims™ 4: Styla ditt drömhus
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/expansion-packs/the-sims-4-cottage-living" target="_blank">
                        The Sims™ 4: Lantliv
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-my-wedding-stories" target="_blank">
                        The Sims™ 4: Mina bröllopshistorier
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/game-packs/the-sims-4-werewolves" target="_blank">
                        The Sims™ 4: Varulvar
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/the-sims-4-high-school-years" target="_blank">
                        The Sims™ 4: High school-åren
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/the-sims/the-sims-4/packs/kits" target="_blank">
                        The Sims™ 4 Kit: Dammråttor, Lantkök, Retro, Innergårdsoas, Industriloft, Fashion Street, Välkommen till Incheon, Blommande rum, Modernt herrmode, Karnevalmode, Maxad inredning, Ungdomlig elegans, Knattarnas camping, Första modet, Ökenlyx
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/sv-se/games/fifa/fifa-21" target="_blank">
                        FIFA 21
                      </a>
                      <br />
                      <a style={{ color: "#333" }} href="https://www.ea.com/games/lord-of-the-rings/the-lord-of-the-rings-heroes-of-middle-earth" target="_blank">
                        The Lord of the Rings: Midgårds hjältar
                      </a>
                    </p>
                  </Employment>

                  <hr />

                  <Employment title="Terminalarbetare" company="PostNord Logistics AB" companyUrl="https://www.postnord.se/" date="Nov 2018 – Juni 2019">
                    <p>
                      Jag jobbade natt på en av PostNords paketterminaler. Timmarna var midnatt till 08:00.
                      <br />
                      En uppgift jag hade var att skanna uppemot 1&nbsp;500 paket per natt inför morgonens leveranser. En annan uppgift jag hade var att lasta av paket från lastbilar rakt in till terminalens band. En person brukar lasta av ungefär två- till fyratusen paket om natten.
                    </p>
                  </Employment>

                  <hr />

                  <Employment title="Köksassistant" company="Förenade Care" companyUrl="https://www.forenadecare.com/" date="Juli 2015 – Aug 2015">
                    <p>Jag jobbade i ett kök som del av ett sommarjob i 3 veckor. Detta inkluderade uppgifter som att diska, servera/göra/förbereda mat, besvara telefonsamtal och ta emot leveranser.</p>
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
                      <a style={{ color: "#000" }} href="https://vellinge.se/sundsgymnasiet/" target="_blank">
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
                    <span className="datum">Nov 2016 – Pågående</span>
                    <span className="namn">Volontär Administratör/Moderator, Electronic Arts</span>
                    <span className="text">
                      <p>
                        Jag jobbar volontärt som en administratör för den officiella* Battlefield Discord-kanalen.
                        <br />
                        <br />
                        Jag började jobba som en volontärmoderator på Battlefields Discord sent in i 2016 och nu är jag en administratör/ägare där. Sen det att jag började, har Discord-kanalen vuxit från att vara ett litet community med ett par tusen medlemmar till att vara det officiella hemmet för
                        Battlefield på Discord. Den sitter oftast mellan 170K och 190K medlemmar. Detta inkluderade att jobba med EA:s community team för att försäkra att allting går lugnt och fungerar, något som fortsätter än idag.
                        <br />
                        <i>*I oktober 2022, valde vi att återgå till att kanalen ska vara 100% ägd av communityn.</i>
                        <br />
                        <br />
                        Mitt arbete som en moderator/admin för dessa kanaler inkluderar:
                      </p>
                      <ul>
                        <li>Hålla koll så att inga regler blir brutna</li>
                        <li>Ta hand om människor som bryter reglerna</li>
                        <li>Besvara alla frågor som folk kan ha</li>
                        <li>Utveckla nya sätt som spelarna kan interagera med spelutvecklarna</li>
                        <li>Säkerställa en säker miljö för både spelare och utvecklare</li>
                        <li>Övervaka och hantera våra Discord-moderatorer</li>
                        <li>Övervaka vårt partnerskap och kommunikation med EA</li>
                      </ul>
                      Utöver detta var jag också engagerad i community-teamet som tog hand om av Reddit och Discord-kanalerna för Battlefield 1 Incursions. Min roll där var att hjälpa spelare få tillgång till spelet, att säkerställa en bra miljö och samla in feedback från spelarna. Dessutom var jag
                      också volontärmoderator under Apex Legends tidiga dagar för deras Discord-kanal. Även där var min roll att hjälpa spelarna och att se till att Discorden är en säker miljö för alla.
                      <p />
                    </span>
                  </div>
                </div>
                <hr />
                <div className="small-segment-holder">
                  <span className="datum" />
                  <span className="namn">Programutveckling</span>
                  <span className="text">
                    <p>
                      Jag har ett intresse i programutveckling, både med webb och Node.js.
                      <br />
                      <br />
                      <a className="inline-href" target="_blank" href="https://battlefieldstats.com/">
                        Battlefield Stats Discord-botten
                      </a>{" "}
                      än en bot / ett program utvecklad för användning på plattformen Discord. Denna bot kan personer använda för att enkelt kolla upp sin Battlefield spelstatistik. Programmet är skrivet i JavaScript med{" "}
                      <a className="inline-href" target="_blank" href="https://nodejs.org/">
                        Node.js
                      </a>
                      . Denna bot har blivit inbjuden till nästan 3,000 Discord-servrar, ett nummer som växer varje dag. Data i realtid finns{" "}
                      <a className="inline-href" target="_blank" href="https://battlefieldstats.com/data">
                        här
                      </a>
                      . Botten är även fullt översatt till 13 språk med hjälp av hjälpsamma communitymedlemmar.
                      <br />
                      <br />
                      <a className="inline-href" href="https://logsorter.net/" target="_blank">
                        Log Sorter-projektet
                      </a>{" "}
                      skapade jag som ett program som kunde hjälpa andra Discord-moderatorer med att snabbt och enkelt sortera ut användar-ID från loggar. Detta är till stor hjälp för att skydda en kanal från stora mängder bot-konton.
                      <br />
                      <br />
                      <a className="inline-href" target="_blank" href="https://api.onlyraccoons.com/">
                        TrasHTTPandas
                      </a>{" "}
                      är ett API jag skapade som ett roligt testprojekt. API:et returnerar HTTP-svar, men med lite extra kul. Detta project är byggt med{" "}
                      <a className="inline-href" target="_blank" href="https://workers.cloudflare.com/">
                        Cloudflare Workers
                      </a>
                      .
                    </p>
                    ➡{" "}
                    <strong>
                      <a className="inline-href" href="/projects">
                        Fler projekt
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

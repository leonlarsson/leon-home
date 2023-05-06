import { Metadata } from "next";
import Link from "next/link";
import "../globals.css";

const pageTitle = "Projects | Leon San José Larsson";
const pageDescription = "Links to projects.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        type: "website",
        url: "https://leonlarsson.com/projects",
        title: pageTitle,
        description: pageDescription
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        creator: "@mozzyfx"
    }
};

export default () => {
    return (
        <div className="flex flex-col text-center m-auto space-y-1 max-[450px]:space-y-0 pb-3">

            <Link href="/" className="group font-extrabold text-[2rem] max-[450px]:text-[1.5rem] transition-all duration-300" title="Go back"><i className="fa-solid fa-arrow-left group-hover:text-red-400 group-hover:-translate-x-2 transition-all" /> Leon San José Larsson</Link>

            <span className="font-extrabold">Fun:</span>

            <Project
                name="Battlefield V Menu Playground"
                link="https://bfvmenu.leonlarsson.com/"
                githubLink="https://github.com/leonlarsson/bfvmenu"
            />

            <Project
                name="Battlefield 1 Palette Recreation"
                link="https://bf1palette.leonlarsson.com/"
                githubLink="https://github.com/leonlarsson/bf1palette"
            />

            <Project
                name="You Spin Me Right Round"
                link="https://joy.leonlarsson.com/"
                githubLink="https://github.com/leonlarsson/joy-meme"
            />

            <br />
            <span className="font-extrabold">Other:</span>

            <Project
                name="This website"
                link="/"
                githubLink="https://github.com/leonlarsson/leon-home"
                nextLink={true}
            />

            <Project
                name="Log Sorter"
                link="https://logsorter.net/"
                githubLink="https://github.com/leonlarsson/logsorter"
            />

            <Project
                name="Battlefield 1 Morse Solver"
                link="https://bf1morse.leonlarsson.com/"
                githubLink="https://github.com/leonlarsson/bf1morse"
            />

            <Project
                name="Battlefield Stats Discord Bot"
                link="https://battlefieldstats.com/"
                githubLink="https://github.com/leonlarsson/bfstats-web"
                extra={{
                    name: "API",
                    link: "https://api.battlefieldstats.com/",
                    githubLink: "https://github.com/leonlarsson/bfstats-api"
                }}
            />

            <Project
                name="Raccoon HTTP API"
                link="https://api.onlyraccoons.com/"
                githubLink="https://github.com/leonlarsson/http-raccoons"
            />

            <Project
                name="Zeppelin Case Stats"
                link="https://zeppelin-stats.leonlarsson.com/"
                githubLink="https://github.com/leonlarsson/zeppelin-case-stats"
            />

            <Project
                name="Redirect / Link Service"
                link="https://x.leon.ms/"
                githubLink="https://github.com/leonlarsson/link-redirector-worker"
            />

            <Project
                name="THE FINALS Leaderboard"
                link="https://the-finals-leaderboard.leonlarsson.com/"
                githubLink="https://github.com/leonlarsson/the-finals-leaderboard"
            />

            <Project
                name="React + Ant Design website"
                link="https://react-ant-design-ui.pages.dev/"
                githubLink="https://github.com/leonlarsson/react-ant-design-ui"
            />

            <Project
                name="Bloodhunt ARG"
                link="https://omnis.pages.dev/"
            />
        </div>
    );
};

const Project = ({ name, link, githubLink, nextLink = false, extra }: ProjectProps) => {
    return (
        <div className="project-link">
            {nextLink ? <Link href={link}>{name}</Link> : <a href={link} target="_blank">{name}</a>} {githubLink && <a href={githubLink} target="_blank" className="fa-brands fa-github" />}
            {extra && <> (<a href={extra.link} target="_blank">{extra.name}</a> {extra.githubLink && <a href={extra.githubLink} target="_blank" className="fa-brands fa-github" />})</>}
        </div>
    );
};

interface ProjectProps {
    name: string;
    link: string;
    githubLink?: string;
    nextLink?: boolean;
    extra?: {
        name: string;
        link: string;
        githubLink?: string;
    };
};
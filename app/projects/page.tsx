import Link from "next/link";
import "../globals.css";

export default () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-slate-100 space-y-1 max-[420px]:space-y-0">

            <Link className="font-extrabold text-[2rem] hover:text-blue-600 transition-all max-[420px]:text-[1.5rem]" href="/">Leon San José Larsson</Link>

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
        <div className="project">
            {nextLink ? <Link className="link" href={link}>{name}</Link> : <a className="link" href={link} target="_blank">{name}</a>} {githubLink && <a href={githubLink} target="_blank" className="fa-brands fa-github" />}
            {extra && <> (<a className="link" href={extra.link} target="_blank">{extra.name}</a> {extra.githubLink && <a href={extra.githubLink} target="_blank" className="fa-brands fa-github" />})</>}
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
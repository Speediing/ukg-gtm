import type { Artifact, DemoMessage } from "@/data/types";
import type { ComputerBeat } from "@/data/screens";
import { FOLLOW_UP_SLIDES } from "@/data/jobs";
import { HeardSlide } from "./HeardSlide";

function asSlides(artifact?: Artifact) {
  return artifact?.kind === "slides" ? artifact : null;
}

function asGmail(artifact?: Artifact) {
  return artifact?.kind === "gmail" ? artifact : null;
}

function asLinkedin(artifact?: Artifact) {
  return artifact?.kind === "linkedin" ? artifact : null;
}

function asOnePager(artifact?: Artifact) {
  return artifact?.kind === "one-pager" ? artifact : null;
}

function asPacket(artifact?: Artifact) {
  return artifact?.kind === "packet" ? artifact : null;
}

export function SiteScreen({
  beat,
  message,
  account,
  sent,
}: {
  beat: ComputerBeat;
  message?: DemoMessage;
  account: string;
  sent: boolean;
}) {
  const artifact = message?.artifact;

  switch (beat.site) {
    case "granola":
      return <GranolaScreen account={account} />;
    case "figma":
      return <FigmaScreen artifact={artifact} />;
    case "gmail":
      return (
        <GmailScreen
          account={account}
          artifact={asGmail(artifact)}
          sent={sent}
        />
      );
    case "linkedin":
      return (
        <LinkedInScreen
          artifact={asLinkedin(artifact)}
          sent={sent}
        />
      );
    case "research":
      return <ResearchScreen account={account} />;
    case "page":
      return <PageScreen account={account} artifact={asOnePager(artifact)} />;
    case "gdoc":
      return <DocumentScreen account={account} artifact={asPacket(artifact)} />;
    default:
      return <WorkspaceScreen beat={beat} />;
  }
}

function GranolaScreen({ account }: { account: string }) {
  return (
    <div className="site site-granola">
      <header>
        <strong>Granola</strong>
        <span>Live notes</span>
      </header>
      <p className="site-time">{account} discovery</p>
      <ul>
        <li>
          <span>Confirmed</span> Points said in the meeting move into the recap.
        </li>
        <li>
          <span>Open</span> Questions without an answer stay marked.
        </li>
        <li>
          <span>Source</span> Product notes link back to approved content.
        </li>
        <li>
          <span>Draft</span> The customer follow-up waits for the rep.
        </li>
      </ul>
    </div>
  );
}

function FigmaScreen({ artifact }: { artifact?: Artifact }) {
  const slides = asSlides(artifact);

  return (
    <div className="site site-figma">
      <header>
        <span className="figma-logo">F</span>
        <strong>{slides?.title || "UKG customer follow-up"}</strong>
        <em>Draft</em>
      </header>
      <div className="figma-board">
        <HeardSlide slides={slides?.cards || FOLLOW_UP_SLIDES} size="sm" />
      </div>
    </div>
  );
}

function GmailScreen({
  account,
  artifact,
  sent,
}: {
  account: string;
  artifact: ReturnType<typeof asGmail>;
  sent: boolean;
}) {
  return (
    <div className="site site-gmail">
      <header>
        <strong>Gmail</strong>
        <em>{sent ? "Sent" : "Draft, not sent"}</em>
      </header>
      <p>
        <span>To</span>
        {artifact?.to || `${account} team`}
      </p>
      <p>
        <span>Subject</span>
        {artifact?.subject || "Follow-up to your UKG questions"}
      </p>
      <div>
        {artifact?.body ||
          "The answer is parked here until the rep checks every source."}
      </div>
    </div>
  );
}

function DocumentScreen({
  account,
  artifact,
}: {
  account: string;
  artifact: ReturnType<typeof asPacket>;
}) {
  return (
    <div className="site site-gdoc">
      <header>
        <strong>Docs</strong>
        <span>{artifact?.title || `${account} working brief`}</span>
      </header>
      <article>
        {artifact ? (
          artifact.fields.map((field) => (
            <p key={field.label}>
              <b>{field.label}.</b> {field.value}
            </p>
          ))
        ) : (
          <>
            <p>
              <b>Evidence.</b> Every point links back to a public source.
            </p>
            <p>
              <b>Open question.</b> Unknowns stay visible for the rep.
            </p>
          </>
        )}
      </article>
    </div>
  );
}

function ResearchScreen({ account }: { account: string }) {
  return (
    <div className="site site-research">
      <header>
        <strong>{account}</strong>
        <span>Public sources</span>
      </header>
      <p className="site-time">Research first, message second</p>
      <ul>
        <li>
          <span>Company site</span> Current priorities and company language.
        </li>
        <li>
          <span>Public filings</span> Business context with a direct link.
        </li>
        <li>
          <span>Careers</span> Team and role signals that can be checked.
        </li>
        <li>
          <span>Open</span> Product fit waits for the rep to confirm it.
        </li>
      </ul>
    </div>
  );
}

function LinkedInScreen({
  artifact,
  sent,
}: {
  artifact: ReturnType<typeof asLinkedin>;
  sent: boolean;
}) {
  return (
    <div className="site site-linkedin">
      <header>
        <strong>LinkedIn</strong>
        <em>{sent ? "Sent" : "Draft, not sent"}</em>
      </header>
      <p>
        <span>To</span>
        {artifact?.to || "Contact to verify"}
        {artifact?.role ? ` · ${artifact.role}` : ""}
      </p>
      <div>
        {artifact?.body ||
          "The note stays parked until the contact and reason are confirmed."}
      </div>
    </div>
  );
}

function PageScreen({
  account,
  artifact,
}: {
  account: string;
  artifact: ReturnType<typeof asOnePager>;
}) {
  return (
    <div className="site site-page">
      <header>
        <strong>Account page</strong>
        <em>Not live</em>
      </header>
      <h4>{artifact?.title || `${account} research brief`}</h4>
      {artifact ? (
        artifact.sections.map((section) => (
          <p key={section.heading}>
            <b>{section.heading}.</b> {section.body}
          </p>
        ))
      ) : (
        <p>Evidence, open questions, and product fit in one reviewable draft.</p>
      )}
    </div>
  );
}

function WorkspaceScreen({ beat }: { beat: ComputerBeat }) {
  return (
    <div className="site site-gdoc">
      <header>
        <strong>Agent workspace</strong>
        <span>{beat.title}</span>
      </header>
      <article>
        <p>The agent keeps its source links and draft state on this computer.</p>
      </article>
    </div>
  );
}

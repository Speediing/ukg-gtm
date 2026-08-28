import { FLEET, type FleetBot } from "@/data/fleet";

function initials(bot: FleetBot) {
  if (bot.mark) return bot.mark;
  const parts = bot.name.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] || ""}${parts[parts.length - 1][0] || ""}`.toUpperCase();
}

function AgentComputer({ bot }: { bot: FleetBot }) {
  return (
    <div className="agent-machine" aria-hidden>
      <div className="agent-screen">
        <span className="agent-screen-bar">
          <i />
          <i />
          <i />
        </span>
        <span className="agent-screen-work">
          <i style={{ background: bot.color }} />
          <i />
          <i />
        </span>
      </div>
      <span className="agent-machine-base" />
    </div>
  );
}

function AgentCard({ bot }: { bot: FleetBot }) {
  return (
    <a className="fleet-card" href={`#${bot.jobId}`}>
      <div className="fleet-card-top">
        <span
          className="org-avatar"
          style={{ background: bot.color }}
          aria-hidden
        >
          {initials(bot)}
        </span>
        <span className="fleet-status">
          <i />
          Computer ready
        </span>
      </div>
      <AgentComputer bot={bot} />
      <strong className="org-name">{bot.name}</strong>
      <span className="org-blurb">{bot.blurb}</span>
    </a>
  );
}

export function RosterChart() {
  return (
    <section id="roster" className="roster">
      <p className="eyebrow">Agents, not job titles</p>
      <h2>A small fleet, each on its own computer.</h2>
      <p className="section-lede">
        A call, an email, or a public signal can start the work. The agents use
        the same tools a rep already uses. Customer-facing work stays in draft
        until the rep approves it.
      </p>
      <div className="fleet-grid">
        {FLEET.map((agent) => (
          <AgentCard key={agent.id} bot={agent} />
        ))}
      </div>
    </section>
  );
}

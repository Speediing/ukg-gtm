import { CompareTable } from "@/components/CompareTable";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { RosterChart } from "@/components/RosterChart";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-watercolor-image"
          src="/brand/ukg-watercolor.svg"
          alt=""
        />
        <SiteNav />
      </div>

      <div className="report hero-paper">
        <div className="report-hero">
          <HeroTelemetry />
          <section className="hero">
            <div>
              <p className="eyebrow">A fleet for every UKG seller</p>
              <h1>The work between calls keeps moving.</h1>
              <p className="hero-intro">
                Grok Bot gives each rep a fleet of agents with their own cloud
                computers. Calls, questions, and account signals can start the
                work. The rep reviews what leaves.
              </p>
            </div>
          </section>

          <RosterChart />

          <section className="usecase-framing">
            <p className="eyebrow">Three places to start</p>
            <h2>
              Give the work around a deal to agents, then keep the rep in
              control of every customer-facing action.
            </h2>
            <p>
              Each example starts with a real trigger and ends with an artifact
              ready for review.
            </p>
          </section>

          <div className="metric-grid">
            {JOBS.map((job) => (
              <a
                key={job.id}
                className="metric-card"
                href={`#${job.id}`}
              >
                <div className="metric-card-top">
                  <p>Sample {String(job.number).padStart(2, "0")}</p>
                </div>
                <h2>{job.title}</h2>
                <p className="metric-trigger">Starts when {job.trigger.toLowerCase()}</p>
              </a>
            ))}
          </div>
        </div>

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="orbit-break" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/ukg-watercolor.svg" alt="" />
      </div>

      <div className="report">
        <CompareTable />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Cursor for UKG</p>
          <p>Grok Bot for UKG sales</p>
        </div>
        <address className="footer-contact">
          <p>UKG&apos;s Cursor account executive</p>
          <strong>Griffin Hewitt</strong>
          <a href="mailto:griffin.hewitt@cursor.com">
            griffin.hewitt@cursor.com
          </a>
        </address>
      </footer>
    </main>
  );
}

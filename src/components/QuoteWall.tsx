import { QUOTES } from "@/data/quotes";

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function QuoteWall() {
  return (
    <section id="testimonials" className="quotes">
      <h2>Testimonials</h2>
      <p className="section-lede">
        Six sourced reactions to the persistent-agent model.
      </p>
      <div className="quote-thread">
        {QUOTES.map((quote) => (
          <article
            key={`${quote.handle}-${quote.date}`}
            className="quote-row"
          >
            <div className="quote-who">
              <span className="quote-avatar quote-avatar-fallback" aria-hidden>
                {initials(quote.name)}
              </span>
              <div>
                <p className="quote-name">{quote.name}</p>
                <p className="quote-handle">{quote.handle}</p>
              </div>
            </div>
            <blockquote className="quote-bubble">{quote.quote}</blockquote>
            <a
              href={quote.source}
              target="_blank"
              rel="noopener noreferrer"
              className="quote-source"
              aria-label={`Read ${quote.name}'s source`}
            >
              Read source
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

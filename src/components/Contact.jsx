// @copyright 2026 Abel-Julius
// @license Apache-2.0

import Icon from "./ui/Icon";
import { actionStyles } from "./ui/actionStyles";
import { contactSocials } from "../data/socials";
import { site } from "../data/site";

const fieldClass =
  "h-9 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 hover:border-border-strong focus:border-ring focus:ring-2 focus:ring-ring/25";

const labelClass = "mb-1.5 block text-[13px] font-medium text-muted-foreground";

const Contact = () => (
  <section id="contact" aria-labelledby="contact-title" className="mt-10 pt-8">
    <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-14">
      <div>
        <h2
          id="contact-title"
          className="text-2xl font-semibold tracking-tight"
        >
          Contact
        </h2>

        <p className="mt-2 max-w-[34ch] text-[13.5px] leading-relaxed text-muted-foreground">
          Reach out to discuss project needs and start collaborating
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-4 inline-flex items-center gap-2 text-[13.5px] transition-colors hover:text-primary animate-pulse motion-reduce:animate-none"
        >
          <Icon name="mail" size={16} />
          Email me
        </a>

        <ul className="mt-4 flex items-center gap-3">
          {contactSocials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
              >
                <Icon className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <form
        action={site.formAction}
        method="POST"
        className="rounded-xl border border-border bg-card p-5"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              id="name"
              type="text"
              name="fi-sender-fullName"
              autoComplete="name"
              required
              placeholder="Abel Julius"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="fi-sender-email"
              autoComplete="email"
              required
              placeholder="you@company.com"
              className={fieldClass}
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="fi-text-message"
            rows={4}
            required
            placeholder="What are you building?"
            className={`${fieldClass} h-auto resize-y py-2`}
          />
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          {/* <p className="text-[12px] text-muted-foreground">Replies soon</p> */}

          <button type="submit" className={actionStyles()}>
            Send message
            <Icon name="send" size={15} />
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default Contact;

const content = {
  membership: {
    pill: "Mitmachen",
    title: "Mitglied werden",
    lead: "Mitgliedschaft beantragen und den Verein aktiv unterstützen. Alle wichtigen Punkte sind für Smartphone und Desktop kompakt gebündelt.",
    summaryTitle: "Was enthalten ist",
    summaryItems: [
      "Persönliche Angaben und Kontaktdaten",
      "Datenschutzerklärung und Kommunikationswünsche",
      "Arbeitsgruppen und SEPA-Lastschriftmandat"
    ],
    extraTitle: "Dokument öffnen",
    extraText: "Der Mitgliedsantrag kann direkt als PDF geöffnet werden. Den Dateinamen kannst du bei Bedarf später einfach austauschen.",
    actionLabel: "Mitgliedsantrag öffnen",
    actionHref: "mitgliedsantrag-freibadfreunde-emsetal.pdf"
  },
  support: {
    pill: "Fördern",
    title: "Fördervereinbarung",
    lead: "Für Unterstützerinnen und Unterstützer, die das Freibad finanziell begleiten möchten. Die Vereinbarung ist als eigener Bereich schnell erreichbar.",
    summaryTitle: "Was enthalten ist",
    summaryItems: [
      "Angaben des Förderers",
      "Förderzuwendung und Datenschutzerklärung",
      "SEPA-Basislastschrift und weitere Hinweise"
    ],
    extraTitle: "Dokument öffnen",
    extraText: "Die Fördervereinbarung öffnet sich direkt als PDF. Damit bleibt die Startseite klar und die Inhalte liegen in einem eigenen Fenster.",
    actionLabel: "Fördervereinbarung öffnen",
    actionHref: "foerdervereinbarung-freibadfreunde-emsetal.pdf"
  },
  donation: {
    pill: "Unterstützen",
    title: "Spenden",
    lead: "Jede Spende hilft direkt dem Freibad. Dieser Bereich kann später mit Bankdaten, PayPal oder einer externen Spendenseite verbunden werden.",
    infoBlocks: [
      ["Freibadfreunde Emsetal e.V.", "Bankverbindung kann hier ergänzt werden.", "IBAN: folgt", "BIC: folgt"],
      ["Hinweis", "Der Spendenbutton ist vorbereitet und kann später direkt mit einer echten Spendenmöglichkeit verknüpft werden."]
    ],
    actionLabel: "Jetzt spenden",
    actionHref: "#"
  },
  news: {
    pill: "Bleiben Sie dran",
    title: "Infos & Aktuelles",
    lead: "Kurze Vereinsinformationen, Hinweise und aktuelle Meldungen werden hier gesammelt, ohne die Startseite zu überladen.",
    items: [
      {
        date: "22.03.2026",
        category: "Aktuelles",
        title: "Fördervereinbarung jetzt online",
        text: "Neben dem Mitgliedsantrag steht jetzt auch die Fördervereinbarung direkt auf der Website bereit."
      },
      {
        date: "12.03.2026",
        category: "Verein",
        title: "Helferinnen und Helfer gesucht",
        text: "Für Pflege, Organisation und kleine Projekte rund um das Freibad freuen wir uns über Unterstützung."
      },
      {
        date: "01.03.2026",
        category: "Information",
        title: "Unterlagen mobil verfügbar",
        text: "Wichtige Vereinsunterlagen werden schrittweise digital eingebunden und sind auf dem Smartphone schnell erreichbar."
      }
    ]
  },
  contact: {
    pill: "Kontakt",
    title: "Schreiben Sie uns",
    lead: "Nutzen Sie das Formular für Fragen, Hinweise oder Unterstützung rund um den Verein und das Freibad.",
    note: "Beim Senden wird Ihr Mailprogramm mit einer vorbereiteten Nachricht geöffnet."
  }
};

const modalOverlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");
const modalButtons = document.querySelectorAll("[data-modal-key]");
let lastTrigger = null;

function createActionButton(label, href) {
  const isPlaceholder = !href || href === "#";
  const attrs = isPlaceholder
    ? 'href="#" data-placeholder-link="true"'
    : `href="${href}" target="_blank" rel="noopener noreferrer"`;

  return `<a class="btn btn--primary" ${attrs}>${label}</a>`;
}

function renderDocumentModal(data) {
  return `
    <div class="modal-header">
      <span class="modal-pill">${data.pill}</span>
      <h2 id="modal-title" class="modal-title">${data.title}</h2>
      <p class="modal-lead">${data.lead}</p>
    </div>

    <div class="modal-grid modal-grid--two">
      <section class="modal-panel">
        <h3>${data.summaryTitle}</h3>
        <ul class="modal-list">
          ${data.summaryItems.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="modal-panel">
        <h3>${data.extraTitle}</h3>
        <p>${data.extraText}</p>
      </section>
    </div>

    <div class="action-row">
      ${createActionButton(data.actionLabel, data.actionHref)}
      <button class="btn btn--ghost" type="button" data-close-modal="true">Zurück zur Startseite</button>
    </div>
  `;
}

function renderDonationModal(data) {
  return `
    <div class="modal-header">
      <span class="modal-pill">${data.pill}</span>
      <h2 id="modal-title" class="modal-title">${data.title}</h2>
      <p class="modal-lead">${data.lead}</p>
    </div>

    <div class="modal-grid modal-grid--two">
      ${data.infoBlocks.map(block => `
        <section class="modal-panel bank-card">
          <strong>${block[0]}</strong>
          ${block.slice(1).map(line => `<span>${line}</span>`).join("")}
        </section>
      `).join("")}
    </div>

    <div class="action-row">
      ${createActionButton(data.actionLabel, data.actionHref)}
      <button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button>
    </div>
  `;
}

function renderNewsModal(data) {
  return `
    <div class="modal-header">
      <span class="modal-pill">${data.pill}</span>
      <h2 id="modal-title" class="modal-title">${data.title}</h2>
      <p class="modal-lead">${data.lead}</p>
    </div>

    <div class="news-feed">
      ${data.items.map(item => `
        <article class="news-item">
          <div class="news-item__meta">
            <span>${item.date}</span>
            <span>${item.category}</span>
          </div>
          <h3 class="news-item__title">${item.title}</h3>
          <p class="news-item__text">${item.text}</p>
        </article>
      `).join("")}
    </div>

    <div class="action-row">
      <button class="btn btn--ghost" type="button" data-close-modal="true">Zur Startseite</button>
    </div>
  `;
}

function renderContactModal(data) {
  return `
    <div class="modal-header">
      <span class="modal-pill">${data.pill}</span>
      <h2 id="modal-title" class="modal-title">${data.title}</h2>
      <p class="modal-lead">${data.lead}</p>
    </div>

    <form class="contact-form-modal" data-contact-form="true">
      <div class="contact-form-modal__row">
        <label class="contact-field">
          <span>Name</span>
          <input type="text" name="name" placeholder="Ihr Name" required>
        </label>
        <label class="contact-field">
          <span>E-Mail</span>
          <input type="email" name="email" placeholder="ihre@mail.de" required>
        </label>
      </div>

      <div class="contact-form-modal__row">
        <label class="contact-field">
          <span>Telefon</span>
          <input type="text" name="phone" placeholder="optional">
        </label>
        <label class="contact-field">
          <span>Betreff</span>
          <input type="text" name="subject" placeholder="Ihr Anliegen" required>
        </label>
      </div>

      <label class="contact-field">
        <span>Nachricht</span>
        <textarea name="message" rows="6" placeholder="Ihre Nachricht an den Verein" required></textarea>
      </label>

      <p class="contact-note">${data.note}</p>

      <div class="action-row">
        <button class="btn btn--primary" type="submit">Nachricht vorbereiten</button>
        <button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button>
      </div>
    </form>
  `;
}

function renderModal(key) {
  if (key === "membership") return renderDocumentModal(content.membership);
  if (key === "support") return renderDocumentModal(content.support);
  if (key === "donation") return renderDonationModal(content.donation);
  if (key === "contact") return renderContactModal(content.contact);
  return renderNewsModal(content.news);
}

function openModal(key, trigger) {
  if (!modalOverlay || !modalContent) return;
  lastTrigger = trigger || null;
  modalContent.innerHTML = renderModal(key);
  modalOverlay.classList.remove("is-hidden");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modalOverlay || !modalContent) return;
  modalOverlay.classList.add("is-hidden");
  modalOverlay.setAttribute("aria-hidden", "true");
  modalContent.innerHTML = "";
  document.body.style.overflow = "hidden";
  if (lastTrigger) lastTrigger.focus();
}

function submitContactForm(form) {
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const subject = String(formData.get("subject") || "Kontakt über Website").trim();
  const message = String(formData.get("message") || "").trim();

  const bodyLines = [
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone || "-"}`,
    "",
    "Nachricht:",
    message
  ];

  const mailto = `mailto:FreibadFreundeEmsetal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

  window.location.href = mailto;

  setTimeout(() => {
    alert("Ihr Mailprogramm wird jetzt mit der vorausgefüllten Nachricht geöffnet.");
  }, 80);
}

function wireModals() {
  modalButtons.forEach(button => {
    button.addEventListener("click", () => openModal(button.dataset.modalKey, button));
  });

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", event => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      if (target === modalOverlay || target.dataset.closeModal === "true") {
        closeModal();
      }

      if (target.dataset.placeholderLink === "true") {
        event.preventDefault();
        alert("Dieser Spendenlink wird noch ergänzt.");
      }
    });

    modalOverlay.addEventListener("submit", event => {
      const target = event.target;
      if (!(target instanceof HTMLFormElement)) return;
      if (target.dataset.contactForm !== "true") return;

      event.preventDefault();
      submitContactForm(target);
    });
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modalOverlay && !modalOverlay.classList.contains("is-hidden")) {
      closeModal();
    }
  });
}

function init() {
  wireModals();
}

document.addEventListener("DOMContentLoaded", init);
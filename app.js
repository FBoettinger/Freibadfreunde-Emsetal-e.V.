const content = {
  membership: {
    pill: "Mitmachen",
    title: "Mitglied / Förderer werden",
    lead: "Mitgliedsantrag und Fördervereinbarung gemeinsam an einem Ort öffnen.",
    summaryTitle: "Was Sie hier finden",
    summaryItems: [
      "Mitgliedsantrag für eine aktive Vereinsmitgliedschaft",
      "Fördervereinbarung für finanzielle Unterstützung des Freibads",
      "Direkte PDF-Öffnung beider Dokumente in einem gemeinsamen Bereich"
    ],
    extraTitle: "Dokumente direkt öffnen",
    extraText: "Beide PDF-Dokumente stehen direkt zur Verfügung und können separat geöffnet werden.",
    actionButtons: [
      {
        label: "Mitgliedsantrag öffnen",
        href: "mitgliedsantrag-freibadfreunde-emsetal.pdf"
      },
      {
        label: "Fördervereinbarung öffnen",
        href: "foerdervereinbarung-freibadfreunde-emsetal.pdf"
      }
    ]
  },

  donation: {
    pill: "Unterstützen",
    title: "Spenden",
    lead: "Jede Spende hilft direkt dem Freibad.",
    infoBlocks: [
      [
        "Freibadfreunde Emsetal e.V.",
        "Kreissparkasse Gotha",
        "IBAN: DE20 8205 2020 0300 1094 07",
        "BIC: HELADEF1GTH"
      ],
      [
        "Hinweis",
        "Der Spendenbutton ist vorbereitet und kann später direkt mit einer echten Spendenmöglichkeit verknüpft werden."
      ]
    ],
    actionLabel: "Jetzt spenden",
    actionHref: "#"
  },

  news: {
    pill: "Bleiben Sie dran",
    title: "Aktuelles",
    lead: "Vereinsinformationen und aktuelle Meldungen:",
    heroImage: {
      src: "bademeisterhaus-spendenaufruf.jpg",
      alt: "Spendenaufruf für ein neues Bademeister-Haus im Schwimmbad Winterstein"
    },
    heroHighlight: {
      date: "01.04.2026",
      category: "Spendenprojekt",
      title: "Spendenaufruf für ein neues Bademeister-Haus",
      text: "Mit dem aktuellen Spendenaufruf sammeln wir Unterstützung für ein neues Bademeister-Haus im Freibad Winterstein.",
      actionLabel: "Jetzt mit PayPal spenden",
      actionHref: "https://www.paypal.com/donate/?hosted_button_id=RX8KZ9DMTHAKA"
    },
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
      }
    ]
  },

  infos: {
    pill: "Infos",
    title: "Freibad Emsetal",
    lead: "Öffnungszeiten und Preisliste des Freibads Winterstein auf einen Blick.",
    openingHours: [
      ["Saison", "04.07.26-14.08.26"],
      ["Täglich", "10:00-19:00 Uhr"],
      ["Hinweis", "Änderungen je nach Wetterlage oder Veranstaltungen möglich"]
    ],
    prices: [
      { title: "Erwachsene (ab 17 Jahre)", day: "4,00€" },
      { title: "Studenten / Rentner", day: "2,00€" },
      { title: "Kinder und Jugendliche (bis einschl. 16 Jahre)", day: "2,00€" }
    ],
    eveningNote: ""
  },

  contact: {
    pill: "Kontakt",
    title: "Schreiben Sie uns",
    lead: "Nutzen Sie das Formular für Fragen, Hinweise oder Unterstützung rund um den Verein und das Freibad.",
    note: "Beim Senden wird Ihr Mailprogramm mit einer vorbereiteten Nachricht geöffnet."
  },

  gallery: {
    pill: "Verein",
    title: "Galerie - Wer wir sind",
    lead: "Einblicke in den Verein, unsere Arbeit und die Geschichte des Freibads.",
    introTitle: "Wer wir sind",
    introText:
      "Hinter den Freibadfreunden Emsetal e.V. stehen engagierte Menschen, die sich gemeinsam für den Erhalt und die Zukunft des Freibads einsetzen.",
    teamPhoto: {
      title: "August 2025",
      info: "Vereinsgründung – Informationsveranstaltung in der Feuerwehr Winterstein",
      src: "freibadfreunde-team.jpg",
      alt: "Gruppenfoto der Freibadfreunde Emsetal vor dem Eingang mit Vereinsbanner",
      actionLabel: "Foto öffnen",
      actionHref: "freibadfreunde-team.jpg"
    },
    winterspielePhoto: {
      title: "Januar 2026",
      text: "Dieses Bild zeigt die Freibadfreunde Emsetal bei der Übergabe einer Förderung der Winterspiele in Höhe von 2.000 Euro.",
      src: "winterspiele-spende.jpg",
      alt: "Freibadfreunde Emsetal bei einer Förderübergabe der Winterspiele über 2.000 Euro",
      actionLabel: "Bild öffnen",
      actionHref: "winterspiele-spende.jpg"
    },
    timeline: {
      title: "Zeitstrahl Schwimmbad",
      text: "Hier finden Sie den historischen Zeitstrahl mit Bildern und Stationen zur Entwicklung des Schwimmbads.",
      actionLabel: "Zeitstrahl als PDF öffnen",
      actionHref: "zeitstrahl-schwimmbad.pdf"
    },
    infoSheet: {
      title: "Vereinsinfos & Ziele",
      text: "Dieses Dokument enthält aktuelle Informationen zur Vereinsgründung, Neuigkeiten sowie die Ziele und Planungen für 2025 und 2026.",
      actionLabel: "Infodokument öffnen",
      actionHref: "freibadfreunde-info.pdf"
    }
  },

  imprint: {
    pill: "Rechtliches",
    title: "Impressum",
    lead: "Angaben zur Anbieterkennzeichnung für die Website des Freibadfreunde Emsetal e.V.",
    club: "Freibadfreunde Emsetal e.V.",
    street: "Lerchenbergstraße 17",
    city: "99880 Waltershausen",
    seat: "Waltershausen, OT Winterstein",
    representatives: ["Robert Deutsch", "Claudia Fabig"],
    email: "freibadfreundeemsetal@gmail.com",
    phone: "",
    register: "Gotha",
    registerNumber: "VR 141702",
    editorialResponsible: ""
  },

  privacy: {
    pill: "Rechtliches",
    title: "Datenschutz",
    lead: "Informationen zur Verarbeitung personenbezogener Daten auf der Website des Freibadfreunde Emsetal e.V.",
    controllerName: "Freibadfreunde Emsetal e.V.",
    controllerStreet: "Lerchenbergstraße 17",
    controllerCity: "99880 Waltershausen",
    controllerEmail: "freibadfreundeemsetal@gmail.com",
    hostingProvider: "GitHub Pages (GitHub, Inc.)",
    contactNote:
      "Wenn Sie das Kontaktformular nutzen, werden die eingegebenen Angaben nicht auf einem Website-Server gespeichert, sondern an Ihr Mailprogramm übergeben.",
    rights: [
      "Auskunft über Ihre gespeicherten personenbezogenen Daten",
      "Berichtigung unrichtiger Daten",
      "Löschung Ihrer Daten, soweit keine gesetzlichen Pflichten entgegenstehen",
      "Einschränkung der Verarbeitung",
      "Widerspruch gegen die Verarbeitung",
      "Beschwerde bei einer Datenschutz-Aufsichtsbehörde"
    ]
  }
};

const paypalDonateConfig = {
  env: "production",
  hostedButtonId: "RX8KZ9DMTHAKA"
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
  const actionButtons =
    Array.isArray(data.actionButtons) && data.actionButtons.length
      ? data.actionButtons
          .map(button => createActionButton(button.label, button.href))
          .join("")
      : createActionButton(data.actionLabel, data.actionHref);

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
      ${actionButtons}
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
      <section class="modal-panel bank-card">
        <strong>${data.infoBlocks[0][0]}</strong>
        ${data.infoBlocks[0].slice(1).map(line => `<span>${line}</span>`).join("")}
      </section>

      <section class="modal-panel">
        <h3>Online spenden mit PayPal</h3>
        <div id="paypal-donate-button-container"></div>
        <p id="paypal-donate-status" class="paypal-status"></p>
      </section>
    </div>

    <div class="action-row">
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

    <section class="modal-panel">
      ${
        data.heroHighlight
          ? `
        <div style="margin-bottom: 1.1rem;">
          <div class="news-item__meta">
            <span>${data.heroHighlight.date}</span>
            <span>${data.heroHighlight.category}</span>
          </div>
          <h3 class="news-item__title">${data.heroHighlight.title}</h3>
          <p class="news-item__text" style="margin-bottom: 1rem;">
            ${data.heroHighlight.text}
          </p>
          <div class="action-row" style="margin-bottom: 1.1rem;">
            ${createActionButton(data.heroHighlight.actionLabel, data.heroHighlight.actionHref)}
          </div>
        </div>
      `
          : ""
      }

      ${
        data.heroImage
          ? `
        <img
          src="${data.heroImage.src}"
          alt="${data.heroImage.alt}"
          style="width: 100%; display: block; border-radius: 20px; box-shadow: 0 16px 36px rgba(12, 61, 84, 0.12);"
        >
      `
          : ""
      }
    </section>

    <div class="news-feed">
      ${data.items
        .map(
          item => `
        <article class="news-item">
          <div class="news-item__meta">
            <span>${item.date}</span>
            <span>${item.category}</span>
          </div>
          <h3 class="news-item__title">${item.title}</h3>
          <p class="news-item__text">${item.text}</p>
        </article>
      `
        )
        .join("")}
    </div>

    <div class="action-row">
      <button class="btn btn--ghost" type="button" data-close-modal="true">Zur Startseite</button>
    </div>
  `;
}

function renderInfosModal(data) {
  return `
    <div class="modal-header">
      <span class="modal-pill">${data.pill}</span>
      <h2 id="modal-title" class="modal-title">${data.title}</h2>
      <p class="modal-lead">${data.lead}</p>
    </div>

    <div class="modal-grid">
      <section class="modal-panel">
        <h3>Öffnungszeiten</h3>
        <div class="news-feed">
          ${data.openingHours
            .map(
              item => `
            <article class="news-item">
              <h4 class="news-item__title">${item[0]}</h4>
              <p class="news-item__text">${item[1]}</p>
            </article>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="modal-panel">
        <h3>Preisliste Freibad Emsetal</h3>
        <div class="news-feed">
          ${data.prices
            .map(
              price => `
            <article class="news-item">
              <h4 class="news-item__title">${price.title}</h4>
              <p class="news-item__text">
                Eintritt: ${price.day}<br>
              </p>
            </article>
          `
            )
            .join("")}
        </div>
        ${data.eveningNote ? `<p style="margin-top: 0.75rem;">${data.eveningNote}</p>` : ""}
      </section>
    </div>

    <div class="action-row">
      <button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button>
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

function renderGalleryModal(data) {
  return `
    <div class="modal-header">
      <span class="modal-pill">${data.pill}</span>
      <h2 id="modal-title" class="modal-title">${data.title}</h2>
      <p class="modal-lead">${data.lead}</p>
    </div>

    <div class="modal-grid modal-grid--two">
      <section class="modal-panel">
        <h3>${data.introTitle}</h3>
        <p>${data.introText}</p>
      </section>

      <section class="modal-panel">
        <h3>${data.timeline.title}</h3>
        <p>${data.timeline.text}</p>
        <div class="action-row" style="margin-top: 1rem;">
          ${createActionButton(data.timeline.actionLabel, data.timeline.actionHref)}
        </div>
      </section>
    </div>

    <div class="modal-grid modal-grid--two">
      <section class="modal-panel">
        <h3>${data.infoSheet.title}</h3>
        <p>${data.infoSheet.text}</p>
        <div class="action-row" style="margin-top: 1rem;">
          ${createActionButton(data.infoSheet.actionLabel, data.infoSheet.actionHref)}
        </div>
      </section>

      <section class="modal-panel">
        <h3>${data.teamPhoto.title}</h3>
        <img
          src="${data.teamPhoto.src}"
          alt="${data.teamPhoto.alt}"
          style="width: 100%; display: block; border-radius: 20px; margin: 0.9rem 0 1rem; box-shadow: 0 16px 36px rgba(12, 61, 84, 0.12);"
        >
        <p style="margin: 0 0 0.85rem; color: var(--primary-strong); line-height: 1.55;">
          ${data.teamPhoto.info}
        </p>
        <div class="action-row" style="margin-top: 1rem;">
          ${createActionButton(data.teamPhoto.actionLabel, data.teamPhoto.actionHref)}
        </div>
      </section>
    </div>

    <section class="modal-panel">
      <h3>${data.winterspielePhoto.title}</h3>
      <img
        src="${data.winterspielePhoto.src}"
        alt="${data.winterspielePhoto.alt}"
        style="width: 100%; display: block; border-radius: 20px; margin: 0.9rem 0 1rem; box-shadow: 0 16px 36px rgba(12, 61, 84, 0.12);"
      >
      <p>${data.winterspielePhoto.text}</p>
      <div class="action-row" style="margin-top: 1rem;">
        ${createActionButton(data.winterspielePhoto.actionLabel, data.winterspielePhoto.actionHref)}
      </div>
    </section>

    <div class="action-row">
      <button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button>
    </div>
  `;
}

function renderImprintModal(data) {
  const phoneMarkup = data.phone ? `Telefon: ${data.phone}` : ``;

  const editorialMarkup = data.editorialResponsible
    ? `
      <section class="modal-panel">
        <h3>Inhaltlich verantwortlich</h3>
        <p>${data.editorialResponsible}</p>
      </section>
    `
    : ``;

  return `
    <div class="modal-header">
      <span class="modal-pill">${data.pill}</span>
      <h2 id="modal-title" class="modal-title">${data.title}</h2>
      <p class="modal-lead">${data.lead}</p>
    </div>

    <div class="modal-grid modal-grid--two">
      <section class="modal-panel">
        <h3>Anbieter</h3>
        <p>
          ${data.club}<br>
          ${data.street}<br>
          ${data.city}<br>
          Vereinssitz: ${data.seat}
        </p>
      </section>

      <section class="modal-panel">
        <h3>Vertreten durch</h3>
        <p>
          Vorstand / Vorsitzende:<br>
          ${data.representatives.join("<br>")}
        </p>
      </section>

      <section class="modal-panel">
        <h3>Kontakt</h3>
        <p>
          E-Mail:
          <a class="text-link" href="mailto:${data.email}">${data.email}</a>
          ${phoneMarkup ? `<br>${phoneMarkup}` : ""}
        </p>
      </section>

      <section class="modal-panel">
        <h3>Registereintrag</h3>
        <p>
          Eintragung im Vereinsregister<br>
          Register: ${data.register}<br>
          Registernummer: ${data.registerNumber}
        </p>
      </section>

      ${editorialMarkup}
    </div>

    <div class="action-row">
      <button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button>
    </div>
  `;
}

function renderPrivacyModal(data) {
  return `
    <div class="modal-header">
      <span class="modal-pill">${data.pill}</span>
      <h2 id="modal-title" class="modal-title">${data.title}</h2>
      <p class="modal-lead">${data.lead}</p>
    </div>

    <div class="modal-grid modal-grid--two">
      <section class="modal-panel">
        <h3>Verantwortlicher</h3>
        <p>
          ${data.controllerName}<br>
          ${data.controllerStreet}<br>
          ${data.controllerCity}<br>
          E-Mail:
          <a class="text-link" href="mailto:${data.controllerEmail}">${data.controllerEmail}</a><br>
        </p>
      </section>

      <section class="modal-panel">
        <h3>Hosting</h3>
        <p>${data.hostingProvider}</p>
      </section>

      <section class="modal-panel">
        <h3>Kontaktformular</h3>
        <p>${data.contactNote}</p>
      </section>

      <section class="modal-panel">
        <h3>Ihre Rechte</h3>
        <ul class="modal-list">
          ${data.rights.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    </div>

    <div class="action-row">
      <button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button>
    </div>
  `;
}

function renderModal(key) {
  if (key === "membership") return renderDocumentModal(content.membership);
  if (key === "donation") return renderDonationModal(content.donation);
  if (key === "news") return renderNewsModal(content.news);
  if (key === "infos") return renderInfosModal(content.infos);
  if (key === "contact") return renderContactModal(content.contact);
  if (key === "gallery") return renderGalleryModal(content.gallery);
  if (key === "imprint") return renderImprintModal(content.imprint);
  if (key === "privacy") return renderPrivacyModal(content.privacy);
  return "";
}

function setDonateStatus(message, type = "") {
  const status = document.getElementById("paypal-donate-status");
  if (!status) return;

  status.textContent = message;
  status.className = "paypal-status";
  if (type) status.classList.add(`paypal-status--${type}`);
}

function renderDonateButton() {
  const container = document.getElementById("paypal-donate-button-container");
  if (!container) return;
  if (container.dataset.rendered === "true") return;

  if (!window.PayPal || !window.PayPal.Donation || !window.PayPal.Donation.Button) {
    setDonateStatus("PayPal Donate konnte nicht geladen werden.", "error");
    return;
  }

  window.PayPal.Donation.Button({
    env: paypalDonateConfig.env,
    hosted_button_id: paypalDonateConfig.hostedButtonId,
    image: {
      src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
      title: "PayPal - The safer, easier way to pay online!",
      alt: "Donate with PayPal button"
    },
    onComplete(params) {
      console.log("PayPal-Spende abgeschlossen:", params);
      setDonateStatus("Vielen Dank für die Spende!", "success");
    }
  }).render("#paypal-donate-button-container");

  container.dataset.rendered = "true";
}

function openModal(key, trigger) {
  if (!modalOverlay || !modalContent) return;

  lastTrigger = trigger || null;
  modalContent.innerHTML = renderModal(key);
  modalOverlay.classList.remove("is-hidden");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (key === "donation") {
    requestAnimationFrame(() => {
      renderDonateButton();
    });
  }
}

function closeModal() {
  if (!modalOverlay || !modalContent) return;

  if (lastTrigger && !window.matchMedia("(pointer: coarse)").matches) {
    lastTrigger.focus({ preventScroll: true });
  } else if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }

  modalOverlay.classList.add("is-hidden");
  modalOverlay.setAttribute("aria-hidden", "true");
  modalContent.innerHTML = "";
  document.body.style.overflow = "";
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

  const mailto = `mailto:FreibadFreundeEmsetal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    bodyLines.join("\n")
  )}`;

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
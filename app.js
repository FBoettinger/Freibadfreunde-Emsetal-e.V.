const content = {
  hero: {
    left: {
      label: "Damals",
      imageSrc: "schwimmbad-60er.webp",
      imageAlt: "Historisches Foto des Schwimmbads aus den 60er Jahren",
      caption: "Schwimmbad in den 60er Jahren",
      subcaption: "Ein Blick zurück in die Anfangszeit."
    },
    right: {
      label: "Heute",
      imageSrc: "schwimmbad-heute.jpg",
      imageAlt: "Aktuelles Foto des Schwimmbads",
      caption: "Schwimmbad heute",
      subcaption: "Aktueller Blick ins Freibad."
    },
    chip: {
      label: "Verein",
      text: "kompakt, klar, schnell erreichbar"
    }
  },
  news: [
    {
      date: "20.03.2026",
      category: "Aktuelles",
      title: "Mitgliedsantrag jetzt online",
      text: "Der komplette Mitgliedsantrag mit SEPA-Lastschriftmandat steht ab sofort direkt auf der Website bereit."
    },
    {
      date: "12.03.2026",
      category: "Verein",
      title: "Freiwillige Helferinnen und Helfer gesucht",
      text: "Für Pflege, Organisation und kleine Projekte rund um das Freibad freuen wir uns über Unterstützung."
    },
    {
      date: "01.03.2026",
      category: "Information",
      title: "Aktuelle Unterlagen mobil verfügbar",
      text: "Wichtige Vereinsunterlagen werden schrittweise digital eingebunden, damit sie auf Smartphone und PC direkt erreichbar sind."
    }
  ],
  documents: {
    left: {
      eyebrow: "Mitgliedsantrag",
      title: "Mitglied werden",
      text: "Der Antrag enthält persönliche Angaben, Kommunikationswünsche, Datenschutzerklärung, Arbeitsgruppen und das SEPA-Lastschriftmandat.",
      imageLabel: "Mitgliedsantrag",
      imageSrc: "mitgliedsantrag-seite-1.png",
      imageAlt: "Vorschau der ersten Seite des Mitgliedsantrags",
      buttonText: "Mitgliedsantrag öffnen",
      link: "mitgliedsantrag-freibadfreunde-emsetal.pdf"
    },
    right: {
      eyebrow: "Weitere Unterlagen",
      title: "Förderantrag folgt",
      text: "Hier kann als Nächstes der Förderantrag oder eine weitere Vereinsunterlage eingebunden werden.",
      imageLabel: "Unterlage",
      qrLabel: "Info",
      buttonText: "Bald verfügbar",
      link: "#"
    }
  },
  donation: {
    link: "#",
    lines: [
      "Mit Ihrer Spende helfen Sie direkt dem Freibad.",
      "Mitgliedschaft, Hilfe vor Ort oder finanzielle Unterstützung sind möglich."
    ],
    infoTitle: "Spendeninformationen",
    infoText: [
      "Freibadfreunde Emsetal e.V.",
      "Details zum Spendenkonto können hier eingetragen werden.",
      "Der Button kann später direkt zur Spendenaktion führen."
    ]
  }
};

function createHeroNote(data) {
  if (data.imageSrc) {
    return `
      <div class="hero-note__card hero-note__card--photo">
        <div class="image-card image-card--photo">
          <span class="image-card__label">${data.label}</span>
          <img
            class="image-card__photo"
            src="${data.imageSrc}"
            alt="${data.imageAlt || data.caption || "Bild"}"
          >
        </div>
        <div class="hero-note__caption">
          <strong>${data.caption || ""}</strong>
          ${data.subcaption ? `<span>${data.subcaption}</span>` : ""}
        </div>
      </div>
    `;
  }

  return `
    <div class="hero-note__card">
      <div class="image-card" aria-hidden="true">
        <span class="image-card__label">${data.label}</span>
        <p class="image-card__title">${data.title}</p>
      </div>
      <div class="hero-note__scribble">
        ${data.notes.map(note => `<span>${note}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderHero() {
  const left = document.getElementById("hero-left");
  const right = document.getElementById("hero-right");
  const chip = document.getElementById("floating-chip");

  if (left) left.innerHTML = createHeroNote(content.hero.left);
  if (right) right.innerHTML = createHeroNote(content.hero.right);

  if (chip) {
    chip.innerHTML = `
      <span class="floating-chip__label">${content.hero.chip.label}</span>
      <span class="floating-chip__text">${content.hero.chip.text}</span>
    `;
  }
}

function renderNews() {
  const container = document.getElementById("news-list");
  if (!container) return;

  container.innerHTML = content.news.map(item => `
    <article class="news-item">
      <div class="news-item__meta">
        <span>${item.date}</span>
        <span>${item.category}</span>
      </div>
      <h3 class="news-item__title">${item.title}</h3>
      <p class="news-item__text">${item.text}</p>
    </article>
  `).join("");
}

function createDocumentCard(data) {
  const imageContent = data.imageSrc
    ? `<img class="doc-image__preview" src="${data.imageSrc}" alt="${data.imageAlt || data.title}">`
    : data.imageLabel;

  const qrContent = data.qrLabel
    ? `<div class="qr-box" aria-hidden="true">${data.qrLabel}</div>`
    : "";

  return `
    <article class="doc-card">
      <p class="doc-card__eyebrow">${data.eyebrow}</p>
      <h3 class="doc-card__title">${data.title}</h3>
      <p class="doc-card__text">${data.text}</p>
      <div class="doc-card__visual">
        <div class="doc-image">${imageContent}</div>
        ${qrContent}
      </div>
      <div class="doc-card__actions">
        <a class="btn btn--ghost" href="${data.link}" data-doc-link="${data.eyebrow}">${data.buttonText}</a>
      </div>
    </article>
  `;
}

function renderDocuments() {
  const left = document.getElementById("doc-left");
  const right = document.getElementById("doc-right");

  if (left) left.innerHTML = createDocumentCard(content.documents.left);
  if (right) right.innerHTML = createDocumentCard(content.documents.right);
}

function renderDonation() {
  const lines = document.getElementById("donation-lines");
  const donationLink = document.getElementById("donation-link");
  const infoBox = document.getElementById("donation-info");

  if (lines) {
    lines.innerHTML = content.donation.lines
      .map(line => `<div class="donation-line">${line}</div>`)
      .join("");
  }

  if (donationLink) {
    donationLink.setAttribute("href", content.donation.link || "#");
  }

  if (infoBox) {
    infoBox.innerHTML = `
      <strong>${content.donation.infoTitle}</strong>
      ${content.donation.infoText.map(line => `<p>${line}</p>`).join("")}
    `;
  }
}

function wirePlaceholders() {
  const links = [
    document.getElementById("donation-link"),
    ...document.querySelectorAll("[data-doc-link]")
  ].filter(Boolean);

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href === "#") {
      link.addEventListener("click", event => {
        event.preventDefault();
        alert("Dieser Bereich wird noch ergänzt.");
      });
    }
  });
}

function wireDonationInfo() {
  const button = document.getElementById("donation-info-btn");
  const box = document.getElementById("donation-info");
  if (!button || !box) return;

  button.addEventListener("click", () => {
    box.classList.toggle("is-hidden");
    button.textContent = box.classList.contains("is-hidden")
      ? "Infos einblenden"
      : "Infos ausblenden";
  });
}

function setYear() {
  const target = document.getElementById("current-year");
  if (target) target.textContent = new Date().getFullYear();
}

function init() {
  renderHero();
  renderNews();
  renderDocuments();
  renderDonation();
  wirePlaceholders();
  wireDonationInfo();
  setYear();
}

document.addEventListener("DOMContentLoaded", init);
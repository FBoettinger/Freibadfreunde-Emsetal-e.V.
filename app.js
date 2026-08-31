/*
  ============================================================================
  FREIBADFREUNDE EMSETAL – SCHNELL ÄNDERBARE WEBSEITEN-DATEN
  ============================================================================
  Für normale Aktualisierungen musst du nur den Bereich SITE_CONFIG ändern.

  WICHTIG:
  1) Preise        -> SITE_CONFIG.prices
  2) Öffnungszeiten -> SITE_CONFIG.openingPeriods
  3) Saisonende    -> SITE_CONFIG.season.end
  4) Veranstaltungen/Flyer -> SITE_CONFIG.events
  5) Saison-Dank / Werbung -> SITE_CONFIG.postSeason
     (erscheint nur nach Klick auf „Danke & Ausblick“, niemals automatisch)

  Der restliche Code darunter baut daraus automatisch Startseite und Pop-ups.
  ============================================================================
*/

const SITE_CONFIG = {
  season: {
    year: 2026,
    start: "2026-07-04",
    end: "2026-08-30",
    label: "Saison 2026 · verlängert bis 30.08."
  },

  prices: [
    { title: "Erwachsene", day: "2,00 €", season: "30,00 €" },
    { title: "Kinder", day: "1,00 €", season: "20,00 €" }
  ],

  /*
    Wochentage: 0 = Sonntag, 1 = Montag, 2 = Dienstag, 3 = Mittwoch,
                4 = Donnerstag, 5 = Freitag, 6 = Samstag

    null = geschlossen
  */
  openingPeriods: [
    {
      id: "main-season",
      label: "04.07. bis 16.08.2026",
      from: "2026-07-04",
      to: "2026-08-16",
      days: {
        0: "10:00–19:00 Uhr",
        1: "10:00–19:00 Uhr",
        2: "10:00–19:00 Uhr",
        3: "10:00–19:00 Uhr",
        4: "10:00–19:00 Uhr",
        5: "10:00–19:00 Uhr",
        6: "10:00–19:00 Uhr"
      }
    },
    {
      id: "extension",
      label: "Ab 17.08. bis 30.08.2026",
      from: "2026-08-17",
      to: "2026-08-30",
      days: {
        0: "10:00–19:00 Uhr",
        1: null,
        2: null,
        3: "14:00–19:00 Uhr",
        4: "14:00–19:00 Uhr",
        5: "14:00–19:00 Uhr",
        6: "10:00–19:00 Uhr"
      }
    }
  ],

  openingNote: "Änderungen aufgrund von Wetterlage oder Veranstaltungen sind möglich.",


  /*
    Saison-Dank / Winterpause:
    Dieser Bereich wird nach dem letzten Öffnungstag automatisch aktiv.
    "activeFrom" ist auf den endgültigen Badeschluss 2026 gesetzt.
    Der Dank erscheint bewusst NICHT automatisch, sondern nur nach Klick auf
    „Danke & Ausblick“ bzw. die entsprechende Saison-Dank-Karte.
  */
  postSeason: {
    activeFrom: "2026-08-30T19:00:00+02:00",
    year: 2026,
    nextYear: 2027,
    pill: "Danke für die Saison 2026",
    title: "Danke, dass ihr unser Freibad möglich macht.",
    lead: "Die Badesaison 2026 ist beendet. Danke an alle Gäste, Mitglieder, Förderer, Spender, Helfer und Unterstützer, die diesen Sommer möglich gemacht haben.",
    body: "Auch außerhalb der Badesaison läuft unsere Arbeit weiter. Mit Mitgliedschaften, Förderbeiträgen, Spenden und Hilfe vor Ort bereiten wir gemeinsam die Saison 2027 vor.",
    highlight: "Gemeinsam Richtung Saison 2027",
    points: [
      "Mitglied werden & den Verein stärken",
      "Als Förderer Projekte ermöglichen",
      "Mit einer Spende direkt helfen",
      "Bei Aktionen & Projekten mit anpacken"
    ],
    footer: "Jede Form der Unterstützung hilft – vielen Dank für euren Rückhalt!",
    membershipLabel: "Mitglied / Förderer werden",
    donationLabel: "Jetzt unterstützen"
  },

  events: [
    {
      id: "season-extension",
      category: "Saisonverlängerung",
      title: "Gute Nachrichten: Wir verlängern die Freibad-Saison!",
      shortText: "Das Freibad Winterstein bleibt bis zum 30.08.2026 geöffnet. Ab 17.08. gelten angepasste Öffnungszeiten.",
      dateLabel: "Bis 30.08.2026",
      date: "2026-08-30",
      time: "",
      location: "Freibad Winterstein",
      image: "saisonverlaengerung-2026.png",
      imageAlt: "Flyer: Freibad-Saison im Freibad Winterstein bis 30.08.2026 verlängert",
      highlights: [
        "Montag und Dienstag geschlossen",
        "Mittwoch bis Freitag: 14:00–19:00 Uhr",
        "Samstag und Sonntag: 10:00–19:00 Uhr"
      ],
      primaryAction: { label: "Öffnungszeiten ansehen", modalKey: "infos" },
      imageActionLabel: "Flyer groß öffnen",
      visibleUntil: "2026-08-30T19:00:00+02:00"
    },
    {
      id: "season-finale",
      category: "Saisonabschluss",
      title: "Abendschwimmen zum Saisonabschluss",
      shortText: "Gemeinsam mit dem Sportverein Emsetal e.V.: Wasserball-Action, Zorb & more, Musik, Getränke und Essen.",
      dateLabel: "Fr. 28.08.2026 · 17–22 Uhr",
      date: "2026-08-28",
      time: "17:00–22:00 Uhr",
      location: "Freibad Winterstein",
      image: "saisonabschluss-2026.png",
      imageAlt: "Flyer zum Saisonabschluss und Abendschwimmen am 28.08.2026 im Freibad Winterstein",
      highlights: [
        "Wasserball-Action mit Zorb & more",
        "Musik und gute Stimmung",
        "Mojito, Piña Colada, Bier und alkoholfreie Getränke",
        "Bratwurst und Brätel vom Rost, Popcorn und Eis"
      ],
      calendarHref: "saisonabschluss-2026.ics",
      calendarLabel: "Termin speichern",
      imageActionLabel: "Flyer groß öffnen",
      visibleUntil: "2026-08-29T02:00:00"
    },
    {
      id: "benefiz-2026",
      category: "Rückblick · Benefizveranstaltung",
      title: "Zum Erhalt des Freibades Winterstein",
      shortText: "Am 04.07.2026 fand im Freibad Winterstein eine Benefizveranstaltung mit Musik, Essen, Hüpfburg, Kinderschminken und Trike-Ausfahrten statt.",
      dateLabel: "Sa. 04.07.2026 · 13–01 Uhr",
      date: "2026-07-04",
      time: "13:00–01:00 Uhr",
      location: "Freibad Winterstein",
      image: "benefizveranstaltung-freibad-winterstein-2026.jpg",
      imageAlt: "Flyer zur Benefizveranstaltung am 04.07.2026 zum Erhalt des Freibades Winterstein",
      highlights: [
        "Musik und gemeinsames Feiern für den Erhalt des Freibads",
        "Essen und Getränke",
        "Hüpfburg und Kinderschminken",
        "Trike-Ausfahrten"
      ],
      calendarHref: "benefizveranstaltung-freibad-winterstein-2026.ics",
      calendarLabel: "Termin-Datei öffnen",
      extraActions: [
        { label: "Mit PayPal spenden", href: "https://www.paypal.com/donate/?hosted_button_id=RX8KZ9DMTHAKA" }
      ],
      imageActionLabel: "Flyer groß öffnen",
      visibleUntil: "2026-07-05T03:00:00"
    }
  ]
};

/*
  ============================================================================
  BESTEHENDE INHALTE – bleiben vollständig erhalten
  ============================================================================
*/
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
      { label: "Mitgliedsantrag öffnen", href: "mitgliedsantrag-freibadfreunde-emsetal.pdf" },
      { label: "Fördervereinbarung öffnen", href: "foerdervereinbarung-freibadfreunde-emsetal.pdf" }
    ]
  },

  donation: {
    pill: "Unterstützen",
    title: "Spenden",
    lead: "Jede Spende hilft direkt dabei, das Freibad Winterstein zu erhalten und weiterzuentwickeln.",
    bank: [
      "Freibadfreunde Emsetal e.V.",
      "Kreissparkasse Gotha",
      "IBAN: DE20 8205 2020 0300 1094 07",
      "BIC: HELADEF1GTH"
    ],
    paypalHref: "https://www.paypal.com/donate/?hosted_button_id=RX8KZ9DMTHAKA",
    paypalLabel: "Mit PayPal spenden"
  },

  news: {
    pill: "Aktuelles",
    title: "Infos & Neuigkeiten",
    lead: "Aktuelle Hinweise, Vereinsinformationen und Rückblicke.",
    items: [
      {
        date: "30.08.2026",
        category: "Saison 2026",
        title: "Danke für eine schöne Freibad-Saison!",
        text: "Die Saison 2026 ist beendet. Wir bedanken uns bei allen Gästen, Mitgliedern, Förderern, Spendern, Helfern und Unterstützern – und freuen uns schon jetzt auf alles, was wir gemeinsam für 2027 bewegen können.",
        modalKey: "seasonThanks"
      },
      {
        date: "28.08.2026",
        category: "Veranstaltung",
        title: "Saisonabschluss mit Abendschwimmen",
        text: "Am Freitag, 28.08.2026, findet von 17 bis 22 Uhr unser Saisonabschluss mit Abendschwimmen statt.",
        eventId: "season-finale"
      },
      {
        date: "17.08.2026",
        category: "Öffnungszeiten",
        title: "Saison bis 30.08.2026 verlängert",
        text: "Ab dem 17.08. gelten neue Öffnungszeiten. Alle Zeiten finden Sie direkt auf der Startseite und im Bereich Öffnungszeiten & Preise.",
        eventId: "season-extension"
      },
      {
        date: "04.07.2026",
        category: "Rückblick",
        title: "Benefizveranstaltung im Freibad Winterstein",
        text: "Die Benefizveranstaltung zum Erhalt des Freibads fand am 04.07.2026 statt. Der bestehende Flyer bleibt als Rückblick erhalten.",
        image: "benefizveranstaltung-freibad-winterstein-2026.jpg",
        eventId: "benefiz-2026"
      },
      {
        date: "01.04.2026",
        category: "Spendenprojekt",
        title: "Spendenaufruf für ein neues Bademeister-Haus",
        text: "Mit dem Spendenaufruf sammeln wir Unterstützung für ein neues Bademeister-Haus im Freibad Winterstein.",
        image: "bademeisterhaus-spendenaufruf.jpg",
        actionLabel: "Jetzt mit PayPal spenden",
        actionHref: "https://www.paypal.com/donate/?hosted_button_id=RX8KZ9DMTHAKA"
      },
      {
        date: "22.03.2026",
        category: "Aktuelles",
        title: "Fördervereinbarung jetzt online",
        text: "Neben dem Mitgliedsantrag steht auch die Fördervereinbarung direkt auf der Website bereit."
      },
      {
        date: "12.03.2026",
        category: "Verein",
        title: "Helferinnen und Helfer gesucht",
        text: "Für Pflege, Organisation und kleine Projekte rund um das Freibad freuen wir uns über Unterstützung."
      }
    ]
  },

  contact: {
    pill: "Kontakt",
    title: "Schreiben Sie uns",
    lead: "Nutzen Sie das Formular für Fragen, Hinweise oder Unterstützung rund um den Verein und das Freibad.",
    note: "Beim Klick auf ‚Nachricht vorbereiten‘ wird Ihr Mailprogramm mit einer vorausgefüllten E-Mail geöffnet. Die Website selbst speichert die Formulardaten nicht. Hinweise zur anschließenden E-Mail-Verarbeitung finden Sie unter Datenschutz."
  },

  gallery: {
    pill: "Verein",
    title: "Galerie – Wer wir sind",
    lead: "Einblicke in den Verein, unsere Arbeit und die Geschichte des Freibads.",
    introTitle: "Wer wir sind",
    introText: "Hinter den Freibadfreunden Emsetal e.V. stehen engagierte Menschen, die sich gemeinsam für den Erhalt und die Zukunft des Freibads einsetzen.",
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
      text: "Dieses Dokument enthält Informationen zur Vereinsgründung, Neuigkeiten sowie die Ziele und Planungen für 2025 und 2026.",
      actionLabel: "Infodokument öffnen",
      actionHref: "freibadfreunde-info.pdf"
    },
    mdrVideo: {
      title: "MDR-Beitrag: Freibad Winterstein",
      text: "Hier ist der MDR-Beitrag über das Freibad Winterstein zur Badesaison direkt verlinkt.",
      actionLabel: "MDR-Beitrag öffnen",
      actionHref: "https://www.mdr.de/nachrichten/thueringen/west-thueringen/gotha/video-freibad-winterstein-badesaison-schwimmbad-100.html"
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
    registerCourt: "Amtsgericht Gotha",
    registerNumber: "VR 141702",
    editorialResponsible: {
      name: "Robert Deutsch",
      addressLine1: "c/o Freibadfreunde Emsetal e.V.",
      street: "Lerchenbergstraße 17",
      city: "99880 Waltershausen"
    }
  },

  privacy: {
    pill: "Rechtliches",
    title: "Datenschutz",
    lead: "Informationen zur Verarbeitung personenbezogener Daten auf der Website des Freibadfreunde Emsetal e.V.",
    controller: {
      name: "Freibadfreunde Emsetal e.V.",
      street: "Lerchenbergstraße 17",
      city: "99880 Waltershausen",
      email: "freibadfreundeemsetal@gmail.com"
    },
    hosting: {
      title: "Hosting über GitHub Pages",
      text: "Diese Website wird über GitHub Pages bereitgestellt. Beim Aufruf der Website werden technisch erforderliche Verbindungsdaten verarbeitet. GitHub weist ausdrücklich darauf hin, dass bei Besuchen von GitHub-Pages-Websites insbesondere die IP-Adresse zu Sicherheitszwecken protokolliert und gespeichert wird. Die Verarbeitung dient der sicheren und zuverlässigen Bereitstellung der Website. Rechtsgrundlage auf Seiten des Vereins ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und funktionsfähigen Internetauftritt). Die konkrete Speicherdauer der von GitHub geführten Protokolldaten richtet sich nach den Vorgaben von GitHub. GitHub verarbeitet Daten auch außerhalb des Europäischen Wirtschaftsraums, unter anderem in den USA, und nennt hierfür unter anderem das EU-US Data Privacy Framework sowie Standardvertragsklauseln als Transfermechanismen.",
      pagesInfoHref: "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages",
      privacyHref: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
    },
    localSite: {
      title: "Cookies, Analyse und externe Schriftarten",
      text: "Die Website setzt selbst keine Analyse- oder Marketing-Cookies ein und verwendet keine Tracking- oder Analysewerkzeuge. Schriftarten werden nicht von Google oder anderen externen Schriftanbietern geladen, sondern über auf Ihrem Gerät vorhandene Systemschriftarten dargestellt. Dadurch wird beim bloßen Seitenaufruf keine Verbindung zu einem externen Schriftanbieter aufgebaut."
    },
    contact: {
      title: "Kontakt und E-Mail",
      text: "Das Kontaktformular überträgt die eingegebenen Daten nicht an einen Webserver. Beim Klick auf ‚Nachricht vorbereiten‘ öffnet Ihr Gerät lediglich Ihr E-Mail-Programm mit einer vorausgefüllten Nachricht. Erst wenn Sie diese E-Mail tatsächlich versenden, werden die von Ihnen übermittelten Angaben (z. B. Name, E-Mail-Adresse, Telefonnummer, Betreff und Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet. Die Vereinsadresse ist ein Gmail-Postfach; bei der E-Mail-Kommunikation ist daher auch der E-Mail-Dienst Google/Gmail beteiligt. Rechtsgrundlage ist – abhängig vom Inhalt Ihrer Anfrage – Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche bzw. vertragliche Kommunikation) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung und Beantwortung allgemeiner Anfragen). Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten oder sonstigen berechtigten Gründe für eine weitere Speicherung bestehen.",
      googlePrivacyHref: "https://policies.google.com/privacy"
    },
    membership: {
      title: "Mitgliedsantrag und Fördervereinbarung",
      text: "Wenn Sie einen auf der Website bereitgestellten Mitgliedsantrag oder eine Fördervereinbarung ausfüllen und an den Verein übermitteln, verarbeitet der Verein die im jeweiligen Formular angegebenen personenbezogenen Daten zur Bearbeitung des Antrags, zur Durchführung der Mitgliedschaft bzw. Förderbeziehung und zur Vereinsverwaltung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO; soweit gesetzliche Dokumentations- oder Aufbewahrungspflichten bestehen, zusätzlich Art. 6 Abs. 1 lit. c DSGVO. Die Daten werden für die Dauer der Mitgliedschaft bzw. Förderbeziehung und anschließend nur so lange gespeichert, wie gesetzliche Aufbewahrungspflichten oder berechtigte Nachweisinteressen dies erfordern."
    },
    paypal: {
      title: "Spenden und PayPal-Spendenlink",
      text: "Auf dieser Website wird kein PayPal-Skript automatisch geladen. Beim bloßen Besuch unserer Website wird daher über den Spendenbereich keine Verbindung zu PayPal hergestellt. Erst wenn Sie den Link ‚Mit PayPal spenden‘ anklicken, verlassen Sie unsere Website und werden zu PayPal weitergeleitet. Ab diesem Zeitpunkt verarbeitet PayPal Daten in eigener Verantwortung nach den dort geltenden Datenschutzbestimmungen. Wenn Sie über PayPal oder per Banküberweisung spenden, verarbeitet der Verein die für die Spende und deren Nachweis erforderlichen Daten, insbesondere soweit sie dem Verein vom Zahlungsdienst bzw. Kreditinstitut übermittelt werden. Die Verarbeitung dient der Abwicklung und Dokumentation der Spende sowie der Erfüllung gesetzlicher, insbesondere steuerlicher Pflichten. Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b und lit. c DSGVO. Spenden- und Buchungsunterlagen werden entsprechend den jeweils geltenden gesetzlichen Aufbewahrungsfristen gespeichert.",
      privacyHref: "https://www.paypal.com/de/legalhub/paypal/privacy-full"
    },
    externalLinks: {
      title: "Externe Links",
      text: "Die Website enthält Links zu externen Angeboten, beispielsweise zum MDR und zu PayPal. Eine Datenübertragung an den jeweiligen Anbieter findet über diese Links grundsätzlich erst statt, wenn Sie den Link aktiv anklicken und das externe Angebot aufrufen. Für die weitere Datenverarbeitung auf der Zielseite ist der jeweilige Anbieter verantwortlich."
    },
    rights: [
      "Auskunft über die Sie betreffenden personenbezogenen Daten (Art. 15 DSGVO)",
      "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
      "Löschung, soweit die gesetzlichen Voraussetzungen vorliegen (Art. 17 DSGVO)",
      "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      "Datenübertragbarkeit, soweit anwendbar (Art. 20 DSGVO)",
      "Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO)"
    ],
    supervisoryAuthority: {
      name: "Thüringer Landesbeauftragter für den Datenschutz und die Informationsfreiheit (TLfDI)",
      street: "Häßlerstraße 8",
      city: "99096 Erfurt",
      email: "poststelle@datenschutz.thueringen.de",
      href: "https://tlfdi.de/"
    }
  }
}


const modalOverlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");
const modalWindow = modalOverlay ? modalOverlay.querySelector(".modal-window") : null;
const modalClose = document.getElementById("modal-close");
let lastTrigger = null;
let currentModalKey = null;

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function localDateFromISO(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day, 12, 0, 0, 0);
}

function dateAtStart(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
}

function dateAtEnd(dateString) {
  const date = localDateFromISO(dateString);
  date.setHours(23, 59, 59, 999);
  return date;
}

function isDateInRange(date, from, to) {
  const current = dateAtStart(date).getTime();
  return current >= localDateFromISO(from).setHours(0, 0, 0, 0) && current <= dateAtEnd(to).getTime();
}

function getPeriodForDate(date = new Date()) {
  return SITE_CONFIG.openingPeriods.find(period => isDateInRange(date, period.from, period.to)) || null;
}

function getHoursForDate(date = new Date()) {
  const period = getPeriodForDate(date);
  if (!period) return { period: null, hours: null };
  return { period, hours: period.days[date.getDay()] ?? null };
}

function parseOpeningRange(hoursText) {
  if (!hoursText) return null;
  const match = hoursText.match(/(\d{1,2}):?(\d{2})?\s*[–-]\s*(\d{1,2}):?(\d{2})?/);
  if (!match) return null;
  return {
    openHour: Number(match[1]),
    openMinute: Number(match[2] || 0),
    closeHour: Number(match[3]),
    closeMinute: Number(match[4] || 0)
  };
}


function isPostSeasonActive(date = new Date()) {
  const config = SITE_CONFIG.postSeason;
  if (!config?.activeFrom) return false;

  // Sicherheitslogik für die nächste Saison:
  // Wird SITE_CONFIG.season.year z. B. auf 2027 gestellt, deaktiviert sich
  // der alte Saison-Dank 2026 automatisch, bis postSeason ebenfalls aktualisiert wird.
  if (Number(config.year) !== Number(SITE_CONFIG.season.year)) return false;

  return date.getTime() >= new Date(config.activeFrom).getTime();
}

function isLastSeasonDay(date = new Date()) {
  const end = localDateFromISO(SITE_CONFIG.season.end);
  return (
    date.getFullYear() === end.getFullYear() &&
    date.getMonth() === end.getMonth() &&
    date.getDate() === end.getDate()
  );
}

function getTodayStatus(date = new Date()) {
  const seasonStart = localDateFromISO(SITE_CONFIG.season.start);
  const seasonEnd = dateAtEnd(SITE_CONFIG.season.end);

  if (date < seasonStart) {
    return {
      state: "upcoming",
      open: false,
      label: "Saison noch nicht gestartet",
      hours: "Noch geschlossen",
      note: `Saisonstart ${formatDate(SITE_CONFIG.season.start)}`
    };
  }

  if (isPostSeasonActive(date) || date > seasonEnd) {
    return {
      state: "ended",
      open: false,
      label: `Saison ${SITE_CONFIG.season.year} beendet`,
      hours: "Winterpause",
      note: `Danke für die Saison ${SITE_CONFIG.season.year} · Gemeinsam Richtung ${SITE_CONFIG.postSeason.nextYear}`
    };
  }

  const { hours } = getHoursForDate(date);
  if (!hours) {
    return {
      state: "closed",
      open: false,
      label: "Heute geschlossen",
      hours: "Geschlossen",
      note: "Nächsten Öffnungstag beachten"
    };
  }

  const range = parseOpeningRange(hours);
  if (!range) {
    return { state: "open", open: true, label: "Heute geöffnet", hours, note: "Aktuelle Öffnungszeit" };
  }

  const openTime = new Date(date);
  openTime.setHours(range.openHour, range.openMinute, 0, 0);
  const closeTime = new Date(date);
  closeTime.setHours(range.closeHour, range.closeMinute, 0, 0);

  if (date < openTime) {
    return {
      state: "upcoming",
      open: false,
      label: isLastSeasonDay(date) ? "Letzter Badetag · öffnet später" : `Öffnet heute um ${formatClock(openTime)}`,
      hours,
      note: isLastSeasonDay(date) ? `Letzter Badetag 2026 · Öffnet um ${formatClock(openTime)}` : `Öffnet um ${formatClock(openTime)}`
    };
  }

  if (date >= closeTime) {
    if (isLastSeasonDay(date)) {
      return {
        state: "ended",
        open: false,
        label: `Saison ${SITE_CONFIG.season.year} beendet`,
        hours: "Winterpause",
        note: `Danke für euren Besuch · Wir sehen uns ${SITE_CONFIG.postSeason.nextYear}!`
      };
    }

    return {
      state: "closed",
      open: false,
      label: "Für heute geschlossen",
      hours,
      note: `Heute bis ${formatClock(closeTime)} geöffnet gewesen`
    };
  }

  return {
    state: "open",
    open: true,
    label: isLastSeasonDay(date) ? `Letzter Badetag · jetzt geöffnet` : `Jetzt geöffnet · bis ${formatClock(closeTime)}`,
    hours,
    note: isLastSeasonDay(date) ? `Heute letzter Badetag · geöffnet bis ${formatClock(closeTime)}` : `Geöffnet bis ${formatClock(closeTime)}`
  };
}

function formatClock(date) {
  return new Intl.DateTimeFormat("de-DE", { hour: "2-digit", minute: "2-digit" }).format(date) + " Uhr";
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }).format(localDateFromISO(dateString));
}

function createActionButton(label, href, cssClass = "btn btn--green") {
  if (!href) return "";
  const isCalendarFile = href.toLowerCase().endsWith(".ics");
  const attrs = isCalendarFile
    ? `href="${escapeHtml(href)}" type="text/calendar"`
    : `href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer"`;
  return `<a class="${cssClass}" ${attrs}>${escapeHtml(label)}</a>`;
}

function renderHeroQuickInfo() {
  const now = new Date();
  const status = getTodayStatus(now);
  const postSeason = isPostSeasonActive(now) || status.state === "ended";

  const statusNode = document.getElementById("pool-status");
  const hoursNode = document.getElementById("today-hours");
  const noteNode = document.getElementById("today-hours-note");
  const seasonNode = document.getElementById("season-label");
  const adultNode = document.getElementById("price-adult");
  const childNode = document.getElementById("price-child");
  const hoursCard = document.getElementById("today-status-card");

  const heroEyebrow = document.getElementById("hero-eyebrow");
  const heroTitle = document.getElementById("hero-title");
  const heroLead = document.getElementById("hero-lead");
  const heroPrimary = document.getElementById("hero-primary-action");
  const heroSecondary = document.getElementById("hero-secondary-action");

  const infoCard = document.getElementById("season-info-card");
  const infoLabel = document.getElementById("season-info-label");
  const infoValue = document.getElementById("season-info-value");
  const infoMeta = document.getElementById("season-info-meta");

  const seasonCard = document.getElementById("season-status-card");
  const seasonCardLabel = document.getElementById("season-card-label");
  const seasonCardValue = document.getElementById("season-card-value");
  const seasonCardMeta = document.getElementById("season-card-meta");

  if (statusNode) {
    statusNode.textContent = status.label;
    statusNode.classList.remove("is-open", "is-upcoming", "is-closed", "is-ended");
    statusNode.classList.add(`is-${status.state}`);
  }

  if (hoursCard) hoursCard.dataset.status = status.state;
  if (hoursNode) hoursNode.textContent = status.hours;
  if (noteNode) noteNode.textContent = status.note;

  if (!postSeason) {
    if (seasonNode) seasonNode.textContent = SITE_CONFIG.season.label;
    if (adultNode && SITE_CONFIG.prices[0]) adultNode.textContent = SITE_CONFIG.prices[0].day;
    if (childNode && SITE_CONFIG.prices[1]) childNode.textContent = SITE_CONFIG.prices[1].day;

    if (heroEyebrow) heroEyebrow.textContent = "Freibad Winterstein";
    if (heroTitle) heroTitle.textContent = "Sommer, Gemeinschaft und Freibadliebe.";
    if (heroLead) heroLead.textContent = "Alles Wichtige zum Freibad Winterstein: aktuelle Öffnungszeiten, Preise, Veranstaltungen und Möglichkeiten, unseren Verein zu unterstützen.";

    if (heroPrimary) {
      heroPrimary.textContent = "Öffnungszeiten & Preise";
      heroPrimary.setAttribute("data-modal-key", "infos");
    }
    if (heroSecondary) {
      heroSecondary.textContent = "Aktuelle Veranstaltungen";
      heroSecondary.setAttribute("href", "#aktuell");
      heroSecondary.removeAttribute("data-modal-key");
    }

    if (infoCard) infoCard.dataset.mode = "prices";
    if (infoLabel) infoLabel.textContent = "Tageskarte";
    if (infoValue) infoValue.innerHTML = `<span id="price-adult">${escapeHtml(SITE_CONFIG.prices[0]?.day || "–")}</span> / <span id="price-child">${escapeHtml(SITE_CONFIG.prices[1]?.day || "–")}</span>`;
    if (infoMeta) infoMeta.textContent = "Erwachsene / Kinder";

    if (seasonCard) {
      seasonCard.removeAttribute("data-modal-key");
      seasonCard.setAttribute("data-event-id", "season-extension");
      seasonCard.dataset.mode = "active";
    }
    if (seasonCardLabel) seasonCardLabel.textContent = "Gute Nachrichten";
    if (seasonCardValue) seasonCardValue.textContent = "Bis 30.08.";
    if (seasonCardMeta) seasonCardMeta.textContent = "Saison verlängert";
    return;
  }

  const thank = SITE_CONFIG.postSeason;
  if (seasonNode) seasonNode.textContent = `Saison ${SITE_CONFIG.season.year} beendet · Danke!`;

  if (heroEyebrow) heroEyebrow.textContent = "Freibad Winterstein · Winterpause";
  if (heroTitle) heroTitle.textContent = `Danke für die Saison ${SITE_CONFIG.season.year}.`;
  if (heroLead) heroLead.textContent = "Das Freibad ist für dieses Jahr geschlossen. Danke an alle Gäste, Mitglieder, Förderer, Spender und Helfer – gemeinsam machen wir uns jetzt auf den Weg Richtung nächste Saison.";

  if (heroPrimary) {
    heroPrimary.textContent = thank.membershipLabel;
    heroPrimary.setAttribute("data-modal-key", "membership");
  }
  if (heroSecondary) {
    heroSecondary.textContent = thank.donationLabel;
    heroSecondary.setAttribute("href", "#");
    heroSecondary.setAttribute("data-modal-key", "donation");
  }

  if (infoCard) infoCard.dataset.mode = "next-season";
  if (infoLabel) infoLabel.textContent = "Ausblick";
  if (infoValue) infoValue.textContent = `Saison ${thank.nextYear}`;
  if (infoMeta) infoMeta.textContent = "Neue Termine & Öffnungszeiten folgen hier";

  if (seasonCard) {
    seasonCard.removeAttribute("data-event-id");
    seasonCard.setAttribute("data-modal-key", "seasonThanks");
    seasonCard.dataset.mode = "thanks";
  }
  if (seasonCardLabel) seasonCardLabel.textContent = "Gemeinsam weiter";
  if (seasonCardValue) seasonCardValue.textContent = "Danke!";
  if (seasonCardMeta) seasonCardMeta.textContent = "Mitglied · Förderer · Spende · Hilfe";
}

function getVisibleEvents() {
  const now = new Date();
  return SITE_CONFIG.events.filter(event => {
    if (event.visibleFrom && now < new Date(event.visibleFrom)) return false;
    if (event.visibleUntil && now > new Date(event.visibleUntil)) return false;
    return true;
  });
}

function renderEventCards() {
  const grid = document.getElementById("event-grid");
  if (!grid) return;

  const now = new Date();
  const postSeason = isPostSeasonActive(now);
  const events = getVisibleEvents();

  const seasonThanksCard = postSeason
    ? `
      <button class="event-card event-card--thanks" type="button" data-modal-key="seasonThanks">
        <span class="event-card__media event-card__media--thanks">
          <span class="season-thanks-card__logo-wrap">
            <img src="logo-freibadfreunde-emsetal-transparent.png" alt="" class="season-thanks-card__logo">
          </span>
          <span class="season-thanks-card__year">${escapeHtml(SITE_CONFIG.postSeason.nextYear)}</span>
          <span class="event-card__date">Danke für ${escapeHtml(SITE_CONFIG.postSeason.year)}</span>
        </span>
        <span class="event-card__body">
          <span class="event-card__tag">Gemeinsam für Winterstein</span>
          <h3>${escapeHtml(SITE_CONFIG.postSeason.title)}</h3>
          <p>${escapeHtml(SITE_CONFIG.postSeason.lead)}</p>
          <span class="event-card__link">Dank &amp; Möglichkeiten zum Unterstützen →</span>
        </span>
      </button>`
    : "";

  const eventCards = events.map(event => `
    <button class="event-card" type="button" data-event-id="${escapeHtml(event.id)}">
      <span class="event-card__media">
        <img class="event-card__image" src="${escapeHtml(event.image)}" alt="${escapeHtml(event.imageAlt)}" loading="lazy">
        <span class="event-card__date">${escapeHtml(event.dateLabel)}</span>
      </span>
      <span class="event-card__body">
        <span class="event-card__tag">${escapeHtml(event.category)}</span>
        <h3>${escapeHtml(event.title)}</h3>
        <p>${escapeHtml(event.shortText)}</p>
        <span class="event-card__link">Details &amp; Flyer öffnen →</span>
      </span>
    </button>
  `).join("");

  if (!seasonThanksCard && !eventCards) {
    grid.innerHTML = `
      <div class="modal-panel">
        <h3>Zurzeit keine Veranstaltung eingetragen</h3>
        <p>Neue Termine erscheinen hier automatisch, sobald sie in <strong>SITE_CONFIG.events</strong> ergänzt werden.</p>
      </div>`;
    return;
  }

  grid.innerHTML = seasonThanksCard + eventCards;

  const eyebrow = document.getElementById("current-section-eyebrow");
  const title = document.getElementById("current-section-title");
  const text = document.getElementById("current-section-text");
  if (postSeason) {
    if (eyebrow) eyebrow.textContent = "Nach der Saison";
    if (title) title.textContent = "Danke & Ausblick";
    if (text) text.textContent = `Die Saison ${SITE_CONFIG.season.year} ist beendet. Jetzt zählt, was wir gemeinsam für ${SITE_CONFIG.postSeason.nextYear} bewegen können.`;
  }
}

function getEventById(id) {
  return SITE_CONFIG.events.find(event => event.id === id) || null;
}

function renderEventModal(event) {
  const highlights = Array.isArray(event.highlights) && event.highlights.length
    ? `<ul class="event-popup__highlights">${event.highlights.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
    : "";

  return `
    <div class="modal-header">
      <span class="modal-pill">${escapeHtml(event.category)}</span>
      <h2 id="modal-title" class="modal-title">${escapeHtml(event.title)}</h2>
      <p class="modal-lead">${escapeHtml(event.shortText)}</p>
    </div>

    <section class="event-popup">
      <a class="event-popup__flyer-link" href="${escapeHtml(event.image)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(event.imageActionLabel || "Flyer groß öffnen")}">
        <img class="event-popup__flyer" src="${escapeHtml(event.image)}" alt="${escapeHtml(event.imageAlt)}">
      </a>

      <div class="event-popup__details">
        <div class="event-popup__meta">
          <span>${escapeHtml(event.dateLabel)}</span>
          ${event.time ? `<span>${escapeHtml(event.time)}</span>` : ""}
          <span>${escapeHtml(event.location)}</span>
        </div>
        ${highlights}
        <div class="action-row">
          ${event.calendarHref ? createActionButton(event.calendarLabel || "Termin speichern", event.calendarHref) : ""}
          ${event.primaryAction?.modalKey ? `<button class="btn btn--green" type="button" data-modal-key="${escapeHtml(event.primaryAction.modalKey)}">${escapeHtml(event.primaryAction.label)}</button>` : ""}
          ${Array.isArray(event.extraActions) ? event.extraActions.map(action => createActionButton(action.label, action.href)).join("") : ""}
          ${createActionButton(event.imageActionLabel || "Flyer groß öffnen", event.image, "btn btn--ghost")}
          <button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button>
        </div>
      </div>
    </section>
  `;
}

function renderSeasonThanksModal() {
  const data = SITE_CONFIG.postSeason;
  return `
    <div class="season-thanks season-thanks--compact">
      <section class="season-thanks__flyer" aria-label="Saison-Dank der Freibadfreunde Emsetal">
        <div class="season-thanks__glow" aria-hidden="true"></div>

        <header class="season-thanks__head">
          <div class="season-thanks__brand">
            <img class="season-thanks__logo" src="logo-freibadfreunde-emsetal-transparent.png" alt="Freibadfreunde Emsetal e.V.">
            <div>
              <span class="season-thanks__pill">${escapeHtml(data.pill)}</span>
              <p class="season-thanks__kicker">Freibad Winterstein</p>
            </div>
          </div>
          <span class="season-thanks__year-badge" aria-label="Ausblick auf ${escapeHtml(data.nextYear)}">${escapeHtml(data.nextYear)}</span>
        </header>

        <div class="season-thanks__main">
          <div class="season-thanks__message">
            <h2 id="modal-title" class="season-thanks__title">${escapeHtml(data.title)}</h2>
            <p class="season-thanks__lead">${escapeHtml(data.lead)}</p>
            <p class="season-thanks__body">${escapeHtml(data.body)}</p>
          </div>

          <aside class="season-thanks__support" aria-label="Möglichkeiten zum Unterstützen">
            <div class="season-thanks__highlight">
              <span>Ausblick</span>
              <strong>${escapeHtml(data.highlight)}</strong>
            </div>
            <div class="season-thanks__points">
              ${data.points.map((point, index) => `
                <div class="season-thanks__point">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <p>${escapeHtml(point)}</p>
                </div>
              `).join("")}
            </div>
          </aside>
        </div>

        <footer class="season-thanks__bottom">
          <p class="season-thanks__footer">${escapeHtml(data.footer)}</p>
          <div class="season-thanks__actions">
            <button class="btn btn--light" type="button" data-modal-key="membership">${escapeHtml(data.membershipLabel)}</button>
            <button class="btn btn--season-gold" type="button" data-modal-key="donation">${escapeHtml(data.donationLabel)}</button>
            <button class="btn btn--season-ghost" type="button" data-close-modal="true">Schließen</button>
          </div>
        </footer>
      </section>
    </div>
  `;
}
function renderInfosModal() {
  const today = new Date();
  const postSeason = isPostSeasonActive(today);

  const periods = SITE_CONFIG.openingPeriods.map(period => {
    const currentClass = !postSeason && isDateInRange(today, period.from, period.to) ? " is-current" : "";
    const d = period.days;
    const lines = period.id === "extension"
      ? [
          ["Montag & Dienstag", "Geschlossen"],
          ["Mittwoch – Freitag", d[3] || "Geschlossen"],
          ["Samstag & Sonntag", d[6] || "Geschlossen"]
        ]
      : [["Täglich", d[1] || d[0] || "Geschlossen"]];

    return `
      <section class="modal-panel${currentClass}">
        <h3>${escapeHtml(period.label)}</h3>
        <div class="hours-list">
          ${lines.map(line => `<div class="hours-row${currentClass}"><strong>${escapeHtml(line[0])}</strong><span>${escapeHtml(line[1])}</span></div>`).join("")}
        </div>
      </section>`;
  }).join("");

  const seasonEndedNotice = postSeason
    ? `
      <section class="season-ended-notice">
        <span class="season-ended-notice__icon" aria-hidden="true">✓</span>
        <div>
          <strong>Saison ${escapeHtml(SITE_CONFIG.season.year)} beendet</strong>
          <p>Das Freibad befindet sich in der Winterpause. Die unten aufgeführten Zeiten und Preise gelten als Rückblick für 2026. Informationen zur Saison ${escapeHtml(SITE_CONFIG.postSeason.nextYear)} veröffentlichen wir hier, sobald sie feststehen.</p>
        </div>
      </section>`
    : "";

  return `
    <div class="modal-header">
      <span class="modal-pill">Besuch planen</span>
      <h2 id="modal-title" class="modal-title">Öffnungszeiten &amp; Preise</h2>
      <p class="modal-lead">${postSeason ? `Rückblick auf die Saison ${SITE_CONFIG.season.year} und Platz für die kommenden Informationen zur Saison ${SITE_CONFIG.postSeason.nextYear}.` : "Alle aktuellen Zeiten und Eintrittspreise des Freibads Winterstein auf einen Blick."}</p>
    </div>

    ${seasonEndedNotice}

    <div class="modal-grid">
      ${periods}
    </div>

    <section class="modal-panel">
      <h3>Eintrittspreise ${postSeason ? `· Saison ${SITE_CONFIG.season.year}` : ""}</h3>
      <table class="price-table">
        <thead><tr><th>Tarif</th><th>Tageskarte</th><th>Saisonkarte</th></tr></thead>
        <tbody>
          ${SITE_CONFIG.prices.map(price => `
            <tr>
              <td data-label="Tarif"><strong>${escapeHtml(price.title)}</strong></td>
              <td data-label="Tageskarte">${escapeHtml(price.day)}</td>
              <td data-label="Saisonkarte">${escapeHtml(price.season)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>

    <p class="config-hint"><strong>Hinweis:</strong> ${escapeHtml(SITE_CONFIG.openingNote)}</p>
    <div class="action-row">
      ${postSeason ? `<button class="btn btn--green" type="button" data-modal-key="seasonThanks">Wie kann ich unterstützen?</button>` : ""}
      <button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button>
    </div>
  `;
}

function renderDocumentModal(data) {
  return `
    <div class="modal-header">
      <span class="modal-pill">${escapeHtml(data.pill)}</span>
      <h2 id="modal-title" class="modal-title">${escapeHtml(data.title)}</h2>
      <p class="modal-lead">${escapeHtml(data.lead)}</p>
    </div>
    <div class="modal-grid modal-grid--two">
      <section class="modal-panel">
        <h3>${escapeHtml(data.summaryTitle)}</h3>
        <ul class="modal-list">${data.summaryItems.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
      <section class="modal-panel"><h3>${escapeHtml(data.extraTitle)}</h3><p>${escapeHtml(data.extraText)}</p></section>
    </div>
    <div class="action-row">
      ${data.actionButtons.map(button => createActionButton(button.label, button.href)).join("")}
      <button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button>
    </div>`;
}

function renderDonationModal(data) {
  return `
    <div class="modal-header">
      <span class="modal-pill">${escapeHtml(data.pill)}</span>
      <h2 id="modal-title" class="modal-title">${escapeHtml(data.title)}</h2>
      <p class="modal-lead">${escapeHtml(data.lead)}</p>
    </div>
    <div class="modal-grid modal-grid--two">
      <section class="modal-panel bank-card">
        <h3>Spendenkonto</h3>
        ${data.bank.map((line, index) => index === 0 ? `<strong>${escapeHtml(line)}</strong>` : `<span>${escapeHtml(line)}</span>`).join("")}
      </section>
      <section class="modal-panel">
        <h3>Online mit PayPal spenden</h3>
        <p>PayPal wird auf dieser Website nicht automatisch geladen. Erst nach Ihrem bewussten Klick öffnen Sie die PayPal-Seite.</p>
        <div class="action-row" style="margin-top:.9rem;">
          ${createActionButton(data.paypalLabel, data.paypalHref, "btn btn--green")}
        </div>
      </section>
    </div>
    <div class="action-row"><button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button></div>`;
}

function renderNewsModal(data) {
  return `
    <div class="modal-header">
      <span class="modal-pill">${escapeHtml(data.pill)}</span>
      <h2 id="modal-title" class="modal-title">${escapeHtml(data.title)}</h2>
      <p class="modal-lead">${escapeHtml(data.lead)}</p>
    </div>
    <div class="news-feed">
      ${data.items.map(item => `
        <article class="news-item">
          <div class="news-item__meta"><span>${escapeHtml(item.date)}</span><span>${escapeHtml(item.category)}</span></div>
          ${item.image ? `<img class="news-feature-card__image" src="${escapeHtml(item.image)}" alt="" loading="lazy" style="margin-bottom:.85rem;">` : ""}
          <h3 class="news-item__title">${escapeHtml(item.title)}</h3>
          <p class="news-item__text">${escapeHtml(item.text)}</p>
          ${(item.eventId || item.actionHref || item.modalKey) ? `<div class="action-row" style="margin-top:.85rem;">
            ${item.eventId ? `<button class="btn btn--green" type="button" data-event-id="${escapeHtml(item.eventId)}">Details öffnen</button>` : ""}
            ${item.modalKey ? `<button class="btn btn--green" type="button" data-modal-key="${escapeHtml(item.modalKey)}">Mehr erfahren</button>` : ""}
            ${item.actionHref ? createActionButton(item.actionLabel, item.actionHref) : ""}
          </div>` : ""}
        </article>
      `).join("")}
    </div>
    <div class="action-row"><button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button></div>`;
}

function renderContactModal(data) {
  return `
    <div class="modal-header">
      <span class="modal-pill">${escapeHtml(data.pill)}</span>
      <h2 id="modal-title" class="modal-title">${escapeHtml(data.title)}</h2>
      <p class="modal-lead">${escapeHtml(data.lead)}</p>
    </div>
    <form class="contact-form-modal" data-contact-form="true">
      <div class="contact-form-modal__row">
        <label class="contact-field"><span>Name</span><input type="text" name="name" placeholder="Ihr Name" required></label>
        <label class="contact-field"><span>E-Mail</span><input type="email" name="email" placeholder="ihre@mail.de" required></label>
      </div>
      <div class="contact-form-modal__row">
        <label class="contact-field"><span>Telefon</span><input type="text" name="phone" placeholder="optional"></label>
        <label class="contact-field"><span>Betreff</span><input type="text" name="subject" placeholder="Ihr Anliegen" required></label>
      </div>
      <label class="contact-field"><span>Nachricht</span><textarea name="message" rows="6" placeholder="Ihre Nachricht an den Verein" required></textarea></label>
      <p class="contact-note">${escapeHtml(data.note)}</p>
      <div class="action-row"><button class="btn btn--green" type="submit">Nachricht vorbereiten</button><button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button></div>
    </form>`;
}

function renderGalleryModal(data) {
  return `
    <div class="modal-header">
      <span class="modal-pill">${escapeHtml(data.pill)}</span>
      <h2 id="modal-title" class="modal-title">${escapeHtml(data.title)}</h2>
      <p class="modal-lead">${escapeHtml(data.lead)}</p>
    </div>
    <div class="modal-grid modal-grid--two">
      <section class="modal-panel"><h3>${escapeHtml(data.introTitle)}</h3><p>${escapeHtml(data.introText)}</p></section>
      <section class="modal-panel"><h3>${escapeHtml(data.timeline.title)}</h3><p>${escapeHtml(data.timeline.text)}</p><div class="action-row" style="margin-top:.85rem;">${createActionButton(data.timeline.actionLabel, data.timeline.actionHref)}</div></section>
      <section class="modal-panel"><h3>${escapeHtml(data.infoSheet.title)}</h3><p>${escapeHtml(data.infoSheet.text)}</p><div class="action-row" style="margin-top:.85rem;">${createActionButton(data.infoSheet.actionLabel, data.infoSheet.actionHref)}</div></section>
      <section class="modal-panel"><h3>${escapeHtml(data.teamPhoto.title)}</h3><img class="news-feature-card__image" src="${escapeHtml(data.teamPhoto.src)}" alt="${escapeHtml(data.teamPhoto.alt)}"><p style="margin-top:.8rem;">${escapeHtml(data.teamPhoto.info)}</p><div class="action-row" style="margin-top:.85rem;">${createActionButton(data.teamPhoto.actionLabel, data.teamPhoto.actionHref)}</div></section>
    </div>
    <section class="modal-panel"><h3>${escapeHtml(data.winterspielePhoto.title)}</h3><img class="news-feature-card__image" src="${escapeHtml(data.winterspielePhoto.src)}" alt="${escapeHtml(data.winterspielePhoto.alt)}"><p style="margin-top:.8rem;">${escapeHtml(data.winterspielePhoto.text)}</p><div class="action-row" style="margin-top:.85rem;">${createActionButton(data.winterspielePhoto.actionLabel, data.winterspielePhoto.actionHref)}</div></section>
    <section class="modal-panel"><h3>${escapeHtml(data.mdrVideo.title)}</h3><p>${escapeHtml(data.mdrVideo.text)}</p><div class="action-row" style="margin-top:.85rem;">${createActionButton(data.mdrVideo.actionLabel, data.mdrVideo.actionHref)}</div></section>
    <div class="action-row"><button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button></div>`;
}

function renderImprintModal(data) {
  const editorial = data.editorialResponsible;
  return `
    <div class="modal-header"><span class="modal-pill">${escapeHtml(data.pill)}</span><h2 id="modal-title" class="modal-title">${escapeHtml(data.title)}</h2><p class="modal-lead">${escapeHtml(data.lead)}</p></div>
    <div class="modal-grid modal-grid--two">
      <section class="modal-panel"><h3>Anschrift</h3><p>${escapeHtml(data.club)}<br>${escapeHtml(data.street)}<br>${escapeHtml(data.city)}<br>Vereinssitz: ${escapeHtml(data.seat)}</p></section>
      <section class="modal-panel"><h3>Vertreten durch</h3><p>Geschäftsführender Vorstand:<br>${data.representatives.map(escapeHtml).join("<br>")}</p></section>
      <section class="modal-panel"><h3>Kontakt</h3><p>E-Mail: <a class="text-link" href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a><br>Eine öffentliche Telefonnummer des Vereins besteht derzeit nicht.</p></section>
      <section class="modal-panel"><h3>Vereinsregister</h3><p>${escapeHtml(data.registerCourt)}<br>Vereinsregister: ${escapeHtml(data.registerNumber)}</p></section>
      <section class="modal-panel"><h3>Verantwortlich für journalistisch-redaktionelle Inhalte</h3><p>gemäß § 18 Abs. 2 MStV:<br><strong>${escapeHtml(editorial.name)}</strong><br>${escapeHtml(editorial.addressLine1)}<br>${escapeHtml(editorial.street)}<br>${escapeHtml(editorial.city)}</p></section>
    </div>
    <div class="action-row"><button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button></div>`;
}

function renderPrivacyModal(data) {
  const c = data.controller;
  const h = data.hosting;
  const contact = data.contact;
  const pp = data.paypal;
  const a = data.supervisoryAuthority;
  return `
    <div class="modal-header"><span class="modal-pill">${escapeHtml(data.pill)}</span><h2 id="modal-title" class="modal-title">${escapeHtml(data.title)}</h2><p class="modal-lead">${escapeHtml(data.lead)}</p></div>
    <div class="modal-grid">
      <section class="modal-panel"><h3>1. Verantwortlicher</h3><p>${escapeHtml(c.name)}<br>${escapeHtml(c.street)}<br>${escapeHtml(c.city)}<br>E-Mail: <a class="text-link" href="mailto:${escapeHtml(c.email)}">${escapeHtml(c.email)}</a></p></section>
      <section class="modal-panel"><h3>2. ${escapeHtml(h.title)}</h3><p>${escapeHtml(h.text)}</p><p style="margin-top:.75rem;"><a class="legal-source-link" href="${escapeHtml(h.pagesInfoHref)}" target="_blank" rel="noopener noreferrer">Informationen zu GitHub Pages</a> · <a class="legal-source-link" href="${escapeHtml(h.privacyHref)}" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von GitHub</a></p></section>
      <section class="modal-panel"><h3>3. ${escapeHtml(data.localSite.title)}</h3><p>${escapeHtml(data.localSite.text)}</p></section>
      <section class="modal-panel"><h3>4. ${escapeHtml(contact.title)}</h3><p>${escapeHtml(contact.text)}</p><p style="margin-top:.75rem;"><a class="legal-source-link" href="${escapeHtml(contact.googlePrivacyHref)}" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Google</a></p></section>
      <section class="modal-panel"><h3>5. ${escapeHtml(data.membership.title)}</h3><p>${escapeHtml(data.membership.text)}</p></section>
      <section class="modal-panel"><h3>6. ${escapeHtml(pp.title)}</h3><p>${escapeHtml(pp.text)}</p><p style="margin-top:.75rem;"><a class="legal-source-link" href="${escapeHtml(pp.privacyHref)}" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von PayPal</a></p></section>
      <section class="modal-panel"><h3>7. ${escapeHtml(data.externalLinks.title)}</h3><p>${escapeHtml(data.externalLinks.text)}</p></section>
      <section class="modal-panel"><h3>8. Ihre Rechte</h3><ul class="modal-list">${data.rights.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
      <section class="modal-panel"><h3>9. Beschwerderecht bei der Aufsichtsbehörde</h3><p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für den Verein ist insbesondere erreichbar:<br><br><strong>${escapeHtml(a.name)}</strong><br>${escapeHtml(a.street)}<br>${escapeHtml(a.city)}<br>E-Mail: <a class="text-link" href="mailto:${escapeHtml(a.email)}">${escapeHtml(a.email)}</a><br><a class="legal-source-link" href="${escapeHtml(a.href)}" target="_blank" rel="noopener noreferrer">Website des TLfDI</a></p></section>
      <section class="modal-panel"><h3>10. Stand</h3><p>Stand dieser Datenschutzhinweise: 30. August 2026.</p></section>
    </div>
    <div class="action-row"><button class="btn btn--ghost" type="button" data-close-modal="true">Schließen</button></div>`;
}

function renderModal(key) {
  if (key === "infos") return renderInfosModal();
  if (key === "membership") return renderDocumentModal(content.membership);
  if (key === "donation") return renderDonationModal(content.donation);
  if (key === "news") return renderNewsModal(content.news);
  if (key === "contact") return renderContactModal(content.contact);
  if (key === "gallery") return renderGalleryModal(content.gallery);
  if (key === "imprint") return renderImprintModal(content.imprint);
  if (key === "privacy") return renderPrivacyModal(content.privacy);
  if (key === "seasonThanks") return renderSeasonThanksModal();
  return "";
}


function openModal(key, trigger = null) {
  if (!modalOverlay || !modalContent) return;
  const html = renderModal(key);
  if (!html) return;

  lastTrigger = trigger || lastTrigger;
  currentModalKey = key;
  modalContent.innerHTML = html;
  modalWindow?.classList.remove("modal-window--event", "modal-window--contact", "modal-window--season-thanks");
  modalWindow?.classList.toggle("modal-window--infos", key === "infos");
  modalWindow?.classList.toggle("modal-window--contact", key === "contact");
  modalWindow?.classList.toggle("modal-window--season-thanks", key === "seasonThanks");
  modalOverlay.classList.toggle("modal-overlay--infos", key === "infos");
  modalOverlay.classList.remove("is-hidden");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  requestAnimationFrame(() => {
    modalClose?.focus({ preventScroll: true });
  });
}

function openEventModal(eventId, trigger = null) {
  const event = getEventById(eventId);
  if (!event || !modalOverlay || !modalContent) return;

  lastTrigger = trigger || lastTrigger;
  currentModalKey = `event:${eventId}`;
  modalContent.innerHTML = renderEventModal(event);
  modalWindow?.classList.remove("modal-window--infos", "modal-window--contact");
  modalWindow?.classList.add("modal-window--event");
  modalOverlay.classList.remove("modal-overlay--infos");
  modalOverlay.classList.remove("is-hidden");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => modalClose?.focus({ preventScroll: true }));
}

function closeModal() {
  if (!modalOverlay || !modalContent) return;
  modalOverlay.classList.add("is-hidden");
  modalOverlay.setAttribute("aria-hidden", "true");
  modalWindow?.classList.remove("modal-window--event", "modal-window--infos", "modal-window--contact", "modal-window--season-thanks");
  modalOverlay.classList.remove("modal-overlay--infos");
  modalContent.innerHTML = "";
  document.body.classList.remove("modal-open");
  currentModalKey = null;

  if (lastTrigger instanceof HTMLElement && !window.matchMedia("(pointer: coarse)").matches) {
    lastTrigger.focus({ preventScroll: true });
  }
}

function submitContactForm(form) {
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const subject = String(formData.get("subject") || "Kontakt über Website").trim();
  const message = String(formData.get("message") || "").trim();

  const body = [
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone || "-"}`,
    "",
    "Nachricht:",
    message
  ].join("\n");

  window.location.href = `mailto:FreibadFreundeEmsetal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function wireGlobalInteractions() {
  document.addEventListener("click", event => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const modalTrigger = target.closest("[data-modal-key]");
    if (modalTrigger) {
      event.preventDefault();
      const key = modalTrigger.getAttribute("data-modal-key");
      if (key) openModal(key, modalTrigger);
      return;
    }

    const eventTrigger = target.closest("[data-event-id]");
    if (eventTrigger) {
      const eventId = eventTrigger.getAttribute("data-event-id");
      if (eventId) openEventModal(eventId, eventTrigger);
      return;
    }

    if (target.closest("[data-close-modal]") || target === modalOverlay) {
      closeModal();
    }
  });

  modalClose?.addEventListener("click", closeModal);

  modalOverlay?.addEventListener("submit", event => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || form.dataset.contactForm !== "true") return;
    event.preventDefault();
    submitContactForm(form);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modalOverlay && !modalOverlay.classList.contains("is-hidden")) closeModal();
  });
}

function init() {
  renderHeroQuickInfo();
  renderEventCards();
  wireGlobalInteractions();

  // Die Schnellinfo aktualisiert sich automatisch jede Minute.
  window.setInterval(() => {
    renderHeroQuickInfo();
    renderEventCards();
  }, 60_000);
}

document.addEventListener("DOMContentLoaded", init);

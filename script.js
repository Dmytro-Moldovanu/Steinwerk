(() => {
  "use strict";

  const models = [
    {
      id: "75192",
      name: "Millennium Falke",
      category: "film",
      universe: "Star Wars™",
      pieces: 7541,
      footprint: "84 × 60 cm",
      height: "21 cm",
      pace: "Langzeitprojekt",
      tagline: "Ein corellianischer Frachter für ein großes Sideboard.",
      description: "Das UCS-Modell verbindet eine breite Silhouette mit zugänglichen Innenbereichen und ist vor allem ein Flächenprojekt.",
      tip: "Plane mindestens 90 cm freie Breite und Zugang von mehreren Seiten ein.",
      image: "assets/75192.png",
      source: "https://www.lego.com/de-de/product/millennium-falcon-75192"
    },
    {
      id: "75313",
      name: "AT-AT",
      category: "film",
      universe: "Star Wars™",
      pieces: 6785,
      footprint: "69 × 24 cm",
      height: "62 cm",
      pace: "Viele Bauabende",
      tagline: "Mechanische Präsenz aus der Eiswelt Hoth.",
      description: "Der vierbeinige Walker wirkt durch seine Höhe und die beweglichen Elemente, ohne eine extrem tiefe Stellfläche zu verlangen.",
      tip: "Ein niedriges, stabiles Möbel lässt die Höhe wirken und reduziert Kippgefahr.",
      image: "assets/75313.png",
      source: "https://www.lego.com/de-de/product/at-at-75313"
    },
    {
      id: "71043",
      name: "Schloss Hogwarts",
      category: "film",
      universe: "Harry Potter™",
      pieces: 6020,
      footprint: "69 × 43 cm",
      height: "58 cm",
      pace: "Viele Bauabende",
      tagline: "Türme, Hallen und Mikro-Szenen voller Magie.",
      description: "Das Schloss kombiniert eine eindrucksvolle Außenansicht mit vielen kleinen Szenen und belohnt einen gut beleuchteten Präsentationsplatz.",
      tip: "Wähle eine Stellfläche, auf der Vorder- und Rückseite sichtbar bleiben.",
      image: "assets/71043.png",
      source: "https://www.lego.com/de-de/product/hogwarts-castle-71043"
    },
    {
      id: "10316",
      name: "Bruchtal",
      category: "film",
      universe: "Der Herr der Ringe™",
      pieces: 6167,
      footprint: "72 × 50 cm",
      height: "39 cm",
      pace: "Viele Bauabende",
      tagline: "Eine offene Landschaft statt einer geschlossenen Fassade.",
      description: "Bruchtal lebt von seiner horizontalen Komposition, Wasser, Bäumen und Architektur – ideal als Mittelpunkt eines breiten Regals.",
      tip: "Rechne seitlich etwas Luft ein, damit Silhouette und Farbverlauf nicht eingeengt wirken.",
      image: "assets/10316.png",
      source: "https://www.lego.com/de-de/product/the-lord-of-the-rings-rivendell-10316"
    },
    {
      id: "10333",
      name: "Barad-dûr",
      category: "film",
      universe: "Der Herr der Ringe™",
      pieces: 5471,
      footprint: "45 × 30 cm",
      height: "83 cm",
      pace: "Viele Bauabende",
      tagline: "Dunkle Filmarchitektur mit enormer Höhe.",
      description: "Der Turm nutzt wenig Grundfläche im Verhältnis zu seiner Höhe und setzt einen starken vertikalen Akzent.",
      tip: "Vor einer ruhigen Wand und mit Abstand zur Decke kommt der Turm am besten zur Geltung.",
      image: "assets/10333.png",
      source: "https://www.lego.com/de-de/product/the-lord-of-the-rings-barad-dur-10333"
    },
    {
      id: "76178",
      name: "Daily Bugle",
      category: "film",
      universe: "Marvel",
      pieces: 3772,
      footprint: "27 × 27 cm",
      height: "82 cm",
      pace: "Etappenprojekt",
      tagline: "Ein Hochhaus voller Marvel-Szenen.",
      description: "Die modulare Stadtfassade benötigt wenig Grundfläche, bringt aber sehr viele Figuren und kleine Geschichten in die Höhe.",
      tip: "Plane vorne zusätzlichen Raum ein, wenn Minifiguren und Actionszenen ergänzt werden.",
      image: "assets/76178.png",
      source: "https://www.lego.com/de-de/product/daily-bugle-76178"
    },
    {
      id: "10307",
      name: "Eiffelturm",
      category: "architecture",
      universe: "Paris",
      pieces: 10001,
      footprint: "57 × 57 cm",
      height: "149 cm",
      pace: "Mehrwöchiges Projekt",
      tagline: "Fast eineinhalb Meter Pariser Ingenieurskunst.",
      description: "Der Eiffelturm ist weniger Regalmodell als eigenes Einrichtungsobjekt und verlangt vor allem nach vertikalem Freiraum.",
      tip: "Miss Deckenhöhe, Sockel und Transportweg, bevor du mit dem Bau beginnst.",
      image: "assets/10307.png",
      source: "https://www.lego.com/de-de/product/eiffel-tower-10307"
    },
    {
      id: "10276",
      name: "Kolosseum",
      category: "architecture",
      universe: "Rom",
      pieces: 9036,
      footprint: "52 × 59 cm",
      height: "27 cm",
      pace: "Mehrwöchiges Projekt",
      tagline: "Geschichte mit großer, elliptischer Standfläche.",
      description: "Das Modell ist niedrig, aber sehr tief. Die offene Arena und die umlaufenden Bögen wollen aus mehreren Blickwinkeln gesehen werden.",
      tip: "Eine mindestens 60 cm tiefe Fläche verhindert, dass das Modell über die Kante ragt.",
      image: "assets/10276.png",
      source: "https://www.lego.com/de-de/product/colosseum-10276"
    },
    {
      id: "21061",
      name: "Notre-Dame de Paris",
      category: "architecture",
      universe: "Paris",
      pieces: 4383,
      footprint: "22 × 41 cm",
      height: "33 cm",
      pace: "Etappenprojekt",
      tagline: "Gotische Details auf angenehm schmaler Fläche.",
      description: "Die Kathedrale verbindet dichte Fassadendetails mit einer vergleichsweise kompakten Breite und eignet sich für tiefere Bücherregale.",
      tip: "Seitliches Licht macht Strebebögen und Rosetten besser lesbar.",
      image: "assets/21061.png",
      source: "https://www.lego.com/de-de/product/notre-dame-de-paris-21061"
    },
    {
      id: "10326",
      name: "Naturhistorisches Museum",
      category: "architecture",
      universe: "Modulare Stadt",
      pieces: 4014,
      footprint: "39 × 25 cm",
      height: "31 cm",
      pace: "Etappenprojekt",
      tagline: "Ein Stadtbaustein mit Ausstellungen im Inneren.",
      description: "Das modulare Gebäude bietet eine klare Straßenfassade und bespielbare Räume – ein guter Startpunkt für eine wachsende Häuserzeile.",
      tip: "Lass links oder rechts Platz, wenn später weitere modulare Gebäude dazukommen sollen.",
      image: "assets/10326.png",
      source: "https://www.lego.com/de-de/product/natural-history-museum-10326"
    },
    {
      id: "21060",
      name: "Burg Himeji",
      category: "architecture",
      universe: "Japan",
      pieces: 2125,
      footprint: "32 × 27 cm",
      height: "19 cm",
      pace: "Wochenendprojekt",
      tagline: "Japanische Architektur in kompakter Landschaft.",
      description: "Die weiße Burganlage sitzt in einer kleinen Landschaft und bietet viele Ebenen, ohne den Raum eines XXL-Modells zu beanspruchen.",
      tip: "Ein dunkler Hintergrund hebt die helle Architektur besonders gut hervor.",
      image: "assets/21060.png",
      source: "https://www.lego.com/de-de/product/himeji-castle-21060"
    },
    {
      id: "10345",
      name: "Blumengesteck",
      category: "garden",
      universe: "Botanicals",
      pieces: 1161,
      footprint: "31 × 23 cm",
      height: "26 cm",
      pace: "Wochenendprojekt",
      tagline: "Eine breite Basis für den eigenen Steingarten.",
      description: "Das Arrangement bringt verschiedene Blütenformen auf einer gemeinsamen Basis zusammen und lässt sich als Zentrum einer größeren Installation einsetzen.",
      tip: "Wiederhole einzelne Farben aus dem Raum, damit das Gesteck wie Teil der Einrichtung wirkt.",
      image: "assets/10345.png",
      source: "https://www.lego.com/de-de/product/flower-arrangement-10345"
    },
    {
      id: "10313",
      name: "Wildblumenstrauß",
      category: "garden",
      universe: "Botanicals",
      pieces: 939,
      footprint: "Vase nach Wahl",
      height: "bis 47 cm",
      pace: "Flexibles Projekt",
      tagline: "Acht Blütenarten für lockere, hohe Arrangements.",
      description: "Verstellbare Stiele machen den Strauß zu einem modularen Bauprojekt, das mit anderen Botanicals-Sets wachsen kann.",
      tip: "Die Vase gehört nicht zum Set; Öffnung, Gewicht und Stiellänge vorher gemeinsam prüfen.",
      image: "assets/10313.png",
      source: "https://www.lego.com/de-de/product/wildflower-bouquet-10313"
    },
    {
      id: "10280",
      name: "Blumenstrauß",
      category: "garden",
      universe: "Botanicals",
      pieces: 756,
      footprint: "Vase nach Wahl",
      height: "bis 36 cm",
      pace: "Flexibles Projekt",
      tagline: "Der farbige Klassiker für ein eigenes Bouquet.",
      description: "Unterschiedliche Stiellängen und Blütenformen machen dieses Set zur vielseitigen Basis für größere Kombinationen.",
      tip: "Nutze eine schwere Vase, wenn mehrere Sträuße zu einem XXL-Bouquet kombiniert werden.",
      image: "assets/10280.png",
      source: "https://www.lego.com/de-de/product/flower-bouquet-10280"
    },
    {
      id: "10342",
      name: "Rosafarbener Blumenstrauß",
      category: "garden",
      universe: "Botanicals",
      pieces: 749,
      footprint: "Vase nach Wahl",
      height: "bis 32 cm",
      pace: "Flexibles Projekt",
      tagline: "Rosa Töne als klarer Farbbaustein.",
      description: "Der kompaktere Strauß liefert einen zusammenhängenden Farbklang und lässt sich gezielt mit Wildblumen oder Einzelblüten ergänzen.",
      tip: "Für ein großes Arrangement unterschiedliche Höhen staffeln, statt alle Stiele gleich lang zu setzen.",
      image: "assets/10342.png",
      source: "https://www.lego.com/de-de/product/pretty-pink-flower-bouquet-10342"
    },
    {
      id: "10329",
      name: "Mini Pflanzen",
      category: "garden",
      universe: "Botanicals",
      pieces: 758,
      footprint: "9 Einzelmodelle",
      height: "bis 16 cm",
      pace: "Modulares Projekt",
      tagline: "Neun kleine Pflanzentypen für eine große Gruppe.",
      description: "Die einzelnen Töpfe können zusammen, in Gruppen oder über mehrere Regalböden verteilt werden – ideal für flexible Raumplanung.",
      tip: "Gruppiere die neun Pflanzen in ungeraden Clustern und variiere die Höhen.",
      image: "assets/10329.png",
      source: "https://www.lego.com/de-de/product/tiny-plants-10329"
    },
    {
      id: "42146",
      name: "Liebherr LR 13000",
      category: "technic",
      universe: "Technic",
      pieces: 2883,
      footprint: "110 × 28 cm",
      height: "100 cm",
      pace: "Technikprojekt",
      tagline: "Ein Meter Kranhöhe mit motorisierten Funktionen.",
      description: "Das Modell ist lang, hoch und beweglich. Für Aufbau und Vorführung braucht es deutlich mehr Platz als seine schmale Grundform vermuten lässt.",
      tip: "Plane Bewegungsraum für Ausleger und Last ein, nicht nur die ruhende Stellfläche.",
      image: "assets/42146.png",
      source: "https://www.lego.com/de-de/product/liebherr-crawler-crane-lr-13000-42146"
    },
    {
      id: "10294",
      name: "Titanic",
      category: "technic",
      universe: "Ingenieursikone",
      pieces: 9090,
      footprint: "135 × 16 cm",
      height: "44 cm",
      pace: "Mehrwöchiges Projekt",
      tagline: "Extrem lang, überraschend schmal, voller Details.",
      description: "Die Titanic ist ein lineares Präsentationsprojekt. Die Länge entscheidet stärker über den Standort als die Tiefe.",
      tip: "Ein durchgehendes Board von mindestens 140 cm ist sicherer als zwei getrennte Möbelstücke.",
      image: "assets/10294.png",
      source: "https://www.lego.com/de-de/product/lego-titanic-10294"
    },
    {
      id: "10303",
      name: "Looping-Achterbahn",
      category: "technic",
      universe: "Jahrmarkt",
      pieces: 3756,
      footprint: "85 × 34 cm",
      height: "92 cm",
      pace: "Technikprojekt",
      tagline: "Hohe Schienen, Aufzug und zwei Loopings.",
      description: "Die Achterbahn verbindet vertikale Wirkung mit einer langen Basis und braucht zusätzlichen Platz zum Bedienen und Beobachten.",
      tip: "Stelle sie nicht zu hoch auf: Der Aufzug soll erreichbar und die Fahrt gut sichtbar bleiben.",
      image: "assets/10303.png",
      source: "https://www.lego.com/de-de/product/loop-coaster-10303"
    },
    {
      id: "42143",
      name: "Ferrari Daytona SP3",
      category: "technic",
      universe: "Technic",
      pieces: 3778,
      footprint: "59 × 25 cm",
      height: "14 cm",
      pace: "Detailprojekt",
      tagline: "Supersportwagen mit sichtbarer Mechanik.",
      description: "Das niedrige Modell lebt von Proportionen und technischen Funktionen und passt besser in eine Vitrine als auf ein tiefes Sideboard.",
      tip: "Eine transparente Haube schützt die große horizontale Oberfläche vor Staub.",
      image: "assets/42143.png",
      source: "https://www.lego.com/de-de/product/ferrari-daytona-sp3-42143"
    },
    {
      id: "21344",
      name: "Der Orientexpress",
      category: "technic",
      universe: "Reiseikone",
      pieces: 2540,
      footprint: "116 × 8 cm",
      height: "12 cm",
      pace: "Etappenprojekt",
      tagline: "Eine komplette Zugkomposition für lange Regale.",
      description: "Lok und Wagen bilden eine sehr lange, schmale Silhouette. Das Set eignet sich für ein Wandboard mit geringer Tiefe.",
      tip: "Miss die nutzbare Länge zwischen Seitenwänden – nicht nur die Möbelbreite außen.",
      image: "assets/21344.png",
      source: "https://www.lego.com/de-de/product/the-orient-express-train-21344"
    }
  ];

  const categories = {
    film: "Filmwelten",
    architecture: "Architektur",
    garden: "Botanische Gärten",
    technic: "Technik & Abenteuer"
  };

  const bundles = {
    film: ["75192", "71043", "10316"],
    city: ["10307", "10276", "21061"],
    garden: ["10345", "10313", "10342"]
  };

  const MAX_PROJECT_QUANTITY = 9;
  const MAX_COMPARE_MODELS = 3;
  const storageKey = "steinwerk-project-v2";
  const formatter = new Intl.NumberFormat("de-DE");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const modelById = new Map(models.map((model) => [model.id, model]));

  const catalogGrid = document.querySelector("#catalog-grid");
  const catalogSearch = document.querySelector("#catalog-search");
  const catalogStatus = document.querySelector("#catalog-status");
  const emptyResults = document.querySelector("#empty-results");
  const planCount = document.querySelector("#plan-count");
  const formSelectionSummary = document.querySelector("#form-selection-summary");
  const toast = document.querySelector("#toast");
  const compareBar = document.querySelector("#compare-bar");
  const compareCount = document.querySelector("#compare-count");
  const compareOpen = document.querySelector("#compare-open");

  const detailDialog = document.querySelector("#detail-dialog");
  const compareDialog = document.querySelector("#compare-dialog");
  const projectDialog = document.querySelector("#project-dialog");
  const infoDialog = document.querySelector("#info-dialog");
  const dialogs = [detailDialog, compareDialog, projectDialog, infoDialog];

  let activeFilter = "all";
  let compareIds = [];
  let project = loadProject();
  let toastTimer = 0;

  function loadProject() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      return Object.fromEntries(
        Object.entries(saved).filter(([id, quantity]) => modelById.has(id) && Number.isInteger(quantity) && quantity > 0 && quantity <= MAX_PROJECT_QUANTITY)
      );
    } catch {
      return {};
    }
  }

  function saveProject() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(project));
      return true;
    } catch {
      return false;
    }
  }

  function formatPieces(value) {
    return formatter.format(value);
  }

  function normalize(value) {
    return String(value)
      .toLocaleLowerCase("de-DE")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ß/g, "ss")
      .trim();
  }

  function modelLabel(count) {
    return count === 1 ? "Modell" : "Modelle";
  }

  function getModelCount(category = "all") {
    return category === "all"
      ? models.length
      : models.filter((model) => model.category === category).length;
  }

  function getScrollBehavior() {
    return reducedMotionQuery.matches ? "auto" : "smooth";
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = window.setTimeout(() => {
      toast.hidden = true;
    }, 3200);
  }

  function renderCatalog() {
    catalogGrid.innerHTML = models.map((model, index) => `
      <article class="catalog-card" data-model-card="${model.id}" data-category="${model.category}">
        <div class="catalog-picture">
          <span class="catalog-category">${String(index + 1).padStart(2, "0")} / ${categories[model.category]}</span>
          <button class="compare-toggle" type="button" data-compare="${model.id}" aria-pressed="false" aria-label="${model.name} zum Vergleich hinzufügen">＋</button>
          <button class="open-model" type="button" data-detail="${model.id}" aria-haspopup="dialog" aria-controls="detail-dialog" aria-label="Details zu ${model.name} ansehen">
            <img src="${model.image}" alt="Gebautes Modell: ${model.name}" loading="lazy">
            <span class="circle-arrow" aria-hidden="true">↗</span>
          </button>
        </div>
        <div class="catalog-body">
          <span class="catalog-set">${model.universe} · Set ${model.id} · ${formatPieces(model.pieces)} Teile</span>
          <h3>${model.name}</h3>
          <p>${model.tagline}</p>
          <div class="catalog-actions">
            <button type="button" data-detail="${model.id}" aria-haspopup="dialog" aria-controls="detail-dialog">Details ansehen</button>
            <button class="add-model" type="button" data-model="${model.id}" aria-pressed="false">＋ Projektliste</button>
          </div>
        </div>
      </article>
    `).join("");
  }

  function setFilter(nextFilter, shouldScroll = false) {
    activeFilter = nextFilter;
    document.querySelectorAll("[data-filter]").forEach((button) => {
      const selected = button.dataset.filter === activeFilter;
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    document.querySelectorAll("[data-world-filter]").forEach((button) => {
      const selected = button.dataset.worldFilter === activeFilter;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    applyCatalogFilters();
    if (shouldScroll) {
      document.querySelector("#catalog-toolbar").scrollIntoView({
        behavior: getScrollBehavior(),
        block: "start"
      });
    }
  }

  function applyCatalogFilters() {
    const query = normalize(catalogSearch.value);
    let visible = 0;

    models.forEach((model) => {
      const categoryMatches = activeFilter === "all" || model.category === activeFilter;
      const haystack = normalize([
        model.name,
        model.id,
        model.universe,
        categories[model.category],
        model.tagline
      ].join(" "));
      const searchMatches = !query || haystack.includes(query);
      const card = catalogGrid.querySelector(`[data-model-card="${model.id}"]`);
      card.hidden = !(categoryMatches && searchMatches);
      if (!card.hidden) visible += 1;
    });

    const filterName = activeFilter === "all" ? "allen Kollektionen" : categories[activeFilter];
    catalogStatus.textContent = query
      ? `${visible} ${modelLabel(visible)} für „${catalogSearch.value.trim()}“ in ${filterName}.`
      : `${visible} ${visible === 1 ? "Modell wird" : "Modelle werden"} in ${filterName} angezeigt.`;
    emptyResults.hidden = visible !== 0;
  }

  function projectEntries() {
    return Object.entries(project)
      .map(([id, quantity]) => ({ model: modelById.get(id), quantity }))
      .filter((entry) => entry.model);
  }

  function projectTotals() {
    return projectEntries().reduce((totals, entry) => {
      totals.unique += 1;
      totals.sets += entry.quantity;
      totals.pieces += entry.model.pieces * entry.quantity;
      return totals;
    }, { unique: 0, sets: 0, pieces: 0 });
  }

  function updateProjectUI() {
    const totals = projectTotals();
    planCount.textContent = totals.unique;
    planCount.setAttribute("aria-label", `${totals.unique} ${modelLabel(totals.unique)}`);
    formSelectionSummary.textContent = totals.unique
      ? `${totals.unique} ${modelLabel(totals.unique)}, ${formatPieces(totals.pieces)} Teile insgesamt.`
      : "Noch keine Modelle ausgewählt – deine Idee kannst du trotzdem schon beschreiben.";

    document.querySelectorAll(".add-model[data-model], [data-dialog-add]").forEach((button) => {
      const id = button.dataset.model || button.dataset.dialogAdd;
      const selected = Boolean(project[id]);
      button.classList.toggle("in-project", selected);
      button.setAttribute("aria-pressed", String(selected));
      button.textContent = selected
        ? "✓ Vorgemerkt"
        : button.dataset.projectLabel === "short" ? "+ Vormerken" : "+ Projektliste";
    });
  }

  function commitProject({ renderProject = false, focusSelector = "" } = {}) {
    const saved = saveProject();
    updateProjectUI();
    if (renderProject && isDialogOpen(projectDialog)) renderProjectDialog(focusSelector);
    return saved;
  }

  function showProjectResult(saved, successMessage = "") {
    showToast(saved ? successMessage : "Deine Projektliste konnte nicht gespeichert werden.");
  }

  function toggleProjectModel(id) {
    const model = modelById.get(id);
    if (!model) return;

    const removed = Boolean(project[id]);
    if (removed) {
      delete project[id];
    } else {
      project[id] = 1;
    }
    const saved = commitProject({ renderProject: true });
    showProjectResult(saved, removed
      ? `${model.name} wurde aus der Projektliste entfernt.`
      : `${model.name} wurde zur Projektliste hinzugefügt.`);
  }

  function addBundle(name) {
    const ids = bundles[name];
    if (!ids) return;
    let added = 0;
    ids.forEach((id) => {
      if (!project[id]) {
        project[id] = 1;
        added += 1;
      }
    });
    const saved = commitProject({ renderProject: true });
    showProjectResult(saved, added
      ? `${added} Modelle wurden zur Projektliste hinzugefügt.`
      : "Diese Projektidee ist bereits vollständig vorgemerkt.");
  }

  function updateCompareUI() {
    compareCount.textContent = compareIds.length;
    compareBar.hidden = compareIds.length === 0;
    compareOpen.disabled = compareIds.length < 2;

    document.querySelectorAll("[data-compare]").forEach((button) => {
      const selected = compareIds.includes(button.dataset.compare);
      const model = modelById.get(button.dataset.compare);
      button.setAttribute("aria-pressed", String(selected));
      button.setAttribute("aria-label", selected
        ? `${model.name} aus dem Vergleich entfernen`
        : `${model.name} zum Vergleich hinzufügen`);
      button.textContent = selected ? "✓" : "＋";
    });
  }

  function toggleCompare(id) {
    if (compareIds.includes(id)) {
      compareIds = compareIds.filter((item) => item !== id);
    } else if (compareIds.length >= MAX_COMPARE_MODELS) {
      showToast(`Du kannst höchstens ${MAX_COMPARE_MODELS} Modelle gleichzeitig vergleichen.`);
      return;
    } else {
      compareIds.push(id);
    }
    updateCompareUI();
  }

  function isDialogOpen(dialog) {
    return Boolean(dialog?.hasAttribute("open"));
  }

  function hasOpenDialog() {
    return dialogs.some(isDialogOpen);
  }

  function finishDialogClose(dialog) {
    const shouldRestoreFocus = dialog.restoreFocus !== false;
    dialog.restoreFocus = true;
    document.body.classList.toggle("dialog-open", hasOpenDialog());
    if (shouldRestoreFocus && !hasOpenDialog() && dialog.returnFocus instanceof HTMLElement) {
      window.requestAnimationFrame(() => dialog.returnFocus.focus({ preventScroll: true }));
    }
  }

  function openModal(dialog, trigger) {
    if (!dialog || isDialogOpen(dialog)) return;
    dialog.returnFocus = trigger || document.activeElement;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    document.body.classList.add("dialog-open");
  }

  function closeModal(dialog, restoreFocus = true) {
    if (!isDialogOpen(dialog)) return;
    dialog.restoreFocus = restoreFocus;
    if (typeof dialog.close === "function") dialog.close();
    else {
      dialog.removeAttribute("open");
      finishDialogClose(dialog);
    }
  }

  function openDetail(id, trigger) {
    const model = modelById.get(id);
    if (!model) return;
    document.querySelector("#detail-content").innerHTML = `
      <div class="detail-grid">
        <div class="detail-image"><img src="${model.image}" alt="Gebautes Modell: ${model.name}"></div>
        <div>
          <span class="detail-overline">${categories[model.category]} / ${model.universe} / Set ${model.id}</span>
          <h2 id="detail-title">${model.name}</h2>
          <p class="detail-description">${model.description}</p>
          <div class="detail-meta">
            <div><b>${formatPieces(model.pieces)}</b><span>Teile</span></div>
            <div><b>${model.height}</b><span>Höhe</span></div>
            <div><b>${model.footprint}</b><span>Stellfläche</span></div>
          </div>
          <p class="detail-tip"><strong>Planungstipp:</strong> ${model.tip}</p>
          <div class="detail-actions">
            <button class="button button-dark" type="button" data-dialog-add="${model.id}">${project[id] ? "✓ Vorgemerkt" : "+ Projektliste"}</button>
            <button class="secondary-button" type="button" data-dialog-compare="${model.id}">${compareIds.includes(id) ? "Aus Vergleich entfernen" : "Zum Vergleich"}</button>
          </div>
          <a class="source-link" href="${model.source}" target="_blank" rel="noopener noreferrer">Set bei LEGO.com ansehen ↗</a>
          <p class="modal-note">Maße und Teilezahl beziehen sich auf die offiziellen Produktangaben.</p>
        </div>
      </div>
    `;
    openModal(detailDialog, trigger);
    updateProjectUI();
  }

  function openComparison(trigger) {
    const selected = compareIds.map((id) => modelById.get(id)).filter(Boolean);
    if (selected.length < 2) {
      showToast("Wähle mindestens zwei Modelle für den Vergleich.");
      return;
    }

    const row = (label, render) => `
      <tr>
        <th scope="row">${label}</th>
        ${selected.map((model) => `<td>${render(model)}</td>`).join("")}
      </tr>`;

    document.querySelector("#compare-content").innerHTML = `
      <span class="detail-overline">DIREKTER MODELLVERGLEICH</span>
      <h2 id="compare-title">WAS PASST ZU DIR?</h2>
      <div class="compare-table-wrap">
        <table class="compare-table">
          <thead><tr><th scope="col">Merkmal</th>${selected.map((model) => `<th scope="col">${model.name}</th>`).join("")}</tr></thead>
          <tbody>
            ${row("Modell", (model) => `<img src="${model.image}" alt="${model.name}">`)}
            ${row("Kollektion", (model) => `${categories[model.category]}<br><small>${model.universe}</small>`)}
            ${row("Teile", (model) => formatPieces(model.pieces))}
            ${row("Höhe", (model) => model.height)}
            ${row("Stellfläche", (model) => model.footprint)}
            ${row("Bauformat", (model) => model.pace)}
            ${row("Projekt", (model) => `<button class="button button-dark" type="button" data-dialog-add="${model.id}" data-project-label="short">${project[model.id] ? "✓ Vorgemerkt" : "+ Vormerken"}</button>`)}
          </tbody>
        </table>
      </div>
      <p class="modal-note">Vergleiche Maße und Platzbedarf, damit deine Auswahl gut zu deinem Raum passt.</p>
    `;
    if (!isDialogOpen(compareDialog)) openModal(compareDialog, trigger);
    updateProjectUI();
  }

  function focusProjectControl(focusSelector) {
    if (!focusSelector) return;
    const content = document.querySelector("#project-content");
    const target = content.querySelector(focusSelector)
      || content.querySelector("[data-clear-project], [data-close-and-catalog]")
      || projectDialog.querySelector(".dialog-close");
    target?.focus({ preventScroll: true });
  }

  function renderProjectDialog(focusSelector = "") {
    const content = document.querySelector("#project-content");
    const entries = projectEntries();
    const totals = projectTotals();

    if (!entries.length) {
      content.innerHTML = `
        <span class="detail-overline">DEINE PROJEKTLISTE</span>
        <h2 id="project-title">NOCH VIEL PLATZ.</h2>
        <div class="empty-project">
          <p>Entdecke im Katalog Modelle, die zu deiner Idee passen.</p>
          <button class="button button-dark" type="button" data-close-and-catalog>Katalog entdecken <span aria-hidden="true">↘</span></button>
        </div>
      `;
      focusProjectControl(focusSelector);
      return;
    }

    content.innerHTML = `
      <span class="detail-overline">DEINE PROJEKTLISTE</span>
      <h2 id="project-title">GROSS VORHABEN.</h2>
      <div class="project-layout">
        <ul class="project-list">
          ${entries.map(({ model, quantity }) => `
            <li class="project-row">
              <img src="${model.image}" alt="">
              <div>
                <h3>${model.name}</h3>
                <p>Set ${model.id} · ${formatPieces(model.pieces)} Teile je Set · ${model.footprint}</p>
                <div class="quantity" role="group" aria-label="Anzahl für ${model.name}">
                  <button type="button" data-quantity="${model.id}" data-delta="-1" aria-label="Anzahl verringern">−</button>
                  <strong>${quantity}</strong>
                  <button type="button" data-quantity="${model.id}" data-delta="1" aria-label="Anzahl erhöhen"${quantity >= MAX_PROJECT_QUANTITY ? " disabled" : ""}>＋</button>
                  <button class="remove-model" type="button" data-remove-model="${model.id}">Entfernen</button>
                </div>
              </div>
            </li>
      `).join("")}
        </ul>
        <aside class="project-summary">
          <h3>Projektumfang</h3>
          <p>Behalte Teilezahl und Platzbedarf im Blick, wenn du deine Auswahl zusammenstellst.</p>
          <dl>
            <div><dt>Modelle</dt><dd>${totals.unique}</dd></div>
            <div><dt>Bausätze</dt><dd>${totals.sets}</dd></div>
            <div><dt>Teile gesamt</dt><dd>${formatPieces(totals.pieces)}</dd></div>
          </dl>
          <button class="button button-dark" type="button" data-transfer-project>In Anfrage übernehmen <span aria-hidden="true">↗</span></button>
          <button class="project-clear" type="button" data-clear-project>Projektliste vollständig leeren</button>
        </aside>
      </div>
    `;
    focusProjectControl(focusSelector);
  }

  function openProject(trigger) {
    renderProjectDialog();
    openModal(projectDialog, trigger);
  }

  function changeQuantity(id, delta) {
    if (!project[id]) return;
    const current = project[id];
    const next = Math.min(current + delta, MAX_PROJECT_QUANTITY);
    if (next === current) return;
    if (next <= 0) delete project[id];
    else project[id] = next;
    const focusSelector = next > 0
      ? `[data-quantity="${id}"][data-delta="${next === MAX_PROJECT_QUANTITY ? -1 : delta}"]`
      : "[data-close-and-catalog]";
    const saved = commitProject({ renderProject: true, focusSelector });
    if (!saved) showProjectResult(false);
  }

  function removeProjectModel(id) {
    const model = modelById.get(id);
    if (!model || !project[id]) return;
    delete project[id];
    const nextEntry = projectEntries()[0];
    const saved = commitProject({
      renderProject: true,
      focusSelector: nextEntry ? `[data-remove-model="${nextEntry.model.id}"]` : "[data-close-and-catalog]"
    });
    showProjectResult(saved, `${model.name} wurde entfernt.`);
  }

  function clearProject() {
    project = {};
    const saved = commitProject({ renderProject: true, focusSelector: "[data-close-and-catalog]" });
    showProjectResult(saved, "Die Projektliste wurde geleert.");
  }

  function scrollAndFocus(element, focusTarget, block = "start") {
    element.scrollIntoView({ behavior: getScrollBehavior(), block });
    window.setTimeout(() => focusTarget.focus({ preventScroll: true }), reducedMotionQuery.matches ? 0 : 550);
  }

  function transferProjectToForm() {
    closeModal(projectDialog, false);
    const form = document.querySelector("#project-form");
    scrollAndFocus(form, form.querySelector("textarea"));
    showToast("Deine Auswahl ist für die Anfrage bereit.");
  }

  const infoContent = {
    project: {
      title: "ÜBER<br>STEINWERK.",
      body: `
        <p>STEINWERK bringt große LEGO® Bauideen an einen Ort: Filmwelten, Architektur, Botanik und Technik für Projekte mit Persönlichkeit.</p>
        <ul>
          <li>Entdecke große Modelle für Regale, Sideboards und besondere Räume.</li>
          <li>Vergleiche Maße, Teilezahlen und Ideen für deinen Platz.</li>
          <li>Stelle deine Favoriten zu deinem persönlichen Bauprojekt zusammen.</li>
          <li>LEGO® ist eine Marke der LEGO Gruppe, die diese Website weder sponsert noch autorisiert oder unterstützt.</li>
        </ul>`
    },
    sources: {
      title: "BILD-<br>QUELLEN.",
      body: `
        <p>Die 21 Produktabbildungen stammen aus den öffentlichen Setkatalogen von BrickLink. BrickLink gehört zur LEGO Gruppe.</p>
        <p>Setnummern, Teilezahlen und Modellmaße wurden anhand der offiziellen Produkt- bzw. Bauanleitungsseiten von LEGO geprüft. Jede Detailansicht enthält einen direkten Link zur passenden LEGO-Seite.</p>
        <p><a href="https://www.bricklink.com/catalogList.asp?catType=S" target="_blank" rel="noopener noreferrer">BrickLink Setkatalog öffnen ↗</a><br><a href="https://www.lego.com/de-de/service/building-instructions" target="_blank" rel="noopener noreferrer">LEGO Bauanleitungen öffnen ↗</a></p>
        <p class="modal-note">Weitere Informationen und Bauanleitungen findest du direkt bei LEGO.com.</p>`
    },
    privacy: {
      title: "DEINE<br>DATEN.",
      body: `
        <p>Deine Angaben helfen dir dabei, deine Anfrage übersichtlich zusammenzustellen.</p>
        <ul>
          <li>Name, E-Mail und Nachricht bleiben auf deinem Gerät.</li>
          <li>Deine Projektliste wird auf diesem Gerät gespeichert und kann jederzeit gelöscht werden.</li>
          <li>Wir verwenden keine Tracking-Skripte.</li>
        </ul>`
    }
  };

  function openInfo(type, trigger) {
    const info = infoContent[type];
    if (!info) return;
    document.querySelector("#info-content").innerHTML = `
      <div class="info-copy">
        <span class="detail-overline">INFORMATIONEN</span>
        <h2 id="info-title">${info.title}</h2>
        ${info.body}
      </div>`;
    openModal(infoDialog, trigger);
  }

  function requestSummary(formData) {
    const entries = projectEntries();
    const totals = projectTotals();
    const modelLines = entries.length
      ? entries.map(({ model, quantity }) => `– ${quantity} × ${model.name} (Set ${model.id}, ${formatPieces(model.pieces * quantity)} Teile)`).join("\n")
      : "– Noch kein Modell ausgewählt";

    return [
      "STEINWERK · PROJEKTANFRAGE",
      "",
      `Name: ${formData.get("name")}`,
      `E-Mail: ${formData.get("email")}`,
      `Anliegen: ${formData.get("purpose")}`,
      `Bauerfahrung: ${formData.get("experience")}`,
      `Stellbreite: ${formData.get("space") || "noch offen"}`,
      `Zeitrahmen: ${formData.get("timing")}`,
      "",
      "Projektliste:",
      modelLines,
      entries.length ? `Gesamt: ${totals.sets} Bausätze · ${formatPieces(totals.pieces)} Teile` : "",
      "",
      "Projektidee:",
      String(formData.get("message") || "").trim(),
      "",
      "Bereit zum Kopieren und Weitergeben."
    ].filter((line, index, array) => line !== "" || array[index - 1] !== "").join("\n");
  }

  async function copyText(text, sourceElement) {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(text);
      showToast("Deine Projektanfrage wurde kopiert.");
    } catch {
      const range = document.createRange();
      range.selectNodeContents(sourceElement);
      const selection = window.getSelection();
      if (!selection) {
        showToast("Die Zusammenfassung konnte nicht automatisch kopiert werden.");
        return;
      }
      selection.removeAllRanges();
      selection.addRange(range);
      let copied = false;
      try {
        copied = typeof document.execCommand === "function" && document.execCommand("copy");
      } catch {
        copied = false;
      }
      showToast(copied
        ? "Deine Projektanfrage wurde kopiert."
        : "Die Zusammenfassung ist markiert. Kopiere sie mit Strg+C oder ⌘C.");
    }
  }

  function updateNavigation() {
    const sections = [...document.querySelectorAll("main > section")];
    const headerOffset = document.querySelector(".site-header").offsetHeight + 120;
    const current = sections.reduce((active, section) => {
      return window.scrollY + headerOffset >= section.offsetTop ? section : active;
    }, sections[0]);

    document.querySelectorAll("nav a").forEach((link) => {
      const selected = link.getAttribute("href") === `#${current.id}`;
      link.classList.toggle("active", selected);
      if (selected) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  renderCatalog();

  document.querySelectorAll("[data-count-for]").forEach((node) => {
    node.textContent = getModelCount(node.dataset.countFor);
  });
  document.querySelectorAll("[data-collection-count]").forEach((node) => {
    node.textContent = Object.keys(categories).length;
  });
  document.querySelectorAll("[data-max-compare]").forEach((node) => {
    node.textContent = MAX_COMPARE_MODELS;
  });

  document.querySelector("#catalog-filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (button) setFilter(button.dataset.filter);
  });

  document.querySelectorAll("[data-world-filter]").forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.worldFilter, true));
  });

  catalogSearch.addEventListener("input", applyCatalogFilters);
  document.querySelector("#reset-catalog").addEventListener("click", () => {
    catalogSearch.value = "";
    setFilter("all");
    catalogSearch.focus();
  });

  catalogGrid.addEventListener("click", (event) => {
    const detailButton = event.target.closest("[data-detail]");
    if (detailButton) {
      openDetail(detailButton.dataset.detail, detailButton);
      return;
    }
    const compareButton = event.target.closest("[data-compare]");
    if (compareButton) {
      toggleCompare(compareButton.dataset.compare);
      return;
    }
    const addButton = event.target.closest(".add-model[data-model]");
    if (addButton) toggleProjectModel(addButton.dataset.model);
  });

  document.addEventListener("click", (event) => {
    const projectButton = event.target.closest("[data-open-project], #open-project");
    if (projectButton) {
      openProject(projectButton);
      return;
    }

    const quickDetail = event.target.closest("[data-quick-detail]");
    if (quickDetail) {
      openDetail(quickDetail.dataset.quickDetail, quickDetail);
      return;
    }

    const bundleButton = event.target.closest("[data-bundle]");
    if (bundleButton) {
      addBundle(bundleButton.dataset.bundle);
      return;
    }

    const infoButton = event.target.closest("[data-info]");
    if (infoButton) {
      openInfo(infoButton.dataset.info, infoButton);
      return;
    }

    const dialogAdd = event.target.closest("[data-dialog-add]");
    if (dialogAdd) {
      toggleProjectModel(dialogAdd.dataset.dialogAdd);
      if (isDialogOpen(compareDialog)) openComparison(compareDialog.returnFocus);
      return;
    }

    const dialogCompare = event.target.closest("[data-dialog-compare]");
    if (dialogCompare) {
      toggleCompare(dialogCompare.dataset.dialogCompare);
      dialogCompare.textContent = compareIds.includes(dialogCompare.dataset.dialogCompare) ? "Aus Vergleich entfernen" : "Zum Vergleich";
      return;
    }

    const quantityButton = event.target.closest("[data-quantity]");
    if (quantityButton) {
      changeQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.delta));
      return;
    }

    const removeButton = event.target.closest("[data-remove-model]");
    if (removeButton) {
      removeProjectModel(removeButton.dataset.removeModel);
      return;
    }

    if (event.target.closest("[data-clear-project]")) {
      clearProject();
      return;
    }

    if (event.target.closest("[data-transfer-project]")) {
      transferProjectToForm();
      return;
    }

    if (event.target.closest("[data-close-and-catalog]")) {
      closeModal(projectDialog, false);
      scrollAndFocus(document.querySelector("#catalog-toolbar"), catalogSearch);
      return;
    }
  });

  compareOpen.addEventListener("click", () => openComparison(compareOpen));
  document.querySelector("#compare-clear").addEventListener("click", () => {
    compareIds = [];
    updateCompareUI();
  });

  dialogs.forEach((dialog) => {
    dialog.querySelector(".dialog-close").addEventListener("click", () => closeModal(dialog));
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeModal(dialog);
    });
    dialog.addEventListener("close", () => finishDialogClose(dialog));
  });

  document.querySelector("#project-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const summary = requestSummary(formData);
    const result = document.querySelector("#form-result");
    result.innerHTML = `<h4>Deine Projektanfrage ist vorbereitet.</h4><p>Deine Angaben sind übersichtlich zusammengefasst. Kopiere sie für deine Nachricht an uns.</p><pre id="request-preview"></pre><button type="button" id="copy-request">Zusammenfassung kopieren</button>`;
    const preview = result.querySelector("#request-preview");
    preview.textContent = summary;
    result.hidden = false;
    result.querySelector("#copy-request").addEventListener("click", () => copyText(summary, preview));
    result.scrollIntoView({ behavior: getScrollBehavior(), block: "nearest" });
  });

  let navigationFrame = 0;
  window.addEventListener("scroll", () => {
    if (navigationFrame) return;
    navigationFrame = window.requestAnimationFrame(() => {
      updateNavigation();
      navigationFrame = 0;
    });
  }, { passive: true });

  window.addEventListener("storage", (event) => {
    if (event.key === storageKey || event.key === null) {
      project = loadProject();
      updateProjectUI();
      if (isDialogOpen(projectDialog)) renderProjectDialog();
    }
  });

  applyCatalogFilters();
  updateProjectUI();
  updateCompareUI();
  updateNavigation();
  document.querySelector("[data-js-submit]").disabled = false;
})();

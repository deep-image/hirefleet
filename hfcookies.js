(function () {
  var STORAGE_KEY = "fs_cookie_preferences_v2";
  var ROOT_ID = "fs-cookie-root";
  var STYLE_ID = "fs-cookie-style";

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;

    var css = `
      #${ROOT_ID},
      #${ROOT_ID} * {
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
      }

      #${ROOT_ID} {
        position: relative;
        z-index: 999999;
      }

      #${ROOT_ID}[data-state="hidden"] .fs-cookie-panel,
      #${ROOT_ID}[data-state="hidden"] .fs-cookie-pill {
        display: none;
      }

      #${ROOT_ID}[data-state="panel"] .fs-cookie-panel {
        display: block;
      }

      #${ROOT_ID}[data-state="panel"] .fs-cookie-pill {
        display: none;
      }

      #${ROOT_ID}[data-state="pill"] .fs-cookie-panel {
        display: none;
      }

      #${ROOT_ID}[data-state="pill"] .fs-cookie-pill {
        display: inline-flex;
      }

      .fs-cookie-panel {
        display: none;
        position: fixed;
        left: 16px;
        bottom: 16px;
        width: 520px;
        max-width: calc(100vw - 32px);
        background: #111111;
        color: #ffffff;
        border: 1px solid #2e2e2e;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.42);
        padding: 16px 16px 14px;
      }

      .fs-cookie-pill {
        display: none;
        position: fixed;
        left: 16px;
        bottom: 16px;
        align-items: center;
        justify-content: center;
        min-height: 34px;
        padding: 8px 14px;
        background: #111111;
        color: #ffffff;
        border: 1px solid #2e2e2e;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
      }

      .fs-cookie-close {
        position: absolute;
        top: 8px;
        right: 10px;
        width: 26px;
        height: 26px;
        border: 0;
        background: transparent;
        color: #ffffff;
        font-size: 22px;
        line-height: 1;
        cursor: pointer;
        padding: 0;
      }

      .fs-cookie-title {
        margin: 0 26px 10px 0;
        font-size: 30px;
        line-height: 1.02;
        font-weight: 700;
        letter-spacing: 0;
      }

      .fs-cookie-copy {
        margin: 0 0 16px;
        font-size: 13px;
        line-height: 1.5;
        color: #f1f1f1;
        max-width: 470px;
      }

      .fs-cookie-copy a {
        color: #96d136;
        text-decoration: none;
      }

      .fs-cookie-copy a:hover {
        text-decoration: underline;
      }

      .fs-cookie-actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-bottom: 10px;
      }

      .fs-cookie-btn {
        height: 42px;
        border-radius: 0;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        cursor: pointer;
      }

      .fs-cookie-btn-primary {
        background: #97d63c;
        border: 1px solid #97d63c;
        color: #111111;
      }

      .fs-cookie-btn-outline {
        background: transparent;
        border: 1px solid #8e8e8e;
        color: #ffffff;
      }

      .fs-cookie-toggle {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: 0;
        background: transparent;
        color: #ffffff;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        padding: 8px 0 12px;
        cursor: pointer;
      }

      .fs-cookie-toggle-icon {
        font-size: 14px;
        line-height: 1;
      }

      .fs-cookie-details.is-collapsed {
        display: none;
      }

      .fs-cookie-list {
        padding: 2px 0 12px;
      }

      .fs-cookie-option {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 0 0 14px;
        cursor: pointer;
        user-select: none;
      }

      .fs-cookie-option:last-child {
        margin-bottom: 0;
      }

      .fs-cookie-box-wrap {
        position: relative;
        width: 22px;
        height: 22px;
        flex: 0 0 22px;
      }

      .fs-cookie-box-wrap input {
        position: absolute;
        inset: 0;
        opacity: 0;
        margin: 0;
        cursor: pointer;
      }

      .fs-cookie-box {
        position: absolute;
        inset: 0;
        border-radius: 4px;
        background: #97d63c;
        box-shadow: inset 0 0 0 1px rgba(0,0,0,0.14);
      }

      .fs-cookie-box::after {
        content: "✓";
        position: absolute;
        left: 50%;
        top: 48%;
        transform: translate(-50%, -50%);
        color: #111111;
        font-size: 15px;
        font-weight: 700;
      }

      .fs-cookie-box-wrap input:not(:checked) + .fs-cookie-box {
        background: transparent;
        border: 1px solid #7d7d7d;
        box-shadow: none;
      }

      .fs-cookie-box-wrap input:not(:checked) + .fs-cookie-box::after {
        content: "";
      }

      .fs-cookie-option-label {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.03em;
        color: #ffffff;
        text-transform: uppercase;
      }

      .fs-cookie-tabs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 14px;
      }

      .fs-cookie-tab {
        height: 38px;
        border: 1px solid #7d7d7d;
        background: #6d6d6d;
        color: #ffffff;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        cursor: pointer;
      }

      .fs-cookie-tab + .fs-cookie-tab {
        border-left: 0;
      }

      .fs-cookie-tab.is-active {
        background: #efefef;
        color: #8ea04a;
        border-color: #c4c4c4;
      }

      .fs-cookie-panels {
        background: #f5f5f5;
        color: #222222;
        border: 1px solid #c8c8c8;
        border-top: 0;
        min-height: 124px;
        padding: 12px 14px 14px;
      }

      .fs-cookie-tab-panel {
        display: none;
      }

      .fs-cookie-tab-panel.is-active {
        display: block;
      }

      .fs-cookie-subtabs {
        display: flex;
        flex-wrap: wrap;
        gap: 8px 6px;
        margin-bottom: 12px;
      }

      .fs-cookie-subtab {
        border: 0;
        background: transparent;
        color: #3a3a3a;
        font-size: 11px;
        line-height: 1.2;
        padding: 5px 8px;
        cursor: pointer;
      }

      .fs-cookie-subtab.is-active {
        background: #97d63c;
        color: #ffffff;
      }

      .fs-cookie-description {
        font-size: 12px;
        line-height: 1.5;
        color: #4b4b4b;
      }

      @media (max-width: 640px) {
        .fs-cookie-panel {
          left: 10px;
          right: 10px;
          bottom: 10px;
          width: auto;
          max-width: none;
          padding: 14px 14px 12px;
        }

        .fs-cookie-pill {
          left: 10px;
          bottom: 10px;
        }

        .fs-cookie-title {
          font-size: 22px;
          line-height: 1.08;
        }

        .fs-cookie-actions {
          grid-template-columns: 1fr;
        }

        .fs-cookie-tabs {
          grid-template-columns: 1fr;
        }

        .fs-cookie-tab + .fs-cookie-tab {
          border-left: 1px solid #7d7d7d;
          border-top: 0;
        }
      }
    `;

    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  function injectHTML() {
    var oldRoot = document.getElementById(ROOT_ID);
    if (oldRoot) oldRoot.remove();

    var root = document.createElement("div");
    root.id = ROOT_ID;
    root.setAttribute("data-state", "hidden");

    root.innerHTML = `
      <button id="fs-cookie-pill" class="fs-cookie-pill" type="button" aria-label="Open cookie settings">
        Cookie Settings
      </button>

      <div id="fs-cookie-panel" class="fs-cookie-panel" role="dialog" aria-modal="false" aria-labelledby="fs-cookie-title">
        <button id="fs-cookie-close" class="fs-cookie-close" type="button" aria-label="Close cookie panel">×</button>

        <h3 id="fs-cookie-title" class="fs-cookie-title">This website uses cookies</h3>

        <p class="fs-cookie-copy">
          This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.
          <a href="/cookie-policy" target="_blank" rel="noopener">Read more</a>
        </p>

        <div class="fs-cookie-actions">
          <button id="fs-cookie-save" class="fs-cookie-btn fs-cookie-btn-primary" type="button">Save &amp; Close</button>
          <button id="fs-cookie-decline" class="fs-cookie-btn fs-cookie-btn-outline" type="button">Decline All</button>
        </div>

        <button id="fs-cookie-toggle" class="fs-cookie-toggle" type="button" aria-expanded="true" aria-controls="fs-cookie-details">
          <span class="fs-cookie-toggle-icon">⚙</span>
          <span id="fs-cookie-toggle-label">Hide details</span>
        </button>

        <div id="fs-cookie-details" class="fs-cookie-details">
          <div class="fs-cookie-list">
            <label class="fs-cookie-option">
              <span class="fs-cookie-box-wrap">
                <input id="fs-cookie-necessary" type="checkbox" checked disabled />
                <span class="fs-cookie-box"></span>
              </span>
              <span class="fs-cookie-option-label">Strictly necessary</span>
            </label>

            <label class="fs-cookie-option">
              <span class="fs-cookie-box-wrap">
                <input id="fs-cookie-performance" type="checkbox" />
                <span class="fs-cookie-box"></span>
              </span>
              <span class="fs-cookie-option-label">Performance</span>
            </label>

            <label class="fs-cookie-option">
              <span class="fs-cookie-box-wrap">
                <input id="fs-cookie-targeting" type="checkbox" />
                <span class="fs-cookie-box"></span>
              </span>
              <span class="fs-cookie-option-label">Targeting</span>
            </label>

            <label class="fs-cookie-option">
              <span class="fs-cookie-box-wrap">
                <input id="fs-cookie-functionality" type="checkbox" />
                <span class="fs-cookie-box"></span>
              </span>
              <span class="fs-cookie-option-label">Functionality</span>
            </label>
          </div>

          <div class="fs-cookie-tabs">
            <button id="fs-cookie-tab-declaration" class="fs-cookie-tab is-active" type="button">Cookie Declaration</button>
            <button id="fs-cookie-tab-about" class="fs-cookie-tab" type="button">About Cookies</button>
          </div>

          <div class="fs-cookie-panels">
            <div id="fs-cookie-panel-declaration" class="fs-cookie-tab-panel is-active">
              <div class="fs-cookie-subtabs">
                <button class="fs-cookie-subtab" type="button" data-type="necessary">Strictly necessary</button>
                <button class="fs-cookie-subtab is-active" type="button" data-type="performance">Performance</button>
                <button class="fs-cookie-subtab" type="button" data-type="targeting">Targeting</button>
                <button class="fs-cookie-subtab" type="button" data-type="functionality">Functionality</button>
              </div>

              <div id="fs-cookie-description" class="fs-cookie-description">
                Cookies used to improve user experience and support analytics service. This category helps us understand site usage and improve performance.
              </div>
            </div>

            <div id="fs-cookie-panel-about" class="fs-cookie-tab-panel">
              <div class="fs-cookie-description">
                Cookies are small text files stored on your device to help websites function, remember preferences, measure usage, and support services such as analytics.
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(root);
  }

  function initLogic() {
    var root = document.getElementById(ROOT_ID);
    if (!root) return;

    var pill = document.getElementById("fs-cookie-pill");
    var closeBtn = document.getElementById("fs-cookie-close");
    var saveBtn = document.getElementById("fs-cookie-save");
    var declineBtn = document.getElementById("fs-cookie-decline");
    var toggleBtn = document.getElementById("fs-cookie-toggle");
    var toggleLabel = document.getElementById("fs-cookie-toggle-label");
    var details = document.getElementById("fs-cookie-details");

    var performance = document.getElementById("fs-cookie-performance");
    var targeting = document.getElementById("fs-cookie-targeting");
    var functionality = document.getElementById("fs-cookie-functionality");

    var tabDeclaration = document.getElementById("fs-cookie-tab-declaration");
    var tabAbout = document.getElementById("fs-cookie-tab-about");
    var panelDeclaration = document.getElementById("fs-cookie-panel-declaration");
    var panelAbout = document.getElementById("fs-cookie-panel-about");
    var description = document.getElementById("fs-cookie-description");
    var subtabs = root.querySelectorAll(".fs-cookie-subtab");

    var descriptions = {
      necessary: "Required for core site functionality, security, and basic website operation.",
      performance: "Cookies used to improve user experience and support analytics service. This category helps us understand site usage and improve performance.",
      targeting: "Used to support advertising relevance, marketing measurement, and campaign attribution.",
      functionality: "Used to remember preferences and improve convenience features across your visits."
    };

    function readPrefs() {
      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    }

    function writePrefs(value) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
      } catch (e) {}
    }

    function setState(state) {
      root.setAttribute("data-state", state);
    }

    function setTab(name) {
      var declarationActive = name === "declaration";
      tabDeclaration.classList.toggle("is-active", declarationActive);
      tabAbout.classList.toggle("is-active", !declarationActive);
      panelDeclaration.classList.toggle("is-active", declarationActive);
      panelAbout.classList.toggle("is-active", !declarationActive);
    }

    function setSubtab(type) {
      subtabs.forEach(function (btn) {
        btn.classList.toggle("is-active", btn.getAttribute("data-type") === type);
      });
      description.textContent = descriptions[type] || descriptions.performance;
    }

    function expandDetails() {
      details.classList.remove("is-collapsed");
      toggleBtn.setAttribute("aria-expanded", "true");
      toggleLabel.textContent = "Hide details";
    }

    function collapseDetails() {
      details.classList.add("is-collapsed");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleLabel.textContent = "Show details";
    }

    function savePreferences(values) {
      var payload = {
        consented: true,
        necessary: true,
        performance: !!values.performance,
        targeting: !!values.targeting,
        functionality: !!values.functionality,
        updatedAt: new Date().toISOString()
      };

      writePrefs(payload);

      try {
        window.dispatchEvent(
          new CustomEvent("cookiePreferencesUpdated", {
            detail: payload
          })
        );
      } catch (e) {}

      setState("pill");
    }

    var saved = readPrefs();

    if (saved && saved.consented) {
      performance.checked = !!saved.performance;
      targeting.checked = !!saved.targeting;
      functionality.checked = !!saved.functionality;
      setState("pill");
    } else {
      performance.checked = true;
      targeting.checked = true;
      functionality.checked = true;
      setTab("declaration");
      setSubtab("performance");
      expandDetails();
      setState("panel");
    }

    pill.addEventListener("click", function () {
      setState("panel");
    });

    closeBtn.addEventListener("click", function () {
      setState("pill");
    });

    saveBtn.addEventListener("click", function () {
      savePreferences({
        performance: performance.checked,
        targeting: targeting.checked,
        functionality: functionality.checked
      });
    });

    declineBtn.addEventListener("click", function () {
      performance.checked = false;
      targeting.checked = false;
      functionality.checked = false;

      savePreferences({
        performance: false,
        targeting: false,
        functionality: false
      });
    });

    toggleBtn.addEventListener("click", function () {
      if (details.classList.contains("is-collapsed")) {
        expandDetails();
      } else {
        collapseDetails();
      }
    });

    tabDeclaration.addEventListener("click", function () {
      setTab("declaration");
    });

    tabAbout.addEventListener("click", function () {
      setTab("about");
    });

    subtabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setSubtab(btn.getAttribute("data-type"));
      });
    });
  }

  function boot() {
    injectStyles();
    injectHTML();
    initLogic();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

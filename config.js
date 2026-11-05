/*
 * Site configuration: the ONLY place that names another site.
 *
 * NEWCO_URL is the address of the Newco Studio site (its own repository,
 * newco-studio/newco-studio.github.io). Every link back to Newco Studio reads it
 * at load time (elements with data-ext="NEWCO_URL", optionally data-ext-path for
 * a page on that site, e.g. "contact.html?topic=estime"). When the Newco site
 * moves to its own domain, change this value and nothing else. Keep the
 * trailing slash.
 */
window.SITE_CONFIG = {
  NEWCO_URL: 'https://newco-studio.github.io/'
};

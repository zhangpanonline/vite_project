import { defineConfig } from 'cypress'
// https://docs.cypress.io/guides/references/configuration#Configuration-File
export default defineConfig({
  /**
   * [Global](https://docs.cypress.io/guides/references/configuration#Global)
   */
  // An optional array of client certificates
  clientCertificates: [],
  // Any values to be set as environment variables. eg: env: { FOO: 'bar' }
  env: {},
  // Whether to traverse shadow DOM boundaries and include elements within the shadow DOM in the results of query commands (e.g. cy.get()).
  includeShadowDom: false,
  // The number of tests for which snapshots and command data are kept in memory. Reduce this number if you are experiencing high memory consumption in your browser during a test run.
  numTestsKeptInMemory: 50,
  // Port used to host Cypress. Normally this is a randomly generated port.
  port: null,
  // 	The number of times that the application under test can redirect before erroring.
  redirectionLimit: 20,
  // The reporter used during cypress run.
  reporter: 'spec',
  // The reporter options used. Supported options depend on the reporter.
  // reporterOptions: null,
  // The number of times to retry a failing test. Can be configured to apply to cypress run or cypress open separately. See Test Retries for more information.
  retries: { "runMode": 0, "openMode": 0 },
  // Whether Cypress will watch and restart tests on test file changes.
  watchForFileChanges: true,

  /**
   * [Timeouts](https://docs.cypress.io/guides/references/configuration#Timeouts)
   */

  /**
   * [Folders / Files](https://docs.cypress.io/guides/references/configuration#Folders--Files)
   */
  //  Path to folder where videos will be saved during cypress run.
  videosFolder: 'cypress/videos',

  /**
   * [Screenshots](https://docs.cypress.io/guides/references/configuration#Screenshots)
   */
  // Whether Cypress will take a screenshot when a test fails during cypress run.
  screenshotOnRunFailure: true,
  // Path to folder where screenshots will be saved from cy.screenshot() command or after a test fails during cypress run.
  screenshotsFolder: 'cypress/screenshots',
  // Whether Cypress will trash assets within the downloadsFolder, screenshotsFolder, and videosFolder before tests run with cypress run.
  trashAssetsBeforeRuns: true,

  /**
   * [Videos](https://docs.cypress.io/guides/references/configuration#Videos)
   */

  /**
   * [Downloads](https://docs.cypress.io/guides/references/configuration#Downloads)
   */

  /**
   * [Browser](https://docs.cypress.io/guides/references/configuration#Browser)
   */
  // Whether to enable Chromium-based browser's Web Security for same-origin policy and insecure mixed content.
  chromeWebSecurity: true,
  // Enables you to override the default user agent the browser sends in all request headers. User agent values are typically used by servers to help identify the operating system, browser, and browser version. See User-Agent MDN Documentation for example user agent values.
  userAgent: null,

  /**
   * [Viewport](https://docs.cypress.io/guides/references/configuration#Viewport)
   */
  // Default height in pixels for the application under tests' viewport. (Override with cy.viewport() command)
  viewportHeight: 660,
  // Default width in pixels for the application under tests' viewport. (Override with cy.viewport() command)
  viewportWidth: 1000,

  /**
   * [Actionability](https://docs.cypress.io/guides/references/configuration#Actionability)
   */
  // The distance in pixels an element must exceed over time to be considered animating.
  animationDistanceThreshold: 5,
  // Whether to wait for elements to finish animating before executing commands.
  waitForAnimations: true,
  // Viewport position to which an element should be scrolled before executing commands. Can be 'center', 'top', 'bottom', 'nearest', or false. false disables scrolling.
  scrollBehavior: 'top',

  /**
   * [Experiments](https://docs.cypress.io/guides/references/configuration#Experiments)
   */

  /**
   * [e2e](https://docs.cypress.io/guides/references/configuration#e2e)
   */
  e2e: {
    // URL used as prefix for cy.visit() or cy.request() command's URL.
    baseUrl: 'http://localhost:4173',
    // Function in which node events can be registered and config can be modified. Takes the place of the (removed) pluginFile option. Please read the notes for examples on using this.
    // setupNodeEvents: null,
    // Path to file to load before spec files load. This file is compiled and bundled. (Pass false to disable)
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    // A String or Array of glob patterns of the test files to load.
      // *： 匹配单路径下的 0 个或 多个 字符串
      // **：和*一样，可以匹配路径中的 0个 或 多个，而且**可以匹配当前目录和子目录
    specPattern: 'src/**/*.spec.{js,ts,jsx,tsx}',
    // 	A String or Array of glob patterns used to ignore test files that would otherwise be shown in your list of tests. Please read the notes on using this.
    excludeSpecPattern: '*.hot-update.js',
    // 	Enables the "Run All Specs" UI feature, allowing the execution of multiple specs sequentially.
    experimentalRunAllSpecs: false,
    // Time, in milliseconds, to consider a test "slow" during cypress run. A slow test will display in orange text in the default reporter.
    slowTestThreshold: 10000,
    // 	Whether or not test isolation is enabled to ensure a clean browser context between tests.
    testIsolation: true,
  },

  /**
   * 	[component](https://docs.cypress.io/guides/references/configuration#component)
   */
  component: {
    // Required option used to configure the component testing dev server. Please read the notes for examples on using this.
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    // Function in which node events can be registered and config can be modified. Takes the place of the (removed) plugins file. Please read the notes for examples on using this.
    // setupNodeEvents: null,
    // Path to file to load before spec files load. This file is compiled and bundled. (Pass false to disable)
    supportFile: 'cypress/support/component.ts', // default: 'cypress/support/component.js'
    // A glob pattern String or Array of glob pattern Strings of the spec files to load.
    // !!! Note that any files found matching the e2e.specPattern value will be automatically excluded.
    specPattern: 'src/**/*.cy.{js,ts,jsx,tsx}',
    // A String or Array of glob patterns used to ignore spec files that would otherwise be shown in your list of specs. Please read the notes on using this.
    excludeSpecPattern: ['/snapshots/*', '/image_snapshots/*'],
    // Run all specs in a single tab, instead of creating a new tab per spec. This can improve run mode performance, but can impact spec isolation and reliability on large test suites. 
    // This experiment currently only applies to Component Testing.
    experimentalSingleTabRunMode: false,
    // 	Time, in milliseconds, to consider a test "slow" during cypress run. A slow test will display in orange text in the default reporter.
    slowTestThreshold: 250,
  },
})

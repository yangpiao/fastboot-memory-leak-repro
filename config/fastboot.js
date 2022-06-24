module.exports = function(environment) {
  return {
    buildSandboxGlobals(defaultGlobals) {
      return Object.assign({}, defaultGlobals, {
        appEnvironment: 'node',
        setInterval() {
          throw new Error('setInterval has been disabled in BPR');
        },
        clearInterval: function() {
          // noop in BPR
        },
        EMBER_DISABLE_AUTO_BOOT: true, // Adding sandbox property to support embroider build flow
      });
    }
  };
}

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['/node_modules/(?!monaco-editor)'],
  moduleNameMapper: {
    'monaco-editor': '<rootDir>/node_modules/monaco-editor/esm/vs/editor/editor.api.js',
  },
};

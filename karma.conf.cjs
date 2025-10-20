module.exports = function (config) {
  config.set({
    // === 🔧 Configuración base ===
    frameworks: ["jasmine"],
    files: [
      // todos tus test .spec.js
      { pattern: "tests/**/*.spec.js", watched: false },
    ],
    preprocessors: {
      "tests/**/*.spec.js": ["webpack"],
    },

    // === ⚙️ Configuración de Webpack ===
    webpack: {
      mode: "development",
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          },
          {
            // 👇 permite usar archivos .css (corrige el error Unexpected token)
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            // 👇 permite importar imágenes locales sin 404
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: "asset/resource",
          },
        ],
      },
      resolve: {
        extensions: [".js", ".jsx"],
      },
    },

    // === 🌐 Navegador y ejecución ===
    browsers: ["Chrome"],
    reporters: ["progress", "kjhtml"], // salida más ordenada
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,

    // === 🧪 Plugins usados ===
    plugins: [
      "karma-jasmine",
      "karma-chrome-launcher",
      "karma-webpack",
      "karma-jasmine-html-reporter",
    ],

    // === 📊 Reporte HTML de resultados ===
    jasmineHtmlReporter: {
      suppressAll: false,
      outputFile: "test-results.html",
    },
  });
};

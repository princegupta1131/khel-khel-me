const PROXY_CONFIG = [
    {
        context: [
            "/content-plugins",
            "/generic-editor",
            "/content-editor",
            "/action",
            "/content",
            "/api",
            "/assets"
        ],
        "target": "https://sunbirdsaas.com/",
        "secure": false,
        "logLevel": "debug",
        "changeOrigin": true
    }
  ]
  
  module.exports = PROXY_CONFIG;
  
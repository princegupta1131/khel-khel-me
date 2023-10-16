const PROXY_CONFIG = [
    {
        context: [
            "/action",
            "/content",
            "/api",
            "/assets",
            
        ],
        "target": "https://sunbirdsaas.com/",
        "secure": false,
        "logLevel": "debug",
        "changeOrigin": true
    },
    {
        context: [
            "/assets/public/content",
        ],
        "target": "https://sunbirdsaaspublic.blob.core.windows.net/content/content/",
        "secure": false,
        "logLevel": "debug",
        "changeOrigin": true
    }
  ]
  
  module.exports = PROXY_CONFIG;
  
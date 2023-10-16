const PROXY_CONFIG = [
    {
        context: [
            "/action",
            "/content",
            "/api",
            "/assets"
        ],
        "target": "https://staging.sunbirded.org/",
        "secure": false,
        "logLevel": "debug",
        "changeOrigin": true
    }
  ]
  
  module.exports = PROXY_CONFIG;
  
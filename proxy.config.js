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
        "target": "http://localhost:4200/",
        "secure": false,
        "logLevel": "debug",
        "changeOrigin": true
    }
]

module.exports = PROXY_CONFIG;
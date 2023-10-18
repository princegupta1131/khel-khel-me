const PROXY_CONFIG = [
    {
        context: ["/assets/content-player/assets/public/content"],
        "target": "https://sunbirdsaaspublic.blob.core.windows.net/content/content/",
        "secure": false,
        "changeOrigin": true,
        "logLevel": "debug",
        "pathRewrite": {
            "^/assets/content-player/assets/public/content": ""
        }
    },
    {
        context: ["/assets/public/content/*"],
        "target": "https://sunbirdsaaspublic.blob.core.windows.net/content/content/",
        "secure": false,
        "changeOrigin": true,
        "logLevel": "debug",
    },
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
]

module.exports = PROXY_CONFIG;

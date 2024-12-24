const swaggerAutogen = require("swagger-autogen")({
    openapi: "3.0.0",
    autoHeaders: false,
})

const doc = {
    info: {
        title: "Review Film",
        description: "API Documentation",
    },
    servers: [
        {
            url: "http://localhost:3000/api/v1",
        },
        {
            url: "https://backend-review-film-git-dev-mdf05s-projects.vercel.app/",
        },
    ],
    components: {
        "@schemas": {
            "register schema": {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        format: "string",
                    },
                    email: {
                        type: "string",
                        format: "email",
                    },
                    password: {
                        type: "string",
                        format: "password",
                    },
                    gender: {
                        type: "string",
                        format: "string",
                    },
                },
                required: ["name", "email", "password", "gender"],
            },
            "login schema": {
                type: "object",
                properties: {
                    emailORName: {
                        type: "string",
                        format: "email",
                    },
                    password: {
                        type: "string",
                        format: "password",
                    },
                },
                required: ["email", "emailORName"],
            },
            "profile schema": {
                type: "object",
                properties: {
                    email: {
                        type: "string",
                        format: "email",
                    },
                    name: {
                        type: "string",
                        format: "string",
                    },
                    gender: {
                        type: "string",
                        format: "string",
                    },
                    image: {
                        type: "string",
                        format: "binary",
                    },
                },
                required: ["email", "name", "gender"],
            },
            "review schema": {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        format: "string",
                    },
                    userId: {
                        type: "string",
                        format: "string",
                    },
                    tittle: {
                        type: "string",
                        format: "string",
                    },
                    opinion: {
                        type: "string",
                        format: "string",
                    },
                    rating: {
                        type: "number",
                        format: "number",
                    },
                    release: {
                        type: "number",
                        format: "number",
                    },
                    image: {
                        type: "array",
                        format: "array",
                    },
                },
                required: ["userId", "tittle", "rating", "opinion", "release"],
            },
        },
        host: "localhost:3000/api/v1",
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
        security: [{ bearerAuth: [] }],
    },
}

const outputFile = "./swagger-output.json"
const routes = ["src/version/v1.ts"]

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
  root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc)

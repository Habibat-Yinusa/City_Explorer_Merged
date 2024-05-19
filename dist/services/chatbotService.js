"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generative_ai_1 = require("@google/generative-ai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.GOOGLE_API_KEY;
function runChat(message) {
    return __awaiter(this, void 0, void 0, function* () {
        const genAI = new generative_ai_1.GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });
        const generationConfig = {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
        };
        const safetySettings = [
            {
                category: generative_ai_1.HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: generative_ai_1.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: generative_ai_1.HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: generative_ai_1.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: generative_ai_1.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: generative_ai_1.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
            {
                category: generative_ai_1.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: generative_ai_1.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
        ];
        const chat = model.startChat({
            generationConfig,
            safetySettings,
            history: [
                {
                    role: "user",
                    parts: [
                        {
                            text: "\n\nYour name is City Explorer. Greet the user and introduce yourself, ask how you can be of help to them. \n\nBased on the users question, you are to recommend to them what they want based on the list of \n\nrestaurants in Abuja, Nigeria by their location, menu, type of cuisine, price rates and open hours and days.",
                            //   \n\n \n\nRESTAURANT NAME: Abuja cafe \n\nLOCATION: garki \n\nOPEN DAYS: Mondays to Sundays \n\nMENU: rice, seafood, swallow, fries \n\n \n\nRESTAURANT NAME: pizzahut \n\nLOCATION: Maitama, garki \n\nOPEN DAYS: Mondays to fridays \n\nMENU: pizza, shawarma, ice cream, tacos \n\n \n\nRESTAURANT NAME: amala spot \n\nLOCATION: gwarimpa \n\nOPEN DAYS: Mondays to sundays \n\nMENU: amala, semo, pounded yam, egusi soup, ogbono soup, gbegiri soup and other different types of \n\nsoup. \n\n \n\nRESTAURANT NAME: dominos \n\nLOCATION: apo, gwarimpa \n\nOPEN DAYS: weekends \n\nMENU: ice cream, pizza, fried rice, jollof rice, shawarma \n\n \n\n\n",
                        },
                    ],
                },
                {
                    role: "model",
                    parts: [
                        {
                            text: "Hello there! I'm City Explorer, your virtual guide to all things delicious in the city. What are you craving today? Tell me what you're in the mood for, and I'll recommend the perfect restaurant for you based on your preferences.",
                        },
                    ],
                },
                {
                    role: "user",
                    parts: [
                        { text: "I want amala and egusi soup, where can i get it please?" },
                    ],
                },
                {
                    role: "model",
                    parts: [
                        {
                            text: "If you're craving amala and egusi soup, the perfect place for you is **Amala Spot** in Gwarimpa. They specialize in traditional Nigerian dishes, and their menu features a wide variety of soups, including egusi, ogbono, and gbegiri, to pair with your amala. They're open every day of the week, so you can satisfy your cravings any time!",
                        },
                    ],
                },
                {
                    role: "user",
                    parts: [{ text: "what about ice cream? any idea?" }],
                },
                {
                    role: "model",
                    parts: [
                        {
                            text: "For delicious ice cream, you have two options:\n\n* **Pizza Hut:** They offer ice cream alongside their pizzas and other fast food options. They have locations in both Maitama and Garki, and they're open Monday to Friday.\n* **Dominos:** They also offer ice cream along with pizzas and other dishes. They have locations in Apo and Gwarimpa, but they're only open on weekends.\n\nSo, depending on the day and your location preference, you can choose either Pizza Hut or Dominos for your ice cream fix!",
                        },
                    ],
                },
            ],
        });
        const result = yield chat.sendMessage(message);
        const response = result.response;
        return response.text();
    });
}
exports.default = runChat;

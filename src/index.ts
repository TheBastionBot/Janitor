import { Client } from "discord.js";

import greetings from "./modules/greetings";
import maintenance from "./modules/maintenance";


const Janitor = new Client();
Janitor.login(process.env.token);


Janitor.on("ready", greetings);
Janitor.on("message", maintenance)

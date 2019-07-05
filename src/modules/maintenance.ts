import { Message, Snowflake } from "discord.js";

let authorizedChannels: Snowflake[] = [
    "267022940967665664"
];

export default async (message: Message) => {
    if (message.author.bot) return;

    if (message.member && message.member.hasPermission("MANAGE_MESSAGES")) return;

    if (message.content.includes("http") && (message.content.includes("porn") || message.content.includes("sex") || message.content.includes("18+") || message.content.includes("nude") || message.content.includes("naked"))) {
        if (message.deletable) await message.delete().catch(() => {});
    }
    
    if (authorizedChannels.includes(message.channel.id)) {
        if (/^[#!~%]+[a-z0-9]+/.test(message.content)) {
            if (message.deletable) await message.delete().catch(() => {});

            let cleanupMessage = await message.channel.send(`Hey **${message.author.tag}**! Commands are disabled in this channel. Please go to <#268826070378217473> and use the \`#!\` prefix to use the commands.`).catch(() => {}) as Message;
            if (cleanupMessage) await cleanupMessage.delete(10000).catch(() => {});
        }
    }
};

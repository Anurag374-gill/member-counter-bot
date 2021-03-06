const mongoose = require('mongoose');
const { DISCORD_PREFIX } = process.env;

const TopicCounterCustomNumbers = mongoose.Schema({
    1: { type: String, default: '<a:1G:469275169190445056>' },
    2: { type: String, default: '<a:2G:469275085451034635>' },
    3: { type: String, default: '<a:3G:469275208684011550>' },
    4: { type: String, default: '<a:4G:469275195170095124>' },
    5: { type: String, default: '<a:5G:469282528088293377>' },
    6: { type: String, default: '<a:6G:469275153038049280>' },
    7: { type: String, default: '<a:7G:469275104933838858>' },
    8: { type: String, default: '<a:8G:469275116988137482>' },
    9: { type: String, default: '<a:9G:469275181135691777>' },
    0: { type: String, default: '<a:0G:469275067969306634>' }
}, { _id : false });

// I preserve this for reference
/*
    const channelNameCounter = mongoose.Schema({
        channelName: { type: String, require: true },
        type: { type: String, default: "members" },
        otherConfig: { type: Object }
    }, { _id : false });

    const TopicCounterChannel = mongoose.Schema({
        topic: { type: String },
        otherConfig: { type: Object },
    }, { _id : false });
*/

const GuildSchema = mongoose.Schema({
    guild_id: { type: String, require: true },
    premium: { type: Boolean, default: false },
    prefix: { type: String, default: DISCORD_PREFIX },
    lang: { type: String, default: "en_US" },
    allowedRoles: [{ type: String, default: [] }], //Allowed roles for administrative commands
    topicCounterChannels: { type: Map, default: new Map() },
    mainTopicCounter: { type: String, default: "Members: {COUNT}" }, //used in all channels that topicCounterChannel.topic is undefined
    topicCounterCustomNumbers: { type: TopicCounterCustomNumbers, default: TopicCounterCustomNumbers },
    channelNameCounters: { type: Map, default: new Map() },
});

module.exports = mongoose.model('guilds', GuildSchema);
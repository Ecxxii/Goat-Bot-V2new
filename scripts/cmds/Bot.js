module.exports = {
	config: {
			name: "sikshya",
			version: "1.0",
			author: "D_S",
			countDown: 5,
			role: 0,
			shortDescription: "",
			longDescription: "",
			category: "bot",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "babe") return message.reply("sorry i have a girlfriend 😈🤍");
if (event.body && event.body.toLowerCase() == "😂") return message.reply("makha xas ta pregnant vayis ki kya ho 🤔");
if (event.body && event.body.toLowerCase() == "😆") return message.reply("makha xas ta pregnant vayis ki kya ho 🤔");
if (event.body && event.body.toLowerCase() == "😊") return message.reply("ummahhhh babe 😘");
if (event.body && event.body.toLowerCase() == "bubu give") return message.reply("aaaja tala jhundya xa kha");
if (event.body && event.body.toLowerCase() == "muji") return message.reply("hajur muji🤣🤣 ");
if (event.body && event.body.toLowerCase() == "k gardai xau") return message.reply("Hagdai xu 😓");
	if (event.body && event.body.toLowerCase() == "good morning") return message.reply("good morning..🌄❤️‍🩹");
	if (event.body && event.body.toLowerCase() == "abhishek") return message.reply("hagdai xa 😝😝");
if (event.body && event.body.toLowerCase() == "lado") return message.reply("chus dim 💋😋");
if (event.body && event.body.toLowerCase() == "💋") return message.reply("sasss ganayo brush garyeera aaije😈");
if (event.body && event.body.toLowerCase() == "k xa") return message.reply("gf ra Paisa bahek sab xa 😭");
if (event.body && event.body.toLowerCase() == "🖕") return message.reply("mero chakk ma ghusardeu aau");
if (event.body && event.body.toLowerCase() == "🙄") return message.reply("yeta xu yeta her aando😈");
if (event.body && event.body.toLowerCase() == "bubu") return message.reply("aaije mero Khana 😥");
	if (event.body && event.body.toLowerCase() == "good night") return message.reply("good night 💤🌙");
if (event.body && event.body.toLowerCase() == "sut") return message.reply("tero budi patha sutdinxu😈🤍");
if (event.body && event.body.toLowerCase() == "bot") return message.reply("hjr babe 🤍");
	if (event.body && event.body.toLowerCase() == "hi") return message.reply("yes...🥳");
	if (event.body && event.body.toLowerCase() == "hello") return message.reply("◡̈⋆ʜᴇʟʟᴏ(●’◡’●)ﾉ");
	if (event.body && event.body.toLowerCase() == "how are you") return message.reply("fine and you..?");
 }
};

const playListContainerTag = document.getElementsByClassName("playListContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];

const tracks = [
    { trackId: "Jane Phaw Thu - Sai Htee Saing(MP3_160K).mp3", title: "Jane Phaw Thu - Sai Htee Saing"},
    { trackId: "music/SAI_HTEE_SAING(M4A_128K).mp3", title: "dkfjksslff - Sai Htee Saing"},
    { trackId: "Saing Htee Saing - Than Lwin Chaung Char(MP3_160K).mp3", title: "Than Lwin Chaung Char - Sai Htee Saing"},
    { trackId: "Sine Htee Siang - Ah Sarr Htoe Ma Ya Taet Sone Shone Hmu (cover)(MP3_160K).mp3", title: "Ah Sarr Htoe Ma Ya Taet Sone Shone Hmu - Sai Htee Saing"},
];

for (let i = 0; i < tracks.length; i++) {
    const trackTag = document.createElement("div");
    trackTag.addEventListener("click", () => {
        const trackId = tracks[i].trackId;
        audioTag.src = trackId;
        audioTag.play();
    });
    trackTag.classList.add("trackItem");
    const title = (i + 1).toString() + ". " + tracks[i].title;
    trackTag.textContent = title;
    playListContainerTag.append(trackTag);
    
};

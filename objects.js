var playlist = {"Dave East": "Rover 2.0 Remix"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName] : songTitle});
<<<<<<< HEAD
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return Object.assign(playlist, {["Alison"] : "Slowdive"});
=======
>>>>>>> 7ab5c97782148c14f6a7cb37d3134b200b513668
}
var playlist = {Kanye: 'Famous'}

function updatePlaylist(playlist,artistName,songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
fuction removeFromPlaylist(playlist,artistName) {
  delete playlist.artistName
  return playlist
}

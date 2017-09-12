var playlist = {Taylor: 'Famous'}

function updatePlaylist(playlist,artistName,songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName2]
  return playlist
}

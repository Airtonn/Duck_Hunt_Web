interface Prof {
  name: string;
  room: number;
}

function listProfs(profs: Prof[]) {
  const list = profs.map((p) => `<li>${p.name} - ${p.room}</li>`).join('');
  return `<ul>${list}</ul>`;
}

export default { listProfs };

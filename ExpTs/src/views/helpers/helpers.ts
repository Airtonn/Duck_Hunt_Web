interface Technology {
  name: string;
  type: string;
  poweredByNodejs: boolean;
}

function listTechnologies(technologies: Technology[]) {
  const list = technologies
    .filter((t) => t.poweredByNodejs)
    .map((t) => `<li>${t.name} - ${t.type}</li>`)
    .join('');
  return `<ul>${list}</ul>`;
}

export default { listTechnologies };

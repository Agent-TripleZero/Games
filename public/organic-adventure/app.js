const state = {
  inventory: ['Seed pouch', 'Lantern'],
  journal: 'You carry a steady heart and a seed pouch full of possibilities.'
};

const scenes = {
  start: {
    title: 'The Dawn Grove',
    text: 'A soft morning glow spills across the forest floor. Tiny spores drift in the air while the roots of ancient trees hum with quiet life. Your journey begins at a split path where the earth asks for a choice.',
    actions: [
      { label: 'Follow the glowing moss', next: 'moss' },
      { label: 'Cross the silver stream', next: 'stream' },
      { label: 'Climb the old cedar', next: 'cedar' }
    ]
  },
  moss: {
    title: 'The Moss Lantern',
    text: 'The moss brightens under your steps, revealing tiny mushrooms that twinkle like lanterns. A hidden trail leads deeper into the grove, and your seed pouch feels warmer.',
    actions: [
      { label: 'Collect a glowing spore', next: 'spore' },
      { label: 'Return to the path', next: 'start' }
    ]
  },
  stream: {
    title: 'The Silver Stream',
    text: 'Clear water threads through the roots like a ribbon of moonlight. A small stone bridge bends above the current, and the air smells of wild mint and rain.',
    actions: [
      { label: 'Gather river stones', next: 'stones' },
      { label: 'Cross the bridge', next: 'bridge' }
    ]
  },
  cedar: {
    title: 'The High Branches',
    text: 'You climb the cedar and find a nest of green feathers tucked between the branches. A breeze carries the scent of pine and a distant waterfall.',
    actions: [
      { label: 'Take the feather charm', next: 'feather' },
      { label: 'Descend to the grove', next: 'start' }
    ]
  },
  spore: {
    title: 'The Blooming Path',
    text: 'The glowing spore settles into your lantern and turns the forest gold. New flowers bloom at your feet, opening the way to a hidden clearing.',
    actions: [
      { label: 'Celebrate the discovery', next: 'start' }
    ]
  },
  stones: {
    title: 'The River Offering',
    text: 'The stones click softly in your pocket like a promise. When you toss one into the current, the water shimmers and reveals a path of bright reeds.',
    actions: [
      { label: 'Follow the reeds', next: 'start' }
    ]
  },
  bridge: {
    title: 'The Echo Bridge',
    text: 'The bridge hums beneath your feet as though it has been waiting for a traveler. At the far side, a circle of saplings stands ready to be tended.',
    actions: [
      { label: 'Plant a seed', next: 'start' }
    ]
  },
  feather: {
    title: 'The Wind-keeper',
    text: 'The feather charm glints in your hand like a tiny star. You feel the forest open around you, inviting one final choice before the sunset.',
    actions: [
      { label: 'Begin the final walk', next: 'start' }
    ]
  }
};

const titleEl = document.getElementById('scene-title');
const textEl = document.getElementById('scene-text');
const actionsEl = document.getElementById('actions');
const inventoryEl = document.getElementById('inventory');
const journalEl = document.getElementById('journal');

function renderInventory() {
  inventoryEl.innerHTML = state.inventory.map(item => `<li>${item}</li>`).join('');
}

function renderScene(sceneKey) {
  const scene = scenes[sceneKey];
  titleEl.textContent = scene.title;
  textEl.textContent = scene.text;
  actionsEl.innerHTML = '';
  scene.actions.forEach(action => {
    const button = document.createElement('button');
    button.textContent = action.label;
    button.addEventListener('click', () => {
      if (action.label.includes('Collect') || action.label.includes('Take') || action.label.includes('Plant')) {
        if (!state.inventory.includes(action.label.includes('Collect') ? 'Glowing spore' : action.label.includes('Take') ? 'Feather charm' : 'Seed')) {
          state.inventory.push(action.label.includes('Collect') ? 'Glowing spore' : action.label.includes('Take') ? 'Feather charm' : 'Seed');
          state.journal = 'The forest has gifted you a token of its trust.';
        }
      }
      if (action.label.includes('Gather')) {
        if (!state.inventory.includes('River stones')) {
          state.inventory.push('River stones');
          state.journal = 'The stream offered you a simple treasure.';
        }
      }
      renderInventory();
      journalEl.textContent = state.journal;
      renderScene(action.next);
    });
    actionsEl.appendChild(button);
  });
  renderInventory();
  journalEl.textContent = state.journal;
}

renderScene('start');

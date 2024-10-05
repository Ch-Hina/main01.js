const spookyItems = ['👻', '🎃', '🕸'];
({ item: spookyItems[3] } = { item: '💀' });

console.log(spookyItems);

//Answer B: ["👻", "🎃", "🕸", "💀"]
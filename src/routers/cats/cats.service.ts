export async function getCats() {
  await sleep(100);

  return [
    { id: 1, name: 'Whiskers' },
    { id: 2, name: 'Fluffy' },
    { id: 3, name: 'Shadow' },
    { id: 4, name: 'Paws' },
    { id: 5, name: 'Mittens' },
  ];
}

function sleep(time: number) {
  return new Promise((res) => setTimeout(res, time));
}

const makeTable = (rows, header) => {
  const columnLengths = rows[0].map((column, index) => {
    return Math.max(...rows.map(row => row[index].length));
  });

  const table = rows.map(row => {
    const stringyRow = row
      .map((column, index) => {
        return column.padEnd(columnLengths[index]);
      })
      .join(' | ');
    return `\`| ${stringyRow} |\``;
  });

  header = header ? ` ${header} ` : '';
  const rowLength = table[0].length - 4;

  table.unshift(`\`+${header}${'-'.repeat(rowLength - header.length)}+\``);
  table.push(`\`+${'-'.repeat(rowLength)}+\``);

  return table.join('\n');
};

makeTable(
  [
    ['username', 'real name', 'game'],
    ['happy420', 'Peppie', 'bdo'],
    ['happy420', 'Peppie', 'bdo'],
    ['Ricky420xxx', 'Rik de beer', 'hentai dungeon 3'],
    ['happy420', 'Peppie', 'bdo'],
    ['happy420', 'Peppie', 'bdo'],
    ['happy420', 'Peppie', 'bdo'],
    ['SidOfc', 'Sidney', 'VIM'],
    ['julicolo', 'Julio', 'league'],
  ],
  'peppie'
);

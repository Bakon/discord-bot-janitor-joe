export default class Base {
  static adminCheck(message) {
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      message.channel
        .send(
          `Sorry ${message.author.username}, but you don't have permission to do that!`
        )
        .then(message => {
          message.delete(5000);
        });
      return false;
    } else {
      return true;
    }
  }

  static makeTable(rows, header) {
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
  }
}

export class CellDistance {
    getDistance(cell1: string, cell2: string) {
        const rc1 = this.getRowAndColumn(cell1);
        const rc2 = this.getRowAndColumn(cell2);

        return {
            r: Math.abs(rc1.r - Math.abs(rc2.r)),
            c: Math.abs(rc1.c - Math.abs(rc2.c)),
        };
    }

    private getRowAndColumn(cell: string) {
        return {
            r: parseInt(cell.substring(1, 2)),
            c: parseInt(cell.substring(3, 4)),
        };
    }
}

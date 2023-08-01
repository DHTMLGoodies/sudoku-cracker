import { ICell } from "../../src/model/ModelInterfaces";

export class CellGenerator {
    static generateCells(numberOfCells: number, rangeSize = 9) {
        const cells: ICell[] = [];

        const candidates = Array.from({ length: rangeSize }, (value, index) => {
            return `${index + 1}`;
        });

        for (let i = 0; i < numberOfCells; i++) {
            cells.push({
                cell: `r1c${i + 1}`,
                value: undefined,
                candidates: candidates.slice(),
            });
        }

        return cells;
    }
}

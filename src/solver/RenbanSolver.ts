import { ICell } from "../model/ModelInterfaces";
import { Solver } from "./Solver";
import { ISolverStrategy } from "./SolverInterface";

export class RenbanSolver extends Solver implements ISolverStrategy {
    private numCells: number;

    constructor(numCells: number) {
        super();
        this.numCells = numCells;
    }

    solve(cells: ICell[]) {
        const values = cells.filter((cell) => !!cell.value).map((cell) => cell.value);

        if (values.length === 0) {
            return cells;
        }

        let min = Math.min(...values);
        let max = Math.max(...values);
        let maxDifference = cells.length - 1;

        cells.forEach((cell) => {
            const low = Math.max(1, max - maxDifference);
            const high = Math.min(this.numCells, min + maxDifference);

            cell.candidates = cell.candidates.filter((candidate) => {
                if (values.indexOf(candidate) >= 0) {
                    return false;
                }
                const hasCanidatesToRemove = candidate < low || candidate > high;

                if (hasCanidatesToRemove) {
                    this.dirty = true;
                }

                return !hasCanidatesToRemove;
            });

            if (cell.candidates.length === 1) {
                cell.value = cell.candidates[0];
            }
        });

        return cells;
    }
}

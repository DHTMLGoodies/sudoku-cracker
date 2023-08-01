import { ICell } from "../../src/model/ModelInterfaces";
import { Solver } from "./Solver";
import { ISolverStrategy } from "./SolverInterface";

export class StandardSolver extends Solver implements ISolverStrategy {
    solve(cells: ICell[]) {
        const filledValues = cells.filter((cell) => !!cell.value).map((cell) => cell.value);

        cells.forEach((cell) => {
            const len = cell.candidates.length;
            cell.candidates = cell.candidates.filter((value) => filledValues.indexOf(value) === -1);

            if (cell.candidates.length < len) {
                this.dirty = true;
            }

            if (cell.candidates.length === 1) {
                cell.value = cell.candidates[0];
            }
        });

        return cells;
    }
}

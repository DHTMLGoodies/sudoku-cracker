import { ICell } from "../../src/model/ModelInterfaces";
import { ISolverStrategy } from "./SolverInterface";

export class StandardSolver implements ISolverStrategy {
    solve(cells: ICell[]) {
        const filledValues = cells.filter((cell) => !!cell.value).map((cell) => cell.value);

        cells.forEach((cell) => {
            cell.candidates = cell.candidates.filter((value) => filledValues.indexOf(value) === -1);
        });

        return cells;
    }
}

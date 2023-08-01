import { ICell } from "../model/ModelInterfaces";

export interface ISolverStrategy {
    solve(cells: ICell[]): ICell[];
    dirty: boolean;
}

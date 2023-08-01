import { ICell } from "../model/ModelInterfaces";
import { ISolverStrategy } from "./SolverInterface";

export abstract class Solver implements ISolverStrategy {
    private _dirty: boolean = false;

    set dirty(dirty: boolean) {
        this._dirty = dirty;
    }

    get dirty() {
        return this._dirty;
    }

    abstract solve(cells: ICell[]): ICell[];
}

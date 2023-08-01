import { RenbanSolver } from "../../src/solver/RenbanSolver";
import { CellGenerator } from "../Helpers/CellGenerator";

describe("RenbanSolver", () => {
    it("should not remove candiates from 5 digit renban when given digit is 5", () => {
        // given
        const cells = CellGenerator.generateCells(5, 9);
        cells[0].value = 5;

        // when
        const solved = new RenbanSolver(9).solve(cells);

        // then
        expect(solved[1].candidates).toEqual([1, 2, 3, 4, 6, 7, 8, 9]);
    });

    it("should remove candiates from 5 digit renban when given digit is 3", () => {
        const cells = CellGenerator.generateCells(5, 9);
        cells[0].value = 3;

        // when
        const solved = new RenbanSolver(9).solve(cells);

        // then
        expect(solved[1].candidates).toEqual([1, 2, 4, 5, 6, 7]);
    });

    it("should remove candidates from 5 digit renban when given digits are 4 and 6", () => {
        const cells = CellGenerator.generateCells(5, 9);
        cells[0].value = 4;
        cells[1].value = 6;

        // when
        const solved = new RenbanSolver(9).solve(cells);

        // then
        expect(solved[2].candidates).toEqual([2, 3, 5, 7, 8]);
    });

    it("should set value when number of candiates is 1", () => {
        const cells = CellGenerator.generateCells(5, 9);
        cells[0].value = 4;
        cells[1].value = 6;
        cells[2].candidates = [2, 9];

        // when
        const solved = new RenbanSolver(9).solve(cells);

        // then
        expect(solved[2].value).toBe(2);
    });

    it("should be able to solve a renban when given digits are 2 and 6, and length is 5", () => {
        const cells = CellGenerator.generateCells(5, 9);
        cells[0].value = 2;
        cells[1].value = 6;
        cells[2].candidates = [1, 3, 9];
        cells[3].candidates = [1, 4, 8, 9];
        cells[4].candidates = [1, 5, 8, 9];

        const solver = new RenbanSolver(9);
        solver.solve(cells);
        let c = 0;

        while (solver.dirty && c++ < 100) {
            solver.dirty = false;
            solver.solve(cells);
        }

        // then
        expect(cells[2].value).toBe(3);
        expect(cells[3].value).toBe(4);
        expect(cells[4].value).toBe(5);
    });

    it("should solve some digits when given digits are 3 and 6, and length is 5", () => {
        const cells = CellGenerator.generateCells(5, 9);
        cells[0].value = 3;
        cells[1].value = 6;
        cells[3].candidates = [1, 4, 8, 9];
        cells[4].candidates = [1, 5, 8, 9];

        const solver = new RenbanSolver(9);
        solver.solve(cells);
        let c = 0;

        while (solver.dirty && c++ < 100) {
            solver.dirty = false;
            solver.solve(cells);
        }

        // then
        expect(cells[2].candidates).toEqual([2, 7]);
        expect(cells[3].value).toBe(4);
        expect(cells[4].value).toBe(5);
    });
});

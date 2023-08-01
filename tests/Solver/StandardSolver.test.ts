import { StandardSolver } from "../../src/solver/StandardSolver";
import { CellGenerator } from "../Helpers/CellGenerator";

describe("StandardSolver", () => {
    it("should generate cells for tests", () => {
        // given
        const cells = CellGenerator.generateCells(5);

        // then
        expect(cells[0].candidates.length).toBe(9);
        expect(cells[0].candidates).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("should remove filled number from candiates", () => {
        // given
        const cells = CellGenerator.generateCells(5);
        cells[0].value = 5;
        cells[1].value = 3;

        // when
        const solved = new StandardSolver().solve(cells);

        // then
        expect(solved[2].candidates).toEqual([1, 2, 4, 6, 7, 8, 9]);
    });

    it("should set value when theres only one candidate value left", () => {
        const cells = CellGenerator.generateCells(5, 5);
        cells[0].value = 1;
        cells[1].value = 2;
        cells[2].value = 3;
        cells[3].value = 4;

        // when
        const solved = new StandardSolver().solve(cells);

        // then
        expect(cells[4].value).toBe(5);
    });
});

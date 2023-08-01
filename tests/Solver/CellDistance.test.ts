import { CellDistance } from "../../src/solver/CellDistance";

describe("CellDistance", () => {
    it("should find distance between two cells", () => {
        // given
        const cell1 = "r1c1";
        const cell2 = "r3c4";

        // when
        const distance = new CellDistance().getDistance(cell1, cell2);

        // then
        expect(distance).toEqual({
            r: 2,
            c: 3,
        });
    });

    it("should find distance between two cells (negative)", () => {
        // given
        const cell1 = "r3c4";
        const cell2 = "r1c1";

        // when
        const distance = new CellDistance().getDistance(cell1, cell2);

        // then
        expect(distance).toEqual({
            r: 2,
            c: 3,
        });
    });
});

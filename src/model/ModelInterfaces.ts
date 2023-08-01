export interface IRuleNormalSudoku {
    type: "normal";
}

export interface IRuleKillerCage {
    type: "killercage";
    sum: number;
    cells: string[];
}

export interface IRuleRenban {
    type: "renban";
    cells: string[];
}

export interface IRuleGermanWhisper {
    type: "whisper";
    cells: string[];
}

export interface IRuleSum5 {
    type: "sum5";
    cell1: string;
    cell2: string;
}

export interface IRuleSum10 {
    type: "sum10";
    cell1: string;
    cell2: string;
}

export interface IRuleConsecutive {
    type: "consecutive";
    cell1: string;
    cell2: string;
}

export interface IRuleDouble {
    type: "double";
    cell1: string;
    cell2: string;
}

export interface IRuleKnightsMove {
    type: "knightsmove";
}

export interface IRuleKingsMove {
    type: "kingsmove";
}

export type SudokuRuleSets =
    | IRuleNormalSudoku
    | IRuleKillerCage
    | IRuleRenban
    | IRuleGermanWhisper
    | IRuleSum5
    | IRuleSum10
    | IRuleConsecutive
    | IRuleDouble
    | IRuleKnightsMove
    | IRuleKingsMove;

export interface ICell {
    cell: string;
    value: number | undefined;
    candidates: number[];
}
export interface ISudokuModel {
    gridSize: string;
    presets: {
        cell: string;
        value: number;
    }[];
    rules: SudokuRuleSets[];
}

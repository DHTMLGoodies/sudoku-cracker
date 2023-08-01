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

export interface IRule

export type SudokuRuleSets = IRuleNormalSudoku | IRuleKillerCage | IRuleRenaban | IRuleGermanWhisper;

export interface ISudokuModel {
    gridSize: string;
    presets: {
        cell: string;
        value: number;
    }[];
    rules: 

}

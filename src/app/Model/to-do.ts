export class ToDo {
    private _done: boolean;
    private _reminder: string;
  

    constructor(reminder: string) {
        this._reminder = reminder;
        this._done = false;
    }

	public get done(): boolean {
		return this._done;
	}

	public get reminder(): string {
		return this._reminder;
    }

    public set done(value: boolean) {
        this._done = value;
	}

	public set reminder(value: string) {
		this._reminder = value;
	}

}

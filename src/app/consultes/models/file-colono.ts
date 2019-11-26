export class FileColono {
  folderName: string;
  private _fitxersColono: File[] = [];


  constructor() {
    this.folderName = this.generateUniqueString();
  }

  private generateUniqueString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }


  get fitxersColono(): File[] {
    return this._fitxersColono;
  }

  set fitxersColono(value: File[]) {
    this._fitxersColono = value;
  }
}

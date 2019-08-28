/* tslint:disable */
/**
*/
export class CanvasRenderer {
  free(): void;
/**
* @returns {number} 
*/
  width(): number;
/**
* @returns {number} 
*/
  height(): number;
/**
* @returns {number} 
*/
  buffer(): number;
/**
* @returns {CanvasRenderer} 
*/
  static new(): CanvasRenderer;
/**
* @param {number} x 
* @param {number} y 
* @param {number} z 
*/
  setCameraTarget(x: number, y: number, z: number): void;
/**
* @param {number} x 
* @param {number} y 
* @param {number} z 
*/
  setCameraPosition(x: number, y: number, z: number): void;
/**
* @param {Uint8Array} data 
* @param {number} width 
* @param {number} height 
*/
  setTexture(data: Uint8Array, width: number, height: number): void;
/**
*/
  render(): void;
/**
* @param {string} x 
*/
  add_obj(x: string): void;
}

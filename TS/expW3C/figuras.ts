// Try creating a new interface using it below
interface iRectangle {
    height?: number;
    width?: number;
    area(): number;
}

class Rectangle implements iRectangle {
    private _height: number;
    private _width: number;
    constructor(height: number, width: number) {
        this._height = height;
        this._width = width;
    }

    area(): number {
        return this._height * this._width;
    }
}

class Square implements iRectangle {
    constructor(
        public height: number) {
        this.height = height;
    }

    area(): number {
        return this.height * this.height;
    }
}

let ret = new Rectangle(10, 20);
console.log(ret);
//console.log(ret._height);
console.log(ret.area());

let quad = new Square(10);
console.log(quad);
console.log(quad.area());

let cpf : number;
cpf = 11122233300;

function validarCPF(cpf : number | string) {
    console.log(cpf);
}

validarCPF(cpf);
console.log("Teste de Caio");

console.log(typeof(cpf));
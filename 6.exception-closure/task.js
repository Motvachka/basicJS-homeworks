function parseCount(number) {
	if (isNaN(Number.parseFloat(number))) throw new Error("Невалидное значение");
	return Number.parseFloat(number);
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.A = a;
		this.B = b;
		this.C = c;

		let condition = this.A + this.B < this.C || this.B + this.C < this.A || this.A + this.C < this.B;

		if (condition) throw new Error("Треугольник с такими сторонами не существует");
	}

	get perimeter() {
		return this.A + this.B + this.C;
	}

	get area() {
		let halfMeter = (this.A + this.B + this.C) / 2;
		let geron = Math.sqrt(halfMeter * (halfMeter - this.A) * (halfMeter - this.B) * (halfMeter - this.C));
		return parseFloat(geron.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		};
	}
}
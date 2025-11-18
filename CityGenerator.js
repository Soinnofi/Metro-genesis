class CityGenerator {
    constructor() {
        this.districts = [];
        this.riverPoints = [];
    }
    
    generateCity() {
        this.generateRiver();
        this.generateDistricts();
        this.generateKeyPoints();
        return this.getCityData();
    }
    
    generateRiver() {
        // Простая река из нескольких случайных точек
        this.riverPoints = [];
        let x = 0;
        let y = Math.random() * 300 + 150;
        
        for (let i = 0; i < 20; i++) {
            this.riverPoints.push({x, y});
            x += 40;
            y += (Math.random() - 0.5) * 100; // Случайные изгибы
        }
    }
    
    generateDistricts() {
        this.districts = [
            {name: "Центр", x: 400, y: 300, type: "center", population: 100000},
            {name: "Жилой", x: 200, y: 100, type: "residential", population: 80000},
            {name: "Промзона", x: 600, y: 500, type: "industrial", population: 20000}
        ];
    }
    
    generateKeyPoints() {
        this.keyPoints = [
            {name: "Центральный вокзал", x: 420, y: 280, type: "transport"},
            {name: "Аэропорт", x: 700, y: 100, type: "transport"},
            {name: "Стадион", x: 150, y: 400, type: "attraction"}
        ];
    }
    
    getCityData() {
        return {
            districts: this.districts,
            river: this.riverPoints,
            keyPoints: this.keyPoints
        };
    }
}
